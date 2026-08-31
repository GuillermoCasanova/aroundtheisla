import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$ProjectView } from "./ProjectView_CDiGqIuF.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/project-view.mdx
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
			createVNode(_components.code, { children: "data-view" }),
			" on the closest ",
			createVNode(_components.code, { children: "[data-project]" }),
			" ancestor so the gallery can switch between a vertical column and the Work-index 2-up grid. The last choice is stored under ",
			createVNode(_components.code, { children: "ati-project-view" }),
			". Selected label is bold; idle labels sit muted."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Default — Single Column selected",
			align: "start",
			children: createVNode("div", {
				"data-project": true,
				"data-view": "column",
				class: "min-h-24",
				children: createVNode($$ProjectView, {})
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
				default: "\"Photograph layout\"",
				description: "Accessible name on the radiogroup."
			},
			{
				name: "value",
				type: "\"column\" | \"grid\"",
				default: "\"column\"",
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
				createVNode(_components.code, { children: "project:view" }),
				" event with ",
				createVNode(_components.code, { children: "{ view }" }),
				" so a parent can react without reading the DOM."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Labels are the same size (",
				createVNode(_components.code, { children: "text-body-md" }),
				"); the selected label uses ",
				createVNode(_components.code, { children: "text-fg" }),
				" and bold, idle labels use ",
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
							children: " ProjectView "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/ProjectView.astro\""
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
							children: " data-view"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"column\""
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
							children: "ProjectView"
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
				" ancestor the radios still update visually; only the gallery layout contract is skipped."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The product hides this control below the ",
				createVNode(_components.code, { children: "lg" }),
				" breakpoint; the gallery stays a single column there regardless of ",
				createVNode(_components.code, { children: "data-view" }),
				"."
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
	"title": "ProjectView",
	"description": "Single Column / Grid radiogroup that sets the photograph layout on a project gallery. Preference persists in localStorage.",
	"category": "pattern",
	"order": 77,
	"sourceFile": "src/components/ProjectView.astro",
	"status": "per-project",
	"related": ["ProjectSize"]
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
var url = "src/content/components/project-view.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/project-view.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/project-view.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
