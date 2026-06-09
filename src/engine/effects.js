/* ============================================================
   恐怖 / 氛围特效 — 作用于 #stage 与若干 DOM
   这些是心理恐怖的"穿帮裂缝":卡顿、故障、计数器跳错。
   ============================================================ */

const stage = () => document.getElementById("stage");

function pulse(cls, ms) {
  const el = stage();
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;          // 强制重排,允许同名动画重触发
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), ms);
}

export const fx = {
  glitch:  () => pulse("fx-glitch", 480),    // RGB 错位抖动
  stutter: () => pulse("fx-stutter", 200),   // 画面卡顿一帧
  shake:   () => pulse("fx-shake", 520),
  flash:   () => pulse("fx-flash", 320),

  /** 背景换景:'lobby' | 'match' | 'dark' */
  scene(name) {
    const bg = document.getElementById("bg");
    if (!bg) return;
    bg.className = "";
    if (name === "match") bg.classList.add("scene-match");
    else if (name === "dark") bg.classList.add("scene-dark");
  },

  /** 计数器故障:短暂闪过一个"错误"的数字 */
  counterGlitch(realText) {
    const wrap = document.getElementById("loop-counter");
    const num = document.getElementById("loop-num");
    if (!wrap || !num) return;
    const original = num.textContent;
    wrap.classList.add("flicker");
    const garbage = ["7", "13", "0", "∞", "404", "—", realText ?? "?"];
    let i = 0;
    const t = setInterval(() => {
      num.textContent = garbage[i % garbage.length];
      i++;
    }, 90);
    setTimeout(() => {
      clearInterval(t);
      num.textContent = realText ?? original;
      wrap.classList.remove("flicker");
    }, 720);
  },
};

const dispatch = {
  glitch: fx.glitch, stutter: fx.stutter, shake: fx.shake, flash: fx.flash,
  // 计数器当面跳错(不改 loop,只闪一串"不该有"的数字)
  counter: () => fx.counterGlitch(document.getElementById("loop-num")?.textContent),
};

/** 由场景数据的 effect 字段触发 */
export function runEffect(name) {
  if (name && dispatch[name]) dispatch[name]();
}
