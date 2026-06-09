/* ============================================================
   第一幕 · 否认(Loop 1 → Loop 2)
   主题:月饼想证明"我们在循环",每条证据都被"你本来就这样"消解。
        全队只有小鱼不把她当犯病——她离真相只差一层窗户纸,又每次笑着滑开。
        (最薄的残响,反而最接近真相)
   文风:月饼=00后菜鸡的真实碎碎念。短句、自嘲、网感。
        禁散文、禁排比、禁金句。
   节奏:小说密度——让场景呼吸,不赶。
   ============================================================ */

export const act1 = {

  /* ---------- Loop 1:大厅,徒劳的说服 ---------- */
  act1_panic: {
    speaker: "月饼", bg: "lobby",
    text: "你们、你们听我说!\n这一局……这一局,我们已经打过一遍了!",
    next: "act1_p2",
  },
  act1_p2: {
    speaker: "黑檀",
    text: "打过了?车都还没发呢。\n你是不是梦还没醒,就被我从被窝里薅出来了。",
    next: "act1_p3",
  },
  act1_p3: {
    text: "「时间循环」四个字,堵在我喉咙口,怎么都囫囵不出来。\n一着急,舌头就开始打结。",
    choices: [
      { text: "深呼吸,从头慢慢说", next: "act1_calm" },
      { text: "别解释了,直接预言", next: "act1_predict1" },
    ],
  },
  act1_calm: {
    speaker: "月饼",
    text: "我们……我们会输。\n黑檀玩孽蜥,我被挂上椅子,然后一黑屏,就又回到这个十点零四——",
    next: "act1_calm2",
  },
  act1_calm2: {
    speaker: "某坨史",
    text: "(慢悠悠)没事没事,输了再来嘛,内战不寒碜。\n你今天……是压力有点大?",
    next: "act1_calm3",
  },
  act1_calm3: {
    text: "他那张脸上,明明白白写着四个字:\n这孩子,没睡好。\n...嗯?是四个字吗,算了,不想了。",
    next: "act1_predict1",
  },

  /* ---------- 预言全中,却全被消解 ---------- */
  act1_predict1: {
    speaker: "月饼",
    text: "不信是吧!那我说给你们听——\n涛儿!你,现在,马上,要唱『你问我爱你有多深』!",
    next: "act1_predict1b",
  },
  act1_predict1b: {
    speaker: "涛儿",
    text: "🎵 你问我爱你有多深~ 我爱你有几——\n……欸?饼你咋知道?",
    effect: "stutter",
    next: "act1_predict1c",
  },
  act1_predict1c: {
    text: "成了!他真唱了!\n我激动得差点从椅子上蹦起来——你看,我没疯!",
    next: "act1_predict1d",
  },
  act1_predict1d: {
    speaker: "黑檀",
    text: "……月饼。他每天进车都唱这句。\n上周唱,昨天唱,刚才也唱。\n这有啥稀奇的。",
    next: "act1_predict1e",
  },
  act1_predict1e: {
    text: "……对哦。\n「不对」两个字刚冒到嘴边,又被我自己,咽了回去。",
    next: "act1_xy1",
  },

  /* ---------- 全场只有小鱼,不把她当犯病 ---------- */
  act1_xy1: {
    speaker: "小鱼",
    text: "诶诶等会儿!(凑过来)\n饼饼,你说你「打过一遍了」?\n那……那你说说,接下来会发生啥?我想听!",
    next: "act1_xy2",
  },
  act1_xy2: {
    text: "全场,就小鱼一个人,眼睛亮晶晶地等我往下说。\n她不是哄我。是真的好奇。\n我心里那根快沉底的稻草,被她一把,捞了起来。",
    choices: [
      { text: "抓住这根稻草,认真讲", next: "act1_xy3" },
      { text: "(怕又被当犯病)摆摆手,算了", next: "act1_xy3b" },
    ],
  },
  act1_xy3: {
    speaker: "月饼",
    text: "接、接下来,某坨史会说「没事没事」,\n黑檀会叫我「雷霆猪」,\n然后……然后就该分边了。",
    next: "act1_predict2",
  },
  act1_xy3b: {
    text: "话到嘴边,我又怂了。\n万一这次又全中,又被他们一句「你本来就这样」给打回来呢?\n我摆了摆手:「……算了,当我没说。」\n小鱼「啊」了一声,挺失望。",
    next: "act1_resolve",
  },
  act1_predict2: {
    speaker: "某坨史",
    text: "(慢悠悠)没事没事。\n那这局,还按老样子分?",
    next: "act1_predict2b",
  },
  act1_predict2b: {
    speaker: "黑檀",
    text: "雷霆猪,你今天是真有点不对劲啊。\n脸都白了。",
    next: "act1_predict2c",
  },
  act1_predict2c: {
    text: "全中。一个字都没差。\n可你看——某坨史本来就把「没事没事」挂嘴边,黑檀本来就爱叫我雷霆猪。\n我嘴里的每一个「未来」,都是他们的日常。\n这玩意儿,根本算不上证据。",
    next: "act1_xy4",
  },
  act1_xy4: {
    speaker: "小鱼",
    text: "(啪啪鼓掌)哇——!饼饼你成精了!\n你是不是,偷看了我们的剧本呀?",
    next: "act1_xy5",
  },
  act1_xy5: {
    text: "偷看剧本。\n小鱼这话,是顺口一句玩笑,说完她自己就咯咯笑开了,转头去逗涛儿。",
    effect: "stutter",
    next: "act1_resolve",
  },

  /* ---------- 否认的内核 ---------- */
  act1_resolve: {
    text: "我说不清。\n我掏出来的每一条「证据」,都会被一句「你本来就这样」,轻轻给堵回来。\n……也对哦。\n我本来,就这样。",
    next: "act1_resolve2",
  },
  act1_resolve2: {
    text: "可我知道啊。\n这一局,我是真的、真的经历过。\n就是没人信。\n到最后,连我自己,都开始怀疑——是不是,我脑子真有点毛病。",
    next: "act1_resolve3",
  },
  act1_resolve3: {
    speaker: "某坨史",
    text: "行了行了,别愣神。\n这把还你打求生者。放轻松啊,饼——没事的。",
    next: "act1_match_in",
  },

  /* ---------- 红教堂:手不抖了 ---------- */
  act1_match_in: {
    bg: "dark",
    text: "加载中……",
    auto: 1500,
    next: "act1_match2",
  },
  act1_match2: {
    bg: "match",
    text: "红教堂。\n还是那台机,还是那片月光,连地上的影子,都落在原来的位置。\n可我手按上去那一下——\n咦。没那么抖了。",
    next: "act1_decode",
  },
  act1_decode: {
    text: "白光一闪,我下意识点了下去。\n叮。\n一次都没崩。\n身体好像,比脑子先记住了点什么。",
    onEnter: (s) => { if (!s.memory.includes("skill_decode")) s.memory.push("skill_decode"); },
    next: "act1_chase",
  },

  /* ---------- 追击:遛鬼 + 一字不差的喊话 ---------- */
  act1_chase: {
    bg: "match", effect: "shake",
    text: "心跳炸了。\n孽蜥从板区那头跳过来,一跳,两跳,落地的瞬间,地板都在抖。\n我撒腿就跑——\n但这次,我没有原地复读。",
    next: "act1_chase2",
  },
  act1_chase2: {
    speaker: "黑檀",
    text: "别慌!绕板!卡视野!往左边那个窗!",
    next: "act1_deja",
  },
  act1_deja: {
    text: "「绕板、卡视野、左边那个窗」。\n这句话,黑檀上一局,也是这么喊的。\n一个字,都没差。\n连她在哪儿换气,都一样。",
    effect: "glitch",
    next: "act1_kite",
  },
  act1_kite: {
    text: "可这一次,我没愣住。\n左边那个窗,我知道它在哪。",
    choices: [
      { text: "提前砸板,赌一把", next: "act1_kite_early" },
      { text: "稳住,等他跳起来再翻窗", next: "act1_kite_good", effects: { rel: { 黑檀: 1 }, unlock: "skill_kite" } },
    ],
  },
  act1_kite_early: {
    speaker: "黑檀",
    text: "诶你别提前砸啊——!\n……行吧,砸空了。\n不过比上次强。上次你连板,都摸不着。",
    next: "act1_kite_after",
  },
  act1_kite_good: {
    text: "我压住手,等。\n孽蜥在半空收影子的那一刹那——\n翻窗!\n他扑了个空。我从窗那头,溜了出去。",
    next: "act1_kite_praise",
  },
  act1_kite_praise: {
    speaker: "黑檀",
    text: "……哟?\n雷霆猪,你今天吃对药了?\n这一窗,有点东西啊。",
    next: "act1_kite_after",
  },
  act1_kite_after: {
    text: "我居然……溜掉了?\n心里「咚」地一下,差点笑出声。\n我好像,真的在变好那么一点点。\n就在这个时候——我看见了那把椅子。",
    next: "act1_save",
  },

  /* ---------- 救人,还是死了 ---------- */
  act1_save: {
    bg: "match",
    text: "某坨史被挂上了狂欢之椅,在地图的另一头。\n上一局这个点,我早死透了,根本没看见他。\n可这一次——我跑得动,我看得见。",
    choices: [
      { text: "去救!哪怕送", next: "act1_save_go", effects: { rel: { 某坨史: 1 } } },
      { text: "忍住,先把机修完", next: "act1_save_machine" },
    ],
  },
  act1_save_go: {
    text: "我头也不回地冲过去。\n手刚伸向椅子,孽蜥从天而降。\n那一刀,把我和某坨史,一起钉在了地上。",
    effect: "flash",
    next: "act1_save_chair",
  },
  act1_save_chair: {
    speaker: "某坨史",
    text: "(倒在地上,轻轻笑)……你这傻饼。\n谁让你来送的。\n没事没事……下把,我教你怎么救,才不亏。",
    next: "act1_death",
  },
  act1_save_machine: {
    text: "我咬着牙,逼自己转过身,把最后几格,修完。\n身后,传来椅子升起的声音。\n……对不起。\n我连头,都不敢回。",
    next: "act1_save_machine2",
  },
  act1_save_machine2: {
    speaker: "某坨史",
    text: "(淘汰前)没事……没事的,饼。\n这把,你修机修得对。\n那边危险,别回来管我——往大门跑,快走。",
    effect: "stutter",
    next: "act1_death",
  },

  /* ---------- 淘汰 → Loop 2 ---------- */
  act1_death: {
    action: "blackout",
    card: "「 你 被 淘 汰 了 」",
    hold: 2400,
    next: "act1_reset2",
  },
  act1_reset2: {
    action: "reset_loop",
    next: "act1_wake2",
  },

  /* ---------- Loop 2:她跟着念出了台词 ---------- */
  act1_wake2: {
    bg: "lobby",
    text: "黑屏。\n然后——晚上十点零四。\n又是这个数字。又是这间开黑房。",
    next: "act1_wake2b",
  },
  act1_wake2b: {
    speaker: "涛儿", bg: "lobby",
    text: "🎵 你问我爱你有多深~ 我爱你有几——",
    next: "act1_wake2c",
  },
  act1_wake2c: {
    speaker: "月饼",
    text: "(没忍住,跟着哼出了声)……我爱你有几分。",
    effect: "glitch",
    next: "act1_wake2d",
  },
  act1_wake2d: {
    text: "我跟他,一个字都没差。\n这次,不是我复读他了。\n是我,比他先念出来的。",
    next: "act1_xy6",
  },
  act1_xy6: {
    speaker: "小鱼",
    text: "(歪着头)咦?饼饼你今天……\n怎么跟我们这么默契呀?\n跟提前对过词儿,似的。",
    next: "act1_xy7",
  },
  act1_xy7: {
    text: "又是小鱼。\n又是她,凑得离那层窗户纸最近。\n可她说完,就咯咯笑开了,转头去逗涛儿。\n没人接住她那句话。\n包括我。",
    effect: "stutter",
    next: "act1_turn",
  },

  /* ---------- 否认 → 利用 ---------- */
  act1_turn: {
    text: "涛儿还在唱。\n某坨史马上要说「没事没事」。\n黑檀马上要叫我「雷霆猪」。\n这一局的每一句话,我都背得出来了。",
    next: "act1_turn2",
  },
  act1_turn2: {
    text: "行吧。\n反正没人信我,反正我怎么折腾,都得回到这个十点零四。\n那……行吧。",
    next: "act1_turn3",
  },
  act1_turn3: {
    speaker: "月饼",
    text: "(声音轻得,只有我自己听见)\n这一局,我闭着眼都背得下来。\n那我倒要看看——\n能把它,玩出什么花来。",
    next: "act1_end_card",
  },

  /* ---------- 进入第二幕 ---------- */
  act1_end_card: {
    action: "chapter",
    hold: 3800,
    card:
      "第 二 幕<br><br>" +
      "<span style='font-size:1.3em;letter-spacing:10px;color:#d9b56b;'>利 用</span><br><br>" +
      "<span style='font-size:0.6em;letter-spacing:4px;color:#7a6a8e;'>" +
      "“既然逃不掉,<br>那就把这一局,玩到死为止。”" +
      "</span>",
    next: "act2_open",
  },
};

export const ACT1_START = "act1_panic";
