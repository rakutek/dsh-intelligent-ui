/**
 * The tag vocabulary: one entry per component the model may write. The
 * renderer validates props against it; the Host prints it into the system
 * prompt. Prop types are deliberately small: the renderer coerces loosely
 * (a number prop accepts a numeric string) and ignores unknown props.
 */
/** Scalar prop types the manifest describes. */
export type PropType = {
    readonly type: 'string';
    readonly values?: readonly string[];
} | {
    readonly type: 'number';
    readonly min?: number;
    readonly max?: number;
} | {
    readonly type: 'boolean';
} | {
    readonly type: 'function';
    readonly signature: string;
} | {
    readonly type: 'json';
    readonly shape: string;
};
export interface PropSpec extends Record<string, unknown> {
    readonly type: PropType['type'];
    readonly required?: boolean;
    readonly description?: string;
}
export interface ComponentSpec {
    /** One-line description for the prompt. */
    readonly description: string;
    readonly props: Readonly<Record<string, PropType & {
        readonly required?: boolean;
        readonly description?: string;
    }>>;
    /** Whether the tag takes children (markdown text, other tags, blocks). */
    readonly children: boolean;
}
/** The tag vocabulary, in the order the prompt lists it. */
export declare const COMPONENTS: Readonly<Record<string, ComponentSpec>>;
/** Tag names the parser recognizes; anything else is left as markdown text. */
export declare const TAG_NAMES: ReadonlySet<string>;
//# sourceMappingURL=manifest.d.ts.map