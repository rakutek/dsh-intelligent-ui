/**
 * The globals and prototype methods expressions may reach. Everything else
 * (including `Function`, `Date`, timers, and any DOM) is invisible: an
 * identifier that is not declared, bound, or listed here is a reference error.
 */
import type { Callable, Value } from '../interpreter.ts';
/** Thrown for runtime failures inside an expression (type errors, reference errors, budget). */
export declare class EvaluationFailure extends Error {
    /** @param message - a JS-style message, e.g. `x is not defined`. */
    constructor(message: string);
}
/**
 * Whether `value` can be invoked. Closures the evaluator creates and host
 * functions are both plain functions; nothing else is callable.
 * @param value - any value.
 * @returns the narrowed callable.
 */
export declare const isCallable: (value: Value) => value is Callable;
/**
 * Narrow to `object` (including arrays and functions) or fail like JS does.
 * @param value - any value.
 * @param what - operation name for the error message.
 * @returns the same value typed as object.
 */
export declare const asObject: (value: Value, what: string) => object;
/** Property names that reach the prototype chain or constructors; rejected on every object. */
export declare const FORBIDDEN_KEYS: Readonly<Record<string, true>>;
/** Array methods callable from expressions. `sort` and `reverse` are redirected to copying forms by the evaluator. */
export declare const ARRAY_METHODS: Readonly<Record<string, true>>;
/** String methods callable from expressions. */
export declare const STRING_METHODS: Readonly<Record<string, true>>;
/** Number methods callable from expressions. */
export declare const NUMBER_METHODS: Readonly<Record<string, true>>;
/** Global bindings visible to every expression; the outermost scope frame. */
export declare const GLOBALS: Readonly<Record<string, Value>>;
//# sourceMappingURL=builtins.d.ts.map