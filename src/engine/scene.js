/* ============================================================
   场景引擎 — 节点渲染 / 打字机 / 选项 / 过场
   数据驱动:吃一个 scenes 映射表,从某 id 开始一路 goto。
   ============================================================ */

import { state, applyEffects, advanceLoop, save } from "./state.js";
import { runEffect, fx } from "./effects.js";
import { audio } from "./audio.js";
import { charOf } from "../data/characters.js";

let scenes = {};
let el = {};

let typing = false;        // 正在逐字打印
let lineComplete = false;  // 当前行已显示完整
let typeTimer = null;
let pendingNext = null;    // 行完成后可前进的目标
let pendingChoices = null; // 行完成后、等点击才弹出的选项
let choicesOpen = false;   // 选项已弹出(必须先选)
let currentNode = null;
let lastAdvance = 0;       // 防误触连跳
let galleryMode = false;   // 结局一览模式:看完结局自动回到一览

export function setGalleryMode(on) { galleryMode = on; }

const SPEED_MS = { 1: 72, 2: 52, 3: 36, 4: 20, 5: 9 };
// 这些标点后多停一拍,给"气口"
const PAUSE_CHARS = "，。、！？…—：";

export function initScene(sceneMap, elements) {
  scenes = sceneMap;
  el = elements;

  // 只在 stage 上挂一个推进监听(dialogue 是它的子节点,避免重复触发)
  el.stage.addEventListener("click", onStageClick);
  document.addEventListener("keydown", (e) => {
    if ((e.code === "Space" || e.code === "Enter") && !el.dialogue.classList.contains("hidden")) {
      e.preventDefault();
      advance();
    }
  });
}

function onStageClick(e) {
  if (
    e.target.closest("#choices") ||
    e.target.closest("#controls") ||
    e.target.closest("#title") ||
    e.target.closest("#cardscreen")
  ) return;
  if (el.dialogue.classList.contains("hidden")) return;
  advance();
}

/** 统一推进:打字中→秒显;已完成→前进;选项中→忽略 */
function advance() {
  const now = Date.now();
  if (now - lastAdvance < 130) return;   // 去抖,防一次点击连跳两个节点
  lastAdvance = now;

  if (choicesOpen) return;
  if (typing) { finishTyping(); return; }
  if (pendingChoices) {                 // 字幕已读完,这一下才弹选项
    const c = pendingChoices; pendingChoices = null;
    el.continueIndicator.classList.add("hidden");
    renderChoices(c);
    return;
  }
  if (lineComplete && pendingNext) goto(pendingNext);
}

/** 跳转到某节点 */
export function goto(id) {
  const node = scenes[id];
  if (!node) { console.warn("缺失节点:", id); return; }

  clearTimeout(typeTimer);
  typing = false; lineComplete = false; pendingNext = null; pendingChoices = null;
  currentNode = node;
  state.currentScene = id;

  if (typeof node.onEnter === "function") node.onEnter(state);
  if (node.action) { runAction(node, id); return; }

  // 把计数器校准到剧情该有的循环数(旁白说"二十多遍",数字就跟上)
  if (typeof node.setLoop === "number") {
    state.loop = node.setLoop;
    el.loopCounter.classList.remove("hidden");
    el.loopNum.textContent = String(state.loop);
    save();
  }

  if (node.bg) fx.scene(node.bg);
  if (node.effect) runEffect(node.effect);

  renderSpeaker(node);
  startTyping(node);
}

/** 立绘 + 名牌。speaker=说话人(有名牌);figure="显形"立绘(无名牌,给沉默的"它") */
function renderSpeaker(node) {
  const isNarration = !node.speaker;
  el.dialogue.classList.toggle("narration", isNarration);

  // 名牌:只有说话人才有
  if (node.speaker) {
    el.nameplate.classList.remove("hidden");
    el.speakerName.textContent = node.speaker;
  } else {
    el.nameplate.classList.add("hidden");
  }

  // 立绘对象:说话人优先,其次 figure(显形)
  const who = node.speaker || node.figure || null;
  if (!who) {
    el.portrait.classList.add("hidden");
    el.portraitImg.classList.add("hidden");
    el.stage.style.removeProperty("--accent");
    return;
  }

  const c = charOf(who);
  el.stage.style.setProperty("--accent", c.color);
  el.portrait.style.setProperty("--accent", c.color);

  if (c.img) {
    // 立绘模式
    el.portrait.classList.add("hidden");
    el.portrait.dataset.who = "";
    if (el.portraitImg.dataset.who !== who) {
      el.portraitImg.src = encodeURI(c.img);
      el.portraitImg.dataset.who = who;
      el.portraitImg.classList.remove("enter"); void el.portraitImg.offsetWidth;
      el.portraitImg.classList.add("enter");
    }
    el.portraitImg.classList.remove("hidden");
  } else {
    // emoji 兜底
    el.portraitImg.classList.add("hidden");
    el.portraitImg.dataset.who = "";
    el.portraitEmoji.textContent = c.emoji;
    el.portraitMono.textContent = c.role || who;
    if (el.portrait.dataset.who !== who) {
      el.portrait.dataset.who = who;
      el.portrait.classList.remove("enter"); void el.portrait.offsetWidth;
      el.portrait.classList.add("enter");
    }
    el.portrait.classList.remove("hidden");
  }
}

