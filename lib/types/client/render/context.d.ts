/**
 * What every rendered node needs from the message: the interpreter, the
 * component registry, localisation, and the send state. Supplied once by
 * `InlineUiMessage` through React context so deep nodes and components do
 * not thread it by hand.
 */
import { type ComponentType } from 'react';
import type { MarkdownFileMentions, MarkdownLabels } from '@deepseek-ai/dsh-client-ui-primitives';
import type { ElementNode } from '../../shared/ast.ts';
import type { Interpreter, Scope } from '../../shared/interpreter.ts';
import type { Translate } from '../locales.ts';
import type { ResolvedProps } from './props.ts';
/** Inputs of one component renderer: the tag's node, its evaluated props, and the scope its children see. */
export interface ComponentProps {
    readonly node: ElementNode;
    readonly props: ResolvedProps;
    readonly scope: Scope;
}
/** Per-message rendering services. */
export interface RenderContext {
    readonly interpreter: Interpreter;
    /** Tag → renderer; the parser only emits tags the manifest lists, so a miss is a programming error and renders nothing. */
    readonly components: Readonly<Record<string, ComponentType<ComponentProps>>>;
    readonly t: Translate;
    readonly labels: MarkdownLabels;
    /** File-mention vocabulary for the message's prose, when the Turn produced files. */
    readonly fileMentions: MarkdownFileMentions | undefined;
    /** The message is still arriving. */
    readonly streaming: boolean;
    /** A follow-up send is in flight; action controls disable themselves. */
    readonly busy: boolean;
}
/** Provider of the per-message {@link RenderContext}. */
export declare const RenderContextProvider: import("react").Provider<RenderContext | undefined>;
/**
 * Read the per-message rendering services.
 * @returns the context; throws outside `InlineUiMessage`.
 */
export declare function useRenderContext(): RenderContext;
//# sourceMappingURL=context.d.ts.map