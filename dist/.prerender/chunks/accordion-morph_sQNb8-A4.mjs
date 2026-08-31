import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/AccordionMorph.astro
createAstro("https://example.com");
var $$AccordionMorph = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AccordionMorph;
	const { items, name = `morph-${Math.random().toString(36).slice(2, 9)}`, allowMultiple = false, openIndex, ariaLabel, class: className = "" } = Astro.props;
	const groupName = allowMultiple ? void 0 : name;
	return renderTemplate`${maybeRenderHead($$result)}<div data-accordion-morph${addAttribute(ariaLabel ? "region" : void 0, "role")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(["morphing-disclosure", className], "class:list")} data-astro-cid-rhhhnv3j> ${items.map((item, i) => renderTemplate`<details${addAttribute(groupName, "name")}${addAttribute(openIndex === i, "open")} data-astro-cid-rhhhnv3j> <summary data-astro-cid-rhhhnv3j> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": item.icon,
		"class": "h-5 w-5 shrink-0 text-fg-muted",
		"aria-hidden": "true",
		"data-astro-cid-rhhhnv3j": true
	})}`} <span class="text-fg" data-astro-cid-rhhhnv3j>${item.title}</span> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:plus",
		"data-indicator": true,
		"class": "h-5 w-5 shrink-0 text-fg-muted",
		"aria-hidden": "true",
		"data-astro-cid-rhhhnv3j": true
	})} </summary> <div class="content" data-astro-cid-rhhhnv3j> <p class="text-fg-muted" data-astro-cid-rhhhnv3j>${item.description}</p> </div> </details>`)} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/AccordionMorph.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/AccordionMorph.astro", void 0);
