# CLAUDE.md — 《循环内战 · 地表最菜队》项目说明

> 给未来任何会话(以及 Claude Code)的项目级指令。配套:[人物设定.md](./人物设定.md)、[剧情设计.md](./剧情设计.md)

---

## 1. 这是什么

- **类型**:网页**互动叙事游戏**(Visual Novel + 轻量迷你游戏)
- **题材**:第五人格同人 · **时间循环**
- **核心**:月饼被困在一局 DBC 内战的循环里,通过反复重开学会游戏、并完成自我接纳
- **致敬形态**:B 站《高考模拟器》——文字为主、循环计数器、速度滑块、音效开关
- **目标体量**:**成熟、较大规模**——数百叙事节点、多结局、多系统

---

## 2. 语言约定

- **界面 / 剧情文案**:中文
- **代码 / 变量 / 注释 / 文件名**:英文
- **设计文档**:中文

---

## 3. 技术栈决策(pragmatic choice)

| 决策 | 选择 | 理由 / trade-off |
|------|------|------------------|
| 框架 | **原生 HTML/CSS/JS,不引入 React/Vue** | VN 状态简单,框架是过度工程;原生更易学、易读 |
| 模块化 | **ES Modules**(`<script type="module">`) | 浏览器原生支持,**零构建步骤**起步 |
| 剧情 | **数据驱动**:剧情写成 JS/JSON 数据,与引擎彻底分离 | ⭐ 做大的关键——加内容只动数据,不碰逻辑 |
| 状态持久化 | **localStorage** | 存档 / 循环计数 / 羁绊值,够用 |
| 构建工具 | **暂不引入**(可后续平滑升级 Vite) | 先跑通;复杂了再加 known upgrade path |

- **备选(known option)**:若分支复杂到难以维护,可引入 **Ink / inkjs** 专做叙事脚本。**现在不上**,避免学习成本。
- ⚠️ **必须用本地 HTTP server 打开**(ES Modules + fetch 不能 `file://`)。开发命令见 §7。

---

## 4. 目录结构

```
game/
├── index.html              # 入口
├── CLAUDE.md / 人物设定.md / 剧情设计.md
├── src/
│   ├── main.js             # 启动引擎
│   ├── engine/
│   │   ├── scene.js        # 节点渲染 + 打字机
│   │   ├── state.js        # 全局状态:loop count / memory flags / 羁绊值
│   │   ├── save.js         # localStorage 存读档
│   │   ├── audio.js        # BGM / SFX
│   │   └── minigame.js     # 修机 / 遛鬼 / 回头看 迷你互动
│   ├── data/
│   │   ├── characters.js   # 角色数据(对应 人物设定.md)
│   │   ├── achievements.js
│   │   └── scenes/         # 剧情数据,按幕拆分
│   │       ├── prologue.js
│   │       ├── act1.js
│   │       └── ...
│   └── ui/
│       ├── components.js
│       └── styles.css
└── assets/
    ├── img/                # 立绘 / 背景(先用 emoji / CSS 占位)
    └── audio/
```

---

## 5. 场景数据 Schema(剧情节点统一格式)

```js
// src/data/scenes/act1.js
export const act1 = {
  'act1_notice': {
    speaker: '黑檀',
    portrait: 'heitan/normal',     // assets/img/ 下的占位 key
    bg: 'lobby',
    text: '月饼,你又卡住了?',
    choices: [
      { text: '我…我没卡',        next: 'act1_deny',   effects: { rel: { 黑檀: +1 } } },
      { text: '(复读)你又卡了?',  next: 'act1_repeat', effects: { unlock: 'repeater_gag' } },
    ],
    // onEnter(state) {}  // 可选:进入时改状态
    // requires: { flag: 'xxx' }  // 可选:出现条件
  },
};
```

**约定**:
- 每个节点一个 `id`(对象 key);`next` 指向下一节点 id。
- `effects` 统一走 state 派发:`rel`(羁绊增减)、`unlock`(解锁记忆/技能/成就)、`setFlag`。
- 无 `choices` 时显示"继续",走 `next`。
- **不在数据里写逻辑分支以外的代码**——复杂逻辑放 `onEnter` 回调,保持数据可读。

---

## 6. 核心系统(实现时遵守)

- **循环计数器**:`state.loop`,重置时 +1,UI 常驻。
- **记忆/技能持久化**:`state.memory`(Set),跨循环不清——月饼成长的载体。重置只清"本局进度",不清 memory。
- **羁绊值**:`state.rel = { 史爹, 黑檀, 薯条, 涛儿 }`,影响支线与结局。
- **结局判定**:集中在一处 `resolveEnding(state)`,依据羁绊 + 关键 flag,勿散落。
- **存档**:`save.js` 序列化 `state` 到 localStorage;支持多槽位。

---

## 7. 运行 / 开发

```bash
# 在项目根目录起本地 server(禁缓存,改完刷新即生效)
python3 serve.py
```
浏览器打开 `http://localhost:5173`。**不要直接双击 index.html**(ES Modules 会被 CORS 拦)。

> ⚠️ 若用 `python3 -m http.server`(带缓存),改了 JS 后要 **Cmd+Shift+R 强刷**才生效;`serve.py` 已禁缓存,普通刷新即可。

---

## 8. 内容风格指南

- **保留所有名场面 / 笑点**(见 [剧情设计.md §8](./剧情设计.md)):复读机、"不对!不对!"、"你就说没下来吧"、雷霆猪、女王蜂全收集等。
- ⚠️ **心理恐怖双重身份**:本作真核是心理恐怖(见 [剧情设计.md §三·五](./剧情设计.md))——每个笑点揭秘后都要能重新解读成**恐怖线索**。文案"第一遍好笑、第二遍发凉";揭秘前**严禁剧透**,所有线索只埋不点破。
- 角色台词必须**符合 MBTI 与人设**(对照人物设定.md 的「气质」)。
- **第五人格术语保留原文**:密码机、狂欢之椅、遛鬼、回头看、监管者三型(控场/追击/守尸)等;机制描述要准(玩家是真玩家,会挑错)。
- ⚠️ **地图名必须用真实地图**:军工厂、圣心医院、红教堂、湖景村、永眠镇、里奥的回忆、唐人街、不归林。**「庄园」不是对局地图**,不要拿它当 match 场景名(本作内战固定在「红教堂」)。
- 文案语气:口语、网感、群友黑话;煽情点克制,靠反差出戏剧性。

---

## 9. 给 Claude 的工作纪律

- 改剧情 → 只动 `src/data/`;改玩法 → 只动 `src/engine/`。**数据与引擎分离是铁律。**
- 新增第五人格设定前,**先核对准确性**(必要时联网查证),宁可问也别编。
- 大改动前先同步设计文档(人物设定 / 剧情设计),保持三份文档一致。
