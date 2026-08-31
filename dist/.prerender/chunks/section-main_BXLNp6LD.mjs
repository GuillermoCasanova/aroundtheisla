import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/section-main.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
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
			"The section primitive. ",
			createVNode(_components.strong, { children: [
				"Build every ",
				createVNode(_components.code, { children: "Section*" }),
				" component on this"
			] }),
			" rather than hand-rolling a wrapper — it owns the semantic landmark, the centering, the vertical rhythm and the side rules, so sections stay aligned with each other, the nav and the footer. Hand-rolling ",
			createVNode(_components.code, { children: "<section class=\"section-gutter section-padding\">" }),
			" drifts from the shared rhythm and silently drops the side rules. Bespoke markup is an allowed-with-reason deviation for genuinely full-bleed or self-framed sections (see STANDARDS §5.0)."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"It extends ",
			createVNode(_components.code, { children: "HTMLAttributes<\"section\">" }),
			", so ",
			createVNode(_components.code, { children: "id" }),
			", ",
			createVNode(_components.code, { children: "aria-*" }),
			" and any other native attribute pass straight through to the ",
			createVNode(_components.code, { children: "<section>" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "id",
				type: "string",
				description: "HTML id for anchor linking (any native section attribute passes through)."
			},
			{
				name: "padding",
				type: "\"none\" | \"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
				default: "\"md\"",
				description: "Vertical padding preset — shorthand for both edges."
			},
			{
				name: "paddingTop",
				type: "\"none\" | \"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
				description: "Overrides the top edge only."
			},
			{
				name: "paddingBottom",
				type: "\"none\" | \"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
				description: "Overrides the bottom edge only."
			},
			{
				name: "contentPadding",
				type: "\"none\" | \"default\"",
				default: "\"default\"",
				description: "Horizontal padding inside the content column: none = px-0, default = px-2 md:px-6."
			},
			{
				name: "contentClass",
				type: "string",
				default: "\"\"",
				description: "Additional classes on the inner flex column."
			},
			{
				name: "borderTop",
				type: "boolean",
				default: "false",
				description: "Add a top border to the section."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "structure",
			children: "Structure"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Two elements — an outer ",
			createVNode(_components.code, { children: "<section>" }),
			" that centers, and an inner column that carries rhythm and rules:"
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
			"data-language": "plaintext",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "<section class=\"container-page\">          <!-- max-w-[90rem] + px-site-margin -->" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "  <div class=\"section-pt-* section-pb-*   <!-- vertical rhythm -->" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "              flex flex-col relative" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "              border-l border-r border-stroke  <!-- side rules -->" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "              px-2 md:px-6\">              <!-- contentPadding -->" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "    <slot />" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "  </div>" })
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, { children: "</section>" })
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Centering comes from the ",
			createVNode(_components.code, { children: "container-page" }),
			" utility. (An earlier 5-column\n",
			createVNode(_components.code, { children: "section-grid-outside" }),
			" grid with decorative ",
			createVNode(_components.code, { children: "section-pattern" }),
			" gutters was\nreplaced by this — it’s still in ",
			createVNode(_components.code, { children: "global.css" }),
			" but commented out and applied\nnowhere.)"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "padding-map",
			children: "Padding map"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "padding" }),
			" / ",
			createVNode(_components.code, { children: "paddingTop" }),
			" / ",
			createVNode(_components.code, { children: "paddingBottom" }),
			" map to the ",
			createVNode(_components.code, { children: "section-pt-*" }),
			" and\n",
			createVNode(_components.code, { children: "section-pb-*" }),
			" utilities in ",
			createVNode(_components.code, { children: "global.css" }),
			". They ",
			createVNode(_components.strong, { children: "do" }),
			" step up at ",
			createVNode(_components.code, { children: "md:" }),
			":"
		] }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Value" }),
					"\n",
					createVNode(_components.th, { children: "Utility" }),
					"\n",
					createVNode(_components.th, { children: "Mobile" }),
					"\n",
					createVNode(_components.th, { children: [createVNode(_components.code, { children: "md:" }), " and up"] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "none" }) }),
					"\n",
					createVNode(_components.td, { children: "(none)" }),
					"\n",
					createVNode(_components.td, { children: "—" }),
					"\n",
					createVNode(_components.td, { children: "—" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "xs" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "section-p{t,b}-xs" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "3rem" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "4rem" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "sm" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "section-p{t,b}-sm" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "4rem" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "5rem" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "md" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "section-p{t,b}-md" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "6rem" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "8rem" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "lg" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "section-p{t,b}-lg" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "8rem" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "12rem" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "xl" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "section-p{t,b}-xl" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "12rem" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "16rem" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "paddingTop" }),
			" / ",
			createVNode(_components.code, { children: "paddingBottom" }),
			" each override ",
			createVNode(_components.code, { children: "padding" }),
			" for that edge."
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
							children: " SectionMain "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/SectionMain.astro\""
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "<!-- Standard section -->"
					})
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
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"h2\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Features</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Content goes here</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "<!-- Tight section with top border, no content padding -->"
					})
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
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " padding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"xs\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " contentPadding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"none\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " borderTop"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "true"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}>"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"grid grid-cols-3\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">...</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "<!-- Section with anchor link target -->"
					})
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
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " id"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"pricing\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " padding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lg\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"h2\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Pricing</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "SectionMain"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The left/right ",
				createVNode(_components.code, { children: "border-stroke" }),
				" rules are what give the page its ruled-column look, and they’re the main thing you lose by hand-rolling a section."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "contentClass" }),
				" lets you add things like ",
				createVNode(_components.code, { children: "items-center" }),
				" to the flex column without overriding the base layout classes."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Components like ",
				createVNode(_components.code, { children: "FlowSteps" }),
				" and ",
				createVNode(_components.code, { children: "FeatureScrollSpy" }),
				" already manage their own grid and padding — wrap them in ",
				createVNode(_components.code, { children: "SectionMain padding=\"none\" contentPadding=\"none\"" }),
				" so you don’t double-indent."
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
	"title": "SectionMain",
	"description": "The section primitive — semantic section landmark, centered content column, vertical rhythm presets and side rules.",
	"category": "layout",
	"order": 10,
	"sourceFile": "src/components/SectionMain.astro",
	"status": "stable",
	"related": ["Layout", "Footer"]
};
function getHeadings() {
	return [
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
			"depth": 3,
			"slug": "structure",
			"text": "Structure"
		},
		{
			"depth": 3,
			"slug": "padding-map",
			"text": "Padding map"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/section-main.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/section-main.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/section-main.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
