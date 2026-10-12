/**
 * The markdown subset a phrase inside `title`, `text`, `button`, `badge`,
 * and the like accepts: `**bold**`, `*italic*`, `` `code` ``,
 * `[label](https://…)`, and line breaks. Emitted as React nodes from a
 * character scan, so model-written text can never inject markup and no block
 * wrapper breaks the surrounding inline flow.
 */
import { type ReactNode } from 'react';
/**
 * Render inline markdown.
 * @param props - the source text.
 * @returns a fragment of text, `strong`, `em`, `code`, `a`, and `br` nodes.
 */
export declare function InlineMarkdown({ text }: {
    text: string;
}): ReactNode;
//# sourceMappingURL=InlineMarkdown.d.ts.map