/**
 * Tidy a rendered flowchart's edges. Layered layout routes every edge from
 * the source centre to a port on the target, so an edge between two nodes
 * that overlap on the cross axis still takes a small double bend. When the
 * end port lies within the source's extent (or the start within the
 * target's), the edge becomes one straight segment, provided it crosses no
 * other node; the remaining orthogonal bends get rounded corners. Edge
 * labels of straightened edges move onto the new segment, and the empty
 * label placeholders mermaid emits for unlabelled edges are removed.
 */
/**
 * Straighten, round, and relabel the edges of one rendered flowchart in place.
 * @param svg - the diagram's root element, attached to the document (geometry is read).
 */
export declare function tidyFlowchartEdges(svg: SVGSVGElement): void;
/**
 * Split multi-line node labels into a title and its details: the text after
 * the first line break is wrapped so the theme can set it in regular weight.
 * @param svg - the rendered flowchart.
 */
export declare function splitNodeLabels(svg: SVGSVGElement): void;
//# sourceMappingURL=edges.d.ts.map