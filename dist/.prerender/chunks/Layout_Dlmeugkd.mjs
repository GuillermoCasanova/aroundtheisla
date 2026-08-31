import { c as isRemotePath, d as removeBase, u as prependForwardSlash } from "./path_DSAdOJJi.mjs";
import { Q as UnknownContentCollectionError, W as RenderUndefinedEntryError, t as AstroError } from "./errors_BuDpXfej.mjs";
import { C as addAttribute, F as createComponent, M as unescapeHTML, O as createHeadAndContent, P as createAstro, S as renderHead, _ as renderTemplate, a as renderUniqueStylesheet, b as generateCspDigest, d as Fragment, i as renderScriptElement, l as renderComponent, m as renderSlot, o as renderScript, r as spreadAttributes, w as defineScriptVars, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { escape } from "html-escaper";
import * as z from "zod/v4";
import * as devalue from "devalue";
import { forEach } from "neotraverse";
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/assets/consts.js
var VALID_INPUT_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var VALID_SUPPORTED_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var DEFAULT_OUTPUT_FORMAT = "webp";
var DEFAULT_HASH_PROPS = [
	"src",
	"width",
	"height",
	"format",
	"quality",
	"fit",
	"position",
	"background"
];
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var DATA_STORE_VIRTUAL_ID = "astro:data-layer-content";
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
`${DATA_STORE_VIRTUAL_ID}`;
//#endregion
//#region node_modules/astro/dist/assets/utils/resolveImports.js
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
//#endregion
//#region node_modules/astro/dist/content/data-store-source.js
var InMemorySource = class {
	#store;
	constructor(store) {
		this.#store = store;
	}
	hasCollection(collection) {
		return this.#store.hasCollection(collection);
	}
	get(collection, key) {
		return this.#store.get(collection, key);
	}
	entries(collection) {
		return this.#store.entries(collection);
	}
	values(collection) {
		return this.#store.values(collection);
	}
	keys(collection) {
		return this.#store.keys(collection);
	}
	has(collection, key) {
		return this.#store.has(collection, key);
	}
	collections() {
		return this.#store.collections();
	}
};
//#endregion
//#region node_modules/astro/dist/content/data-store.js
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Rebuilds a collections map from a chunked-store manifest whose part file
	* names have already been swapped for their contents.
	*
	* Each collection maps to a list of parts. A part is either a raw string
	* (when the store is loaded from disk) or an ESM namespace from a virtual
	* chunk import (`{ default: string }`, when emitted at runtime). A collection's
	* parts are concatenated back into the exact
	* serialized string, then parsed with devalue. This is the inverse of
	* {@link import('./data-store-writer.js').ChunkedWriter} and stays free of
	* Node built-ins so it can run at runtime.
	*/
	static manifestToMap(manifest) {
		const collections = /* @__PURE__ */ new Map();
		for (const [collectionName, parts] of Object.entries(manifest)) {
			let stringified = "";
			for (const part of parts) stringified += typeof part === "string" ? part : part.default;
			const entries = devalue.parse(stringified);
			collections.set(collectionName, entries);
		}
		return collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_rBJgXpun.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			if (Array.isArray(data.default)) {
				const map2 = devalue.unflatten(data.default);
				return ImmutableDataStore.fromMap(map2);
			}
			const map = ImmutableDataStore.manifestToMap(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule().then((store) => new InMemorySource(store));
			return instance;
		},
		set: (store) => {
			instance = new InMemorySource(store);
		}
	};
}
var globalDataStore = dataStoreSingleton();
//#endregion
//#region node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} \u2192 ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} \u2192 ${entryId}** data does not match the collection schema.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` \u2192 ${String(entryId)}` : ""}** returned an invalid cache hint.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
//#endregion
//#region node_modules/astro/dist/content/runtime.js
var cacheHintSchema = z.object({
	tags: z.array(z.string()).optional(),
	lastModified: z.date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await z.safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_BNW1matP.mjs");
			const result = [];
			for (const rawEntry of await store.values(collection)) {
				const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			console.warn(`The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const entry = await store.get(collection, lookupId);
			if (!entry) {
				console.warn(`Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_BNW1matP.mjs");
			const data = updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.
The "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.
To render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) console.error(message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
var CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
	const { default: imageAssetMap } = await import("./content-assets_BNW1matP.mjs");
	const imageObjects = /* @__PURE__ */ new Map();
	const { getImage } = await import("./_virtual_astro_get-image_C2PnZNJo.mjs");
	for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) try {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'"));
		let image;
		if (URL.canParse(decodedImagePath.src)) image = await getImage(decodedImagePath);
		else {
			const id = imageSrcToImportId(decodedImagePath.src, fileName);
			const imported = imageAssetMap.get(id);
			if (!id || imageObjects.has(id) || !imported) continue;
			image = await getImage({
				...decodedImagePath,
				src: imported
			});
		}
		imageObjects.set(imagePath, image);
	} catch {
		throw new Error(`Failed to parse image reference: ${imagePath}`);
	}
	return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
		const image = imageObjects.get(imagePath);
		if (!image) return full;
		const { index, ...attributes } = image.attributes;
		return Object.entries({
			...attributes,
			src: image.src,
			srcset: image.srcSet.attribute
		}).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
	});
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
	const copy = structuredClone(data);
	forEach(copy, function(ctx, val) {
		if (typeof val === "string" && val.startsWith("__ASTRO_IMAGE_")) {
			const src = val.replace(IMAGE_IMPORT_PREFIX, "");
			const id = imageSrcToImportId(src, fileName);
			if (!id) {
				ctx.update(src);
				return;
			}
			const imported = imageAssetMap?.get(id);
			if (imported) if (imported.__svgData) {
				const { __svgData: svgData, ...meta } = imported;
				ctx.update(createSvgComponent({
					meta,
					...svgData
				}));
			} else ctx.update(imported);
			else ctx.update(src);
		}
	});
	return copy;
}
async function renderEntry(entry) {
	if (!entry) throw new AstroError(RenderUndefinedEntryError);
	if (entry.deferredRender) try {
		const { default: contentModules } = await import("./content-modules_C3pEMIuU.mjs");
		const renderEntryImport = contentModules.get(entry.filePath);
		return render({
			collection: "",
			id: entry.id,
			renderEntryImport
		});
	} catch (e) {
		console.error(e);
	}
	const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
	return {
		Content: createComponent(() => renderTemplate`${unescapeHTML(html)}`),
		headings: entry?.rendered?.metadata?.headings ?? [],
		remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
	};
}
async function render({ collection, id, renderEntryImport }) {
	const UnexpectedRenderError = new AstroError({
		...UnknownContentCollectionError,
		message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
	});
	if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
	const baseMod = await renderEntryImport();
	if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
	const { default: defaultMod } = baseMod;
	if (isPropagatedAssetsModule(defaultMod)) {
		const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
		if (typeof getMod !== "function") throw UnexpectedRenderError;
		const propagationMod = await getMod();
		if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
		return {
			Content: createComponent({
				factory(result, baseProps, slots) {
					let styles = "", links = "", scripts = "";
					if (Array.isArray(collectedStyles)) styles = collectedStyles.map((style) => {
						return renderUniqueStylesheet(result, {
							type: "inline",
							content: style
						});
					}).join("");
					if (Array.isArray(collectedLinks)) links = collectedLinks.map((link) => {
						return renderUniqueStylesheet(result, {
							type: "external",
							src: isRemotePath(link) ? link : prependForwardSlash(link)
						});
					}).join("");
					if (Array.isArray(collectedScripts)) scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
					let props = baseProps;
					if (id.endsWith("mdx")) props = {
						components: propagationMod.components ?? {},
						...baseProps
					};
					return createHeadAndContent(unescapeHTML(styles + links + scripts), renderTemplate`${renderComponent(result, "Content", propagationMod.Content, props, slots)}`);
				},
				propagation: "self"
			}),
			headings: propagationMod.getHeadings?.() ?? [],
			remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
		};
	} else if (baseMod.Content && typeof baseMod.Content === "function") return {
		Content: baseMod.Content,
		headings: baseMod.getHeadings?.() ?? [],
		remarkPluginFrontmatter: baseMod.frontmatter ?? {}
	};
	else throw UnexpectedRenderError;
}
function isPropagatedAssetsModule(module) {
	return typeof module === "object" && module != null && "__astroPropagation" in module;
}
//#endregion
//#region \0astro:content
var liveCollections = {};
var getCollection = createGetCollection({ liveCollections });
createGetEntry({ liveCollections });
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
//#endregion
//#region src/components/Button.astro
createAstro("https://example.com");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const { label = "Learn More", variant = "primary", href, type = "button", target, rel, disabled = false, withArrow = true, arrowDirection = "right", class: className, ...rest } = Astro.props;
	const Tag = href && !disabled ? "a" : "button";
	const base = "group inline-flex items-center justify-center whitespace-nowrap font-medium text-sm h-10 px-4 gap-2 cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";
	const variants = {
		primary: "bg-intent text-fg-on-intent hover:bg-intent-hover",
		secondary: "border border-stroke bg-transparent text-fg hover:bg-panel-muted",
		tertiary: "bg-transparent text-fg hover:bg-panel-muted"
	};
	const arrowName = arrowDirection === "left" ? "lucide:arrow-left" : "lucide:arrow-right";
	const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;
	return renderTemplate`${renderComponent($$result, "Tag", Tag, {
		...rest,
		"href": Tag === "a" ? href : void 0,
		"type": Tag === "button" ? type : void 0,
		"target": Tag === "a" ? target : void 0,
		"rel": Tag === "a" ? safeRel : void 0,
		"disabled": Tag === "button" && disabled ? true : void 0,
		"aria-disabled": disabled ? "true" : void 0,
		"class:list": [
			base,
			variants[variant],
			className
		]
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<span>${renderSlot($$result, $$slots["default"], renderTemplate`${label}`)}</span> ${withArrow && renderTemplate`<span class="relative inline-block h-4 w-4 overflow-hidden shrink-0 motion-reduce:overflow-visible " aria-hidden="true"> <span${addAttribute(["absolute inset-0 transition-transform duration-300 ease-in-out motion-reduce:transition-none", arrowDirection === "right" ? "group-hover:translate-x-full" : "group-hover:-translate-x-full"], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, {
		"name": arrowName,
		"class": "h-4 w-4"
	})} </span> <span${addAttribute(["absolute inset-0 transition-transform duration-300 ease-in-out motion-reduce:hidden", arrowDirection === "right" ? "-translate-x-full group-hover:translate-x-0" : "translate-x-full group-hover:translate-x-0"], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, {
		"name": arrowName,
		"class": "h-4 w-4"
	})} </span> </span>`}` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Button.astro", void 0);
