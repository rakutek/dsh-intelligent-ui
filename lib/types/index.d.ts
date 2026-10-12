/**
 * Inline-UI plugin, Host half. The model writes component tags and
 * expressions directly in its markdown reply; the browser half renders them
 * in place. The Host contributes only the system-prompt section that teaches
 * the model when and how to write them, generated from the shared manifest.
 */
import type { Context } from '@deepseek-ai/cordis';
import z from '@deepseek-ai/schemastery';
/** Cordis plugin name. */
export declare const name = "inline-ui";
/** No hard service requirements; the prompt section is injected lazily. */
export declare const inject: string[];
/** Plugin config. */
export interface Config {
    /** Add the inline-UI section to the system prompt. Defaults to true; false leaves rendering only. */
    injectGuidance?: boolean;
}
export declare const Config: z<Config>;
/**
 * Register the system-prompt guidance when configured.
 * @param ctx - plugin context; `systemPrompt` is resolved through `ctx.inject`.
 * @param config - resolved plugin config (schemastery has applied the defaults).
 */
export declare function apply(ctx: Context, config: Config): void;
//# sourceMappingURL=index.d.ts.map