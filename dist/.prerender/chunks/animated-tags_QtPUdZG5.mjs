import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/AnimatedTags.astro
createAstro("https://example.com");
var $$AnimatedTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AnimatedTags;
	const { items, name = `tags-${Math.random().toString(36).slice(2, 9)}`, value, ariaLabel = "Select an option", class: className = "" } = Astro.props;
	const selectedValue = value ?? items[0]?.value;
	return renderTemplate`${maybeRenderHead($$result)}<div data-animated-tags role="radiogroup"${addAttribute(ariaLabel, "aria-label")}${addAttribute(["animated-tags flex items-center gap-3", className], "class:list")} data-astro-cid-y5uzhr2p> ${items.map((item) => {
		const checked = item.value === selectedValue;
		return renderTemplate`<label class="cursor-pointer" data-astro-cid-y5uzhr2p> <input type="radio"${addAttribute(name, "name")}${addAttribute(item.value, "value")}${addAttribute(checked, "checked")} class="sr-only peer" data-astro-cid-y5uzhr2p> <div class="tag" data-astro-cid-y5uzhr2p> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			"name": item.icon,
			"class": "h-5 w-5 shrink-0",
			"aria-hidden": "true",
			"data-astro-cid-y5uzhr2p": true
		})}`} <span class="tag-label" data-astro-cid-y5uzhr2p> <span data-astro-cid-y5uzhr2p>${item.label}</span> </span> </div> </label>`;
	})} </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/AnimatedTags.astro", void 0);
