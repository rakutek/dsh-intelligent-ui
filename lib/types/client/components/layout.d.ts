/**
 * Layout tags. A `box` is a plain column unless the model asks for a border,
 * padding, or background; the spacing unit is 4px as in ChatGPT's dialect.
 */
import type { ReactNode } from 'react';
import type { ComponentProps } from '../render/context.ts';
/**
 * Render a `box`.
 * @param props - the node, its props, and scope.
 * @returns a column container.
 */
export declare function Box({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `row`.
 * @param props - the node, its props, and scope.
 * @returns a horizontal container.
 */
export declare function Row({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `grid`.
 * @param props - the node, its props, and scope.
 * @returns an equal-column grid.
 */
export declare function Grid({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `grid-item`.
 * @param props - the node, its props, and scope.
 * @returns one cell, optionally spanning columns.
 */
export declare function GridItem({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `divider`.
 * @returns a horizontal rule.
 */
export declare function Divider(): ReactNode;
//# sourceMappingURL=layout.d.ts.map