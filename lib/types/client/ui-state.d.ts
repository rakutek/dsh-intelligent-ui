/** Longest serialised state kept for one message; larger writes are refused so one UI cannot hog storage. */
export declare const MAX_STATE_CHARS = 100000;
/** Stored messages beyond this count are evicted oldest-first. */
export declare const MAX_STATE_ENTRIES = 200;
/** State values keyed by declaration index (as a string, since JSON object keys are strings). */
export type MessageState = Readonly<Record<string, unknown>>;
/**
 * Read the persisted state of one message.
 * @param messageId - the message identity.
 * @returns the last saved values, or undefined when none are stored.
 */
export declare function loadUiState(messageId: string): MessageState | undefined;
/**
 * Persist the state of one message. Memory is always updated; the storage
 * mirror is skipped when the entry would exceed {@link MAX_STATE_CHARS} or
 * storage refuses the write.
 * @param messageId - the message identity.
 * @param state - the full value map.
 */
export declare function saveUiState(messageId: string, state: MessageState): void;
//# sourceMappingURL=ui-state.d.ts.map