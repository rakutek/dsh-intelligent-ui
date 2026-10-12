/**
 * Evaluate a tag's props against the manifest. Every expression is evaluated
 * in isolation and a failure yields `undefined` for that prop only, so one
 * bad expression never takes the whole message down (ChatGPT's `__dilSafe`).
 * Values are coerced loosely (a numeric string satisfies a number prop, a
 * number satisfies a string prop) and props the manifest does not list are
 * dropped.
 */
import type { Expression, PropValue } from '../../shared/ast.ts';
import type { Interpreter, Scope, Value } from '../../shared/interpreter.ts';
/** An event handler bound to the interpreter; never throws. */
export type Handler = (...args: Value[]) => void;
/** Evaluated, coerced props of one tag: strings, finite numbers, booleans, handlers, or raw JSON values. */
export type ResolvedProps = Readonly<Record<string, unknown>>;
/**
 * Evaluate one expression, swallowing failures.
 * @param interpreter - the message interpreter.
 * @param expression - the expression to evaluate.
 * @param scope - variables in view.
 * @returns the value, or undefined when evaluation failed.
 */
export declare function evaluate(interpreter: Interpreter, expression: Expression, scope: Scope): Value;
/**
 * Format an interpolated value as the model would expect React to: strings
 * and numbers as-is, nullish as nothing, arrays concatenated, objects as JSON.
 * @param value - the evaluated value.
 * @returns display text.
 */
export declare function formatValue(value: Value): string;
/**
 * Join a text node's literal and expression parts into one string.
 * @param interpreter - the message interpreter.
 * @param parts - literal text and expressions in order.
 * @param scope - variables in view.
 * @returns the interpolated text.
 */
export declare function interpolate(interpreter: Interpreter, parts: readonly (string | Expression)[], scope: Scope): string;
/**
 * Evaluate and coerce a tag's props.
 * @param interpreter - the message interpreter.
 * @param tag - the tag name (a manifest key).
 * @param props - the parsed prop values.
 * @param scope - variables in view.
 * @returns the manifest-listed props that evaluated to a usable value.
 */
export declare function resolveProps(interpreter: Interpreter, tag: string, props: Readonly<Record<string, PropValue>>, scope: Scope): ResolvedProps;
/**
 * A string prop.
 * @param props - resolved props.
 * @param name - prop name.
 * @returns the string, or undefined when absent or of another type.
 */
export declare function str(props: ResolvedProps, name: string): string | undefined;
/**
 * A number prop.
 * @param props - resolved props.
 * @param name - prop name.
 * @returns the finite number, or undefined when absent or of another type.
 */
export declare function num(props: ResolvedProps, name: string): number | undefined;
/**
 * A boolean prop.
 * @param props - resolved props.
 * @param name - prop name.
 * @returns true only when the prop resolved to true.
 */
export declare function bool(props: ResolvedProps, name: string): boolean;
/**
 * A handler prop.
 * @param props - resolved props.
 * @param name - prop name.
 * @returns the bound handler, or undefined when absent.
 */
export declare function handler(props: ResolvedProps, name: string): Handler | undefined;
//# sourceMappingURL=props.d.ts.map