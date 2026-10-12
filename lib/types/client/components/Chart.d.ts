/**
 * `chart`: bar, line, area, and pie drawn as inline SVG in a fixed viewBox
 * that scales with the column. Hovering a category shows every series'
 * value; clicking a legend entry hides that series.
 */
import { type ReactNode } from 'react';
import { type ComponentProps } from '../render/context.ts';
/**
 * Render a `chart`.
 * @param props - the tag's props (`type`, `data`, `xKey`, `series`, `unit`, `stacked`, `height`, `xLabel`).
 * @returns the figure, or an empty note when the data is unusable.
 */
export declare function Chart({ props }: ComponentProps): ReactNode;
//# sourceMappingURL=Chart.d.ts.map