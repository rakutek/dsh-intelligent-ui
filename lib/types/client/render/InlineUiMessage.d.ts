/**
 * One assistant message in the inline-UI dialect, rendered in place: parse
 * the text, run its declarations against a persisted per-message state,
 * then draw markdown and components in reading order. `GenUI.issueNewTurn`
 * goes through a send guard (empty, length, arm delay, rate limit) and the
 * message shows the outcome as a notice.
 */
import { type ReactNode } from 'react';
import type { MarkdownFileMentions, MarkdownLabels } from '@deepseek-ai/dsh-client-ui-primitives';
import type { Document } from '../../shared/ast.ts';
import type { Translate } from '../locales.ts';
/** Lifecycle of the message being rendered. */
export type MessageStatus = 'running' | 'settled' | 'interrupted';
/** Inputs of {@link InlineUiMessage}. */
export interface InlineUiMessageProps {
    /** The whole message text parsed: markdown plus component tags. */
    readonly document: Document;
    readonly status: MessageStatus;
    /** Stable identity; interaction state persists under it. */
    readonly messageId: string;
    /** Queue a follow-up as the user's next message. */
    readonly send: (text: string) => Promise<void>;
    /** Open an external URL. */
    readonly openUrl: (url: string) => void;
    readonly t: Translate;
    /** Reference-stable per locale: a new identity discards the streaming markdown cache. */
    readonly labels: MarkdownLabels;
    /** Inline-code tokens that name files this Turn produced become file links in settled prose. */
    readonly fileMentions?: MarkdownFileMentions | undefined;
}
/**
 * Render one inline-UI message.
 * @param props - the text, its lifecycle, identity, and session faces.
 * @returns the message body.
 */
export declare function InlineUiMessage({ document, status, messageId, send, openUrl, t, labels, fileMentions }: InlineUiMessageProps): ReactNode;
//# sourceMappingURL=InlineUiMessage.d.ts.map