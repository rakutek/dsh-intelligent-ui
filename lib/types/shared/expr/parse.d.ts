/**
 * Parser for the expression subset: a Pratt parser over {@link tokenize}
 * output. Statements are limited to `const`, expression statements, and
 * `return`, which is all an arrow block body or a `{@body}` declaration needs.
 */
import type { Expr, Statement } from './nodes.ts';
/**
 * Parse one expression.
 * @param source - expression source without the surrounding braces.
 * @returns the syntax tree.
 * @throws SyntaxFailure when the source is not a complete expression of the subset.
 */
export declare const parseExpression: (source: string) => Expr;
/**
 * Parse a statement list (a `{@body}` declaration or an arrow block body).
 * @param source - statement source.
 * @returns the statements in order.
 * @throws SyntaxFailure when the source is not a statement list of the subset.
 */
export declare const parseStatements: (source: string) => Statement[];
//# sourceMappingURL=parse.d.ts.map