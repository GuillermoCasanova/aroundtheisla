import { C as addAttribute, F as createComponent, M as unescapeHTML, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CopyButton } from "./CopyButton_CXxbTPtV.mjs";
import { createCssVariablesTheme, createHighlighter, isSpecialLang } from "shiki";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import { bundledLanguages } from "shiki/langs";
//#region node_modules/@astrojs/internal-helpers/dist/shiki-engine-default.js
function loadShikiEngine() {
	return createOnigurumaEngine(import("shiki/wasm"));
}
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/shiki.js
var _cssVariablesTheme;
var cssVariablesTheme = () => _cssVariablesTheme ?? (_cssVariablesTheme = createCssVariablesTheme({ variablePrefix: "--astro-code-" }));
var cachedHighlighters = /* @__PURE__ */ new Map();
function createShikiHighlighter(options) {
	const key = getCacheKey(options);
	let highlighterPromise = cachedHighlighters.get(key);
	if (!highlighterPromise) {
		highlighterPromise = createShikiHighlighterInternal(options);
		cachedHighlighters.set(key, highlighterPromise);
	}
	return ensureLanguagesLoaded(highlighterPromise, options?.langs);
}
function getCacheKey(options) {
	const keyCache = [];
	const { theme, themes, langAlias } = options ?? {};
	if (theme) keyCache.push(theme);
	if (themes) keyCache.push(Object.entries(themes).sort());
	if (langAlias) keyCache.push(Object.entries(langAlias).sort());
	return keyCache.length > 0 ? JSON.stringify(keyCache) : "";
}
async function ensureLanguagesLoaded(promise, langs) {
	const highlighter = await promise;
	if (!langs) return highlighter;
	const loadedLanguages = highlighter.getLoadedLanguages();
	for (const lang of langs) {
		if (typeof lang === "string" && (isSpecialLang(lang) || loadedLanguages.includes(lang))) continue;
		await highlighter.loadLanguage(lang);
	}
	return highlighter;
}
var shikiEngine = void 0;
async function createShikiHighlighterInternal({ langs = [], theme = "github-dark", themes = {}, langAlias = {} } = {}) {
	theme = theme === "css-variables" ? cssVariablesTheme() : theme;
	if (shikiEngine === void 0) shikiEngine = await loadShikiEngine();
	const highlighter = await createHighlighter({
		langs: ["plaintext", ...langs],
		langAlias,
		themes: Object.values(themes).length ? Object.values(themes) : [theme],
		engine: shikiEngine
	});
	async function highlight(code, lang = "plaintext", options, to) {
		const resolvedLang = langAlias[lang] ?? lang;
		const loadedLanguages = highlighter.getLoadedLanguages();
		if (!isSpecialLang(lang) && !loadedLanguages.includes(resolvedLang)) try {
			await highlighter.loadLanguage(resolvedLang);
		} catch (_err) {
			const langStr = lang === resolvedLang ? `"${lang}"` : `"${lang}" (aliased to "${resolvedLang}")`;
			console.warn(`[Shiki] The language ${langStr} doesn't exist, falling back to "plaintext".`);
			lang = "plaintext";
		}
		code = code.replace(/(?:\r\n|\r|\n)$/, "");
		const themeOptions = Object.values(themes).length ? { themes } : { theme };
		const inline = options?.inline ?? false;
		return highlighter[to === "html" ? "codeToHtml" : "codeToHast"](code, {
			...themeOptions,
			defaultColor: options.defaultColor,
			lang,
			meta: options?.meta ? { __raw: options?.meta } : void 0,
			transformers: [{
				pre(node) {
					if (inline) node.tagName = "code";
					const { class: attributesClass, style: attributesStyle, ...rest } = options?.attributes ?? {};
					Object.assign(node.properties, rest);
					const classValue = (normalizePropAsString(node.properties.class) ?? "") + (attributesClass ? ` ${attributesClass}` : "");
					const styleValue = (normalizePropAsString(node.properties.style) ?? "") + (attributesStyle ? `; ${attributesStyle}` : "");
					node.properties.class = classValue.replace(/shiki/g, "astro-code");
					node.properties.dataLanguage = lang;
					if (options.wrap === false || options.wrap === void 0) node.properties.style = styleValue + "; overflow-x: auto;";
					else if (options.wrap === true) node.properties.style = styleValue + "; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;";
				},
				line(node) {
					if (resolvedLang === "diff") {
						const innerSpanNode = node.children[0];
						const innerSpanTextNode = innerSpanNode?.type === "element" && innerSpanNode.children?.[0];
						if (innerSpanTextNode && innerSpanTextNode.type === "text") {
							const start = innerSpanTextNode.value[0];
							if (start === "+" || start === "-") {
								innerSpanTextNode.value = innerSpanTextNode.value.slice(1);
								innerSpanNode.children.unshift({
									type: "element",
									tagName: "span",
									properties: { style: "user-select: none;" },
									children: [{
										type: "text",
										value: start
									}]
								});
							}
						}
					}
				},
				code(node) {
					if (inline) return node.children[0];
				}
			}, ...options.transformers ?? []]
		});
	}
	return {
		codeToHast(code, lang, options = {}) {
			return highlight(code, lang, options, "hast");
		},
		codeToHtml(code, lang, options = {}) {
			return highlight(code, lang, options, "html");
		},
		loadLanguage(...newLangs) {
			return highlighter.loadLanguage(...newLangs);
		},
		getLoadedLanguages() {
			return highlighter.getLoadedLanguages();
		}
	};
}
function normalizePropAsString(value) {
	return Array.isArray(value) ? value.join(" ") : value;
}
//#endregion
//#region node_modules/astro/components/Code.astro
createAstro("https://example.com");
var $$Code = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Code;
	const { code, lang = "plaintext", embeddedLangs = [], meta, theme = "github-dark", themes = {}, defaultColor = "light", wrap = false, inline = false, transformers = [], ...rest } = Astro.props;
	if (typeof lang === "object") {
		if (lang.id) lang.name = lang.id;
		if (lang.grammar) Object.assign(lang, lang.grammar);
	}
	const html = await (await createShikiHighlighter({
		langs: [typeof lang === "string" ? Object.keys(bundledLanguages).includes(lang) ? lang : "plaintext" : lang, ...embeddedLangs],
		theme,
		themes
	})).codeToHtml(code, typeof lang === "string" ? lang : lang.name, {
		defaultColor,
		wrap,
		inline,
		transformers,
		meta,
		attributes: rest
	});
	return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/node_modules/astro/components/Code.astro", void 0);
