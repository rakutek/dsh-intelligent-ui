/** `inlineUi` namespace dictionaries for the inline generative-UI renderer. */
import type { MarkdownLabels } from '@deepseek-ai/dsh-client-ui-primitives';
/** Dictionary namespace owned by this plugin. */
export declare const NS = "inlineUi";
/** Simplified Chinese dictionary (the key-set source of truth). */
export declare const zh: {
    'action.sent': string;
    'action.failed': string;
    'action.notReady': string;
    'action.rateLimited': string;
    'action.tooLong': string;
    'action.regenerate': string;
    'action.regeneratePrompt': string;
    'stopped.notice': string;
    'mermaid.rendering': string;
    'mermaid.error': string;
    'markdown.copy': string;
    'markdown.copied': string;
    'markdown.codeBlock.title': string;
    'markdown.codeBlock.wrap': string;
    'markdown.codeBlock.unwrap': string;
    'markdown.footnotes': string;
    'chart.legendToggle': string;
    'chart.empty': string;
    'table.sortAsc': string;
    'table.sortDesc': string;
    'image.open': string;
    'image.unavailable': string;
};
/** The inlineUi namespace key union. */
export type InlineUiKey = keyof typeof zh;
/** Translate one key of the `inlineUi` namespace. */
export type Translate = (key: InlineUiKey) => string;
/** English dictionary, checked complete against the zh key set. */
export declare const en: {
    'action.sent': string;
    'action.failed': string;
    'action.notReady': string;
    'action.rateLimited': string;
    'action.tooLong': string;
    'action.regenerate': string;
    'action.regeneratePrompt': string;
    'stopped.notice': string;
    'mermaid.rendering': string;
    'mermaid.error': string;
    'markdown.copy': string;
    'markdown.copied': string;
    'markdown.codeBlock.title': string;
    'markdown.codeBlock.wrap': string;
    'markdown.codeBlock.unwrap': string;
    'markdown.footnotes': string;
    'chart.legendToggle': string;
    'chart.empty': string;
    'table.sortAsc': string;
    'table.sortDesc': string;
    'image.open': string;
    'image.unavailable': string;
};
/**
 * Build the `MarkdownText` chrome labels from this namespace.
 * @param t - translator for the `inlineUi` namespace.
 * @returns labels for fence toolbars and the footnote section.
 */
export declare function markdownLabels(t: Translate): MarkdownLabels;
//# sourceMappingURL=locales.d.ts.map