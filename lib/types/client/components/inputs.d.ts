/**
 * Controls. Each binds `value` / `checked` to the model's state through the
 * `onChange` handler the interpreter bound; `button` runs `onClick`, which
 * reaches the model only through `GenUI.issueNewTurn`.
 */
import { type ReactNode } from 'react';
import { type ComponentProps } from '../render/context.ts';
/**
 * Render a `slider`.
 * @param props - the tag's props.
 * @returns a range input with optional marks and the current value.
 */
export declare function Slider({ props }: ComponentProps): ReactNode;
/**
 * Render a `radio-group`; its `radio` children read the selection through context.
 * @param props - the node, its props, and scope.
 * @returns a fieldset of radios.
 */
export declare function RadioGroup({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `radio`.
 * @param props - the node, its props, and scope.
 * @returns one option; inert outside a radio-group.
 */
export declare function Radio({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `segmented-control`.
 * @param props - the tag's props.
 * @returns a row of toggle buttons.
 */
export declare function SegmentedControl({ props }: ComponentProps): ReactNode;
/**
 * Render a `select`.
 * @param props - the tag's props.
 * @returns a dropdown.
 */
export declare function Select({ props }: ComponentProps): ReactNode;
/**
 * Render an `input`.
 * @param props - the tag's props.
 * @returns a text or number field; `onChange` receives the string.
 */
export declare function Input({ props }: ComponentProps): ReactNode;
/**
 * Render a `checkbox`.
 * @param props - the node, its props, and scope.
 * @returns a labelled checkbox.
 */
export declare function Checkbox({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render a `button`. Disabled while a follow-up is being sent so one click yields one message.
 * @param props - the node, its props, and scope.
 * @returns a button whose label is the children.
 */
export declare function Button({ node, props, scope }: ComponentProps): ReactNode;
/**
 * Render an `image` from an https URL; the reader can open it in a new window.
 * @param props - the tag's props.
 * @returns the image, or a placeholder when the URL is not https.
 */
export declare function Image({ props }: ComponentProps): ReactNode;
//# sourceMappingURL=inputs.d.ts.map