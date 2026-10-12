/**
 * `table` / `table-row` / `table-cell`. The table reads its rows from the
 * children (through `{#each}` / `{#if}`), takes the first row as the header,
 * and sorts the body rows when a header cell is clicked; the sort key is the
 * cell's interpolated text, numerically when every cell parses as a number.
 */
import { type ReactNode } from 'react';
import { type ComponentProps } from '../render/context.ts';
/**
 * Render a `table`.
 * @param props - the node and scope.
 * @returns a table whose first row is the header.
 */
export declare function Table({ node, scope }: ComponentProps): ReactNode;
/**
 * Render a `table-row` outside a table (the table renders its own rows).
 * @param props - the node and scope.
 * @returns the children in a row.
 */
export declare function TableRow({ node, scope }: ComponentProps): ReactNode;
/**
 * Render a `table-cell` outside a table.
 * @param props - the node and scope.
 * @returns the children.
 */
export declare function TableCell({ node, scope }: ComponentProps): ReactNode;
//# sourceMappingURL=Table.d.ts.map