/* ============================================================
   彩蛋 · DBC 群(通关后,主界面"消息提示"点开)
   第四面墙:这一整个故事,是史爹写给大家的游戏;大家都好端端的。
   看完 → 返回主界面。
   ============================================================ */

export const coda = {

  coda1: {
    bg: "lobby",
    text: "(点开那条消息)\nDBC 群,(99+)。\n你通关之后,这个群,一直亮着。",
    next: "coda2",
  },
  coda2: {
    speaker: "某坨史",
    text: "《循环内战》写完了。\n你们谁先玩的?",
    next: "coda3",
  },
  coda3: {
    speaker: "黑檀",
    text: "史爹你又整这些花活。\n还专门让月饼那个手残在游戏里学回头——\n你坏不坏。",
    next: "coda4",
  },
  coda4: {
    speaker: "涛儿",
    text: "我哭了呜呜呜呜呜\n史爹你是不是,偷偷观察我们好几年了",
    next: "coda5",
  },
  coda5: {
    speaker: "薯条",
    text: "还行。\n凭感觉过的。",
    next: "coda6",
  },
  coda6: {
    speaker: "小鱼",
    text: "饼饼通关啦?\n有没有,哭鼻子呀~",
    next: "coda7",
  },
  coda7: {
    speaker: "月饼",
    text: "……你们,是不是把我,写得太菜了。\n还有那个雷霆猪,到底谁起的外号!",
    next: "coda8",
  },
  coda8: {
    speaker: "黑檀",
    text: "我起的。\n怎么,不服?\n你就说——菜没菜下来吧。(乱套公式这一块)",
    next: "coda9",
  },
  coda9: {
    text: "群里,笑成一片。\n窗外,天气很好。\n……大家都在。\n挺好的,真的。",
    effect: "stutter",
    next: "coda_card",
  },
  coda_card: {
    action: "chapter",
    hold: 4500,
    card:
      "<span style='color:#d9b56b;'>谢谢你,陪饼爹,走完这一程。</span><br><br>" +
      "<span style='font-size:0.55em;letter-spacing:4px;color:#7a6a8e;'>" +
      "—— 真 · 全 剧 终 ——" +
      "</span>",
    next: "coda_done",
  },
  coda_done: {
    action: "to_title",
  },

  /* ---------- 结局一览(通关后,主界面"结局一览"按钮进入) ---------- */
  endsel: {
    bg: "dark",
    text: "「 结 局 一 览 」\n你想,重温哪一个?",
    choices: [
      { text: "真结局 · 醒", next: "a4_true1" },
      { text: "共谋 · 长梦", next: "a4_collude1" },
      { text: "沉沦 · 永恒", next: "a4_sink1" },
      { text: "回炉 · 假和解", next: "a4_recycle1" },
      { text: "彩蛋 · 整活", next: "a4_egg1" },
      { text: "(返回主界面)", next: "endsel_back" },
    ],
  },
  endsel_back: {
    action: "to_title",
  },
};

export const CODA_START = "coda1";
