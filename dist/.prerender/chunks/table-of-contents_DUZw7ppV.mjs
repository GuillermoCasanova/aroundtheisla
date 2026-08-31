import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/TableOfContents.astro
createAstro("https://example.com");
var $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TableOfContents;
	const { headings, selector = "main", minLevel = 2, maxLevel = 3, title = "On this page", stickyOffset = 96, class: className } = Astro.props;
	const filtered = (headings ?? []).filter((h) => h.depth >= minLevel && h.depth <= maxLevel);
	return renderTemplate`${maybeRenderHead($$result)}<aside data-toc="component"${addAttribute(!headings ? selector : void 0, "data-toc-selector")}${addAttribute(minLevel, "data-toc-min-level")}${addAttribute(maxLevel, "data-toc-max-level")}${addAttribute(headings ? "true" : "false", "data-toc-server-rendered")}${addAttribute(`--toc-sticky-offset: ${stickyOffset}px;`, "style")}${addAttribute(["toc", className], "class:list")}> ${title && renderTemplate`<p class="toc__title">${title}</p>`} <nav${addAttribute(title, "aria-label")}> <ol data-toc-list> ${headings && filtered.map((h) => renderTemplate`<li data-toc-item${addAttribute(h.depth, "data-toc-level")}> <a${addAttribute(`#${h.slug}`, "href")} data-toc-link>${h.text}</a> </li>`)} </ol> </nav> </aside> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/TableOfContents.astro", void 0);
//#endregion
//#region src/content/components/table-of-contents.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Live TOC scanning this page",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-xs not-prose",
				children: createVNode($$TableOfContents, {
					selector: "article",
					minLevel: 2,
					maxLevel: 3,
					stickyOffset: 0
				})
			})
		}),
		"\n",
		createVNode(_components.p, { children: "A sticky in-page navigation panel for long documents. Two render modes:" }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Server-side" }),
				" — pass headings from MDX’s ",
				createVNode(_components.code, { children: "getHeadings()" }),
				". The list is rendered during SSR (no flash, no DOM scan)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Client-side scan" }),
				" — omit ",
				createVNode(_components.code, { children: "headings" }),
				" and provide a ",
				createVNode(_components.code, { children: "selector" }),
				". The script reads headings from the DOM at page load."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Active-section tracking is always client-side via ",
			createVNode(_components.code, { children: "IntersectionObserver" }),
			", so the highlighted entry follows the reader as they scroll."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "server-side-usage-recommended-for-mdx-docs",
			children: "Server-side usage (recommended for MDX docs)"
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
							children: " { getEntry, render } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:content\""
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
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " TableOfContents "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/TableOfContents.astro\""
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
							children: " entry"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " await"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " getEntry"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"docs\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"intro\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ");"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Content"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "headings"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " await"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " render"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(entry);"
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
							children: "\"grid grid-cols-[1fr_16rem] gap-12\""
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
							children: "article"
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
							children: "\"prose-doc\""
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Content"
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
							children: "  </"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "article"
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
							children: "TableOfContents"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " headings"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={headings} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "minLevel"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "maxLevel"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "3"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} />"
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
							children: "div"
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
			id: "client-side-scan",
			children: "Client-side scan"
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
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: [
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}),
					createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "TableOfContents"
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: " selector"
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
						style: { color: "#B392F0" },
						children: " minLevel"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={"
					}),
					createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "2"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "} "
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "maxLevel"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={"
					}),
					createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "3"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "} />"
					})
				]
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: "The script auto-generates IDs on any heading that doesn’t already have one (slugified from text content), so it works on plain HTML pages where rehype-slug isn’t running." }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "headings",
				type: "{ depth: number; slug: string; text: string }[]",
				description: "Pre-computed headings from MDX getHeadings(). When provided, the list renders during SSR."
			},
			{
				name: "selector",
				type: "string",
				default: "\"main\"",
				description: "CSS selector scanned client-side when `headings` is not provided."
			},
			{
				name: "minLevel",
				type: "number",
				default: "2",
				description: "Minimum heading level to include (1–6)."
			},
			{
				name: "maxLevel",
				type: "number",
				default: "3",
				description: "Maximum heading level to include (1–6)."
			},
			{
				name: "title",
				type: "string",
				default: "\"On this page\"",
				description: "Heading text above the list (and the nav aria-label)."
			},
			{
				name: "stickyOffset",
				type: "number",
				default: "96",
				description: "Sticky position offset in pixels — accounts for fixed top nav."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "active-section-selection",
			children: "Active-section selection"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Headings are observed with ",
			createVNode(_components.code, { children: "IntersectionObserver" }),
			" using a tight reading band (",
			createVNode(_components.code, { children: "rootMargin: \"-20% 0px -70% 0px\"" }),
			"). When at least one heading is inside the band, the topmost one wins. When the band is empty (e.g. mid-content with no heading nearby), the script falls back to “the last heading above the viewport top” — so the active state never disappears mid-scroll."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "heading-ids",
			children: "Heading IDs"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"If a heading lacks an ",
			createVNode(_components.code, { children: "id" }),
			", the script slugifies its text content and assigns one (with a ",
			createVNode(_components.code, { children: "-2" }),
			", ",
			createVNode(_components.code, { children: "-3" }),
			" suffix on collisions). This is a fallback — for MDX-driven docs you’ll typically get IDs from ",
			createVNode(_components.code, { children: "rehype-slug" }),
			" automatically, in which case the script just leaves them alone."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "sticky-positioning",
			children: "Sticky positioning"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The component uses ",
			createVNode(_components.code, { children: "position: sticky" }),
			" with a ",
			createVNode(_components.code, { children: "--toc-sticky-offset" }),
			" CSS variable so it pins to the top of its container while scrolling, leaving room for any fixed page header."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "<aside>" }),
				" element with a ",
				createVNode(_components.code, { children: "<nav>" }),
				" inside — both naturally announced by screen readers."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "nav" }),
				" carries ",
				createVNode(_components.code, { children: "aria-label" }),
				" from the ",
				createVNode(_components.code, { children: "title" }),
				" prop."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Active item gets ",
				createVNode(_components.code, { children: "aria-current=\"true\"" }),
				" (matches WAI-ARIA’s authoring practice for current location in a navigation list)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Anchor jumps respect the project’s ",
				createVNode(_components.code, { children: "scroll-padding-top: 6rem" }),
				" so the target heading lands below the fixed nav."
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
			createVNode(_components.li, { children: "Multi-instance safe: each TOC reads its own selector / heading set." }),
			"\n",
			createVNode(_components.li, { children: [
				"Re-initialized on ",
				createVNode(_components.code, { children: "astro:page-load" }),
				" for view-transition navigation."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For very long pages, consider tightening to ",
				createVNode(_components.code, { children: "maxLevel={2}" }),
				" — ",
				createVNode(_components.code, { children: "h3" }),
				"s often produce a noisy list."
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
	"title": "TableOfContents",
	"description": "Auto-generated table of contents with active-section highlighting via IntersectionObserver. Server-renders from MDX getHeadings() or scans the DOM client-side.",
	"category": "layout",
	"order": 70,
	"sourceFile": "src/components/TableOfContents.astro",
	"status": "stable",
	"related": ["Breadcrumbs"]
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
			"slug": "server-side-usage-recommended-for-mdx-docs",
			"text": "Server-side usage (recommended for MDX docs)"
		},
		{
			"depth": 2,
			"slug": "client-side-scan",
			"text": "Client-side scan"
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
			"depth": 3,
			"slug": "active-section-selection",
			"text": "Active-section selection"
		},
		{
			"depth": 3,
			"slug": "heading-ids",
			"text": "Heading IDs"
		},
		{
			"depth": 3,
			"slug": "sticky-positioning",
			"text": "Sticky positioning"
		},
		{
			"depth": 2,
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/table-of-contents.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/table-of-contents.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/table-of-contents.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
