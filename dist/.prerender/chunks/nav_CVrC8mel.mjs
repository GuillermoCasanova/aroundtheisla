import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
//#region src/content/components/nav.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
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
		createVNode(_components.p, { children: "The primary site navigation. Supports plain links, dropdown menus, and full-width mega menu panels. Includes a mobile hamburger menu, scroll-aware styling, and corner accent decorations." }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"None — navigation links are hardcoded in the component’s frontmatter as a ",
			createVNode(_components.code, { children: "NavLink[]" }),
			" array."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "link-types",
			children: "Link types"
		}),
		"\n",
		createVNode(_components.p, { children: "The nav supports three link types via a discriminated union:" }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Type" }),
					"\n",
					createVNode(_components.th, { children: "Structure" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Plain" }),
					"\n",
					createVNode(_components.td, { children: [
						createVNode(_components.code, { children: "{ label, href }" }),
						" — renders as a simple ",
						createVNode(_components.code, { children: "<a>" }),
						" link"
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Menu" }),
					"\n",
					createVNode(_components.td, { children: [createVNode(_components.code, { children: "{ label, type: \"menu\", id, items }" }), " — dropdown with links"] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Mega" }),
					"\n",
					createVNode(_components.td, { children: [createVNode(_components.code, { children: "{ label, type: \"mega\", id, columns }" }), " — full-width panel with grouped links"] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Uses ",
				createVNode(_components.code, { children: "section-grid-outside" }),
				" (5-column grid from ",
				createVNode(_components.code, { children: "global.css" }),
				") for alignment."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The bar (",
				createVNode(_components.code, { children: "data-nav-bar" }),
				") is ",
				createVNode(_components.code, { children: "fixed" }),
				" at the top with ",
				createVNode(_components.code, { children: "z-50" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Corner accents (",
				createVNode(_components.code, { children: "data-accent" }),
				") appear when scrolled."
			] }),
			"\n",
			createVNode(_components.li, { children: "Mega panels sit outside the bar element so they can span the full container width." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "scroll-behavior",
			children: "Scroll behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"On scroll past 12px, the bar gains ",
				createVNode(_components.code, { children: "is-scrolled" }),
				": solid background, box shadow, and corner accents appear."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Uses ",
				createVNode(_components.code, { children: "{ passive: true }" }),
				" on the scroll listener for performance."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "desktop-dropdowns",
			children: "Desktop dropdowns"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Hover-intent pattern with configurable delays (",
				createVNode(_components.code, { children: "HOVER_ENTER: 100ms" }),
				", ",
				createVNode(_components.code, { children: "HOVER_LEAVE: 150ms" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: "When a dropdown is already open, switching to another is instant (no enter delay)." }),
			"\n",
			createVNode(_components.li, { children: "Click also toggles (keyboard / mobile friendly)." }),
			"\n",
			createVNode(_components.li, { children: "Click outside or press Escape closes all dropdowns." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "mobile-menu",
			children: "Mobile menu"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Hamburger button toggles ",
				createVNode(_components.code, { children: "data-nav-mobile" }),
				" panel visibility."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Icon swaps between hamburger and X via ",
				createVNode(_components.code, { children: "hidden" }),
				" class toggling."
			] }),
			"\n",
			createVNode(_components.li, { children: "Links inside the mobile panel auto-close the menu on click." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Dropdown triggers have ",
				createVNode(_components.code, { children: "aria-controls" }),
				" pointing to their panel ID and ",
				createVNode(_components.code, { children: "aria-expanded" }),
				" state."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Hamburger has ",
				createVNode(_components.code, { children: "aria-label" }),
				" that toggles between “Open menu” and “Close menu”."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Logo link has ",
				createVNode(_components.code, { children: "aria-label=\"Miscreants home\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Escape closes all dropdowns and the mobile menu." }),
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
							children: " Nav "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Nav.astro\""
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
							children: "Nav"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"To modify links, edit the ",
			createVNode(_components.code, { children: "links" }),
			" array in the component’s frontmatter."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "sub-components-used",
			children: "Sub-components used"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "Logo" }), " — SVG wordmark"] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "Button" }), " — CTA button (“Get a Demo”)"] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "AnnouncementBanner" }), " — dismissible banner above the nav bar"] }),
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
				"The nav is ",
				createVNode(_components.code, { children: "fixed" }),
				", so page content needs top padding/margin to avoid being hidden behind it."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Mega panels use ",
				createVNode(_components.code, { children: "backdrop-blur-md" }),
				" and layered shadows for depth."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "AnnouncementBanner" }),
				" is embedded directly in this component."
			] }),
			"\n",
			createVNode(_components.li, { children: "This file is a preview-free doc — Nav requires full-page context to render meaningfully (fixed positioning, the page-edge grid, scroll behavior). View the live site to see it in action." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "Nav",
	"description": "Primary site navigation bar — plain links, dropdowns, mega menu panels, mobile hamburger, scroll-aware styling.",
	"category": "layout",
	"order": 20,
	"sourceFile": "src/components/Nav.astro",
	"status": "stable",
	"related": [
		"NavMega",
		"NavMorph",
		"Logo",
		"AnnouncementBanner"
	]
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
			"slug": "link-types",
			"text": "Link types"
		},
		{
			"depth": 3,
			"slug": "layout",
			"text": "Layout"
		},
		{
			"depth": 3,
			"slug": "scroll-behavior",
			"text": "Scroll behavior"
		},
		{
			"depth": 3,
			"slug": "desktop-dropdowns",
			"text": "Desktop dropdowns"
		},
		{
			"depth": 3,
			"slug": "mobile-menu",
			"text": "Mobile menu"
		},
		{
			"depth": 3,
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "sub-components-used",
			"text": "Sub-components used"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/nav.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
