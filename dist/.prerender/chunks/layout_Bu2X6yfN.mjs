import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/layout.mdx
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
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"The base HTML layout wrapper for every page. Sets up ",
			createVNode(_components.code, { children: "<html>" }),
			", ",
			createVNode(_components.code, { children: "<head>" }),
			", and ",
			createVNode(_components.code, { children: "<body>" }),
			", loads global styles and fonts, includes the navigation, and optionally injects Google Analytics via Partytown."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "title",
				type: "string",
				default: "\"Astro Playground\"",
				description: "Page <title> tag."
			},
			{
				name: "theme",
				type: "\"light\" | \"dark\" | \"brand\"",
				default: "\"light\"",
				description: "Sets the `data-theme` attribute on `<html>`. Flips every CSS token (canvas, fg, stroke, etc.) for the whole page — including the nav and announcement bar."
			},
			{
				name: "skipLoader",
				type: "boolean",
				default: "false",
				description: "Omit the intro Loader overlay on this page."
			},
			{
				name: "hideFooter",
				type: "boolean",
				default: "false",
				description: "Omit the site copyright footer on this page."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "head",
			children: createVNode(_components.code, { children: "<head>" })
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Imports the Archivo Variable font via ",
				createVNode(_components.code, { children: "@fontsource-variable/archivo" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Imports ",
				createVNode(_components.code, { children: "global.css" }),
				" (all theme tokens, utilities, and base styles)."
			] }),
			"\n",
			createVNode(_components.li, { children: "Sets charset, viewport, favicon, and generator meta tags." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "google-analytics-optional",
			children: "Google Analytics (optional)"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Reads ",
				createVNode(_components.code, { children: "PUBLIC_GTAG_ID" }),
				" from environment variables."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"If set, loads the gtag script with ",
				createVNode(_components.code, { children: "type=\"text/partytown\"" }),
				" — this offloads the analytics script to a web worker via ",
				createVNode(_components.code, { children: "@astrojs/partytown" }),
				", keeping the main thread clean."
			] }),
			"\n",
			createVNode(_components.li, { children: "If not set, no tracking code runs at all." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "body",
			children: createVNode(_components.code, { children: "<body>" })
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Boots ",
				createVNode(_components.code, { children: "<SmoothScroll />" }),
				" (Locomotive Scroll v5 / Lenis) on every page, then the intro ",
				createVNode(_components.code, { children: "<Loader />" }),
				" (unless ",
				createVNode(_components.code, { children: "skipLoader" }),
				"), then ",
				createVNode(_components.code, { children: "<Nav />" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Includes a ",
				createVNode(_components.strong, { children: "skip-to-content" }),
				" link (",
				createVNode(_components.code, { children: "<a href=\"#main\">" }),
				") — visually hidden by default, becomes visible on focus for keyboard users."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Page content is injected via ",
				createVNode(_components.code, { children: "<slot />" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Renders ",
				createVNode(_components.code, { children: "<Footer />" }),
				" after the slot unless ",
				createVNode(_components.code, { children: "hideFooter" }),
				" is set."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Ends with ",
				createVNode(_components.code, { children: "<PageTransition />" }),
				" — a covering fade overlay between same-origin navigations, not a client router."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "astro-page",
			children: "Astro page"
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
							children: "\"Features\""
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
							children: "    {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* page content */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
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
		createVNode(_components.h3, {
			id: "astro-page-with-dark-theme",
			children: "Astro page with dark theme"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Pass ",
			createVNode(_components.code, { children: "theme=\"dark\"" }),
			" as a prop. The attribute lands on ",
			createVNode(_components.code, { children: "<html>" }),
			", so every component on the page — including the nav, announcement bar, and any ",
			createVNode(_components.code, { children: "SectionMain" }),
			" — picks up dark tokens automatically."
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
							children: "\"Manifesto\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " theme"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"dark\""
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
							children: "    {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* renders against the dark token set */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
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
		createVNode(_components.h3, {
			id: "mdx-page",
			children: "MDX page"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: ".mdx" }),
			" files in ",
			createVNode(_components.code, { children: "src/pages/" }),
			" can use ",
			createVNode(_components.code, { children: "Layout" }),
			" directly via the ",
			createVNode(_components.code, { children: "layout:" }),
			" frontmatter key. All other frontmatter keys are forwarded as props — including ",
			createVNode(_components.code, { children: "title" }),
			" and ",
			createVNode(_components.code, { children: "theme" }),
			"."
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
			"data-language": "mdx",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: {
							color: "#79B8FF",
							fontWeight: "bold"
						},
						children: "---"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "layout: ../layouts/Layout.astro"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "title: Brand"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "theme: dark"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: {
							color: "#79B8FF",
							fontWeight: "bold"
						},
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
							children: "import Grainient from \""
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "@"
						}),
						createVNode(_components.span, {
							style: {
								color: "#DBEDFF",
								textDecoration: "underline"
							},
							children: "components/Grainient"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ".astro\";"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: {
							color: "#79B8FF",
							fontWeight: "bold"
						},
						children: "# Brand"
					})
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "The whole page is dark — no per-section overrides needed."
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
							children: "<div class=\"relative h-"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "["
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "50vh"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "]"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "\">"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  <Grainient />"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "</div>"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The same works for any ",
			createVNode(_components.code, { children: ".md" }),
			"/",
			createVNode(_components.code, { children: ".mdx" }),
			" page — blog posts, changelog entries, marketing one-offs."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "per-section-theme-island",
			children: "Per-section theme island"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"If most of the page is light but one section needs to flip (e.g. a dark “pricing” band on a light landing page), don’t change the layout — set ",
			createVNode(_components.code, { children: "data-theme" }),
			" on a wrapper around just that section. The token cascade handles the rest:"
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
							children: "\"Pricing\""
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
							children: "    {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* light by default */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
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
							children: "\"lg\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* dark island */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
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
							style: { color: "#85E89D" },
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-theme"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"dark\""
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
							children: "      <"
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
							children: "        {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* fg / canvas / stroke all swap inside this wrapper */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      </"
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
							children: "    </"
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
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    {"
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "/* back to light */"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}"
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
							children: "\"lg\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
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
							children: "  </"
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
			"Valid theme values are ",
			createVNode(_components.code, { children: "light" }),
			", ",
			createVNode(_components.code, { children: "dark" }),
			", and ",
			createVNode(_components.code, { children: "brand" }),
			" — see ",
			createVNode(_components.code, { children: "src/styles/global.css" }),
			" for the token definitions of each."
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
				"The skip link targets ",
				createVNode(_components.code, { children: "#main" }),
				" — pages should include ",
				createVNode(_components.code, { children: "id=\"main\"" }),
				" on their ",
				createVNode(_components.code, { children: "<main>" }),
				" element."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The skip link sits ",
				createVNode(_components.strong, { children: "after" }),
				" ",
				createVNode(_components.code, { children: "<Nav />" }),
				" in the DOM, so it appears after the nav in tab order. Intentional — the nav’s own skip logic handles initial focus."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Google Analytics only loads when ",
				createVNode(_components.code, { children: "PUBLIC_GTAG_ID" }),
				" is set in ",
				createVNode(_components.code, { children: ".env" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "theme" }),
				" is read from either ",
				createVNode(_components.code, { children: "Astro.props.theme" }),
				" (Astro pages) or ",
				createVNode(_components.code, { children: "Astro.props.frontmatter.theme" }),
				" (MDX/Markdown pages with ",
				createVNode(_components.code, { children: "layout:" }),
				"), so the same prop works in both contexts."
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
	"title": "Layout",
	"description": "Base HTML layout — document shell, fonts, global styles, nav, optional Partytown'd Google Analytics.",
	"category": "layout",
	"order": 5,
	"sourceFile": "src/layouts/Layout.astro",
	"status": "stable",
	"related": [
		"Nav",
		"NavMega",
		"NavMorph",
		"SectionMain",
		"Footer",
		"Loader",
		"PageTransition",
		"SmoothScroll"
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
			"slug": "head",
			"text": "<head>"
		},
		{
			"depth": 3,
			"slug": "google-analytics-optional",
			"text": "Google Analytics (optional)"
		},
		{
			"depth": 3,
			"slug": "body",
			"text": "<body>"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 3,
			"slug": "astro-page",
			"text": "Astro page"
		},
		{
			"depth": 3,
			"slug": "astro-page-with-dark-theme",
			"text": "Astro page with dark theme"
		},
		{
			"depth": 3,
			"slug": "mdx-page",
			"text": "MDX page"
		},
		{
			"depth": 3,
			"slug": "per-section-theme-island",
			"text": "Per-section theme island"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/layout.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/layout.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/layout.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
