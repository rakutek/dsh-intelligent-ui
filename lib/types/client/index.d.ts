import type { Context as ClientContext } from '@deepseek-ai/cordis';
import { type InlineUiKey } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        /** The inline-UI renderer's copy. */
        inlineUi: InlineUiKey;
    }
}
/** Required services: slot registry, locale registry, and session scoping for prompts. */
export declare const inject: string[];
/**
 * Client plugin body: register dictionaries and the shadowing renderer.
 * @param ctx - client root context.
 */
export declare function apply(ctx: ClientContext): void;
//# sourceMappingURL=index.d.ts.map