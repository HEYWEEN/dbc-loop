/* ============================================================
   音频 — 背景音乐(bgm.mp3 循环)+ 轻量打字/重置音效。
   背景音用真实 mp3(不再用合成嗡鸣)。受 settings.audio 控制。
   必须在用户手势后 start()(浏览器自动播放策略)。
   ============================================================ */

let bgm = null;            // HTMLAudioElement,循环播放
let ctx = null;            // WebAudio,只用于打字/重置的小音效
let enabled = true;
let started = false;

function ensureCtx() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  return ctx;
}

export const audio = {
  start() {
    if (started) return;
    started = true;

    // 背景音乐
    try {
      bgm = new Audio("src/audio/bgm.mp3");
      bgm.loop = true;
      bgm.volume = 0.3;
      bgm.preload = "auto";
      if (enabled) bgm.play().catch(() => { });
    } catch (e) { }

    // 小音效用的上下文
    ensureCtx();
    if (ctx && ctx.state === "suspended") ctx.resume();
  },

  setEnabled(on) {
    enabled = on;
    if (bgm) {
      if (on) bgm.play().catch(() => { });
      else bgm.pause();
    }
    if (ctx && ctx.state === "suspended" && on) ctx.resume();
  },

  isEnabled() { return enabled; },

  /** 打字机声:清脆的木质点击(明显能听到) */
  tick() {
    if (!ctx || !enabled || !started) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 2600;
    o.type = "triangle";
    o.frequency.value = 620 + Math.random() * 160;
    g.gain.setValueAtTime(0.0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.13, ctx.currentTime + 0.002);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.055);
    o.connect(g).connect(lp).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.07);
  },

  /** 低沉的"心跳/重置"音 */
  thud() {
    if (!ctx || !enabled || !started) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(90, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(38, ctx.currentTime + 0.4);
    g.gain.setValueAtTime(0.4, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    o.connect(g).connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.65);
  },
};
