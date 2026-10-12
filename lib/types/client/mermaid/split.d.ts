/**
 * Split top-level markdown into prose and ```` ```mermaid ```` fences so a
 * diagram can render in place of its code block. Other fences stay inside
 * the prose untouched; a mermaid fence still streaming is reported open.
 */
/** One run of the message: markdown to hand to MarkdownText, or a diagram source. */
export type Segment = {
    readonly kind: 'markdown';
    readonly text: string;
} | {
    readonly kind: 'mermaid';
    readonly code: string;
    readonly closed: boolean;
};
/**
 * Whether a markdown text contains a mermaid fence opening.
 * @param text - message or text-node source.
 * @returns true when a line opens a ```` ```mermaid ```` fence.
 */
export declare function hasMermaidFence(text: string): boolean;
/**
 * Split markdown into prose and mermaid segments, in order.
 * @param text - markdown source, possibly still streaming.
 * @returns the segments; a text without mermaid fences yields one markdown segment.
 */
export declare function splitMermaid(text: string): readonly Segment[];
//# sourceMappingURL=split.d.ts.map