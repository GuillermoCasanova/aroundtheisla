import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$ProjectSize } from "./ProjectSize_OBvbl0Vf.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/project-size.mdx
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
			"Radiogroup used on the project rail, directly under the title. Selecting an option writes ",
			createVNode(_components.code, { children: "data-size" }),
			" on the closest ",
			createVNode(_components.code, { children: "[data-project]" }),
			" ancestor so the gallery can change column width. The last choice is stored under ",
			createVNode(_components.code, { children: "ati-project-size" }),
			". All three labels share one text size and sit on the same baseline."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Default — Large selected",
			align: "start",
			children: createVNode("div", {
				"data-project": true,
				"data-size": "large",
				class: "min-h-24",
				children: createVNode($$ProjectSize, {})
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
				default: "\"Photograph size\"",
				description: "Accessible name on the radiogroup."
			},
			{
				name: "value",
				type: "\"small\" | \"medium\" | \"large\"",
				default: "\"large\"",
				description: "SSR default. The client overrides this from localStorage."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the radiogroup wrapper."
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
				"ARIA radio pattern: ",
				createVNode(_components.code, { children: "role=\"radiogroup\"" }),
				" on the wrapper, ",
				createVNode(_components.code, { children: "role=\"radio\"" }),
				" + ",
				createVNode(_components.code, { children: "aria-checked" }),
				" on each button, roving ",
				createVNode(_components.code, { children: "tabindex" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Arrow keys, Home, and End move the selection. Click and keyboard both persist the choice." }),
			"\n",
			createVNode(_components.li, { children: [
				"Dispatches a bubbling ",
				createVNode(_components.code, { children: "project:size" }),
				" event with ",
				createVNode(_components.code, { children: "{ size }" }),
				" so a parent can react without reading the DOM."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Labels are the same size (",
				createVNode(_components.code, { children: "text-body-md" }),
				"); the selected label uses ",
				createVNode(_components.code, { children: "text-fg" }),
				", idle labels use ",
				createVNode(_components.code, { children: "text-fg-muted" }),
				"."
			] }),
			"\n"
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
							children: " ProjectSize "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/ProjectSize.astro\""
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
							style: { color: "#85E89D" },
							children: "section"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-project"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-size"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"large\""
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
							style: { color: "#79B8FF" },
							children: "ProjectSize"
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
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "section"
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
				"Without a ",
				createVNode(_components.code, { children: "[data-project]" }),
				" ancestor the radios still update visually; only the gallery width contract is skipped."
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
	"title": "ProjectSize",
	"description": "Small / Medium / Large radiogroup that sets photograph column width on a project gallery. Preference persists in localStorage.",
	"category": "pattern",
	"order": 76,
	"sourceFile": "src/components/ProjectSize.astro",
	"status": "per-project",
	"related": ["ProjectView"]
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
var url = "src/content/components/project-size.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/project-size.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/project-size.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