/** 打字机 */
function startTyping(node) {
  el.dialogue.classList.remove("hidden");
  el.continueIndicator.classList.add("hidden");
  hideChoices();

  const text = node.text || "";
  el.dialogueText.textContent = "";
  typing = true; lineComplete = false; pendingNext = null;

  const delay = SPEED_MS[state.settings.speed] ?? 36;
  let i = 0;
  const cursor = document.createElement("span");
  cursor.className = "tw-cursor"; cursor.textContent = "▍";

  function step() {
    if (!typing) return;
    if (i < text.length) {
      const ch = text[i];
      el.dialogueText.textContent = text.slice(0, i + 1);
      el.dialogueText.appendChild(cursor);
      if (ch !== "\n" && ch !== " " && i % 3 === 0) audio.tick();
      i++;
      const pause = PAUSE_CHARS.includes(ch) ? delay * 5 : delay;
      typeTimer = setTimeout(step, pause);
    } else {
      typing = false;
      el.dialogueText.textContent = text;
      afterLine(node);
    }
  }
  step();
}

/** 点击跳过:立刻补全本行 */
function finishTyping() {
  clearTimeout(typeTimer);
  if (lineComplete) return;
  typing = false;
  el.dialogueText.textContent = currentNode?.text || "";
  afterLine(currentNode);
}

/** 一行说完:挂选项 or 显示"继续"。选项延迟一拍弹出,不抢字。 */
function afterLine(node) {
  if (!node || lineComplete) return;
  lineComplete = true;

  if (node.choices && node.choices.length) {
    pendingChoices = node.choices;                       // 不直接弹,等玩家点一下
    el.continueIndicator.classList.remove("hidden");     // 先给"继续"提示
  } else if (node.next) {
    pendingNext = node.next;
    el.continueIndicator.classList.remove("hidden");
    if (node.auto) {
      setTimeout(() => { if (pendingNext === node.next && lineComplete) goto(node.next); }, node.auto);
    }
  }
  save();
}

/** 选项:居中弹出,压暗背景,隐藏立绘,杜绝重叠 */
function renderChoices(choices) {
  choicesOpen = true;
  el.stage.classList.add("choosing");
  el.continueIndicator.classList.add("hidden");
  el.choices.innerHTML = "";

  choices.forEach((ch) => {
    if (ch.requires && !meetsRequire(ch.requires)) return;
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = ch.text;
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      applyEffects(ch.effects);
      hideChoices();
      goto(ch.next);
    });
    el.choices.appendChild(b);
  });
  el.choices.classList.remove("hidden");
}

function meetsRequire(req) {
  if (req.flag && !state.flags[req.flag]) return false;
  if (req.memory && !state.memory.includes(req.memory)) return false;
  return true;
}

function hideChoices() {
  choicesOpen = false;
  el.stage.classList.remove("choosing");
  el.choices.classList.add("hidden");
  el.choices.innerHTML = "";
}

/** 特殊动作节点 */
function runAction(node, id) {
  switch (node.action) {
    case "blackout":
      audio.thud();
      showCard(node.card || "", () => { if (node.next) goto(node.next); }, node.hold ?? 2200);
      break;

    case "reset_loop":
      advanceLoop();
      state.seenLoop = true;          // ★ 封面从此中咒,单向不可逆
      el.loopCounter.classList.remove("hidden");
      el.loopNum.textContent = String(state.loop);
      fx.counterGlitch(String(state.loop));
      document.title = "循环内战 · 地表最菜队";
      save();
      if (node.next) setTimeout(() => goto(node.next), 1100);
      break;

    case "cover_reveal": {
      // 玩家亲眼目睹封面变化:内战 → 循环内战
      audio.thud();
      const html =
        '<div class="cover-morph">' +
          '<span class="cm-old"><span class="cm-title">内 战</span><span class="cm-sub">第 一 局</span></span>' +
          '<span class="cm-new"><span class="cm-title">循环内战</span><span class="cm-sub">第 ∞ 局</span></span>' +
        '</div>';
      showCard(html, () => { if (node.next) goto(node.next); }, node.hold ?? 4200);
      break;
    }

    case "chapter":   // 章节卡:显示一段后继续(无淘汰音)
      showCard(node.card || "", () => { if (node.next) goto(node.next); }, node.hold ?? 2800);
      break;

    case "ending":
      state.seenEnding = true;        // ★ 通关 → 主界面解锁"消息提示"彩蛋
      save();
      if (galleryMode) {
        // 一览模式:展示结局卡若干秒后,自动回到结局一览
        showCard(node.card || "", () => goto("endsel"), node.hold ?? 7000);
      } else {
        showCard(node.card || "", null, 999999);
      }
      break;

    case "to_title":                  // 返回主界面(彩蛋看完)
      location.reload();
      break;

    default:
      if (node.next) goto(node.next);
  }
}

/** 黑屏章节卡 */
function showCard(text, done, hold) {
  const cs = el.cardscreen;
  el.cardText.innerHTML = text;
  cs.classList.remove("hidden");
  void cs.offsetWidth;
  cs.classList.add("show");
  el.dialogue.classList.add("hidden");
  // 藏掉立绘,否则卡片淡出的 0.9 秒里,上一个人的立绘会从背后透出来
  el.portrait.classList.add("hidden");
  el.portraitImg.classList.add("hidden");
  el.portrait.dataset.who = "";
  el.portraitImg.dataset.who = "";
  hideChoices();
  if (done) {
    setTimeout(() => {
      cs.classList.remove("show");
      setTimeout(() => { cs.classList.add("hidden"); done(); }, 900);
    }, hold);
  }
}

export { showCard };
