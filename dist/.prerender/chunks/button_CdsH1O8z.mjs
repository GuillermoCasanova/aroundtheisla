import { f as $$Button } from "./Layout_Dlmeugkd.mjs";
import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$ButtonGroup } from "./ButtonGroup_BTuXk2SI.mjs";
//#region src/content/components/button.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"The base interactive primitive. Renders as a ",
			createVNode(_components.code, { children: "<button>" }),
			" by default, or as an ",
			createVNode(_components.code, { children: "<a>" }),
			" when an ",
			createVNode(_components.code, { children: "href" }),
			" is provided. Three visual variants and an optional sliding-arrow indicator."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Variants",
			children: createVNode($$ButtonGroup, { children: [
				createVNode($$Button, { label: "Primary" }),
				createVNode($$Button, {
					label: "Secondary",
					variant: "secondary"
				}),
				createVNode($$Button, {
					label: "Tertiary",
					variant: "tertiary"
				})
			] })
		}),
		"\n",
		createVNode($$Preview, {
			label: "As link",
			align: "start",
			children: createVNode($$Button, {
				label: "Read the docs",
				href: "https://docs.astro.build",
				target: "_blank"
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Without arrow",
			children: createVNode($$Button, {
				label: "No arrow",
				withArrow: false
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Disabled",
			children: createVNode($$Button, {
				label: "Disabled",
				disabled: true
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
				name: "label",
				type: "string",
				default: "\"Learn More\"",
				description: "Button text. Falls back to slot content if provided."
			},
			{
				name: "variant",
				type: "\"primary\" | \"secondary\" | \"tertiary\"",
				default: "\"primary\"",
				description: "Visual variant. Primary uses the intent color."
			},
			{
				name: "href",
				type: "string",
				description: "When set, renders as an <a> instead of a <button>."
			},
			{
				name: "type",
				type: "\"button\" | \"submit\" | \"reset\"",
				default: "\"button\"",
				description: "Button type (ignored when href is set)."
			},
			{
				name: "target",
				type: "string",
				description: "Anchor target. Auto-adds rel=\"noopener noreferrer\" when target=\"_blank\"."
			},
			{
				name: "withArrow",
				type: "boolean",
				default: "true",
				description: "Render the sliding arrow indicator."
			},
			{
				name: "arrowDirection",
				type: "\"right\" | \"left\"",
				default: "\"right\"",
				description: "Direction of the arrow + slide animation."
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Disables the button. Sets aria-disabled when href is provided (since <a> doesn't support disabled)."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the rendered element."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The component also forwards arbitrary attributes via ",
			createVNode(_components.code, { children: "...rest" }),
			" — so ",
			createVNode(_components.code, { children: "data-modal-open" }),
			", ",
			createVNode(_components.code, { children: "aria-*" }),
			", ",
			createVNode(_components.code, { children: "onclick" }),
			", etc. all pass through to the rendered tag without being declared in the props interface."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.pre, {
			class: "astro-code github-dark",
			style: {
				backgroundColor: "#24292e",
				color: "#e1e4e8",
				overflowX: "auto"
			},
			tabindex: "0",
			"data-language": "astro",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "---"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " Button "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Button.astro\""
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "---"
					})
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Submit\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Cancel\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " variant"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"secondary\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Read more\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " href"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/docs\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Sign up\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-modal-open"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"signup\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />   {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* arbitrary attrs forwarded */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "tokens",
			children: "Tokens"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "primary" }),
				": ",
				createVNode(_components.code, { children: "bg-intent text-fg-on-intent hover:bg-intent-hover" })
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "secondary" }),
				": ",
				createVNode(_components.code, { children: "border border-stroke text-fg hover:bg-panel-muted" })
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "tertiary" }),
				": ",
				createVNode(_components.code, { children: "text-fg hover:bg-panel-muted" }),
				" (no border)"
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Focus ring: ",
				createVNode(_components.code, { children: "focus-visible:ring-focus" }),
				" with ",
				createVNode(_components.code, { children: "ring-offset-canvas" })
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
	"title": "Button",
	"description": "Primary CTA button with variants, optional arrow animation, and link/button mode.",
	"category": "primitive",
	"order": 10,
	"sourceFile": "src/components/Button.astro",
	"status": "stable",
	"related": ["ButtonGroup"]
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
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "tokens",
			"text": "Tokens"
		}
	];
}
var url = "src/content/components/button.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/button.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/button.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
