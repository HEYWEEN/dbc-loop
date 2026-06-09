/* ============================================================
   全局状态 — 循环计数 / 记忆(持久) / 羁绊值 / flags / 设置
   跨循环只保留 memory(月饼学到的东西)与 loop;每局进度清空。
   ============================================================ */

const SAVE_KEY = "dbc_loop_save_v1";

const DEFAULT_STATE = {
  loop: 0,                                  // 当前循环数(序章为 0,不显示)
  seenLoop: false,                          // ★ 是否已经历过第一次循环(封面单向变化)
  seenEnding: false,                        // ★ 是否已通关(主界面解锁"消息提示"彩蛋)
  memory: [],                               // 跨循环持久:学到的操作 / 解锁的真相
  rel: { 某坨史: 0, 黑檀: 0, 薯条: 0, 涛儿: 0 }, // 羁绊值
  flags: {},                                // 本局临时标记(重置时清)
  settings: { speed: 1, audio: true },      // 文字速度 1-5(默认最慢)/ 声音开关
  currentScene: null,                       // 存档点
};

export const state = structuredClone(DEFAULT_STATE);

/** 应用一条节点的 effects(羁绊 / 解锁 / 置位) */
export function applyEffects(effects) {
  if (!effects) return;
  if (effects.rel) {
    for (const [name, delta] of Object.entries(effects.rel)) {
      if (name in state.rel) state.rel[name] += delta;
    }
  }
  if (effects.unlock) {
    for (const key of [].concat(effects.unlock)) {
      if (!state.memory.includes(key)) state.memory.push(key);
    }
  }
  if (effects.setFlag) {
    Object.assign(state.flags, effects.setFlag);
  }
}

export function remembers(key) { return state.memory.includes(key); }

/** 一次循环结束 → 计数 +1,清空本局 flags(但 memory 留存) */
export function advanceLoop() {
  state.loop += 1;
  state.flags = {};
}

export function save() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {}
}

export function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    Object.assign(state, structuredClone(DEFAULT_STATE), JSON.parse(raw));
    return true;
  } catch (e) { return false; }
}

export function hasSave() {
  try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
}

export function resetAll() {
  Object.assign(state, structuredClone(DEFAULT_STATE));
  try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
}

/** 新开一局:清空进度,但保留"已见过循环"(封面单向变化)与设置 */
export function startNewGame() {
  const keepSeen = state.seenLoop;
  const keepEnding = state.seenEnding;
  const keepSettings = { ...state.settings };
  Object.assign(state, structuredClone(DEFAULT_STATE));
  state.seenLoop = keepSeen;
  state.seenEnding = keepEnding;
  state.settings = keepSettings;
  save();
}
