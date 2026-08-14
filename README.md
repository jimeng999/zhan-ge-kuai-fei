# 🐦 AgentTeams — 战鸽快飞

> 像战鸽一样可靠，像快飞一样迅捷。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/vite-6.x-646CFF.svg)](https://vitejs.dev)
[![React](https://img.shields.io/badge/react-18-61DAFB.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6.svg)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.x-06B6D4.svg)](https://tailwindcss.com)

---

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

访问 http://localhost:3000

---

## 📁 项目结构

```
agent-teams/
├── docs/                    # 品牌、文化、商业文档
│   ├── BRAND.md            # 品牌识别规范
│   ├── CULTURE.md          # 战鸽快飞企业文化
│   └── BUSINESS.md         # 商业策略
├── src/
│   ├── pages/
│   │   ├── Hero.tsx        # 首页 · 品牌着陆页
│   │   ├── Dashboard.tsx   # 仪表盘 · 任务飞行看板
│   │   ├── Principles.tsx  # 战鸽精神 · 六条铁律
│   │   └── Team.tsx        # 团队 · 战鸽成员管理
│   ├── styles/
│   │   └── index.css       # Tailwind 样式 + 设计系统
│   ├── App.tsx             # 主应用组件 + 导航
│   └── main.tsx            # 入口
├── index.html              # HTML 入口
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

---

## 🕊️ 战鸽快飞 · 六条铁律

| # | 铁律 | 英文 | 核心 |
|---|------|------|------|
| 1 | 🎯 使命必达 | Mission Delivered | 没有"尽力而为"，只有"使命必达" |
| 2 | ⚡ 快飞精神 | Swift Flight | 快不是仓促，是精准的效率 |
| 3 | 🛡️ 可靠如鸽 | Reliable as a Pigeon | 可靠性不是选项，是底线 |
| 4 | 🧭 精准导航 | Precision Navigation | 方向对了，速度才有意义 |
| 5 | 🤝 协同飞行 | Flock Coordination | 单鸽可独行，群鸽能远航 |
| 6 | 🔥 Day 1 心态 | Always Day 1 | 成功不是终点，新征程随时开始 |

**团队格言：**
> *"信已发出，必达无疑；路在前方，飞必至之。"*

---

## 🎨 设计系统

### 颜色

| 名称 | 色值 | 用途 |
|------|------|------|
| 战鸽蓝 `pigeon-600` | `#0284c7` | 主行动色 |
| 闪电黄 `swift-500` | `#eab308` | 高亮、成就 |
| 战地灰 `war-950` | `#0c0a09` | 背景 |
| 信标白 `war-50` | `#fafaf9` | 标题 |

### 动效
- `fly-fast`: 0.6s 滑入（任务状态变更）
- `soar`: 1.5s 升起（任务完成）
- `zip`: 0.3s 快速滑入（通知）

---

## 📄 文档

- **[BRAND.md](./docs/BRAND.md)** — 完整品牌识别手册
- **[CULTURE.md](./docs/CULTURE.md)** — 战鸽企业文化体系
- **[BUSINESS.md](./docs/BUSINESS.md)** — 商业策略与市场进入方案

---

## 🛠️ 技术栈

| 层 | 技术 |
|----|------|
| 框架 | React 18 + TypeScript 5 |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 3 |
| 状态 | React Hooks（后续可扩展 Zustand） |
| 部署 | Vercel / Netlify（静态构建） |

---

## 📜 许可证

MIT License

---

*Built with 🐦 by AgentTeams — 战鸽快飞*
