/**
 * Syntax tree of the expression subset. Shapes follow ESTree names but carry
 * only what the evaluator needs; there are no source positions because the
 * markup parser already reports the enclosing expression's span.
 */
import type { Value } from '../interpreter.ts';
export type BinaryOperator = '+' | '-' | '*' | '/' | '%' | '**' | '===' | '!==' | '==' | '!=' | '<' | '>' | '<=' | '>=';
export type LogicalOperator = '&&' | '||' | '??';
export type UnaryOperator = '!' | '-' | '+' | 'typeof';
export interface SpreadElement {
    readonly type: 'Spread';
    readonly argument: Expr;
}
export type ObjectProperty = {
    readonly kind: 'init';
    readonly key: Expr;
    readonly computed: boolean;
    readonly value: Expr;
} | {
    readonly kind: 'spread';
    readonly argument: Expr;
};
export type Expr = {
    readonly type: 'Literal';
    readonly value: Value;
} | {
    readonly type: 'Identifier';
    readonly name: string;
} | {
    readonly type: 'Template';
    readonly quasis: readonly string[];
    readonly expressions: readonly Expr[];
} | {
    readonly type: 'Array';
    readonly elements: readonly (Expr | SpreadElement | null)[];
} | {
    readonly type: 'Object';
    readonly properties: readonly ObjectProperty[];
} | {
    readonly type: 'Member';
    readonly object: Expr;
    readonly property: Expr;
    readonly computed: boolean;
    readonly optional: boolean;
} | {
    readonly type: 'Call';
    readonly callee: Expr;
    readonly args: readonly (Expr | SpreadElement)[];
    readonly optional: boolean;
} | {
    readonly type: 'Unary';
    readonly operator: UnaryOperator;
    readonly argument: Expr;
} | {
    readonly type: 'Binary';
    readonly operator: BinaryOperator;
    readonly left: Expr;
    readonly right: Expr;
} | {
    readonly type: 'Logical';
    readonly operator: LogicalOperator;
    readonly left: Expr;
    readonly right: Expr;
} | {
    readonly type: 'Conditional';
    readonly test: Expr;
    readonly consequent: Expr;
    readonly alternate: Expr;
} | {
    readonly type: 'Arrow';
    readonly params: readonly Pattern[];
    readonly rest: Pattern | null;
    readonly body: ArrowBody;
};
/** An arrow function body: a single expression or a statement block. */
export type ArrowBody = {
    readonly kind: 'expression';
    readonly expression: Expr;
} | {
    readonly kind: 'block';
    readonly statements: readonly Statement[];
};
/** A binding target: `x`, `[a, , b = 1, ...rest]`, `{ a, b: c, ...rest }`, or `x = default`. */
export type Pattern = {
    readonly type: 'Identifier';
    readonly name: string;
} | {
    readonly type: 'ArrayPattern';
    readonly elements: readonly (Pattern | null)[];
    readonly rest: Pattern | null;
} | {
    readonly type: 'ObjectPattern';
    readonly properties: readonly {
        readonly key: string;
        readonly value: Pattern;
    }[];
    readonly rest: Pattern | null;
} | {
    readonly type: 'Assignment';
    readonly left: Pattern;
    readonly right: Expr;
};
/** A statement inside an arrow block body or a `{@body}` declaration. */
export type Statement = {
    readonly type: 'Const';
    readonly pattern: Pattern;
    readonly init: Expr;
} | {
    readonly type: 'Expression';
    readonly expression: Expr;
} | {
    readonly type: 'Return';
    readonly argument: Expr | null;
};
//# sourceMappingURL=nodes.d.ts.map