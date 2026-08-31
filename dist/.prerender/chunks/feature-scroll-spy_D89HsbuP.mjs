import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/FeatureScrollSpy.astro
createAstro("https://example.com");
var $$FeatureScrollSpy = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FeatureScrollSpy;
	const { items, tocLabel = "On this page", ariaLabel = "Section navigation", class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section data-scrollspy${addAttribute(ariaLabel, "aria-label")}${addAttribute(["relative", className], "class:list")}> <div class="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">  <aside class="md:col-span-4"> <div class="md:sticky md:top-24"> <h3 class="mb-3 text-xs font-semibold uppercase tracking-wider text-fg-subtle"> ${tocLabel} </h3> <nav${addAttribute(ariaLabel, "aria-label")}> <ul class="flex flex-col"> ${items.map((item, i) => renderTemplate`<li> <a${addAttribute(`#${item.id}`, "href")} data-scrollspy-link${addAttribute(item.id, "data-target")}${addAttribute(i === 0 ? "true" : "false", "data-active")} class="flex items-baseline gap-3 border-l-2 border-stroke px-4 py-2 text-sm text-fg-muted transition hover:text-fg focus-visible:text-fg outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas data-[active=true]:border-fg data-[active=true]:text-fg"> ${item.eyebrow && renderTemplate`<span class="text-xs text-fg-subtle tabular-nums shrink-0"> ${item.eyebrow} </span>`} <span>${item.label}</span> </a> </li>`)} </ul> </nav> </div> </aside>  <div data-scrollspy-content class="md:col-span-8 flex flex-col gap-24"> ${renderSlot($$result, $$slots["default"])} </div> </div> </section> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/FeatureScrollSpy.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/FeatureScrollSpy.astro", void 0);
//#endregion
//#region src/content/components/feature-scroll-spy.mdx
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
			"A long-form feature or capability section: a ",
			createVNode(_components.strong, { children: "sticky, data-driven table of contents" }),
			" on the left, and a column of scrolling content panels on the right. As the reader scrolls, the TOC entry for the panel currently in view is highlighted; clicking an entry smooth-scrolls to that panel."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The TOC is driven by the ",
			createVNode(_components.code, { children: "items" }),
			" prop (so it stays predictable and accessible), while the panels themselves are a plain ",
			createVNode(_components.code, { children: "<slot />" }),
			" — put whatever markup you like in there. The only contract is that ",
			createVNode(_components.strong, { children: [
				"each top-level panel carries an ",
				createVNode(_components.code, { children: "id" }),
				" matching one of the ",
				createVNode(_components.code, { children: "items" })
			] }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Sticky TOC + panels",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full",
				children: createVNode($$FeatureScrollSpy, {
					tocLabel: "Capabilities",
					ariaLabel: "Capability navigation",
					items: [
						{
							id: "demo-build",
							label: "Build",
							eyebrow: "01"
						},
						{
							id: "demo-network",
							label: "Network",
							eyebrow: "02"
						},
						{
							id: "demo-scale",
							label: "Scale",
							eyebrow: "03"
						}
					],
					children: [
						createVNode("article", {
							id: "demo-build",
							class: "border border-stroke p-6",
							children: [createVNode("h4", {
								class: "h6",
								children: "Build, automatically"
							}), createVNode("p", {
								class: "mt-2 text-body-md text-fg-muted",
								children: "Source in, production image out — no pipeline to maintain."
							})]
						}),
						createVNode("article", {
							id: "demo-network",
							class: "border border-stroke p-6",
							children: [createVNode("h4", {
								class: "h6",
								children: "The network attaches at startup"
							}), createVNode("p", {
								class: "mt-2 text-body-md text-fg-muted",
								children: "A private network is constructed before the first request lands."
							})]
						}),
						createVNode("article", {
							id: "demo-scale",
							class: "border border-stroke p-6",
							children: [createVNode("h4", {
								class: "h6",
								children: "Scale on real load"
							}), createVNode("p", {
								class: "mt-2 text-body-md text-fg-muted",
								children: "No thresholds to configure, no capacity to pre-provision."
							})]
						})
					]
				})
			})
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The active-state highlight tracks ",
			createVNode(_components.strong, { children: "page" }),
			" scroll, so it reads as static inside this framed preview — scroll the page itself to watch it move."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "items",
				type: "Item[]",
				required: true,
				description: "Drives the TOC. Each id must match an id on a slotted panel."
			},
			{
				name: "tocLabel",
				type: "string",
				default: "\"On this page\"",
				description: "Small heading above the TOC list."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Section navigation\"",
				description: "Accessible name for both the <section> and the TOC <nav>."
			},
			{
				name: "class",
				type: "string",
				default: "\"\"",
				description: "Additional classes on the wrapping <section>."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The ",
			createVNode(_components.code, { children: "Item" }),
			" shape:"
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
			"data-language": "ts",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "type"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Item"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
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
							children: "  id"
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
							children: ";       "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// anchor target — must match an id on the slotted content"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  label"
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
							children: ";    "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// text shown in the TOC"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  eyebrow"
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
							style: { color: "#6A737D" },
							children: "// optional small prefix, e.g. \"01\" or \"Step 1\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "};"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"A 12-column grid at ",
			createVNode(_components.code, { children: "md" }),
			" and up: the TOC ",
			createVNode(_components.code, { children: "<aside>" }),
			" takes 4 columns and is ",
			createVNode(_components.code, { children: "sticky top-24" }),
			"; the content column takes 8 and stacks its panels with ",
			createVNode(_components.code, { children: "gap-24" }),
			". Below ",
			createVNode(_components.code, { children: "md" }),
			" the grid collapses to one column, so the TOC sits above the content as a plain jump-list and nothing is sticky."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "scroll-spy",
			children: "Scroll spy"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"An ",
			createVNode(_components.code, { children: "IntersectionObserver" }),
			" watches every resolved panel with an ",
			createVNode(_components.strong, { children: "active band" }),
			" in the upper third of the viewport:"
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
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: [
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "{ "
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "rootMargin"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ": "
					}),
					createVNode(_components.span, {
						style: { color: "#9ECBFF" },
						children: "\"-25% 0px -65% 0px\""
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ", "
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "threshold"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ": "
					}),
					createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "0"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: " }"
					})
				]
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"A panel becomes active as its top crosses into that band. Tall panels and fast scrolls can leave several panels intersecting at once, so the callback sorts the intersecting entries by ",
			createVNode(_components.code, { children: "Math.abs(boundingClientRect.top)" }),
			" and picks the one nearest the band’s top edge. The winner’s TOC link gets ",
			createVNode(_components.code, { children: "data-active=\"true\"" }),
			"; every other link is set to ",
			createVNode(_components.code, { children: "\"false\"" }),
			", and the styling hangs off ",
			createVNode(_components.code, { children: "data-[active=true]:" }),
			" variants."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "click-to-scroll",
			children: "Click-to-scroll"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"TOC clicks are intercepted rather than left to native anchor behavior, so the component can smooth-scroll ",
			createVNode(_components.strong, { children: "without" }),
			" setting a global ",
			createVNode(_components.code, { children: "html { scroll-behavior: smooth }" }),
			" that would affect every other scroll on the page. After scrolling it calls ",
			createVNode(_components.code, { children: "history.replaceState" }),
			" so the anchor shows in the URL and stays shareable — ",
			createVNode(_components.code, { children: "replaceState" }),
			", not ",
			createVNode(_components.code, { children: "pushState" }),
			", so browser-back doesn’t have to walk through every section the reader clicked."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "anchor-offset",
			children: "Anchor offset"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"A small ",
			createVNode(_components.code, { children: "is:global" }),
			" block gives any direct child of the content area that has an ",
			createVNode(_components.code, { children: "id" }),
			" a ",
			createVNode(_components.code, { children: "scroll-margin-top: 6rem" }),
			", so anchor jumps don’t slide under the fixed nav. It’s global (namespaced under ",
			createVNode(_components.code, { children: "[data-scrollspy-content]" }),
			") because the panels are rendered by the caller, not by this component, and scoped styles wouldn’t reach them."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "drift-tolerance",
			children: "Drift tolerance"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"TOC targets are resolved to DOM elements once at init. An ",
			createVNode(_components.code, { children: "item" }),
			" whose ",
			createVNode(_components.code, { children: "id" }),
			" has no matching panel is ",
			createVNode(_components.strong, { children: "skipped silently" }),
			" rather than throwing, so the component keeps working while ",
			createVNode(_components.code, { children: "items" }),
			" and slot content are out of sync mid-edit. The flip side: a typo’d ",
			createVNode(_components.code, { children: "id" }),
			" fails quietly — if an entry never highlights, check that its ",
			createVNode(_components.code, { children: "id" }),
			" matches."
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
				"The wrapper is a ",
				createVNode(_components.code, { children: "<section>" }),
				" with ",
				createVNode(_components.code, { children: "aria-label" }),
				", and the TOC is a ",
				createVNode(_components.code, { children: "<nav>" }),
				" with the same label, so both landmarks are distinguishable."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"TOC entries are real ",
				createVNode(_components.code, { children: "<a href=\"#…\">" }),
				" links — they work as jump links with JS disabled, and the first item renders with ",
				createVNode(_components.code, { children: "data-active=\"true\"" }),
				" so the list is never blank before hydration."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Full focus ring on every entry (",
				createVNode(_components.code, { children: "focus-visible:ring-2 ring-focus ring-offset-2 ring-offset-canvas" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }),
				" switches click-scrolling from ",
				createVNode(_components.code, { children: "smooth" }),
				" to ",
				createVNode(_components.code, { children: "auto" }),
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
							children: " SectionMain "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/SectionMain.astro\""
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
							children: " FeatureScrollSpy "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/FeatureScrollSpy.astro\""
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
							children: " features"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ["
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  { id: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"workflows\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Real-time workflows\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", eyebrow: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"01\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " },"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  { id: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lifecycle\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ",  label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Data lifecycle\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ",     eyebrow: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"02\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " },"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  { id: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"schema\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ",     label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Schema-driven\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ",      eyebrow: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"03\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " },"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "];"
					})
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
							children: "\"sm\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " contentPadding"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"none\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " contentClass"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"gap-12 px-4 lg:px-10\""
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
							children: "FeatureScrollSpy"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " tocLabel"
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
							style: { color: "#B392F0" },
							children: " ariaLabel"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Feature navigation\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={features}>"
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
							children: "article"
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
							children: "\"workflows\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "article"
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
							children: "\"lifecycle\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "article"
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
							children: "\"schema\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
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
							children: "  </"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "FeatureScrollSpy"
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
							children: "SectionMain"
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
			"Build the ",
			createVNode(_components.code, { children: "items" }),
			" array from the same source as the panels so the two can’t drift:"
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
				children: [
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "const tocItems = features.map((f) => ({ "
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "id"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ": f.key, "
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "label"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ": f.tab }));"
					})
				]
			}) })
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
				createVNode(_components.strong, { children: "Panels are yours." }),
				" The component owns the TOC, the grid and the spy; it makes no assumptions about panel markup. Cards, tables, media, nested grids — all fine, as long as the top-level element carries the ",
				createVNode(_components.code, { children: "id" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: ["Wrap it in ", createVNode(_components.code, { children: "SectionMain" })] }),
				" for the page’s standard centering and rhythm (STANDARDS §5.0). Use ",
				createVNode(_components.code, { children: "contentPadding=\"none\"" }),
				" if your panels manage their own edge padding."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Sticky offset assumes a ~6rem nav." }),
				" ",
				createVNode(_components.code, { children: "md:top-24" }),
				" on the TOC and the ",
				createVNode(_components.code, { children: "6rem" }),
				" ",
				createVNode(_components.code, { children: "scroll-margin-top" }),
				" are tuned to the starter’s nav height — retune both together if a project’s nav is taller, or the TOC will sit under it and anchors will land short."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Three to six items is the sweet spot." }), " The TOC is sticky but not scrollable, so a long list can overflow the viewport on short screens."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Known limitation — no view-transition re-init." }),
				" The script runs once at module evaluation; it has no ",
				createVNode(_components.code, { children: "data-script-initialized" }),
				" guard and no ",
				createVNode(_components.code, { children: "astro:page-load" }),
				" listener, so it won’t re-wire after a client-side view transition. This is inconsistent with the §5.6 standard every other interactive component in the starter follows, and is worth fixing when the component is next touched."
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
	"title": "FeatureScrollSpy",
	"description": "Sticky table-of-contents beside scrolling content panels — the TOC highlights whichever panel is in view and scrolls to it on click.",
	"category": "pattern",
	"order": 62,
	"sourceFile": "src/components/FeatureScrollSpy.astro",
	"status": "stable",
	"related": [
		"FlowSteps",
		"TableOfContents",
		"SectionMain"
	]
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
			"depth": 3,
			"slug": "layout",
			"text": "Layout"
		},
		{
			"depth": 3,
			"slug": "scroll-spy",
			"text": "Scroll spy"
		},
		{
			"depth": 3,
			"slug": "click-to-scroll",
			"text": "Click-to-scroll"
		},
		{
			"depth": 3,
			"slug": "anchor-offset",
			"text": "Anchor offset"
		},
		{
			"depth": 3,
			"slug": "drift-tolerance",
			"text": "Drift tolerance"
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
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/feature-scroll-spy.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/feature-scroll-spy.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/feature-scroll-spy.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
