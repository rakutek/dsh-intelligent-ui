/**
 * Text-bearing tags. Their children are a phrase (inline markdown with
 * interpolations), never block markdown, so they can sit inside a title or a
 * button without breaking the line.
 */
import type { ReactNode } from 'react';
import type { ComponentProps } from '../render/context.ts';
/** Tone classes shared by text, badge, and progress. */
export declare const TONE_CLASS: Readonly<Record<string, string | undefined>>;
/**
 * Render a `title`.
 * @param props - the node, its props, and scope.
 * @returns heading-weight text.
 */
export declare function Title({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `text`.
 * @param props - the node, its props, and scope.
 * @returns body text, inline when asked.
 */
export declare function Text({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `caption`.
 * @param props - the node and scope.
 * @returns a small secondary note.
 */
export declare function Caption({ node, scope }: ComponentProps): ReactNode;
/**
 * Render a `label`.
 * @param props - the node and scope.
 * @returns a form label line.
 */
export declare function Label({ node, scope }: ComponentProps): ReactNode;
/**
 * Render a `badge`.
 * @param props - the node, its props, and scope.
 * @returns a pill.
 */
export declare function Badge({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `stat`.
 * @param props - the node and its props.
 * @returns label, value, and delta line.
 */
export declare function Stat({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `progress`.
 * @param props - the node and its props.
 * @returns a labelled bar.
 */
export declare function Progress({ props }: ComponentProps): ReactNode;
//# sourceMappingURL=text.d.ts.map