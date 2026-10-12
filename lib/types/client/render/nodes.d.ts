/**
 * Turn parsed nodes into React. Text becomes markdown (block markdown at the
 * top level and inside layout tags, inline markdown inside text-bearing tags),
 * elements go to the component registry, and `{#each}` / `{#if}` extend the
 * scope for their children. Declarations were already run by the message.
 */
import { type ReactNode } from 'react';
import type { ElementNode, Node } from '../../shared/ast.ts';
import type { Scope } from '../../shared/interpreter.ts';
import { type RenderContext } from './context.ts';
/**
 * How text children render: `inline` for tags whose content is a phrase
 * (title, button, badge…), `block` for layout tags whose text may hold lists
 * and tables, `top` for the message body (block markdown, streaming aware).
 */
export type TextMode = 'inline' | 'block' | 'top';
/** One concrete element after `{#each}` / `{#if}` expansion, with the scope it is rendered in. */
export interface ExpandedElement {
    readonly node: ElementNode;
    readonly scope: Scope;
}
/**
 * Flatten children into the elements they produce, evaluating blocks and
 * skipping text; for components that need their children's structure
 * (table rows, radio options).
 * @param context - rendering services.
 * @param nodes - the children.
 * @param scope - the parent's scope.
 * @returns the elements in order, each with its scope.
 */
export declare function expandElements(context: RenderContext, nodes: readonly Node[], scope: Scope): ExpandedElement[];
/**
 * Whether any node (at any depth) is still waiting for its closing tag.
 * @param nodes - the nodes to scan.
 * @returns true when the message stopped mid-tag.
 */
export declare function hasOpenNode(nodes: readonly Node[]): boolean;
/** Props of {@link Children}. */
export interface ChildrenProps {
    readonly nodes: readonly Node[];
    readonly scope: Scope;
    readonly mode: TextMode;
    /** Top level only: the message is still arriving, so the trailing text streams. */
    readonly streaming?: boolean;
}
/**
 * Render a node list in a scope.
 * @param props - the nodes, their scope, and how text renders.
 * @returns the rendered children.
 */
export declare function Children({ nodes, scope, mode, streaming }: ChildrenProps): ReactNode;
//# sourceMappingURL=nodes.d.ts.map