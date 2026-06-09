/* ============================================================
   角色立绘 / 配色数据 — 对照 人物设定.md
   暂用 emoji + 主题色占位,后续可换真立绘(只改 emoji→img)。
   ============================================================ */

export const characters = {
  月饼:   { color: "#f4d35e", emoji: "🥮", mono: "饼", role: "你",            img: "src/figures/yuebing.png" },
  某坨史: { color: "#7a93b8", emoji: "💩", mono: "史", role: "INFJ · 救人位",  img: "src/figures/shi.png" },
  黑檀:   { color: "#b8454a", emoji: "🐴", mono: "檀", role: "INTP · 修机/辅助", img: "src/figures/heitan.png" },
  薯条:   { color: "#e0a458", emoji: "🍟", mono: "薯", role: "ISFP · ob位",    img: "src/figures/shutiao.png" },
  涛儿:   { color: "#5fae89", emoji: "🍑", mono: "涛", role: "ISFJ · 全能",    img: "src/figures/zhoutao.png" },
  小鱼:   { color: "#6fb3d2", emoji: "🐟", mono: "鱼", role: "ENFP · 客串",    img: "src/figures/xiaoyu.png" },
  // BOSS:戴着月饼脸的监管者(大秘密怪物;具体出场名后续再定)
  "真·月饼": { color: "#8e2b30", emoji: "🥮", mono: "？", role: "",            img: "src/figures/boss.png" },
  // 特殊"角色":循环本身的低语 / 系统(无图,纯文字最瘆人)
  "？？？": { color: "#5a4a6e", emoji: "🜃", mono: "？", role: "" },
};

export function charOf(name) {
  return characters[name] || { color: "#d9b56b", emoji: "", mono: "", role: "" };
}