//#endregion
//#region src/content/components/accordion-morph.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"An accordion built on native ",
			createVNode(_components.code, { children: "<details>" }),
			" / ",
			createVNode(_components.code, { children: "<summary>" }),
			" elements with a “morph” animation: the open row gets full border-radius, neighbors peel away with a bouncy spring, and panel content fades + translates + un-blurs in. Mutually-exclusive open behavior comes from the platform itself — modern browsers treat ",
			createVNode(_components.code, { children: "<details>" }),
			" elements that share the same ",
			createVNode(_components.code, { children: "name" }),
			" attribute as a single exclusive group."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Default — exclusive open",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$AccordionMorph, {
					ariaLabel: "FAQ",
					openIndex: 0,
					items: [
						{
							icon: "lucide:wrench",
							title: "What is design engineering?",
							description: "Where design intuition meets code execution — enabling you to see UI problems and build solutions from the ground up."
						},
						{
							icon: "lucide:puzzle",
							title: "What is the craft of UI?",
							description: "A course about building things well — mastering the web platform so you're not limited by tools or libraries."
						},
						{
							icon: "lucide:globe",
							title: "Why focus on the web platform?",
							description: "Because when you work with the web — not fight it — you unlock performance, accessibility, and durability that last."
						}
					]
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Allow multiple open",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$AccordionMorph, {
					allowMultiple: true,
					items: [
						{
							title: "Item one",
							description: "Each row toggles independently when allowMultiple is set."
						},
						{
							title: "Item two",
							description: "Try opening more than one — both stay open."
						},
						{
							title: "Item three",
							description: "The native exclusive-open behavior is dropped by removing the shared name attribute."
						}
					]
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
				name: "items",
				type: "Item[]",
				required: true,
				description: "Array of { title, description, icon? } — one per row."
			},
			{
				name: "name",
				type: "string",
				default: "random morph-xxxxx",
				description: "Exclusive group name. All items in the same instance share it."
			},
			{
				name: "allowMultiple",
				type: "boolean",
				default: "false",
				description: "When true, drops the name so multiple rows can be open at once."
			},
			{
				name: "openIndex",
				type: "number",
				description: "Index of the row that should be open initially (0-based)."
			},
			{
				name: "ariaLabel",
				type: "string",
				description: "When set, wraps in role=\"region\" with this label."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the root."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The ",
			createVNode(_components.code, { children: "Item" }),
			" shape:"
		] }),
		"\n",
		createVNode(_components.pre, {
			class: "astro-code github-dark",
			style: {
				backgroundColor: "#24292e",
				color: "#e1e4e8",
				overflowX: "auto"
			},
			tabindex: "0",
			"data-language": "ts",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "type"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Item"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " {"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  title"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  description"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  icon"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";        "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// optional lucide name (e.g. \"lucide:wrench\")"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "};"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "why-native-details",
			children: ["Why native ", createVNode(_components.code, { children: "<details>" })]
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Concern" }),
					"\n",
					createVNode(_components.th, { children: "Custom button accordion" }),
					"\n",
					createVNode(_components.th, { children: ["Native ", createVNode(_components.code, { children: "<details>" })] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Keyboard / focus / SR" }),
					"\n",
					createVNode(_components.td, { children: "Re-implemented in JS" }),
					"\n",
					createVNode(_components.td, { children: "Free from the platform" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Exclusive open" }),
					"\n",
					createVNode(_components.td, { children: "JS state machine" }),
					"\n",
					createVNode(_components.td, { children: [createVNode(_components.code, { children: "name=\"...\"" }), " shared across items"] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Initial-open SSR" }),
					"\n",
					createVNode(_components.td, { children: ["Manual ", createVNode(_components.code, { children: "aria-expanded" })] }),
					"\n",
					createVNode(_components.td, { children: [createVNode(_components.code, { children: "<details open>" }), " works pre-JS"] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Height animation" }),
					"\n",
					createVNode(_components.td, { children: "grid-rows trick or JS" }),
					"\n",
					createVNode(_components.td, { children: [createVNode(_components.code, { children: "::details-content" }), " + interpolate-size"] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Bundle cost" }),
					"\n",
					createVNode(_components.td, { children: "~150 lines" }),
					"\n",
					createVNode(_components.td, { children: "~30 lines" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism--the-bouncy-spring",
			children: "Mechanism — the bouncy spring"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The height transition uses a long ",
			createVNode(_components.code, { children: "linear()" }),
			" easing function that overshoots 1.0, giving a spring-like settle. Don’t replace with ",
			createVNode(_components.code, { children: "cubic-bezier()" }),
			" — the overshoot above 1.0 isn’t expressible there."
		] }),
		"\n",
		createVNode(_components.p, { children: "The other transitions (border-radius, margins, content fade) use a separate non-overshooting curve so they don’t bounce together with the height." }),
		"\n",
		createVNode(_components.h2, {
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [createVNode(_components.code, { children: "interpolate-size" }), " is recent."] }), " Chrome 129+ supports it natively. Older browsers use the JS height-measurement fallback that runs once on page load."] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [createVNode(_components.code, { children: "allowMultiple" }), " drops exclusive behavior entirely."] }), " No middle ground (e.g. “max 2 open at once”) — that’s a custom JS state machine. The native primitive is one-of-many or all-of-many."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Long content + the bounce." }),
				" The bouncy spring overshoots ~13% past target before settling. With very long content, tune ",
				createVNode(_components.code, { children: "--bounce-duration" }),
				" down (e.g. 0.6s) if the snap feels heavy."
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
	"title": "AccordionMorph",
	"description": "Native <details> accordion with bouncy spring animation and morphing radius/margin between rows.",
	"category": "pattern",
	"order": 30,
	"sourceFile": "src/components/AccordionMorph.astro",
	"status": "stable",
	"related": ["Accordion", "AccordionFAQ"]
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
			"slug": "why-native-details",
			"text": "Why native <details>"
		},
		{
			"depth": 2,
			"slug": "mechanism--the-bouncy-spring",
			"text": "Mechanism — the bouncy spring"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/accordion-morph.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/accordion-morph.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/accordion-morph.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
