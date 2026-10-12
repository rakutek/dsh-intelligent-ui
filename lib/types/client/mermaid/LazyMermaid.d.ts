/** Load the mermaid renderer only when a reply contains a diagram. */
import { type ReactNode } from 'react';
/** Props of one diagram position in a reply. */
export interface LazyMermaidProps {
    readonly code: string;
    /** The closing fence has arrived; an open fence shows the placeholder. */
    readonly closed: boolean;
    readonly renderingLabel: string;
    readonly errorLabel: string;
}
/**
 * Show a placeholder while the fence streams, then the diagram from its own chunk.
 * @param props - source, completeness, and copy.
 * @returns the placeholder or the diagram.
 */
export declare function LazyMermaid({ code, closed, renderingLabel, errorLabel }: LazyMermaidProps): ReactNode;
//# sourceMappingURL=LazyMermaid.d.ts.map