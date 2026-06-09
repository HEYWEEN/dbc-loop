/* ============================================================
   第四幕 · 觉醒(终章 · 加长)
   读法B:与真我合一(温柔)。双钥匙:小鱼"开心最重要"+薯条"别想太多"。
   关键转折:她想通——舍不得小鱼反而把小鱼耗薄了;困在梦里的不止她。
            离开,是为了"放他们走"。
   告别轮:涛儿/黑檀/薯条/某坨史,逐一回收。
   爽服务于"走出大门(放手)"。基调:苦尽回甘·平衡。
   五结局:真(醒)/共谋(长梦)/沉沦(永困)/回炉(假和解,隐藏)/彩蛋(整活,隐藏)。
   ============================================================ */

export const act4 = {

  /* ---------- 谷底:挣扎、讨价还价 ---------- */
  a4_open: {
    figure: "真·月饼",
    bg: "match",
    text: "我蹲在那把椅子前面。\n椅子上是我,面前站着的,也是我。\n这一局我能背下来,这一局我什么都会——\n这一局,我哪儿也,不想去。",
    next: "a4_bargain",
  },
  a4_bargain: {
    figure: "真·月饼",
    text: "它没催我。\n它就站着,用我的眼睛,看着我。\n我冲它,小声说:\n「……就,再让我待一会儿。\n再一小会儿,就好。」\n它没动。\n它见过我说这句话。\n见过,亿万遍。",
    next: "a4_resist",
  },
  a4_resist: {
    text: "「开心最重要」「别想太多」——\n小鱼和薯条的话,在我脑子里打转。\n可我现在,一点都不想开心。\n我只想赖着。\n哪怕,赖在一场假的、重复的、谁都不记得的梦里。",
    next: "a4_realize1",
  },

  /* ---------- 想通最残忍的一件事 ---------- */
  a4_realize1: {
    text: "直到,我又看了一眼小鱼。\n那张,越来越淡的脸。\n我突然反应过来一件,一直不敢想的事——",
    effect: "stutter",
    next: "a4_realize2",
  },
  a4_realize2: {
    text: "她为什么会淡?\n不是因为她想走。\n是因为我,把她按在这儿,一遍,一遍,重演。\n我舍不得她,就把她,留成了一段,越放越旧的录像。\n我不是在,留住她。\n我是在,一点一点,把她,耗没。",
    effect: "glitch",
    next: "a4_realize3",
  },
  a4_realize3: {
    text: "某坨史、黑檀、薯条、涛儿——\n他们陪我,陪了亿万遍。\n陪着一个,死活不肯醒的我。\n他们,也累了吧。\n这场梦里,被困住的——\n从来,不止我一个。",
    next: "a4_recall",
  },

  /* ---------- 想起入坑那天:她从没"不够好"过 ---------- */
  a4_recall: {
    text: "我入坑那天,是为了啥来着?\n……是小鱼拉我进的坑。\n2024年,我俩谁也不会玩,被追得满地图乱窜,死得飞快,\n却笑得,最大声。",
    next: "a4_recall2",
  },
  a4_recall2: {
    text: "「饼饼,输啦!再来再来!」\n我们再来,又输,又笑。\n……原来,我早就拥有过了。\n那个我拼了亿万遍想换来的「够好了」——\n跟她一起笑的时候,\n我从来,没觉得自己,不够好。",
    effect: "stutter",
    next: "a4_decide",
  },

  /* ---------- 决定:放他们走 ---------- */
  a4_decide: {
    text: "我深吸一口气。\n……行吧。\n这一局,我不为破循环,也不为赢。\n我就好好地,陪你们,再玩最后一把。\n然后——\n我放你们走。",
    next: "a4_merge",
  },
  a4_merge: {
    figure: "真·月饼",
    text: "我朝它走过去。\n它没躲。\n我们的手,碰到一起的那一刻——\n没有疼,没有惊天动地。\n就像一个人,走了好远好远的路,\n终于,跟自己,站到了一块儿。",
    effect: "flash",
    next: "a4_awaken",
  },

  /* ---------- 菜神觉醒 + 最后一把 ---------- */
  a4_awaken: {
    text: "然后,我动了。\n不——是「我们」,动了。\n修机、遛鬼、翻窗、回头——\n身体比脑子快,脑子比心跳快。\n没有一帧是新的。\n可每一帧,我都游刃有余。",
    next: "a4_awaken2",
  },
  a4_awaken2: {
    text: "我不去赢。\n我只想趁这最后一把,\n好好地,跟他们每一个人,待一会儿。",
    next: "a4_bye_zhou1",
  },

  /* ---------- 告别 · 涛儿 ---------- */
  a4_bye_zhou1: {
    text: "涛儿在唱歌。跑调跑得,一如既往。\n我经过他,轻轻说了句——",
    next: "a4_bye_zhou2",
  },
  a4_bye_zhou2: {
    speaker: "月饼",
    text: "涛哥,谢谢你。\n这么多遍,谁不开心,你都第一个看得见。\n……这回,换我,看见你了。",
    next: "a4_bye_zhou3",
  },
  a4_bye_zhou3: {
    speaker: "涛儿",
    text: "哎哟饼今天咋这么客气!\n肉麻死了!\n🎵 我爱你有几分~",
    next: "a4_bye_heitan1",
  },

  /* ---------- 告别 · 黑檀(回收:上次她听不出我认真) ---------- */
  a4_bye_heitan1: {
    text: "黑檀牵着孽蜥,骂骂咧咧地,把它遛得满地图跑。\n「黑檀。」我喊她。\n「干嘛!专心!」",
    next: "a4_bye_heitan2",
  },
  a4_bye_heitan2: {
    text: "上次我认真求救,你没听出来。\n这次,我不求救了。\n这次我只想跟你说——\n谢谢你骂我,谢谢你带我,谢谢你给我起那个蠢外号。",
    next: "a4_bye_heitan3",
  },
  a4_bye_heitan3: {
    speaker: "月饼",
    text: "雷霆猪在此。\n……谢过了,黑檀。",
    next: "a4_bye_heitan4",
  },
  a4_bye_heitan4: {
    speaker: "黑檀",
    text: "(愣了一下)……你今天,是真有病。\n……不过,不客气。",
    next: "a4_bye_shu1",
  },

  /* ---------- 告别 · 薯条(回收:别想太多,凭感觉) ---------- */
  a4_bye_shu1: {
    text: "薯条远远地给我报点,懒洋洋的。\n这一把,我没算秒数,没数板子。\n我闭着眼,凭感觉,翻了那扇窗。\n稳稳地,过了。",
    next: "a4_bye_shu2",
  },
  a4_bye_shu2: {
    speaker: "月饼",
    text: "……薯条,我懂了。\n别想太多。",
    next: "a4_bye_shu3",
  },
  a4_bye_shu3: {
    speaker: "薯条",
    text: "(难得顿了一下)……行啊。\n可以。",
    next: "a4_bye_shu4",
  },
  a4_bye_shu4: {
    text: "这是他夸过我,唯一的一次。\n就两个字。\n够了。",
    next: "a4_bye_shi1",
  },

  /* ---------- 告别 · 某坨史(回收:他放下指挥 ↔ 她放下"够好了") ---------- */
  a4_bye_shi1: {
    text: "某坨史在最后一台机那儿,稳稳地修。\n他放下指挥,那么久了。\n我现在,好像,有点懂他了。\n「史爹。」\n「嗯?」",
    next: "a4_bye_shi2",
  },
  a4_bye_shi2: {
    speaker: "月饼",
    text: "我也……准备,放下了。",
    next: "a4_bye_shi3",
  },
  a4_bye_shi3: {
    speaker: "某坨史",
    text: "放下啥?",
    next: "a4_bye_shi4",
  },
  a4_bye_shi4: {
    speaker: "月饼",
    text: "放下「再练练,就够好了」,那个念想。",
    next: "a4_bye_shi5",
  },
  a4_bye_shi5: {
    speaker: "某坨史",
    text: "(慢悠悠)……没事没事。\n够不够好的,有啥要紧。",
    next: "a4_bye_shi6",
  },
  a4_bye_shi6: {
    text: "……是啊。\n有啥要紧呢。\n他这句「没事没事」,我听了二十多遍。\n直到这一遍,我才真的,听懂了。",
    effect: "stutter",
    next: "a4_gate",
  },

  /* ---------- 大门 + 告别小鱼 ---------- */
  a4_gate: {
    text: "最后一台机,响了。\n大门通电,红灯,变绿。\n那道光,从门缝里,漏了进来。\n外面是什么,我知道。\n是那个,没有他们的,早上。",
    next: "a4_xy1",
  },
  a4_xy1: {
    speaker: "小鱼",
    text: "(在我身边,亮晶晶地)饼饼!快走呀!\n这把我们赢啦!\n开心吧?",
    next: "a4_xy2",
  },
  a4_xy2: {
    text: "开心。\n是啊。\n我好久,好久,没这么开心过了。\n我转过头,看着她。\n这个最先开始消失的、最薄的、我最舍不得的,小鱼。",
    next: "a4_choice",
  },
  a4_choice: {
    text: "门开着。光,在等我。\n它(我)站在我身后,不催,不逼。\n该,我选了。",
    choices: [
      { text: "好好跟他们告别,然后走出去", next: "a4_true1" },
      { text: "舍不得。留下,跟它合一,守住这场梦", next: "a4_collude1" },
      { text: "走不动了。就当个被宠的菜鸡吧", next: "a4_sink1" },
      { text: "(平静地)我想,我已经放下了", next: "a4_recycle1" },
      { text: "(整活魂上身)你就说……破没破得了吧!", next: "a4_egg1", requires: { memory: "showoff" } },
    ],
  },

  /* ========== 真结局 · 醒(苦尽回甘) ========== */
  a4_true1: {
    speaker: "月饼",
    text: "(轻轻地)小鱼。\n谢谢你,当年拉我进坑。\n那几年……真的,特别开心。",
    next: "a4_true2",
  },
  a4_true2: {
    speaker: "小鱼",
    text: "(歪头笑)说啥傻话呢!\n快走啦,饼饼!\n……(声音轻下去)我们,会一直在的。",
    next: "a4_true3",
  },
  a4_true3: {
    text: "我知道她不在了。\n我知道这一切,都是假的。\n可我还是,把她说过的每一句话,原原本本,放进了心里。\n没有复读。\n这一次,我不怕忘——\n因为有些东西,记进心里,就不会丢了。",
    effect: "stutter",
    next: "a4_true4",
  },
  a4_true4: {
    text: "我转过身,迈进那道光里。\n身后,十点零四的红教堂,慢慢淡了。\n涛儿的跑调,黑檀的骂,某坨史的「没事没事」,小鱼的笑——\n一点,一点,远了。",
    next: "a4_true5",
  },
  a4_true5: {
    action: "blackout",
    card: "「 —— 早 上 —— 」",
    hold: 3000,
    next: "a4_true6",
  },
  a4_true6: {
    bg: "lobby",
    text: "早上。\n真正的早上。\n阳光刺得我睁不开眼。\n手机屏幕亮着,DBC 的群,安安静静。\n最上面那条消息,停在很久,很久以前。",
    next: "a4_true7",
  },
  a4_true7: {
    text: "我盯着那个群,看了很久。\n然后,我做了件,以前一直不敢做的事。\n我点开对话框,一个字一个字,打了一行:\n「在吗?好久没一起玩了。」\n发给了——小鱼。",
    next: "a4_true8",
  },
  a4_true8: {
    text: "消息,发出去了。\n旁边那三个点,跳了跳。\n……她在?\n手机震了一下。\n小鱼,回我了——",
    next: "a4_true8b",
  },
  a4_true8b: {
    speaker: "小鱼",
    text: "说啥呢饼饼~\n我这儿正玩着史爹新写的那个游戏呢。\n《循环内战》。\n你也玩啦?吓不吓人!",
    next: "a4_true8c",
  },
  a4_true8c: {
    text: "……史爹写的游戏。\n我盯着那行字,愣了好久。\n原来,我刚才哭得稀里哗啦的那一整夜——\n红教堂,循环,那个长着我脸的它——\n是史爹,一笔一笔,写给我们的。\n而小鱼,好端端的,正跟我,玩着同一个。",
    effect: "stutter",
    next: "a4_true8d",
  },
  a4_true8d: {
    text: "我抹了把脸,笑着,回了她:\n「玩啦。」\n「吓人。」\n「还有——他把我写得也太菜了吧!\n你就说,菜没菜下来吧!」",
    next: "a4_true_end",
  },
  a4_true_end: {
    action: "ending",
    card:
      "真 结 局<br><br>" +
      "<span style='font-size:1.2em;letter-spacing:8px;color:#d9b56b;'>醒</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“菜从来不是耻辱,也不是面具。<br>是她和他们,一起笑过的,证明。”" +
      "</span><br><br>" +
      "<span style='font-size:0.42em;letter-spacing:3px;color:#5a4a6e;'>" +
      "—— 全 剧 终 · 感谢游玩 ——" +
      "</span>",
  },

  /* ========== 共谋结局 · 长梦 ========== */
  a4_collude1: {
    text: "我没回头。\n我朝它走过去——\n不是为了告别。\n是为了,留下。",
    next: "a4_collude2",
  },
  a4_collude2: {
    text: "它是我,我是它。我们,严丝合缝地,合上了。\n现在,我什么都会。\n这一局,我说了算。\n我可以让某坨史永远不卸下指挥,让黑檀永远不上头,\n让小鱼——\n永远,不消失。",
    effect: "glitch",
    next: "a4_collude3",
  },
  a4_collude3: {
    text: "我成了这场梦的神。\n一场,关于死去的友谊的,完美的梦。\n大门?\n谁要走啊。\n外面那么冷。\n这里,永远是十点零四。\n永远,有他们。",
    next: "a4_collude_end",
  },
  a4_collude_end: {
    action: "ending",
    card:
      "共 谋 结 局<br><br>" +
      "<span style='font-size:1.2em;letter-spacing:8px;color:#c0494e;'>长 梦</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“她拥有了一切,<br>除了,一个真实的早上。”" +
      "</span><br><br>" +
      "<span style='font-size:0.42em;letter-spacing:3px;color:#5a4a6e;'>" +
      "—— 结 局 之 一 ——" +
      "</span>",
  },

  /* ========== 沉沦结局 · 永困 ========== */
  a4_sink1: {
    text: "我走不动了。\n我太累了。\n醒着,要面对的东西,太多太多了。\n而这里多好啊——\n有人捧着我,有人需要我「再练练」,有人,陪我笑。",
    next: "a4_sink2",
  },
  a4_sink2: {
    text: "我转过身,背对那道光。\n「……黑檀,这把,再带带我呗?」\n「行啊雷霆猪,看好了——」\n身后,那个长着我脸的东西,慢慢,低下了头。\n它没等到。\n这一次,也没等到。",
    effect: "stutter",
    next: "a4_sink_end",
  },
  a4_sink_end: {
    action: "ending",
    card:
      "沉 沦 结 局<br><br>" +
      "<span style='font-size:1.2em;letter-spacing:8px;color:#5a4a6e;'>地表最菜 · 永恒</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“晚上十点零四。<br>开黑房的麦克风,她按下又松开。”" +
      "</span><br><br>" +
      "<span style='font-size:0.42em;letter-spacing:3px;color:#5a4a6e;'>" +
      "—— 结 局 之 一 ——" +
      "</span>",
  },

  /* ========== 回炉结局 · 假和解(隐藏,最细思极恐) ========== */
  a4_recycle1: {
    text: "我冲它,笑了笑。\n「我想通了。我接受了。\n我就是地表最菜,这没什么。\n我跟自己,和解了。」\n它看着我。\n它,没动。\n……怎么不动?\n我不是,已经放下了吗?",
    next: "a4_recycle2",
  },
  a4_recycle2: {
    text: "我说的「和解」,跟我之前喊的「认输」——\n其实,一模一样。\n都是我蹲在原地,跟自己说「没事的」,\n然后,等着谁,来把我放走。\n只不过这一次,我连「等」,都觉得平静。\n我以为,这,就是醒了。",
    next: "a4_recycle3",
  },
  a4_recycle3: {
    action: "reset_loop",
    next: "a4_recycle4",
  },
  a4_recycle4: {
    bg: "lobby",
    text: "……晚上十点零四。\n涛儿清了清嗓子。\n我愣了一下,随即,释然地笑了:\n「啊,又一遍。没事的。我已经和解了嘛。」\n屏幕角落,那个数字,悄悄,又多跳了一个。\n我,没看见。",
    effect: "stutter",
    next: "a4_recycle_end",
  },
  a4_recycle_end: {
    action: "ending",
    card:
      "回 炉 结 局<br><br>" +
      "<span style='font-size:1.2em;letter-spacing:8px;color:#7a6a8e;'>假 和 解</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“最稳的牢笼,<br>是一句『我已经放下了』。”" +
      "</span><br><br>" +
      "<span style='font-size:0.42em;letter-spacing:3px;color:#5a4a6e;'>" +
      "—— 隐 藏 结 局 ——" +
      "</span>",
  },

  /* ========== 彩蛋结局 · 整活(隐藏,需"showoff") ========== */
  a4_egg1: {
    text: "光在等我,它在等我,全世界都等着我,做个感天动地的决定。\n可我——\n雷霆猪,饼爹,女王蜂全收集——\n我能让这一刻,这么严肃?",
    next: "a4_egg2",
  },
  a4_egg2: {
    speaker: "月饼",
    text: "(冲着那道光,梗着脖子)\n你就说……破……没破得了吧!",
    next: "a4_egg3",
  },
  a4_egg3: {
    text: "我也不知道我图啥。\n我对着那道光,使出了我这辈子,最骚的一套操作。\n虫海、香水、翻窗、回头——全特么招呼上去。\n那个长着我脸的它,在我身后,捂住了脸。\n它大概在想:这人,真是没救了。",
    effect: "glitch",
    next: "a4_egg4",
  },
  a4_egg4: {
    text: "然后,不知道是 bug 还是啥——\n那道光,「啵」地一下,灭了。\n红教堂安静下来。\n涛儿探头:「饼?你刚那是啥?」\n我叉着腰:「女王蜂全收集の奥义。」\n……反正这一局,我玩得是真开心。\n至于醒不醒的——\n你就说,开没开心吧!",
    next: "a4_egg_end",
  },
  a4_egg_end: {
    action: "ending",
    card:
      "彩 蛋 结 局<br><br>" +
      "<span style='font-size:1.2em;letter-spacing:8px;color:#f4d35e;'>女王蜂全收集の奥义</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“她没醒,也没沉。<br>她就是,玩得太开心,把循环给玩崩了。”" +
      "</span><br><br>" +
      "<span style='font-size:0.42em;letter-spacing:3px;color:#5a4a6e;'>" +
      "—— 隐 藏 结 局 · ? ——" +
      "</span>",
  },
};

export const ACT4_START = "a4_open";
