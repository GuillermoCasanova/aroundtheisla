import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
//#region src/content/components/nav-mega.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "An alternative mega-navigation with a more polished desktop dropdown (morphing container height) and a mobile drill-down pattern (slide-in sub-panels with a back button)." }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode(_components.p, { children: "None — navigation panels and links are hardcoded in the component’s frontmatter." }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "data-structure",
			children: "Data structure"
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
							children: "interface"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " NavPanel"
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
							style: { color: "#FFAB70" },
							children: "  name"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  columns"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "heading"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "; "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "links"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " NavLink"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "[] }[];"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Panels are defined in the ",
			createVNode(_components.code, { children: "panels" }),
			" array. Top-level plain links go in ",
			createVNode(_components.code, { children: "topLinks" }),
			"."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "desktop-behavior",
			children: "Desktop behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Dropdown triggers use hover-intent (",
				createVNode(_components.code, { children: "HOVER_ENTER: 120ms" }),
				", ",
				createVNode(_components.code, { children: "HOVER_LEAVE: 150ms" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A shared ",
				createVNode(_components.code, { children: "data-dropdown-container" }),
				" morphs its ",
				createVNode(_components.code, { children: "height" }),
				" smoothly between panels using CSS ",
				createVNode(_components.code, { children: "transition: height 0.35s" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Panel measurement happens by briefly toggling ",
				createVNode(_components.code, { children: "data-state=\"active\"" }),
				" with ",
				createVNode(_components.code, { children: "visibility: hidden" }),
				" to get the natural height without a flash."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Content inside panels uses staggered fade-in via CSS ",
				createVNode(_components.code, { children: "transition-delay" }),
				" driven by a ",
				createVNode(_components.code, { children: "--stagger-i" }),
				" variable set per element."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A semi-transparent backdrop (",
				createVNode(_components.code, { children: "--nav-backdrop-scrim" }),
				", plus ",
				createVNode(_components.code, { children: "backdrop-blur-sm" }),
				") appears behind the dropdown. It’s a scrim over the page rather than a themed surface, so it stays dark in every theme; override the custom property to retune it."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "mobile-behavior-below-991px",
			children: "Mobile behavior (below 991px)"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Hamburger opens a full-screen nav list with staggered item animations." }),
			"\n",
			createVNode(_components.li, { children: [
				"Tapping a panel trigger slides in that panel from the right (",
				createVNode(_components.code, { children: "translateX(8%) -> 0" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: "A back button in the top bar slides the panel back out." }),
			"\n",
			createVNode(_components.li, { children: "The logo fades out when a sub-panel is active; the back button fades in." }),
			"\n",
			createVNode(_components.li, { children: "Body scroll is locked when the mobile menu is open." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "keyboard-navigation",
			children: "Keyboard navigation"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Enter / Space toggles dropdowns; ArrowDown opens and focuses the first link." }),
			"\n",
			createVNode(_components.li, { children: "ArrowUp / ArrowDown navigates between links inside a panel." }),
			"\n",
			createVNode(_components.li, { children: "ArrowUp from the first link returns focus to the toggle button." }),
			"\n",
			createVNode(_components.li, { children: "Escape closes the dropdown (desktop) or navigates back / closes the menu (mobile)." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "dynamic-top-offset",
			children: "Dynamic top offset"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The nav list, dropdown wrapper, and backdrop all sync their ",
				createVNode(_components.code, { children: "top" }),
				" to ",
				createVNode(_components.code, { children: "navBar.getBoundingClientRect().bottom" }),
				", accounting for the announcement banner height."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A ",
				createVNode(_components.code, { children: "ResizeObserver" }),
				" on the banner keeps the offset accurate when the banner collapses."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "announcement-banner-script",
			children: "Announcement banner script"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Included inline at the bottom of this component." }),
			"\n",
			createVNode(_components.li, { children: "Hides on scroll-down, shows on scroll-up, dismissible with sessionStorage persistence." }),
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
							children: " NavMega "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/NavMega.astro\""
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
							children: "NavMega"
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
			"To modify navigation, edit the ",
			createVNode(_components.code, { children: "panels" }),
			" and ",
			createVNode(_components.code, { children: "topLinks" }),
			" arrays in the frontmatter."
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
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "Button" }),
				" — (imported but the CTA is hardcoded as an ",
				createVNode(_components.code, { children: "<a>" }),
				" in this version)"
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
				"Uses ",
				createVNode(_components.code, { children: "is:inline" }),
				" scripts (not module scripts) — manipulates DOM immediately and doesn’t need Astro’s script bundling."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "MOBILE_BREAKPOINT" }),
				" is ",
				createVNode(_components.code, { children: "991px" }),
				" (matching Tailwind’s ",
				createVNode(_components.code, { children: "lg:" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"All animations respect ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				" — transitions are disabled entirely."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"This component is self-contained with its own styles and scripts, unlike ",
				createVNode(_components.code, { children: "Nav.astro" }),
				" which delegates some behavior to sub-components."
			] }),
			"\n",
			createVNode(_components.li, { children: "No live preview here — the nav needs full-page context (fixed positioning, page grid, scroll behavior). View the live site to see it." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "NavMega",
	"description": "Alternative nav with a height-morphing desktop dropdown and a mobile drill-down sub-panel pattern.",
	"category": "layout",
	"order": 21,
	"sourceFile": "src/components/NavMega.astro",
	"status": "stable",
	"related": [
		"Nav",
		"NavMorph",
		"Logo"
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
			"slug": "data-structure",
			"text": "Data structure"
		},
		{
			"depth": 3,
			"slug": "desktop-behavior",
			"text": "Desktop behavior"
		},
		{
			"depth": 3,
			"slug": "mobile-behavior-below-991px",
			"text": "Mobile behavior (below 991px)"
		},
		{
			"depth": 3,
			"slug": "keyboard-navigation",
			"text": "Keyboard navigation"
		},
		{
			"depth": 3,
			"slug": "dynamic-top-offset",
			"text": "Dynamic top offset"
		},
		{
			"depth": 3,
			"slug": "announcement-banner-script",
			"text": "Announcement banner script"
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
var url = "src/content/components/nav-mega.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-mega.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-mega.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