//#endregion
//#region src/content/components/animated-tags.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A radio group of icon-only “tag” pills where the selected one expands with a bouncy spring to show its label, and the rest collapse back to icon-only. They use — native ",
			createVNode(_components.code, { children: "<input type=\"radio\">" }),
			" for state, ",
			createVNode(_components.code, { children: ":has(input:checked)" }),
			" for styling, and the ",
			createVNode(_components.code, { children: "grid-template-columns: 0fr → 1fr" }),
			" trick for the width animation."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Default — 'Random' selected",
			children: createVNode($$AnimatedTags, {
				name: "docs-style-1",
				value: "random",
				ariaLabel: "Choose a style",
				items: [
					{
						value: "cartoon",
						label: "Cartoon",
						icon: "lucide:rabbit"
					},
					{
						value: "pixel",
						label: "Pixel",
						icon: "lucide:layout-grid"
					},
					{
						value: "watercolor",
						label: "Watercolor",
						icon: "lucide:brush"
					},
					{
						value: "random",
						label: "Random",
						icon: "lucide:sparkles"
					}
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Two-item group",
			children: createVNode($$AnimatedTags, {
				name: "docs-style-2",
				ariaLabel: "Toggle",
				items: [{
					value: "on",
					label: "On",
					icon: "lucide:zap"
				}, {
					value: "off",
					label: "Off",
					icon: "lucide:moon"
				}]
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
				description: "Array of { value, label, icon? } — one per radio."
			},
			{
				name: "name",
				type: "string",
				default: "random tags-xxxxx",
				description: "Form field name. Must be unique per group on the page."
			},
			{
				name: "value",
				type: "string",
				description: "Initial selected value. Defaults to the first item's value."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Select an option\"",
				description: "Accessible name on the radiogroup wrapper."
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
							children: "  value"
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
							children: "  label"
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
							children: ";       "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// optional lucide name (e.g. \"lucide:rabbit\")"
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
			id: "why-no-js",
			children: "Why no JS"
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
					createVNode(_components.th, { children: "React + Framer Motion" }),
					"\n",
					createVNode(_components.th, { children: "Native + CSS" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Selection state" }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "useState" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "<input type=\"radio\">" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Keyboard nav" }),
					"\n",
					createVNode(_components.td, { children: "Manual key handlers" }),
					"\n",
					createVNode(_components.td, { children: "Free — arrow keys move between radios" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Form integration" }),
					"\n",
					createVNode(_components.td, { children: "Custom serialization" }),
					"\n",
					createVNode(_components.td, { children: ["Submits as a normal radio under the configured ", createVNode(_components.code, { children: "name" })] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Layout animation" }),
					"\n",
					createVNode(_components.td, { children: ["Framer Motion ", createVNode(_components.code, { children: "layout" })] }),
					"\n",
					createVNode(_components.td, { children: [
						createVNode(_components.code, { children: "grid-template-columns: 0fr → 1fr" }),
						" + ",
						createVNode(_components.code, { children: "linear()" }),
						" spring"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "has-selects-the-active-label",
			children: [createVNode(_components.code, { children: ":has()" }), " selects the active label"]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Every item is a ",
			createVNode(_components.code, { children: "<label>" }),
			" wrapping a visually-hidden ",
			createVNode(_components.code, { children: "<input type=\"radio\">" }),
			" and the visible pill. Sharing a ",
			createVNode(_components.code, { children: "name" }),
			" makes them an exclusive group, so native arrow-key navigation works. The label’s ",
			createVNode(_components.code, { children: ":has(input:checked)" }),
			" flips the pill’s color, background, expanded label width, and ",
			createVNode(_components.code, { children: "margin-inline-start" }),
			" simultaneously."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "width-animation-via-grid-template-columns",
			children: ["Width animation via ", createVNode(_components.code, { children: "grid-template-columns" })]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The label-text wrapper is a 1-column grid. Animating ",
			createVNode(_components.code, { children: "grid-template-columns" }),
			" between ",
			createVNode(_components.code, { children: "minmax(0, 0fr)" }),
			" and ",
			createVNode(_components.code, { children: "minmax(0, 1fr)" }),
			" interpolates between “no track” and “auto-sized track” — animating to intrinsic width without measuring."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "minmax(0, …)" }),
			" matters: without it, ",
			createVNode(_components.code, { children: "white-space: nowrap" }),
			" text forces the track open even at 0fr."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "the-bouncy-spring",
			children: "The bouncy spring"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"A ",
			createVNode(_components.code, { children: "linear()" }),
			" easing function with values that overshoot 1.0 — matching ",
			createVNode(_components.code, { children: "visualDuration: 0.3, bounce: 0.3" }),
			" from Framer Motion. ",
			createVNode(_components.code, { children: "cubic-bezier()" }),
			" can’t express overshoots above 1.0."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "no-flex-gap",
			children: ["No flex ", createVNode(_components.code, { children: "gap" })]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The icon-to-label spacing is ",
			createVNode(_components.code, { children: "margin-inline-start" }),
			" on the label, animated in lockstep with the width — not a flex ",
			createVNode(_components.code, { children: "gap" }),
			". Flex ",
			createVNode(_components.code, { children: "gap" }),
			" reserves space even when one item has 0 width, leaking phantom padding next to the icon on inactive pills."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: ":has()" }), " browser support."] }),
				" Chrome 105+, Safari 15.4+, Firefox 121+. Older browsers won’t apply the active-state styling — every pill looks inactive. If you need wider support, a JS shim that toggles a class on ",
				createVNode(_components.code, { children: "change" }),
				" would do the same job."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: "name" }), " uniqueness."] }),
				" Two instances with the same ",
				createVNode(_components.code, { children: "name" }),
				" would behave as one radio group across both. The default random ",
				createVNode(_components.code, { children: "name" }),
				" avoids this."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Long labels." }), " The pill expands to label width + padding. Very long labels can wrap the row or push siblings off-screen — cap label length or constrain the parent."] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "AnimatedTags",
	"description": "Radio group of icon pills where the selected one springs open to show its label. Pure CSS, zero JS.",
	"category": "pattern",
	"order": 90,
	"sourceFile": "src/components/AnimatedTags.astro",
	"status": "stable",
	"related": []
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
			"slug": "why-no-js",
			"text": "Why no JS"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "has-selects-the-active-label",
			"text": ":has() selects the active label"
		},
		{
			"depth": 3,
			"slug": "width-animation-via-grid-template-columns",
			"text": "Width animation via grid-template-columns"
		},
		{
			"depth": 3,
			"slug": "the-bouncy-spring",
			"text": "The bouncy spring"
		},
		{
			"depth": 3,
			"slug": "no-flex-gap",
			"text": "No flex gap"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/animated-tags.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/animated-tags.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/animated-tags.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
