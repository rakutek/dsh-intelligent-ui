window.__ModuleLoader__.load({
	id: "@rakutek/dsh-intelligent-ui",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
		var _a$1;
		function $constructor(name, initializer, params) {
			function init(inst, def) {
				if (!inst._zod) Object.defineProperty(inst, "_zod", {
					value: {
						def,
						constr: _,
						traits: /* @__PURE__ */ new Set()
					},
					enumerable: false
				});
				if (inst._zod.traits.has(name)) return;
				inst._zod.traits.add(name);
				initializer(inst, def);
				const proto = _.prototype;
				const keys = Object.keys(proto);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					if (!(k in inst)) inst[k] = proto[k].bind(inst);
				}
			}
			const Parent = params?.Parent ?? Object;
			class Definition extends Parent {}
			Object.defineProperty(Definition, "name", { value: name });
			function _(def) {
				var _a;
				const inst = params?.Parent ? new Definition() : this;
				init(inst, def);
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				for (const fn of inst._zod.deferred) fn();
				return inst;
			}
			Object.defineProperty(_, "init", { value: init });
			Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
				if (params?.Parent && inst instanceof params.Parent) return true;
				return inst?._zod?.traits?.has(name);
			} });
			Object.defineProperty(_, "name", { value: name });
			return _;
		}
		var $ZodAsyncError = class extends Error {
			constructor() {
				super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
			}
		};
		var $ZodEncodeError = class extends Error {
			constructor(name) {
				super(`Encountered unidirectional transform during encode: ${name}`);
				this.name = "ZodEncodeError";
			}
		};
		(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
		const globalConfig = globalThis.__zod_globalConfig;
		function config(newConfig) {
			if (newConfig) Object.assign(globalConfig, newConfig);
			return globalConfig;
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
		function getEnumValues(entries) {
			const numericValues = Object.values(entries).filter((v) => typeof v === "number");
			return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
		}
		function jsonStringifyReplacer(_, value) {
			if (typeof value === "bigint") return value.toString();
			return value;
		}
		function cached(getter) {
			return { get value() {
				{
					const value = getter();
					Object.defineProperty(this, "value", { value });
					return value;
				}
				throw new Error("cached value already set");
			} };
		}
		function nullish(input) {
			return input === null || input === void 0;
		}
		function cleanRegex(source) {
			const start = source.startsWith("^") ? 1 : 0;
			const end = source.endsWith("$") ? source.length - 1 : source.length;
			return source.slice(start, end);
		}
		function floatSafeRemainder(val, step) {
			const ratio = val / step;
			const roundedRatio = Math.round(ratio);
			const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
			if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
			return ratio - roundedRatio;
		}
		const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
		function defineLazy(object, key, getter) {
			let value = void 0;
			Object.defineProperty(object, key, {
				get() {
					if (value === EVALUATING) return;
					if (value === void 0) {
						value = EVALUATING;
						value = getter();
					}
					return value;
				},
				set(v) {
					Object.defineProperty(object, key, { value: v });
				},
				configurable: true
			});
		}
		function assignProp(target, prop, value) {
			Object.defineProperty(target, prop, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		function mergeDefs(...defs) {
			const mergedDescriptors = {};
			for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
			return Object.defineProperties({}, mergedDescriptors);
		}
		function esc(str) {
			return JSON.stringify(str);
		}
		function slugify(input) {
			return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}
		const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
		function isObject(data) {
			return typeof data === "object" && data !== null && !Array.isArray(data);
		}
		const allowsEval = /* @__PURE__*/ cached(() => {
			if (globalConfig.jitless) return false;
			if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
			try {
				new Function("");
				return true;
			} catch (_) {
				return false;
			}
		});
		function isPlainObject(o) {
			if (isObject(o) === false) return false;
			const ctor = o.constructor;
			if (ctor === void 0) return true;
			if (typeof ctor !== "function") return true;
			const prot = ctor.prototype;
			if (isObject(prot) === false) return false;
			if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
			return true;
		}
		function shallowClone(o) {
			if (isPlainObject(o)) return { ...o };
			if (Array.isArray(o)) return [...o];
			if (o instanceof Map) return new Map(o);
			if (o instanceof Set) return new Set(o);
			return o;
		}
		const propertyKeyTypes = /* @__PURE__*/ new Set([
			"string",
			"number",
			"symbol"
		]);
		function escapeRegex(str) {
			return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		function clone(inst, def, params) {
			const cl = new inst._zod.constr(def ?? inst._zod.def);
			if (!def || params?.parent) cl._zod.parent = inst;
			return cl;
		}
		function normalizeParams(_params) {
			const params = _params;
			if (!params) return {};
			if (typeof params === "string") return { error: () => params };
			if (params?.message !== void 0) {
				if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
				params.error = params.message;
			}
			delete params.message;
			if (typeof params.error === "string") return {
				...params,
				error: () => params.error
			};
			return params;
		}
		function optionalKeys(shape) {
			return Object.keys(shape).filter((k) => {
				return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
			});
		}
		const NUMBER_FORMAT_RANGES = {
			safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
			int32: [-2147483648, 2147483647],
			uint32: [0, 4294967295],
			float32: [-34028234663852886e22, 34028234663852886e22],
			float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
		};
		function pick(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = {};
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						newShape[key] = currDef.shape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function omit(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = { ...schema._zod.def.shape };
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						delete newShape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function extend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) {
				const existingShape = schema._zod.def.shape;
				for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function safeExtend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function merge(a, b) {
			if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			return clone(a, mergeDefs(a._zod.def, {
				get shape() {
					const _shape = {
						...a._zod.def.shape,
						...b._zod.def.shape
					};
					assignProp(this, "shape", _shape);
					return _shape;
				},
				get catchall() {
					return b._zod.def.catchall;
				},
				checks: b._zod.def.checks ?? []
			}));
		}
		function partial(Class, schema, mask) {
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const oldShape = schema._zod.def.shape;
					const shape = { ...oldShape };
					if (mask) for (const key in mask) {
						if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						shape[key] = Class ? new Class({
							type: "optional",
							innerType: oldShape[key]
						}) : oldShape[key];
					}
					else for (const key in oldShape) shape[key] = Class ? new Class({
						type: "optional",
						innerType: oldShape[key]
					}) : oldShape[key];
					assignProp(this, "shape", shape);
					return shape;
				},
				checks: []
			}));
		}
		function required(Class, schema, mask) {
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const oldShape = schema._zod.def.shape;
				const shape = { ...oldShape };
				if (mask) for (const key in mask) {
					if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
					if (!mask[key]) continue;
					shape[key] = new Class({
						type: "nonoptional",
						innerType: oldShape[key]
					});
				}
				else for (const key in oldShape) shape[key] = new Class({
					type: "nonoptional",
					innerType: oldShape[key]
				});
				assignProp(this, "shape", shape);
				return shape;
			} }));
		}
		function aborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
			return false;
		}
		function explicitlyAborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
			return false;
		}
		function prefixIssues(path, issues) {
			return issues.map((iss) => {
				var _a;
				(_a = iss).path ?? (_a.path = []);
				iss.path.unshift(path);
				return iss;
			});
		}
		function unwrapMessage(message) {
			return typeof message === "string" ? message : message?.message;
		}
		function finalizeIssue(iss, ctx, config) {
			const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
			const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
			rest.path ?? (rest.path = []);
			rest.message = message;
			if (ctx?.reportInput) rest.input = _input;
			return rest;
		}
		function getLengthableOrigin(input) {
			if (Array.isArray(input)) return "array";
			if (typeof input === "string") return "string";
			return "unknown";
		}
		function issue(...args) {
			const [iss, input, inst] = args;
			if (typeof iss === "string") return {
				message: iss,
				code: "custom",
				input,
				inst
			};
			return { ...iss };
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
		const initializer$1 = (inst, def) => {
			inst.name = "$ZodError";
			Object.defineProperty(inst, "_zod", {
				value: inst._zod,
				enumerable: false
			});
			Object.defineProperty(inst, "issues", {
				value: def,
				enumerable: false
			});
			inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
			Object.defineProperty(inst, "toString", {
				value: () => inst.message,
				enumerable: false
			});
		};
		const $ZodError = $constructor("$ZodError", initializer$1);
		const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
		function flattenError(error, mapper = (issue) => issue.message) {
			const fieldErrors = {};
			const formErrors = [];
			for (const sub of error.issues) if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		function formatError(error, mapper = (issue) => issue.message) {
			const fieldErrors = { _errors: [] };
			const processError = (error, path = []) => {
				for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
				else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else {
					const fullpath = [...path, ...issue.path];
					if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
					else {
						let curr = fieldErrors;
						let i = 0;
						while (i < fullpath.length) {
							const el = fullpath[i];
							if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
							else {
								curr[el] = curr[el] || { _errors: [] };
								curr[el]._errors.push(mapper(issue));
							}
							curr = curr[el];
							i++;
						}
					}
				}
			};
			processError(error);
			return fieldErrors;
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
		const _parse = (_Err) => (schema, value, _ctx, _params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			if (result.issues.length) {
				const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, _params?.callee);
				throw e;
			}
			return result.value;
		};
		const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			if (result.issues.length) {
				const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, params?.callee);
				throw e;
			}
			return result.value;
		};
		const _safeParse = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			return result.issues.length ? {
				success: false,
				error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
		const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			return result.issues.length ? {
				success: false,
				error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
		const _encode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parse(_Err)(schema, value, ctx);
		};
		const _decode = (_Err) => (schema, value, _ctx) => {
			return _parse(_Err)(schema, value, _ctx);
		};
		const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parseAsync(_Err)(schema, value, ctx);
		};
		const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _parseAsync(_Err)(schema, value, _ctx);
		};
		const _safeEncode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParse(_Err)(schema, value, ctx);
		};
		const _safeDecode = (_Err) => (schema, value, _ctx) => {
			return _safeParse(_Err)(schema, value, _ctx);
		};
		const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParseAsync(_Err)(schema, value, ctx);
		};
		const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _safeParseAsync(_Err)(schema, value, _ctx);
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/regexes.js
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const cuid = /^[cC][0-9a-z]{6,}$/;
		const cuid2 = /^[0-9a-z]+$/;
		const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
		const xid = /^[0-9a-vA-V]{20}$/;
		const ksuid = /^[A-Za-z0-9]{27}$/;
		const nanoid = /^[a-zA-Z0-9_-]{21}$/;
		/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
		const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
		/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
		const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
		/** Returns a regex for validating an RFC 9562/4122 UUID.
		*
		* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
		const uuid = (version) => {
			if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
			return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
		};
		/** Practical email validation */
		const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
		const _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
		function emoji() {
			return new RegExp(_emoji$1, "u");
		}
		const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
		const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
		const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
		const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
		const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
		const base64url = /^[A-Za-z0-9_-]*$/;
		const httpProtocol = /^https?$/;
		const e164 = /^\+[1-9]\d{6,14}$/;
		const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
		const date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
		function timeSource(args) {
			const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
			return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
		}
		function time$1(args) {
			return new RegExp(`^${timeSource(args)}$`);
		}
		function datetime$1(args) {
			const time = timeSource({ precision: args.precision });
			const opts = ["Z"];
			if (args.local) opts.push("");
			if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
			const timeRegex = `${time}(?:${opts.join("|")})`;
			return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
		}
		const string$1 = (params) => {
			const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
			return new RegExp(`^${regex}$`);
		};
		const integer = /^-?\d+$/;
		const number$1 = /^-?\d+(?:\.\d+)?$/;
		const lowercase = /^[^A-Z]*$/;
		const uppercase = /^[^a-z]*$/;
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/checks.js
		const $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
			var _a;
			inst._zod ?? (inst._zod = {});
			inst._zod.def = def;
			(_a = inst._zod).onattach ?? (_a.onattach = []);
		});
		const numericOriginMap = {
			number: "number",
			bigint: "bigint",
			object: "date"
		};
		const $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
				if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
				else bag.exclusiveMaximum = def.value;
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
				if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
				else bag.exclusiveMinimum = def.value;
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				var _a;
				(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
			});
			inst._zod.check = (payload) => {
				if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
				if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
				payload.issues.push({
					origin: typeof payload.value,
					code: "not_multiple_of",
					divisor: def.value,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
			$ZodCheck.init(inst, def);
			def.format = def.format || "float64";
			const isInt = def.format?.includes("int");
			const origin = isInt ? "int" : "number";
			const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				bag.minimum = minimum;
				bag.maximum = maximum;
				if (isInt) bag.pattern = integer;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (isInt) {
					if (!Number.isInteger(input)) {
						payload.issues.push({
							expected: origin,
							format: def.format,
							code: "invalid_type",
							continue: false,
							input,
							inst
						});
						return;
					}
					if (!Number.isSafeInteger(input)) {
						if (input > 0) payload.issues.push({
							input,
							code: "too_big",
							maximum: Number.MAX_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						else payload.issues.push({
							input,
							code: "too_small",
							minimum: Number.MIN_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						return;
					}
				}
				if (input < minimum) payload.issues.push({
					origin: "number",
					input,
					code: "too_small",
					minimum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
				if (input > maximum) payload.issues.push({
					origin: "number",
					input,
					code: "too_big",
					maximum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
				if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length <= def.maximum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: def.maximum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
				if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length >= def.minimum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: def.minimum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.minimum = def.length;
				bag.maximum = def.length;
				bag.length = def.length;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				const length = input.length;
				if (length === def.length) return;
				const origin = getLengthableOrigin(input);
				const tooBig = length > def.length;
				payload.issues.push({
					origin,
					...tooBig ? {
						code: "too_big",
						maximum: def.length
					} : {
						code: "too_small",
						minimum: def.length
					},
					inclusive: true,
					exact: true,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
			var _a, _b;
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				if (def.pattern) {
					bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
					bag.patterns.add(def.pattern);
				}
			});
			if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: def.format,
					input: payload.value,
					...def.pattern ? { pattern: def.pattern.toString() } : {},
					inst,
					continue: !def.abort
				});
			});
			else (_b = inst._zod).check ?? (_b.check = () => {});
		});
		const $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "regex",
					input: payload.value,
					pattern: def.pattern.toString(),
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
			def.pattern ?? (def.pattern = lowercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
			def.pattern ?? (def.pattern = uppercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
			$ZodCheck.init(inst, def);
			const escapedRegex = escapeRegex(def.includes);
			const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
			def.pattern = pattern;
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.includes(def.includes, def.position)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "includes",
					includes: def.includes,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.startsWith(def.prefix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "starts_with",
					prefix: def.prefix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.endsWith(def.suffix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "ends_with",
					suffix: def.suffix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.check = (payload) => {
				payload.value = def.tx(payload.value);
			};
		});
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/doc.js
		var Doc = class {
			constructor(args = []) {
				this.content = [];
				this.indent = 0;
				if (this) this.args = args;
			}
			indented(fn) {
				this.indent += 1;
				fn(this);
				this.indent -= 1;
			}
			write(arg) {
				if (typeof arg === "function") {
					arg(this, { execution: "sync" });
					arg(this, { execution: "async" });
					return;
				}
				const lines = arg.split("\n").filter((x) => x);
				const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
				const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
				for (const line of dedented) this.content.push(line);
			}
			compile() {
				const F = Function;
				const args = this?.args;
				const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
				return new F(...args, lines.join("\n"));
			}
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/versions.js
		const version = {
			major: 4,
			minor: 4,
			patch: 3
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/schemas.js
		const $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
			var _a;
			inst ?? (inst = {});
			inst._zod.def = def;
			inst._zod.bag = inst._zod.bag || {};
			inst._zod.version = version;
			const checks = [...inst._zod.def.checks ?? []];
			if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
			for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
			if (checks.length === 0) {
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				inst._zod.deferred?.push(() => {
					inst._zod.run = inst._zod.parse;
				});
			} else {
				const runChecks = (payload, checks, ctx) => {
					let isAborted = aborted(payload);
					let asyncResult;
					for (const ch of checks) {
						if (ch._zod.def.when) {
							if (explicitlyAborted(payload)) continue;
							if (!ch._zod.def.when(payload)) continue;
						} else if (isAborted) continue;
						const currLen = payload.issues.length;
						const _ = ch._zod.check(payload);
						if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
						if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
							await _;
							if (payload.issues.length === currLen) return;
							if (!isAborted) isAborted = aborted(payload, currLen);
						});
						else {
							if (payload.issues.length === currLen) continue;
							if (!isAborted) isAborted = aborted(payload, currLen);
						}
					}
					if (asyncResult) return asyncResult.then(() => {
						return payload;
					});
					return payload;
				};
				const handleCanaryResult = (canary, payload, ctx) => {
					if (aborted(canary)) {
						canary.aborted = true;
						return canary;
					}
					const checkResult = runChecks(payload, checks, ctx);
					if (checkResult instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
					}
					return inst._zod.parse(checkResult, ctx);
				};
				inst._zod.run = (payload, ctx) => {
					if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
					if (ctx.direction === "backward") {
						const canary = inst._zod.parse({
							value: payload.value,
							issues: []
						}, {
							...ctx,
							skipChecks: true
						});
						if (canary instanceof Promise) return canary.then((canary) => {
							return handleCanaryResult(canary, payload, ctx);
						});
						return handleCanaryResult(canary, payload, ctx);
					}
					const result = inst._zod.parse(payload, ctx);
					if (result instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return result.then((result) => runChecks(result, checks, ctx));
					}
					return runChecks(result, checks, ctx);
				};
			}
			defineLazy(inst, "~standard", () => ({
				validate: (value) => {
					try {
						const r = safeParse$1(inst, value);
						return r.success ? { value: r.data } : { issues: r.error?.issues };
					} catch (_) {
						return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
					}
				},
				vendor: "zod",
				version: 1
			}));
		});
		const $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
			inst._zod.parse = (payload, _) => {
				if (def.coerce) try {
					payload.value = String(payload.value);
				} catch (_) {}
				if (typeof payload.value === "string") return payload;
				payload.issues.push({
					expected: "string",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		const $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			$ZodString.init(inst, def);
		});
		const $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
			def.pattern ?? (def.pattern = guid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
			if (def.version) {
				const v = {
					v1: 1,
					v2: 2,
					v3: 3,
					v4: 4,
					v5: 5,
					v6: 6,
					v7: 7,
					v8: 8
				}[def.version];
				if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
				def.pattern ?? (def.pattern = uuid(v));
			} else def.pattern ?? (def.pattern = uuid());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
			def.pattern ?? (def.pattern = email);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				try {
					const trimmed = payload.value.trim();
					if (!def.normalize && def.protocol?.source === httpProtocol.source) {
						if (!/^https?:\/\//i.test(trimmed)) {
							payload.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: payload.value,
								inst,
								continue: !def.abort
							});
							return;
						}
					}
					const url = new URL(trimmed);
					if (def.hostname) {
						def.hostname.lastIndex = 0;
						if (!def.hostname.test(url.hostname)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid hostname",
							pattern: def.hostname.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.protocol) {
						def.protocol.lastIndex = 0;
						if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid protocol",
							pattern: def.protocol.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.normalize) payload.value = url.href;
					else payload.value = trimmed;
					return;
				} catch (_) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
			def.pattern ?? (def.pattern = emoji());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
			def.pattern ?? (def.pattern = nanoid);
			$ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
			def.pattern ?? (def.pattern = cuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
			def.pattern ?? (def.pattern = cuid2);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
			def.pattern ?? (def.pattern = ulid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
			def.pattern ?? (def.pattern = xid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
			def.pattern ?? (def.pattern = ksuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
			def.pattern ?? (def.pattern = datetime$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
			def.pattern ?? (def.pattern = date$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
			def.pattern ?? (def.pattern = time$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
			def.pattern ?? (def.pattern = duration$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
			def.pattern ?? (def.pattern = ipv4);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv4`;
		});
		const $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
			def.pattern ?? (def.pattern = ipv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv6`;
			inst._zod.check = (payload) => {
				try {
					new URL(`http://[${payload.value}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "ipv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv4);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				const parts = payload.value.split("/");
				try {
					if (parts.length !== 2) throw new Error();
					const [address, prefix] = parts;
					if (!prefix) throw new Error();
					const prefixNum = Number(prefix);
					if (`${prefixNum}` !== prefix) throw new Error();
					if (prefixNum < 0 || prefixNum > 128) throw new Error();
					new URL(`http://[${address}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		function isValidBase64(data) {
			if (data === "") return true;
			if (/\s/.test(data)) return false;
			if (data.length % 4 !== 0) return false;
			try {
				atob(data);
				return true;
			} catch {
				return false;
			}
		}
		const $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
			def.pattern ?? (def.pattern = base64);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64";
			inst._zod.check = (payload) => {
				if (isValidBase64(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		function isValidBase64URL(data) {
			if (!base64url.test(data)) return false;
			const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
			return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
		}
		const $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
			def.pattern ?? (def.pattern = base64url);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64url";
			inst._zod.check = (payload) => {
				if (isValidBase64URL(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
			def.pattern ?? (def.pattern = e164);
			$ZodStringFormat.init(inst, def);
		});
		function isValidJWT(token, algorithm = null) {
			try {
				const tokensParts = token.split(".");
				if (tokensParts.length !== 3) return false;
				const [header] = tokensParts;
				if (!header) return false;
				const parsedHeader = JSON.parse(atob(header));
				if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
				if (!parsedHeader.alg) return false;
				if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
				return true;
			} catch {
				return false;
			}
		}
		const $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				if (isValidJWT(payload.value, def.alg)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "jwt",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Number(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
				const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
				payload.issues.push({
					expected: "number",
					code: "invalid_type",
					input,
					inst,
					...received ? { received } : {}
				});
				return payload;
			};
		});
		const $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
			$ZodCheckNumberFormat.init(inst, def);
			$ZodNumber.init(inst, def);
		});
		const $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload) => payload;
		});
		const $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _ctx) => {
				payload.issues.push({
					expected: "never",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		function handleArrayResult(result, final, index) {
			if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
			final.value[index] = result.value;
		}
		const $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				if (!Array.isArray(input)) {
					payload.issues.push({
						expected: "array",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = Array(input.length);
				const proms = [];
				for (let i = 0; i < input.length; i++) {
					const item = input[i];
					const result = def.element._zod.run({
						value: item,
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
					else handleArrayResult(result, payload, i);
				}
				if (proms.length) return Promise.all(proms).then(() => payload);
				return payload;
			};
		});
		function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
			const isPresent = key in input;
			if (result.issues.length) {
				if (isOptionalIn && isOptionalOut && !isPresent) return;
				final.issues.push(...prefixIssues(key, result.issues));
			}
			if (!isPresent && !isOptionalIn) {
				if (!result.issues.length) final.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: void 0,
					path: [key]
				});
				return;
			}
			if (result.value === void 0) {
				if (isPresent) final.value[key] = void 0;
			} else final.value[key] = result.value;
		}
		function normalizeDef(def) {
			const keys = Object.keys(def.shape);
			for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
			const okeys = optionalKeys(def.shape);
			return {
				...def,
				keys,
				keySet: new Set(keys),
				numKeys: keys.length,
				optionalKeys: new Set(okeys)
			};
		}
		function handleCatchall(proms, input, payload, ctx, def, inst) {
			const unrecognized = [];
			const keySet = def.keySet;
			const _catchall = def.catchall._zod;
			const t = _catchall.def.type;
			const isOptionalIn = _catchall.optin === "optional";
			const isOptionalOut = _catchall.optout === "optional";
			for (const key in input) {
				if (key === "__proto__") continue;
				if (keySet.has(key)) continue;
				if (t === "never") {
					unrecognized.push(key);
					continue;
				}
				const r = _catchall.run({
					value: input[key],
					issues: []
				}, ctx);
				if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
				else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
			}
			if (unrecognized.length) payload.issues.push({
				code: "unrecognized_keys",
				keys: unrecognized,
				input,
				inst
			});
			if (!proms.length) return payload;
			return Promise.all(proms).then(() => {
				return payload;
			});
		}
		const $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
			$ZodType.init(inst, def);
			if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
				const sh = def.shape;
				Object.defineProperty(def, "shape", { get: () => {
					const newSh = { ...sh };
					Object.defineProperty(def, "shape", { value: newSh });
					return newSh;
				} });
			}
			const _normalized = cached(() => normalizeDef(def));
			defineLazy(inst._zod, "propValues", () => {
				const shape = def.shape;
				const propValues = {};
				for (const key in shape) {
					const field = shape[key]._zod;
					if (field.values) {
						propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
						for (const v of field.values) propValues[key].add(v);
					}
				}
				return propValues;
			});
			const isObject$1 = isObject;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$1(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = {};
				const proms = [];
				const shape = value.shape;
				for (const key of value.keys) {
					const el = shape[key];
					const isOptionalIn = el._zod.optin === "optional";
					const isOptionalOut = el._zod.optout === "optional";
					const r = el._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
					else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
				}
				if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
				return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
			};
		});
		const $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
			$ZodObject.init(inst, def);
			const superParse = inst._zod.parse;
			const _normalized = cached(() => normalizeDef(def));
			const generateFastpass = (shape) => {
				const doc = new Doc([
					"shape",
					"payload",
					"ctx"
				]);
				const normalized = _normalized.value;
				const parseStr = (key) => {
					const k = esc(key);
					return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
				};
				doc.write(`const input = payload.value;`);
				const ids = Object.create(null);
				let counter = 0;
				for (const key of normalized.keys) ids[key] = `key_${counter++}`;
				doc.write(`const newResult = {};`);
				for (const key of normalized.keys) {
					const id = ids[key];
					const k = esc(key);
					const schema = shape[key];
					const isOptionalIn = schema?._zod?.optin === "optional";
					const isOptionalOut = schema?._zod?.optout === "optional";
					doc.write(`const ${id} = ${parseStr(key)};`);
					if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
					else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
					else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
				}
				doc.write(`payload.value = newResult;`);
				doc.write(`return payload;`);
				const fn = doc.compile();
				return (payload, ctx) => fn(shape, payload, ctx);
			};
			let fastpass;
			const isObject$2 = isObject;
			const jit = !globalConfig.jitless;
			const fastEnabled = jit && allowsEval.value;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$2(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
					if (!fastpass) fastpass = generateFastpass(def.shape);
					payload = fastpass(payload, ctx);
					if (!catchall) return payload;
					return handleCatchall([], input, payload, ctx, value, inst);
				}
				return superParse(payload, ctx);
			};
		});
		function handleUnionResults(results, final, inst, ctx) {
			for (const result of results) if (result.issues.length === 0) {
				final.value = result.value;
				return final;
			}
			const nonaborted = results.filter((r) => !aborted(r));
			if (nonaborted.length === 1) {
				final.value = nonaborted[0].value;
				return nonaborted[0];
			}
			final.issues.push({
				code: "invalid_union",
				input: final.value,
				inst,
				errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			});
			return final;
		}
		const $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "values", () => {
				if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
			});
			defineLazy(inst._zod, "pattern", () => {
				if (def.options.every((o) => o._zod.pattern)) {
					const patterns = def.options.map((o) => o._zod.pattern);
					return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
				}
			});
			const first = def.options.length === 1 ? def.options[0]._zod.run : null;
			inst._zod.parse = (payload, ctx) => {
				if (first) return first(payload, ctx);
				let async = false;
				const results = [];
				for (const option of def.options) {
					const result = option._zod.run({
						value: payload.value,
						issues: []
					}, ctx);
					if (result instanceof Promise) {
						results.push(result);
						async = true;
					} else {
						if (result.issues.length === 0) return result;
						results.push(result);
					}
				}
				if (!async) return handleUnionResults(results, payload, inst, ctx);
				return Promise.all(results).then((results) => {
					return handleUnionResults(results, payload, inst, ctx);
				});
			};
		});
		const $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				const left = def.left._zod.run({
					value: input,
					issues: []
				}, ctx);
				const right = def.right._zod.run({
					value: input,
					issues: []
				}, ctx);
				if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
					return handleIntersectionResults(payload, left, right);
				});
				return handleIntersectionResults(payload, left, right);
			};
		});
		function mergeValues(a, b) {
			if (a === b) return {
				valid: true,
				data: a
			};
			if (a instanceof Date && b instanceof Date && +a === +b) return {
				valid: true,
				data: a
			};
			if (isPlainObject(a) && isPlainObject(b)) {
				const bKeys = Object.keys(b);
				const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
				const newObj = {
					...a,
					...b
				};
				for (const key of sharedKeys) {
					const sharedValue = mergeValues(a[key], b[key]);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
					};
					newObj[key] = sharedValue.data;
				}
				return {
					valid: true,
					data: newObj
				};
			}
			if (Array.isArray(a) && Array.isArray(b)) {
				if (a.length !== b.length) return {
					valid: false,
					mergeErrorPath: []
				};
				const newArray = [];
				for (let index = 0; index < a.length; index++) {
					const itemA = a[index];
					const itemB = b[index];
					const sharedValue = mergeValues(itemA, itemB);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
					};
					newArray.push(sharedValue.data);
				}
				return {
					valid: true,
					data: newArray
				};
			}
			return {
				valid: false,
				mergeErrorPath: []
			};
		}
		function handleIntersectionResults(result, left, right) {
			const unrecKeys = /* @__PURE__ */ new Map();
			let unrecIssue;
			for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
				unrecIssue ?? (unrecIssue = iss);
				for (const k of iss.keys) {
					if (!unrecKeys.has(k)) unrecKeys.set(k, {});
					unrecKeys.get(k).l = true;
				}
			} else result.issues.push(iss);
			for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
				if (!unrecKeys.has(k)) unrecKeys.set(k, {});
				unrecKeys.get(k).r = true;
			}
			else result.issues.push(iss);
			const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
			if (bothKeys.length && unrecIssue) result.issues.push({
				...unrecIssue,
				keys: bothKeys
			});
			if (aborted(result)) return result;
			const merged = mergeValues(left.value, right.value);
			if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
			result.value = merged.data;
			return result;
		}
		const $ZodRecord = /*@__PURE__*/ $constructor("$ZodRecord", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				if (!isPlainObject(input)) {
					payload.issues.push({
						expected: "record",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				const proms = [];
				const values = def.keyType._zod.values;
				if (values) {
					payload.value = {};
					const recordKeys = /* @__PURE__ */ new Set();
					for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
						recordKeys.add(typeof key === "number" ? key.toString() : key);
						const keyResult = def.keyType._zod.run({
							value: key,
							issues: []
						}, ctx);
						if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
						if (keyResult.issues.length) {
							payload.issues.push({
								code: "invalid_key",
								origin: "record",
								issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
								input: key,
								path: [key],
								inst
							});
							continue;
						}
						const outKey = keyResult.value;
						const result = def.valueType._zod.run({
							value: input[key],
							issues: []
						}, ctx);
						if (result instanceof Promise) proms.push(result.then((result) => {
							if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
							payload.value[outKey] = result.value;
						}));
						else {
							if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
							payload.value[outKey] = result.value;
						}
					}
					let unrecognized;
					for (const key in input) if (!recordKeys.has(key)) {
						unrecognized = unrecognized ?? [];
						unrecognized.push(key);
					}
					if (unrecognized && unrecognized.length > 0) payload.issues.push({
						code: "unrecognized_keys",
						input,
						inst,
						keys: unrecognized
					});
				} else {
					payload.value = {};
					for (const key of Reflect.ownKeys(input)) {
						if (key === "__proto__") continue;
						if (!Object.prototype.propertyIsEnumerable.call(input, key)) continue;
						let keyResult = def.keyType._zod.run({
							value: key,
							issues: []
						}, ctx);
						if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
						if (typeof key === "string" && number$1.test(key) && keyResult.issues.length) {
							const retryResult = def.keyType._zod.run({
								value: Number(key),
								issues: []
							}, ctx);
							if (retryResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
							if (retryResult.issues.length === 0) keyResult = retryResult;
						}
						if (keyResult.issues.length) {
							if (def.mode === "loose") payload.value[key] = input[key];
							else payload.issues.push({
								code: "invalid_key",
								origin: "record",
								issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
								input: key,
								path: [key],
								inst
							});
							continue;
						}
						const result = def.valueType._zod.run({
							value: input[key],
							issues: []
						}, ctx);
						if (result instanceof Promise) proms.push(result.then((result) => {
							if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
							payload.value[keyResult.value] = result.value;
						}));
						else {
							if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
							payload.value[keyResult.value] = result.value;
						}
					}
				}
				if (proms.length) return Promise.all(proms).then(() => payload);
				return payload;
			};
		});
		const $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
			$ZodType.init(inst, def);
			const values = getEnumValues(def.entries);
			const valuesSet = new Set(values);
			inst._zod.values = valuesSet;
			inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (valuesSet.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				const _out = def.transform(payload.value, payload);
				if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				if (_out instanceof Promise) throw new $ZodAsyncError();
				payload.value = _out;
				payload.fallback = true;
				return payload;
			};
		});
		function handleOptionalResult(result, input) {
			if (input === void 0 && (result.issues.length || result.fallback)) return {
				issues: [],
				value: void 0
			};
			return result;
		}
		const $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.optout = "optional";
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
			});
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (def.innerType._zod.optin === "optional") {
					const input = payload.value;
					const result = def.innerType._zod.run(payload, ctx);
					if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
					return handleOptionalResult(result, input);
				}
				if (payload.value === void 0) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
			inst._zod.parse = (payload, ctx) => {
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
			});
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (payload.value === null) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) {
					payload.value = def.defaultValue;
					/**
					* $ZodDefault returns the default value immediately in forward direction.
					* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
					return payload;
				}
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
				return handleDefaultResult(result, def);
			};
		});
		function handleDefaultResult(payload, def) {
			if (payload.value === void 0) payload.value = def.defaultValue;
			return payload;
		}
		const $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) payload.value = def.defaultValue;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => {
				const v = def.innerType._zod.values;
				return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
				return handleNonOptionalResult(result, inst);
			};
		});
		function handleNonOptionalResult(payload, inst) {
			if (!payload.issues.length && payload.value === void 0) payload.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: payload.value,
				inst
			});
			return payload;
		}
		const $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => {
					payload.value = result.value;
					if (result.issues.length) {
						payload.value = def.catchValue({
							...payload,
							error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
							input: payload.value
						});
						payload.issues = [];
						payload.fallback = true;
					}
					return payload;
				});
				payload.value = result.value;
				if (result.issues.length) {
					payload.value = def.catchValue({
						...payload,
						error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
						input: payload.value
					});
					payload.issues = [];
					payload.fallback = true;
				}
				return payload;
			};
		});
		const $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => def.in._zod.values);
			defineLazy(inst._zod, "optin", () => def.in._zod.optin);
			defineLazy(inst._zod, "optout", () => def.out._zod.optout);
			defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") {
					const right = def.out._zod.run(payload, ctx);
					if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
					return handlePipeResult(right, def.in, ctx);
				}
				const left = def.in._zod.run(payload, ctx);
				if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
				return handlePipeResult(left, def.out, ctx);
			};
		});
		function handlePipeResult(left, next, ctx) {
			if (left.issues.length) {
				left.aborted = true;
				return left;
			}
			return next._zod.run({
				value: left.value,
				issues: left.issues,
				fallback: left.fallback
			}, ctx);
		}
		const $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
			defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then(handleReadonlyResult);
				return handleReadonlyResult(result);
			};
		});
		function handleReadonlyResult(payload) {
			payload.value = Object.freeze(payload.value);
			return payload;
		}
		const $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
			$ZodCheck.init(inst, def);
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _) => {
				return payload;
			};
			inst._zod.check = (payload) => {
				const input = payload.value;
				const r = def.fn(input);
				if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
				handleRefineResult(r, payload, input, inst);
			};
		});
		function handleRefineResult(result, payload, input, inst) {
			if (!result) {
				const _iss = {
					code: "custom",
					input,
					inst,
					path: [...inst._zod.def.path ?? []],
					continue: !inst._zod.def.abort
				};
				if (inst._zod.def.params) _iss.params = inst._zod.def.params;
				payload.issues.push(issue(_iss));
			}
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
		var _a;
		var $ZodRegistry = class {
			constructor() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
			}
			add(schema, ..._meta) {
				const meta = _meta[0];
				this._map.set(schema, meta);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
				return this;
			}
			clear() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
				return this;
			}
			remove(schema) {
				const meta = this._map.get(schema);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
				this._map.delete(schema);
				return this;
			}
			get(schema) {
				const p = schema._zod.parent;
				if (p) {
					const pm = { ...this.get(p) ?? {} };
					delete pm.id;
					const f = {
						...pm,
						...this._map.get(schema)
					};
					return Object.keys(f).length ? f : void 0;
				}
				return this._map.get(schema);
			}
			has(schema) {
				return this._map.has(schema);
			}
		};
		function registry() {
			return new $ZodRegistry();
		}
		(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
		const globalRegistry = globalThis.__zod_globalRegistry;
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
		// @__NO_SIDE_EFFECTS__
		function _string(Class, params) {
			return new Class({
				type: "string",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _email(Class, params) {
			return new Class({
				type: "string",
				format: "email",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _guid(Class, params) {
			return new Class({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuid(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv4(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v4",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv6(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v6",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv7(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v7",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _url(Class, params) {
			return new Class({
				type: "string",
				format: "url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _emoji(Class, params) {
			return new Class({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _nanoid(Class, params) {
			return new Class({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link _cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		// @__NO_SIDE_EFFECTS__
		function _cuid(Class, params) {
			return new Class({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cuid2(Class, params) {
			return new Class({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ulid(Class, params) {
			return new Class({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _xid(Class, params) {
			return new Class({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ksuid(Class, params) {
			return new Class({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv4(Class, params) {
			return new Class({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv6(Class, params) {
			return new Class({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv4(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv6(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64(Class, params) {
			return new Class({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64url(Class, params) {
			return new Class({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _e164(Class, params) {
			return new Class({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _jwt(Class, params) {
			return new Class({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDateTime(Class, params) {
			return new Class({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: false,
				local: false,
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDate(Class, params) {
			return new Class({
				type: "string",
				format: "date",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoTime(Class, params) {
			return new Class({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDuration(Class, params) {
			return new Class({
				type: "string",
				format: "duration",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _number(Class, params) {
			return new Class({
				type: "number",
				checks: [],
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _int(Class, params) {
			return new Class({
				type: "number",
				check: "number_format",
				abort: false,
				format: "safeint",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _unknown(Class) {
			return new Class({ type: "unknown" });
		}
		// @__NO_SIDE_EFFECTS__
		function _never(Class, params) {
			return new Class({
				type: "never",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lt(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lte(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gt(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gte(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _multipleOf(value, params) {
			return new $ZodCheckMultipleOf({
				check: "multiple_of",
				...normalizeParams(params),
				value
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _maxLength(maximum, params) {
			return new $ZodCheckMaxLength({
				check: "max_length",
				...normalizeParams(params),
				maximum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _minLength(minimum, params) {
			return new $ZodCheckMinLength({
				check: "min_length",
				...normalizeParams(params),
				minimum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _length(length, params) {
			return new $ZodCheckLengthEquals({
				check: "length_equals",
				...normalizeParams(params),
				length
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _regex(pattern, params) {
			return new $ZodCheckRegex({
				check: "string_format",
				format: "regex",
				...normalizeParams(params),
				pattern
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lowercase(params) {
			return new $ZodCheckLowerCase({
				check: "string_format",
				format: "lowercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uppercase(params) {
			return new $ZodCheckUpperCase({
				check: "string_format",
				format: "uppercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _includes(includes, params) {
			return new $ZodCheckIncludes({
				check: "string_format",
				format: "includes",
				...normalizeParams(params),
				includes
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _startsWith(prefix, params) {
			return new $ZodCheckStartsWith({
				check: "string_format",
				format: "starts_with",
				...normalizeParams(params),
				prefix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _endsWith(suffix, params) {
			return new $ZodCheckEndsWith({
				check: "string_format",
				format: "ends_with",
				...normalizeParams(params),
				suffix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _overwrite(tx) {
			return new $ZodCheckOverwrite({
				check: "overwrite",
				tx
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _normalize(form) {
			return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
		}
		// @__NO_SIDE_EFFECTS__
		function _trim() {
			return /* @__PURE__ */ _overwrite((input) => input.trim());
		}
		// @__NO_SIDE_EFFECTS__
		function _toLowerCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _toUpperCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _slugify() {
			return /* @__PURE__ */ _overwrite((input) => slugify(input));
		}
		// @__NO_SIDE_EFFECTS__
		function _array(Class, element, params) {
			return new Class({
				type: "array",
				element,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _custom(Class, fn, _params) {
			const norm = normalizeParams(_params);
			norm.abort ?? (norm.abort = true);
			return new Class({
				type: "custom",
				check: "custom",
				fn,
				...norm
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _refine(Class, fn, _params) {
			return new Class({
				type: "custom",
				check: "custom",
				fn,
				...normalizeParams(_params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _superRefine(fn, params) {
			const ch = /* @__PURE__ */ _check((payload) => {
				payload.addIssue = (issue$2) => {
					if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
					else {
						const _issue = issue$2;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = ch);
						_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
						payload.issues.push(issue(_issue));
					}
				};
				return fn(payload.value, payload);
			}, params);
			return ch;
		}
		// @__NO_SIDE_EFFECTS__
		function _check(fn, params) {
			const ch = new $ZodCheck({
				check: "custom",
				...normalizeParams(params)
			});
			ch._zod.check = fn;
			return ch;
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
		function initializeContext(params) {
			let target = params?.target ?? "draft-2020-12";
			if (target === "draft-4") target = "draft-04";
			if (target === "draft-7") target = "draft-07";
			return {
				processors: params.processors ?? {},
				metadataRegistry: params?.metadata ?? globalRegistry,
				target,
				unrepresentable: params?.unrepresentable ?? "throw",
				override: params?.override ?? (() => {}),
				io: params?.io ?? "output",
				counter: 0,
				seen: /* @__PURE__ */ new Map(),
				cycles: params?.cycles ?? "ref",
				reused: params?.reused ?? "inline",
				external: params?.external ?? void 0
			};
		}
		function process(schema, ctx, _params = {
			path: [],
			schemaPath: []
		}) {
			var _a;
			const def = schema._zod.def;
			const seen = ctx.seen.get(schema);
			if (seen) {
				seen.count++;
				if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
				return seen.schema;
			}
			const result = {
				schema: {},
				count: 1,
				cycle: void 0,
				path: _params.path
			};
			ctx.seen.set(schema, result);
			const overrideSchema = schema._zod.toJSONSchema?.();
			if (overrideSchema) result.schema = overrideSchema;
			else {
				const params = {
					..._params,
					schemaPath: [..._params.schemaPath, schema],
					path: _params.path
				};
				if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
				else {
					const _json = result.schema;
					const processor = ctx.processors[def.type];
					if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
					processor(schema, ctx, _json, params);
				}
				const parent = schema._zod.parent;
				if (parent) {
					if (!result.ref) result.ref = parent;
					process(parent, ctx, params);
					ctx.seen.get(parent).isParent = true;
				}
			}
			const meta = ctx.metadataRegistry.get(schema);
			if (meta) Object.assign(result.schema, meta);
			if (ctx.io === "input" && isTransforming(schema)) {
				delete result.schema.examples;
				delete result.schema.default;
			}
			if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
			delete result.schema._prefault;
			return ctx.seen.get(schema).schema;
		}
		function extractDefs(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const idToSchema = /* @__PURE__ */ new Map();
			for (const entry of ctx.seen.entries()) {
				const id = ctx.metadataRegistry.get(entry[0])?.id;
				if (id) {
					const existing = idToSchema.get(id);
					if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
					idToSchema.set(id, entry[0]);
				}
			}
			const makeURI = (entry) => {
				const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
				if (ctx.external) {
					const externalId = ctx.external.registry.get(entry[0])?.id;
					const uriGenerator = ctx.external.uri ?? ((id) => id);
					if (externalId) return { ref: uriGenerator(externalId) };
					const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
					entry[1].defId = id;
					return {
						defId: id,
						ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
					};
				}
				if (entry[1] === root) return { ref: "#" };
				const defUriPrefix = `#/${defsSegment}/`;
				const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
				return {
					defId,
					ref: defUriPrefix + defId
				};
			};
			const extractToDef = (entry) => {
				if (entry[1].schema.$ref) return;
				const seen = entry[1];
				const { ref, defId } = makeURI(entry);
				seen.def = { ...seen.schema };
				if (defId) seen.defId = defId;
				const schema = seen.schema;
				for (const key in schema) delete schema[key];
				schema.$ref = ref;
			};
			if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (schema === entry[0]) {
					extractToDef(entry);
					continue;
				}
				if (ctx.external) {
					const ext = ctx.external.registry.get(entry[0])?.id;
					if (schema !== entry[0] && ext) {
						extractToDef(entry);
						continue;
					}
				}
				if (ctx.metadataRegistry.get(entry[0])?.id) {
					extractToDef(entry);
					continue;
				}
				if (seen.cycle) {
					extractToDef(entry);
					continue;
				}
				if (seen.count > 1) {
					if (ctx.reused === "ref") {
						extractToDef(entry);
						continue;
					}
				}
			}
		}
		function finalize(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const flattenRef = (zodSchema) => {
				const seen = ctx.seen.get(zodSchema);
				if (seen.ref === null) return;
				const schema = seen.def ?? seen.schema;
				const _cached = { ...schema };
				const ref = seen.ref;
				seen.ref = null;
				if (ref) {
					flattenRef(ref);
					const refSeen = ctx.seen.get(ref);
					const refSchema = refSeen.schema;
					if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
						schema.allOf = schema.allOf ?? [];
						schema.allOf.push(refSchema);
					} else Object.assign(schema, refSchema);
					Object.assign(schema, _cached);
					if (zodSchema._zod.parent === ref) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (!(key in _cached)) delete schema[key];
					}
					if (refSchema.$ref && refSeen.def) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
					}
				}
				const parent = zodSchema._zod.parent;
				if (parent && parent !== ref) {
					flattenRef(parent);
					const parentSeen = ctx.seen.get(parent);
					if (parentSeen?.schema.$ref) {
						schema.$ref = parentSeen.schema.$ref;
						if (parentSeen.def) for (const key in schema) {
							if (key === "$ref" || key === "allOf") continue;
							if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
						}
					}
				}
				ctx.override({
					zodSchema,
					jsonSchema: schema,
					path: seen.path ?? []
				});
			};
			for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
			const result = {};
			if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
			else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
			else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
			else if (ctx.target === "openapi-3.0") {}
			if (ctx.external?.uri) {
				const id = ctx.external.registry.get(schema)?.id;
				if (!id) throw new Error("Schema is missing an `id` property");
				result.$id = ctx.external.uri(id);
			}
			Object.assign(result, root.def ?? root.schema);
			const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
			if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
			const defs = ctx.external?.defs ?? {};
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.def && seen.defId) {
					if (seen.def.id === seen.defId) delete seen.def.id;
					defs[seen.defId] = seen.def;
				}
			}
			if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
			else result.definitions = defs;
			try {
				const finalized = JSON.parse(JSON.stringify(result));
				Object.defineProperty(finalized, "~standard", {
					value: {
						...schema["~standard"],
						jsonSchema: {
							input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
							output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
						}
					},
					enumerable: false,
					writable: false
				});
				return finalized;
			} catch (_err) {
				throw new Error("Error converting schema to JSON.");
			}
		}
		function isTransforming(_schema, _ctx) {
			const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
			if (ctx.seen.has(_schema)) return false;
			ctx.seen.add(_schema);
			const def = _schema._zod.def;
			if (def.type === "transform") return true;
			if (def.type === "array") return isTransforming(def.element, ctx);
			if (def.type === "set") return isTransforming(def.valueType, ctx);
			if (def.type === "lazy") return isTransforming(def.getter(), ctx);
			if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
			if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
			if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			if (def.type === "pipe") {
				if (_schema._zod.traits.has("$ZodCodec")) return true;
				return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
			}
			if (def.type === "object") {
				for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
				return false;
			}
			if (def.type === "union") {
				for (const option of def.options) if (isTransforming(option, ctx)) return true;
				return false;
			}
			if (def.type === "tuple") {
				for (const item of def.items) if (isTransforming(item, ctx)) return true;
				if (def.rest && isTransforming(def.rest, ctx)) return true;
				return false;
			}
			return false;
		}
		/**
		* Creates a toJSONSchema method for a schema instance.
		* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
		*/
		const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
			const ctx = initializeContext({
				...params,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
			const { libraryOptions, target } = params ?? {};
			const ctx = initializeContext({
				...libraryOptions ?? {},
				target,
				io,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-processors.js
		const formatMap = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: ""
		};
		const stringProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			json.type = "string";
			const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
			if (typeof minimum === "number") json.minLength = minimum;
			if (typeof maximum === "number") json.maxLength = maximum;
			if (format) {
				json.format = formatMap[format] ?? format;
				if (json.format === "") delete json.format;
				if (format === "time") delete json.format;
			}
			if (contentEncoding) json.contentEncoding = contentEncoding;
			if (patterns && patterns.size > 0) {
				const regexes = [...patterns];
				if (regexes.length === 1) json.pattern = regexes[0].source;
				else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
					...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
					pattern: regex.source
				}))];
			}
		};
		const numberProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
			if (typeof format === "string" && format.includes("int")) json.type = "integer";
			else json.type = "number";
			const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
			const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
			const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
			if (exMin) if (legacy) {
				json.minimum = exclusiveMinimum;
				json.exclusiveMinimum = true;
			} else json.exclusiveMinimum = exclusiveMinimum;
			else if (typeof minimum === "number") json.minimum = minimum;
			if (exMax) if (legacy) {
				json.maximum = exclusiveMaximum;
				json.exclusiveMaximum = true;
			} else json.exclusiveMaximum = exclusiveMaximum;
			else if (typeof maximum === "number") json.maximum = maximum;
			if (typeof multipleOf === "number") json.multipleOf = multipleOf;
		};
		const neverProcessor = (_schema, _ctx, json, _params) => {
			json.not = {};
		};
		const enumProcessor = (schema, _ctx, json, _params) => {
			const def = schema._zod.def;
			const values = getEnumValues(def.entries);
			if (values.every((v) => typeof v === "number")) json.type = "number";
			if (values.every((v) => typeof v === "string")) json.type = "string";
			json.enum = values;
		};
		const customProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
		};
		const transformProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
		};
		const arrayProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			const { minimum, maximum } = schema._zod.bag;
			if (typeof minimum === "number") json.minItems = minimum;
			if (typeof maximum === "number") json.maxItems = maximum;
			json.type = "array";
			json.items = process(def.element, ctx, {
				...params,
				path: [...params.path, "items"]
			});
		};
		const objectProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			json.type = "object";
			json.properties = {};
			const shape = def.shape;
			for (const key in shape) json.properties[key] = process(shape[key], ctx, {
				...params,
				path: [
					...params.path,
					"properties",
					key
				]
			});
			const allKeys = new Set(Object.keys(shape));
			const requiredKeys = new Set([...allKeys].filter((key) => {
				const v = def.shape[key]._zod;
				if (ctx.io === "input") return v.optin === void 0;
				else return v.optout === void 0;
			}));
			if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
			if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
			else if (!def.catchall) {
				if (ctx.io === "output") json.additionalProperties = false;
			} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
				...params,
				path: [...params.path, "additionalProperties"]
			});
		};
		const unionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const isExclusive = def.inclusive === false;
			const options = def.options.map((x, i) => process(x, ctx, {
				...params,
				path: [
					...params.path,
					isExclusive ? "oneOf" : "anyOf",
					i
				]
			}));
			if (isExclusive) json.oneOf = options;
			else json.anyOf = options;
		};
		const intersectionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const a = process(def.left, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					0
				]
			});
			const b = process(def.right, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					1
				]
			});
			const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
			json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
		};
		const recordProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			json.type = "object";
			const keyType = def.keyType;
			const patterns = keyType._zod.bag?.patterns;
			if (def.mode === "loose" && patterns && patterns.size > 0) {
				const valueSchema = process(def.valueType, ctx, {
					...params,
					path: [
						...params.path,
						"patternProperties",
						"*"
					]
				});
				json.patternProperties = {};
				for (const pattern of patterns) json.patternProperties[pattern.source] = valueSchema;
			} else {
				if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") json.propertyNames = process(def.keyType, ctx, {
					...params,
					path: [...params.path, "propertyNames"]
				});
				json.additionalProperties = process(def.valueType, ctx, {
					...params,
					path: [...params.path, "additionalProperties"]
				});
			}
			const keyValues = keyType._zod.values;
			if (keyValues) {
				const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
				if (validKeyValues.length > 0) json.required = validKeyValues;
			}
		};
		const nullableProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const inner = process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			if (ctx.target === "openapi-3.0") {
				seen.ref = def.innerType;
				json.nullable = true;
			} else json.anyOf = [inner, { type: "null" }];
		};
		const nonoptionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		const defaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.default = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const prefaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const catchProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			let catchValue;
			try {
				catchValue = def.catchValue(void 0);
			} catch {
				throw new Error("Dynamic catch values are not supported in JSON Schema");
			}
			json.default = catchValue;
		};
		const pipeProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			const inIsTransform = def.in._zod.traits.has("$ZodTransform");
			const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
			process(innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = innerType;
		};
		const readonlyProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.readOnly = true;
		};
		const optionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/iso.js
		const ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
			$ZodISODateTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function datetime(params) {
			return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
		}
		const ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
			$ZodISODate.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function date(params) {
			return /* @__PURE__ */ _isoDate(ZodISODate, params);
		}
		const ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
			$ZodISOTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function time(params) {
			return /* @__PURE__ */ _isoTime(ZodISOTime, params);
		}
		const ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
			$ZodISODuration.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function duration(params) {
			return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
		}
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/errors.js
		const initializer = (inst, issues) => {
			$ZodError.init(inst, issues);
			inst.name = "ZodError";
			Object.defineProperties(inst, {
				format: { value: (mapper) => formatError(inst, mapper) },
				flatten: { value: (mapper) => flattenError(inst, mapper) },
				addIssue: { value: (issue) => {
					inst.issues.push(issue);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				addIssues: { value: (issues) => {
					inst.issues.push(...issues);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				isEmpty: { get() {
					return inst.issues.length === 0;
				} }
			});
		};
		const ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/parse.js
		const parse = /* @__PURE__ */ _parse(ZodRealError);
		const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
		const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
		const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
		const encode = /* @__PURE__ */ _encode(ZodRealError);
		const decode = /* @__PURE__ */ _decode(ZodRealError);
		const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
		const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
		const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
		const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
		const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
		const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
		//#endregion
		//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
		const _installedGroups = /* @__PURE__ */ new WeakMap();
		function _installLazyMethods(inst, group, methods) {
			const proto = Object.getPrototypeOf(inst);
			let installed = _installedGroups.get(proto);
			if (!installed) {
				installed = /* @__PURE__ */ new Set();
				_installedGroups.set(proto, installed);
			}
			if (installed.has(group)) return;
			installed.add(group);
			for (const key in methods) {
				const fn = methods[key];
				Object.defineProperty(proto, key, {
					configurable: true,
					enumerable: false,
					get() {
						const bound = fn.bind(this);
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: bound
						});
						return bound;
					},
					set(v) {
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: v
						});
					}
				});
			}
		}
		const ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
			$ZodType.init(inst, def);
			Object.assign(inst["~standard"], { jsonSchema: {
				input: createStandardJSONSchemaMethod(inst, "input"),
				output: createStandardJSONSchemaMethod(inst, "output")
			} });
			inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
			inst.def = def;
			inst.type = def.type;
			Object.defineProperty(inst, "_def", { value: def });
			inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
			inst.safeParse = (data, params) => safeParse(inst, data, params);
			inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
			inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
			inst.spa = inst.safeParseAsync;
			inst.encode = (data, params) => encode(inst, data, params);
			inst.decode = (data, params) => decode(inst, data, params);
			inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
			inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
			inst.safeEncode = (data, params) => safeEncode(inst, data, params);
			inst.safeDecode = (data, params) => safeDecode(inst, data, params);
			inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
			inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
			_installLazyMethods(inst, "ZodType", {
				check(...chks) {
					const def = this.def;
					return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
						check: ch,
						def: { check: "custom" },
						onattach: []
					} } : ch)] }), { parent: true });
				},
				with(...chks) {
					return this.check(...chks);
				},
				clone(def, params) {
					return clone(this, def, params);
				},
				brand() {
					return this;
				},
				register(reg, meta) {
					reg.add(this, meta);
					return this;
				},
				refine(check, params) {
					return this.check(refine(check, params));
				},
				superRefine(refinement, params) {
					return this.check(superRefine(refinement, params));
				},
				overwrite(fn) {
					return this.check(/* @__PURE__ */ _overwrite(fn));
				},
				optional() {
					return optional(this);
				},
				exactOptional() {
					return exactOptional(this);
				},
				nullable() {
					return nullable(this);
				},
				nullish() {
					return optional(nullable(this));
				},
				nonoptional(params) {
					return nonoptional(this, params);
				},
				array() {
					return array(this);
				},
				or(arg) {
					return union([this, arg]);
				},
				and(arg) {
					return intersection(this, arg);
				},
				transform(tx) {
					return pipe(this, transform(tx));
				},
				default(d) {
					return _default(this, d);
				},
				prefault(d) {
					return prefault(this, d);
				},
				catch(params) {
					return _catch(this, params);
				},
				pipe(target) {
					return pipe(this, target);
				},
				readonly() {
					return readonly(this);
				},
				describe(description) {
					const cl = this.clone();
					globalRegistry.add(cl, { description });
					return cl;
				},
				meta(...args) {
					if (args.length === 0) return globalRegistry.get(this);
					const cl = this.clone();
					globalRegistry.add(cl, args[0]);
					return cl;
				},
				isOptional() {
					return this.safeParse(void 0).success;
				},
				isNullable() {
					return this.safeParse(null).success;
				},
				apply(fn) {
					return fn(this);
				}
			});
			Object.defineProperty(inst, "description", {
				get() {
					return globalRegistry.get(inst)?.description;
				},
				configurable: true
			});
			return inst;
		});
		/** @internal */
		const _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
			const bag = inst._zod.bag;
			inst.format = bag.format ?? null;
			inst.minLength = bag.minimum ?? null;
			inst.maxLength = bag.maximum ?? null;
			_installLazyMethods(inst, "_ZodString", {
				regex(...args) {
					return this.check(/* @__PURE__ */ _regex(...args));
				},
				includes(...args) {
					return this.check(/* @__PURE__ */ _includes(...args));
				},
				startsWith(...args) {
					return this.check(/* @__PURE__ */ _startsWith(...args));
				},
				endsWith(...args) {
					return this.check(/* @__PURE__ */ _endsWith(...args));
				},
				min(...args) {
					return this.check(/* @__PURE__ */ _minLength(...args));
				},
				max(...args) {
					return this.check(/* @__PURE__ */ _maxLength(...args));
				},
				length(...args) {
					return this.check(/* @__PURE__ */ _length(...args));
				},
				nonempty(...args) {
					return this.check(/* @__PURE__ */ _minLength(1, ...args));
				},
				lowercase(params) {
					return this.check(/* @__PURE__ */ _lowercase(params));
				},
				uppercase(params) {
					return this.check(/* @__PURE__ */ _uppercase(params));
				},
				trim() {
					return this.check(/* @__PURE__ */ _trim());
				},
				normalize(...args) {
					return this.check(/* @__PURE__ */ _normalize(...args));
				},
				toLowerCase() {
					return this.check(/* @__PURE__ */ _toLowerCase());
				},
				toUpperCase() {
					return this.check(/* @__PURE__ */ _toUpperCase());
				},
				slugify() {
					return this.check(/* @__PURE__ */ _slugify());
				}
			});
		});
		const ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			_ZodString.init(inst, def);
			inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
			inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
			inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
			inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
			inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
			inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
			inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
			inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
			inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
			inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
			inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
			inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
			inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
			inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
			inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
			inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
			inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
			inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
			inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
			inst.datetime = (params) => inst.check(datetime(params));
			inst.date = (params) => inst.check(date(params));
			inst.time = (params) => inst.check(time(params));
			inst.duration = (params) => inst.check(duration(params));
		});
		function string(params) {
			return /* @__PURE__ */ _string(ZodString, params);
		}
		const ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			_ZodString.init(inst, def);
		});
		const ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
			$ZodEmail.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
			$ZodGUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
			$ZodUUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
			$ZodURL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
			$ZodEmoji.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
			$ZodNanoID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
			$ZodCUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
			$ZodCUID2.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
			$ZodULID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
			$ZodXID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
			$ZodKSUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
			$ZodIPv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
			$ZodIPv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
			$ZodCIDRv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
			$ZodCIDRv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
			$ZodBase64.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
			$ZodBase64URL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
			$ZodE164.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
			$ZodJWT.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
			$ZodNumber.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
			_installLazyMethods(inst, "ZodNumber", {
				gt(value, params) {
					return this.check(/* @__PURE__ */ _gt(value, params));
				},
				gte(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				min(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				lt(value, params) {
					return this.check(/* @__PURE__ */ _lt(value, params));
				},
				lte(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				max(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				int(params) {
					return this.check(int(params));
				},
				safe(params) {
					return this.check(int(params));
				},
				positive(params) {
					return this.check(/* @__PURE__ */ _gt(0, params));
				},
				nonnegative(params) {
					return this.check(/* @__PURE__ */ _gte(0, params));
				},
				negative(params) {
					return this.check(/* @__PURE__ */ _lt(0, params));
				},
				nonpositive(params) {
					return this.check(/* @__PURE__ */ _lte(0, params));
				},
				multipleOf(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				step(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				finite() {
					return this;
				}
			});
			const bag = inst._zod.bag;
			inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
			inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
			inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
			inst.isFinite = true;
			inst.format = bag.format ?? null;
		});
		function number(params) {
			return /* @__PURE__ */ _number(ZodNumber, params);
		}
		const ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
			$ZodNumberFormat.init(inst, def);
			ZodNumber.init(inst, def);
		});
		function int(params) {
			return /* @__PURE__ */ _int(ZodNumberFormat, params);
		}
		const ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
			$ZodUnknown.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => void 0;
		});
		function unknown() {
			return /* @__PURE__ */ _unknown(ZodUnknown);
		}
		const ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
			$ZodNever.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
		});
		function never(params) {
			return /* @__PURE__ */ _never(ZodNever, params);
		}
		const ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
			$ZodArray.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
			inst.element = def.element;
			_installLazyMethods(inst, "ZodArray", {
				min(n, params) {
					return this.check(/* @__PURE__ */ _minLength(n, params));
				},
				nonempty(params) {
					return this.check(/* @__PURE__ */ _minLength(1, params));
				},
				max(n, params) {
					return this.check(/* @__PURE__ */ _maxLength(n, params));
				},
				length(n, params) {
					return this.check(/* @__PURE__ */ _length(n, params));
				},
				unwrap() {
					return this.element;
				}
			});
		});
		function array(element, params) {
			return /* @__PURE__ */ _array(ZodArray, element, params);
		}
		const ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
			$ZodObjectJIT.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
			defineLazy(inst, "shape", () => {
				return def.shape;
			});
			_installLazyMethods(inst, "ZodObject", {
				keyof() {
					return _enum(Object.keys(this._zod.def.shape));
				},
				catchall(catchall) {
					return this.clone({
						...this._zod.def,
						catchall
					});
				},
				passthrough() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				loose() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				strict() {
					return this.clone({
						...this._zod.def,
						catchall: never()
					});
				},
				strip() {
					return this.clone({
						...this._zod.def,
						catchall: void 0
					});
				},
				extend(incoming) {
					return extend(this, incoming);
				},
				safeExtend(incoming) {
					return safeExtend(this, incoming);
				},
				merge(other) {
					return merge(this, other);
				},
				pick(mask) {
					return pick(this, mask);
				},
				omit(mask) {
					return omit(this, mask);
				},
				partial(...args) {
					return partial(ZodOptional, this, args[0]);
				},
				required(...args) {
					return required(ZodNonOptional, this, args[0]);
				}
			});
		});
		function object(shape, params) {
			return new ZodObject({
				type: "object",
				shape: shape ?? {},
				...normalizeParams(params)
			});
		}
		const ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
			$ZodUnion.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
			inst.options = def.options;
		});
		function union(options, params) {
			return new ZodUnion({
				type: "union",
				options,
				...normalizeParams(params)
			});
		}
		const ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
			$ZodIntersection.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
		});
		function intersection(left, right) {
			return new ZodIntersection({
				type: "intersection",
				left,
				right
			});
		}
		const ZodRecord = /*@__PURE__*/ $constructor("ZodRecord", (inst, def) => {
			$ZodRecord.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
			inst.keyType = def.keyType;
			inst.valueType = def.valueType;
		});
		function record(keyType, valueType, params) {
			if (!valueType || !valueType._zod) return new ZodRecord({
				type: "record",
				keyType: string(),
				valueType: keyType,
				...normalizeParams(valueType)
			});
			return new ZodRecord({
				type: "record",
				keyType,
				valueType,
				...normalizeParams(params)
			});
		}
		const ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
			$ZodEnum.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
			inst.enum = def.entries;
			inst.options = Object.values(def.entries);
			const keys = new Set(Object.keys(def.entries));
			inst.extract = (values, params) => {
				const newEntries = {};
				for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
			inst.exclude = (values, params) => {
				const newEntries = { ...def.entries };
				for (const value of values) if (keys.has(value)) delete newEntries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
		});
		function _enum(values, params) {
			return new ZodEnum({
				type: "enum",
				entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
				...normalizeParams(params)
			});
		}
		const ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
			$ZodTransform.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
			inst._zod.parse = (payload, _ctx) => {
				if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				payload.addIssue = (issue$1) => {
					if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
					else {
						const _issue = issue$1;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = inst);
						payload.issues.push(issue(_issue));
					}
				};
				const output = def.transform(payload.value, payload);
				if (output instanceof Promise) return output.then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				payload.value = output;
				payload.fallback = true;
				return payload;
			};
		});
		function transform(fn) {
			return new ZodTransform({
				type: "transform",
				transform: fn
			});
		}
		const ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function optional(innerType) {
			return new ZodOptional({
				type: "optional",
				innerType
			});
		}
		const ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
			$ZodExactOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function exactOptional(innerType) {
			return new ZodExactOptional({
				type: "optional",
				innerType
			});
		}
		const ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
			$ZodNullable.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nullable(innerType) {
			return new ZodNullable({
				type: "nullable",
				innerType
			});
		}
		const ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
			$ZodDefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeDefault = inst.unwrap;
		});
		function _default(innerType, defaultValue) {
			return new ZodDefault({
				type: "default",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
			$ZodPrefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function prefault(innerType, defaultValue) {
			return new ZodPrefault({
				type: "prefault",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
			$ZodNonOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nonoptional(innerType, params) {
			return new ZodNonOptional({
				type: "nonoptional",
				innerType,
				...normalizeParams(params)
			});
		}
		const ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
			$ZodCatch.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeCatch = inst.unwrap;
		});
		function _catch(innerType, catchValue) {
			return new ZodCatch({
				type: "catch",
				innerType,
				catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
			});
		}
		const ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
			$ZodPipe.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
			inst.in = def.in;
			inst.out = def.out;
		});
		function pipe(in_, out) {
			return new ZodPipe({
				type: "pipe",
				in: in_,
				out
			});
		}
		const ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
			$ZodReadonly.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function readonly(innerType) {
			return new ZodReadonly({
				type: "readonly",
				innerType
			});
		}
		const ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
			$ZodCustom.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
		});
		function custom(fn, _params) {
			return /* @__PURE__ */ _custom(ZodCustom, fn ?? (() => true), _params);
		}
		function refine(fn, _params = {}) {
			return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
		}
		function superRefine(fn, params) {
			return /* @__PURE__ */ _superRefine(fn, params);
		}
		//#endregion
		//#region lib/types/client/locales.js
		/** Dictionary namespace owned by this plugin. */
		const NS = "inlineUi";
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"action.sent": "已发送后续提问",
			"action.failed": "后续提问发送失败",
			"action.notReady": "界面尚未生成完成",
			"action.rateLimited": "操作过于频繁，请稍候",
			"action.tooLong": "发送内容过长",
			"action.regenerate": "重新生成",
			"action.regeneratePrompt": "生成在中途停止了，请重新生成完整的回复",
			"stopped.notice": "生成已中断，仅显示已完成的部分",
			"mermaid.rendering": "正在绘制图表…",
			"mermaid.error": "无法绘制此图表，显示源码",
			"markdown.copy": "复制",
			"markdown.copied": "已复制",
			"markdown.codeBlock.title": "代码",
			"markdown.codeBlock.wrap": "自动换行",
			"markdown.codeBlock.unwrap": "取消换行",
			"markdown.footnotes": "脚注",
			"chart.legendToggle": "切换系列显示",
			"chart.empty": "暂无数据",
			"table.sortAsc": "升序排序",
			"table.sortDesc": "降序排序",
			"image.open": "在新窗口打开图片",
			"image.unavailable": "图片不可用"
		};
		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"action.sent": "Follow-up sent",
			"action.failed": "Follow-up failed to send",
			"action.notReady": "The reply is still being generated",
			"action.rateLimited": "Too many actions; wait a moment",
			"action.tooLong": "The message is too long to send",
			"action.regenerate": "Regenerate",
			"action.regeneratePrompt": "The reply stopped midway; please regenerate it in full",
			"stopped.notice": "Generation was interrupted; showing what was completed",
			"mermaid.rendering": "Drawing diagram…",
			"mermaid.error": "This diagram could not be drawn; showing its source",
			"markdown.copy": "Copy",
			"markdown.copied": "Copied",
			"markdown.codeBlock.title": "Code",
			"markdown.codeBlock.wrap": "Wrap",
			"markdown.codeBlock.unwrap": "Unwrap",
			"markdown.footnotes": "Footnotes",
			"chart.legendToggle": "Toggle series",
			"chart.empty": "No data",
			"table.sortAsc": "Sort ascending",
			"table.sortDesc": "Sort descending",
			"image.open": "Open image in a new window",
			"image.unavailable": "Image unavailable"
		};
		/**
		* Build the `MarkdownText` chrome labels from this namespace.
		* @param t - translator for the `inlineUi` namespace.
		* @returns labels for fence toolbars and the footnote section.
		*/
		function markdownLabels(t) {
			return {
				code: {
					copyLabel: t("markdown.copy"),
					copiedLabel: t("markdown.copied"),
					toolbarLabels: {
						codeLabel: t("markdown.codeBlock.title"),
						wrapLabel: t("markdown.codeBlock.wrap"),
						unwrapLabel: t("markdown.codeBlock.unwrap")
					}
				},
				footnotes: t("markdown.footnotes")
			};
		}
		//#endregion
		//#region lib/types/shared/expr/tokenize.js
		/**
		* Tokenizer for the expression subset. Template literals are tokenized
		* recursively: each `${…}` becomes its own token list so the parser can parse
		* it independently.
		*/
		/** Thrown for malformed source; the interpreter reports it as an evaluation error instead of throwing into React. */
		var SyntaxFailure = class extends Error {
			offset;
			/** @param message - what was expected. @param offset - UTF-16 index into the source. */
			constructor(message, offset) {
				super(message);
				this.offset = offset;
				this.name = "SyntaxFailure";
			}
		};
		/** Multi-character punctuators, longest first so the scanner matches greedily. */
		const PUNCTUATORS = [
			"...",
			"===",
			"!==",
			"**",
			"?.",
			"??",
			"==",
			"!=",
			"<=",
			">=",
			"&&",
			"||",
			"=>",
			"(",
			")",
			"[",
			"]",
			"{",
			"}",
			",",
			".",
			":",
			";",
			"?",
			"+",
			"-",
			"*",
			"/",
			"%",
			"<",
			">",
			"!",
			"="
		];
		const SIMPLE_ESCAPES = {
			n: "\n",
			t: "	",
			r: "\r",
			b: "\b",
			f: "\f",
			v: "\v",
			"0": "\0"
		};
		const IDENTIFIER_START = /[A-Za-z_$]/;
		const IDENTIFIER_PART = /[A-Za-z0-9_$]/;
		const isDigit = (c) => c >= "0" && c <= "9";
		const NUMBER = /^(?:0[xX][0-9a-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|(?:\d[\d_]*)?(?:\.[\d_]*)?(?:[eE][+-]?\d+)?)/;
		var Scanner = class {
			source;
			pos = 0;
			constructor(source) {
				this.source = source;
			}
			/**
			* @param nested - inside `${…}`: stop at the `}` that closes it and consume it.
			* @returns the tokens, terminated by `end`.
			*/
			scan(nested) {
				const tokens = [];
				let depth = 0;
				for (;;) {
					const newlineBefore = this.skipWhitespace();
					const start = this.pos;
					const c = this.source[start];
					if (c === void 0) {
						if (nested) throw new SyntaxFailure("Unterminated ${ in template literal", start);
						tokens.push({
							kind: "end",
							start,
							newlineBefore
						});
						return tokens;
					}
					if (c === "}" && nested && depth === 0) {
						this.pos += 1;
						tokens.push({
							kind: "end",
							start,
							newlineBefore
						});
						return tokens;
					}
					if (isDigit(c) || c === "." && isDigit(this.source[start + 1] ?? "")) {
						tokens.push({
							kind: "number",
							value: this.readNumber(),
							start,
							newlineBefore
						});
						continue;
					}
					if (c === "\"" || c === "'") {
						tokens.push({
							kind: "string",
							value: this.readString(c),
							start,
							newlineBefore
						});
						continue;
					}
					if (c === "`") {
						tokens.push({
							...this.readTemplate(),
							start,
							newlineBefore
						});
						continue;
					}
					if (IDENTIFIER_START.test(c)) {
						let end = start + 1;
						while (IDENTIFIER_PART.test(this.source[end] ?? "")) end += 1;
						this.pos = end;
						tokens.push({
							kind: "identifier",
							name: this.source.slice(start, end),
							start,
							newlineBefore
						});
						continue;
					}
					const punct = PUNCTUATORS.find((p) => this.source.startsWith(p, start));
					if (punct === void 0) throw new SyntaxFailure(`Unexpected character ${JSON.stringify(c)}`, start);
					const value = punct === "?." && isDigit(this.source[start + 2] ?? "") ? "?" : punct;
					if (value === "{") depth += 1;
					else if (value === "}") depth -= 1;
					this.pos = start + value.length;
					tokens.push({
						kind: "punct",
						value,
						start,
						newlineBefore
					});
				}
			}
			skipWhitespace() {
				let newline = false;
				for (;;) {
					const c = this.source[this.pos];
					if (c === "\n") newline = true;
					else if (c !== " " && c !== "	" && c !== "\r") return newline;
					this.pos += 1;
				}
			}
			readNumber() {
				const start = this.pos;
				const text = NUMBER.exec(this.source.slice(start))?.[0] ?? "";
				if (text === "" || text === ".") throw new SyntaxFailure("Invalid number", start);
				this.pos = start + text.length;
				const value = Number(text.replaceAll("_", ""));
				if (Number.isNaN(value)) throw new SyntaxFailure(`Invalid number ${text}`, start);
				return value;
			}
			/** Reads one escape sequence after the backslash at `pos` and returns the cooked text. */
			readEscape() {
				const c = this.source[this.pos + 1];
				if (c === void 0) throw new SyntaxFailure("Unterminated escape sequence", this.pos);
				if (c === "u" || c === "x") {
					const braced = c === "u" && this.source[this.pos + 2] === "{";
					const hex = braced ? /^[0-9a-fA-F]+(?=\})/.exec(this.source.slice(this.pos + 3))?.[0] : /^[0-9a-fA-F]+/.exec(this.source.slice(this.pos + 2, this.pos + 2 + (c === "u" ? 4 : 2)))?.[0];
					if (hex === void 0 || !braced && hex.length !== (c === "u" ? 4 : 2)) throw new SyntaxFailure("Invalid unicode escape", this.pos);
					this.pos += braced ? hex.length + 4 : hex.length + 2;
					return String.fromCodePoint(Number.parseInt(hex, 16));
				}
				this.pos += 2;
				if (c === "\r" && this.source[this.pos] === "\n") this.pos += 1;
				if (c === "\n" || c === "\r") return "";
				return SIMPLE_ESCAPES[c] ?? c;
			}
			readString(quote) {
				const start = this.pos;
				this.pos += 1;
				let value = "";
				for (;;) {
					const c = this.source[this.pos];
					if (c === void 0 || c === "\n") throw new SyntaxFailure("Unterminated string literal", start);
					if (c === quote) {
						this.pos += 1;
						return value;
					}
					if (c === "\\") {
						value += this.readEscape();
						continue;
					}
					value += c;
					this.pos += 1;
				}
			}
			readTemplate() {
				const start = this.pos;
				this.pos += 1;
				const quasis = [];
				const expressions = [];
				let quasi = "";
				for (;;) {
					const c = this.source[this.pos];
					if (c === void 0) throw new SyntaxFailure("Unterminated template literal", start);
					if (c === "`") {
						this.pos += 1;
						quasis.push(quasi);
						return {
							kind: "template",
							quasis,
							expressions
						};
					}
					if (c === "\\") {
						quasi += this.readEscape();
						continue;
					}
					if (c === "$" && this.source[this.pos + 1] === "{") {
						this.pos += 2;
						quasis.push(quasi);
						quasi = "";
						expressions.push(this.scan(true));
						continue;
					}
					quasi += c;
					this.pos += 1;
				}
			}
		};
		/**
		* Tokenize expression or statement source.
		* @param source - the text inside `{…}`.
		* @returns tokens ending with an `end` token.
		* @throws SyntaxFailure on malformed literals or unknown characters.
		*/
		const tokenize = (source) => new Scanner(source).scan(false);
		//#endregion
		//#region lib/types/shared/expr/parse.js
		/**
		* Parser for the expression subset: a Pratt parser over {@link tokenize}
		* output. Statements are limited to `const`, expression statements, and
		* `return`, which is all an arrow block body or a `{@body}` declaration needs.
		*/
		const BINARY_PRECEDENCE = {
			"??": 1,
			"||": 2,
			"&&": 3,
			"===": 7,
			"!==": 7,
			"==": 7,
			"!=": 7,
			"<": 8,
			">": 8,
			"<=": 8,
			">=": 8,
			"+": 10,
			"-": 10,
			"*": 11,
			"/": 11,
			"%": 11,
			"**": 12
		};
		const KEYWORD_LITERALS = {
			true: {
				type: "Literal",
				value: true
			},
			false: {
				type: "Literal",
				value: false
			},
			null: {
				type: "Literal",
				value: null
			},
			undefined: {
				type: "Literal",
				value: void 0
			},
			NaN: {
				type: "Literal",
				value: NaN
			},
			Infinity: {
				type: "Literal",
				value: Number.POSITIVE_INFINITY
			}
		};
		const RESERVED = {
			const: true,
			return: true,
			typeof: true,
			let: true,
			var: true,
			function: true,
			new: true,
			class: true,
			this: true,
			if: true,
			else: true,
			for: true,
			while: true,
			do: true,
			switch: true,
			throw: true,
			try: true,
			catch: true,
			delete: true,
			void: true,
			in: true,
			of: true,
			instanceof: true,
			await: true,
			yield: true,
			import: true,
			export: true
		};
		const isPunctToken = (token, value) => token?.kind === "punct" && token.value === value;
		var Parser = class Parser {
			tokens;
			index = 0;
			constructor(tokens) {
				this.tokens = tokens;
			}
			/** Parses the whole token list as one expression. */
			expression() {
				const node = this.parseAssignmentLevel();
				this.expectEnd();
				return node;
			}
			/** Parses the whole token list as a statement list. */
			statements() {
				const list = this.parseStatementsUntil(null);
				this.expectEnd();
				return list;
			}
			get token() {
				const token = this.tokens[this.index];
				if (token === void 0) throw new SyntaxFailure("Unexpected end of input", this.tokens.at(-1)?.start ?? 0);
				return token;
			}
			peek(offset) {
				return this.tokens[this.index + offset];
			}
			isPunct(value) {
				return isPunctToken(this.token, value);
			}
			isIdentifier(name) {
				const { token } = this;
				return token.kind === "identifier" && token.name === name;
			}
			fail(message) {
				return new SyntaxFailure(message, this.token.start);
			}
			describe(token) {
				switch (token.kind) {
					case "end": return "end of input";
					case "number": return `number ${token.value}`;
					case "string": return `string ${JSON.stringify(token.value)}`;
					case "template": return "template literal";
					case "identifier": return token.name;
					case "punct": return JSON.stringify(token.value);
				}
			}
			next() {
				const token = this.token;
				this.index += 1;
				return token;
			}
			expectPunct(value) {
				if (!this.isPunct(value)) throw this.fail(`Expected ${JSON.stringify(value)} but found ${this.describe(this.token)}`);
				this.index += 1;
			}
			expectEnd() {
				if (this.token.kind !== "end") throw this.fail(`Unexpected ${this.describe(this.token)}`);
			}
			expectIdentifierName() {
				const token = this.token;
				if (token.kind !== "identifier" || RESERVED[token.name] === true) throw this.fail(`Expected a name but found ${this.describe(token)}`);
				this.index += 1;
				return token.name;
			}
			/** Statement list for a block body (`until` = `}`) or a whole program (`until` = null). */
			parseStatementsUntil(until) {
				const list = [];
				for (;;) {
					while (this.isPunct(";")) this.index += 1;
					if (until === null ? this.token.kind === "end" : this.isPunct(until)) return list;
					list.push(this.parseStatement());
					const after = this.token;
					if (!(isPunctToken(after, ";") || after.newlineBefore || after.kind === "end" || until !== null && isPunctToken(after, until))) throw this.fail(`Expected ";" but found ${this.describe(after)}`);
				}
			}
			parseStatement() {
				if (this.isIdentifier("const")) {
					this.index += 1;
					const pattern = this.parsePattern();
					this.expectPunct("=");
					return {
						type: "Const",
						pattern,
						init: this.parseAssignmentLevel()
					};
				}
				if (this.isIdentifier("let") || this.isIdentifier("var")) throw this.fail("Only const declarations are supported");
				if (this.isIdentifier("return")) {
					this.index += 1;
					const after = this.token;
					return {
						type: "Return",
						argument: after.kind === "end" || isPunctToken(after, ";") || isPunctToken(after, "}") || after.newlineBefore ? null : this.parseAssignmentLevel()
					};
				}
				const expression = this.parseAssignmentLevel();
				if (this.isPunct("=")) throw this.fail("Assignment is not supported; declare a new const instead");
				return {
					type: "Expression",
					expression
				};
			}
			/** Arrow functions and conditionals sit at the lowest precedence. */
			parseAssignmentLevel() {
				const arrow = this.tryParseArrow();
				if (arrow !== null) return arrow;
				return this.parseConditional();
			}
			tryParseArrow() {
				const token = this.token;
				if (token.kind === "identifier" && RESERVED[token.name] !== true && isPunctToken(this.peek(1), "=>")) {
					this.index += 2;
					return {
						type: "Arrow",
						params: [{
							type: "Identifier",
							name: token.name
						}],
						rest: null,
						body: this.parseArrowBody()
					};
				}
				if (!this.isPunct("(")) return null;
				const close = this.matchingParen(this.index);
				if (close === null || !isPunctToken(this.tokens[close + 1], "=>")) return null;
				this.index += 1;
				const params = [];
				let rest = null;
				while (!this.isPunct(")")) {
					if (this.isPunct("...")) {
						this.index += 1;
						rest = this.parsePattern();
						if (!this.isPunct(")")) throw this.fail("A rest parameter must be last");
						break;
					}
					params.push(this.parsePatternWithDefault());
					if (this.isPunct(",")) this.index += 1;
					else if (!this.isPunct(")")) throw this.fail(`Expected "," or ")" but found ${this.describe(this.token)}`);
				}
				this.index += 2;
				return {
					type: "Arrow",
					params,
					rest,
					body: this.parseArrowBody()
				};
			}
			/** @returns the index of the `)` matching the `(` at `open`, or null when unbalanced. */
			matchingParen(open) {
				let depth = 0;
				for (let i = open; i < this.tokens.length; i += 1) {
					const token = this.tokens[i];
					if (token?.kind !== "punct") continue;
					if (token.value === "(" || token.value === "[" || token.value === "{") depth += 1;
					else if (token.value === ")" || token.value === "]" || token.value === "}") {
						depth -= 1;
						if (depth === 0) return token.value === ")" ? i : null;
					}
				}
				return null;
			}
			parseArrowBody() {
				if (this.isPunct("{")) {
					this.index += 1;
					const statements = this.parseStatementsUntil("}");
					this.expectPunct("}");
					return {
						kind: "block",
						statements
					};
				}
				return {
					kind: "expression",
					expression: this.parseAssignmentLevel()
				};
			}
			parsePatternWithDefault() {
				const left = this.parsePattern();
				if (!this.isPunct("=")) return left;
				this.index += 1;
				return {
					type: "Assignment",
					left,
					right: this.parseAssignmentLevel()
				};
			}
			parsePattern() {
				if (this.isPunct("[")) {
					this.index += 1;
					const elements = [];
					let rest = null;
					while (!this.isPunct("]")) {
						if (this.isPunct(",")) {
							this.index += 1;
							elements.push(null);
							continue;
						}
						if (this.isPunct("...")) {
							this.index += 1;
							rest = this.parsePattern();
							if (!this.isPunct("]")) throw this.fail("A rest element must be last");
							break;
						}
						elements.push(this.parsePatternWithDefault());
						if (this.isPunct(",")) this.index += 1;
						else if (!this.isPunct("]")) throw this.fail(`Expected "," or "]" but found ${this.describe(this.token)}`);
					}
					this.index += 1;
					return {
						type: "ArrayPattern",
						elements,
						rest
					};
				}
				if (this.isPunct("{")) {
					this.index += 1;
					const properties = [];
					let rest = null;
					while (!this.isPunct("}")) {
						if (this.isPunct("...")) {
							this.index += 1;
							rest = this.parsePattern();
							if (!this.isPunct("}")) throw this.fail("A rest property must be last");
							break;
						}
						const keyToken = this.next();
						const key = keyToken.kind === "identifier" ? keyToken.name : keyToken.kind === "string" ? keyToken.value : null;
						if (key === null) throw new SyntaxFailure(`Expected a property name but found ${this.describe(keyToken)}`, keyToken.start);
						let value = {
							type: "Identifier",
							name: key
						};
						if (this.isPunct(":")) {
							this.index += 1;
							value = this.parsePattern();
						}
						if (this.isPunct("=")) {
							this.index += 1;
							value = {
								type: "Assignment",
								left: value,
								right: this.parseAssignmentLevel()
							};
						}
						properties.push({
							key,
							value
						});
						if (this.isPunct(",")) this.index += 1;
						else if (!this.isPunct("}")) throw this.fail(`Expected "," or "}" but found ${this.describe(this.token)}`);
					}
					this.index += 1;
					return {
						type: "ObjectPattern",
						properties,
						rest
					};
				}
				return {
					type: "Identifier",
					name: this.expectIdentifierName()
				};
			}
			parseConditional() {
				const test = this.parseBinary(0);
				if (!this.isPunct("?")) return test;
				this.index += 1;
				const consequent = this.parseAssignmentLevel();
				this.expectPunct(":");
				return {
					type: "Conditional",
					test,
					consequent,
					alternate: this.parseAssignmentLevel()
				};
			}
			parseBinary(minPrecedence) {
				let left = this.parseUnary();
				for (;;) {
					const token = this.token;
					if (token.kind !== "punct") return left;
					const precedence = BINARY_PRECEDENCE[token.value];
					if (precedence === void 0 || precedence < minPrecedence) return left;
					this.index += 1;
					const operator = token.value;
					const right = this.parseBinary(operator === "**" ? precedence : precedence + 1);
					left = isLogical(operator) ? {
						type: "Logical",
						operator,
						left,
						right
					} : {
						type: "Binary",
						operator: asBinary(operator),
						left,
						right
					};
				}
			}
			parseUnary() {
				const token = this.token;
				if (token.kind === "punct" && (token.value === "!" || token.value === "-" || token.value === "+")) {
					this.index += 1;
					return {
						type: "Unary",
						operator: token.value,
						argument: this.parseUnary()
					};
				}
				if (this.isIdentifier("typeof")) {
					this.index += 1;
					return {
						type: "Unary",
						operator: "typeof",
						argument: this.parseUnary()
					};
				}
				return this.parsePostfix();
			}
			parsePostfix() {
				let node = this.parsePrimary();
				for (;;) {
					const token = this.token;
					if (token.kind !== "punct") return node;
					if (token.value === "." || token.value === "?.") {
						const optional = token.value === "?.";
						this.index += 1;
						if (optional && this.isPunct("(")) {
							node = {
								type: "Call",
								callee: node,
								args: this.parseArguments(),
								optional: true
							};
							continue;
						}
						if (optional && this.isPunct("[")) {
							this.index += 1;
							const property = this.parseAssignmentLevel();
							this.expectPunct("]");
							node = {
								type: "Member",
								object: node,
								property,
								computed: true,
								optional: true
							};
							continue;
						}
						const name = this.token;
						if (name.kind !== "identifier") throw this.fail(`Expected a property name but found ${this.describe(name)}`);
						this.index += 1;
						node = {
							type: "Member",
							object: node,
							property: {
								type: "Literal",
								value: name.name
							},
							computed: false,
							optional
						};
						continue;
					}
					if (token.value === "[") {
						this.index += 1;
						const property = this.parseAssignmentLevel();
						this.expectPunct("]");
						node = {
							type: "Member",
							object: node,
							property,
							computed: true,
							optional: false
						};
						continue;
					}
					if (token.value === "(") {
						node = {
							type: "Call",
							callee: node,
							args: this.parseArguments(),
							optional: false
						};
						continue;
					}
					return node;
				}
			}
			parseArguments() {
				this.expectPunct("(");
				const args = [];
				while (!this.isPunct(")")) {
					args.push(this.parseSpreadOrExpression());
					if (this.isPunct(",")) this.index += 1;
					else if (!this.isPunct(")")) throw this.fail(`Expected "," or ")" but found ${this.describe(this.token)}`);
				}
				this.index += 1;
				return args;
			}
			parseSpreadOrExpression() {
				if (!this.isPunct("...")) return this.parseAssignmentLevel();
				this.index += 1;
				return {
					type: "Spread",
					argument: this.parseAssignmentLevel()
				};
			}
			parsePrimary() {
				const token = this.next();
				switch (token.kind) {
					case "number": return {
						type: "Literal",
						value: token.value
					};
					case "string": return {
						type: "Literal",
						value: token.value
					};
					case "template": return {
						type: "Template",
						quasis: token.quasis,
						expressions: token.expressions.map((tokens) => new Parser(tokens).expression())
					};
					case "identifier": {
						const literal = KEYWORD_LITERALS[token.name];
						if (literal !== void 0) return literal;
						if (RESERVED[token.name] === true) throw new SyntaxFailure(`Unexpected keyword ${token.name}`, token.start);
						return {
							type: "Identifier",
							name: token.name
						};
					}
					case "punct":
						if (token.value === "(") {
							const inner = this.parseAssignmentLevel();
							this.expectPunct(")");
							return inner;
						}
						if (token.value === "[") return this.parseArrayLiteral();
						if (token.value === "{") return this.parseObjectLiteral();
						throw new SyntaxFailure(`Unexpected ${this.describe(token)}`, token.start);
					case "end": throw new SyntaxFailure("Unexpected end of input", token.start);
				}
			}
			parseArrayLiteral() {
				const elements = [];
				while (!this.isPunct("]")) {
					if (this.isPunct(",")) {
						this.index += 1;
						elements.push(null);
						continue;
					}
					elements.push(this.parseSpreadOrExpression());
					if (this.isPunct(",")) this.index += 1;
					else if (!this.isPunct("]")) throw this.fail(`Expected "," or "]" but found ${this.describe(this.token)}`);
				}
				this.index += 1;
				return {
					type: "Array",
					elements
				};
			}
			parseObjectLiteral() {
				const properties = [];
				while (!this.isPunct("}")) {
					if (this.isPunct("...")) {
						this.index += 1;
						properties.push({
							kind: "spread",
							argument: this.parseAssignmentLevel()
						});
					} else properties.push(this.parseObjectProperty());
					if (this.isPunct(",")) this.index += 1;
					else if (!this.isPunct("}")) throw this.fail(`Expected "," or "}" but found ${this.describe(this.token)}`);
				}
				this.index += 1;
				return {
					type: "Object",
					properties
				};
			}
			parseObjectProperty() {
				const token = this.next();
				if (token.kind === "punct" && token.value === "[") {
					const key = this.parseAssignmentLevel();
					this.expectPunct("]");
					this.expectPunct(":");
					return {
						kind: "init",
						key,
						computed: true,
						value: this.parseAssignmentLevel()
					};
				}
				let key;
				if (token.kind === "identifier") key = {
					type: "Literal",
					value: token.name
				};
				else if (token.kind === "string" || token.kind === "number") key = {
					type: "Literal",
					value: token.kind === "number" ? String(token.value) : token.value
				};
				else throw new SyntaxFailure(`Expected a property name but found ${this.describe(token)}`, token.start);
				if (this.isPunct(":")) {
					this.index += 1;
					return {
						kind: "init",
						key,
						computed: false,
						value: this.parseAssignmentLevel()
					};
				}
				if (token.kind !== "identifier" || RESERVED[token.name] === true) throw this.fail(`Expected ":" but found ${this.describe(this.token)}`);
				if (this.isPunct("(")) throw this.fail("Method shorthand is not supported; use an arrow function");
				return {
					kind: "init",
					key,
					computed: false,
					value: {
						type: "Identifier",
						name: token.name
					}
				};
			}
		};
		const isLogical = (operator) => operator === "&&" || operator === "||" || operator === "??";
		const asBinary = (operator) => {
			switch (operator) {
				case "+":
				case "-":
				case "*":
				case "/":
				case "%":
				case "**":
				case "===":
				case "!==":
				case "==":
				case "!=":
				case "<":
				case ">":
				case "<=":
				case ">=": return operator;
				default: throw new SyntaxFailure(`Unknown operator ${operator}`, 0);
			}
		};
		/**
		* Parse one expression.
		* @param source - expression source without the surrounding braces.
		* @returns the syntax tree.
		* @throws SyntaxFailure when the source is not a complete expression of the subset.
		*/
		const parseExpression = (source) => new Parser(tokenize(source)).expression();
		/**
		* Parse a statement list (a `{@body}` declaration or an arrow block body).
		* @param source - statement source.
		* @returns the statements in order.
		* @throws SyntaxFailure when the source is not a statement list of the subset.
		*/
		const parseStatements = (source) => new Parser(tokenize(source)).statements();
		//#endregion
		//#region lib/types/shared/manifest.js
		/**
		* The tag vocabulary: one entry per component the model may write. The
		* renderer validates props against it; the Host prints it into the system
		* prompt. Prop types are deliberately small: the renderer coerces loosely
		* (a number prop accepts a numeric string) and ignores unknown props.
		*/
		const TONES = [
			"default",
			"secondary",
			"success",
			"warning",
			"danger",
			"accent"
		];
		const SIZES = [
			"xs",
			"sm",
			"md",
			"lg",
			"xl",
			"2xl"
		];
		/** The tag vocabulary, in the order the prompt lists it. */
		const COMPONENTS = {
			box: {
				description: "Vertical container. Use border/padding/background to make a card; gap spaces children.",
				children: true,
				props: {
					gap: {
						type: "number",
						min: 0,
						max: 8,
						description: "spacing unit between children (1 = 4px)"
					},
					padding: {
						type: "number",
						min: 0,
						max: 8
					},
					border: { type: "boolean" },
					radius: {
						type: "string",
						values: [
							"sm",
							"md",
							"lg",
							"xl",
							"2xl"
						]
					},
					background: {
						type: "string",
						values: [
							"surface-secondary",
							"surface-tertiary",
							"accent-soft",
							"success-soft",
							"warning-soft",
							"danger-soft"
						]
					},
					width: {
						type: "string",
						description: "CSS length or percentage"
					},
					height: { type: "string" },
					flex: {
						type: "string",
						description: "flex grow, e.g. \"1\""
					},
					align: {
						type: "string",
						values: [
							"start",
							"center",
							"end",
							"stretch"
						]
					},
					clip: { type: "boolean" }
				}
			},
			row: {
				description: "Horizontal container; wraps on narrow screens.",
				children: true,
				props: {
					gap: {
						type: "number",
						min: 0,
						max: 8
					},
					align: {
						type: "string",
						values: [
							"start",
							"center",
							"end",
							"stretch"
						]
					},
					justify: {
						type: "string",
						values: [
							"start",
							"center",
							"end",
							"between"
						]
					},
					wrap: { type: "boolean" }
				}
			},
			grid: {
				description: "Equal columns; children are grid-item tags (or any tags).",
				children: true,
				props: {
					columns: {
						type: "number",
						min: 1,
						max: 6,
						required: true
					},
					gap: {
						type: "number",
						min: 0,
						max: 8
					}
				}
			},
			"grid-item": {
				description: "One grid cell.",
				children: true,
				props: { span: {
					type: "number",
					min: 1,
					max: 6
				} }
			},
			divider: {
				description: "Horizontal rule.",
				children: false,
				props: {}
			},
			title: {
				description: "Heading-weight text (not a markdown heading); use for figures and card headers.",
				children: true,
				props: {
					size: {
						type: "string",
						values: SIZES
					},
					weight: {
						type: "string",
						values: [
							"normal",
							"medium",
							"semibold",
							"bold"
						]
					},
					color: {
						type: "string",
						values: TONES
					},
					tabularNums: { type: "boolean" }
				}
			},
			text: {
				description: "Body text with explicit size/weight/color; plain markdown prose needs no tag.",
				children: true,
				props: {
					size: {
						type: "string",
						values: SIZES
					},
					weight: {
						type: "string",
						values: [
							"normal",
							"medium",
							"semibold",
							"bold"
						]
					},
					color: {
						type: "string",
						values: TONES
					},
					inline: { type: "boolean" },
					tabularNums: { type: "boolean" }
				}
			},
			caption: {
				description: "Small secondary note under a table, chart, or control.",
				children: true,
				props: {}
			},
			label: {
				description: "Form label above a control.",
				children: true,
				props: {}
			},
			badge: {
				description: "Small pill.",
				children: true,
				props: { color: {
					type: "string",
					values: TONES
				} }
			},
			icon: {
				description: "Inline icon.",
				children: false,
				props: {
					name: {
						type: "string",
						required: true,
						values: [
							"arrow-right",
							"arrow-up-right",
							"check",
							"x",
							"refresh",
							"send",
							"info",
							"warning",
							"star",
							"plus",
							"minus",
							"chevron-down",
							"chevron-up",
							"external-link",
							"search",
							"clock",
							"calendar",
							"user",
							"zap",
							"trending-up",
							"trending-down"
						]
					},
					size: {
						type: "string",
						values: [
							"xs",
							"sm",
							"md"
						]
					}
				}
			},
			stat: {
				description: "One key figure: label above, value, optional delta line.",
				children: false,
				props: {
					label: {
						type: "string",
						required: true
					},
					value: {
						type: "string",
						required: true
					},
					delta: { type: "string" },
					trend: {
						type: "string",
						values: [
							"up",
							"down",
							"flat"
						]
					},
					hint: { type: "string" }
				}
			},
			progress: {
				description: "Horizontal bar; value out of max.",
				children: false,
				props: {
					value: {
						type: "number",
						required: true
					},
					max: { type: "number" },
					label: { type: "string" },
					color: {
						type: "string",
						values: TONES
					}
				}
			},
			table: {
				description: "Table from table-row/table-cell children; prefer markdown tables for static data.",
				children: true,
				props: {}
			},
			"table-row": {
				description: "Table row; the first row is the header.",
				children: true,
				props: {}
			},
			"table-cell": {
				description: "Table cell.",
				children: true,
				props: {
					align: {
						type: "string",
						values: [
							"start",
							"center",
							"end"
						]
					},
					width: { type: "string" }
				}
			},
			chart: {
				description: "Line, bar, area, or pie chart. data is an array of objects; xKey names the category field; series name the numeric fields.",
				children: false,
				props: {
					type: {
						type: "string",
						values: [
							"line",
							"bar",
							"area",
							"pie"
						],
						required: true
					},
					data: {
						type: "json",
						shape: "Array<Record<string, string | number>>",
						required: true
					},
					xKey: {
						type: "string",
						required: true
					},
					series: {
						type: "json",
						shape: "Array<{ key: string; label?: string }>",
						required: true
					},
					unit: { type: "string" },
					stacked: { type: "boolean" },
					height: {
						type: "number",
						min: 120,
						max: 480
					},
					xLabel: { type: "string" }
				}
			},
			slider: {
				description: "Range input. value and onChange bind it to state; marks label positions.",
				children: false,
				props: {
					min: {
						type: "number",
						required: true
					},
					max: {
						type: "number",
						required: true
					},
					step: { type: "number" },
					value: {
						type: "number",
						required: true
					},
					onChange: {
						type: "function",
						signature: "(value: number) => void",
						required: true
					},
					marks: {
						type: "json",
						shape: "Array<{ value: number; label: string }>"
					}
				}
			},
			"radio-group": {
				description: "Single choice; children are radio tags.",
				children: true,
				props: {
					value: {
						type: "string",
						required: true
					},
					onChange: {
						type: "function",
						signature: "(value: string) => void",
						required: true
					},
					direction: {
						type: "string",
						values: ["row", "col"]
					}
				}
			},
			radio: {
				description: "One option of a radio-group; children are its label.",
				children: true,
				props: { value: {
					type: "string",
					required: true
				} }
			},
			"segmented-control": {
				description: "Tab-like switch between a few options.",
				children: false,
				props: {
					options: {
						type: "json",
						shape: "Array<{ label: string; value: string }>",
						required: true
					},
					value: {
						type: "string",
						required: true
					},
					onChange: {
						type: "function",
						signature: "(value: string) => void",
						required: true
					},
					block: { type: "boolean" }
				}
			},
			select: {
				description: "Dropdown.",
				children: false,
				props: {
					options: {
						type: "json",
						shape: "Array<{ label: string; value: string }>",
						required: true
					},
					value: {
						type: "string",
						required: true
					},
					onChange: {
						type: "function",
						signature: "(value: string) => void",
						required: true
					}
				}
			},
			input: {
				description: "Text or number field. onChange receives the string.",
				children: false,
				props: {
					type: {
						type: "string",
						values: ["text", "number"]
					},
					value: {
						type: "string",
						required: true
					},
					onChange: {
						type: "function",
						signature: "(value: string) => void",
						required: true
					},
					placeholder: { type: "string" }
				}
			},
			checkbox: {
				description: "Checkbox; children are its label.",
				children: true,
				props: {
					checked: {
						type: "boolean",
						required: true
					},
					onChange: {
						type: "function",
						signature: "(checked: boolean) => void",
						required: true
					}
				}
			},
			button: {
				description: "Button. onClick runs an expression; use GenUI.issueNewTurn(text) to ask you something.",
				children: true,
				props: {
					onClick: {
						type: "function",
						signature: "() => void",
						required: true
					},
					color: {
						type: "string",
						values: ["primary", "secondary"]
					},
					variant: {
						type: "string",
						values: ["solid", "outline"]
					},
					size: {
						type: "string",
						values: [
							"sm",
							"md",
							"lg"
						]
					},
					block: { type: "boolean" },
					disabled: { type: "boolean" }
				}
			},
			image: {
				description: "Image from an https URL the reader can open.",
				children: false,
				props: {
					src: {
						type: "string",
						required: true
					},
					alt: { type: "string" },
					width: { type: "string" }
				}
			}
		};
		/** Tag names the parser recognizes; anything else is left as markdown text. */
		const TAG_NAMES = new Set(Object.keys(COMPONENTS));
		//#endregion
		//#region lib/types/shared/markup/parse.js
		/**
		* Parser for the inline-UI dialect: markdown with component tags from the
		* manifest, `{expr}` interpolations, `{#each}`/`{#if}` blocks, and `{@body}`
		* declarations. It is a single left-to-right scan that treats fenced and
		* inline code, TeX spans, and anything that does not parse as text, and that
		* truncates an unfinished construct at the end of a streaming message
		* instead of showing it half-written.
		*/
		const TAG_NAME = /^[a-z][a-z0-9-]*/;
		const PROP_NAME = /^[A-Za-z_][A-Za-z0-9_-]*/;
		const BLOCK_EACH = /^#each\s+([\s\S]+)\s+as\s+([A-Za-z_$][\w$]*)\s*(?:,\s*([A-Za-z_$][\w$]*))?\s*$/;
		const BLOCK_IF = /^#if\s+([\s\S]+)$/;
		const BODY = /^@body\s+([\s\S]+)$/;
		const INDENT = /^[ \t]*/;
		/** Delimiters that make the text between them opaque, with their closers; `\(` and `\[` are TeX, `$$` is display math. */
		const OPAQUE_SPANS = {
			"\\(": "\\)",
			"\\[": "\\]",
			$$: "$$"
		};
		const childrenOf = (container) => container.kind === "if" ? container.inElse ? container.alternate : container.consequent : container.children;
		/**
		* Index just past the `}` matching the `{` at `open`, skipping string,
		* template, and nested braces, or -1 when the text ends first.
		*/
		const braceEnd = (text, open) => {
			const stack = ["brace"];
			let i = open + 1;
			while (i < text.length) {
				const c = text[i];
				const mode = stack.at(-1);
				if (c === "\\") {
					i += 2;
					continue;
				}
				if (mode === "template") {
					if (c === "`") stack.pop();
					else if (c === "$" && text[i + 1] === "{") {
						stack.push("brace");
						i += 1;
					}
					i += 1;
					continue;
				}
				if (c === "\"" || c === "'") {
					const close = text.indexOf(c, i + 1);
					const newline = text.indexOf("\n", i + 1);
					if (close === -1 || newline !== -1 && newline < close) return -1;
					i = close + 1;
					continue;
				}
				if (c === "`") stack.push("template");
				else if (c === "{") stack.push("brace");
				else if (c === "}") {
					stack.pop();
					if (stack.length === 0) return i + 1;
				}
				i += 1;
			}
			return -1;
		};
		/** Strips the common indentation of continuation lines so markdown inside an indented tag is not read as a code block. */
		const dedent = (parts) => {
			let indent = Number.POSITIVE_INFINITY;
			parts.forEach((part, index) => {
				if (typeof part !== "string") return;
				const lines = part.split("\n");
				lines.forEach((line, lineIndex) => {
					if (lineIndex === 0) return;
					const leading = INDENT.exec(line)?.[0].length ?? 0;
					if (!(leading === line.length && (lineIndex < lines.length - 1 || index === parts.length - 1))) indent = Math.min(indent, leading);
				});
			});
			if (!Number.isFinite(indent) || indent === 0) return [...parts];
			return parts.map((part) => typeof part === "string" ? part.replaceAll(/\n[ \t]*/g, (run) => run.slice(0, Math.max(1, run.length - indent))) : part);
		};
		var DocumentParser = class {
			text;
			pos = 0;
			stack = [{
				kind: "root",
				children: []
			}];
			parts = [];
			textStart = 0;
			hasMarkup = false;
			problems = [];
			constructor(text) {
				this.text = text;
			}
			parse() {
				const { text } = this;
				let run = 0;
				while (this.pos < text.length) {
					const c = text[this.pos];
					if (c === "`" || c === "~") {
						const end = this.codeEnd();
						this.pos = end === -1 ? this.pos + 1 : end;
						continue;
					}
					if (c === "\\" || c === "$") {
						const closer = OPAQUE_SPANS[text.slice(this.pos, this.pos + 2)];
						const end = closer === void 0 ? -1 : text.indexOf(closer, this.pos + 2);
						if (closer !== void 0 && end !== -1) {
							this.pos = end + closer.length;
							continue;
						}
						this.pos = Math.min(this.pos + (c === "\\" ? 2 : 1), text.length);
						continue;
					}
					if (c === "<") {
						const consumed = this.tryTag(run);
						if (consumed === "truncate") {
							this.flushRun(run);
							return this.finish();
						}
						if (consumed === "tag") run = this.pos;
						else this.pos += 1;
						continue;
					}
					if (c === "{") {
						const consumed = this.tryBrace(run);
						if (consumed === "truncate") {
							this.flushRun(run);
							return this.finish();
						}
						if (consumed === "construct") run = this.pos;
						else this.pos += 1;
						continue;
					}
					this.pos += 1;
				}
				this.flushRun(run);
				return this.finish();
			}
			/** Appends text[run, pos) to the current text parts. */
			flushRun(run) {
				if (this.pos > run) {
					if (this.parts.length === 0) this.textStart = run;
					const last = this.parts.at(-1);
					const slice = this.text.slice(run, this.pos);
					if (typeof last === "string") this.parts[this.parts.length - 1] = last + slice;
					else this.parts.push(slice);
				}
			}
			/** Turns the accumulated parts into a text node on the current container. */
			flushText() {
				if (this.parts.length === 0) return;
				const parts = dedent(this.parts);
				const span = {
					start: this.textStart,
					end: this.pos
				};
				this.parts = [];
				if (parts.every((part) => typeof part === "string" && part.trim() === "")) return;
				const node = {
					kind: "text",
					parts,
					span
				};
				childrenOf(this.top()).push(node);
			}
			top() {
				const top = this.stack.at(-1);
				if (top === void 0) throw new Error("inline-ui parser: empty container stack");
				return top;
			}
			pushInterpolation(expression, start) {
				if (this.parts.length === 0) this.textStart = start;
				this.parts.push(expression);
			}
			/**
			* At a backtick or tilde: returns the index after the code span or fence,
			* or -1 when the run is a literal character.
			*/
			codeEnd() {
				const { text, pos } = this;
				const fence = text[pos] ?? "";
				let length = 0;
				while (text[pos + length] === fence) length += 1;
				const lineStart = text.lastIndexOf("\n", pos - 1) + 1;
				const atLineStart = text.slice(lineStart, pos).trim() === "";
				if (length >= 3 && atLineStart) {
					const closer = new RegExp(`\\n[ \\t]*${fence === "`" ? "`" : "~"}{${length},}[ \\t]*(?=\\n|$)`, "g");
					closer.lastIndex = pos + length;
					const match = closer.exec(text);
					return match === null ? text.length : match.index + match[0].length;
				}
				if (fence === "~") return -1;
				const run = "`".repeat(length);
				let search = pos + length;
				for (;;) {
					const close = text.indexOf(run, search);
					if (close === -1) return -1;
					let closeLength = 0;
					while (text[close + closeLength] === "`") closeLength += 1;
					if (closeLength === length) return close + length;
					search = close + closeLength;
				}
			}
			/**
			* At `<`: consumes a recognized opening, self-closing, or closing tag.
			* `text` leaves the `<` to the caller as a literal character.
			*/
			tryTag(run) {
				const { text, pos } = this;
				const closing = text[pos + 1] === "/";
				const nameStart = closing ? pos + 2 : pos + 1;
				const name = TAG_NAME.exec(text.slice(nameStart, nameStart + 32))?.[0];
				if (name === void 0) return nameStart >= text.length ? "truncate" : "text";
				const afterName = nameStart + name.length;
				if (afterName >= text.length) return [...TAG_NAMES].some((tag) => tag.startsWith(name)) ? "truncate" : "text";
				if (!TAG_NAMES.has(name)) return "text";
				if (closing) {
					const close = text.indexOf(">", afterName);
					if (close === -1) return "truncate";
					if (text.slice(afterName, close).trim() !== "") return "text";
					this.flushRun(run);
					this.flushText();
					this.closeElement(name, pos, close + 1);
					this.pos = close + 1;
					return "tag";
				}
				const parsed = this.parseProps(afterName);
				if (parsed === "truncate" || parsed === "text") return parsed;
				this.flushRun(run);
				this.flushText();
				this.hasMarkup = true;
				const selfClosing = parsed.selfClosing || !COMPONENTS[name]?.children;
				this.pos = parsed.end;
				if (selfClosing) {
					const node = {
						kind: "element",
						tag: name,
						props: parsed.props,
						children: [],
						open: false,
						span: {
							start: pos,
							end: parsed.end
						}
					};
					childrenOf(this.top()).push(node);
				} else this.stack.push({
					kind: "element",
					tag: name,
					props: parsed.props,
					children: [],
					start: pos
				});
				return "tag";
			}
			parseProps(from) {
				const { text } = this;
				const props = {};
				let i = from;
				for (;;) {
					while (i < text.length && /\s/.test(text[i] ?? "")) i += 1;
					if (i >= text.length) return "truncate";
					if (text.startsWith("/>", i)) return {
						props,
						selfClosing: true,
						end: i + 2
					};
					if (text[i] === ">") return {
						props,
						selfClosing: false,
						end: i + 1
					};
					const name = PROP_NAME.exec(text.slice(i, i + 64))?.[0];
					if (name === void 0) return "text";
					i += name.length;
					if (text[i] !== "=") {
						props[name] = {
							kind: "boolean",
							value: true
						};
						continue;
					}
					i += 1;
					const quote = text[i];
					if (quote === void 0) return "truncate";
					if (quote === "\"" || quote === "'") {
						const close = text.indexOf(quote, i + 1);
						if (close === -1) return "truncate";
						props[name] = {
							kind: "string",
							value: text.slice(i + 1, close)
						};
						i = close + 1;
						continue;
					}
					if (quote === "{") {
						const end = braceEnd(text, i);
						if (end === -1) return "truncate";
						props[name] = {
							kind: "expression",
							expression: {
								source: text.slice(i + 1, end - 1),
								span: {
									start: i + 1,
									end: end - 1
								}
							}
						};
						i = end;
						continue;
					}
					const bare = /^[^\s>]*/.exec(text.slice(i, i + 256))?.[0] ?? "";
					const value = bare.endsWith("/") && text[i + bare.length] === ">" ? bare.slice(0, -1) : bare;
					if (value === "") return "text";
					props[name] = {
						kind: "string",
						value
					};
					i += value.length;
				}
			}
			closeElement(tag, start, end) {
				const depth = this.stack.findLastIndex((container) => container.kind === "element" && container.tag === tag);
				if (depth <= 0) {
					this.problems.push({
						message: `Unexpected closing tag </${tag}>`,
						span: {
							start,
							end
						}
					});
					return;
				}
				while (this.stack.length - 1 > depth) {
					const container = this.stack.pop();
					if (container !== void 0 && container.kind !== "root") {
						this.problems.push({
							message: `Unclosed ${container.kind === "element" ? `<${container.tag}>` : `{#${container.kind}}`} closed by </${tag}>`,
							span: {
								start: container.start,
								end: start
							}
						});
						this.commit(container, start, false);
					}
				}
				const element = this.stack.pop();
				if (element !== void 0 && element.kind !== "root") this.commit(element, end, false);
			}
			/** Appends a finished container to its parent. */
			commit(container, end, open) {
				const span = {
					start: container.start,
					end
				};
				let node;
				switch (container.kind) {
					case "element":
						node = {
							kind: "element",
							tag: container.tag,
							props: container.props,
							children: container.children,
							open,
							span
						};
						break;
					case "each":
						node = {
							kind: "each",
							items: container.items,
							itemName: container.itemName,
							...container.indexName === void 0 ? {} : { indexName: container.indexName },
							children: container.children,
							open,
							span
						};
						break;
					case "if":
						node = {
							kind: "if",
							condition: container.condition,
							consequent: container.consequent,
							alternate: container.alternate,
							open,
							span
						};
						break;
				}
				childrenOf(this.top()).push(node);
			}
			/**
			* At `{`: consumes a block directive, declaration, or interpolation.
			* `text` leaves the `{` to the caller as a literal character.
			*/
			tryBrace(run) {
				const { text, pos } = this;
				const end = braceEnd(text, pos);
				if (end === -1) return text.indexOf("\n", pos) === -1 ? "truncate" : "text";
				const inner = text.slice(pos + 1, end - 1);
				const trimmed = inner.trim();
				if (trimmed === "") return "text";
				const span = {
					start: pos + 1,
					end: end - 1
				};
				const marker = trimmed[0];
				if (marker === "#" || marker === "/" || marker === ":" || marker === "@") {
					if (!(marker === "#" ? BLOCK_EACH.test(trimmed) || BLOCK_IF.test(trimmed) : marker === "/" ? trimmed === "/each" || trimmed === "/if" : marker === ":" ? trimmed === ":else" : BODY.test(trimmed))) {
						this.problems.push({
							message: `Unrecognized directive ${trimmed.slice(0, 24)}`,
							span
						});
						return "text";
					}
					this.flushRun(run);
					this.flushText();
					this.directive(trimmed, pos, end);
					this.hasMarkup = true;
					this.pos = end;
					return "construct";
				}
				try {
					parseExpression(inner);
				} catch {
					return "text";
				}
				this.flushRun(run);
				this.pushInterpolation({
					source: inner,
					span
				}, pos);
				this.pos = end;
				return "construct";
			}
			/** Applies a directive that {@link tryBrace} already recognized. */
			directive(trimmed, start, end) {
				const each = BLOCK_EACH.exec(trimmed);
				if (each !== null) {
					const [, items = "", itemName = "", indexName] = each;
					const itemsStart = start + 1 + trimmed.indexOf(items);
					this.stack.push({
						kind: "each",
						items: {
							source: items,
							span: {
								start: itemsStart,
								end: itemsStart + items.length
							}
						},
						itemName,
						indexName,
						children: [],
						start
					});
					return;
				}
				const branch = BLOCK_IF.exec(trimmed);
				if (branch !== null) {
					const condition = branch[1] ?? "";
					const conditionStart = start + 1 + trimmed.indexOf(condition);
					this.stack.push({
						kind: "if",
						condition: {
							source: condition,
							span: {
								start: conditionStart,
								end: conditionStart + condition.length
							}
						},
						consequent: [],
						alternate: [],
						inElse: false,
						start
					});
					return;
				}
				if (trimmed === ":else") {
					const top = this.top();
					if (top.kind !== "if" || top.inElse) {
						this.problems.push({
							message: "{:else} outside {#if}",
							span: {
								start,
								end
							}
						});
						return;
					}
					top.inElse = true;
					return;
				}
				if (trimmed === "/each" || trimmed === "/if") {
					this.closeBlock(trimmed.slice(1), start, end);
					return;
				}
				const statement = BODY.exec(trimmed)?.[1] ?? "";
				const statementStart = start + 1 + trimmed.indexOf(statement);
				childrenOf(this.top()).push({
					kind: "declaration",
					statement: {
						source: statement,
						span: {
							start: statementStart,
							end: statementStart + statement.length
						}
					},
					span: {
						start,
						end
					}
				});
			}
			closeBlock(kind, start, end) {
				const depth = this.stack.findLastIndex((container) => container.kind === kind);
				if (depth <= 0) {
					this.problems.push({
						message: `Unexpected {/${kind}}`,
						span: {
							start,
							end
						}
					});
					return;
				}
				while (this.stack.length - 1 > depth) {
					const container = this.stack.pop();
					if (container !== void 0 && container.kind !== "root") {
						this.problems.push({
							message: `Unclosed ${container.kind === "element" ? `<${container.tag}>` : `{#${container.kind}}`} closed by {/${kind}}`,
							span: {
								start: container.start,
								end: start
							}
						});
						this.commit(container, start, false);
					}
				}
				const block = this.stack.pop();
				if (block !== void 0 && block.kind !== "root") this.commit(block, end, false);
			}
			finish() {
				this.flushText();
				while (this.stack.length > 1) {
					const container = this.stack.pop();
					if (container !== void 0 && container.kind !== "root") this.commit(container, this.text.length, true);
				}
				const root = this.stack[0];
				return {
					nodes: root?.kind === "root" ? root.children : [],
					hasMarkup: this.hasMarkup,
					problems: this.problems
				};
			}
		};
		/**
		* Parse one assistant message, complete or still streaming.
		* @param text - the message text (markdown with inline-UI markup).
		* @returns the document; never throws.
		*/
		const parseDocument = (text) => new DocumentParser(text).parse();
		//#endregion
		//#region lib/types/client/mermaid/split.js
		/**
		* Split top-level markdown into prose and ```` ```mermaid ```` fences so a
		* diagram can render in place of its code block. Other fences stay inside
		* the prose untouched; a mermaid fence still streaming is reported open.
		*/
		const FENCE = /^ {0,3}(`{3,}|~{3,})[ \t]*([^\s`]*)[^`]*$/;
		/**
		* Whether a markdown text contains a mermaid fence opening.
		* @param text - message or text-node source.
		* @returns true when a line opens a ```` ```mermaid ```` fence.
		*/
		function hasMermaidFence(text) {
			return /^ {0,3}(`{3,}|~{3,})[ \t]*mermaid\b/im.test(text);
		}
		/**
		* Split markdown into prose and mermaid segments, in order.
		* @param text - markdown source, possibly still streaming.
		* @returns the segments; a text without mermaid fences yields one markdown segment.
		*/
		function splitMermaid(text) {
			const segments = [];
			const prose = [];
			let fence;
			const flushProse = () => {
				if (prose.length === 0) return;
				const joined = prose.join("\n");
				if (joined.trim() !== "") segments.push({
					kind: "markdown",
					text: joined
				});
				prose.length = 0;
			};
			for (const line of text.split("\n")) {
				if (fence === void 0) {
					const open = FENCE.exec(line);
					if (open?.[1] !== void 0) {
						const mermaid = open[2]?.toLowerCase() === "mermaid";
						fence = {
							marker: open[1],
							mermaid,
							body: []
						};
						if (mermaid) flushProse();
						else prose.push(line);
						continue;
					}
					prose.push(line);
					continue;
				}
				const trimmed = line.trim();
				if (trimmed.length >= fence.marker.length && trimmed[0] === fence.marker[0] && /^(`+|~+)$/.test(trimmed)) {
					if (fence.mermaid) segments.push({
						kind: "mermaid",
						code: fence.body.join("\n"),
						closed: true
					});
					else prose.push(line);
					fence = void 0;
					continue;
				}
				if (fence.mermaid) fence.body.push(line);
				else prose.push(line);
			}
			if (fence?.mermaid === true) segments.push({
				kind: "mermaid",
				code: fence.body.join("\n"),
				closed: false
			});
			flushProse();
			return segments;
		}
		//#endregion
		//#region lib/types/shared/expr/builtins.js
		/**
		* The globals and prototype methods expressions may reach. Everything else
		* (including `Function`, `Date`, timers, and any DOM) is invisible: an
		* identifier that is not declared, bound, or listed here is a reference error.
		*/
		/** Thrown for runtime failures inside an expression (type errors, reference errors, budget). */
		var EvaluationFailure = class extends Error {
			/** @param message - a JS-style message, e.g. `x is not defined`. */
			constructor(message) {
				super(message);
				this.name = "EvaluationFailure";
			}
		};
		/**
		* Whether `value` can be invoked. Closures the evaluator creates and host
		* functions are both plain functions; nothing else is callable.
		* @param value - any value.
		* @returns the narrowed callable.
		*/
		const isCallable = (value) => typeof value === "function";
		/**
		* Narrow to `object` (including arrays and functions) or fail like JS does.
		* @param value - any value.
		* @param what - operation name for the error message.
		* @returns the same value typed as object.
		*/
		const asObject = (value, what) => {
			if (typeof value === "object" && value !== null || typeof value === "function") return value;
			throw new EvaluationFailure(`${what}: ${String(value)} is not an object`);
		};
		/** A static membership table; built with fromEntries so `__proto__` and `Object.prototype` names are plain own keys. */
		const table = (names) => Object.fromEntries(names.map((name) => [name, true]));
		/** Property names that reach the prototype chain or constructors; rejected on every object. */
		const FORBIDDEN_KEYS = table([
			"__proto__",
			"constructor",
			"prototype"
		]);
		/** Array methods callable from expressions. `sort` and `reverse` are redirected to copying forms by the evaluator. */
		const ARRAY_METHODS = table([
			"map",
			"filter",
			"reduce",
			"slice",
			"join",
			"find",
			"findIndex",
			"findLast",
			"some",
			"every",
			"includes",
			"indexOf",
			"lastIndexOf",
			"toSorted",
			"toReversed",
			"flat",
			"flatMap",
			"concat",
			"at"
		]);
		/** String methods callable from expressions. */
		const STRING_METHODS = table([
			"toUpperCase",
			"toLowerCase",
			"trim",
			"trimStart",
			"trimEnd",
			"split",
			"replace",
			"replaceAll",
			"startsWith",
			"endsWith",
			"padStart",
			"padEnd",
			"repeat",
			"includes",
			"indexOf",
			"slice",
			"substring",
			"at",
			"charAt",
			"concat",
			"toString",
			"toLocaleString"
		]);
		/** Number methods callable from expressions. */
		const NUMBER_METHODS = table([
			"toFixed",
			"toLocaleString",
			"toString",
			"toPrecision"
		]);
		/** Converts a value Array.from can consume, mirroring the iterables an expression can produce. */
		const toArrayLike = (source) => {
			if (Array.isArray(source) || typeof source === "string") return source;
			if (typeof source === "object" && source !== null && Object.hasOwn(source, "length")) {
				const length = Reflect.get(source, "length");
				if (typeof length === "number") return { length: Math.max(0, Math.trunc(length)) };
			}
			throw new EvaluationFailure(`${String(source)} is not iterable`);
		};
		/** Builds the frozen namespace for `Math` from the listed names. */
		const mathNamespace = () => {
			const names = [
				"abs",
				"ceil",
				"floor",
				"round",
				"trunc",
				"sign",
				"sqrt",
				"cbrt",
				"pow",
				"min",
				"max",
				"log",
				"log2",
				"log10",
				"exp",
				"sin",
				"cos",
				"tan",
				"asin",
				"acos",
				"atan",
				"atan2",
				"hypot",
				"random",
				"PI",
				"E",
				"SQRT2",
				"LN2",
				"LN10"
			];
			const namespace = {};
			for (const name of names) namespace[name] = Math[name];
			return Object.freeze(namespace);
		};
		/** Global bindings visible to every expression; the outermost scope frame. */
		const GLOBALS = Object.freeze({
			Math: mathNamespace(),
			Number: Object.freeze(Object.assign((value) => Number(value), {
				isFinite: Number.isFinite,
				isInteger: Number.isInteger,
				isNaN: Number.isNaN,
				isSafeInteger: Number.isSafeInteger,
				parseFloat: Number.parseFloat,
				parseInt: Number.parseInt,
				MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
				MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
				EPSILON: Number.EPSILON,
				MAX_VALUE: Number.MAX_VALUE,
				MIN_VALUE: Number.MIN_VALUE,
				POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
				NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
				NaN: NaN
			})),
			String: (value) => String(value),
			Boolean: (value) => Boolean(value),
			Array: Object.freeze({
				isArray: (value) => Array.isArray(value),
				from: (source, map) => {
					const items = toArrayLike(source);
					return isCallable(map) ? Array.from(items, (item, index) => map(item, index)) : Array.from(items);
				},
				of: (...items) => items
			}),
			Object: Object.freeze({
				keys: (value) => Object.keys(asObject(value, "Object.keys")),
				values: (value) => Object.values(asObject(value, "Object.values")),
				entries: (value) => Object.entries(asObject(value, "Object.entries")),
				fromEntries: (entries) => {
					const result = {};
					for (const entry of Array.from(toArrayLike(entries))) {
						if (!Array.isArray(entry)) throw new EvaluationFailure("Object.fromEntries: entry is not a [key, value] pair");
						const key = String(entry[0]);
						if (FORBIDDEN_KEYS[key] === true) throw new EvaluationFailure(`Property ${key} is not allowed`);
						result[key] = entry[1];
					}
					return result;
				}
			}),
			JSON: Object.freeze({
				stringify: (value, _replacer, space) => JSON.stringify(value, null, typeof space === "number" || typeof space === "string" ? space : void 0),
				parse: (text) => JSON.parse(String(text))
			}),
			parseInt: (text, radix) => Number.parseInt(String(text), typeof radix === "number" ? radix : void 0),
			parseFloat: (text) => Number.parseFloat(String(text)),
			isNaN: (value) => Number.isNaN(Number(value)),
			isFinite: (value) => Number.isFinite(Number(value))
		});
		//#endregion
		//#region lib/types/shared/expr/evaluate.js
		/**
		* Tree-walking evaluator for the expression AST. Values are plain JavaScript
		* values; arrow functions become real closures over a {@link Frame}. Member
		* access never reaches prototypes except through the method allowlists in
		* `builtins.ts`, and every evaluation is bounded by a step budget so a
		* runaway expression fails instead of freezing the client.
		*/
		/** Evaluation steps (AST nodes visited) allowed per top-level evaluation or event handler call. */
		const MAX_STEPS = 2e5;
		/** Nested closure calls allowed before failing with a clear message instead of a stack overflow. */
		const MAX_CALL_DEPTH = 200;
		/** Marks an optional chain that short-circuited; callers convert it to `undefined` at the chain boundary. */
		const SHORT_CIRCUIT = Symbol("short-circuit");
		/** One lexical scope: bindings plus the enclosing frame. */
		var Frame = class {
			vars;
			parent;
			/** @param vars - bindings owned by this frame. @param parent - enclosing frame, or null for the globals. */
			constructor(vars, parent) {
				this.vars = vars;
				this.parent = parent;
			}
			/** @param name - identifier. @returns the binding. @throws EvaluationFailure when no frame binds `name`. */
			lookup(name) {
				if (this.vars.has(name)) return this.vars.get(name);
				if (this.parent === null) throw new EvaluationFailure(`${name} is not defined`);
				return this.parent.lookup(name);
			}
		};
		/**
		* Collect the identifiers a pattern binds, for clearing them when a declaration fails.
		* @param pattern - the binding target.
		* @param into - accumulator.
		* @returns `into`.
		*/
		const patternNames = (pattern, into = []) => {
			switch (pattern.type) {
				case "Identifier":
					into.push(pattern.name);
					break;
				case "ArrayPattern":
					for (const element of pattern.elements) if (element !== null) patternNames(element, into);
					if (pattern.rest !== null) patternNames(pattern.rest, into);
					break;
				case "ObjectPattern":
					for (const property of pattern.properties) patternNames(property.value, into);
					if (pattern.rest !== null) patternNames(pattern.rest, into);
					break;
				case "Assignment":
					patternNames(pattern.left, into);
					break;
			}
			return into;
		};
		const describeType = (value) => value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
		/** `==` for the value kinds expressions produce: nullish equivalence, then numeric coercion across primitives. */
		const looseEquals = (left, right) => {
			if (left === right) return true;
			const leftNullish = left === null || left === void 0;
			const rightNullish = right === null || right === void 0;
			if (leftNullish || rightNullish) return leftNullish && rightNullish;
			if (typeof left === typeof right || typeof left === "object" || typeof right === "object" || typeof left === "function" || typeof right === "function") return false;
			return Number(left) === Number(right);
		};
		const compare = (operator, left, right) => {
			if (typeof left === "string" && typeof right === "string") return operator === "<" ? left < right : operator === ">" ? left > right : operator === "<=" ? left <= right : left >= right;
			const l = Number(left);
			const r = Number(right);
			return operator === "<" ? l < r : operator === ">" ? l > r : operator === "<=" ? l <= r : l >= r;
		};
		/** Evaluates expressions and statements; one instance per interpreter, shared by all closures it creates. */
		var Evaluator = class {
			steps = 0;
			depth = 0;
			/**
			* Run one top-level evaluation or handler call with a fresh step budget.
			* Nested runs (closures invoked by native methods) share the outer budget.
			* @param body - the work.
			* @returns whatever `body` returns.
			*/
			run(body) {
				if (this.depth === 0) this.steps = 0;
				this.depth += 1;
				try {
					return body();
				} finally {
					this.depth -= 1;
				}
			}
			/**
			* Evaluate an expression in a frame.
			* @param node - the expression.
			* @param frame - bindings.
			* @returns the value.
			* @throws EvaluationFailure or any error a host function throws.
			*/
			evaluate(node, frame) {
				const value = this.evaluateChain(node, frame);
				return value === SHORT_CIRCUIT ? void 0 : value;
			}
			/**
			* Execute statements in a frame; `const` adds bindings to that frame.
			* @param statements - the block body.
			* @param frame - the block's own frame.
			* @returns the `return` value, or undefined when the block ends without one.
			*/
			execute(statements, frame) {
				for (const statement of statements) {
					this.step();
					switch (statement.type) {
						case "Const":
							this.bind(statement.pattern, this.evaluate(statement.init, frame), frame);
							break;
						case "Expression":
							this.evaluate(statement.expression, frame);
							break;
						case "Return": return statement.argument === null ? void 0 : this.evaluate(statement.argument, frame);
					}
				}
			}
			/**
			* Bind a pattern to a value in a frame.
			* @param pattern - destructuring target.
			* @param value - the value to destructure.
			* @param frame - receives the bindings.
			*/
			bind(pattern, value, frame) {
				switch (pattern.type) {
					case "Identifier":
						frame.vars.set(pattern.name, value);
						return;
					case "Assignment":
						this.bind(pattern.left, value === void 0 ? this.evaluate(pattern.right, frame) : value, frame);
						return;
					case "ArrayPattern": {
						const items = this.iterableItems(value);
						pattern.elements.forEach((element, index) => {
							if (element !== null) this.bind(element, items[index], frame);
						});
						if (pattern.rest !== null) this.bind(pattern.rest, items.slice(pattern.elements.length), frame);
						return;
					}
					case "ObjectPattern": {
						if (value === null || value === void 0) throw new EvaluationFailure(`Cannot destructure ${String(value)}`);
						const used = {};
						for (const property of pattern.properties) {
							used[property.key] = true;
							this.bind(property.value, this.getMember(value, property.key), frame);
						}
						if (pattern.rest !== null) {
							const rest = {};
							for (const [key, item] of Object.entries(asObject(value, "rest"))) if (used[key] !== true) rest[key] = item;
							this.bind(pattern.rest, rest, frame);
						}
						return;
					}
				}
			}
			/**
			* Read a property with the allowlist rules: own properties of objects and
			* arrays, indices and `length` of strings, and allowlisted methods bound to
			* their receiver. Anything else is undefined; prototype keys are an error.
			* @param object - the receiver.
			* @param key - property key.
			* @returns the property value.
			*/
			getMember(object, key) {
				if (object === null || object === void 0) throw new EvaluationFailure(`Cannot read properties of ${String(object)} (reading '${String(key)}')`);
				if (typeof key === "symbol") throw new EvaluationFailure("Symbol keys are not supported");
				const name = String(key);
				if (FORBIDDEN_KEYS[name] === true) throw new EvaluationFailure(`Property ${name} is not allowed`);
				if (typeof object === "string") {
					if (name === "length") return object.length;
					const index = Number(name);
					if (Number.isInteger(index) && index >= 0) return object[index];
					return STRING_METHODS[name] === true ? this.nativeMethod(String.prototype, object, name) : void 0;
				}
				if (typeof object === "number") return NUMBER_METHODS[name] === true ? this.nativeMethod(Number.prototype, object, name) : void 0;
				if (typeof object !== "object" && typeof object !== "function") return void 0;
				if (Object.hasOwn(object, name)) return Reflect.get(object, name);
				if (Array.isArray(object)) {
					const list = object;
					if (name === "sort") return (comparator) => [...list].sort(isCallable(comparator) ? (a, b) => Number(comparator(a, b)) : void 0);
					if (name === "reverse") return () => [...list].reverse();
					return ARRAY_METHODS[name] === true ? this.nativeMethod(Array.prototype, list, name) : void 0;
				}
			}
			nativeMethod(prototype, receiver, name) {
				const method = Reflect.get(prototype, name);
				if (!isCallable(method)) throw new EvaluationFailure(`${name} is not a function`);
				return (...args) => {
					this.step();
					return Reflect.apply(method, receiver, args);
				};
			}
			step() {
				this.steps += 1;
				if (this.steps > MAX_STEPS) throw new EvaluationFailure(`Evaluation exceeded ${MAX_STEPS} steps`);
			}
			iterableItems(value) {
				if (Array.isArray(value)) return value;
				if (typeof value === "string") return Array.from(value);
				throw new EvaluationFailure(`${describeType(value)} is not iterable`);
			}
			evaluateChain(node, frame) {
				this.step();
				switch (node.type) {
					case "Literal": return node.value;
					case "Identifier": return frame.lookup(node.name);
					case "Template": {
						let text = node.quasis[0] ?? "";
						node.expressions.forEach((expression, index) => {
							text += String(this.evaluate(expression, frame)) + (node.quasis[index + 1] ?? "");
						});
						return text;
					}
					case "Array": {
						const items = [];
						for (const element of node.elements) if (element === null) items.push(void 0);
						else if (element.type === "Spread") items.push(...this.spreadItems(element, frame));
						else items.push(this.evaluate(element, frame));
						return items;
					}
					case "Object": {
						const result = {};
						for (const property of node.properties) {
							if (property.kind === "spread") {
								const source = this.evaluate(property.argument, frame);
								if (typeof source === "object" && source !== null) {
									for (const [key, item] of Object.entries(source)) if (FORBIDDEN_KEYS[key] !== true) result[key] = item;
								}
								continue;
							}
							const key = String(this.evaluate(property.key, frame));
							if (FORBIDDEN_KEYS[key] === true) throw new EvaluationFailure(`Property ${key} is not allowed`);
							result[key] = this.evaluate(property.value, frame);
						}
						return result;
					}
					case "Member": {
						const object = this.evaluateChain(node.object, frame);
						if (object === SHORT_CIRCUIT) return SHORT_CIRCUIT;
						if (node.optional && (object === null || object === void 0)) return SHORT_CIRCUIT;
						return this.getMember(object, this.evaluate(node.property, frame));
					}
					case "Call": return this.evaluateCall(node, frame);
					case "Unary": return this.evaluateUnary(node.operator, this.evaluate(node.argument, frame));
					case "Binary": return this.evaluateBinary(node.operator, this.evaluate(node.left, frame), this.evaluate(node.right, frame));
					case "Logical": return this.evaluateLogical(node, frame);
					case "Conditional": return this.evaluate(node.test, frame) ? this.evaluate(node.consequent, frame) : this.evaluate(node.alternate, frame);
					case "Arrow": return this.closure(node, frame);
				}
			}
			evaluateLogical(node, frame) {
				const left = this.evaluate(node.left, frame);
				switch (node.operator) {
					case "&&": return left ? this.evaluate(node.right, frame) : left;
					case "||": return left ? left : this.evaluate(node.right, frame);
					case "??": return left ?? this.evaluate(node.right, frame);
				}
			}
			evaluateCall(node, frame) {
				let callee;
				let label;
				if (node.callee.type === "Member") {
					const object = this.evaluateChain(node.callee.object, frame);
					if (object === SHORT_CIRCUIT) return SHORT_CIRCUIT;
					if (node.callee.optional && (object === null || object === void 0)) return SHORT_CIRCUIT;
					const key = this.evaluate(node.callee.property, frame);
					callee = this.getMember(object, key);
					label = `${describeType(object)}.${String(key)}`;
				} else {
					callee = this.evaluateChain(node.callee, frame);
					label = node.callee.type === "Identifier" ? node.callee.name : "expression";
				}
				if (callee === SHORT_CIRCUIT) return SHORT_CIRCUIT;
				if (node.optional && (callee === null || callee === void 0)) return SHORT_CIRCUIT;
				if (!isCallable(callee)) throw new EvaluationFailure(`${label} is not a function`);
				const args = [];
				for (const argument of node.args) if (argument.type === "Spread") args.push(...this.spreadItems(argument, frame));
				else args.push(this.evaluate(argument, frame));
				return callee(...args);
			}
			evaluateUnary(operator, argument) {
				switch (operator) {
					case "!": return !argument;
					case "-": return -Number(argument);
					case "+": return Number(argument);
					case "typeof": return typeof argument;
				}
			}
			evaluateBinary(operator, left, right) {
				switch (operator) {
					case "+":
						if (typeof left === "number" && typeof right === "number") return left + right;
						if (typeof left === "string" || typeof right === "string") return String(left) + String(right);
						return Number(left) + Number(right);
					case "-": return Number(left) - Number(right);
					case "*": return Number(left) * Number(right);
					case "/": return Number(left) / Number(right);
					case "%": return Number(left) % Number(right);
					case "**": return Number(left) ** Number(right);
					case "===": return left === right;
					case "!==": return left !== right;
					case "==": return looseEquals(left, right);
					case "!=": return !looseEquals(left, right);
					case "<":
					case ">":
					case "<=":
					case ">=": return compare(operator, left, right);
				}
			}
			spreadItems(element, frame) {
				return this.iterableItems(this.evaluate(element.argument, frame));
			}
			closure(node, captured) {
				return (...args) => {
					if (this.depth >= MAX_CALL_DEPTH) throw new EvaluationFailure(`Call depth exceeded ${MAX_CALL_DEPTH}`);
					return this.run(() => {
						const frame = new Frame(/* @__PURE__ */ new Map(), captured);
						node.params.forEach((param, index) => {
							this.bind(param, args[index], frame);
						});
						if (node.rest !== null) this.bind(node.rest, args.slice(node.params.length), frame);
						return node.body.kind === "block" ? this.execute(node.body.statements, frame) : this.evaluate(node.body.expression, frame);
					});
				};
			}
		};
		//#endregion
		//#region lib/types/shared/expr/index.js
		/**
		* The {@link Interpreter} implementation: parses expression and declaration
		* sources (cached by source text), evaluates them with the allowlisted
		* globals, and exposes `useState`/`useMemo`/`useCallback` (also as `DIL.*`)
		* to `{@body}` declarations with keyed state.
		*/
		/** Parsed sources kept per interpreter; cleared wholesale once it grows past this. */
		const PARSE_CACHE_LIMIT = 4096;
		const failureMessage = (error) => error instanceof Error ? error.message : String(error);
		/** Memoizes a parser over source text so re-renders do not re-parse unchanged expressions. */
		const memoizeParser = (parse) => {
			const cache = /* @__PURE__ */ new Map();
			return (source) => {
				const hit = cache.get(source);
				if (hit !== void 0) return hit;
				if (cache.size >= PARSE_CACHE_LIMIT) cache.clear();
				const parsed = parse(source);
				cache.set(source, parsed);
				return parsed;
			};
		};
		/** The one `const` statement a `{@body}` declaration must be. */
		const declarationStatement = (source) => {
			const statements = parseStatements(source);
			const [first] = statements;
			if (statements.length !== 1 || first === void 0 || first.type !== "Const") throw new SyntaxFailure("A {@body} declaration must be one const statement", 0);
			return first;
		};
		/** Hooks visible to one declaration: keyed by that declaration's index. */
		const hooksFrame = (index, state, parent) => {
			const useState = (initial) => {
				return [state.get(index, isCallable(initial) ? initial() : initial), (next) => {
					state.set(index, next);
				}];
			};
			const useMemo = (compute) => {
				if (!isCallable(compute)) throw new EvaluationFailure("useMemo expects a function");
				return compute();
			};
			const useCallback = (callback) => {
				if (!isCallable(callback)) throw new EvaluationFailure("useCallback expects a function");
				return callback;
			};
			const hooks = {
				useState,
				useMemo,
				useCallback
			};
			const vars = new Map(Object.entries(hooks));
			vars.set("DIL", Object.freeze({ ...hooks }));
			return new Frame(vars, parent);
		};
		/**
		* Create an interpreter with the allowlisted globals. One per renderer is
		* enough; it holds only parse caches.
		* @returns the interpreter.
		*/
		const createInterpreter = () => {
			const globals = new Frame(new Map(Object.entries(GLOBALS)), null);
			const evaluator = new Evaluator();
			const expressionOf = memoizeParser(parseExpression);
			const declarationOf = memoizeParser(declarationStatement);
			return {
				declare: (statements, state, host) => {
					const genUi = Object.freeze({
						issueNewTurn: (text) => {
							host.issueNewTurn(String(text));
						},
						openUrl: (url) => {
							host.openUrl(String(url));
						}
					});
					const frame = new Frame(new Map([["GenUI", genUi]]), globals);
					const errors = [];
					statements.forEach((source, index) => {
						let names = [];
						try {
							const statement = declarationOf(source);
							names = patternNames(statement.pattern);
							const hooks = hooksFrame(index, state, frame);
							const value = evaluator.run(() => evaluator.evaluate(statement.init, hooks));
							evaluator.run(() => {
								evaluator.bind(statement.pattern, value, frame);
							});
						} catch (error) {
							for (const name of names) frame.vars.set(name, void 0);
							errors.push({
								message: failureMessage(error),
								source
							});
						}
					});
					const scope = {};
					for (const [name, value] of frame.vars) scope[name] = value;
					return {
						scope,
						errors
					};
				},
				evaluate: (source, scope) => {
					try {
						const expression = expressionOf(source);
						const frame = new Frame(new Map(Object.entries(scope)), globals);
						return {
							ok: true,
							value: evaluator.run(() => evaluator.evaluate(expression, frame))
						};
					} catch (error) {
						return {
							ok: false,
							error: {
								message: failureMessage(error),
								source
							}
						};
					}
				},
				call: (callable, args) => {
					if (!isCallable(callable)) return {
						ok: false,
						error: {
							message: `${String(callable)} is not a function`,
							source: ""
						}
					};
					try {
						return {
							ok: true,
							value: evaluator.run(() => callable(...args))
						};
					} catch (error) {
						return {
							ok: false,
							error: {
								message: failureMessage(error),
								source: ""
							}
						};
					}
				}
			};
		};
		//#endregion
		//#region \0dsh-css:/Users/sakaguchiraku/dev/deepseek-harness/packages/experimental/inline-ui/src/client/InlineUi.module.css.mjs
		const css = ".Ysmfca_message{min-width:0;color:var(--dsw-alias-label-primary);--iu-tone:var(--dsw-alias-label-primary);--iu-tone-bg:var(--dsw-alias-interactive-bg-hover,#8080801f)}.Ysmfca_block{min-width:0;margin:10px 0}.Ysmfca_block:first-child{margin-top:0}.Ysmfca_block:last-child{margin-bottom:0}.Ysmfca_notice{color:var(--dsw-alias-label-secondary);margin:8px 0 0;font-size:12px}.Ysmfca_noticeError{color:var(--dsw-alias-state-error-primary,#d33)}.Ysmfca_stopped{border:1px dashed var(--dsw-alias-border-l3,#80808059);color:var(--dsw-alias-label-secondary);border-radius:8px;flex-wrap:wrap;align-items:center;gap:8px 12px;margin:10px 0 0;padding:8px 10px;font-size:12px;display:flex}.Ysmfca_regenerate{border:1px solid var(--dsw-alias-border-l3,#80808059);background:var(--dsw-alias-bg-layer-1,transparent);color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;border-radius:6px;padding:3px 10px;font-size:12px}.Ysmfca_regenerate:disabled{opacity:.6;cursor:default}.Ysmfca_inlineCode{background:var(--dsw-alias-interactive-bg-hover,#8080801f);font-family:var(--ds-font-family-code,ui-monospace, SFMono-Regular, Menlo, monospace);border-radius:4px;padding:1px 4px;font-size:.92em}.Ysmfca_link{color:var(--dsw-alias-label-link,#3b6cf0);text-decoration:none}.Ysmfca_link:hover{text-decoration:underline}.Ysmfca_box{box-sizing:border-box;flex-direction:column;min-width:0;display:flex}.Ysmfca_boxBorder{border:1px solid var(--dsw-alias-border-l2,#80808040)}.Ysmfca_clip{overflow:hidden}.Ysmfca_radiusSm{border-radius:4px}.Ysmfca_radiusMd{border-radius:8px}.Ysmfca_radiusLg{border-radius:12px}.Ysmfca_radiusXl{border-radius:16px}.Ysmfca_radius2xl{border-radius:20px}.Ysmfca_bgSurfaceSecondary{background:var(--dsw-alias-bg-layer-2,#8080800f)}.Ysmfca_bgSurfaceTertiary{background:var(--dsw-alias-bg-layer-3,#8080801a)}.Ysmfca_bgAccentSoft{background:var(--dsw-alias-state-info-bg,#3b6cf01a)}.Ysmfca_bgSuccessSoft{background:var(--dsw-alias-state-success-bg,#22a06b1a)}.Ysmfca_bgWarningSoft{background:var(--dsw-alias-state-warning-bg,#e38a1c1f)}.Ysmfca_bgDangerSoft{background:var(--dsw-alias-state-error-bg,#dd33331a)}.Ysmfca_alignStart{align-items:flex-start}.Ysmfca_alignCenter{align-items:center}.Ysmfca_alignEnd{align-items:flex-end}.Ysmfca_alignStretch{align-items:stretch}.Ysmfca_row{flex-direction:row;align-items:flex-start;min-width:0;display:flex}.Ysmfca_row>*{min-width:0}.Ysmfca_rowWrap{flex-wrap:wrap}.Ysmfca_justifyStart{justify-content:flex-start}.Ysmfca_justifyCenter{justify-content:center}.Ysmfca_justifyEnd{justify-content:flex-end}.Ysmfca_justifyBetween{justify-content:space-between}.Ysmfca_grid{grid-template-columns:repeat(var(--iu-columns,2), minmax(0, 1fr));min-width:0;display:grid}.Ysmfca_gridItem{min-width:0}@media (width<=560px){.Ysmfca_row{flex-wrap:wrap}.Ysmfca_grid{grid-template-columns:repeat(min(var(--iu-columns,2), 2), minmax(0, 1fr))}.Ysmfca_gridItem{grid-column:span min(var(--iu-span,1), 2)}}.Ysmfca_divider{border:0;border-top:1px solid var(--dsw-alias-border-l2,#80808040);margin:4px 0}.Ysmfca_title{overflow-wrap:anywhere;margin:0;font-size:16px;font-weight:600;line-height:1.3}.Ysmfca_text{overflow-wrap:anywhere;margin:0}.Ysmfca_inline{display:inline}.Ysmfca_titleXs{font-size:12px}.Ysmfca_titleSm{font-size:14px}.Ysmfca_titleMd{font-size:16px}.Ysmfca_titleLg{font-size:18px}.Ysmfca_titleXl{font-size:22px}.Ysmfca_title2xl{font-size:28px;line-height:1.2}.Ysmfca_textXs{font-size:12px}.Ysmfca_textSm{font-size:13px}.Ysmfca_textMd{font-size:14px}.Ysmfca_textLg{font-size:16px}.Ysmfca_textXl{font-size:18px}.Ysmfca_text2xl{font-size:22px}.Ysmfca_weightNormal{font-weight:400}.Ysmfca_weightMedium{font-weight:500}.Ysmfca_weightSemibold{font-weight:600}.Ysmfca_weightBold{font-weight:700}.Ysmfca_tabularNums{font-variant-numeric:tabular-nums}.Ysmfca_toneDefault{--iu-tone:var(--dsw-alias-label-primary);--iu-tone-bg:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--iu-tone)}.Ysmfca_toneSecondary{--iu-tone:var(--dsw-alias-label-secondary);--iu-tone-bg:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--iu-tone)}.Ysmfca_toneSuccess{--iu-tone:var(--dsw-alias-state-success-primary,#22a06b);--iu-tone-bg:var(--dsw-alias-state-success-bg,#22a06b1f);color:var(--iu-tone)}.Ysmfca_toneWarning{--iu-tone:var(--dsw-alias-state-warning-primary,#d9822b);--iu-tone-bg:var(--dsw-alias-state-warning-bg,#e38a1c24);color:var(--iu-tone)}.Ysmfca_toneDanger{--iu-tone:var(--dsw-alias-state-error-primary,#d33);--iu-tone-bg:var(--dsw-alias-state-error-bg,#dd33331f);color:var(--iu-tone)}.Ysmfca_toneAccent{--iu-tone:var(--dsw-alias-button-primary-fill,#4d7cfe);--iu-tone-bg:var(--dsw-alias-state-info-bg,#4d7cfe1f);color:var(--iu-tone)}.Ysmfca_caption{color:var(--dsw-alias-label-secondary);margin:0;font-size:12px;line-height:1.4}.Ysmfca_label{color:var(--dsw-alias-label-secondary);margin:0;font-size:12px;font-weight:500}.Ysmfca_badge{background:var(--iu-tone-bg);color:var(--iu-tone);white-space:nowrap;vertical-align:middle;border-radius:999px;padding:1px 8px;font-size:12px;font-weight:500;line-height:18px;display:inline-block}.Ysmfca_icon{vertical-align:-.15em;stroke:currentColor;fill:none;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;flex:none;display:inline-block}.Ysmfca_stat{flex-direction:column;gap:2px;min-width:0;display:flex}.Ysmfca_statLabel{color:var(--dsw-alias-label-secondary);font-size:12px}.Ysmfca_statValue{font-variant-numeric:tabular-nums;font-size:22px;font-weight:600;line-height:1.2}.Ysmfca_statDelta{color:var(--dsw-alias-label-secondary);align-items:center;gap:3px;font-size:12px;display:inline-flex}.Ysmfca_trendUp{color:var(--dsw-alias-state-success-primary,#22a06b)}.Ysmfca_trendDown{color:var(--dsw-alias-state-error-primary,#d33)}.Ysmfca_statHint{color:var(--dsw-alias-label-tertiary);font-size:12px}.Ysmfca_progress{flex-direction:column;gap:4px;min-width:0;display:flex}.Ysmfca_progressLabel{color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;justify-content:space-between;font-size:12px;display:flex}.Ysmfca_progressTrack{background:var(--dsw-alias-interactive-bg-hover,#80808033);border-radius:4px;height:8px;overflow:hidden}.Ysmfca_progressFill{background:var(--iu-tone,var(--dsw-alias-button-primary-fill,#4d7cfe));border-radius:4px;height:100%;transition:width .2s}.Ysmfca_tableScroll{max-width:100%;overflow:auto}.Ysmfca_table{border-collapse:collapse;width:100%;font-size:13px}.Ysmfca_table th,.Ysmfca_table td{text-align:left;border-bottom:1px solid var(--dsw-alias-border-l2,#80808040);vertical-align:top;padding:6px 8px}.Ysmfca_table th{color:var(--dsw-alias-label-secondary);white-space:nowrap;font-weight:500}.Ysmfca_cellCenter{text-align:center}.Ysmfca_cellEnd{text-align:right;font-variant-numeric:tabular-nums}.Ysmfca_sortButton{color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;align-items:center;gap:4px;padding:0;display:inline-flex}.Ysmfca_sortButton:hover,.Ysmfca_sortButtonActive{color:var(--dsw-alias-label-primary)}.Ysmfca_sortMark{opacity:.7;font-size:10px}.Ysmfca_chart{flex-direction:column;gap:6px;min-width:0;margin:0;display:flex}.Ysmfca_chartStage{position:relative}.Ysmfca_chartSvg{touch-action:none;width:100%;height:auto;display:block}.Ysmfca_chartGrid{stroke:var(--dsw-alias-border-l2,#80808033);stroke-width:1px}.Ysmfca_chartAxis{stroke:var(--dsw-alias-border-l4,#80808080);stroke-width:1px}.Ysmfca_chartTick{fill:var(--dsw-alias-label-tertiary,#888);font-size:11px}.Ysmfca_chartAxisLabel{fill:var(--dsw-alias-label-secondary,#888);font-size:11px}.Ysmfca_chartHoverBand{fill:var(--dsw-alias-interactive-bg-hover,#8080801a)}.Ysmfca_chartSlice{stroke:var(--dsw-alias-bg-layer-1,#fff);stroke-width:1.5px}.Ysmfca_chartTooltip{border:1px solid var(--dsw-alias-border-l2,#80808040);background:var(--dsw-alias-bg-layer-3,#fff);pointer-events:none;white-space:nowrap;z-index:1;border-radius:6px;flex-direction:column;gap:2px;padding:6px 8px;font-size:12px;display:flex;position:absolute;top:8px;transform:translate(-50%);box-shadow:0 2px 8px #0000001f}.Ysmfca_chartTooltipHead{font-weight:600}.Ysmfca_chartEmpty{color:var(--dsw-alias-label-tertiary);font-size:12px}.Ysmfca_legend{color:var(--dsw-alias-label-secondary);flex-wrap:wrap;gap:4px 12px;font-size:12px;display:flex}.Ysmfca_legendItem{align-items:center;gap:6px;display:inline-flex}.Ysmfca_legendButton{color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;border-radius:4px;align-items:center;gap:6px;padding:2px 4px;display:inline-flex}.Ysmfca_legendButton:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801a)}.Ysmfca_legendButton[aria-pressed=false]{opacity:.45;text-decoration:line-through}.Ysmfca_legendSwatch{border-radius:2px;flex:none;width:10px;height:10px;display:inline-block}.Ysmfca_select,.Ysmfca_input,.Ysmfca_slider,.Ysmfca_checkbox{font:inherit;color:inherit}.Ysmfca_select,.Ysmfca_input{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l3,#80808059);background:var(--dsw-alias-bg-layer-1,transparent);border-radius:8px;width:100%;min-width:0;padding:6px 10px}.Ysmfca_select:focus-visible,.Ysmfca_input:focus-visible{outline:2px solid var(--dsw-alias-button-primary-fill,#4d7cfe);outline-offset:1px}.Ysmfca_sliderWrap{flex-direction:column;min-width:0;display:flex}.Ysmfca_slider{width:100%;accent-color:var(--dsw-alias-button-primary-fill,#4d7cfe);margin:6px 0}.Ysmfca_marks{height:16px;color:var(--dsw-alias-label-tertiary);margin:0 7px;font-size:11px;position:relative}.Ysmfca_mark{white-space:nowrap;position:absolute;top:0}.Ysmfca_radioGroup{flex-direction:column;gap:6px;display:flex}.Ysmfca_radioGroupRow{flex-flow:wrap;gap:6px 14px}.Ysmfca_radio{cursor:pointer;align-items:flex-start;gap:8px;line-height:1.4;display:flex}.Ysmfca_radio input{accent-color:var(--dsw-alias-button-primary-fill,#4d7cfe);margin:3px 0 0}.Ysmfca_segmented{background:var(--dsw-alias-interactive-bg-hover,#8080801f);border-radius:8px;max-width:100%;padding:2px;display:inline-flex;overflow:auto}.Ysmfca_segmentedBlock{display:flex}.Ysmfca_segmentedBlock .Ysmfca_segment{flex:1 1 0}.Ysmfca_segment{color:var(--dsw-alias-label-secondary);font:inherit;white-space:nowrap;cursor:pointer;background:0 0;border:0;border-radius:6px;padding:4px 12px;font-size:13px}.Ysmfca_segment[aria-pressed=true]{background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-primary);box-shadow:0 1px 2px #0000001f}.Ysmfca_checkboxLabel{cursor:pointer;align-items:flex-start;gap:8px;line-height:1.4;display:flex}.Ysmfca_checkbox{width:16px;height:16px;accent-color:var(--dsw-alias-button-primary-fill,#4d7cfe);flex:none;margin:2px 0 0}.Ysmfca_button{background:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;border:1px solid #0000;border-radius:8px;justify-content:center;align-self:flex-start;align-items:center;gap:6px;padding:6px 14px;font-weight:500;line-height:1.4;display:inline-flex}.Ysmfca_button:hover:not(:disabled){filter:brightness(.95)}.Ysmfca_buttonPrimary{background:var(--dsw-alias-button-primary-fill,#4d7cfe);color:var(--dsw-alias-label-primary-inverted,#fff)}.Ysmfca_buttonOutline{border-color:var(--dsw-alias-border-l3,#80808059);color:var(--dsw-alias-label-primary);background:0 0}.Ysmfca_buttonPrimary.Ysmfca_buttonOutline{border-color:var(--dsw-alias-button-primary-fill,#4d7cfe);color:var(--dsw-alias-button-primary-fill,#4d7cfe)}.Ysmfca_buttonSm{padding:3px 10px;font-size:12px}.Ysmfca_buttonLg{padding:9px 18px;font-size:15px}.Ysmfca_buttonBlock{align-self:stretch;width:100%;display:flex}.Ysmfca_button:disabled{opacity:.6;cursor:default}.Ysmfca_imageLink{max-width:100%;line-height:0;display:inline-block}.Ysmfca_image{border-radius:8px;max-width:100%;height:auto}.Ysmfca_imageMissing{background:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--dsw-alias-label-tertiary);border-radius:6px;padding:4px 8px;font-size:12px;display:inline-block}.Ysmfca_mermaidPending{border:1px dashed var(--dsw-alias-border-l2,#7f7f7f4d);color:var(--dsw-alias-label-tertiary);text-align:center;border-radius:12px;padding:16px;font-size:13px}";
		const tagId = "@rakutek/dsh-intelligent-ui/InlineUi.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@rakutek/dsh-intelligent-ui";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var InlineUi_module_css_default = {
			"alignCenter": "Ysmfca_alignCenter",
			"alignEnd": "Ysmfca_alignEnd",
			"alignStart": "Ysmfca_alignStart",
			"alignStretch": "Ysmfca_alignStretch",
			"badge": "Ysmfca_badge",
			"bgAccentSoft": "Ysmfca_bgAccentSoft",
			"bgDangerSoft": "Ysmfca_bgDangerSoft",
			"bgSuccessSoft": "Ysmfca_bgSuccessSoft",
			"bgSurfaceSecondary": "Ysmfca_bgSurfaceSecondary",
			"bgSurfaceTertiary": "Ysmfca_bgSurfaceTertiary",
			"bgWarningSoft": "Ysmfca_bgWarningSoft",
			"block": "Ysmfca_block",
			"box": "Ysmfca_box",
			"boxBorder": "Ysmfca_boxBorder",
			"button": "Ysmfca_button",
			"buttonBlock": "Ysmfca_buttonBlock",
			"buttonLg": "Ysmfca_buttonLg",
			"buttonOutline": "Ysmfca_buttonOutline",
			"buttonPrimary": "Ysmfca_buttonPrimary",
			"buttonSm": "Ysmfca_buttonSm",
			"caption": "Ysmfca_caption",
			"cellCenter": "Ysmfca_cellCenter",
			"cellEnd": "Ysmfca_cellEnd",
			"chart": "Ysmfca_chart",
			"chartAxis": "Ysmfca_chartAxis",
			"chartAxisLabel": "Ysmfca_chartAxisLabel",
			"chartEmpty": "Ysmfca_chartEmpty",
			"chartGrid": "Ysmfca_chartGrid",
			"chartHoverBand": "Ysmfca_chartHoverBand",
			"chartSlice": "Ysmfca_chartSlice",
			"chartStage": "Ysmfca_chartStage",
			"chartSvg": "Ysmfca_chartSvg",
			"chartTick": "Ysmfca_chartTick",
			"chartTooltip": "Ysmfca_chartTooltip",
			"chartTooltipHead": "Ysmfca_chartTooltipHead",
			"checkbox": "Ysmfca_checkbox",
			"checkboxLabel": "Ysmfca_checkboxLabel",
			"clip": "Ysmfca_clip",
			"divider": "Ysmfca_divider",
			"grid": "Ysmfca_grid",
			"gridItem": "Ysmfca_gridItem",
			"icon": "Ysmfca_icon",
			"image": "Ysmfca_image",
			"imageLink": "Ysmfca_imageLink",
			"imageMissing": "Ysmfca_imageMissing",
			"inline": "Ysmfca_inline",
			"inlineCode": "Ysmfca_inlineCode",
			"input": "Ysmfca_input",
			"justifyBetween": "Ysmfca_justifyBetween",
			"justifyCenter": "Ysmfca_justifyCenter",
			"justifyEnd": "Ysmfca_justifyEnd",
			"justifyStart": "Ysmfca_justifyStart",
			"label": "Ysmfca_label",
			"legend": "Ysmfca_legend",
			"legendButton": "Ysmfca_legendButton",
			"legendItem": "Ysmfca_legendItem",
			"legendSwatch": "Ysmfca_legendSwatch",
			"link": "Ysmfca_link",
			"mark": "Ysmfca_mark",
			"marks": "Ysmfca_marks",
			"mermaidPending": "Ysmfca_mermaidPending",
			"message": "Ysmfca_message",
			"notice": "Ysmfca_notice",
			"noticeError": "Ysmfca_noticeError",
			"progress": "Ysmfca_progress",
			"progressFill": "Ysmfca_progressFill",
			"progressLabel": "Ysmfca_progressLabel",
			"progressTrack": "Ysmfca_progressTrack",
			"radio": "Ysmfca_radio",
			"radioGroup": "Ysmfca_radioGroup",
			"radioGroupRow": "Ysmfca_radioGroupRow",
			"radius2xl": "Ysmfca_radius2xl",
			"radiusLg": "Ysmfca_radiusLg",
			"radiusMd": "Ysmfca_radiusMd",
			"radiusSm": "Ysmfca_radiusSm",
			"radiusXl": "Ysmfca_radiusXl",
			"regenerate": "Ysmfca_regenerate",
			"row": "Ysmfca_row",
			"rowWrap": "Ysmfca_rowWrap",
			"segment": "Ysmfca_segment",
			"segmented": "Ysmfca_segmented",
			"segmentedBlock": "Ysmfca_segmentedBlock",
			"select": "Ysmfca_select",
			"slider": "Ysmfca_slider",
			"sliderWrap": "Ysmfca_sliderWrap",
			"sortButton": "Ysmfca_sortButton",
			"sortButtonActive": "Ysmfca_sortButtonActive",
			"sortMark": "Ysmfca_sortMark",
			"stat": "Ysmfca_stat",
			"statDelta": "Ysmfca_statDelta",
			"statHint": "Ysmfca_statHint",
			"statLabel": "Ysmfca_statLabel",
			"statValue": "Ysmfca_statValue",
			"stopped": "Ysmfca_stopped",
			"table": "Ysmfca_table",
			"tableScroll": "Ysmfca_tableScroll",
			"tabularNums": "Ysmfca_tabularNums",
			"text": "Ysmfca_text",
			"text2xl": "Ysmfca_text2xl",
			"textLg": "Ysmfca_textLg",
			"textMd": "Ysmfca_textMd",
			"textSm": "Ysmfca_textSm",
			"textXl": "Ysmfca_textXl",
			"textXs": "Ysmfca_textXs",
			"title": "Ysmfca_title",
			"title2xl": "Ysmfca_title2xl",
			"titleLg": "Ysmfca_titleLg",
			"titleMd": "Ysmfca_titleMd",
			"titleSm": "Ysmfca_titleSm",
			"titleXl": "Ysmfca_titleXl",
			"titleXs": "Ysmfca_titleXs",
			"toneAccent": "Ysmfca_toneAccent",
			"toneDanger": "Ysmfca_toneDanger",
			"toneDefault": "Ysmfca_toneDefault",
			"toneSecondary": "Ysmfca_toneSecondary",
			"toneSuccess": "Ysmfca_toneSuccess",
			"toneWarning": "Ysmfca_toneWarning",
			"trendDown": "Ysmfca_trendDown",
			"trendUp": "Ysmfca_trendUp",
			"weightBold": "Ysmfca_weightBold",
			"weightMedium": "Ysmfca_weightMedium",
			"weightNormal": "Ysmfca_weightNormal",
			"weightSemibold": "Ysmfca_weightSemibold"
		};
		//#endregion
		//#region lib/types/client/render/context.js
		/**
		* What every rendered node needs from the message: the interpreter, the
		* component registry, localisation, and the send state. Supplied once by
		* `InlineUiMessage` through React context so deep nodes and components do
		* not thread it by hand.
		*/
		const Context = (0, react.createContext)(void 0);
		/** Provider of the per-message {@link RenderContext}. */
		const RenderContextProvider = Context.Provider;
		/**
		* Read the per-message rendering services.
		* @returns the context; throws outside `InlineUiMessage`.
		*/
		function useRenderContext() {
			const context = (0, react.useContext)(Context);
			if (context === void 0) throw new Error("inline-ui: rendered outside InlineUiMessage");
			return context;
		}
		//#endregion
		//#region lib/types/client/render/props.js
		/**
		* Evaluate one expression, swallowing failures.
		* @param interpreter - the message interpreter.
		* @param expression - the expression to evaluate.
		* @param scope - variables in view.
		* @returns the value, or undefined when evaluation failed.
		*/
		function evaluate(interpreter, expression, scope) {
			const result = interpreter.evaluate(expression.source, scope);
			return result.ok ? result.value : void 0;
		}
		/**
		* Format an interpolated value as the model would expect React to: strings
		* and numbers as-is, nullish as nothing, arrays concatenated, objects as JSON.
		* @param value - the evaluated value.
		* @returns display text.
		*/
		function formatValue(value) {
			if (value === null || value === void 0 || typeof value === "boolean") return "";
			if (typeof value === "string") return value;
			if (typeof value === "number" || typeof value === "bigint") return String(value);
			if (Array.isArray(value)) return value.map(formatValue).join("");
			if (typeof value === "function") return "";
			try {
				return JSON.stringify(value);
			} catch {
				return "";
			}
		}
		/**
		* Join a text node's literal and expression parts into one string.
		* @param interpreter - the message interpreter.
		* @param parts - literal text and expressions in order.
		* @param scope - variables in view.
		* @returns the interpolated text.
		*/
		function interpolate(interpreter, parts, scope) {
			let text = "";
			for (const part of parts) text += typeof part === "string" ? part : formatValue(evaluate(interpreter, part, scope));
			return text;
		}
		function coerce(interpreter, spec, raw) {
			switch (spec.type) {
				case "string": {
					let text;
					if (typeof raw === "string") text = raw;
					else if (typeof raw === "number" || typeof raw === "boolean" || typeof raw === "bigint") text = String(raw);
					else return void 0;
					return spec.values === void 0 || spec.values.includes(text) ? text : void 0;
				}
				case "number": {
					const number = typeof raw === "number" ? raw : typeof raw === "string" && raw.trim() !== "" ? Number(raw) : NaN;
					if (!Number.isFinite(number)) return void 0;
					return Math.min(spec.max ?? Number.POSITIVE_INFINITY, Math.max(spec.min ?? Number.NEGATIVE_INFINITY, number));
				}
				case "boolean": return raw === "false" ? false : Boolean(raw);
				case "function": {
					if (typeof raw !== "function") return void 0;
					const handler = (...args) => {
						interpreter.call(raw, args);
					};
					return handler;
				}
				case "json": return raw;
			}
		}
		/**
		* Evaluate and coerce a tag's props.
		* @param interpreter - the message interpreter.
		* @param tag - the tag name (a manifest key).
		* @param props - the parsed prop values.
		* @param scope - variables in view.
		* @returns the manifest-listed props that evaluated to a usable value.
		*/
		function resolveProps(interpreter, tag, props, scope) {
			const specs = COMPONENTS[tag]?.props;
			if (specs === void 0) return {};
			const resolved = {};
			for (const [name, spec] of Object.entries(specs)) {
				const prop = props[name];
				if (prop === void 0) continue;
				const value = coerce(interpreter, spec, prop.kind === "expression" ? evaluate(interpreter, prop.expression, scope) : prop.value);
				if (value !== void 0) resolved[name] = value;
			}
			return resolved;
		}
		/**
		* A string prop.
		* @param props - resolved props.
		* @param name - prop name.
		* @returns the string, or undefined when absent or of another type.
		*/
		function str(props, name) {
			const value = props[name];
			return typeof value === "string" ? value : void 0;
		}
		/**
		* A number prop.
		* @param props - resolved props.
		* @param name - prop name.
		* @returns the finite number, or undefined when absent or of another type.
		*/
		function num(props, name) {
			const value = props[name];
			return typeof value === "number" ? value : void 0;
		}
		/**
		* A boolean prop.
		* @param props - resolved props.
		* @param name - prop name.
		* @returns true only when the prop resolved to true.
		*/
		function bool(props, name) {
			return props[name] === true;
		}
		/**
		* A handler prop.
		* @param props - resolved props.
		* @param name - prop name.
		* @returns the bound handler, or undefined when absent.
		*/
		function handler(props, name) {
			const value = props[name];
			return typeof value === "function" ? value : void 0;
		}
		//#endregion
		//#region lib/types/client/components/classes.js
		/** Helpers the component renderers share: class joining, number formatting, and chart maths. */
		/**
		* Join CSS-module class names, skipping falsy entries (module lookups are
		* `string | undefined` under `noUncheckedIndexedAccess`).
		* @param names - class names or falsy placeholders.
		* @returns the space-joined class list.
		*/
		function classes(...names) {
			return names.filter((name) => typeof name === "string" && name !== "").join(" ");
		}
		/**
		* Compact numeric formatting: integers as-is, otherwise up to two decimals
		* (more for tiny magnitudes), huge or tiny values in exponent form.
		* @param value - the number.
		* @returns display text.
		*/
		function formatNumber(value) {
			if (!Number.isFinite(value)) return "—";
			if (Number.isInteger(value)) return String(value);
			const magnitude = Math.abs(value);
			if (magnitude >= 1e6 || magnitude < 1e-4) return value.toExponential(2);
			return Number(value.toFixed(magnitude < 1 ? 4 : 2)).toString();
		}
		/**
		* Round axis ticks covering [min, max] at a 1/2/2.5/5 step.
		* @param min - lowest data value.
		* @param max - highest data value.
		* @param count - target tick count.
		* @returns ascending tick values whose first and last bound the range.
		*/
		function niceTicks(min, max, count = 5) {
			let lo = min;
			let hi = max;
			if (lo === hi) {
				lo = Math.min(0, lo);
				hi = hi + 1;
			}
			const rough = (hi - lo) / count;
			const magnitude = 10 ** Math.floor(Math.log10(rough));
			const step = [
				1,
				2,
				2.5,
				5,
				10
			].map((m) => m * magnitude).find((s) => s >= rough) ?? 10 * magnitude;
			const first = Math.floor(lo / step) * step;
			const last = Math.ceil(hi / step) * step;
			const ticks = [];
			for (let tick = first; tick <= last + step / 2; tick += step) ticks.push(Number(tick.toPrecision(12)));
			return ticks;
		}
		/** Series colours, legible on both themes; index wraps. */
		const SERIES_PALETTE = [
			"#3b6cf0",
			"#1f9d6b",
			"#e38a1c",
			"#d6413f",
			"#7c5bd6",
			"#0f9fb8",
			"#d1468f",
			"#6f9a1f",
			"#e2672b",
			"#5e6b80",
			"#17a393",
			"#a24fd1"
		];
		/**
		* Colour of the n-th series.
		* @param index - series position.
		* @returns a palette entry.
		*/
		function seriesColor(index) {
			return SERIES_PALETTE[index % SERIES_PALETTE.length] ?? SERIES_PALETTE[0];
		}
		/**
		* CSS lengths the model may hand to size props: a number (pixels), a number
		* with a unit, or a percentage; nothing else (no `url()`, no expressions).
		*/
		const LENGTH = /^\d+(?:\.\d+)?(?:px|%|em|rem|vw|vh|ch)?$/;
		/**
		* Validate a model-written CSS length.
		* @param value - the prop text.
		* @returns a safe CSS length (bare numbers become pixels), or undefined.
		*/
		function cssLength(value) {
			if (value === void 0) return void 0;
			const text = value.trim();
			if (text === "auto") return text;
			if (!LENGTH.test(text)) return void 0;
			return /\d$/.test(text) ? `${text}px` : text;
		}
		//#endregion
		//#region lib/types/client/components/Chart.js
		/**
		* `chart`: bar, line, area, and pie drawn as inline SVG in a fixed viewBox
		* that scales with the column. Hovering a category shows every series'
		* value; clicking a legend entry hides that series.
		*/
		const DataSchema = array(record(string(), unknown()));
		const SeriesSchema = array(object({
			key: string(),
			label: string().optional()
		}));
		const WIDTH = 640;
		const DEFAULT_HEIGHT = 260;
		const PAD = {
			top: 16,
			right: 16,
			bottom: 32,
			left: 52
		};
		const INNER_WIDTH = WIDTH - PAD.left - PAD.right;
		const MAX_AXIS_LABELS = 12;
		const DOT_LIMIT = 60;
		function labelText(label) {
			return label.length > 14 ? `${label.slice(0, 13)}…` : label;
		}
		function cellNumber(value) {
			if (typeof value === "number") return Number.isFinite(value) ? value : 0;
			if (typeof value === "string") {
				const number = Number(value);
				return Number.isFinite(number) ? number : 0;
			}
			return 0;
		}
		/**
		* Render a `chart`.
		* @param props - the tag's props (`type`, `data`, `xKey`, `series`, `unit`, `stacked`, `height`, `xLabel`).
		* @returns the figure, or an empty note when the data is unusable.
		*/
		function Chart({ props }) {
			const { t } = useRenderContext();
			const [hidden, setHidden] = (0, react.useState)([]);
			const [hover, setHover] = (0, react.useState)(void 0);
			const kind = str(props, "type") ?? "line";
			const xKey = str(props, "xKey") ?? "";
			const data = DataSchema.safeParse(props["data"]);
			const seriesSpec = SeriesSchema.safeParse(props["series"]);
			if (!data.success || !seriesSpec.success || data.data.length === 0 || seriesSpec.data.length === 0) return (0, react_jsx_runtime.jsx)("p", {
				className: InlineUi_module_css_default.chartEmpty,
				children: t("chart.empty")
			});
			const labels = data.data.map((row) => {
				const label = row[xKey];
				return typeof label === "string" || typeof label === "number" ? String(label) : "";
			});
			const series = seriesSpec.data.map((entry) => ({
				name: entry.label ?? entry.key,
				values: data.data.map((row) => cellNumber(row[entry.key]))
			}));
			const unitText = str(props, "unit");
			const unit = unitText === void 0 || unitText === "" ? "" : ` ${unitText}`;
			const height = num(props, "height") ?? DEFAULT_HEIGHT;
			const xLabel = str(props, "xLabel");
			const visible = series.map((entry, index) => ({
				entry,
				index
			})).filter(({ index }) => !hidden.includes(index));
			const toggle = (index) => {
				setHidden(hidden.includes(index) ? hidden.filter((i) => i !== index) : [...hidden, index]);
			};
			return (0, react_jsx_runtime.jsxs)("figure", {
				className: InlineUi_module_css_default.chart,
				children: [kind === "pie" ? (0, react_jsx_runtime.jsx)(Pie, {
					labels,
					values: visible[0]?.entry.values ?? [],
					unit,
					height
				}) : (0, react_jsx_runtime.jsxs)("div", {
					className: InlineUi_module_css_default.chartStage,
					children: [(0, react_jsx_runtime.jsx)(Cartesian, {
						kind: kind === "bar" ? "bar" : kind === "area" ? "area" : "line",
						labels,
						series: visible,
						stacked: bool(props, "stacked"),
						unit,
						height,
						xLabel,
						hover,
						onHover: setHover
					}), hover !== void 0 && visible.length > 0 ? (0, react_jsx_runtime.jsxs)("div", {
						className: InlineUi_module_css_default.chartTooltip,
						style: { left: `${(PAD.left + INNER_WIDTH / labels.length * (hover + .5)) / WIDTH * 100}%` },
						children: [(0, react_jsx_runtime.jsx)("div", {
							className: InlineUi_module_css_default.chartTooltipHead,
							children: labels[hover] ?? ""
						}), visible.map(({ entry, index }) => (0, react_jsx_runtime.jsxs)("div", {
							className: InlineUi_module_css_default.legendItem,
							children: [
								(0, react_jsx_runtime.jsx)("i", {
									className: InlineUi_module_css_default.legendSwatch,
									style: { background: seriesColor(index) }
								}),
								entry.name,
								": ",
								formatNumber(entry.values[hover] ?? 0),
								unit
							]
						}, index))]
					}) : null]
				}), kind !== "pie" && series.length > 1 ? (0, react_jsx_runtime.jsx)("div", {
					className: InlineUi_module_css_default.legend,
					children: series.map((entry, index) => (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: InlineUi_module_css_default.legendButton,
						"aria-pressed": !hidden.includes(index),
						title: t("chart.legendToggle"),
						onClick: () => {
							toggle(index);
						},
						children: [(0, react_jsx_runtime.jsx)("i", {
							className: InlineUi_module_css_default.legendSwatch,
							style: { background: seriesColor(index) }
						}), entry.name]
					}, index))
				}) : null]
			});
		}
		function Cartesian({ kind, labels, series, stacked: wantStacked, unit, height, xLabel, hover, onHover }) {
			const count = labels.length;
			const stacked = wantStacked && kind !== "line";
			const bottom = PAD.bottom + (xLabel === void 0 ? 0 : 16);
			const innerHeight = height - PAD.top - bottom;
			let low = 0;
			let high = 0;
			for (let i = 0; i < count; i += 1) {
				let positive = 0;
				let negative = 0;
				for (const { entry } of series) {
					const value = entry.values[i] ?? 0;
					if (!stacked) {
						high = Math.max(high, value);
						low = Math.min(low, value);
					} else if (value >= 0) positive += value;
					else negative += value;
				}
				if (stacked) {
					high = Math.max(high, positive);
					low = Math.min(low, negative);
				}
			}
			const ticks = niceTicks(low, high);
			const yMin = ticks[0] ?? 0;
			const yMax = ticks[ticks.length - 1] ?? 1;
			const toY = (value) => PAD.top + innerHeight - (value - yMin) / (yMax - yMin) * innerHeight;
			const band = INNER_WIDTH / Math.max(1, count);
			const centerX = (i) => PAD.left + band * i + band / 2;
			const labelEvery = Math.max(1, Math.ceil(count / MAX_AXIS_LABELS));
			const marks = [];
			if (kind === "bar") {
				const groupWidth = band * .72;
				const barWidth = stacked ? groupWidth : groupWidth / Math.max(1, series.length);
				for (let i = 0; i < count; i += 1) {
					let positive = 0;
					let negative = 0;
					series.forEach(({ entry, index }, position) => {
						const value = entry.values[i] ?? 0;
						let from = 0;
						let to = value;
						if (stacked && value >= 0) {
							from = positive;
							to = positive + value;
							positive = to;
						} else if (stacked) {
							from = negative;
							to = negative + value;
							negative = to;
						}
						const x = PAD.left + band * i + (band - groupWidth) / 2 + (stacked ? 0 : position * barWidth);
						marks.push((0, react_jsx_runtime.jsx)("rect", {
							x,
							y: toY(Math.max(from, to)),
							width: Math.max(1, barWidth - 2),
							height: Math.max(1, Math.abs(toY(from) - toY(to))),
							rx: 2,
							fill: seriesColor(index),
							children: (0, react_jsx_runtime.jsx)("title", { children: `${labelText(labels[i] ?? "")} · ${entry.name}: ${formatNumber(value)}${unit}` })
						}, `${index}-${i}`));
					});
				}
			} else {
				const base = Array.from({ length: count }, () => 0);
				const baseline = toY(Math.max(yMin, Math.min(0, yMax)));
				for (const { entry, index } of series) {
					const points = Array.from({ length: count }, (_, i) => {
						const value = entry.values[i] ?? 0;
						const top = stacked ? (base[i] ?? 0) + value : value;
						const bottomY = stacked ? toY(base[i] ?? 0) : baseline;
						return {
							x: centerX(i),
							y: toY(top),
							bottom: bottomY,
							value,
							i
						};
					});
					if (stacked) for (const point of points) base[point.i] = (base[point.i] ?? 0) + point.value;
					const line = points.map((point, k) => `${k === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join("");
					const color = seriesColor(index);
					if (kind === "area") {
						const back = [...points].reverse().map((point) => `L${point.x.toFixed(1)},${point.bottom.toFixed(1)}`).join("");
						marks.push((0, react_jsx_runtime.jsx)("path", {
							d: `${line}${back}Z`,
							fill: color,
							opacity: .18
						}, `area-${index}`));
					}
					marks.push((0, react_jsx_runtime.jsx)("path", {
						d: line,
						fill: "none",
						stroke: color,
						strokeWidth: 2,
						strokeLinejoin: "round"
					}, `line-${index}`));
					if (count <= DOT_LIMIT) for (const point of points) marks.push((0, react_jsx_runtime.jsx)("circle", {
						cx: point.x,
						cy: point.y,
						r: 3,
						fill: color,
						children: (0, react_jsx_runtime.jsx)("title", { children: `${labelText(labels[point.i] ?? "")} · ${entry.name}: ${formatNumber(point.value)}${unit}` })
					}, `dot-${index}-${point.i}`));
				}
			}
			const onMove = (event) => {
				const rect = event.currentTarget.getBoundingClientRect();
				if (rect.width <= 0) return;
				const x = (event.clientX - rect.left) / rect.width * WIDTH;
				const i = Math.floor((x - PAD.left) / band);
				onHover(i >= 0 && i < count ? i : void 0);
			};
			return (0, react_jsx_runtime.jsxs)("svg", {
				className: InlineUi_module_css_default.chartSvg,
				viewBox: `0 0 ${WIDTH} ${height}`,
				role: "img",
				onPointerMove: onMove,
				onPointerLeave: () => {
					onHover(void 0);
				},
				children: [
					hover !== void 0 ? (0, react_jsx_runtime.jsx)("rect", {
						className: InlineUi_module_css_default.chartHoverBand,
						x: PAD.left + band * hover,
						y: PAD.top,
						width: band,
						height: innerHeight
					}) : null,
					ticks.map((tick) => (0, react_jsx_runtime.jsxs)("g", { children: [(0, react_jsx_runtime.jsx)("line", {
						className: tick === 0 ? InlineUi_module_css_default.chartAxis : InlineUi_module_css_default.chartGrid,
						x1: PAD.left,
						x2: WIDTH - PAD.right,
						y1: toY(tick),
						y2: toY(tick)
					}), (0, react_jsx_runtime.jsx)("text", {
						className: InlineUi_module_css_default.chartTick,
						x: PAD.left - 6,
						y: toY(tick),
						dy: "0.32em",
						textAnchor: "end",
						children: formatNumber(tick)
					})] }, tick)),
					labels.map((label, i) => i % labelEvery === 0 ? (0, react_jsx_runtime.jsx)("text", {
						className: InlineUi_module_css_default.chartTick,
						x: centerX(i),
						y: height - bottom + 16,
						textAnchor: "middle",
						children: labelText(label)
					}, i) : null),
					xLabel !== void 0 ? (0, react_jsx_runtime.jsx)("text", {
						className: InlineUi_module_css_default.chartAxisLabel,
						x: PAD.left + INNER_WIDTH / 2,
						y: height - 6,
						textAnchor: "middle",
						children: xLabel
					}) : null,
					marks
				]
			});
		}
		function Pie({ labels, values, unit, height }) {
			const slices = labels.map((label, index) => ({
				label,
				value: Math.max(0, values[index] ?? 0),
				index
			}));
			const total = slices.reduce((sum, slice) => sum + slice.value, 0);
			const radius = height / 2 - 12;
			const cx = WIDTH / 2;
			const cy = height / 2;
			const nonEmpty = slices.filter((slice) => slice.value > 0);
			let angle = -Math.PI / 2;
			return (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [(0, react_jsx_runtime.jsx)("svg", {
				className: InlineUi_module_css_default.chartSvg,
				viewBox: `0 0 ${WIDTH} ${height}`,
				role: "img",
				children: total > 0 && nonEmpty.length === 1 ? (0, react_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: radius,
					fill: seriesColor(nonEmpty[0]?.index ?? 0)
				}) : nonEmpty.map((slice) => {
					const start = angle;
					const end = angle + slice.value / total * Math.PI * 2;
					angle = end;
					const large = end - start > Math.PI ? 1 : 0;
					const x0 = (cx + radius * Math.cos(start)).toFixed(1);
					const y0 = (cy + radius * Math.sin(start)).toFixed(1);
					const x1 = (cx + radius * Math.cos(end)).toFixed(1);
					const y1 = (cy + radius * Math.sin(end)).toFixed(1);
					return (0, react_jsx_runtime.jsx)("path", {
						className: InlineUi_module_css_default.chartSlice,
						d: `M${cx},${cy}L${x0},${y0}A${radius},${radius} 0 ${large} 1 ${x1},${y1}Z`,
						fill: seriesColor(slice.index),
						children: (0, react_jsx_runtime.jsx)("title", { children: `${labelText(slice.label)}: ${formatNumber(slice.value)}${unit} (${(slice.value / total * 100).toFixed(1)}%)` })
					}, slice.index);
				})
			}), (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.legend,
				children: slices.map((slice) => (0, react_jsx_runtime.jsxs)("span", {
					className: InlineUi_module_css_default.legendItem,
					children: [
						(0, react_jsx_runtime.jsx)("i", {
							className: InlineUi_module_css_default.legendSwatch,
							style: { background: seriesColor(slice.index) }
						}),
						labelText(slice.label),
						" · ",
						total > 0 ? (slice.value / total * 100).toFixed(1) : "0.0",
						"%"
					]
				}, slice.index))
			})] });
		}
		//#endregion
		//#region lib/types/client/components/Icon.js
		/** Path data per icon name; several paths join with a space. */
		const GLYPHS = {
			"arrow-right": "M5 12h14 M12 5l7 7-7 7",
			"arrow-up-right": "M7 7h10v10 M7 17L17 7",
			check: "M20 6L9 17l-5-5",
			x: "M18 6L6 18 M6 6l12 12",
			refresh: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8 M21 3v5h-5 M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16 M8 16H3v5",
			send: "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
			info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 16v-4 M12 8h.01",
			warning: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01",
			star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
			plus: "M5 12h14 M12 5v14",
			minus: "M5 12h14",
			"chevron-down": "M6 9l6 6 6-6",
			"chevron-up": "M18 15l-6-6-6 6",
			"external-link": "M15 3h6v6 M10 14L21 3 M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
			search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3",
			clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
			calendar: "M8 2v4 M16 2v4 M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z M3 10h18",
			user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
			zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
			"trending-up": "M22 7l-8.5 8.5-5-5L2 17 M16 7h6v6",
			"trending-down": "M22 17l-8.5-8.5-5 5L2 7 M16 17h6v-6"
		};
		const SIZE_PX = {
			xs: 12,
			sm: 14,
			md: 16
		};
		/**
		* Render one icon; unknown names render nothing.
		* @param props - the tag's props (`name`, `size`).
		* @returns an inline SVG.
		*/
		function Icon({ props }) {
			const name = str(props, "name");
			const glyph = name === void 0 ? void 0 : GLYPHS[name];
			if (glyph === void 0) return null;
			const size = SIZE_PX[str(props, "size") ?? "sm"] ?? 14;
			return (0, react_jsx_runtime.jsx)("svg", {
				className: InlineUi_module_css_default.icon,
				width: size,
				height: size,
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				children: (0, react_jsx_runtime.jsx)("path", { d: glyph })
			});
		}
		//#endregion
		//#region lib/types/client/mermaid/LazyMermaid.js
		/** Load the mermaid renderer only when a reply contains a diagram. */
		const LoadedMermaid = (0, react.lazy)(async () => ({ default: (await require.async("./client.MermaidDiagram.js")).MermaidDiagram }));
		/**
		* Show a placeholder while the fence streams, then the diagram from its own chunk.
		* @param props - source, completeness, and copy.
		* @returns the placeholder or the diagram.
		*/
		function LazyMermaid({ code, closed, renderingLabel, errorLabel }) {
			const placeholder = (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.mermaidPending,
				children: renderingLabel
			});
			if (!closed || code.trim() === "") return placeholder;
			return (0, react_jsx_runtime.jsx)(react.Suspense, {
				fallback: placeholder,
				children: (0, react_jsx_runtime.jsx)(LoadedMermaid, {
					code,
					errorLabel
				})
			});
		}
		//#endregion
		//#region lib/types/client/components/InlineMarkdown.js
		/**
		* The markdown subset a phrase inside `title`, `text`, `button`, `badge`,
		* and the like accepts: `**bold**`, `*italic*`, `` `code` ``,
		* `[label](https://…)`, and line breaks. Emitted as React nodes from a
		* character scan, so model-written text can never inject markup and no block
		* wrapper breaks the surrounding inline flow.
		*/
		const LINK = /^\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/;
		function scan(text) {
			const spans = [];
			let plain = "";
			const flush = () => {
				if (plain !== "") spans.push({
					kind: "text",
					text: plain
				});
				plain = "";
			};
			let index = 0;
			while (index < text.length) {
				const ch = text.charAt(index);
				if (ch === "\n") {
					flush();
					spans.push({ kind: "break" });
					index += 1;
					continue;
				}
				if (ch === "`") {
					const close = text.indexOf("`", index + 1);
					if (close > index + 1) {
						flush();
						spans.push({
							kind: "code",
							text: text.slice(index + 1, close)
						});
						index = close + 1;
						continue;
					}
				}
				if (ch === "*" && text.charAt(index + 1) === "*") {
					const close = text.indexOf("**", index + 2);
					if (close > index + 2) {
						flush();
						spans.push({
							kind: "bold",
							text: text.slice(index + 2, close)
						});
						index = close + 2;
						continue;
					}
				}
				if (ch === "*" && text.charAt(index + 1) !== " ") {
					const close = text.indexOf("*", index + 1);
					if (close > index + 1 && !text.slice(index + 1, close).includes("\n")) {
						flush();
						spans.push({
							kind: "italic",
							text: text.slice(index + 1, close)
						});
						index = close + 1;
						continue;
					}
				}
				if (ch === "[") {
					const match = LINK.exec(text.slice(index));
					if (match !== null && match[1] !== void 0 && match[2] !== void 0) {
						flush();
						spans.push({
							kind: "link",
							text: match[1],
							url: match[2]
						});
						index += match[0].length;
						continue;
					}
				}
				plain += ch;
				index += 1;
			}
			flush();
			return spans;
		}
		/**
		* Render inline markdown.
		* @param props - the source text.
		* @returns a fragment of text, `strong`, `em`, `code`, `a`, and `br` nodes.
		*/
		function InlineMarkdown({ text }) {
			return (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: scan(text).map((span, index) => {
				switch (span.kind) {
					case "text": return (0, react_jsx_runtime.jsx)(react.Fragment, { children: span.text }, index);
					case "bold": return (0, react_jsx_runtime.jsx)("strong", { children: span.text }, index);
					case "italic": return (0, react_jsx_runtime.jsx)("em", { children: span.text }, index);
					case "code": return (0, react_jsx_runtime.jsx)("code", {
						className: InlineUi_module_css_default.inlineCode,
						children: span.text
					}, index);
					case "link": return (0, react_jsx_runtime.jsx)("a", {
						className: InlineUi_module_css_default.link,
						href: span.url,
						target: "_blank",
						rel: "noopener noreferrer",
						children: span.text
					}, index);
					case "break": return (0, react_jsx_runtime.jsx)("br", {}, index);
				}
			}) });
		}
		//#endregion
		//#region lib/types/client/render/nodes.js
		/**
		* Turn parsed nodes into React. Text becomes markdown (block markdown at the
		* top level and inside layout tags, inline markdown inside text-bearing tags),
		* elements go to the component registry, and `{#each}` / `{#if}` extend the
		* scope for their children. Declarations were already run by the message.
		*/
		/**
		* Flatten children into the elements they produce, evaluating blocks and
		* skipping text; for components that need their children's structure
		* (table rows, radio options).
		* @param context - rendering services.
		* @param nodes - the children.
		* @param scope - the parent's scope.
		* @returns the elements in order, each with its scope.
		*/
		function expandElements(context, nodes, scope) {
			const out = [];
			for (const node of nodes) switch (node.kind) {
				case "element":
					out.push({
						node,
						scope
					});
					break;
				case "each": {
					const items = evaluate(context.interpreter, node.items, scope);
					if (!Array.isArray(items)) break;
					items.forEach((item, index) => {
						out.push(...expandElements(context, node.children, bindEach(node, scope, item, index)));
					});
					break;
				}
				case "if":
					out.push(...expandElements(context, evaluate(context.interpreter, node.condition, scope) ? node.consequent : node.alternate, scope));
					break;
				case "text":
				case "declaration": break;
			}
			return out;
		}
		function bindEach(node, scope, item, index) {
			return node.indexName === void 0 ? {
				...scope,
				[node.itemName]: item
			} : {
				...scope,
				[node.itemName]: item,
				[node.indexName]: index
			};
		}
		/**
		* Whether any node (at any depth) is still waiting for its closing tag.
		* @param nodes - the nodes to scan.
		* @returns true when the message stopped mid-tag.
		*/
		function hasOpenNode(nodes) {
			return nodes.some((node) => {
				switch (node.kind) {
					case "element":
					case "each": return node.open || hasOpenNode(node.children);
					case "if": return node.open || hasOpenNode(node.consequent) || hasOpenNode(node.alternate);
					case "text":
					case "declaration": return false;
				}
			});
		}
		function TextView({ node, scope, mode, streaming }) {
			const { interpreter, labels, t, fileMentions } = useRenderContext();
			const text = interpolate(interpreter, node.parts, scope);
			if (mode === "inline") return (0, react_jsx_runtime.jsx)(InlineMarkdown, { text });
			if (text.trim() === "") return null;
			if (mode === "top") {
				if (!hasMermaidFence(text)) return (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
					text,
					labels,
					variant: "body",
					streaming,
					fileMentions
				});
				const segments = splitMermaid(text);
				return segments.map((segment, index) => segment.kind === "markdown" ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
					text: segment.text,
					labels,
					variant: "body",
					streaming: streaming && index === segments.length - 1,
					fileMentions
				}, index) : (0, react_jsx_runtime.jsx)("div", {
					className: InlineUi_module_css_default.block,
					children: (0, react_jsx_runtime.jsx)(LazyMermaid, {
						code: segment.code,
						closed: segment.closed,
						renderingLabel: t("mermaid.rendering"),
						errorLabel: t("mermaid.error")
					})
				}, index));
			}
			return (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
				text: text.trim(),
				labels,
				variant: "compact"
			});
		}
		function ElementView({ node, scope }) {
			const context = useRenderContext();
			const Component = context.components[node.tag];
			if (Component === void 0) return null;
			return (0, react_jsx_runtime.jsx)(Component, {
				node,
				props: resolveProps(context.interpreter, node.tag, node.props, scope),
				scope
			});
		}
		function NodeView({ node, scope, mode, streaming }) {
			const context = useRenderContext();
			switch (node.kind) {
				case "text": return (0, react_jsx_runtime.jsx)(TextView, {
					node,
					scope,
					mode,
					streaming
				});
				case "element": return mode === "top" ? (0, react_jsx_runtime.jsx)("div", {
					className: InlineUi_module_css_default.block,
					children: (0, react_jsx_runtime.jsx)(ElementView, {
						node,
						scope
					})
				}) : (0, react_jsx_runtime.jsx)(ElementView, {
					node,
					scope
				});
				case "each": {
					const items = evaluate(context.interpreter, node.items, scope);
					if (!Array.isArray(items)) return null;
					return items.map((item, index) => (0, react_jsx_runtime.jsx)(react.Fragment, { children: (0, react_jsx_runtime.jsx)(Children, {
						nodes: node.children,
						scope: bindEach(node, scope, item, index),
						mode
					}) }, index));
				}
				case "if": return (0, react_jsx_runtime.jsx)(Children, {
					nodes: evaluate(context.interpreter, node.condition, scope) ? node.consequent : node.alternate,
					scope,
					mode
				});
				case "declaration": return null;
			}
		}
		/**
		* Render a node list in a scope.
		* @param props - the nodes, their scope, and how text renders.
		* @returns the rendered children.
		*/
		function Children({ nodes, scope, mode, streaming = false }) {
			const last = nodes.length - 1;
			return nodes.map((node, index) => (0, react_jsx_runtime.jsx)(NodeView, {
				node,
				scope,
				mode,
				streaming: streaming && index === last
			}, index));
		}
		//#endregion
		//#region lib/types/client/components/inputs.js
		/**
		* Controls. Each binds `value` / `checked` to the model's state through the
		* `onChange` handler the interpreter bound; `button` runs `onClick`, which
		* reaches the model only through `GenUI.issueNewTurn`.
		*/
		const OptionsSchema = array(object({
			label: string(),
			value: union([string(), number()]).transform(String)
		}));
		const MarksSchema = array(object({
			value: number(),
			label: string()
		}));
		/**
		* Render a `slider`.
		* @param props - the tag's props.
		* @returns a range input with optional marks and the current value.
		*/
		function Slider({ props }) {
			const min = num(props, "min") ?? 0;
			const max = num(props, "max") ?? 100;
			const step = num(props, "step");
			const value = num(props, "value") ?? min;
			const onChange = handler(props, "onChange");
			const marks = MarksSchema.safeParse(props["marks"]);
			const span = max - min;
			return (0, react_jsx_runtime.jsxs)("div", {
				className: InlineUi_module_css_default.sliderWrap,
				children: [(0, react_jsx_runtime.jsx)("input", {
					type: "range",
					className: InlineUi_module_css_default.slider,
					min,
					max,
					step: step ?? "any",
					value,
					"aria-valuetext": formatNumber(value),
					disabled: onChange === void 0,
					onChange: (event) => {
						onChange?.(Number(event.target.value));
					}
				}), marks.success && marks.data.length > 0 && span > 0 ? (0, react_jsx_runtime.jsx)("div", {
					className: InlineUi_module_css_default.marks,
					"aria-hidden": "true",
					children: marks.data.map((mark, index) => {
						const ratio = Math.min(1, Math.max(0, (mark.value - min) / span));
						const transform = ratio === 0 ? "none" : ratio === 1 ? "translateX(-100%)" : "translateX(-50%)";
						return (0, react_jsx_runtime.jsx)("span", {
							className: InlineUi_module_css_default.mark,
							style: {
								left: `${(ratio * 100).toFixed(2)}%`,
								transform
							},
							children: mark.label
						}, index);
					})
				}) : null]
			});
		}
		const RadioGroupContext = (0, react.createContext)(void 0);
		/**
		* Render a `radio-group`; its `radio` children read the selection through context.
		* @param props - the node, its props, and scope.
		* @returns a fieldset of radios.
		*/
		function RadioGroup({ node, props, scope }) {
			const state = {
				name: (0, react.useId)(),
				value: str(props, "value"),
				onChange: handler(props, "onChange")
			};
			return (0, react_jsx_runtime.jsx)(RadioGroupContext.Provider, {
				value: state,
				children: (0, react_jsx_runtime.jsx)("div", {
					className: classes(InlineUi_module_css_default.radioGroup, str(props, "direction") === "row" && InlineUi_module_css_default.radioGroupRow),
					role: "radiogroup",
					children: (0, react_jsx_runtime.jsx)(Children, {
						nodes: node.children,
						scope,
						mode: "block"
					})
				})
			});
		}
		/**
		* Render a `radio`.
		* @param props - the node, its props, and scope.
		* @returns one option; inert outside a radio-group.
		*/
		function Radio({ node, props, scope }) {
			const group = (0, react.useContext)(RadioGroupContext);
			const value = str(props, "value") ?? "";
			return (0, react_jsx_runtime.jsxs)("label", {
				className: InlineUi_module_css_default.radio,
				children: [(0, react_jsx_runtime.jsx)("input", {
					type: "radio",
					name: group?.name,
					value,
					checked: group !== void 0 && group.value === value,
					disabled: group?.onChange === void 0,
					onChange: () => {
						group?.onChange?.(value);
					}
				}), (0, react_jsx_runtime.jsx)("span", { children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				}) })]
			});
		}
		/**
		* Render a `segmented-control`.
		* @param props - the tag's props.
		* @returns a row of toggle buttons.
		*/
		function SegmentedControl({ props }) {
			const options = OptionsSchema.safeParse(props["options"]);
			if (!options.success) return null;
			const value = str(props, "value");
			const onChange = handler(props, "onChange");
			return (0, react_jsx_runtime.jsx)("div", {
				className: classes(InlineUi_module_css_default.segmented, bool(props, "block") && InlineUi_module_css_default.segmentedBlock),
				role: "group",
				children: options.data.map((option) => (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: InlineUi_module_css_default.segment,
					"aria-pressed": option.value === value,
					disabled: onChange === void 0,
					onClick: () => {
						onChange?.(option.value);
					},
					children: option.label
				}, option.value))
			});
		}
		/**
		* Render a `select`.
		* @param props - the tag's props.
		* @returns a dropdown.
		*/
		function Select({ props }) {
			const options = OptionsSchema.safeParse(props["options"]);
			if (!options.success) return null;
			const onChange = handler(props, "onChange");
			return (0, react_jsx_runtime.jsx)("select", {
				className: InlineUi_module_css_default.select,
				value: str(props, "value") ?? "",
				disabled: onChange === void 0,
				onChange: (event) => {
					onChange?.(event.target.value);
				},
				children: options.data.map((option) => (0, react_jsx_runtime.jsx)("option", {
					value: option.value,
					children: option.label
				}, option.value))
			});
		}
		/**
		* Render an `input`.
		* @param props - the tag's props.
		* @returns a text or number field; `onChange` receives the string.
		*/
		function Input({ props }) {
			const onChange = handler(props, "onChange");
			const placeholder = str(props, "placeholder");
			return (0, react_jsx_runtime.jsx)("input", {
				type: str(props, "type") === "number" ? "number" : "text",
				className: InlineUi_module_css_default.input,
				value: str(props, "value") ?? "",
				...placeholder !== void 0 ? { placeholder } : {},
				disabled: onChange === void 0,
				onChange: (event) => {
					onChange?.(event.target.value);
				}
			});
		}
		/**
		* Render a `checkbox`.
		* @param props - the node, its props, and scope.
		* @returns a labelled checkbox.
		*/
		function Checkbox({ node, props, scope }) {
			const onChange = handler(props, "onChange");
			return (0, react_jsx_runtime.jsxs)("label", {
				className: InlineUi_module_css_default.checkboxLabel,
				children: [(0, react_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: InlineUi_module_css_default.checkbox,
					checked: bool(props, "checked"),
					disabled: onChange === void 0,
					onChange: (event) => {
						onChange?.(event.target.checked);
					}
				}), (0, react_jsx_runtime.jsx)("span", { children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				}) })]
			});
		}
		const BUTTON_SIZE_CLASS = {
			sm: InlineUi_module_css_default.buttonSm,
			lg: InlineUi_module_css_default.buttonLg
		};
		/**
		* Render a `button`. Disabled while a follow-up is being sent so one click yields one message.
		* @param props - the node, its props, and scope.
		* @returns a button whose label is the children.
		*/
		function Button({ node, props, scope }) {
			const { busy } = useRenderContext();
			const onClick = handler(props, "onClick");
			return (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: classes(InlineUi_module_css_default.button, str(props, "color") === "primary" && InlineUi_module_css_default.buttonPrimary, str(props, "variant") === "outline" && InlineUi_module_css_default.buttonOutline, BUTTON_SIZE_CLASS[str(props, "size") ?? ""], bool(props, "block") && InlineUi_module_css_default.buttonBlock),
				disabled: busy || bool(props, "disabled") || onClick === void 0,
				"aria-busy": busy || void 0,
				onClick: () => {
					onClick?.();
				},
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				})
			});
		}
		/**
		* Render an `image` from an https URL; the reader can open it in a new window.
		* @param props - the tag's props.
		* @returns the image, or a placeholder when the URL is not https.
		*/
		function Image({ props }) {
			const { t } = useRenderContext();
			const [failed, setFailed] = (0, react.useState)(false);
			const src = str(props, "src");
			const alt = str(props, "alt") ?? "";
			const width = cssLength(str(props, "width"));
			if (src === void 0 || !/^https:\/\//i.test(src) || failed) return (0, react_jsx_runtime.jsx)("span", {
				className: InlineUi_module_css_default.imageMissing,
				children: alt === "" ? t("image.unavailable") : alt
			});
			return (0, react_jsx_runtime.jsx)("a", {
				className: InlineUi_module_css_default.imageLink,
				href: src,
				target: "_blank",
				rel: "noopener noreferrer",
				title: t("image.open"),
				style: width !== void 0 ? { width } : void 0,
				children: (0, react_jsx_runtime.jsx)("img", {
					className: InlineUi_module_css_default.image,
					src,
					alt,
					loading: "lazy",
					referrerPolicy: "no-referrer",
					onError: () => {
						setFailed(true);
					}
				})
			});
		}
		//#endregion
		//#region lib/types/client/components/layout.js
		/** Pixels per spacing unit. */
		const UNIT = 4;
		const RADIUS_CLASS = {
			sm: InlineUi_module_css_default.radiusSm,
			md: InlineUi_module_css_default.radiusMd,
			lg: InlineUi_module_css_default.radiusLg,
			xl: InlineUi_module_css_default.radiusXl,
			"2xl": InlineUi_module_css_default.radius2xl
		};
		const BACKGROUND_CLASS = {
			"surface-secondary": InlineUi_module_css_default.bgSurfaceSecondary,
			"surface-tertiary": InlineUi_module_css_default.bgSurfaceTertiary,
			"accent-soft": InlineUi_module_css_default.bgAccentSoft,
			"success-soft": InlineUi_module_css_default.bgSuccessSoft,
			"warning-soft": InlineUi_module_css_default.bgWarningSoft,
			"danger-soft": InlineUi_module_css_default.bgDangerSoft
		};
		const ALIGN_CLASS$1 = {
			start: InlineUi_module_css_default.alignStart,
			center: InlineUi_module_css_default.alignCenter,
			end: InlineUi_module_css_default.alignEnd,
			stretch: InlineUi_module_css_default.alignStretch
		};
		const JUSTIFY_CLASS = {
			start: InlineUi_module_css_default.justifyStart,
			center: InlineUi_module_css_default.justifyCenter,
			end: InlineUi_module_css_default.justifyEnd,
			between: InlineUi_module_css_default.justifyBetween
		};
		/** `flex` shorthands accepted verbatim: `1`, `1 1 auto`, `0 0 120px`, `none`. */
		const FLEX = /^(?:auto|none|[\d.]+(?: [\d.]+)?(?: (?:auto|[\d.]+(?:px|%)?))?)$/;
		/**
		* Render a `box`.
		* @param props - the node, its props, and scope.
		* @returns a column container.
		*/
		function Box({ node, props, scope }) {
			const gap = num(props, "gap") ?? 1;
			const padding = num(props, "padding");
			const width = cssLength(str(props, "width"));
			const height = cssLength(str(props, "height"));
			const flex = str(props, "flex");
			const style = {
				gap: gap * UNIT,
				...padding !== void 0 ? { padding: padding * UNIT } : {},
				...width !== void 0 ? { width } : {},
				...height !== void 0 ? { height } : {},
				...flex !== void 0 && FLEX.test(flex.trim()) ? { flex: flex.trim() } : {}
			};
			return (0, react_jsx_runtime.jsx)("div", {
				className: classes(InlineUi_module_css_default.box, bool(props, "border") && InlineUi_module_css_default.boxBorder, bool(props, "clip") && InlineUi_module_css_default.clip, RADIUS_CLASS[str(props, "radius") ?? ""], BACKGROUND_CLASS[str(props, "background") ?? ""], ALIGN_CLASS$1[str(props, "align") ?? ""]),
				style,
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "block"
				})
			});
		}
		/**
		* Render a `row`.
		* @param props - the node, its props, and scope.
		* @returns a horizontal container.
		*/
		function Row({ node, props, scope }) {
			const gap = num(props, "gap") ?? 2;
			return (0, react_jsx_runtime.jsx)("div", {
				className: classes(InlineUi_module_css_default.row, bool(props, "wrap") && InlineUi_module_css_default.rowWrap, ALIGN_CLASS$1[str(props, "align") ?? ""], JUSTIFY_CLASS[str(props, "justify") ?? ""]),
				style: { gap: gap * UNIT },
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "block"
				})
			});
		}
		/**
		* Render a `grid`.
		* @param props - the node, its props, and scope.
		* @returns an equal-column grid.
		*/
		function Grid({ node, props, scope }) {
			const columns = num(props, "columns") ?? 2;
			const gap = num(props, "gap") ?? 2;
			const style = {
				"--iu-columns": Math.round(columns),
				gap: gap * UNIT
			};
			return (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.grid,
				style,
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "block"
				})
			});
		}
		/**
		* Render a `grid-item`.
		* @param props - the node, its props, and scope.
		* @returns one cell, optionally spanning columns.
		*/
		function GridItem({ node, props, scope }) {
			const span = num(props, "span");
			const style = span === void 0 ? void 0 : {
				"--iu-span": Math.round(span),
				gridColumn: `span ${Math.round(span)}`
			};
			return (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.gridItem,
				style,
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "block"
				})
			});
		}
		/**
		* Render a `divider`.
		* @returns a horizontal rule.
		*/
		function Divider() {
			return (0, react_jsx_runtime.jsx)("hr", { className: InlineUi_module_css_default.divider });
		}
		//#endregion
		//#region lib/types/client/components/Table.js
		/**
		* `table` / `table-row` / `table-cell`. The table reads its rows from the
		* children (through `{#each}` / `{#if}`), takes the first row as the header,
		* and sorts the body rows when a header cell is clicked; the sort key is the
		* cell's interpolated text, numerically when every cell parses as a number.
		*/
		const ALIGN_CLASS = {
			center: InlineUi_module_css_default.cellCenter,
			end: InlineUi_module_css_default.cellEnd
		};
		function plainText(interpreter, node, scope) {
			let text = "";
			for (const child of node.children) if (child.kind === "text") text += interpolate(interpreter, child.parts, scope);
			else if (child.kind === "element") text += plainText(interpreter, child, scope);
			return text.trim();
		}
		/**
		* Render a `table`.
		* @param props - the node and scope.
		* @returns a table whose first row is the header.
		*/
		function Table({ node, scope }) {
			const context = useRenderContext();
			const [sort, setSort] = (0, react.useState)(void 0);
			const [header, ...body] = expandElements(context, node.children, scope).filter((row) => row.node.tag === "table-row").map((row) => expandElements(context, row.node.children, row.scope).filter((cell) => cell.node.tag === "table-cell").map((cell) => {
				const props = resolveProps(context.interpreter, "table-cell", cell.node.props, cell.scope);
				return {
					node: cell.node,
					scope: cell.scope,
					align: str(props, "align"),
					width: cssLength(str(props, "width")),
					text: plainText(context.interpreter, cell.node, cell.scope)
				};
			}));
			if (header === void 0) return null;
			let ordered = body;
			if (sort !== void 0) {
				const column = sort.column;
				const numeric = body.every((row) => {
					const cell = row[column];
					return cell === void 0 || cell.text === "" || Number.isFinite(Number(cell.text));
				});
				ordered = [...body].sort((a, b) => {
					const left = a[column]?.text ?? "";
					const right = b[column]?.text ?? "";
					const order = numeric ? Number(left) - Number(right) : left.localeCompare(right);
					return sort.descending ? -order : order;
				});
			}
			const toggle = (column) => {
				setSort(sort !== void 0 && sort.column === column ? sort.descending ? void 0 : {
					column,
					descending: true
				} : {
					column,
					descending: false
				});
			};
			return (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.tableScroll,
				children: (0, react_jsx_runtime.jsxs)("table", {
					className: InlineUi_module_css_default.table,
					children: [(0, react_jsx_runtime.jsx)("thead", { children: (0, react_jsx_runtime.jsx)("tr", { children: header.map((cell, column) => {
						const active = sort !== void 0 && sort.column === column;
						return (0, react_jsx_runtime.jsx)("th", {
							className: ALIGN_CLASS[cell.align ?? ""],
							style: cell.width !== void 0 ? { width: cell.width } : void 0,
							"aria-sort": active ? sort.descending ? "descending" : "ascending" : "none",
							children: (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: classes(InlineUi_module_css_default.sortButton, active && InlineUi_module_css_default.sortButtonActive),
								title: active && !sort.descending ? context.t("table.sortDesc") : context.t("table.sortAsc"),
								onClick: () => {
									toggle(column);
								},
								children: [(0, react_jsx_runtime.jsx)(Children, {
									nodes: cell.node.children,
									scope: cell.scope,
									mode: "inline"
								}), active ? (0, react_jsx_runtime.jsx)("span", {
									className: InlineUi_module_css_default.sortMark,
									"aria-hidden": "true",
									children: sort.descending ? "▼" : "▲"
								}) : null]
							})
						}, column);
					}) }) }), (0, react_jsx_runtime.jsx)("tbody", { children: ordered.map((row, index) => (0, react_jsx_runtime.jsx)("tr", { children: row.map((cell, column) => (0, react_jsx_runtime.jsx)("td", {
						className: ALIGN_CLASS[cell.align ?? ""],
						children: (0, react_jsx_runtime.jsx)(Children, {
							nodes: cell.node.children,
							scope: cell.scope,
							mode: "inline"
						})
					}, column)) }, index)) })]
				})
			});
		}
		/**
		* Render a `table-row` outside a table (the table renders its own rows).
		* @param props - the node and scope.
		* @returns the children in a row.
		*/
		function TableRow({ node, scope }) {
			return (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.row,
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "block"
				})
			});
		}
		/**
		* Render a `table-cell` outside a table.
		* @param props - the node and scope.
		* @returns the children.
		*/
		function TableCell({ node, scope }) {
			return (0, react_jsx_runtime.jsx)("div", { children: (0, react_jsx_runtime.jsx)(Children, {
				nodes: node.children,
				scope,
				mode: "block"
			}) });
		}
		//#endregion
		//#region lib/types/client/components/text.js
		/** Tone classes shared by text, badge, and progress. */
		const TONE_CLASS = {
			default: InlineUi_module_css_default.toneDefault,
			secondary: InlineUi_module_css_default.toneSecondary,
			success: InlineUi_module_css_default.toneSuccess,
			warning: InlineUi_module_css_default.toneWarning,
			danger: InlineUi_module_css_default.toneDanger,
			accent: InlineUi_module_css_default.toneAccent
		};
		const TITLE_SIZE_CLASS = {
			xs: InlineUi_module_css_default.titleXs,
			sm: InlineUi_module_css_default.titleSm,
			md: InlineUi_module_css_default.titleMd,
			lg: InlineUi_module_css_default.titleLg,
			xl: InlineUi_module_css_default.titleXl,
			"2xl": InlineUi_module_css_default.title2xl
		};
		const TEXT_SIZE_CLASS = {
			xs: InlineUi_module_css_default.textXs,
			sm: InlineUi_module_css_default.textSm,
			md: InlineUi_module_css_default.textMd,
			lg: InlineUi_module_css_default.textLg,
			xl: InlineUi_module_css_default.textXl,
			"2xl": InlineUi_module_css_default.text2xl
		};
		const WEIGHT_CLASS = {
			normal: InlineUi_module_css_default.weightNormal,
			medium: InlineUi_module_css_default.weightMedium,
			semibold: InlineUi_module_css_default.weightSemibold,
			bold: InlineUi_module_css_default.weightBold
		};
		/**
		* Render a `title`.
		* @param props - the node, its props, and scope.
		* @returns heading-weight text.
		*/
		function Title({ node, props, scope }) {
			return (0, react_jsx_runtime.jsx)("div", {
				className: classes(InlineUi_module_css_default.title, TITLE_SIZE_CLASS[str(props, "size") ?? ""], WEIGHT_CLASS[str(props, "weight") ?? ""], TONE_CLASS[str(props, "color") ?? ""], bool(props, "tabularNums") && InlineUi_module_css_default.tabularNums),
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				})
			});
		}
		/**
		* Render a `text`.
		* @param props - the node, its props, and scope.
		* @returns body text, inline when asked.
		*/
		function Text({ node, props, scope }) {
			const inline = bool(props, "inline");
			const className = classes(InlineUi_module_css_default.text, inline && InlineUi_module_css_default.inline, TEXT_SIZE_CLASS[str(props, "size") ?? ""], WEIGHT_CLASS[str(props, "weight") ?? ""], TONE_CLASS[str(props, "color") ?? ""], bool(props, "tabularNums") && InlineUi_module_css_default.tabularNums);
			const children = (0, react_jsx_runtime.jsx)(Children, {
				nodes: node.children,
				scope,
				mode: "inline"
			});
			return inline ? (0, react_jsx_runtime.jsx)("span", {
				className,
				children
			}) : (0, react_jsx_runtime.jsx)("div", {
				className,
				children
			});
		}
		/**
		* Render a `caption`.
		* @param props - the node and scope.
		* @returns a small secondary note.
		*/
		function Caption({ node, scope }) {
			return (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.caption,
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				})
			});
		}
		/**
		* Render a `label`.
		* @param props - the node and scope.
		* @returns a form label line.
		*/
		function Label({ node, scope }) {
			return (0, react_jsx_runtime.jsx)("div", {
				className: InlineUi_module_css_default.label,
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				})
			});
		}
		/**
		* Render a `badge`.
		* @param props - the node, its props, and scope.
		* @returns a pill.
		*/
		function Badge({ node, props, scope }) {
			return (0, react_jsx_runtime.jsx)("span", {
				className: classes(InlineUi_module_css_default.badge, TONE_CLASS[str(props, "color") ?? "default"]),
				children: (0, react_jsx_runtime.jsx)(Children, {
					nodes: node.children,
					scope,
					mode: "inline"
				})
			});
		}
		const TREND_ICON = {
			up: "trending-up",
			down: "trending-down",
			flat: "minus"
		};
		const TREND_CLASS = {
			up: InlineUi_module_css_default.trendUp,
			down: InlineUi_module_css_default.trendDown
		};
		/**
		* Render a `stat`.
		* @param props - the node and its props.
		* @returns label, value, and delta line.
		*/
		function Stat({ node, props, scope }) {
			const delta = str(props, "delta");
			const trend = str(props, "trend");
			const hint = str(props, "hint");
			const trendIcon = trend === void 0 ? void 0 : TREND_ICON[trend];
			return (0, react_jsx_runtime.jsxs)("div", {
				className: InlineUi_module_css_default.stat,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						className: InlineUi_module_css_default.statLabel,
						children: str(props, "label") ?? ""
					}),
					(0, react_jsx_runtime.jsx)("div", {
						className: InlineUi_module_css_default.statValue,
						children: str(props, "value") ?? ""
					}),
					delta !== void 0 || trendIcon !== void 0 ? (0, react_jsx_runtime.jsxs)("div", {
						className: classes(InlineUi_module_css_default.statDelta, TREND_CLASS[trend ?? ""]),
						children: [trendIcon !== void 0 ? (0, react_jsx_runtime.jsx)(Icon, {
							node,
							props: {
								name: trendIcon,
								size: "xs"
							},
							scope
						}) : null, delta]
					}) : null,
					hint !== void 0 ? (0, react_jsx_runtime.jsx)("div", {
						className: InlineUi_module_css_default.statHint,
						children: hint
					}) : null
				]
			});
		}
		/**
		* Render a `progress`.
		* @param props - the node and its props.
		* @returns a labelled bar.
		*/
		function Progress({ props }) {
			const max = num(props, "max") ?? 100;
			const value = num(props, "value") ?? 0;
			const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
			const label = str(props, "label");
			return (0, react_jsx_runtime.jsxs)("div", {
				className: classes(InlineUi_module_css_default.progress, TONE_CLASS[str(props, "color") ?? "accent"]),
				role: "progressbar",
				"aria-valuemin": 0,
				"aria-valuemax": max,
				"aria-valuenow": value,
				children: [(0, react_jsx_runtime.jsxs)("div", {
					className: InlineUi_module_css_default.progressLabel,
					children: [(0, react_jsx_runtime.jsx)("span", { children: label ?? "" }), (0, react_jsx_runtime.jsxs)("span", { children: [
						formatNumber(value),
						" / ",
						formatNumber(max)
					] })]
				}), (0, react_jsx_runtime.jsx)("div", {
					className: InlineUi_module_css_default.progressTrack,
					children: (0, react_jsx_runtime.jsx)("div", {
						className: InlineUi_module_css_default.progressFill,
						style: { width: `${(ratio * 100).toFixed(1)}%` }
					})
				})]
			});
		}
		//#endregion
		//#region lib/types/client/components/index.js
		/** Renderers keyed by manifest tag name. */
		const COMPONENT_RENDERERS = {
			box: Box,
			row: Row,
			grid: Grid,
			"grid-item": GridItem,
			divider: Divider,
			title: Title,
			text: Text,
			caption: Caption,
			label: Label,
			badge: Badge,
			icon: Icon,
			stat: Stat,
			progress: Progress,
			table: Table,
			"table-row": TableRow,
			"table-cell": TableCell,
			chart: Chart,
			slider: Slider,
			"radio-group": RadioGroup,
			radio: Radio,
			"segmented-control": SegmentedControl,
			select: Select,
			input: Input,
			checkbox: Checkbox,
			button: Button,
			image: Image
		};
		//#endregion
		//#region lib/types/client/ui-state.js
		/**
		* Per-message persistence of `useState` values. A message is mounted many
		* times over its life (virtualised lists, tab switches, page reloads) and the
		* text only carries the model's initial values, so the reader's slider
		* positions, selections, and inputs would otherwise reset. The values are kept
		* in memory keyed by message id and mirrored to `localStorage`; storage being
		* unavailable or full degrades to memory only.
		*/
		const KEY_PREFIX = "dsh-inline-ui:state:v1:";
		const EntrySchema = object({
			t: number(),
			v: record(string(), unknown())
		});
		const memory = /* @__PURE__ */ new Map();
		function storage() {
			try {
				return typeof localStorage === "undefined" ? void 0 : localStorage;
			} catch {
				return;
			}
		}
		/**
		* Read the persisted state of one message.
		* @param messageId - the message identity.
		* @returns the last saved values, or undefined when none are stored.
		*/
		function loadUiState(messageId) {
			const cached = memory.get(messageId);
			if (cached !== void 0) return cached;
			const raw = storage()?.getItem(KEY_PREFIX + messageId);
			if (raw === null || raw === void 0) return void 0;
			try {
				const entry = EntrySchema.safeParse(JSON.parse(raw));
				if (!entry.success) return void 0;
				memory.set(messageId, entry.data.v);
				return entry.data.v;
			} catch {
				return;
			}
		}
		/**
		* Persist the state of one message. Memory is always updated; the storage
		* mirror is skipped when the entry would exceed {@link MAX_STATE_CHARS} or
		* storage refuses the write.
		* @param messageId - the message identity.
		* @param state - the full value map.
		*/
		function saveUiState(messageId, state) {
			memory.set(messageId, state);
			const store = storage();
			if (store === void 0) return;
			try {
				const serialised = JSON.stringify({
					t: Date.now(),
					v: state
				});
				if (serialised.length > 1e5) return;
				store.setItem(KEY_PREFIX + messageId, serialised);
				evict(store);
			} catch {}
		}
		/** Drop the oldest entries once more than {@link MAX_STATE_ENTRIES} messages are stored. */
		function evict(store) {
			const entries = [];
			for (let index = 0; index < store.length; index += 1) {
				const key = store.key(index);
				if (key === null || !key.startsWith(KEY_PREFIX)) continue;
				let t = 0;
				try {
					const entry = EntrySchema.safeParse(JSON.parse(store.getItem(key) ?? ""));
					if (entry.success) t = entry.data.t;
				} catch {}
				entries.push({
					key,
					t
				});
			}
			if (entries.length <= 200) return;
			entries.sort((a, b) => a.t - b.t);
			for (const { key } of entries.slice(0, entries.length - 200)) store.removeItem(key);
		}
		//#endregion
		//#region lib/types/client/render/state.js
		/**
		* Create the store for one message.
		* @param messageId - persistence key.
		* @param onChange - called after every write.
		* @returns the store.
		*/
		function createMessageStore(messageId, onChange) {
			const values = new Map(Object.entries(loadUiState(messageId) ?? {}));
			const initials = /* @__PURE__ */ new Map();
			return {
				get: (key, initial) => {
					initials.set(key, initial);
					const id = String(key);
					return values.has(id) ? values.get(id) : initial;
				},
				set: (key, value) => {
					const id = String(key);
					const previous = values.has(id) ? values.get(id) : initials.get(key);
					const next = typeof value === "function" ? value(previous) : value;
					values.set(id, next);
					saveUiState(messageId, Object.fromEntries(values));
					onChange();
				}
			};
		}
		//#endregion
		//#region lib/types/client/render/InlineUiMessage.js
		/**
		* One assistant message in the inline-UI dialect, rendered in place: parse
		* the text, run its declarations against a persisted per-message state,
		* then draw markdown and components in reading order. `GenUI.issueNewTurn`
		* goes through a send guard (empty, length, arm delay, rate limit) and the
		* message shows the outcome as a notice.
		*/
		/** Longest follow-up a control may send. */
		const MAX_PROMPT_CHARS = 4e3;
		/** Sends are refused this long after mount so a message cannot fire on load. */
		const ARM_DELAY_MS = 1e3;
		/** Minimum spacing between two sends from one message. */
		const MIN_INTERVAL_MS = 2e3;
		const EMPTY_SCOPE = {};
		/**
		* Render one inline-UI message.
		* @param props - the text, its lifecycle, identity, and session faces.
		* @returns the message body.
		*/
		function InlineUiMessage({ document, status, messageId, send, openUrl, t, labels, fileMentions }) {
			const interpreter = (0, react.useMemo)(() => createInterpreter(), []);
			const [, bump] = (0, react.useReducer)((n) => n + 1, 0);
			const store = (0, react.useMemo)(() => createMessageStore(messageId, bump), [messageId]);
			const [notice, setNotice] = (0, react.useState)(void 0);
			const [busy, setBusy] = (0, react.useState)(false);
			const sendRef = (0, react.useRef)(send);
			sendRef.current = send;
			const openUrlRef = (0, react.useRef)(openUrl);
			openUrlRef.current = openUrl;
			const statusRef = (0, react.useRef)(status);
			statusRef.current = status;
			const mountedAt = (0, react.useRef)(Date.now());
			const lastSend = (0, react.useRef)(Number.NEGATIVE_INFINITY);
			const inFlight = (0, react.useRef)(false);
			const host = (0, react.useMemo)(() => {
				const submit = async (raw) => {
					const prompt = raw.trim();
					if (prompt === "") return;
					const now = Date.now();
					if (statusRef.current === "running" || now - mountedAt.current < ARM_DELAY_MS) {
						setNotice({
							key: "action.notReady",
							error: true
						});
						return;
					}
					if (prompt.length > MAX_PROMPT_CHARS) {
						setNotice({
							key: "action.tooLong",
							error: true
						});
						return;
					}
					if (inFlight.current || now - lastSend.current < MIN_INTERVAL_MS) {
						setNotice({
							key: "action.rateLimited",
							error: true
						});
						return;
					}
					lastSend.current = now;
					inFlight.current = true;
					setBusy(true);
					try {
						await sendRef.current(prompt);
						setNotice({
							key: "action.sent",
							error: false
						});
					} catch (error) {
						console.error("[inline-ui] follow-up send failed:", error);
						setNotice({
							key: "action.failed",
							error: true
						});
					} finally {
						inFlight.current = false;
						setBusy(false);
					}
				};
				return {
					issueNewTurn: (prompt) => {
						submit(typeof prompt === "string" ? prompt : "");
					},
					openUrl: (url) => {
						if (typeof url === "string" && /^https?:\/\//i.test(url)) openUrlRef.current(url);
					}
				};
			}, []);
			const declarations = (0, react.useMemo)(() => document.nodes.flatMap((node) => node.kind === "declaration" ? [node.statement.source] : []), [document]);
			const scope = declarations.length === 0 ? EMPTY_SCOPE : interpreter.declare(declarations, store, host).scope;
			const context = (0, react.useMemo)(() => ({
				interpreter,
				components: COMPONENT_RENDERERS,
				t,
				labels,
				fileMentions,
				streaming: status === "running",
				busy
			}), [
				interpreter,
				t,
				labels,
				fileMentions,
				status,
				busy
			]);
			(0, react.useEffect)(() => {
				if (notice === void 0) return void 0;
				const timer = setTimeout(() => {
					setNotice(void 0);
				}, 4e3);
				return () => {
					clearTimeout(timer);
				};
			}, [notice]);
			const stopped = status === "interrupted" && hasOpenNode(document.nodes);
			return (0, react_jsx_runtime.jsx)(RenderContextProvider, {
				value: context,
				children: (0, react_jsx_runtime.jsxs)("div", {
					className: InlineUi_module_css_default.message,
					"data-inline-ui-message": messageId,
					"data-inline-ui-status": status,
					children: [
						(0, react_jsx_runtime.jsx)(Children, {
							nodes: document.nodes,
							scope,
							mode: "top",
							streaming: status === "running"
						}),
						stopped ? (0, react_jsx_runtime.jsx)(StoppedFooter, {
							t,
							send
						}) : null,
						notice !== void 0 ? (0, react_jsx_runtime.jsx)("p", {
							className: classes(InlineUi_module_css_default.notice, notice.error && InlineUi_module_css_default.noticeError),
							role: "status",
							children: t(notice.key)
						}) : null
					]
				})
			});
		}
		function StoppedFooter({ t, send }) {
			const [sending, setSending] = (0, react.useState)(false);
			const regenerate = async () => {
				setSending(true);
				try {
					await send(t("action.regeneratePrompt"));
				} catch (error) {
					console.error("[inline-ui] regenerate failed:", error);
				} finally {
					setSending(false);
				}
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				className: InlineUi_module_css_default.stopped,
				role: "status",
				children: [(0, react_jsx_runtime.jsx)("span", { children: t("stopped.notice") }), (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: InlineUi_module_css_default.regenerate,
					disabled: sending,
					onClick: () => {
						regenerate();
					},
					children: t("action.regenerate")
				})]
			});
		}
		//#endregion
		//#region lib/types/client/node.js
		/**
		* The `assistant-step` Chat node renderer inline-ui registers one priority
		* below DSH's own, so it shadows it (lowest priority renders). Messages
		* without markup are handed straight to DSH's renderer with the props this
		* entry received; a message with component tags or a mermaid fence renders
		* its reasoning and images through DSH's renderer and its text here. Both
		* run inside the Chat view's tree, so file links, local images, link
		* opening, and file mentions behave as in any other message.
		*/
		/**
		* Render one assistant step: DSH's renderer for plain messages, the inline-UI
		* renderer for the text of messages with markup.
		* @param props - the Chat node props this slot cell receives.
		* @returns the assistant step.
		*/
		const InlineAssistantNode = (0, react.memo)(function InlineAssistantNode(props) {
			const { node, groupPart, inline, renderFactorySlot, useTurnData, fileMentions, openFile } = props;
			const { Dsh } = inline;
			const data = node.data;
			const text = (0, react.useMemo)(() => data.blocks.map((block) => block.kind === "text" ? block.text : "").join(""), [data.blocks]);
			const document = (0, react.useMemo)(() => parseDocument(text), [text]);
			const claimed = groupPart !== "reasoning" && (document.hasMarkup || hasMermaidFence(text));
			const renderSlot = (0, react.useCallback)((_key, owner) => renderFactorySlot("conversation.chat.reasoning.content", owner), [renderFactorySlot]);
			const turn = node.location.kind === "turn" || node.location.kind === "step" ? node.location.turn : void 0;
			const tail = useTurnData("turn-tail");
			const mentions = (0, react.useMemo)(() => {
				if (!claimed || turn?.status !== "closed" || data.finalNode === void 0) return void 0;
				if (tail?.closing?.finalNode.seq !== data.finalNode.seq) return void 0;
				return fileMentions({
					turn,
					seq: data.finalNode.seq,
					openFile
				});
			}, [
				claimed,
				data.finalNode,
				fileMentions,
				openFile,
				tail,
				turn
			]);
			if (!claimed) return (0, react_jsx_runtime.jsx)(Dsh, {
				...props,
				renderSlot
			});
			const others = data.blocks.filter((block) => block.kind !== "text");
			const lead = others.some((block) => block.kind !== "tool-call") ? (0, react_jsx_runtime.jsx)(Dsh, {
				...props,
				node: {
					...node,
					data: {
						...data,
						blocks: others,
						status: "settled"
					}
				},
				renderSlot
			}) : null;
			const dshStopped = data.status === "interrupted" && !hasOpenNode(document.nodes);
			return (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				lead,
				(0, react_jsx_runtime.jsx)(InlineUiMessage, {
					document,
					status: data.status,
					messageId: `${inline.sessionId}:${node.key}`,
					send: inline.send,
					openUrl: inline.openUrl,
					t: inline.t,
					labels: inline.labels,
					fileMentions: mentions
				}),
				dshStopped ? (0, react_jsx_runtime.jsx)(Dsh, {
					...props,
					node: {
						...node,
						data: {
							...data,
							blocks: []
						}
					},
					renderSlot
				}) : null
			] });
		});
		//#endregion
		//#region lib/types/client/index.js
		/** Required services: slot registry, locale registry, and session scoping for prompts. */
		const inject = [
			"slots",
			"locale",
			"sessions"
		];
		/** The slot cell this plugin shadows. */
		const NODE_SLOT = "conversation.chat.node";
		const NODE_KEY = "assistant-step";
		/** Below DSH's default priority 0: the lowest live entry of a cell renders. */
		const SHADOW_PRIORITY = -1;
		/** DSH's entry face: the presentation hook source its renderer reads. */
		const presentationFace = object({ hooks: object({ presentation: custom((value) => typeof value === "object" && value !== null && "getSnapshot" in value && "subscribe" in value) }) });
		/** DSH's renderer: a function or memo/forwardRef component object. */
		const dshComponent = custom((value) => typeof value === "function" || typeof value === "object" && value !== null && "$$typeof" in value);
		/**
		* Client plugin body: register dictionaries and the shadowing renderer.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "inline-ui: dictionaries");
			const t = ctx.locale.bind(NS);
			const labels = markdownLabels(t);
			const send = async (sessionId, text) => {
				const conversation = ctx.sessions.scope(sessionId)?.get("conversation");
				if (conversation === void 0) throw new Error(`inline-ui: session "${sessionId}" has no conversation service`);
				await conversation.send(text);
			};
			const openUrl = (url) => {
				window.open(url, "_blank", "noopener,noreferrer");
			};
			const shadowed = () => {
				const entry = ctx.slots.entries(NODE_SLOT).find((candidate) => candidate.options.key === NODE_KEY && candidate.component !== InlineAssistantNode);
				if (entry === void 0) throw new Error("inline-ui: DSH registered no assistant-step renderer to delegate to");
				return entry;
			};
			ctx.slots.inject(NODE_SLOT, () => ctx.slots.register({
				name: NODE_SLOT,
				key: NODE_KEY,
				priority: SHADOW_PRIORITY,
				locale: "chat",
				inject: (sessionId) => {
					const dsh = shadowed();
					return {
						hooks: presentationFace.parse(dsh.inject?.() ?? {}).hooks,
						inline: {
							Dsh: dshComponent.parse(dsh.component),
							sessionId,
							send: (text) => send(sessionId, text),
							openUrl,
							t,
							labels
						}
					};
				}
			}, InlineAssistantNode));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map