//#endregion
//#region src/components/NavInline.astro
createAstro("https://example.com");
var $$NavInline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NavInline;
	const { brand = "aroundtheisla", homeHref = "/", links = [{
		label: "work",
		href: "/work"
	}, {
		label: "about",
		href: "/about"
	}], cta = {
		label: "Get in touch",
		href: "/contact"
	}, class: className = "" } = Astro.props;
	const linkClass = "font-heading text-lg font-bold tracking-tight text-fg outline-none transition hover:text-intent focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
	return renderTemplate` ${maybeRenderHead($$result)}<header data-nav-inline data-open="false"${addAttribute(["fixed inset-x-0 top-0 z-50", className], "class:list")} data-astro-cid-kz4mtfna> ${renderSlot($$result, $$slots["announcement"])} <div data-nav-bar class="container-full relative z-20 flex h-14 items-center justify-between pl-5 pr-4 transition-colors duration-300 md:px-[1.625rem]" data-astro-cid-kz4mtfna> <a${addAttribute(homeHref, "href")} class="font-heading text-xl tracking-tighter text-fg outline-none transition hover:text-intent focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas" data-astro-cid-kz4mtfna> ${brand} </a> <nav class="hidden items-center gap-8 md:flex" aria-label="Primary" data-astro-cid-kz4mtfna> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(linkClass, "class")} data-astro-cid-kz4mtfna> ${link.label} </a>`)} </nav> <button type="button" data-nav-toggle aria-label="Open menu" aria-expanded="false" aria-controls="nav-inline-panel" class="grid h-9 w-9 place-items-center text-fg transition hover:text-intent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:hidden" data-astro-cid-kz4mtfna>  <svg class="h-4 w-4" viewBox="0 0 18 12" fill="none" aria-hidden="true" data-astro-cid-kz4mtfna> <path data-nav-icon-open d="M0 1.5h18M0 10.5h18" stroke="currentColor" stroke-width="1.9" stroke-linecap="square" data-astro-cid-kz4mtfna></path> <path data-nav-icon-close class="hidden" d="M1 1l16 10M17 1L1 11" stroke="currentColor" stroke-width="1.9" stroke-linecap="square" data-astro-cid-kz4mtfna></path> </svg> </button> </div> <div id="nav-inline-panel" data-nav-panel data-theme="dark" role="dialog" aria-modal="true" aria-label="Primary" inert data-astro-cid-kz4mtfna> <nav data-nav-links class="flex flex-col items-center gap-2 text-center" aria-label="Primary" data-astro-cid-kz4mtfna> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="font-heading text-3xl tracking-tight text-fg outline-none transition hover:text-intent focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-4xl" data-astro-cid-kz4mtfna> ${link.label} </a>`)} ${cta && renderTemplate`<div class="mt-8" data-astro-cid-kz4mtfna> ${renderComponent($$result, "Button", $$Button, {
		"label": cta.label,
		"href": cta.href,
		"data-astro-cid-kz4mtfna": true
	})} </div>`} </nav> </div> </header> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/NavInline.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/NavInline.astro", void 0);
//#endregion
//#region src/components/AnnouncementBanner.astro
createAstro("https://example.com");
var $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AnnouncementBanner;
	const { href, dismissible = true, class: className } = Astro.props;
	const Tag = href ? "a" : "div";
	return renderTemplate`${maybeRenderHead($$result)}<div data-announcement="banner" role="status" aria-label="Site announcement"${addAttribute(["col-span-full md:col-span-1 md:col-start-3 overflow-hidden", className], "class:list")} data-astro-cid-mpls5b2o> ${renderComponent($$result, "Tag", Tag, {
		...href ? { href } : {},
		"class:list": ["flex items-center justify-center gap-2 px-4 py-2 text-center text-sm", href && "hover:opacity-80 transition-opacity"],
		"data-astro-cid-mpls5b2o": true
	}, { "default": ($$result) => renderTemplate` ${renderSlot($$result, $$slots["default"])} ${href && renderTemplate`<svg class="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-mpls5b2o> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-mpls5b2o></path> </svg>`}` })} ${dismissible && renderTemplate`<button data-announcement="close" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-50 hover:opacity-100 transition-opacity" aria-label="Dismiss announcement" data-astro-cid-mpls5b2o> <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-mpls5b2o> <path d="M18 6L6 18M6 6l12 12" data-astro-cid-mpls5b2o></path> </svg> </button>`} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/AnnouncementBanner.astro", void 0);
//#endregion
//#region src/data/site.ts
var site = {
	/** Brand / site name — used for og:site_name and schema.org Organization. */
	name: "Your Site Name",
	/** Production origin, no trailing slash. Must match astro.config `site`. */
	url: "https://example.com",
	/** Default meta description; pages can override per-page. */
	description: "One-line description of the site for search and social cards.",
	/** Default social-share image, placed in /public (root-relative or absolute). */
	ogImage: "/og.jpg",
	/** Organization logo, placed in /public. Used in JSON-LD. */
	logo: "/logo.png",
	/** Twitter/X handle for twitter:site (optional). */
	twitter: "",
	/** Public profiles for schema.org sameAs (optional). */
	sameAs: [],
	/** Site footer copyright line. */
	copyright: "Copyright 2004-{current_year} © Dudi Hasson"
};
//#endregion
//#region src/components/Seo.astro
createAstro("https://example.com");
var $$Seo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seo;
	const { title, description = site.description, ogType = "website", image = site.ogImage, noindex = false, jsonLd } = Astro.props;
	const canonical = new URL(Astro.url.pathname, Astro.site).href;
	const ogImage = new URL(image, Astro.site).href;
	const schemas = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
	return renderTemplate`<title>${title}</title> ${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`} <link rel="canonical"${addAttribute(canonical, "href")}> ${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}  <link rel="icon" href="/favicon.ico" sizes="32x32"> <link rel="icon" href="/favicon.svg" type="image/svg+xml"> <link rel="icon" type="image/png" media="(prefers-color-scheme: light)" href="/favicon-96.png"> <link rel="icon" type="image/png" media="(prefers-color-scheme: dark)" href="/favicon-96-dark.png">  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">  <meta property="og:type"${addAttribute(ogType, "content")}> <meta property="og:site_name"${addAttribute(site.name, "content")}> <meta property="og:title"${addAttribute(title, "content")}> ${description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`} <meta property="og:url"${addAttribute(canonical, "content")}> <meta property="og:image"${addAttribute(ogImage, "content")}> <meta property="og:image:alt"${addAttribute(title, "content")}>  <meta name="twitter:card" content="summary_large_image"> ${site.twitter && renderTemplate`<meta name="twitter:site"${addAttribute(site.twitter, "content")}>`} <meta name="twitter:title"${addAttribute(title, "content")}> ${description && renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>`} <meta name="twitter:image"${addAttribute(ogImage, "content")}>  ${schemas.map((schema) => renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(schema))}<\/script>`)}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Seo.astro", void 0);
//#endregion
//#region src/components/Loader.astro
createAstro("https://example.com");
var $$Loader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Loader;
	const { minDuration = 800, oncePerSession = true, class: className } = Astro.props;
	return renderTemplate` <script>(function(){${defineScriptVars({
		sessionKey: "ati-loader-seen",
		oncePerSession
	})}
  try {
    if (oncePerSession && sessionStorage.getItem(sessionKey) === "1") {
      document.documentElement.dataset.loaderSkip = "1";
    }
  } catch {
    /* private mode — show the loader */
  }
})();<\/script> ${maybeRenderHead($$result)}<div${addAttribute(["loader fixed inset-0 z-50 flex items-center justify-center bg-panel text-fg", className], "class:list")} data-loader${addAttribute(minDuration, "data-loader-min")}${addAttribute(oncePerSession ? "true" : "false", "data-loader-once")} role="status" aria-live="polite" aria-busy="true" inert data-astro-cid-tfd3xvz2> <span class="sr-only" data-astro-cid-tfd3xvz2>Loading</span> <svg class="loader__mark" xmlns="http://www.w3.org/2000/svg" width="54" height="84" viewBox="0 0 53.862 83.5651" fill="none" aria-hidden="true" focusable="false" data-astro-cid-tfd3xvz2> <path d="M48.7286 36.5653C48.2777 36.5901 47.703 35.5199 47.5345 35.1037C46.177 31.8039 41.3363 28.0186 37.868 26.8741L31.214 24.6742C29.5294 24.1143 28.152 22.9995 28.4245 20.9186C27.0818 19.3579 25.7341 17.4355 23.9802 16.2513C20.2741 13.7542 15.7654 13.4718 11.6035 14.6213C7.74882 15.6815 7.32271 19.1349 6.31197 17.8913C6.11378 17.6485 6.1336 16.9846 6.30206 16.722L8.01636 14.0267C9.04692 12.4065 10.5432 11.3462 12.3963 10.8359C14.6952 10.2067 17.1924 9.55761 19.5309 10.4494L22.469 12.2876C23.9951 13.2439 25.5607 14.0366 26.5219 15.5329L29.0587 19.4817L31.6153 12.7534C32.4378 10.5931 34.3849 9.04233 35.8862 7.3528L39.0819 3.76069L43.7888 0.119048C43.992 -0.0395 44.6509 -0.0295895 44.8739 0.0893217C45.0968 0.208233 45.1761 0.862234 45.0869 1.10006C43.9969 3.99852 41.8763 5.88624 39.6368 7.85818L35.8862 12.1885C34.6178 13.6501 33.389 15.0523 32.7053 16.8607L38.1455 11.7922C40.8111 10.717 43.9622 11.3066 46.603 12.2034L53.1085 15.1861C53.3463 15.2951 53.6783 15.5478 53.817 15.7063C53.9557 15.8649 53.7476 16.4644 53.5445 16.5139C52.5437 16.7517 51.4487 15.637 48.4164 15.6667L41.9457 15.7311C39.9093 15.7509 38.522 16.4842 36.9663 17.6188C35.1479 18.9466 33.0422 20.0515 32.1801 22.3455C34.4246 22.4099 36.5253 22.7518 38.7153 23.0788L42.5105 23.6436C44.1802 23.8914 45.7261 25.2688 46.9499 26.4777C48.0052 27.5132 48.6543 29.1631 49.0209 30.5752L50.2249 35.2276C50.0515 35.7082 49.447 36.5306 48.7286 36.5752V36.5653ZM32.8093 13.67L38.3585 7.12985C39.9539 5.83669 41.4304 4.57821 42.57 2.88373C40.0927 4.12238 38.641 6.16865 36.9712 8.15546C35.4601 9.95399 33.4138 11.2818 32.8093 13.67ZM21.4038 13.4074C20.5912 12.5849 19.739 12.0151 18.6639 11.4007C15.597 11.3016 12.3665 11.5791 9.90903 13.6947C13.8628 12.5155 17.2568 12.2282 21.4038 13.4074ZM41.3908 14.4677L48.1043 14.2942C45.0869 12.7583 41.9952 12.248 38.8936 12.7534L32.9184 18.6692L36.5006 16.3207C38.0464 15.305 39.4436 14.5172 41.3908 14.4677ZM46.1621 27.6173C45.1464 26.4232 43.546 25.1251 42.0993 24.9071L38.5022 24.3621C36.5204 24.0648 34.7367 23.5693 32.7003 23.708L39.4783 26.1011C41.8119 26.9236 43.655 28.4794 45.4189 30.1441L48.2381 33.1664C47.8566 31.249 47.4949 29.1928 46.1571 27.6173H46.1621Z" fill="currentColor" data-astro-cid-tfd3xvz2></path> <path d="M31.452 74.1312C28.9004 71.862 25.3281 68.5969 21.9342 69.1667C20.5865 69.4441 19.2488 69.4739 17.9209 69.1171C15.84 69.781 14.1058 70.8859 12.3073 72.1196C11.5492 72.6399 11.1578 73.2196 10.6029 73.9182C7.85804 77.3765 4.55826 78.6796 2.92323 81.7663L10.043 79.9281C12.2677 79.3534 14.7896 79.3385 16.9845 79.7349L22.0283 80.6416C23.4503 80.8943 24.7484 81.6573 26.2596 81.5136C29.7872 82.1775 33.196 82.2023 36.699 81.5136C36.8674 81.7019 37.13 81.9992 37.0805 82.1379C37.0161 82.3262 36.5256 82.6978 36.3274 82.7176L29.272 83.2874C26.3091 83.0991 23.6534 82.0784 20.7847 81.6127L15.731 80.7853C11.1231 80.5623 6.78289 81.9595 2.50208 83.3567C1.67961 83.6243 0.911652 83.6193 0 83.4261C0.143684 82.7374 0.312139 81.687 0.678782 81.3204L3.39393 78.6201L7.1 74.9933C9.68631 72.1147 13.7491 69.2459 17.3858 68.0568L18.2033 56.6314L19.6203 46.4249C20.2496 41.9063 22.2909 37.9624 23.8665 33.741L26.8095 25.8384C26.8888 25.6303 27.305 25.2934 27.4932 25.1844C27.6815 25.0754 28.2365 25.4272 28.3851 25.6551C26.9482 28.3306 26.1654 31.3083 25.115 34.177C23.5841 38.3637 21.5427 42.2333 20.9185 46.7024L19.4222 57.4242L18.6889 68.1906L20.7302 68.0667L24.134 67.8586L23.8417 61.482C23.6088 56.4382 23.7773 51.4836 24.4808 46.524L25.5609 38.9335C26.0663 35.3711 27.0275 32.0366 28.7716 28.8756L30.4165 25.8979L30.7881 25.3281C30.902 25.1547 31.7493 25.4519 31.7146 25.665C31.2489 28.3108 28.1027 31.0606 27.1117 37.7345L25.7443 46.96L25.1695 54.1938L25.1497 61.7545L25.4371 68.4334C27.8995 69.7414 30.2183 70.99 32.0763 72.9421C33.2704 74.1956 34.4396 75.2163 35.8715 76.2072C36.6246 76.7274 37.3034 77.4905 37.9128 78.1841L40.6181 81.2609C40.4794 81.5235 39.6767 81.9298 39.3893 81.801C39.102 81.6722 38.6015 81.365 38.3191 81.033L35.4603 77.7035L31.4421 74.1312H31.452Z" fill="currentColor" data-astro-cid-tfd3xvz2></path> <path d="M13.279 27.1218C17.6737 23.6634 21.8653 22.9202 27.3551 22.5189C27.6276 22.4991 28.2767 22.9896 28.2172 23.2423C27.8951 24.5949 21.2906 23.1927 15.6622 27.097L10.6927 30.5454C8.93377 31.7692 8.68107 33.9592 7.55637 33.6272C5.8718 33.1268 9.96433 27.7163 11.525 25.6403L13.8289 22.5635C14.8545 21.196 15.9 20.111 17.421 19.3826C20.7753 17.7674 25.1899 18.8327 27.5384 21.528C27.5136 21.7361 27.1123 22.3505 26.8844 22.2761C26.1115 22.0235 23.9562 19.447 20.052 19.9276C18.6647 20.0961 16.8017 20.8542 15.9842 21.964L13.3483 25.5561L11.0048 28.514C12.0254 28.0681 12.5457 27.7015 13.2839 27.1168L13.279 27.1218Z" fill="currentColor" data-astro-cid-tfd3xvz2></path> </svg> </div>  <noscript> <style>
    [data-loader] {
      display: none !important;
    }
  </style> </noscript> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Loader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Loader.astro", void 0);
//#endregion
//#region src/components/Footer.astro
createAstro("https://example.com");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const YEAR_TOKEN = "{current_year}";
	const { copyright = site.copyright, class: className } = Astro.props;
	const year = String((/* @__PURE__ */ new Date()).getFullYear());
	const copyrightParts = copyright.split(YEAR_TOKEN);
	return renderTemplate`${maybeRenderHead($$result)}<footer id="site-footer"${addAttribute(["px-site-margin py-6", className], "class:list")}> <p class="text-right text-body-sm text-fg-muted" data-footer-copyright>${copyrightParts.map((part, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${part}${index < copyrightParts.length - 1 && renderTemplate`<span data-current-year>${year}</span>`}` })}`)}</p> </footer> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/PageTransition.astro
createAstro("https://example.com");
var $$PageTransition = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageTransition;
	const { class: className } = Astro.props;
	return renderTemplate` <script>(function(){${defineScriptVars({ sessionKey: "ati-page-transition" })}
  try {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && sessionStorage.getItem(sessionKey) === "1") {
      document.documentElement.dataset.pageTransitionState = "covered";
    }
    sessionStorage.removeItem(sessionKey);
  } catch {
    /* private mode — skip the overlay */
  }
})();<\/script> ${maybeRenderHead($$result)}<div${addAttribute(["page-transition pointer-events-none fixed inset-0 z-100 bg-canvas opacity-0", className], "class:list")} data-page-transition aria-hidden="true" inert data-astro-cid-nclovoe2></div>  <noscript> <style>
    [data-page-transition] {
      display: none !important;
    }
  </style> </noscript> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/PageTransition.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/PageTransition.astro", void 0);
//#endregion
//#region src/components/SmoothScroll.astro
var $$SmoothScroll = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SmoothScroll.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/SmoothScroll.astro", void 0);
//#endregion
//#region src/lib/sanity.ts
var projectId = "7dd4oax3";
var dataset = "production";
var sanityClient = createClient({
	projectId,
	dataset,
	apiVersion: "2025-01-01",
	useCdn: true,
	perspective: "published",
	token: void 0,
	stega: { enabled: false }
});
createImageUrlBuilder({
	projectId,
	dataset
});
function optionalString(value) {
	if (typeof value !== "string") return void 0;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
var imageProjection = `{
  alt,
  caption,
  ...,
  asset->{
    url,
    metadata { dimensions { width, height }, lqip }
  }
}`;
`${imageProjection}`, `${imageProjection}${imageProjection}`;
async function fetchMainNavLinks() {
	return (await sanityClient.fetch(`*[_type == "siteSettings"][0].mainNav->items[]{
      text,
      "href": select(
        link.linkType == "external" => link.href,
        link.internalLink->_type == "page" && link.internalLink->slug.current == "home" => "/",
        link.internalLink->_type == "page" => "/" + link.internalLink->slug.current + "/",
        link.internalLink->_type == "project" => "/project/" + link.internalLink->slug.current + "/",
        null
      )
    }`) ?? []).map((row) => ({
		label: row.text?.trim() ?? "",
		href: row.href?.trim() ?? ""
	})).filter((row) => row.label.length > 0 && row.href.length > 0);
}
async function fetchFooterCopyright() {
	return optionalString(await sanityClient.fetch(`*[_type == "footerSettings"][0].copyright`));
}
//#endregion
//#region src/lib/pages.ts
async function getPublishedPages() {
	return getCollection("pages");
}
async function getPageBySlug(slug) {
	return (await getPublishedPages()).find((page) => page.id === slug);
}
async function getNavLinks() {
	const fromMenu = await fetchMainNavLinks();
	if (fromMenu.length > 0) return fromMenu;
	return (await getPublishedPages()).filter((page) => page.data.showInNav && page.id !== "home").sort((a, b) => a.data.navOrder - b.data.navOrder).map((page) => ({
		label: page.data.title.toLowerCase(),
		href: `/${page.id}/`
	}));
}
async function getFooterCopyright() {
	return await fetchFooterCopyright() ?? site.copyright;
}
function pageSections(page) {
	return page.data.sections;
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://example.com");
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Layout;
	const fm = Astro2.props.frontmatter ?? {};
	const { title = fm.title ?? "Astro Playground", description = fm.description, image, ogType, noindex, jsonLd, theme = fm.theme ?? "light", skipLoader = false, hideFooter = false, lang = "en" } = Astro2.props;
	const gtagId = void 0;
	const navLinks = await getNavLinks();
	const copyright = await getFooterCopyright();
	const navCta = await getPageBySlug("contact") ? {
		label: "Get in touch",
		href: "/contact/"
	} : void 0;
	const now = /* @__PURE__ */ new Date();
	const announcement = (await getCollection("announcements")).filter((a) => a.data.enabled).filter((a) => !a.data.startsAt || a.data.startsAt <= now).filter((a) => !a.data.endsAt || a.data.endsAt >= now).sort((a, b) => {
		if (a.data.priority !== b.data.priority) return b.data.priority - a.data.priority;
		const aStart = a.data.startsAt?.getTime() ?? 0;
		return (b.data.startsAt?.getTime() ?? 0) - aStart;
	})[0];
	const AnnouncementContent = announcement ? (await renderEntry(announcement)).Content : null;
	return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(theme, "data-theme")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Seo", $$Seo, {
		"title": title,
		"description": description,
		"ogType": ogType,
		"image": image,
		"noindex": noindex,
		"jsonLd": jsonLd
	})}${gtagId}${renderHead($$result)}</head> <body> ${renderComponent($$result, "SmoothScroll", $$SmoothScroll, {})} ${!skipLoader && renderTemplate`${renderComponent($$result, "Loader", $$Loader, {})}`} <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-intent focus:text-fg-on-intent focus:rounded-sm">
Skip to main content
</a> ${renderComponent($$result, "Nav", $$NavInline, {
		"links": navLinks,
		"cta": navCta ?? {
			label: "Get in touch",
			href: "/contact/"
		}
	}, { "announcement": ($$result2) => renderTemplate`${announcement && AnnouncementContent && renderTemplate`${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, {
		"slot": "announcement",
		"href": announcement.data.href,
		"dismissible": announcement.data.dismissible,
		"class": "bg-intent text-fg-on-intent text-sm"
	}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AnnouncementContent", AnnouncementContent, {})} ` })}`}` })} ${renderSlot($$result, $$slots["default"])} ${!hideFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "copyright": copyright })}`} ${renderComponent($$result, "PageTransition", $$PageTransition, {})} </body> </html>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/layouts/Layout.astro", void 0);
//#endregion
export { __exportAll as _, pageSections as a, $$Footer as c, $$AnnouncementBanner as d, $$Button as f, VALID_SUPPORTED_FORMATS as g, DEFAULT_OUTPUT_FORMAT as h, getPublishedPages as i, $$Seo as l, DEFAULT_HASH_PROPS as m, getFooterCopyright as n, $$SmoothScroll as o, getCollection as p, getPageBySlug as r, $$PageTransition as s, $$Layout as t, site as u };
