/**
 * Tree-walking evaluator for the expression AST. Values are plain JavaScript
 * values; arrow functions become real closures over a {@link Frame}. Member
 * access never reaches prototypes except through the method allowlists in
 * `builtins.ts`, and every evaluation is bounded by a step budget so a
 * runaway expression fails instead of freezing the client.
 */
import type { Value } from '../interpreter.ts';
import type { Expr, Pattern, Statement } from './nodes.ts';
/** One lexical scope: bindings plus the enclosing frame. */
export declare class Frame {
    readonly vars: Map<string, Value>;
    readonly parent: Frame | null;
    /** @param vars - bindings owned by this frame. @param parent - enclosing frame, or null for the globals. */
    constructor(vars: Map<string, Value>, parent: Frame | null);
    /** @param name - identifier. @returns the binding. @throws EvaluationFailure when no frame binds `name`. */
    lookup(name: string): Value;
}
/**
 * Collect the identifiers a pattern binds, for clearing them when a declaration fails.
 * @param pattern - the binding target.
 * @param into - accumulator.
 * @returns `into`.
 */
export declare const patternNames: (pattern: Pattern, into?: string[]) => string[];
/** Evaluates expressions and statements; one instance per interpreter, shared by all closures it creates. */
export declare class Evaluator {
    private steps;
    private depth;
    /**
     * Run one top-level evaluation or handler call with a fresh step budget.
     * Nested runs (closures invoked by native methods) share the outer budget.
     * @param body - the work.
     * @returns whatever `body` returns.
     */
    run<T>(body: () => T): T;
    /**
     * Evaluate an expression in a frame.
     * @param node - the expression.
     * @param frame - bindings.
     * @returns the value.
     * @throws EvaluationFailure or any error a host function throws.
     */
    evaluate(node: Expr, frame: Frame): Value;
    /**
     * Execute statements in a frame; `const` adds bindings to that frame.
     * @param statements - the block body.
     * @param frame - the block's own frame.
     * @returns the `return` value, or undefined when the block ends without one.
     */
    execute(statements: readonly Statement[], frame: Frame): Value;
    /**
     * Bind a pattern to a value in a frame.
     * @param pattern - destructuring target.
     * @param value - the value to destructure.
     * @param frame - receives the bindings.
     */
    bind(pattern: Pattern, value: Value, frame: Frame): void;
    /**
     * Read a property with the allowlist rules: own properties of objects and
     * arrays, indices and `length` of strings, and allowlisted methods bound to
     * their receiver. Anything else is undefined; prototype keys are an error.
     * @param object - the receiver.
     * @param key - property key.
     * @returns the property value.
     */
    getMember(object: Value, key: Value): Value;
    private nativeMethod;
    private step;
    private iterableItems;
    private evaluateChain;
    private evaluateLogical;
    private evaluateCall;
    private evaluateUnary;
    private evaluateBinary;
    private spreadItems;
    private closure;
}
//# sourceMappingURL=evaluate.d.ts.map