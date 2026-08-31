import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/footer.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A site footer with a single right-aligned copyright line. Layouts include it by default; a page can omit it with ",
			createVNode(_components.code, { children: "hideFooter" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [{
			name: "copyright",
			type: "string",
			default: "site.copyright",
			description: "Copyright line. `{current_year}` is replaced with the current year. Defaults to the value in `src/data/site.ts`."
		}, {
			name: "class",
			type: "string",
			description: "Optional class passthrough on the `<footer>`."
		}] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Layouts render the footer. Pass ",
			createVNode(_components.code, { children: "hideFooter" }),
			" to omit it:"
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
							children: " Layout "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"../layouts/Layout.astro\""
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
							children: "Layout"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Work\""
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
							children: "main"
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
							children: "\"main\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* page content */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "main"
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
							children: "Layout"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Layout"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Home\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " hideFooter"
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
							children: "main"
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
							children: "\"main\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* no footer */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "main"
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
							children: "Layout"
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
		createVNode(_components.p, { children: [
			"CMS pages expose the same control as ",
			createVNode(_components.strong, { children: "Hide footer" }),
			" on the Sanity page document. Home is hidden; other pages keep the footer unless an editor turns it off."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Left-aligned copyright, padded with ",
			createVNode(_components.code, { children: "px-site-margin" }),
			" so it lines up with the page box."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "a11y",
			children: "A11y"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Wrapped in a native ",
			createVNode(_components.code, { children: "<footer>" }),
			". The copyright text is the accessible name of the region."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "tokens",
			children: "Tokens"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Type: ",
				createVNode(_components.code, { children: "text-body-sm text-fg-muted" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Horizontal padding: ",
				createVNode(_components.code, { children: "px-site-margin" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Vertical padding: ",
				createVNode(_components.code, { children: "py-6" }),
				"."
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
				"Copyright copy lives in Sanity (",
				createVNode(_components.code, { children: "footerSettings" }),
				") or ",
				createVNode(_components.code, { children: "src/data/site.ts" }),
				" (",
				createVNode(_components.code, { children: "site.copyright" }),
				"), not in the component."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "{current_year}" }), " in that copy is replaced with the visitor’s year in JS; the build year is the no-JS fallback."] }),
			"\n",
			createVNode(_components.li, { children: "No live preview here — the footer is a page-edge landmark. View any inner page to see it in context." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Footer",
	"description": "Site footer — a single left-aligned copyright line. Included from Layout unless a page hides it.",
	"category": "layout",
	"order": 30,
	"sourceFile": "src/components/Footer.astro",
	"status": "stable",
	"related": ["Layout", "SectionMain"]
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
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "layout",
			"text": "Layout"
		},
		{
			"depth": 2,
			"slug": "a11y",
			"text": "A11y"
		},
		{
			"depth": 2,
			"slug": "tokens",
			"text": "Tokens"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/footer.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/footer.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/footer.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
