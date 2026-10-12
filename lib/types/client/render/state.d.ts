/**
 * The {@link StateStore} behind a message's `useState` declarations. Values
 * are keyed by declaration index, restored from `ui-state.ts` on creation, and
 * written back on every set; `onChange` re-renders the message.
 */
import type { StateStore } from '../../shared/interpreter.ts';
/**
 * Create the store for one message.
 * @param messageId - persistence key.
 * @param onChange - called after every write.
 * @returns the store.
 */
export declare function createMessageStore(messageId: string, onChange: () => void): StateStore;
//# sourceMappingURL=state.d.ts.map