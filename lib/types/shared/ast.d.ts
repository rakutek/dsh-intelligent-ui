/**
 * Syntax tree of one assistant message written in the inline-UI dialect:
 * markdown with component tags, `{expression}` interpolations, `{#each}` /
 * `{#if}` blocks, and `{@body …}` declarations. The parser is tolerant: a
 * message still streaming yields a tree whose last node may be `open`.
 */
/** Source position for diagnostics; offsets are UTF-16 indices into the message text. */
export interface Span {
    readonly start: number;
    readonly end: number;
}
/** A parsed expression; the interpreter owns the node shapes behind `root`. */
export interface Expression {
    /** The expression source as written, for diagnostics and identity. */
    readonly source: string;
    readonly span: Span;
}
/** A prop value: a literal string, a bare boolean, or an expression to evaluate per render. */
export type PropValue = {
    readonly kind: 'string';
    readonly value: string;
} | {
    readonly kind: 'boolean';
    readonly value: true;
} | {
    readonly kind: 'expression';
    readonly expression: Expression;
};
/**
 * Markdown text between tags; at the top level it is block markdown, inside a
 * tag it is compact markdown. May contain inline `{expr}` parts.
 */
export interface TextNode {
    readonly kind: 'text';
    /** Alternating literal text and interpolations, in order. */
    readonly parts: readonly (string | Expression)[];
    readonly span: Span;
}
/** A component tag with its props and children. */
export interface ElementNode {
    readonly kind: 'element';
    readonly tag: string;
    readonly props: Readonly<Record<string, PropValue>>;
    readonly children: readonly Node[];
    /** True while the closing tag has not arrived (streaming); the renderer treats the children as complete so far. */
    readonly open: boolean;
    readonly span: Span;
}
/** `{#each items as item}` or `{#each items as item, index}` … `{/each}`. */
export interface EachNode {
    readonly kind: 'each';
    readonly items: Expression;
    readonly itemName: string;
    readonly indexName?: string;
    readonly children: readonly Node[];
    readonly open: boolean;
    readonly span: Span;
}
/** `{#if cond}` … `{:else}` … `{/if}`. */
export interface IfNode {
    readonly kind: 'if';
    readonly condition: Expression;
    readonly consequent: readonly Node[];
    readonly alternate: readonly Node[];
    readonly open: boolean;
    readonly span: Span;
}
/**
 * `{@body <statement>}`: one declaration hoisted into the message scope in
 * source order. The statement source is one of
 * `const [x, setX] = useState(init)` (also `DIL.useState`),
 * `const x = expr`, `const f = useCallback(fn, deps)`, `const v = useMemo(fn, deps)`.
 * The interpreter parses it; the renderer only orders them.
 */
export interface DeclarationNode {
    readonly kind: 'declaration';
    readonly statement: Expression;
    readonly span: Span;
}
export type Node = TextNode | ElementNode | EachNode | IfNode | DeclarationNode;
/** One parsed message. */
export interface Document {
    readonly nodes: readonly Node[];
    /** Whether any component tag, block, or declaration appears; a plain markdown message is left to DSH. */
    readonly hasMarkup: boolean;
    /** Parse problems that did not stop rendering, e.g. an unknown closing tag. */
    readonly problems: readonly {
        readonly message: string;
        readonly span: Span;
    }[];
}
//# sourceMappingURL=ast.d.ts.map