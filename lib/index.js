import z from "@deepseek-ai/schemastery";
//#region lib/types/shared/manifest.js
/**
* The tag vocabulary: one entry per component the model may write. The
* renderer validates props against it; the Host prints it into the system
* prompt. Prop types are deliberately small: the renderer coerces loosely
* (a number prop accepts a numeric string) and ignores unknown props.
*/
const TONES = [
	"default",
	"secondary",
	"success",
	"warning",
	"danger",
	"accent"
];
const SIZES = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl"
];
/** The tag vocabulary, in the order the prompt lists it. */
const COMPONENTS = {
	box: {
		description: "Vertical container. Use border/padding/background to make a card; gap spaces children.",
		children: true,
		props: {
			gap: {
				type: "number",
				min: 0,
				max: 8,
				description: "spacing unit between children (1 = 4px)"
			},
			padding: {
				type: "number",
				min: 0,
				max: 8
			},
			border: { type: "boolean" },
			radius: {
				type: "string",
				values: [
					"sm",
					"md",
					"lg",
					"xl",
					"2xl"
				]
			},
			background: {
				type: "string",
				values: [
					"surface-secondary",
					"surface-tertiary",
					"accent-soft",
					"success-soft",
					"warning-soft",
					"danger-soft"
				]
			},
			width: {
				type: "string",
				description: "CSS length or percentage"
			},
			height: { type: "string" },
			flex: {
				type: "string",
				description: "flex grow, e.g. \"1\""
			},
			align: {
				type: "string",
				values: [
					"start",
					"center",
					"end",
					"stretch"
				]
			},
			clip: { type: "boolean" }
		}
	},
	row: {
		description: "Horizontal container; wraps on narrow screens.",
		children: true,
		props: {
			gap: {
				type: "number",
				min: 0,
				max: 8
			},
			align: {
				type: "string",
				values: [
					"start",
					"center",
					"end",
					"stretch"
				]
			},
			justify: {
				type: "string",
				values: [
					"start",
					"center",
					"end",
					"between"
				]
			},
			wrap: { type: "boolean" }
		}
	},
	grid: {
		description: "Equal columns; children are grid-item tags (or any tags).",
		children: true,
		props: {
			columns: {
				type: "number",
				min: 1,
				max: 6,
				required: true
			},
			gap: {
				type: "number",
				min: 0,
				max: 8
			}
		}
	},
	"grid-item": {
		description: "One grid cell.",
		children: true,
		props: { span: {
			type: "number",
			min: 1,
			max: 6
		} }
	},
	divider: {
		description: "Horizontal rule.",
		children: false,
		props: {}
	},
	title: {
		description: "Heading-weight text (not a markdown heading); use for figures and card headers.",
		children: true,
		props: {
			size: {
				type: "string",
				values: SIZES
			},
			weight: {
				type: "string",
				values: [
					"normal",
					"medium",
					"semibold",
					"bold"
				]
			},
			color: {
				type: "string",
				values: TONES
			},
			tabularNums: { type: "boolean" }
		}
	},
	text: {
		description: "Body text with explicit size/weight/color; plain markdown prose needs no tag.",
		children: true,
		props: {
			size: {
				type: "string",
				values: SIZES
			},
			weight: {
				type: "string",
				values: [
					"normal",
					"medium",
					"semibold",
					"bold"
				]
			},
			color: {
				type: "string",
				values: TONES
			},
			inline: { type: "boolean" },
			tabularNums: { type: "boolean" }
		}
	},
	caption: {
		description: "Small secondary note under a table, chart, or control.",
		children: true,
		props: {}
	},
	label: {
		description: "Form label above a control.",
		children: true,
		props: {}
	},
	badge: {
		description: "Small pill.",
		children: true,
		props: { color: {
			type: "string",
			values: TONES
		} }
	},
	icon: {
		description: "Inline icon.",
		children: false,
		props: {
			name: {
				type: "string",
				required: true,
				values: [
					"arrow-right",
					"arrow-up-right",
					"check",
					"x",
					"refresh",
					"send",
					"info",
					"warning",
					"star",
					"plus",
					"minus",
					"chevron-down",
					"chevron-up",
					"external-link",
					"search",
					"clock",
					"calendar",
					"user",
					"zap",
					"trending-up",
					"trending-down"
				]
			},
			size: {
				type: "string",
				values: [
					"xs",
					"sm",
					"md"
				]
			}
		}
	},
	stat: {
		description: "One key figure: label above, value, optional delta line.",
		children: false,
		props: {
			label: {
				type: "string",
				required: true
			},
			value: {
				type: "string",
				required: true
			},
			delta: { type: "string" },
			trend: {
				type: "string",
				values: [
					"up",
					"down",
					"flat"
				]
			},
			hint: { type: "string" }
		}
	},
	progress: {
		description: "Horizontal bar; value out of max.",
		children: false,
		props: {
			value: {
				type: "number",
				required: true
			},
			max: { type: "number" },
			label: { type: "string" },
			color: {
				type: "string",
				values: TONES
			}
		}
	},
	table: {
		description: "Table from table-row/table-cell children; prefer markdown tables for static data.",
		children: true,
		props: {}
	},
	"table-row": {
		description: "Table row; the first row is the header.",
		children: true,
		props: {}
	},
	"table-cell": {
		description: "Table cell.",
		children: true,
		props: {
			align: {
				type: "string",
				values: [
					"start",
					"center",
					"end"
				]
			},
			width: { type: "string" }
		}
	},
	chart: {
		description: "Line, bar, area, or pie chart. data is an array of objects; xKey names the category field; series name the numeric fields.",
		children: false,
		props: {
			type: {
				type: "string",
				values: [
					"line",
					"bar",
					"area",
					"pie"
				],
				required: true
			},
			data: {
				type: "json",
				shape: "Array<Record<string, string | number>>",
				required: true
			},
			xKey: {
				type: "string",
				required: true
			},
			series: {
				type: "json",
				shape: "Array<{ key: string; label?: string }>",
				required: true
			},
			unit: { type: "string" },
			stacked: { type: "boolean" },
			height: {
				type: "number",
				min: 120,
				max: 480
			},
			xLabel: { type: "string" }
		}
	},
	slider: {
		description: "Range input. value and onChange bind it to state; marks label positions.",
		children: false,
		props: {
			min: {
				type: "number",
				required: true
			},
			max: {
				type: "number",
				required: true
			},
			step: { type: "number" },
			value: {
				type: "number",
				required: true
			},
			onChange: {
				type: "function",
				signature: "(value: number) => void",
				required: true
			},
			marks: {
				type: "json",
				shape: "Array<{ value: number; label: string }>"
			}
		}
	},
	"radio-group": {
		description: "Single choice; children are radio tags.",
		children: true,
		props: {
			value: {
				type: "string",
				required: true
			},
			onChange: {
				type: "function",
				signature: "(value: string) => void",
				required: true
			},
			direction: {
				type: "string",
				values: ["row", "col"]
			}
		}
	},
	radio: {
		description: "One option of a radio-group; children are its label.",
		children: true,
		props: { value: {
			type: "string",
			required: true
		} }
	},
	"segmented-control": {
		description: "Tab-like switch between a few options.",
		children: false,
		props: {
			options: {
				type: "json",
				shape: "Array<{ label: string; value: string }>",
				required: true
			},
			value: {
				type: "string",
				required: true
			},
			onChange: {
				type: "function",
				signature: "(value: string) => void",
				required: true
			},
			block: { type: "boolean" }
		}
	},
	select: {
		description: "Dropdown.",
		children: false,
		props: {
			options: {
				type: "json",
				shape: "Array<{ label: string; value: string }>",
				required: true
			},
			value: {
				type: "string",
				required: true
			},
			onChange: {
				type: "function",
				signature: "(value: string) => void",
				required: true
			}
		}
	},
	input: {
		description: "Text or number field. onChange receives the string.",
		children: false,
		props: {
			type: {
				type: "string",
				values: ["text", "number"]
			},
			value: {
				type: "string",
				required: true
			},
			onChange: {
				type: "function",
				signature: "(value: string) => void",
				required: true
			},
			placeholder: { type: "string" }
		}
	},
	checkbox: {
		description: "Checkbox; children are its label.",
		children: true,
		props: {
			checked: {
				type: "boolean",
				required: true
			},
			onChange: {
				type: "function",
				signature: "(checked: boolean) => void",
				required: true
			}
		}
	},
	button: {
		description: "Button. onClick runs an expression; use GenUI.issueNewTurn(text) to ask you something.",
		children: true,
		props: {
			onClick: {
				type: "function",
				signature: "() => void",
				required: true
			},
			color: {
				type: "string",
				values: ["primary", "secondary"]
			},
			variant: {
				type: "string",
				values: ["solid", "outline"]
			},
			size: {
				type: "string",
				values: [
					"sm",
					"md",
					"lg"
				]
			},
			block: { type: "boolean" },
			disabled: { type: "boolean" }
		}
	},
	image: {
		description: "Image from an https URL the reader can open.",
		children: false,
		props: {
			src: {
				type: "string",
				required: true
			},
			alt: { type: "string" },
			width: { type: "string" }
		}
	}
};
new Set(Object.keys(COMPONENTS));
//#endregion
//#region lib/types/shared/describe.js
/**
* The model-facing reference for the inline-UI dialect: the tag vocabulary
* printed from the manifest the renderer validates against, the grammar of
* expressions, blocks, and declarations the interpreter accepts, and two
* complete reply fragments. The vocabulary lines come from {@link COMPONENTS},
* so the text the model reads and the props the renderer accepts cannot drift.
*/
/** Model-facing type of one prop, e.g. `number(0..8)`, `"sm"|"md"`, `(value: number) => void`. */
function formatProp(prop) {
	switch (prop.type) {
		case "string": return prop.values === void 0 ? "string" : prop.values.map((value) => JSON.stringify(value)).join("|");
		case "number": {
			const min = prop.min === void 0 ? "" : String(prop.min);
			const max = prop.max === void 0 ? "" : String(prop.max);
			return min === "" && max === "" ? "number" : `number(${min}..${max})`;
		}
		case "boolean": return "boolean";
		case "function": return prop.signature;
		case "json": return prop.shape;
	}
}
/** One `- <tag> { props } [children] — description` line per manifest entry, in manifest order. */
const COMPONENT_LINES = Object.entries(COMPONENTS).map(([tag, spec]) => {
	const fields = Object.entries(spec.props).map(([name, prop]) => {
		const note = prop.description === void 0 ? "" : ` /* ${prop.description} */`;
		return `${name}${prop.required === true ? "" : "?"}: ${formatProp(prop)}${note}`;
	});
	const parts = [`<${tag}>`, fields.length === 0 ? "{}" : `{ ${fields.join(", ")} }`];
	if (spec.children) parts.push("[children]");
	parts.push(`— ${spec.description}`);
	return `- ${parts.join(" ")}`;
}).join("\n");
/** Example (a): a comparison with a picker whose recommendation follows local state. */
const EXAMPLE_COMPARISON = `## Which one to pick

<box gap={3}>
  <row align="start" gap={3}>
    <box flex="1" gap={1}>
      **Air 13**
      <title size="lg">$1,099</title>
      <text color="secondary" size="xs">1.23 kg · up to 18 h</text>
      **Best for carrying every day.**
    </box>
    <box flex="1" gap={1}>
      **Pro 14**
      <title size="lg">$1,599</title>
      <text color="secondary" size="xs">1.55 kg · up to 24 h</text>
      **Best for sustained heavy work.**
    </box>
  </row>
</box>

## Specs side by side

| Spec | Air 13 | Pro 14 |
|---|---:|---:|
| Price | $1,099 | $1,599 |
| Weight | 1.23 kg | 1.55 kg |
| Battery (video) | 18 h | 24 h |
| Fan | none | yes |

<caption>Manufacturer figures for the base configurations.</caption>

## Pick by how you work

Change the answers and the recommendation updates.

{@body const [usage, setUsage] = useState("development")}
{@body const [priority, setPriority] = useState("balance")}
{@body const picks = { air: { name: "Air 13", price: "$1,099", reason: "Light, and fast enough for everyday work and ordinary development." }, pro: { name: "Pro 14", price: "$1,599", reason: "Active cooling and the better display suit long builds and video work." } }}
{@body const choice = priority === "performance" || usage === "heavy" ? "pro" : "air"}
{@body const pick = picks[choice]}
<box border radius="2xl" padding={3} gap={3}>
  <label>Main use</label>
  <radio-group direction="col" value={usage} onChange={setUsage}>
    <radio value="office">Web, mail, documents</radio>
    <radio value="development">Programming, ordinary development</radio>
    <radio value="heavy">Docker, large builds, video editing</radio>
  </radio-group>
  <divider/>
  <label>What matters most</label>
  <radio-group direction="col" value={priority} onChange={setPriority}>
    <radio value="balance">Price and ease of use</radio>
    <radio value="portable">Weight</radio>
    <radio value="performance">Sustained performance</radio>
  </radio-group>
  <box background="surface-secondary" radius="xl" padding={3} gap={1}>
    <text color="secondary" size="xs">Our pick for you</text>
    <title size="xl">{pick.name}</title>
    <title size="lg">{pick.price}</title>
    {pick.reason}
    {#if choice === "pro"}
      <text color="secondary" size="xs">Higher-tier chips change the weight and battery figures.</text>
    {/if}
    <button color="primary" block onClick={() => GenUI.openUrl("https://www.apple.com/mac/")}>See configurations <icon name="arrow-up-right" size="sm"/></button>
  </box>
</box>`;
/** Example (b): a simulator whose chart and figures recompute from sliders and inputs, with one explicit send button. */
const EXAMPLE_SIMULATOR = `# Agent scaling simulator

Move the sliders; the figures and the chart follow. Starting values are assumptions.

{@body const [agents, setAgents] = useState(10)}
{@body const [capacity, setCapacity] = useState(50)}
{@body const [util, setUtil] = useState(80)}
{@body const [agentCost, setAgentCost] = useState(150)}
{@body const [taskCost, setTaskCost] = useState(0.1)}
{@body const [view, setView] = useState("tasks")}
{@body const calc = useCallback(n => { const tasks = n * capacity * util / 100; const monthly = tasks * 30; return { tasks, monthly, cost: n * agentCost + monthly * taskCost } }, [capacity, util, agentCost, taskCost])}
{@body const current = calc(agents)}
{@body const base = calc(5)}
{@body const fmt = n => Math.round(n).toLocaleString("en-US")}
{@body const rows = useMemo(() => Array.from({ length: 16 }, (_, i) => { const c = calc(i + 5); return { agents: String(i + 5), tasks: Math.round(c.tasks), cost: Math.round(c.cost) } }), [calc])}

<box border radius="2xl" padding={3} gap={3}>
  <row justify="between" align="center">
    <text weight="medium" size="sm">Agents</text>
    <title size="lg" tabularNums>{agents}</title>
  </row>
  <slider min={5} max={20} step={1} value={agents} onChange={setAgents} marks={[{ value: 5, label: "5" }, { value: 20, label: "20" }]}/>
  <row justify="between" align="center">
    <text weight="medium" size="sm">Utilisation</text>
    <text weight="medium" tabularNums>{util}%</text>
  </row>
  <slider min={20} max={100} step={5} value={util} onChange={setUtil}/>
  <grid columns={2} gap={3}>
    <box gap={1}>
      <label>Fixed cost per agent ($/month)</label>
      <input type="number" value={String(agentCost)} onChange={v => setAgentCost(Math.max(0, Number(v) || 0))}/>
    </box>
    <box gap={1}>
      <label>Variable cost per task ($)</label>
      <input type="number" value={String(taskCost)} onChange={v => setTaskCost(Math.max(0, Number(v) || 0))}/>
    </box>
  </grid>
</box>

## Results

<grid columns={2} gap={2}>
  <stat label="Tasks per day" value={fmt(current.tasks)} delta={\`+\${((current.tasks / base.tasks - 1) * 100).toFixed(0)}% vs 5 agents\`} trend="up"/>
  <stat label="Monthly cost" value={\`$\${fmt(current.cost)}\`} hint={\`$\${(current.cost / current.monthly).toFixed(2)} per task\`}/>
</grid>

<box border radius="2xl" padding={3} gap={2}>
  <segmented-control block value={view} onChange={setView} options={[{ label: "Tasks / day", value: "tasks" }, { label: "Monthly cost", value: "cost" }]}/>
  <chart type={view === "tasks" ? "bar" : "line"} data={rows} xKey="agents" xLabel="Agents" series={[{ key: view, label: view === "tasks" ? "Tasks / day" : "Monthly cost ($)" }]}/>
  <caption>5 to 20 agents under the settings above.</caption>
</box>

<button color="primary" block onClick={() => GenUI.issueNewTurn(\`Analyse this setup: \${agents} agents, \${capacity} tasks/day each at \${util}% utilisation, $\${agentCost}/agent/month, $\${taskCost}/task. Current estimate: \${fmt(current.tasks)} tasks/day for $\${fmt(current.cost)}/month. Where is the cost-efficient agent count?\`)}><icon name="send" size="sm"/> Analyse these settings</button>`;
/**
* Assemble the dialect reference the system prompt carries: tag syntax,
* expressions, blocks, declarations, the host API, the vocabulary derived
* from the manifest, and two complete examples.
* @returns the reference text; stable for one manifest, so call it once at registration.
*/
function describeInlineUi() {
	return `FORMAT: components are lowercase tags written directly in the markdown body, between and inside paragraphs: \`<box gap={3} border radius="xl">…</box>\`, \`<slider min={5} max={20} value={n} onChange={setN}/>\`. Props: \`name="literal"\`, \`name={expression}\`, bare \`name\` for true. Self-close tags without children. Text inside a tag is markdown (bold, lists, tables, headings) with \`{expression}\` interpolation. Only the tags listed below are components; anything else is ordinary text. Indentation is free.

EXPRESSIONS: a JavaScript subset. Literals, template strings, arrays and objects (shorthand allowed), member access \`.\` \`?.\` \`[]\`, calls, unary \`! - +\`, arithmetic, comparison, \`&& || ??\`, ternaries, and arrow functions (expression body, or a \`{ const …; return … }\` body). No assignment, loops, \`new\`, \`eval\`, classes, or prototype access. Globals: \`Math\`, \`Number\`, \`String\`, \`Boolean\`, \`Array.from/isArray\`, \`Object.keys/values/entries\`, \`JSON.stringify\`. Methods: arrays map filter reduce slice join find findIndex some every includes indexOf sort reverse flat concat at length (sort and reverse return copies); strings toFixed toLocaleString toUpperCase toLowerCase trim split replace startsWith endsWith padStart padEnd repeat includes slice at length; numbers toFixed toLocaleString. One failing expression only blanks its own value; the rest of the message still renders, so keep object and array literals exact.

BLOCKS: \`{#each items as item}…{/each}\` or \`{#each items as item, i}…{/each}\` repeats its body; \`{#if cond}…{:else}…{/if}\` chooses. Blocks may wrap tags, markdown, or both.

DECLARATIONS: \`{@body const …}\` on its own line declares a name visible to every later expression in the message, in source order:
- \`{@body const [count, setCount] = useState(10)}\` — local state; the setter takes a value or an updater function.
- \`{@body const total = price * count}\` — a derived value, recomputed on every change.
- \`{@body const calc = useCallback(n => n * rate, [rate])}\` and \`{@body const rows = useMemo(() => Array.from({length: 12}, (_, i) => calc(i)), [calc])}\` — the same, written the React way (\`DIL.useState\` etc. are accepted too).
Put declarations before the tags that use them.

HOST API: \`GenUI.issueNewTurn(text)\` sends \`text\` as the user's next message to you; \`GenUI.openUrl(url)\` opens an https URL. Both are only for \`onClick\`.

COMPONENTS (props marked ? are optional; number(lo..hi) bounds and listed values are enforced, other values are dropped):
${COMPONENT_LINES}

EXAMPLE A (comparison with a picker):
${EXAMPLE_COMPARISON}

EXAMPLE B (simulator with a chart and one send button):
${EXAMPLE_SIMULATOR}`;
}
//#endregion
//#region lib/types/shared/guidance.js
/**
* System-prompt section that tells the model when live components beat
* prose, how to weave them into the markdown body, and how interaction
* reaches it. The dialect reference generated from the manifest is appended.
*/
/** Section order: after MCP server instructions (3100), before the tools SDK (5000). */
const INLINE_UI_GUIDANCE_ORDER = 3200;
/** Section name registered with `systemPrompt.section`. */
const INLINE_UI_GUIDANCE_SECTION = "inline-ui:guidance";
/** The routing policy; the dialect reference follows it in {@link inlineUiGuidance}. */
const POLICY = `# Inline UI
Your reply is markdown, and you may write live components directly into it: a lowercase tag such as \`<slider …/>\` or \`<box>…</box>\` placed between or inside your paragraphs renders in place as a working control, figure, or chart while you are still writing. There is no fence, no JSON block, and no tool call; the components are part of the prose. Decide the shape of each reply yourself, do not ask the user which they prefer, and never mention the mechanism.

Stay with plain text when the request is:
- a greeting, small talk, an opinion, a yes/no question, a single fact, number, or date;
- an explanation of a concept, mechanism, or trade-off that reads naturally as prose;
- code the user will copy, shell commands, or work inside the workspace (reading, editing, running files);
- anything the user explicitly asked for as text, a list, or a short reply.
Plain markdown tables, lists, and headings need no tags; use a \`<table>\` only when rows come from an expression.

Reach for components when the reader would otherwise scan or compute:
- comparing options along the same attributes: a row of boxes, a markdown table, bars built from \`<progress>\` or sized boxes;
- a handful of numbers that carry the message: \`<stat>\` tiles, a \`<chart>\`;
- a value the user should set or explore: \`<slider>\`, \`<input>\`, \`<radio-group>\`, \`<segmented-control>\`, with figures that recompute from state;
- a decision from fixed choices, where the recommendation follows the choice.
Structure a long reply with markdown headings and give each section its own component; introduce a component with a sentence, place it, and continue. Around a component write at most one or two sentences of framing or insight; do not restate what it shows.

How interaction works:
- Whatever the browser can do on its own happens there: moving a slider, switching a segmented control, picking a radio, or typing a number updates every expression that reads the state, instantly, without involving you. Design simulators and pickers so that all of that is local.
- Only \`GenUI.issueNewTurn(text)\` reaches you, as the user's NEXT message. Attach it to one explicit \`<button>\` whose label says what will be asked, and compose \`text\` from the current state in a template string so the request carries the settings and figures. Do not wait for it in the current turn, do not trigger it yourself, and reserve it for requests that genuinely need you: an analysis, more data, a decision, the next step.
- If the user asks to change the UI, write the whole reply again with the new components; there is no partial update.

Diagrams: for a process flow, sequence, state machine, timeline, or architecture, write a fenced \`\`\`mermaid block; it renders as a themed diagram in place. In flowcharts use \`flowchart TD\` or \`LR\`, short node labels (an emoji prefix is fine), \`{…}\` decisions with labelled \`-->|Yes|\` edges, and group nodes by role with \`classDef\` (stroke and fill colors) plus \`class A,B role\`; the renderer keeps each role's hue and adapts it to the theme. Write a label as a short title, then \`<br/>\` and at most one or two short detail lines (the title is set bold, details regular); keep each line under about 16 full-width characters. Keep diagrams to about a dozen nodes and prefer a forward flow: every edge that loops back crosses the others, so fold retries into one loop or describe them in prose.

Quality bar:
- Fill components with real data only; if a figure is unknown, say so or ask rather than estimating silently. When a simulator starts from assumptions, say so and show them.
- Keep each tree small: a few rows, points, or options beat an exhaustive dump, and prop text stays short.
- Format numbers in expressions: \`toLocaleString()\` for counts and money, \`toFixed(n)\` for ratios; add the unit next to the figure.
- Declare state with \`{@body …}\` before the tags that use it; derive values in \`{@body}\` once instead of repeating a formula in several props.
- A tag outside the list below is shown as text, a prop outside its bounds is dropped, and a failing expression blanks only its own value: write object and array literals exactly, close every tag, and keep expressions to the subset described below.

`;
/**
* The complete section text: routing policy followed by the dialect reference.
* @returns the text; stable for one manifest.
*/
function inlineUiGuidance() {
	return POLICY + describeInlineUi();
}
//#endregion
//#region lib/types/index.js
/** Cordis plugin name. */
const name = "inline-ui";
/** No hard service requirements; the prompt section is injected lazily. */
const inject = [];
const Config = z.object({ injectGuidance: z.boolean().default(true) });
/**
* Register the system-prompt guidance when configured.
* @param ctx - plugin context; `systemPrompt` is resolved through `ctx.inject`.
* @param config - resolved plugin config (schemastery has applied the defaults).
*/
function apply(ctx, config) {
	if (!(config.injectGuidance ?? true)) return;
	const text = inlineUiGuidance();
	ctx.inject(["systemPrompt"], (child) => {
		child.systemPrompt.section({
			name: INLINE_UI_GUIDANCE_SECTION,
			order: INLINE_UI_GUIDANCE_ORDER,
			text
		});
	});
}
//#endregion
export { Config, apply, inject, name };
