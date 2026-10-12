/**
 * Contract of the expression interpreter. It evaluates a JavaScript subset
 * without `eval`: literals, template literals, arrays, objects, member
 * access, calls on an allowlist, arithmetic, comparison, logic, ternaries,
 * and arrow functions. Assignment, loops, prototype access, and globals
 * outside {@link Interpreter} are rejected; evaluation is step-bounded.
 */
/** Any value the interpreter produces; host-visible values are JSON-like plus callable closures. */
export type Value = unknown;
/** A callable the interpreter created or the host supplied. */
export type Callable = (...args: Value[]) => Value;
/** Host capabilities exposed to expressions as `GenUI.*`. */
export interface HostApi {
    /** `GenUI.issueNewTurn(text)`: queue `text` as the user's next message. */
    readonly issueNewTurn: (text: string) => void;
    /** `GenUI.openUrl(url)`: open an https URL. */
    readonly openUrl: (url: string) => void;
}
/**
 * Keyed state behind `useState`. The renderer supplies one per message;
 * keys are the declaration order within that message.
 */
export interface StateStore {
    /** @param key - declaration index. @param initial - value when unset. @returns the current value. */
    readonly get: (key: number, initial: Value) => Value;
    /** @param key - declaration index. @param value - new value, or an updater function `(previous) => next`. */
    readonly set: (key: number, value: Value) => void;
}
/** One evaluation scope: variables visible to expressions. */
export type Scope = Readonly<Record<string, Value>>;
/** Failure the interpreter reports instead of throwing into React. */
export interface EvaluationError {
    readonly message: string;
    /** Expression source that failed. */
    readonly source: string;
}
/** Result of one evaluation or call: the value, or the contained error. */
export type Outcome = {
    readonly ok: true;
    readonly value: Value;
} | {
    readonly ok: false;
    readonly error: EvaluationError;
};
export interface Interpreter {
    /**
     * Run the message's `{@body}` declarations in order and return the scope they define.
     * `useState` reads/writes `state` by declaration index; `useMemo(fn)` and
     * `useCallback(fn)` evaluate `fn` immediately (deps are ignored).
     * @param statements - the declaration sources in message order.
     * @param state - keyed state for this message.
     * @param host - `GenUI` capabilities.
     * @returns the scope and any declaration that failed (its name is left undefined).
     */
    readonly declare: (statements: readonly string[], state: StateStore, host: HostApi) => {
        readonly scope: Scope;
        readonly errors: readonly EvaluationError[];
    };
    /**
     * Evaluate one expression in a scope.
     * @param source - expression source.
     * @param scope - variables, including those from {@link declare} and loop bindings.
     * @returns the value, or the error; never throws.
     */
    readonly evaluate: (source: string, scope: Scope) => Outcome;
    /**
     * Call a value produced by {@link evaluate} with arguments (an event handler).
     * @returns completion or the error; never throws.
     */
    readonly call: (callable: Value, args: readonly Value[]) => Outcome;
}
//# sourceMappingURL=interpreter.d.ts.map