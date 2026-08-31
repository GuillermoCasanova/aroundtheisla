import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$CardFeatured } from "./CardFeatured_CKhO3Gk8.mjs";
//#region src/components/Clickable.astro
createAstro("https://example.com");
var $$Clickable = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Clickable;
	const { href, label, class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["relative", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} <a${addAttribute(href, "href")} class="absolute inset-0 z-[1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current focus-visible:rounded-[inherit]"${addAttribute(label, "aria-label")}> <span class="sr-only">${label}</span> </a> </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Clickable.astro", void 0);
//#endregion
//#region src/content/components/clickable.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		em: "em",
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
			"The “stretched link” pattern. Wraps any block of content with an absolutely-positioned ",
			createVNode(_components.code, { children: "<a>" }),
			" that covers the whole container, so the user can click anywhere on the card to navigate — without putting an ",
			createVNode(_components.code, { children: "<a>" }),
			" around the entire markup (which would nest interactive elements and break a11y)."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Card-as-link",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Clickable, {
					href: "/blog/example",
					label: "Read: Example post",
					children: createVNode($$CardFeatured, {
						title: "The whole card is the link",
						description: "Click anywhere — the heading, body, even the empty space — and you'll navigate. The <a> stretches across the whole container.",
						border: "all",
						children: createVNode("span", {
							slot: "eyebrow",
							children: "Pattern"
						})
					})
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
				name: "href",
				type: "string",
				required: true,
				description: "URL the card links to."
			},
			{
				name: "label",
				type: "string",
				required: true,
				description: "Accessible label for the stretched link — what screen readers announce."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the outer wrapping div."
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
				"The outer ",
				createVNode(_components.code, { children: "<div>" }),
				" is ",
				createVNode(_components.code, { children: "position: relative" }),
				" so the stretched link is contained."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"An ",
				createVNode(_components.code, { children: "<a>" }),
				" with ",
				createVNode(_components.code, { children: "absolute inset-0 z-[1]" }),
				" covers the full area of the parent."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A ",
				createVNode(_components.code, { children: "<span class=\"sr-only\">" }),
				" inside the link provides the accessible name."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "focus-visible" }),
				" styles produce a ringed outline with ",
				createVNode(_components.code, { children: "rounded-[inherit]" }),
				" so the focus ring matches the card’s corners."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Child content sits ",
				createVNode(_components.em, { children: "below" }),
				" the link in DOM order but appears unchanged visually."
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
							children: " Clickable "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Clickable.astro\""
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
							children: "Clickable"
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
							children: "\"/blog/my-post\""
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
							children: "\"Read: My Post Title\""
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
							children: "img"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/thumbnail.jpg\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"\""
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
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h3"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">My Post Title</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h3"
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
							children: ">A short description...</"
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
							children: "Clickable"
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
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: ["Inner interactive elements need ", createVNode(_components.code, { children: "position: relative; z-index: 2" })] }),
				" (use the ",
				createVNode(_components.code, { children: "card-action" }),
				" utility from ",
				createVNode(_components.code, { children: "global.css" }),
				") so they sit above the stretched link and stay independently clickable."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "label" }),
				" prop is required for accessibility — without it, the link has no accessible name."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Don’t nest two ",
				createVNode(_components.code, { children: "Clickable" }),
				"s — the inner stretched link will eat all clicks meant for the outer."
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
	"title": "Clickable",
	"description": "Stretched-link wrapper that turns any container into a single clickable surface without nesting interactive elements.",
	"category": "primitive",
	"order": 40,
	"sourceFile": "src/components/Clickable.astro",
	"status": "stable",
	"related": ["CardFeatured", "CardIcon"]
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
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/clickable.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/clickable.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/clickable.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
