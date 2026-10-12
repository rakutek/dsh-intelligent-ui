# 🪄 Intelligent UI for DeepSeek Harness

[English](README.md) | [日本語](README.ja.md) | 中文

[![npm version](https://img.shields.io/npm/v/@rakutek/dsh-intelligent-ui.svg)](https://www.npmjs.com/package/@rakutek/dsh-intelligent-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![DeepSeek Harness](https://img.shields.io/badge/DeepSeek%20Harness-Plugin-emerald.svg)](https://github.com/deepseek-ai/deepseek-harness)

> **让大模型回复直接化身可实时交互的 Mini-App。**

**Intelligent UI** 是一款专为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（桌面客户端与 Web UI）打造的插件，灵感源自 ChatGPT Intelligent UI 与 Claude Artifacts。

大模型在生成 Markdown 时，可以嵌入丰富的组件标签、轻量响应式计算表达式以及优雅的 Mermaid 图表；DeepSeek Harness 聊天界面会在流式输出的同时，就地实时渲染出支持操作交互的 Mini-App。

---

## 📸 效果展示

| 🧮 实时费用计算器 | ⚖️ 动态产品对比卡片 |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/rakutek/dsh-intelligent-ui/main/docs/simulator.png" alt="带有滑块、KPI 卡片与柱状图的费用计算器" width="440"> | <img src="https://raw.githubusercontent.com/rakutek/dsh-intelligent-ui/main/docs/comparison.png" alt="带有焦点切换、推荐卡片、规格表与进度条的笔记本电脑对比" width="440"> |

<div align="center">
  <p><strong>🎨 圆角卡片与主题配色自适应的 Mermaid 流程图</strong></p>
  <img src="https://raw.githubusercontent.com/rakutek/dsh-intelligent-ui/main/docs/diagram.png" alt="美拉德反应流程图（语义角色配色与标题/细节双层标签）" width="680">
</div>

---

## ✨ 核心特性

- ⚡ **即时交互 Mini-App**：通过滑块、数字输入、下拉菜单等控件操作，浏览器本地毫秒级重新计算公式、统计数据与图表，无需与后端重复交互。
- 📊 **20+ 款精美 UI 原生组件**：包含指标卡片（`stat`）、图表（柱状/折线/饼图/面积图 `chart`）、灵活布局（`box`, `row`, `grid`）、进度条、表格、徽标（`badge`）及分段控件等。
- 🎨 **主题化美化 Mermaid 图表**：自动拦截 ` ```mermaid ` 代码块，将其渲染为圆角卡片节点、浅色/深色主题自适应、具备清晰层次结构的现代可视化流程图。
- 🔁 **双向交互与一键回传**：支持内置操作按钮（`GenUI.issueNewTurn(...)`），用户在卡片上配置好的参数，点击即可作为下一轮提问直接发送给智能体。
- 🧠 **智能场景感知**：模型仅在计算、对比、流程等需要直观展示的场景下调用 UI 组件；对于常规事实性问答或代码交流，保持清爽的纯文本/代码块回复。
- 🔒 **严密安全沙箱**：计算表达式在轻量受限的 AST 解释器中执行，彻底杜绝 `eval`、DOM 访问或外部网络请求。表单状态仅保存在本地浏览器存储中。

---

## 🚀 安装指南

运行环境要求：**DeepSeek Harness 0.2.x** 或更高版本（桌面端或 `dsh web`）。

### 方式一：Web UI / 桌面端图形界面（最推荐）

1. 打开 DeepSeek Harness 客户端或 Web 界面。
2. 点击左侧导航栏的 **Plugins**（插件），然后点击 **Add plugin**（添加插件）。
3. 输入以下任一包名或 GitHub 仓库地址：
   ```
   @rakutek/dsh-intelligent-ui
   ```
   或
   ```
   https://github.com/rakutek/dsh-intelligent-ui
   ```
4. 点击 **Install** 安装。安装完成后立即生效，无需重启客户端！

### 方式二：命令行 CLI 安装

在终端中执行对应配置集的添加命令：

```sh
# 安装至桌面端 Profile（安装前请先退出桌面客户端）：
dsh plugin --profile desktop add @rakutek/dsh-intelligent-ui

# 安装至 Web 模式 Profile：
dsh plugin --profile web add @rakutek/dsh-intelligent-ui
```

> **提示**：如需临时返回默认的纯文本回复，只需在 **Plugins** 列表中关闭此插件的开关即可。

---

## 💡 示例 Prompt 推荐

安装完成后，尝试用自然语言向模型提出以下需求：

- **计费与预估计算器**：
  > “帮我做一个 SaaS 团队计费模拟器，可以用滑块调节团队人数和计费周期（月付/年付），并实时计算折扣优惠与年付总额。”
- **数码产品多维对比**：
  > “对比 MacBook Pro M3、ThinkPad X1 Carbon 和 Dell XPS 13，生成包含续航、重量、价格和开发体验的交互式对比卡片。”
- **业务流程与系统架构图**：
  > “画一张从 GitHub PR 提交，到 CI 自动化测试、Code Review，最后部署上线的清晰流程图。”
- **还款计划测算**：
  > “制作一个房贷还款测算卡片，可调节贷款金额、年利率和还款年限，实时计算每月还款额和利息占比。”

---

## 🛠️ 实现原理（模型生成的 Markdown）

本插件向系统提示词（System Prompt）中注入简明格式规范。模型会在 Markdown 中输出类似 JSX 的组件标签与响应式状态：

```md
{@body const [seats, setSeats] = useState(25)}
{@body const [price, setPrice] = useState(1200)}

<box border radius="xl" padding={3} gap={2}>
  <title level={3}>团队方案费用测算</title>
  
  <slider min={1} max={100} value={seats} onChange={setSeats}/>
  <slider min={500} max={5000} step={100} value={price} onChange={setPrice}/>
  
  <row gap={2}>
    <stat label="月度费用" value={`¥${(seats * price).toLocaleString()}`}/>
    <stat label="年度费用（立享9折）" value={`¥${Math.round(seats * price * 12 * 0.9).toLocaleString()}`}/>
  </row>
  
  <button onClick={() => GenUI.issueNewTurn(`我想了解 ${seats} 个席位，单价 ¥${price} 的具体采购流程`)}>
    按此配置咨询智能体
  </button>
</box>
```

### 支持的组件类别与语法

| 类别 | 可用标签 |
|---|---|
| **容器与布局** | `<box>`, `<row>`, `<grid>`, `<grid-item>`, `<divider>` |
| **文字与指标** | `<title>`, `<text>`, `<caption>`, `<label>`, `<badge>`, `<icon>`, `<stat>`, `<progress>` |
| **数据表格** | `<table>`, `<table-row>`, `<table-cell>` |
| **可视化图表** | `<chart type="bar|line|pie|area" data={...}/>`, 主题化 Mermaid 图 |
| **交互表单控件** | `<slider>`, `<input>`, `<checkbox>`, `<radio-group>`, `<radio>`, `<segmented-control>`, `<select>`, `<button>` |
| **逻辑与计算** | `{表达式}`, `{#if 条件}...{/if}`, `{#each 项 in 数组}...{/each}`, `{@body ...}` |

---

## 🛡️ 安全与隐私保护

- **严格沙箱隔离**：所有 JavaScript 表达式均由受限的 AST 解释器安全执行，杜绝 `eval()`、`new Function()`、DOM 读写或外部网络请求。
- **本地状态隐私**：用户在控件中输入的值仅保存在当前浏览器的本地存储（Local Storage）中。在用户主动点击按钮前，数据绝不会回传给模型。
- **安全资源加载**：外部链接均通过 DeepSeek Harness 自身的安全链接协议打开；外部图片仅允许加载模型给出的合法 HTTPS 资源。

---

## 📋 运行兼容性

- **DeepSeek Harness**：`v0.2.0-rc.1` 及以上版本
- **兼容测试模型**：Claude 3.5 Sonnet / 3.7 Sonnet, GPT-4o / GPT-6.1, DeepSeek-V3 / R1

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源发布。

分发的客户端 Bundle 内置封装了 [mermaid](https://github.com/mermaid-js/mermaid) 和 [zod](https://github.com/colinhacks/zod)，完整第三方授权声明请参见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
