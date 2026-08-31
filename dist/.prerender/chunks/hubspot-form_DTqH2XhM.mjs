import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/hubspot-form.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "Embeds a HubSpot form by loading the HubSpot Forms SDK and initializing it with the given portal and form IDs." }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "region",
				type: "string",
				default: "\"na1\"",
				description: "HubSpot data center region."
			},
			{
				name: "portalId",
				type: "string",
				default: "\"40120329\"",
				description: "HubSpot portal (account) ID."
			},
			{
				name: "formId",
				type: "string",
				default: "\"34f97be6-a435-4a54-a676-371efe148e70\"",
				description: "Specific form ID to embed."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Renders an empty ",
				createVNode(_components.code, { children: "<div id=\"hubspot-form-container\">" }),
				" as the mount target."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Loads the HubSpot Forms embed script (",
				createVNode(_components.code, { children: "//js.hsforms.net/forms/embed/v2.js" }),
				") via ",
				createVNode(_components.code, { children: "is:inline" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Calls ",
				createVNode(_components.code, { children: "hbspt.forms.create()" }),
				" with the provided props, targeting the container div."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Uses ",
				createVNode(_components.code, { children: "define:vars" }),
				" to pass Astro props into the inline script."
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
							children: " HubspotForm "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/HubspotForm.astro\""
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
						children: "<!-- Default form -->"
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
							children: "HubspotForm"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
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
						children: "<!-- Custom form -->"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "HubspotForm"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  region"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"eu1\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  portalId"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"12345678\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  formId"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"abcdef12-3456-7890-abcd-ef1234567890\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "/>"
					})
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
				"Scripts use ",
				createVNode(_components.code, { children: "is:inline" }),
				" so they execute immediately (not deferred / bundled by Astro)."
			] }),
			"\n",
			createVNode(_components.li, { children: "The HubSpot SDK loads from an external CDN — adds a third-party dependency and network request." }),
			"\n",
			createVNode(_components.li, { children: "Default prop values are specific to a particular HubSpot account. Update them for your own forms." }),
			"\n",
			createVNode(_components.li, { children: "No loading state or error handling — if the SDK fails to load, the container stays empty." }),
			"\n",
			createVNode(_components.li, { children: "No live preview — the embed depends on a live HubSpot SDK request and a real form ID." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "HubspotForm",
	"description": "Embed a HubSpot form by portal + form ID. Loads the SDK and mounts into a target div.",
	"category": "form",
	"order": 10,
	"sourceFile": "src/components/HubspotForm.astro",
	"status": "stable",
	"related": []
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
var url = "src/content/components/hubspot-form.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/hubspot-form.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/hubspot-form.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
