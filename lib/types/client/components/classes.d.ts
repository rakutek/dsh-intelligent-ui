/** Helpers the component renderers share: class joining, number formatting, and chart maths. */
/**
 * Join CSS-module class names, skipping falsy entries (module lookups are
 * `string | undefined` under `noUncheckedIndexedAccess`).
 * @param names - class names or falsy placeholders.
 * @returns the space-joined class list.
 */
export declare function classes(...names: (string | false | null | undefined)[]): string;
/**
 * Compact numeric formatting: integers as-is, otherwise up to two decimals
 * (more for tiny magnitudes), huge or tiny values in exponent form.
 * @param value - the number.
 * @returns display text.
 */
export declare function formatNumber(value: number): string;
/**
 * Round axis ticks covering [min, max] at a 1/2/2.5/5 step.
 * @param min - lowest data value.
 * @param max - highest data value.
 * @param count - target tick count.
 * @returns ascending tick values whose first and last bound the range.
 */
export declare function niceTicks(min: number, max: number, count?: number): number[];
/**
 * Colour of the n-th series.
 * @param index - series position.
 * @returns a palette entry.
 */
export declare function seriesColor(index: number): string;
/**
 * Validate a model-written CSS length.
 * @param value - the prop text.
 * @returns a safe CSS length (bare numbers become pixels), or undefined.
 */
export declare function cssLength(value: string | undefined): string | undefined;
//# sourceMappingURL=classes.d.ts.map