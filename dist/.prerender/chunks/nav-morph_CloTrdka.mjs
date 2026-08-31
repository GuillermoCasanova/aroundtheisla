import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
//#region src/content/components/nav-morph.mdx
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
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A navigation header with a single shared dropdown panel that ",
			createVNode(_components.strong, { children: "morphs" }),
			" between triggers — width, height, horizontal position, content, and indicator arrow all animate when you hover from one dropdown to another. Models the shadcn / Radix NavigationMenu “viewport” pattern. Drop-in replacement for ",
			createVNode(_components.code, { children: "Nav.astro" }),
			": same slot (",
			createVNode(_components.code, { children: "announcement" }),
			"), same layout, same scroll-aware bar, same mobile details/summary panel."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Use this when you have two or more dropdowns and want polished motion between them. Use ",
			createVNode(_components.code, { children: "Nav" }),
			" when the overhead isn’t justified."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "whats-different-from-nav",
			children: ["What’s different from ", createVNode(_components.code, { children: "Nav" })]
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Concern" }),
					"\n",
					createVNode(_components.th, { children: createVNode(_components.code, { children: "Nav" }) }),
					"\n",
					createVNode(_components.th, { children: createVNode(_components.code, { children: "NavMorph" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Dropdown panels" }),
					"\n",
					createVNode(_components.td, { children: "One per trigger (independent)" }),
					"\n",
					createVNode(_components.td, { children: "One shared panel, content swaps and resizes" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Trigger → trigger" }),
					"\n",
					createVNode(_components.td, { children: "Close → open (discrete)" }),
					"\n",
					createVNode(_components.td, { children: "Morph: width, height, translateX animate together" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Content stacking" }),
					"\n",
					createVNode(_components.td, { children: "Rendered inside each trigger’s wrapper" }),
					"\n",
					createVNode(_components.td, { children: "All contents stacked inside the shared viewport" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "Measurement" }),
					"\n",
					createVNode(_components.td, { children: "Not needed" }),
					"\n",
					createVNode(_components.td, { children: [
						createVNode(_components.code, { children: "scrollWidth" }),
						" / ",
						createVNode(_components.code, { children: "scrollHeight" }),
						" measured per content"
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "JS footprint" }),
					"\n",
					createVNode(_components.td, { children: "~140 lines" }),
					"\n",
					createVNode(_components.td, { children: "~190 lines" }),
					"\n"
				] }),
				"\n"
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
							children: " NavMorph "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/NavMorph.astro\""
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
							children: " AnnouncementBanner "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/AnnouncementBanner.astro\""
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
							children: "NavMorph"
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  <"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "AnnouncementBanner"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"announcement\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    href"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/series-a\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    class"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"bg-intent text-fg-on-intent text-sm\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  >"
					})
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
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "><"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "strong"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">New:</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "strong"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "> Announcing our Series A</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "span"
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
							style: { color: "#79B8FF" },
							children: "AnnouncementBanner"
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
							children: "NavMorph"
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
			"To switch the default Layout to use ",
			createVNode(_components.code, { children: "NavMorph" }),
			" instead of ",
			createVNode(_components.code, { children: "Nav" }),
			", change the import in ",
			createVNode(_components.code, { children: "src/layouts/Layout.astro" }),
			":"
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
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: createVNode(_components.span, {
					style: { color: "#E1E4E8" },
					children: "import Nav from \"../components/NavMorph.astro\";  // was: \"./Nav.astro\""
				})
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"No other layout changes needed — the component accepts the same ",
			createVNode(_components.code, { children: "announcement" }),
			" slot and renders the same bar chrome."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.p, { children: "Three things animate simultaneously when the caller moves hover from trigger A to trigger B:" }),
		"\n",
		createVNode(_components.h3, {
			id: "1-size",
			children: "1. Size"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The panel’s ",
			createVNode(_components.code, { children: "width" }),
			" and ",
			createVNode(_components.code, { children: "height" }),
			" are driven by CSS vars ",
			createVNode(_components.code, { children: "--panel-width" }),
			" and ",
			createVNode(_components.code, { children: "--panel-height" }),
			". On hover, the script:"
		] }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Measures the target content’s natural dimensions via ",
				createVNode(_components.code, { children: "scrollWidth" }),
				" / ",
				createVNode(_components.code, { children: "scrollHeight" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Writes the new values to the panel’s inline style." }),
			"\n",
			createVNode(_components.li, { children: [
				"CSS transitions ",
				createVNode(_components.code, { children: "width" }),
				" and ",
				createVNode(_components.code, { children: "height" }),
				" over 300ms with a cubic-bezier ease."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Contents are absolutely positioned inside the viewport, so they don’t contribute to the viewport’s intrinsic height (the viewport uses ",
			createVNode(_components.code, { children: "h-full" }),
			" to fill the panel). The ",
			createVNode(_components.code, { children: "overflow: hidden" }),
			" on the viewport crops content outside the current dimensions during the morph."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "2-horizontal-position",
			children: "2. Horizontal position"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The panel’s ",
			createVNode(_components.code, { children: "transform: translateX(var(--panel-x))" }),
			" moves the whole panel horizontally. The panel is a sibling of the bar inside ",
			createVNode(_components.code, { children: "<header>" }),
			", so its ",
			createVNode(_components.code, { children: "left: 0" }),
			" origin is the ",
			createVNode(_components.strong, { children: "header" }),
			", not the bar. Centering math reads the trigger center in header coordinates:"
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
			"data-language": "js",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " hdrRect"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " root."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "getBoundingClientRect"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "();        "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// the <header>"
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
							style: { color: "#79B8FF" },
							children: " trRect"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "  ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " trigger."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "getBoundingClientRect"
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
							style: { color: "#F97583" },
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " trCenter"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " trRect.left "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " hdrRect.left "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "+"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " trRect.width "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "/"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 2"
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
							children: "let"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " panelX "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " trCenter "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " contentWidth "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "/"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 2"
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
							style: { color: "#E1E4E8" },
							children: "panelX "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " Math."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "max"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "0"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", Math."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "min"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(panelX, hdrRect.width "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " contentWidth));"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "Clamping to the header’s width (not the bar’s) lets the panel bleed slightly past the bar’s own bounds if content is wider — usually desired, since the bar is a narrow pill in the middle of the header and mega panels want to extend." }),
		"\n",
		createVNode(_components.h3, {
			id: "3-content-crossfade",
			children: "3. Content crossfade"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"All dropdown contents are stacked inside the viewport with ",
			createVNode(_components.code, { children: "data-active=\"false\"" }),
			" by default (opacity 0, ",
			createVNode(_components.code, { children: "translateY(4px)" }),
			", ",
			createVNode(_components.code, { children: "visibility: hidden" }),
			"). Setting ",
			createVNode(_components.code, { children: "data-active=\"true\"" }),
			" on the target fades it in with a 4px Y-slide over 180ms; the previous active content fades back out."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "first-open-vs-morph",
			children: "First-open vs. morph"
		}),
		"\n",
		createVNode(_components.p, { children: "When the panel transitions from fully closed to open, the width/height transitions would otherwise animate from 0 → target size (the panel “unfurls”). To match shadcn’s instant-size-then-fade behavior, the script:" }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Adds a ",
				createVNode(_components.code, { children: ".no-size-transition" }),
				" class that disables the ",
				createVNode(_components.code, { children: "width" }),
				"/",
				createVNode(_components.code, { children: "height" }),
				"/",
				createVNode(_components.code, { children: "transform" }),
				" transitions."
			] }),
			"\n",
			createVNode(_components.li, { children: "Sets the CSS vars." }),
			"\n",
			createVNode(_components.li, { children: "Forces a reflow." }),
			"\n",
			createVNode(_components.li, { children: "Removes the class on the next frame." }),
			"\n",
			createVNode(_components.li, { children: [
				"Sets ",
				createVNode(_components.code, { children: "data-open=\"true\"" }),
				", which triggers the opacity fade."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "On subsequent trigger changes the class isn’t applied, so the size transitions run normally." }),
		"\n",
		createVNode(_components.h2, {
			id: "props--slots",
			children: "Props & slots"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Same contract as ",
			createVNode(_components.code, { children: "Nav" }),
			":"
		] }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Slot" }),
					"\n",
					createVNode(_components.th, { children: "Purpose" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "announcement" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Optional banner (AnnouncementBanner, a ",
						createVNode(_components.code, { children: "<div>" }),
						", etc.)"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Links, CTA, and mobile footer links are inline constants at the top of the component’s frontmatter — edit the file directly to change them, same as ",
			createVNode(_components.code, { children: "Nav" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "keyboard--accessibility",
			children: "Keyboard & accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Each trigger is a native ",
				createVNode(_components.code, { children: "<button type=\"button\">" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "ArrowDown on a trigger: opens the panel, moves focus to first link in the content." }),
			"\n",
			createVNode(_components.li, { children: "ArrowUp / ArrowDown / Home / End inside the panel: navigate links." }),
			"\n",
			createVNode(_components.li, { children: "Enter / Space on a trigger: toggles its panel." }),
			"\n",
			createVNode(_components.li, { children: "Escape: closes the panel and returns focus to the active trigger." }),
			"\n",
			createVNode(_components.li, { children: "Click outside the header: closes the panel." }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-haspopup=\"true\"" }),
				", ",
				createVNode(_components.code, { children: "aria-controls=\"nav-morph-panel\"" }),
				", ",
				createVNode(_components.code, { children: "aria-expanded" }),
				" on triggers."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "role=\"region\"" }),
				" with ",
				createVNode(_components.code, { children: "aria-label=\"Primary menu panel\"" }),
				" on the shared panel."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Chevron icon on trigger rotates 180° when ",
				createVNode(_components.code, { children: "aria-expanded=\"true\"" }),
				" (CSS-driven)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Panel, content, and arrow all respect ",
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				" — transitions are disabled and the crossfade becomes instant."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mobile",
			children: "Mobile"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Same as ",
			createVNode(_components.code, { children: "Nav" }),
			": the morph system is desktop-only (",
			createVNode(_components.code, { children: "md:block" }),
			" on the panel). Below the ",
			createVNode(_components.code, { children: "md" }),
			" breakpoint, the hamburger toggles a details/summary-based panel where mega and menu types expand in place. No animation costs on mobile."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "tradeoffs-vs-nav",
			children: ["Tradeoffs vs. ", createVNode(_components.code, { children: "Nav" })]
		}),
		"\n",
		createVNode(_components.p, { children: createVNode(_components.strong, { children: [
			"Choose ",
			createVNode(_components.code, { children: "NavMorph" }),
			" when:"
		] }) }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "You have two or more dropdowns." }),
			"\n",
			createVNode(_components.li, { children: "The design budget supports polished motion." }),
			"\n",
			createVNode(_components.li, { children: "Your dropdowns have different widths (mega vs. short menu) — the morph is especially satisfying here." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: createVNode(_components.strong, { children: [
			"Stay on ",
			createVNode(_components.code, { children: "Nav" }),
			" when:"
		] }) }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "You have one dropdown or none." }),
			"\n",
			createVNode(_components.li, { children: "You want the smallest possible JS footprint." }),
			"\n",
			createVNode(_components.li, { children: "You prefer a simpler mental model for future contributors." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					"The viewport needs ",
					createVNode(_components.code, { children: "h-full" }),
					"."
				] }),
				" Without it, the viewport collapses to 0 height (children are absolutely positioned) and ",
				createVNode(_components.code, { children: "overflow: hidden" }),
				" clips everything. Handled via the ",
				createVNode(_components.code, { children: "h-full" }),
				" Tailwind class in the component; don’t remove it if you ever rework the markup."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [
				"Content width comes from ",
				createVNode(_components.code, { children: "scrollWidth" }),
				"."
			] }), " The wider of the content’s children wins, including padding. If you add content wider than expected, the panel will size up to it — constrain via explicit widths on the content root if you need control."] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Clamp math is bar-local." }), " The panel is clamped to the nav bar’s width, not the viewport. If your bar is narrower than the largest content, you’ll get overflow. Either widen the bar or narrow the content."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Multiple instances." }),
				" The script scopes to ",
				createVNode(_components.code, { children: "[data-nav-morph]" }),
				" but the panel’s shared ID (",
				createVNode(_components.code, { children: "nav-morph-panel" }),
				") collides if you render two NavMorph instances on the same page. Realistically you’ll never have two headers, but worth knowing if you build a style-guide page."
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
			createVNode(_components.li, { children: "No live preview here — the nav needs full-page context (fixed positioning, page grid, header coordinates for the morph math). View the live site." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "NavMorph",
	"description": "Nav with a single shared dropdown panel that morphs in width, height, and position between triggers.",
	"category": "layout",
	"order": 22,
	"sourceFile": "src/components/NavMorph.astro",
	"status": "stable",
	"related": [
		"Nav",
		"NavMega",
		"AnnouncementBanner"
	]
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "whats-different-from-nav",
			"text": "What’s different from Nav"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "mechanism",
			"text": "Mechanism"
		},
		{
			"depth": 3,
			"slug": "1-size",
			"text": "1. Size"
		},
		{
			"depth": 3,
			"slug": "2-horizontal-position",
			"text": "2. Horizontal position"
		},
		{
			"depth": 3,
			"slug": "3-content-crossfade",
			"text": "3. Content crossfade"
		},
		{
			"depth": 3,
			"slug": "first-open-vs-morph",
			"text": "First-open vs. morph"
		},
		{
			"depth": 2,
			"slug": "props--slots",
			"text": "Props & slots"
		},
		{
			"depth": 2,
			"slug": "keyboard--accessibility",
			"text": "Keyboard & accessibility"
		},
		{
			"depth": 2,
			"slug": "mobile",
			"text": "Mobile"
		},
		{
			"depth": 2,
			"slug": "tradeoffs-vs-nav",
			"text": "Tradeoffs vs. Nav"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/nav-morph.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-morph.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/nav-morph.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
