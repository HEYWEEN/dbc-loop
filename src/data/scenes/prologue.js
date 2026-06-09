/* ============================================================
   序章 · 第一局(Loop 0)
   叙事视角:月饼第一人称内心(无 speaker 的为旁白/心声)。
   目标:介绍五人 → 内战开局 → 教学 → 月饼被淘汰 → 醒来 Loop 1。
   文案守则(见 CLAUDE.md):第一遍好笑,第二遍发凉;线索只埋不点破。
   ============================================================ */

export const prologue = {

  /* ---------- 大厅:开黑房 ---------- */
  pro_open: {
    bg: "lobby",
    text: "晚上十点零四。\n开黑房的麦克风,我按下又松开,松开又按下。",
    next: "pro_open2",
  },
  pro_open2: {
    text: "我盯着自己的昵称看了快三分钟。\n今晚,这个连镜头都拖不利索的我,要被他们拉去打内战。\n他们管这叫——「饼爹特训」。",
    next: "pro_zhou_sing",
  },
  pro_zhou_sing: {
    speaker: "涛儿", bg: "lobby",
    text: "🎵 你问我爱你有多深~ 我爱你有几——\n哎!月饼上线了!欢迎欢迎,热烈欢迎。",
    next: "pro_zhou_id",
  },
  pro_zhou_id: {
    text: "涛儿。\n队里的活宝,也是队里的妈。\n唱歌从来不在调上,冷笑话一个接一个。可哪个队友掉了线、谁今天闷闷不乐,头一个私聊过去的,准是他。\n他啥都玩,女巫、时空之影、红夫人玩得贼溜。后来我才琢磨明白——他只玩女孩子角色。",
    next: "pro_heitan_in",
  },
  pro_heitan_in: {
    speaker: "黑檀",
    text: "雷霆猪,可算把你逮着了。今天不准跑,练。",
    next: "pro_thunderpig",
  },
  pro_thunderpig: {
    text: "「雷霆猪」这外号是黑檀起的。\n理由她说得理直气壮:「因为你有时候真的很像一只猪。」\n我一直想反驳,可惜……至今没找到能站得住脚的证据。",
    choices: [
      { text: "「我、我哪里像猪了。」", next: "pro_pig_deny", effects: { rel: { 黑檀: 1 } } },
      { text: "（心虚，假装在看天）", next: "pro_pig_dodge" },
    ],
  },
  pro_pig_deny: {
    speaker: "黑檀",
    text: "你看,急了。猪急了也是这个声儿。",
    next: "pro_heitan_id",
  },
  pro_pig_dodge: {
    speaker: "薯条",
    text: "（懒洋洋）默认了啊。",
    next: "pro_heitan_id",
  },
  pro_heitan_id: {
    text: "黑檀。\n队里嘴最毒、脑子最快的那个。\n修机算秒数,遛鬼算板子,谁的进度差几格,她门儿清。可她也最容易上头——被哪个监管者阴一下,能瞬间从「冷静分析」切成「老娘跟你拼了」,比她那只孽蜥还烈。\n她骂你是真骂,带你也是真带。雷霆猪这外号是她起的;可每次我被追,喊得最凶、教得最细的,也是她。",
    next: "pro_shu_in",
  },
  pro_shu_in: {
    speaker: "薯条",
    text: "行了行了,人齐了开打吧。我无所谓玩哪边,随便。",
    next: "pro_shu_id",
  },
  pro_shu_id: {
    text: "薯条。\n全队最佛的一个,口头禅是「随便」「都行」,说话永远像刚睡醒。\n可你别被他骗了——他玩前锋、弓箭手,最吃手感的ob位。一颗球能从大半个地图外,糊到监管者脸上。\n他从不复盘,从不纠结,全凭感觉。\n我特羡慕这点。我每一步都要想三遍;他「啪」地就出手了,还偏偏比我想三遍的还要准。\n……跟我,正好是两个极端。",
    next: "pro_shi_in",
  },
  pro_shi_in: {
    speaker: "某坨史",
    text: "（慢悠悠）别急别急。先把规矩跟饼说清楚。\n……没事没事,其实也没啥规矩。",
    next: "pro_shi_intro",
  },
  pro_shi_intro: {
    text: "某坨史——我们都叫他史爹。\n开服的老人,救人位的定海神针。蜘蛛、雕刻家随便玩玩,大局观好得吓人。\n听说他以前是队里的指挥,凶得很。可我入坑那会儿,他早懒成了一句「没事没事」走天下。",
    next: "pro_queenbee",
  },

  /* ---------- 女王蜂梗 ---------- */
  pro_queenbee: {
    speaker: "涛儿",
    text: "对了饼!你那个「女王蜂全收集」的成就,截图发群里了没?我还想看呢。",
    next: "pro_queenbee2",
  },
  pro_queenbee2: {
    text: "我本来,只是想抽一个女王蜂的金皮。\n结果一路歪、歪、歪,歪到了保底。\n顺手把人家全身上下抽了个齐全。系统很贴心地弹出一行字——\n「成就达成:女王蜂全收集」。",
    choices: [
      { text: "「那是……那是事故。」", next: "pro_queenbee_accident" },
      { text: "「讲究的就是一个缘分。」", next: "pro_queenbee_fate", effects: { rel: { 薯条: 1 } } },
    ],
  },
  pro_queenbee_accident: {
    speaker: "黑檀",
    text: "事故?保底歪了六百多块的事故?\n月饼你这头猪!你这哪是冲动消费,你这是给策划交学费。抽到了也没见你玩过!",
    next: "pro_xiaoyu_in",
  },
  pro_queenbee_fate: {
    speaker: "涛儿",
    text: "缘分!对对对,就是缘分!\n（小声）六百多块的缘分。",
    next: "pro_xiaoyu_in",
  },

  /* ---------- 小鱼客串 ---------- */
  pro_xiaoyu_in: {
    speaker: "小鱼", bg: "lobby",
    text: "饼饼——!!我来啦!\n哎哟我的雷霆猪,可想死我了!最近,有没有好好打游戏呀?",
    next: "pro_xiaoyu_id",
  },
  pro_xiaoyu_id: {
    text: "小鱼。\n和我同一年入的坑,队里唯一一个,比我还话痨的人。\n我俩并称「菜鸡二人组」——她玩小女孩,我玩昆虫学者。俩人凑一块,能把最简单的局,打成一场灾难。",
    next: "pro_xiaoyu_say",
  },
  pro_xiaoyu_say: {
    speaker: "小鱼",
    text: "听说你今天要被特训呀?别怕别怕!\n打游戏嘛,菜就菜呗,开心最重要!\n大不了,我陪你一起菜!",
    next: "pro_xiaoyu_bond",
  },
  pro_xiaoyu_bond: {
    text: "她总这么说。「开心最重要」。\n我学不会。我一上场就紧张,一紧张就结巴,一结巴就开始想:我是不是,又拖累大家了。\n小鱼不会。小鱼输了,还能笑出八颗牙。\n说实话,我有点羡慕她。",
    choices: [
      { text: "「你怎么……还是这么没心没肺。」", next: "pro_xiaoyu_r1" },
      { text: "「……嗯。我,我尽量。」", next: "pro_xiaoyu_r2" },
    ],
  },
  pro_xiaoyu_r1: {
    speaker: "小鱼",
    text: "没心没肺?那叫快乐,懂不懂!\n饼啊,你就是想太多。\n地表最菜怎么了?最菜的,那也是 DBC 的人!",
    next: "pro_xiaoyu_off",
  },
  pro_xiaoyu_r2: {
    speaker: "小鱼",
    text: "嘿嘿,这才对嘛!\n走啦走啦,别让他们等急了——今晚,可是难得凑齐了人。",
    next: "pro_xiaoyu_off",
  },
  pro_xiaoyu_off: {
    text: "小鱼现在淡游了,很少上线。\n忙工作,忙现实,忙那些……会把人从游戏里,一点一点拽走的东西。\n今晚她特地来了。\n我那会儿,真没多想。",
    next: "pro_xiaoyu_face",
  },
  pro_xiaoyu_face: {
    text: "说来也怪。\n小鱼这会儿明明就在我眼前,笑得跟朵花儿似的。\n可每次她一下线,我就……怎么也想不起来,她到底长什么样了。\n好像她这个人,只有「在线」的时候,才是清楚的。",
    effect: "stutter",
    next: "pro_match_start",
  },

  /* ---------- 分边开局 ---------- */
  pro_match_start: {
    speaker: "某坨史", bg: "lobby",
    text: "这局这么分:饼,你打求生者,你本命昆虫学者,熟。\n黑檀来当监管者,玩她的孽蜥。我、薯条、涛儿和你玩求生者。",
    next: "pro_match_start2",
  },
  pro_match_start2: {
    text: "黑檀玩孽蜥。\n那玩意儿在地图上跳起来的时候,像一场长了腿的蚂蝗。\n我咽了口口水。",
    choices: [
      { text: "「能、能换个温柔点的监管者吗。」", next: "pro_no_mercy" },
      { text: "「来吧,大不了多死几次。」", next: "pro_brave", effects: { rel: { 黑檀: 1 } } },
    ],
  },
  pro_no_mercy: {
    speaker: "黑檀",
    text: "温柔?你要温柔点的,那我玩什么,玩空气?\n站桩别动,我让你体验一下什么叫纯度孽蜥。",
    next: "pro_load",
  },
  pro_brave: {
    speaker: "某坨史",
    text: "这就对了。没事没事,死了也就死了,内战嘛。\n（顿了顿）真死了我去救你。",
    next: "pro_load",
  },
  pro_load: {
    bg: "dark",
    text: "加载中……",
    auto: 1500,
    next: "pro_load2",
  },
  pro_load2: {
    bg: "match",
    text: "红教堂。\n月光从彩窗里漏下来,把一排长椅的影子拉得老长。\n管风琴沉默地立在尽头,像一头睡着的兽。",
    next: "pro_load3",
  },
  pro_load3: {
    text: "我落在地图最角落的位置,面前一台密码机。\n远处,一声若有若无的心跳。\n……深呼吸,月饼。就当是平时排位,稳住。",
    next: "pro_decode_teach",
  },

  /* ---------- 教学:修机 ---------- */
  pro_decode_teach: {
    speaker: "涛儿", bg: "match",
    text: "饼,先修机!按住校准,出现白光的那一下点一下,别手抖。\n稳住,我们能赢——主要是我们能不能赢全看你别太菜。",
    choices: [
      { text: "深呼吸，认真校准", next: "pro_decode_good", effects: { unlock: "skill_decode", rel: { 涛儿: 1 } } },
      { text: "「校、校准是哪个键来着？」", next: "pro_decode_bad" },
    ],
  },
  pro_decode_good: {
    text: "白光一闪。我点下去。\n「叮」——校准成功。密码机进度跳了一大截。\n……原来我也能行?有点上头。",
    next: "pro_lookback_teach",
  },
  pro_decode_bad: {
    speaker: "黑檀",
    text: "就那个一直在你屏幕中间闪的键!月饼!\n——算了,你爆了我都不奇怪。心跳听见没?我来了。",
    effect: "stutter",
    next: "pro_lookback_teach",
  },

  /* ---------- 教学:回头看(经典翻车) ---------- */
  pro_lookback_teach: {
    speaker: "某坨史", bg: "match",
    text: "饼,回个头,看监管者到没到你屁股后面。\n往后拖一下视角,一眼就行。",
    choices: [
      { text: "试着回头", next: "pro_lookback_fail" },
      { text: "假装自己正在回头", next: "pro_lookback_fake" },
    ],
  },
  pro_lookback_fail: {
    text: "我按住右键,往后拖。\n镜头跟焊死了一样,纹丝不动。\n……我的手和我的脑子,今晚又一次,谁也不理谁。",
    next: "pro_lookback_after",
  },
  pro_lookback_fake: {
    text: "我嘴上「嗯嗯我在看我在看」,镜头一动没动。\n我对着正前方那面墙,看得无比认真。",
    next: "pro_lookback_after",
  },
  pro_lookback_after: {
    speaker: "黑檀",
    text: "你那也叫回头?你那叫脖子抽筋。\n行,别看了,我都站你脸上了你也看不见。",
    next: "pro_chase",
  },

  /* ---------- 追击 + 复读梗 ---------- */
  pro_chase: {
    bg: "match", effect: "shake",
    text: "心跳炸了。\n黑檀的孽蜥从板区那头跳过来,一跳,两跳,落地的瞬间地板都在抖。\n我撒腿就跑。",
    next: "pro_chase2",
  },
  pro_chase2: {
    speaker: "黑檀",
    text: "别慌!绕板!卡视野!往左边那个窗!",
    next: "pro_repeat",
  },
  pro_repeat: {
    speaker: "月饼",
    text: "别慌绕板卡视野往左边那个窗!\n别慌绕板卡视野往左边那个窗——!",
    effect: "glitch",
    next: "pro_repeat2",
  },
  pro_repeat2: {
    speaker: "涛儿",
    text: "……她又开始复读了。",
    next: "pro_repeat3",
  },
  pro_repeat3: {
    speaker: "某坨史",
    text: "没事没事。复读也是一种沟通。\n饼,你别念了,你光念不跑啊——",
    next: "pro_down",
  },
  pro_down: {
    bg: "match", effect: "flash",
    text: "我一边复读,一边精准地,跑进了死路。\n孽蜥在半空收起影子,那一刀又快又准。",
    next: "pro_down2",
  },
  pro_down2: {
    text: "我倒在冰冷的地砖上。\n视野一点点压低、变红。\n彩窗的光,从上方很远很远的地方照下来。",
    next: "pro_chair",
  },
  pro_chair: {
    text: "被拖上狂欢之椅的时候,我还在小声念:\n「往左边那个窗……往左边……」\n左边那个窗,在地图的另一头。我从来没跑到过那儿。",
    next: "pro_chair2",
  },
  pro_chair2: {
    speaker: "黑檀",
    text: "（语气软了一点）哎,别念了。\n……下把,我教你怎么真的跑到那个窗,行不行?",
    next: "pro_blackout",
  },

  /* ---------- 淘汰 → 黑屏 ---------- */
  pro_blackout: {
    action: "blackout",
    card: "「 你 被 淘 汰 了 」",
    hold: 2600,
    next: "pro_cover",
  },
  pro_cover: {
    action: "cover_reveal", // ★ 玩家亲眼看着封面:内战 → 循环内战
    hold: 4200,
    next: "pro_reset",
  },
  pro_reset: {
    action: "reset_loop",   // 计数 +1,计数器故障式揭示,封面从此中咒
    next: "pro_wake",
  },

  /* ---------- 醒来:Loop 1,第一道裂缝 ---------- */
  pro_wake: {
    bg: "lobby",
    text: "——晚上十点零四。\n开黑房的麦克风,我按下又松开。\n咦?",
    next: "pro_wake2",
  },
  pro_wake2: {
    speaker: "涛儿", bg: "lobby",
    text: "🎵 你问我爱你有多深~ 我爱你有几——\n哎!月饼上线了!欢迎欢迎,热烈欢迎。",
    next: "pro_wake3",
  },
  pro_wake3: {
    text: "……这句话。\n这句跑调的歌,这句「欢迎欢迎」。\n他刚才,是不是已经唱过一遍了?",
    effect: "stutter",
    next: "pro_wake4",
  },
  pro_wake4: {
    speaker: "月饼",
    text: "不对。\n……不对!不对!",
    effect: "glitch",
    next: "pro_wake5",
  },
  pro_wake5: {
    speaker: "黑檀",
    text: "雷霆猪,可算把你逮着了。今天不准跑,练。\n……你瞪着我干嘛?脸都白了。",
    next: "pro_end_card",
  },

  /* ---------- 进入第一幕 ---------- */
  pro_end_card: {
    action: "chapter",
    hold: 3600,
    card:
      "第 一 幕<br><br>" +
      "<span style='font-size:1.3em;letter-spacing:10px;color:#c0494e;'>否 认</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“他们都不记得。<br>只有我,记得上一局。”" +
      "</span>",
    next: "act1_panic",
  },
};

export const PROLOGUE_START = "pro_open";
