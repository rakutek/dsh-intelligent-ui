/**
 * Parser for the inline-UI dialect: markdown with component tags from the
 * manifest, `{expr}` interpolations, `{#each}`/`{#if}` blocks, and `{@body}`
 * declarations. It is a single left-to-right scan that treats fenced and
 * inline code, TeX spans, and anything that does not parse as text, and that
 * truncates an unfinished construct at the end of a streaming message
 * instead of showing it half-written.
 */
import type { Document } from '../ast.ts';
/**
 * Parse one assistant message, complete or still streaming.
 * @param text - the message text (markdown with inline-UI markup).
 * @returns the document; never throws.
 */
export declare const parseDocument: (text: string) => Document;
//# sourceMappingURL=parse.d.ts.map