//#endregion
//#region node_modules/astro/components/Debug.astro
createAstro("https://example.com");
var $$Debug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Debug;
	const key = Object.keys(Astro.props)[0];
	const value = Astro.props[key];
	return renderTemplate`${maybeRenderHead($$result)}<div class="astro-debug"> <div class="astro-debug-header"> <h2 class="astro-debug-title"> <span class="astro-debug-label">Debug</span> <span class="astro-debug-name">"${key}"</span> </h2> </div> ${renderComponent($$result, "Code", $$Code, { "code": JSON.stringify(value, null, 2) })} </div> <style>
	.astro-debug {
		font-size: 14px;
		padding: 1rem 1.5rem;
		background: white;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}

	.astro-debug-header,
	pre.astro-code {
		margin: -1rem -1.5rem 1rem;
		padding: 0.25rem 0.75rem;
	}

	.astro-debug-header {
		background: #ff1639;
		border-radius: 4px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.astro-debug-title {
		font-size: 1em;
		color: white;
		margin: 0.5em 0;
	}

	.astro-debug-label {
		font-weight: bold;
		text-transform: uppercase;
		margin-right: 0.75em;
	}

	pre.astro-code {
		border: 1px solid #eee;
		padding: 1rem 0.75rem;
		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-size: 14px;
	}
</style>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/node_modules/astro/components/Debug.astro", void 0);
//#endregion
//#region src/components/CodeBlock.astro
createAstro("https://example.com");
var $$CodeBlock = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeBlock;
	const { code, lang = "plaintext", title, highlight = [], showLineNumbers = false, hideLang = false, hideCopy = false, class: className } = Astro.props;
	const highlightSet = new Set(highlight);
	const transformers = highlightSet.size > 0 ? [{
		name: "codeblock-highlight",
		line(node, line) {
			if (highlightSet.has(line)) {
				node.properties = node.properties || {};
				node.properties["data-line-highlight"] = "true";
			}
		}
	}] : void 0;
	return renderTemplate`${maybeRenderHead($$result)}<figure data-codeblock${addAttribute(showLineNumbers ? "true" : void 0, "data-codeblock-line-numbers")} data-theme="dark"${addAttribute(["code-block", className], "class:list")}> ${(title || !hideLang || !hideCopy) && renderTemplate`<figcaption data-codeblock-toolbar> <span data-codeblock-title>${title}</span> <span data-codeblock-spacer></span> ${!hideLang && lang && lang !== "plaintext" && renderTemplate`<span data-codeblock-lang>${lang}</span>`} ${!hideCopy && renderTemplate`${renderComponent($$result, "CopyButton", $$CopyButton, {
		"value": code,
		"label": "Copy code",
		"class": "code-block__copy"
	})}`} </figcaption>`} <div data-codeblock-content> ${renderComponent($$result, "Code", $$Code, {
		"code": code,
		"lang": lang,
		"transformers": transformers
	})} </div> </figure>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/CodeBlock.astro", void 0);
