/* ============================================================
   入口 — 标题页 / 设置 / 启动场景引擎
   ============================================================ */

import { state, load, hasSave, save, startNewGame } from "./engine/state.js";
import { initScene, goto, setGalleryMode } from "./engine/scene.js";
import { audio } from "./engine/audio.js";
import { prologue, PROLOGUE_START } from "./data/scenes/prologue.js";
import { act1 } from "./data/scenes/act1.js";
import { act2 } from "./data/scenes/act2.js";
import { interlude } from "./data/scenes/interlude.js";
import { act3 } from "./data/scenes/act3.js";
import { act4 } from "./data/scenes/act4.js";
import { coda } from "./data/scenes/coda.js";
import { characters } from "./data/characters.js";

// 所有场景汇总(以后新增的幕在这里 spread 进来)
const SCENES = {
  ...prologue,
  ...act1,
  ...act2,
  ...interlude,
  ...act3,
  ...act4,
  ...coda,
};

const $ = (id) => document.getElementById(id);

const el = {
  stage: $("stage"),
  dialogue: $("dialogue"),
  dialogueText: $("dialogue-text"),
  nameplate: $("nameplate"),
  speakerName: $("speaker-name"),
  continueIndicator: $("continue-indicator"),
  choices: $("choices"),
  portrait: $("portrait"),
  portraitImg: $("portrait-img"),
  portraitEmoji: $("portrait-emoji"),
  portraitMono: $("portrait-mono"),
  loopCounter: $("loop-counter"),
  loopNum: $("loop-num"),
  controls: $("controls"),
  cardscreen: $("cardscreen"),
  cardText: $("card-text"),
};

function boot() {
  initScene(SCENES, el);
  load();              // 读取持久状态:seenLoop / 设置 / 存档点
  renderCover();       // 据 seenLoop 决定封面:初次"内战",循环后"循环内战"
  wireSettings();
  wireTitle();
  preloadFigures();    // 标题页就在后台预下载立绘,消除首次出场延迟
}

/** 预加载所有角色立绘(后台静默下载,用到时已缓存) */
function preloadFigures() {
  for (const k in characters) {
    const src = characters[k].img;
    if (src) { const im = new Image(); im.src = encodeURI(src); }
  }
}

/** 封面单向变化:只有经历过循环,才暴露"循环"二字 */
function renderCover() {
  if (!state.seenLoop) return;
  const title = $("title");
  title.classList.add("cursed");
  $("t-main").textContent = "循环内战";
  const num = $("t-num");
  num.textContent = "∞";
  num.classList.add("inf");
  $("start-btn").textContent = "再次进入循环";
  document.title = "循环内战 · 地表最菜队";
}

function wireTitle() {
  const title = $("title");
  const startBtn = $("start-btn");
  const continueBtn = $("continue-btn");

  if (hasSave() && state.currentScene) continueBtn.classList.remove("hidden");

  const enter = (fromSave) => {
    audio.start();                       // 用户手势 → 启动音频
    setGalleryMode(false);               // 正常游玩,关掉一览模式
    title.classList.add("fade-out");
    el.controls.classList.remove("hidden");
    setTimeout(() => {
      title.classList.add("hidden");
      if (fromSave && state.currentScene) {
        if (state.loop > 0) {
          el.loopCounter.classList.remove("hidden");
          el.loopNum.textContent = String(state.loop);
        }
        if (state.seenLoop) document.title = "循环内战 · 地表最菜队";
        goto(state.currentScene);
      } else {
        startNewGame();                  // 新开:清进度,但封面保持已揭示
        goto(PROLOGUE_START);
      }
    }, 1000);
  };

  startBtn.addEventListener("click", () => enter(false));
  continueBtn.addEventListener("click", () => enter(true));

  // 通关后:解锁主界面"消息提示"彩蛋
  const msgBtn = $("title-msg");
  const galleryBtn = $("gallery-btn");
  if (state.seenEnding) {
    msgBtn.classList.remove("hidden");
    galleryBtn.classList.remove("hidden");
  }
  msgBtn.addEventListener("click", () => {
    audio.start();
    setGalleryMode(false);
    title.classList.add("fade-out");
    el.controls.classList.remove("hidden");
    setTimeout(() => { title.classList.add("hidden"); goto("coda1"); }, 1000);
  });
  galleryBtn.addEventListener("click", () => {
    audio.start();
    setGalleryMode(true);               // 一览模式:看完结局自动回一览
    title.classList.add("fade-out");
    el.controls.classList.remove("hidden");
    setTimeout(() => { title.classList.add("hidden"); goto("endsel"); }, 1000);
  });
}

function wireSettings() {
  const speed = $("speed");
  const audioBtn = $("audio-toggle");

  speed.value = String(state.settings.speed);
  speed.addEventListener("input", () => {
    state.settings.speed = Number(speed.value);
    save();
  });

  const paint = () => {
    audioBtn.textContent = state.settings.audio ? "♪ 声音:开" : "♪ 声音:关";
  };
  paint();
  audioBtn.addEventListener("click", () => {
    state.settings.audio = !state.settings.audio;
    audio.setEnabled(state.settings.audio);
    paint();
    save();
  });
}

// ES module 是 defer 的,执行时 DOMContentLoaded 可能已触发 → 直接判断 readyState
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
