/**
 * The {@link Interpreter} implementation: parses expression and declaration
 * sources (cached by source text), evaluates them with the allowlisted
 * globals, and exposes `useState`/`useMemo`/`useCallback` (also as `DIL.*`)
 * to `{@body}` declarations with keyed state.
 */
import type { Interpreter } from '../interpreter.ts';
/**
 * Create an interpreter with the allowlisted globals. One per renderer is
 * enough; it holds only parse caches.
 * @returns the interpreter.
 */
export declare const createInterpreter: () => Interpreter;
//# sourceMappingURL=index.d.ts.map