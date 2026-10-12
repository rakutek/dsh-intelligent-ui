# Intelligent UI for DeepSeek Harness

A [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) plugin that lets the model answer with **live interface** instead of only text, in the spirit of ChatGPT's Intelligent UI. The model writes ordinary markdown with a few component tags, small expressions, and mermaid diagrams; the chat renders them in place while the reply streams in.

- **Simulators and calculators**: sliders, inputs, and pickers recompute every figure and chart instantly, in the browser.
- **Comparisons**: KPI tiles, tables, and line, bar, area, or pie charts mixed freely with prose.
- **Diagrams**: ` ```mermaid ` blocks render as themed diagrams (rounded nodes, role colors from `classDef`, title-and-detail labels).
- **Follow-ups**: a button can send the current values back as your next message.
- **Plain questions stay plain**: a short factual question is answered in text, with no UI.

## Install

Requires DeepSeek Harness **0.2.x** (Desktop or `dsh web`).

**Desktop / Web UI**: open **Plugins → Add plugin**, enter one of the following, and install:

```
@rakutek/dsh-intelligent-ui
```

```
https://github.com/rakutek/dsh-intelligent-ui
```

**CLI** (quit Desktop first when installing into its profile):

```sh
dsh plugin --profile desktop add @rakutek/dsh-intelligent-ui
# or: dsh plugin --profile web add @rakutek/dsh-intelligent-ui
```

To update, uninstall and install again. Turn the plugin off in **Plugins** to return to plain text replies; past replies then show their tags as text.

## Use

Ask for something that benefits from interaction or structure, for example:

- "Make a SaaS pricing simulator where I can change seats and unit price."
- "Compare these three laptops for battery, weight, and price."
- "Draw how a pull request gets merged."

The plugin adds a section to the system prompt that teaches the model the format; nothing else is needed. Tested with Claude Sonnet 5.5 and GPT-6.1 Sol.

## What the model writes

```md
{@body const [seats, setSeats] = useState(25)}
{@body const [price, setPrice] = useState(1200)}

<box border radius="xl" padding={3} gap={2}>
  <slider min={1} max={500} value={seats} onChange={setSeats}/>
  <slider min={100} max={10000} step={100} value={price} onChange={setPrice}/>
  <row gap={2}>
    <stat label="Monthly" value={`¥${(seats * price).toLocaleString()}`}/>
    <stat label="Yearly" value={`¥${(seats * price * 12).toLocaleString()}`}/>
  </row>
  <button onClick={() => GenUI.issueNewTurn(`Review ${seats} seats at ¥${price}`)}>Ask about this plan</button>
</box>
```

Components: `box`, `row`, `grid`, `grid-item`, `divider`, `title`, `text`, `caption`, `label`, `badge`, `icon`, `stat`, `progress`, `table`, `table-row`, `table-cell`, `chart`, `slider`, `radio-group`, `radio`, `segmented-control`, `select`, `input`, `checkbox`, `button`, `image`. Text inside and around tags is markdown, including tables, code, and `$…$` math. `{expression}`, `{#each}`, `{#if}`, and `{@body const …}` add values, repetition, conditions, and local state.

## Safety and privacy

- Expressions run in a small sandboxed interpreter (no `eval`, no network, no DOM access, step-bounded).
- Values you set with controls stay in your browser (per message, in local storage). The model only sees what a button sends, and only when you click it.
- Links in the text open through DeepSeek Harness's own link handling; images load only from URLs the model wrote.

## Limitations

- The reply text keeps the raw tags, so the copy button, session titles, headless output, ACP clients, and the Trajectory tab show them.
- Flowcharts with many edges that loop back can still cross; the model is asked to keep flows forward.
- No server-side parts yet: images and citations are not fetched for the model.

## 日本語

チャットの返答を、文章だけでなく**その場で動く UI**で返せるようにする DeepSeek Harness 用プラグインです。モデルが Markdown にタグ・式・mermaid を書き、チャットがそれを描画します。

- インストール: プラグイン画面の「プラグインを追加」に `@rakutek/dsh-intelligent-ui` または `https://github.com/rakutek/dsh-intelligent-ui` を入力（DSH 0.2.x）
- 使い方: 「料金シミュレーターを作って」「3機種を比較して」「PR がマージされるまでを図にして」のように頼むだけ。短い質問には普通の文章で答えます
- 操作した値はブラウザ内にだけ残り、モデルに送られるのはボタンを押したときの文面だけです

## License

MIT. The distributed client bundle includes [mermaid](https://github.com/mermaid-js/mermaid) and [zod](https://github.com/colinhacks/zod); see `THIRD_PARTY_NOTICES.md`.
