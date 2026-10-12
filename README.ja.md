# 🪄 Intelligent UI for DeepSeek Harness

[English](README.md) | 日本語 | [中文](README.zh.md)

[![npm version](https://img.shields.io/npm/v/@rakutek/dsh-intelligent-ui.svg)](https://www.npmjs.com/package/@rakutek/dsh-intelligent-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![DeepSeek Harness](https://img.shields.io/badge/DeepSeek%20Harness-Plugin-emerald.svg)](https://github.com/deepseek-ai/deepseek-harness)

> **LLM の返答を、その場で動く「インタラクティブなUI」へ。**

**Intelligent UI** は、ChatGPT の Intelligent UI や Claude Artifacts に着想を得た、[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（デスクトップアプリ / Web UI）向けの公式コミュニティプラグインです。

モデルがテキストだけでなく、コンポーネントタグや動的な計算式、洗練された Mermaid 図を Markdown 内に記述することで、チャット画面上にリアルタイムで操作可能な UI（ミニアプリ）を直接ストリーミング描画します。

---

## 📸 スクリーンショット

| 🧮 リアルタイムコスト試算シミュレーター | ⚖️ インタラクティブ技術選定・比較カード |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/rakutek/dsh-intelligent-ui/main/docs/simulator-ja.png" alt="スライダーとKPIタイル、棒グラフを備えたLLM API料金シミュレーター" width="440"> | <img src="https://raw.githubusercontent.com/rakutek/dsh-intelligent-ui/main/docs/comparison-ja.png" alt="要件切り替え、推奨スタック、スペック表、スコアバーを備えたデータベース比較" width="440"> |

<div align="center">
  <p><strong>🎨 角丸ノードとテーマ調和カラーを備えた Mermaid フローチャート</strong></p>
  <img src="https://raw.githubusercontent.com/rakutek/dsh-intelligent-ui/main/docs/diagram-ja.png" alt="カナリアデプロイと自動ロールバックのMermaidフローチャート（セマンティック配色と2段組ラベル付き）" width="680">
</div>

---

## ✨ 主な特徴

- ⚡ **その場で動くミニアプリ**: スライダーや数値入力、ドロップダウンを操作すると、ブラウザ内で即座に計算式やグラフが再計算されます（サーバーとの往復通信は不要です）。
- 📊 **20種類以上の充実したUIコンポーネント**: KPI 表示カード（`stat`）、各種チャート（棒・折れ線・円・エリア `chart`）、レスポンシブ配置（`box`, `row`, `grid`）、プログレスバー、テーブル、バッジ、セグメントコントロールなどを標準搭載。
- 🎨 **美しいテーマ調和の Mermaid 図**: ` ```mermaid ` ブロックを自動的に検出し、ダーク/ライトテーマに調和したカラー、丸みを帯びたカード、階層ラベルで見やすく整形描画します。
- 🔁 **エージェントとの双方向インタラクション**: アクションボタン（`GenUI.issueNewTurn(...)`）を配置でき、ユーザーがUI上で選んだ値をワンクリックで次のプロンプトとしてエージェントに送信できます。
- 🧠 **文脈に応じたスマートな出力**: シミュレーションや比較、フロー図などの「視覚化が役立つ質問」の時だけUIを生成し、単純な質問やコードの相談には通常のプレーンテキストで簡潔に返答します。
- 🔒 **安全なサンドボックス設計**: すべての動的計算式は安全な AST インタープリタ上でステップ制限付きで実行されます。`eval` や DOM へのアクセス権限はなく、入力データもブラウザのローカルストレージ内で完結します。

---

## 🚀 インストール手順

**DeepSeek Harness 0.2.x** 以降（デスクトップアプリまたは `dsh web`）が必要です。

### 方法 1: Web UI / デスクトップアプリから（推奨・簡単）

1. DeepSeek Harness を開きます。
2. 左メニューの **Plugins** を開き、**Add plugin**（プラグインを追加）をクリックします。
3. 以下のパッケージ名または GitHub URL のいずれかを入力します：
   ```
   @rakutek/dsh-intelligent-ui
   ```
   または
   ```
   https://github.com/rakutek/dsh-intelligent-ui
   ```
4. **Install** をクリックします。アプリの再起動なしですぐに有効化されます！

### 方法 2: CLI からのインストール

ターミナルで以下のコマンドを実行します：

```sh
# デスクトップ版のプロファイルに追加（実行前にデスクトップアプリを終了してください）:
dsh plugin --profile desktop add @rakutek/dsh-intelligent-ui

# Web サーバー版のプロファイルに追加:
dsh plugin --profile web add @rakutek/dsh-intelligent-ui
```

> **Tip**: 一時的にプレーンテキスト返答に戻したい場合は、**Plugins** 画面で本プラグインのトグルをオフにするだけで無効化できます。

---

## 💡 試してみると楽しいプロンプト例

プラグイン有効後、自然言語でインタラクティブな出力や図解をリクエストしてみてください：

- **料金シミュレーター・試算**:
  > 「チームの利用人数とプラン契約期間（月払い／年払い）をスライダーで変更できて、割引額や年間総額がリアルタイムに再計算される SaaS 料金シミュレーターを作って」
- **製品やサービスの比較**:
  > 「MacBook Pro M3、ThinkPad X1 Carbon、Dell XPS 13 の3機種について、バッテリー持ち・重量・価格・開発適性を比較できるインタラクティブな比較カードを出して」
- **業務フローやシステムの図解**:
  > 「GitHub の Pull Request が作成されてから、CI チェック、コードレビューを経てデプロイされるまでの流れを分かりやすいフローチャートで図解して」
- **ローン・返済プラン計算**:
  > 「借入金額、金利、返済年数を変更すると毎月の返済額と利息総額が更新される住宅ローン計算カードを作って」

---

## 🛠️ 仕組み（モデルが生成する Markdown）

本プラグインはシステムプロンプトに軽量な記法ガイドを注入します。モデルは通常の Markdown に加え、JSX ライクなコンポーネントタグと状態変数を組み合わせて出力します：

```md
{@body const [seats, setSeats] = useState(25)}
{@body const [price, setPrice] = useState(1200)}

<box border radius="xl" padding={3} gap={2}>
  <title level={3}>チームプラン見積もり</title>
  
  <slider min={1} max={100} value={seats} onChange={setSeats}/>
  <slider min={500} max={5000} step={100} value={price} onChange={setPrice}/>
  
  <row gap={2}>
    <stat label="月額費用" value={`¥${(seats * price).toLocaleString()}`}/>
    <stat label="年額費用（10%オフ）" value={`¥${Math.round(seats * price * 12 * 0.9).toLocaleString()}`}/>
  </row>
  
  <button onClick={() => GenUI.issueNewTurn(`${seats}名、月額¥${price}のプランについて相談したいです`)}>
    この構成でエージェントに質問する
  </button>
</box>
```

### 利用可能な主要コンポーネント

| カテゴリ | コンポーネント |
|---|---|
| **レイアウト・コンテナ** | `<box>`, `<row>`, `<grid>`, `<grid-item>`, `<divider>` |
| **テキスト・データ表示** | `<title>`, `<text>`, `<caption>`, `<label>`, `<badge>`, `<icon>`, `<stat>`, `<progress>` |
| **テーブル表示** | `<table>`, `<table-row>`, `<table-cell>` |
| **可視化・チャート** | `<chart type="bar|line|pie|area" data={...}/>`, Mermaid テーマ図 |
| **フォーム・入力部品** | `<slider>`, `<input>`, `<checkbox>`, `<radio-group>`, `<radio>`, `<segmented-control>`, `<select>`, `<button>` |
| **ロジック・式展開** | `{式}`, `{#if 条件}...{/if}`, `{#each 項目 in 配列}...{/each}`, `{@body ...}` |

---

## 🛡️ セキュリティとプライバシー

- **安全なサンドボックス**: すべての JavaScript 式は安全な AST インタープリタ上で評価されます。`eval()` や `Function()` の利用、ブラウザの `window` / `document` やネットワーク通信へのアクセスは一切遮断されています。
- **入力状態のローカル保護**: ユーザーがスライダー等で入力・変更した値はブラウザのローカルストレージにのみ保存されます。ユーザーが「送信」ボタンを押さない限り、モデルに入力値が勝手に送信されることはありません。
- **安全なリンク・リソース**: リンクは DeepSeek Harness のセーフティ機構を経由して開き、画像もモデルが明示的に指定した HTTPS URL のみが読み込まれます。

---

## 📋 動作要件

- **DeepSeek Harness**: `v0.2.0-rc.1` 以降
- **動作確認済みモデル**: Claude 3.5 Sonnet / 3.7 Sonnet, GPT-4o / GPT-6.1, DeepSeek-V3 / R1

---

## 📄 ライセンス

本プラグインは [MIT License](LICENSE) のもとで公開されています。

バンドルされているサードパーティ製ライブラリ（[mermaid](https://github.com/mermaid-js/mermaid), [zod](https://github.com/colinhacks/zod)）のライセンス表示は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) をご参照ください。
