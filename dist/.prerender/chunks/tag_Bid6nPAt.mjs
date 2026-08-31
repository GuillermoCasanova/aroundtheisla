import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Tag.astro
createAstro("https://example.com");
var $$Tag = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tag;
	const { variant = "neutral", size = "md", closable = false, closeLabel = "Remove", outline = false, class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span data-tag${addAttribute(variant, "data-tag-variant")}${addAttribute(size, "data-tag-size")}${addAttribute(outline ? "true" : void 0, "data-tag-outline")}${addAttribute(["tag", className], "class:list")}> <span data-tag-icon>${renderSlot($$result, $$slots["icon"])}</span> <span data-tag-label>${renderSlot($$result, $$slots["default"])}</span> ${closable && renderTemplate`<button type="button" data-tag-close${addAttribute(closeLabel, "aria-label")}> <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"> <path d="M3 3l6 6M9 3l-6 6"></path> </svg> </button>`} </span> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Tag.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Tag.astro", void 0);
//#endregion
//#region src/content/components/tag.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		em: "em",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
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
			"Small inline chip used for status pills (",
			createVNode(_components.code, { children: "Active" }),
			", ",
			createVNode(_components.code, { children: "Beta" }),
			"), category labels, filter chips, and version markers. Variants are driven by semantic tokens (",
			createVNode(_components.code, { children: "success" }),
			", ",
			createVNode(_components.code, { children: "error" }),
			", ",
			createVNode(_components.code, { children: "intent" }),
			", ",
			createVNode(_components.code, { children: "warning" }),
			", ",
			createVNode(_components.code, { children: "neutral" }),
			") so they flip automatically across light/dark/brand themes."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Variants — solid",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-2 py-2",
				children: [
					createVNode($$Tag, {
						variant: "neutral",
						children: "Neutral"
					}),
					createVNode($$Tag, {
						variant: "success",
						children: "Active"
					}),
					createVNode($$Tag, {
						variant: "warning",
						children: "Beta"
					}),
					createVNode($$Tag, {
						variant: "error",
						children: "Deprecated"
					}),
					createVNode($$Tag, {
						variant: "intent",
						children: "New"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Variants — outlined",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-2 py-2",
				children: [
					createVNode($$Tag, {
						variant: "neutral",
						outline: true,
						children: "Neutral"
					}),
					createVNode($$Tag, {
						variant: "success",
						outline: true,
						children: "Active"
					}),
					createVNode($$Tag, {
						variant: "warning",
						outline: true,
						children: "Beta"
					}),
					createVNode($$Tag, {
						variant: "error",
						outline: true,
						children: "Deprecated"
					}),
					createVNode($$Tag, {
						variant: "intent",
						outline: true,
						children: "New"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Sizes",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-2 py-2",
				children: [createVNode($$Tag, {
					size: "sm",
					variant: "success",
					children: "Small"
				}), createVNode($$Tag, {
					size: "md",
					variant: "success",
					children: "Medium"
				})]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Closable filter chips",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-2 py-2",
				children: [
					createVNode($$Tag, {
						variant: "neutral",
						closable: true,
						closeLabel: "Remove News filter",
						children: "News"
					}),
					createVNode($$Tag, {
						variant: "neutral",
						closable: true,
						closeLabel: "Remove Updates filter",
						children: "Updates"
					}),
					createVNode($$Tag, {
						variant: "neutral",
						closable: true,
						closeLabel: "Remove Releases filter",
						children: "Releases"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "With icon slot",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-2 py-2",
				children: [createVNode($$Tag, {
					variant: "success",
					children: [createVNode("svg", {
						slot: "icon",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"aria-hidden": "true",
						children: createVNode("polyline", { points: "20 6 9 17 4 12" })
					}), createVNode(_components.p, { children: "Verified" })]
				}), createVNode($$Tag, {
					variant: "warning",
					children: [createVNode("svg", {
						slot: "icon",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2.5",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"aria-hidden": "true",
						children: [createVNode("path", { d: "M12 9v4M12 17h.01" }), createVNode("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" })]
					}), createVNode(_components.p, { children: "Pending" })]
				})]
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
				name: "variant",
				type: "\"neutral\" | \"success\" | \"warning\" | \"error\" | \"intent\"",
				default: "\"neutral\"",
				description: "Color variant — drawn from semantic tokens."
			},
			{
				name: "size",
				type: "\"sm\" | \"md\"",
				default: "\"md\"",
				description: "Tag size."
			},
			{
				name: "outline",
				type: "boolean",
				default: "false",
				description: "Use outlined style (color on transparent) instead of solid fill."
			},
			{
				name: "closable",
				type: "boolean",
				default: "false",
				description: "Add a close button. Click dispatches `tag:close` and removes the tag from the DOM unless prevented."
			},
			{
				name: "closeLabel",
				type: "string",
				default: "\"Remove\"",
				description: "Accessible label for the close button — should describe what's being removed."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the tag."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "slots",
			children: "Slots"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Slot" }),
					"\n",
					createVNode(_components.th, { children: "Purpose" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "(default)" }),
					"\n",
					createVNode(_components.td, { children: "Tag label." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "icon" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Optional leading icon (SVG). Sized to ",
						createVNode(_components.code, { children: "1em" }),
						" and inherits color."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "events",
			children: "Events"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When ",
			createVNode(_components.code, { children: "closable" }),
			", clicking the close button dispatches a ",
			createVNode(_components.code, { children: "tag:close" }),
			" event:"
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
			"data-language": "js",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "document."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "addEventListener"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"tag:close\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", ("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "e"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
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
							style: { color: "#E1E4E8" },
							children: "  console."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "log"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Removed:\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", e.detail.value);"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "});"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The event is ",
			createVNode(_components.code, { children: "cancelable" }),
			" — call ",
			createVNode(_components.code, { children: "preventDefault()" }),
			" to keep the tag in the DOM (e.g. if you want to confirm before removing, or sync with backend state first)."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Real ",
				createVNode(_components.code, { children: "<button>" }),
				" for close — keyboard-accessible, focus-visible outline styled to match the tag’s text color."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-label" }),
				" on the close button — pass a descriptive ",
				createVNode(_components.code, { children: "closeLabel" }),
				" so screen readers announce ",
				createVNode(_components.em, { children: "what" }),
				" is being removed (e.g. ",
				createVNode(_components.code, { children: "\"Remove News filter\"" }),
				"), not just “Remove”."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Color contrast: solid variants use ",
				createVNode(_components.code, { children: "color-mix()" }),
				" to keep text legible on tinted backgrounds; outlined variants use the foreground color directly on transparent."
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
				"Tag is a ",
				createVNode(_components.code, { children: "<span>" }),
				" (inline-flex) — drop it inside any text flow without disrupting layout."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "warning" }),
				" variant uses a literal ",
				createVNode(_components.code, { children: "#d97706" }),
				" (amber-600) since the project tokens don’t include a warning color. Add ",
				createVNode(_components.code, { children: "--color-warning" }),
				" to ",
				createVNode(_components.code, { children: "global.css" }),
				" if you want to centralize it."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Closable tags self-remove from the DOM after dispatch — for controlled behavior, listen to ",
				createVNode(_components.code, { children: "tag:close" }),
				" and call ",
				createVNode(_components.code, { children: "preventDefault()" }),
				" then handle removal in your own state."
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
	"title": "Tag",
	"description": "Status / category / filter chip with semantic-token variants, two sizes, optional close button, and optional icon slot.",
	"category": "primitive",
	"order": 14,
	"sourceFile": "src/components/Tag.astro",
	"status": "stable",
	"related": ["AnimatedTags", "FilterBar"]
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
			"slug": "slots",
			"text": "Slots"
		},
		{
			"depth": 2,
			"slug": "events",
			"text": "Events"
		},
		{
			"depth": 2,
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/tag.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/tag.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/tag.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
