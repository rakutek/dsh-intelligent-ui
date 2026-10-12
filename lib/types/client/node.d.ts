/**
 * The `assistant-step` Chat node renderer inline-ui registers one priority
 * below DSH's own, so it shadows it (lowest priority renders). Messages
 * without markup are handed straight to DSH's renderer with the props this
 * entry received; a message with component tags or a mermaid fence renders
 * its reasoning and images through DSH's renderer and its text here. Both
 * run inside the Chat view's tree, so file links, local images, link
 * opening, and file mentions behave as in any other message.
 */
import { type ComponentType, type ReactNode } from 'react';
import type { MarkdownLabels } from '@deepseek-ai/dsh-client-ui-primitives';
import type { InjectFace, PropsRenderFactories } from '@deepseek-ai/dsh-client-ui-slots';
import type { ChatNodeViewProps, PresentationInjected, ReasoningBodyOwnerProps } from '@deepseek-ai/dsh-client-ui-chat/client';
import type { Translate } from './locales.ts';
/** The one child render DSH's assistant renderer performs: a reasoning block's body. */
type ReasoningBodyRender = (key: 'conversation.chat.reasoning.body', owner: ReasoningBodyOwnerProps) => ReactNode;
/** Props DSH's own assistant renderer reads; this entry shadows it and delegates to it. */
export type DshAssistantProps = ChatNodeViewProps<'assistant-step'> & InjectFace<PresentationInjected> & {
    readonly renderSlot: ReasoningBodyRender;
};
/** What the plugin supplies to every rendered node of one Session. */
export interface InlineAssistantHost {
    /** DSH's assistant renderer, found under the same slot cell. */
    readonly Dsh: ComponentType<DshAssistantProps>;
    /** The Session this transcript belongs to; Node keys repeat across Sessions. */
    readonly sessionId: string;
    /** Queue a follow-up as the user's next message in this Session. */
    readonly send: (text: string) => Promise<void>;
    readonly openUrl: (url: string) => void;
    readonly t: Translate;
    readonly labels: MarkdownLabels;
}
/** Inject face: DSH's presentation hook source plus the plugin host. */
export interface InlineAssistantInjected extends PresentationInjected {
    readonly inline: InlineAssistantHost;
}
type InlineAssistantNodeProps = ChatNodeViewProps<'assistant-step'> & InjectFace<InlineAssistantInjected> & PropsRenderFactories;
/**
 * Render one assistant step: DSH's renderer for plain messages, the inline-UI
 * renderer for the text of messages with markup.
 * @param props - the Chat node props this slot cell receives.
 * @returns the assistant step.
 */
export declare const InlineAssistantNode: import("react").MemoExoticComponent<(props: InlineAssistantNodeProps) => ReactNode>;
export {};
//# sourceMappingURL=node.d.ts.map