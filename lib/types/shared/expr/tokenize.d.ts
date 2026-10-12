/**
 * Tokenizer for the expression subset. Template literals are tokenized
 * recursively: each `${…}` becomes its own token list so the parser can parse
 * it independently.
 */
/** Thrown for malformed source; the interpreter reports it as an evaluation error instead of throwing into React. */
export declare class SyntaxFailure extends Error {
    readonly offset: number;
    /** @param message - what was expected. @param offset - UTF-16 index into the source. */
    constructor(message: string, offset: number);
}
export type Token = {
    readonly kind: 'number';
    readonly value: number;
    readonly start: number;
    readonly newlineBefore: boolean;
} | {
    readonly kind: 'string';
    readonly value: string;
    readonly start: number;
    readonly newlineBefore: boolean;
} | {
    readonly kind: 'template';
    readonly quasis: readonly string[];
    readonly expressions: readonly (readonly Token[])[];
    readonly start: number;
    readonly newlineBefore: boolean;
} | {
    readonly kind: 'identifier';
    readonly name: string;
    readonly start: number;
    readonly newlineBefore: boolean;
} | {
    readonly kind: 'punct';
    readonly value: string;
    readonly start: number;
    readonly newlineBefore: boolean;
} | {
    readonly kind: 'end';
    readonly start: number;
    readonly newlineBefore: boolean;
};
/**
 * Tokenize expression or statement source.
 * @param source - the text inside `{…}`.
 * @returns tokens ending with an `end` token.
 * @throws SyntaxFailure on malformed literals or unknown characters.
 */
export declare const tokenize: (source: string) => Token[];
//# sourceMappingURL=tokenize.d.ts.map