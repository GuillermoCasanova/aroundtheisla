import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
//#region src/content/components/smooth-scroll.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Wired into ",
			createVNode(_components.code, { children: "Layout" }),
			" and ",
			createVNode(_components.code, { children: "PlainLayout" }),
			" on every page. Boots ",
			createVNode(_components.a, {
				href: "https://scroll.locomotive.ca",
				children: "Locomotive Scroll"
			}),
			" v5, which smooths native document scroll via Lenis. No wrapper element is required."
		] }),
		"\n",
		createVNode(_components.p, { children: "This component renders nothing. It is a client script: reduced-motion leaves native scroll alone, and the intro loader keeps the instance stopped until it leaves the tree." }),
		"\n",
		createVNode(_components.h2, {
			id: "using-it-on-a-page",
			children: "Using it on a page"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Add ",
			createVNode(_components.code, { children: "data-scroll" }),
			" to any element you want Locomotive to observe. Speed is optional — omit it for in-view detection only."
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
			"data-language": "html",
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: [
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}),
					createVNode(_components.span, {
						style: { color: "#85E89D" },
						children: "h2"
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: " data-scroll"
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: " data-scroll-speed"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "="
					}),
					createVNode(_components.span, {
						style: { color: "#9ECBFF" },
						children: "\"0.3\""
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ">Headline</"
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
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: "Common attributes:" }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Attribute" }),
					"\n",
					createVNode(_components.th, { children: "Effect" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-scroll" }) }),
					"\n",
					createVNode(_components.td, { children: "Observe this element" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-scroll-speed" }) }),
					"\n",
					createVNode(_components.td, { children: "Parallax multiplier (auto-disabled on touch)" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-scroll-repeat" }) }),
					"\n",
					createVNode(_components.td, { children: "Re-trigger when it leaves and re-enters" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-scroll-css-progress" }) }),
					"\n",
					createVNode(_components.td, { children: "Expose progress as a CSS custom property" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Programmatic scroll (skip links, in-page anchors) goes through Lenis when ",
			createVNode(_components.code, { children: "anchors" }),
			" is on — the skip-to-main link in ",
			createVNode(_components.code, { children: "Layout" }),
			" is covered."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "reduced-motion",
			children: "Reduced motion"
		}),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }), " skips initialization entirely. Native scroll, keyboard, and the OS scrollbar stay as they are. The instance is destroyed if the preference turns on mid-session, and created if it turns off."] }),
		"\n",
		createVNode(_components.h2, {
			id: "from-other-scripts",
			children: "From other scripts"
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
			"data-language": "ts",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { getLocomotiveScroll } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@/lib/smooth-scroll\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " scroll"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " getLocomotiveScroll"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "();"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "scroll?."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "scrollTo"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"#main\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ");"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"A bubbling, cancelable ",
			createVNode(_components.code, { children: "scroll:ready" }),
			" event fires once the instance exists, with the instance on ",
			createVNode(_components.code, { children: "event.detail" }),
			"."
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "SmoothScroll",
	"description": "Site-wide Locomotive Scroll (v5 / Lenis) — smooth wheel, in-view detection, and optional parallax.",
	"category": "layout",
	"order": 6,
	"sourceFile": "src/components/SmoothScroll.astro",
	"status": "stable",
	"related": ["Layout"]
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "using-it-on-a-page",
			"text": "Using it on a page"
		},
		{
			"depth": 2,
			"slug": "reduced-motion",
			"text": "Reduced motion"
		},
		{
			"depth": 2,
			"slug": "from-other-scripts",
			"text": "From other scripts"
		}
	];
}
var url = "src/content/components/smooth-scroll.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/smooth-scroll.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/smooth-scroll.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