//#endregion
//#region src/content/components/code-block.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A pragmatic code block primitive for docs and marketing pages. Built on top of Astro’s built-in ",
			createVNode(_components.code, { children: "<Code />" }),
			" component (so syntax highlighting is server-rendered shiki — zero client JS for highlighting), with a small client script for the copy button."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Default",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-2xl",
				children: createVNode($$CodeBlock, {
					lang: "ts",
					title: "example.ts",
					code: `function greet(name: string) {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet("world"));`
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "With line numbers and highlight",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-2xl",
				children: createVNode($$CodeBlock, {
					lang: "js",
					title: "config.js",
					showLineNumbers: true,
					highlight: [3, 4],
					code: `export default {\n  name: "starter",\n  version: "1.0.0",\n  features: ["tooltip", "code-block"],\n};`
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Minimal — no toolbar",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-2xl",
				children: createVNode($$CodeBlock, {
					lang: "bash",
					hideLang: true,
					hideCopy: true,
					code: `npm install\nnpm run dev`
				})
			})
		}),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "code",
				type: "string",
				required: true,
				description: "Source code to render and highlight."
			},
			{
				name: "lang",
				type: "string",
				default: "\"plaintext\"",
				description: "Shiki language id (e.g. \"ts\", \"jsx\", \"bash\")."
			},
			{
				name: "title",
				type: "string",
				description: "Filename or label shown in the title bar."
			},
			{
				name: "highlight",
				type: "number[]",
				default: "[]",
				description: "1-based line numbers to highlight."
			},
			{
				name: "showLineNumbers",
				type: "boolean",
				default: "false",
				description: "Show a 1-based line-number gutter (CSS counter)."
			},
			{
				name: "hideLang",
				type: "boolean",
				default: "false",
				description: "Hide the language badge in the toolbar."
			},
			{
				name: "hideCopy",
				type: "boolean",
				default: "false",
				description: "Hide the copy button in the toolbar."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the figure element."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Highlighting" }),
				" — Astro’s ",
				createVNode(_components.code, { children: "<Code />" }),
				" runs shiki at build/SSR time. No client-side highlighter is shipped to the browser."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Line highlight" }),
				" — implemented as a one-line shiki transformer (",
				createVNode(_components.code, { children: "name: \"codeblock-highlight\"" }),
				") that adds ",
				createVNode(_components.code, { children: "data-line-highlight=\"true\"" }),
				" to matching ",
				createVNode(_components.code, { children: "<span class=\"line\">" }),
				" rows. CSS draws the highlight band."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Line numbers" }),
				" — pure CSS counter on ",
				createVNode(_components.code, { children: ".line" }),
				" elements. No per-line markup needed."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Copy button" }),
				" — the ",
				createVNode(_components.code, { children: "CopyButton" }),
				" component reads the literal ",
				createVNode(_components.code, { children: "code" }),
				" string from the prop, so what gets copied is exactly what was rendered (no whitespace surprises from copying DOM text)."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "<Code />" }),
				" component must be imported from ",
				createVNode(_components.code, { children: "astro:components" }),
				" — that’s the project rule (see ",
				createVNode(_components.code, { children: "feedback_astro_shiki_cloudflare.md" }),
				"). Don’t shell out to ",
				createVNode(_components.code, { children: "shiki.codeToHtml" }),
				" directly; static HTML truncates on Cloudflare builds."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Shiki appends a trailing empty line to its output. The CSS rule ",
				createVNode(_components.code, { children: ".line:last-child:empty::before { content: \"\"; }" }),
				" suppresses the number for that ghost line."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For inline code, use the standard markdown ",
				createVNode(_components.code, { children: "`like this`" }),
				" — this component is for block-level snippets only."
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "CodeBlock",
	"description": "Syntax-highlighted code with title bar, language badge, copy button, optional line numbers, and optional line highlighting. Wraps astro:components <Code />.",
	"category": "pattern",
	"order": 58,
	"sourceFile": "src/components/CodeBlock.astro",
	"status": "stable",
	"related": ["CopyButton"]
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "preview",
			"text": "Preview"
		},
		{
			"depth": 2,
			"slug": "props",
			"text": "Props"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/code-block.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/code-block.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/code-block.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
