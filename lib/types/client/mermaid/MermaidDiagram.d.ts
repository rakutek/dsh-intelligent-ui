/**
 * Mermaid diagram renderer. Loaded as its own chunk the first time a reply
 * contains a mermaid fence, so ordinary replies never pay for the library.
 * The look follows the chat surface: system font, rounded nodes with a soft
 * fill, pill edge labels, thin rounded edges, dashed decision outlines, and
 * a transparent background. Model `classDef` colors keep their hue: the
 * border takes the defined stroke and the fill and label are tinted from it,
 * so a light pastel classDef still reads on a dark theme.
 */
import { type ReactNode } from 'react';
import type { Mermaid } from 'mermaid';
import 'mermaid/dist/mermaid.min.js';
/** Props of one rendered diagram. */
export interface MermaidDiagramProps {
    readonly code: string;
    /** Shown when the source does not parse, beneath the source itself. */
    readonly errorLabel: string;
}
declare global {
    /** Set by the prebuilt mermaid script imported above. */
    var mermaid: Mermaid;
}
/**
 * Render one diagram source; a parse failure shows the source with a note.
 * @param props - the mermaid source and the failure label.
 * @returns the diagram.
 */
export declare function MermaidDiagram({ code, errorLabel }: MermaidDiagramProps): ReactNode;
//# sourceMappingURL=MermaidDiagram.d.ts.map