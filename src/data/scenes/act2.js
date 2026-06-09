/* ============================================================
   第二幕 · 利用(她拿循环当玩具,也尝到唯一的甜头)
   表层越来越爽(整活/秀操作),底下越来越凉(残响露馅)。
   小鱼:循环"把她还给了月饼"——暖。可她一碰"游戏之外"就卡壳、复读——凉。
        最薄的残响先露馅,也成了月饼"舍不得醒"的私心。
   文风:月饼=00后菜鸡的真实碎碎念。短句、自嘲、网感。禁散文/排比/金句。
   ============================================================ */

export const act2 = {

  /* ---------- 摸熟了,上头 ---------- */
  act2_open: {
    bg: "lobby",
    setLoop: 3,
    text: "第三遍。\n或者第四遍。我懒得数了。\n反正这一局每一步,我都门儿清。",
    next: "act2_open2",
  },
  act2_open2: {
    text: "涛儿要唱歌,我提前一秒捂耳朵。\n某坨史要说没事没事,我嘴比他还快。\n头一回,这种「全知」的感觉,不吓人了。\n它有点上头。",
    next: "act2_match",
  },
  act2_match: {
    bg: "match",
    text: "红教堂。还是那台机。\n但这把我不慌。\n监管者从哪冒出来、几秒到、往哪儿追,我比他自己都清楚。",
    next: "act2_flashy",
  },

  /* ---------- 整活:把某坨史那句「别浪」原封塞回去 ---------- */
  act2_flashy: {
    speaker: "某坨史",
    text: "饼,稳着修,别乱跑。这把我们慢慢来。",
    next: "act2_flashy_choice",
  },
  act2_flashy_choice: {
    text: "他不知道。但我知道。",
    choices: [
      { text: "听话,稳住", next: "act2_steady" },
      { text: "不。这把我要秀", next: "act2_show", effects: { rel: { 某坨史: 1 }, unlock: "showoff" } },
    ],
  },
  act2_steady: {
    text: "我老老实实修机。\n……可手痒。\n明明知道下一秒会发生什么,却忍着不动,比被追还难受。\n算了。就秀这一次。",
    next: "act2_show",
  },
  act2_show: {
    text: "我知道孽蜥下一跳落哪。\n我知道那块板,差半秒砸下去,正好糊他一脸。\n某坨史不知道,所以他喊——",
    next: "act2_show2",
  },
  act2_show2: {
    speaker: "某坨史",
    text: "别去那块板!那是死路!\n——饼!你别浪!",
    next: "act2_show3",
  },
  act2_show3: {
    text: "我浪了。\n我就站在那块「死路」板前面,心里数拍子。\n三、二、一——\n板砸下去,孽蜥正好跳进来。\n硬控。稳稳的。",
    effect: "flash",
    next: "act2_show4",
  },
  act2_show4: {
    speaker: "某坨史",
    text: "……",
    next: "act2_show5",
  },
  act2_show5: {
    speaker: "月饼",
    text: "你就说...活没活下来吧!",
    next: "act2_show5b",
  },
  act2_show5b: {
    text: "「你就说……X没X下来吧」,是我的口头禅。万能的。\n救人被抓了——「你就说救没救下来吧」。\n板砸空了——「你就说砸没砸到吧」。\n反正,错的永远是世界,不是我。\n这句话,某坨史被我气过,不知道多少回。",
    next: "act2_show6",
  },
  act2_show6: {
    speaker: "黑檀",
    text: "雷霆猪今天诈尸了?这操作哪儿来的?\n你不是连回头都不会吗?",
    next: "act2_xy_cheer",
  },
  act2_xy_cheer: {
    speaker: "小鱼",
    text: "饼饼!!!(尖叫)\n我的天哪你刚才那个板!太帅了太帅了!\n我宣布!你是我偶像!",
    next: "act2_show7",
  },
  act2_show7: {
    speaker: "涛儿",
    text: "我宣布,今天她是队长!\n史爹下岗!",
    next: "act2_show8",
  },
  act2_show8: {
    speaker: "某坨史",
    text: "(半天)……?(呆滞ing)",
    next: "act2_joy",
  },
  act2_joy: {
    text: "我承认,那一下我是真爽。\n被他压着玩了一年,头一回把他那句「别浪」,原封不动塞回他嘴里。\n……虽然他们不知道,我开了天眼。",
    next: "act2_xy_in",
  },

  /* ---------- 小鱼:循环把她还给了我(暖 → 薄) ---------- */
  act2_xy_in: {
    text: "反正这局怎么打都白打,横竖要重来。\n那我干脆,不打了。\n我想……找小鱼待会儿。",
    next: "act2_xy_why",
  },
  act2_xy_why: {
    text: "她淡游了,平时根本约不到。\n可在这个反复重来的夜里,她天天都在。\n说来好笑——\n是这个该死的循环,把她,还给了我。",
    next: "act2_xy_talk",
  },
  act2_xy_talk: {
    speaker: "月饼",
    text: "小鱼,陪我唠会儿呗。\n这局不打了,就……唠唠。",
    next: "act2_xy_talk2",
  },
  act2_xy_talk2: {
    speaker: "小鱼",
    text: "好呀好呀!唠啥?你说你说!",
    next: "act2_xy_q1",
  },
  act2_xy_q1: {
    speaker: "月饼",
    text: "你最近……现实里,咋样啊?\n忙不忙?",
    next: "act2_xy_thin1",
  },
  act2_xy_thin1: {
    speaker: "小鱼",
    text: "好呀好呀!唠啥?你说你说!",
    effect: "stutter",
    next: "act2_xy_thin2",
  },
  act2_xy_thin2: {
    text: "……她刚说过这句。\n一字不差。\n我顿了顿,又问了一遍——",
    next: "act2_xy_q2",
  },
  act2_xy_q2: {
    speaker: "月饼",
    text: "我是问你,现实里忙不忙?\n工作累不累呀?",
    next: "act2_xy_thin3",
  },
  act2_xy_thin3: {
    speaker: "小鱼",
    text: "(愣了半秒)……忙呀。\n忙……忙啥来着?\n嘿嘿,不记得了!反正有你们,就开心!",
    next: "act2_xy_thin4",
  },
  act2_xy_thin4: {
    text: "别人聊起现实,能聊一整晚。\n小鱼不行。\n她一碰到「游戏之外」的事,就……卡。\n像一本,只写到这儿的书。后面的页,是空白的。",
    effect: "stutter",
    next: "act2_xy_door1",
  },
  act2_xy_door1: {
    text: "我差一点,就问出口了。\n那句一问,这层薄薄的、亮晶晶的小鱼,可能就……\n「小鱼,你还记不记得,咱俩是咋认识的?」\n这句话,在我舌头上,滚了好几圈。",
    next: "act2_xy_door2",
  },
  act2_xy_door2: {
    text: "我知道会怎么样。\n她会卡住,会跳针,会像刚才那样——「忙啥来着」「不记得了」。\n那张本来就模糊的脸,会更模糊一点。\n我会亲眼看着,她又薄掉一层。",
    effect: "stutter",
    next: "act2_xy_door3",
  },
  act2_xy_door3: {
    text: "所以我没问。\n我把那句话,咽了回去。\n……不是没发现不对。\n是发现了,然后,亲手把那扇门,轻轻地,关上了。",
    next: "act2_xy_door4",
  },
  act2_xy_door4: {
    speaker: "月饼",
    text: "(轻轻地)……没事。不聊那些了。\n小鱼,陪我再打一把呗?\n菜鸡二人组。",
    next: "act2_xy_door5",
  },
  act2_xy_door5: {
    speaker: "小鱼",
    text: "(一下又亮了)好呀好呀!\n走走走!这把我罩着你!",
    next: "act2_xy_thin5",
  },
  act2_xy_thin5: {
    text: "只要不提外面,她就还是那个,亮晶晶的小鱼。\n我宁愿,就这么待着。\n哪怕,只是在一个会重来的夜里。\n哪怕,我心里清楚——这么待下去,是我自己,在骗我自己。",
    next: "act2_shi_in",
  },

  /* ---------- 某坨史:他为什么不指挥了 ---------- */
  act2_shi_in: {
    text: "我又溜达到某坨史那儿。\n他正蹲在一台修一半的机子前面。",
    next: "act2_shi1",
  },
  act2_shi1: {
    speaker: "月饼",
    text: "史爹。问你个事。\n你以前不是指挥吗?\n现在咋……都不咋说话了?",
    next: "act2_shi2",
  },
  act2_shi2: {
    speaker: "某坨史",
    text: "(顿了顿)以前啊。\n队里菜,得有人扯着嗓子喊,不喊就散。\n后来大家都强了。我喊不喊,一个样。",
    next: "act2_shi3",
  },
  act2_shi3: {
    speaker: "某坨史",
    text: "再说,你史爹我也喊累了。\n没事没事——现在这样挺好。",
    next: "act2_shi4",
  },
  act2_shi4: {
    text: "我没接话,心里有点不是滋味,又说不上来为啥。",
    effects: { rel: { 某坨史: 1 } },
    next: "act2_shu_in",
  },

  /* ---------- 薯条:看起来最不在乎,其实一直瞅着你(暖+搞笑) ---------- */
  act2_shu_in: {
    text: "反正还有时间。\n我溜达到薯条那儿。\n他斜靠着墙,半边耳机挂着,正嗦着不知道第几块的 KFC,\n一副天塌下来都跟他没关系的样子。",
    next: "act2_shu1",
  },
  act2_shu1: {
    speaker: "月饼",
    text: "薯条。\n我问你个事啊。\n……要是有件事,你做了八百遍,还是做不好。\n你会咋样?",
    next: "act2_shu2",
  },
  act2_shu2: {
    speaker: "薯条",
    text: "(嚼)八百遍?\n……那挺好啊。",
    next: "act2_shu3",
  },
  act2_shu3: {
    speaker: "月饼",
    text: "好?好在哪儿啊!",
    next: "act2_shu4",
  },
  act2_shu4: {
    speaker: "薯条",
    text: "(咽下去,慢悠悠)\n做了八百遍,你还在做。\n说明你,还没走呢。\n没走,就还有得玩。\n急啥。",
    next: "act2_shu5",
  },
  act2_shu5: {
    text: "我噎了一下。\n薯条这人,十句话九句是「随便」「都行」,\n可偏偏剩那一句,总能不轻不重地,砸在我心口上。\n……他不知道,这话,有多戳我。",
    next: "act2_shu6",
  },
  act2_shu6: {
    speaker: "薯条",
    text: "(把那桶往我这边推了推)\n喏。吃不?\n上校鸡块。",
    next: "act2_shu7",
  },
  act2_shu7: {
    speaker: "薯条",
    text: "我瞅着你,修机修崩的时候,八成是饿的。\n血糖一低,手就抖。\n……我观察过。",
    next: "act2_shu8",
  },
  act2_shu8: {
    text: "……他观察过。\n这个看起来最不在乎的人,\n原来,一直在瞅着我。\n我鼻子忽然有点酸,又有点想笑。",
    next: "act2_shu9",
  },
  act2_shu9: {
    speaker: "月饼",
    text: "……上校鸡块,确实,能修。",
    next: "act2_shu10",
  },
  act2_shu10: {
    speaker: "薯条",
    text: "(又躺了回去)\n嗯。\n别想太多。\n凭感觉。",
    next: "act2_creep_in",
  },

  /* ---------- 裂缝变宽:她开始试出格的事 ---------- */
  act2_creep_in: {
    text: "玩着玩着,我开始试一些……出格的事。",
    next: "act2_creep1",
  },
  act2_creep1: {
    text: "我试过不打,蹲在大厅角落不动。\n结果某坨史还是会说那句「放轻松啊,饼」——\n哪怕我根本没在他跟前。",
    effect: "stutter",
    next: "act2_creep2",
  },
  act2_creep2: {
    text: "我试过把接下来要发生的,一字不落全喊给他们听。\n他们笑,他们配合,他们当我在玩梗。\n该死的还是死,该重来的还是重来。",
    next: "act2_creep3",
  },
  act2_creep3: {
    speaker: "黑檀",
    text: "别慌!绕板!卡视野!往左边那个窗!",
    next: "act2_creep4",
  },
  act2_creep4: {
    text: "这句话。\n我听到第几遍了?\n第三遍。一字不差。连她在哪儿换气,都一样。",
    effect: "glitch",
    next: "act2_creep5",
  },
  act2_creep5: {
    text: "我突然想起小鱼那本「写到一半的书」。\n后背一下就凉了。\n他们……是真人吗?\n这念头刚冒出来,我自己先吓一跳,赶紧按回去。\n别瞎想。别瞎想啊月饼。",
    next: "act2_win_in",
  },

  /* ---------- 那就堂堂正正赢一次 ---------- */
  act2_win_in: {
    text: "不想了。\n我憋着一股劲——这把,我要赢。\n好好地、正经地,赢一次。",
    next: "act2_win1",
  },
  act2_win1: {
    bg: "match",
    text: "五台机。我一个人修了三台。\n某坨史救人,黑檀牵着孽蜥满地图跑,涛儿补位,薯条远远地给我报点。\n我们……真的在赢。",
    next: "act2_win2",
  },
  act2_win2: {
    text: "最后一台机,响了。\n大门通电,红灯变绿。\n我朝那道光跑过去——\n这一次,我真跑到了。",
    next: "act2_win3",
  },
  act2_win3: {
    speaker: "某坨史",
    text: "走!饼快走!这把稳了!\n没事没事——这把,是真没事!",
    next: "act2_win4",
  },
  act2_win4: {
    text: "我迈出大门那一脚,身后响起「逃脱成功」。\n我赢了。\n我第一次,赢了。",
    effect: "flash",
    next: "act2_blackout",
  },

  /* ---------- 赢了……还是十点零四 ---------- */
  act2_blackout: {
    action: "blackout",
    card: "「 逃 脱 成 功 」",
    hold: 2600,
    next: "act2_reset",
  },
  act2_reset: {
    action: "reset_loop",
    next: "act2_wake",
  },
  act2_wake: {
    bg: "lobby",
    text: "晚上十点零四。\n开黑房。\n涛儿清了清嗓子,准备唱歌。",
    next: "act2_dread1",
  },
  act2_dread1: {
    speaker: "月饼",
    text: "……为什么。",
    effect: "stutter",
    next: "act2_dread2",
  },
  act2_dread2: {
    text: "我赢了啊。\n我明明赢了。\n赢了,还是回到了十点零四。",
    effect: "glitch",
    next: "act2_dread3",
  },
  act2_dread3: {
    text: "那到底要怎么样?\n到底要我怎么样,才能从这破十点零四里,出去?",
    next: "il_card",
  },
};

export const ACT2_START = "act2_open";
