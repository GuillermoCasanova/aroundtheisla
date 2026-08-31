import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Search.astro
createAstro("https://example.com");
var $$Search = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Search;
	const { targetSelector, groupSelector, emptySelector, placeholder = "Search…", label = "Search", labelHidden = true, id, value = "", debounce = 80, minScore = .08, autofocus = false, class: className } = Astro.props;
	const inputId = id ?? `search-${Math.random().toString(36).slice(2, 10)}`;
	return renderTemplate`${maybeRenderHead($$result)}<div data-search="component"${addAttribute(targetSelector, "data-target-selector")}${addAttribute(groupSelector, "data-group-selector")}${addAttribute(emptySelector, "data-empty-selector")}${addAttribute(debounce, "data-debounce")}${addAttribute(minScore, "data-min-score")}${addAttribute(["search", className], "class:list")}> <label${addAttribute(inputId, "for")}${addAttribute(["search__label", labelHidden && "sr-only"], "class:list")}> ${label} </label> <div class="search__field"> <svg class="search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <circle cx="11" cy="11" r="7"></circle> <path d="m21 21-4.3-4.3"></path> </svg> <input${addAttribute(inputId, "id")} type="search" class="search__input"${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"${addAttribute(autofocus, "autofocus")}${addAttribute(emptySelector ? void 0 : void 0, "aria-controls")}> <button type="button" class="search__clear" data-search-clear aria-label="Clear search" hidden> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M18 6 6 18M6 6l12 12"></path> </svg> </button> </div> <p class="search__status sr-only" role="status" aria-live="polite" data-search-status></p> </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Search.astro", void 0);
//#endregion
//#region src/content/components/search.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		h2: "h2",
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
		"\n",
		createVNode(_components.p, { children: [
			"Lightweight client-side search. Drop the input above any list of items, point it at them with a CSS selector, and the script hides anything that doesn’t match the query. Matching is fuzzy (subsequence) with bonuses for prefix matches and word-boundary hits, so ",
			createVNode(_components.code, { children: "\"btn\"" }),
			" finds ",
			createVNode(_components.strong, { children: "B" }),
			"u",
			createVNode(_components.strong, { children: "t" }),
			"to",
			createVNode(_components.strong, { children: "n" }),
			", ",
			createVNode(_components.code, { children: "\"drp\"" }),
			" finds ",
			createVNode(_components.strong, { children: "D" }),
			"ropdown, etc."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"It’s wired into the live ",
			createVNode(_components.a, {
				href: "/components/",
				children: "Components index"
			}),
			" at the top of the page — try it there to see fuzzy scoring against this exact list."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The sample below filters the four cards underneath. Try ",
			createVNode(_components.code, { children: "\"act\"" }),
			" (active), ",
			createVNode(_components.code, { children: "\"err\"" }),
			" (errored), or ",
			createVNode(_components.code, { children: "\"sub\"" }),
			" (subscribed)."
		] }),
		"\n",
		createVNode($$Preview, {
			label: "Filters real DOM nodes via selector",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full",
				children: [
					createVNode($$Search, {
						class: "mb-4",
						targetSelector: "[data-demo-search-item]",
						groupSelector: "[data-demo-search-group]",
						emptySelector: "[data-demo-search-empty]",
						placeholder: "Search statuses…"
					}),
					createVNode("ul", {
						"data-demo-search-group": true,
						class: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							createVNode("li", {
								"data-demo-search-item": true,
								"data-search-text": "Active subscribed paying customer",
								class: "border border-stroke bg-panel p-4",
								children: [createVNode("h4", {
									class: "text-sm font-semibold",
									children: "Active"
								}), createVNode("p", {
									class: "text-xs text-fg-muted mt-1",
									children: "Subscribed customer"
								})]
							}),
							createVNode("li", {
								"data-demo-search-item": true,
								"data-search-text": "Trialing free trial signup",
								class: "border border-stroke bg-panel p-4",
								children: [createVNode("h4", {
									class: "text-sm font-semibold",
									children: "Trialing"
								}), createVNode("p", {
									class: "text-xs text-fg-muted mt-1",
									children: "Free trial signup"
								})]
							}),
							createVNode("li", {
								"data-demo-search-item": true,
								"data-search-text": "Errored failed payment dunning",
								class: "border border-stroke bg-panel p-4",
								children: [createVNode("h4", {
									class: "text-sm font-semibold",
									children: "Errored"
								}), createVNode("p", {
									class: "text-xs text-fg-muted mt-1",
									children: "Failed payment"
								})]
							}),
							createVNode("li", {
								"data-demo-search-item": true,
								"data-search-text": "Cancelled churned customer",
								class: "border border-stroke bg-panel p-4",
								children: [createVNode("h4", {
									class: "text-sm font-semibold",
									children: "Cancelled"
								}), createVNode("p", {
									class: "text-xs text-fg-muted mt-1",
									children: "Churned customer"
								})]
							})
						]
					}),
					createVNode("p", {
						"data-demo-search-empty": true,
						hidden: true,
						class: "mt-4 text-center text-sm text-fg-muted",
						children: "No statuses match."
					})
				]
			})
		}),
		"\n",
		createVNode(_components.p, { children: [
			"(The preview uses ",
			createVNode(_components.code, { children: "data-demo-search-*" }),
			" attributes so its filter doesn’t interfere with the page’s own search wiring.)"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "targetSelector",
				type: "string",
				required: true,
				description: "CSS selector for items to filter. Each match is hidden via the `hidden` attribute when it doesn't match."
			},
			{
				name: "groupSelector",
				type: "string",
				description: "CSS selector for group containers — they get `hidden` when all of their items are hidden."
			},
			{
				name: "emptySelector",
				type: "string",
				description: "CSS selector for a 'no results' element to show when the query produces zero matches."
			},
			{
				name: "placeholder",
				type: "string",
				default: "\"Search…\"",
				description: "Input placeholder."
			},
			{
				name: "label",
				type: "string",
				default: "\"Search\"",
				description: "Accessible label (visually hidden by default)."
			},
			{
				name: "labelHidden",
				type: "boolean",
				default: "true",
				description: "Visually hide the label. It stays for screen readers."
			},
			{
				name: "id",
				type: "string",
				description: "Stable input id. Auto-generated otherwise."
			},
			{
				name: "value",
				type: "string",
				default: "\"\"",
				description: "Initial query."
			},
			{
				name: "debounce",
				type: "number",
				default: "80",
				description: "Debounce in ms between input and filter."
			},
			{
				name: "minScore",
				type: "number",
				default: "0.08",
				description: "Minimum score to keep an item visible. Lower = looser matching. Default filters sparse cross-word coincidences while keeping tight fuzzy matches; raise toward 0.7 to require substring matches only."
			},
			{
				name: "autofocus",
				type: "boolean",
				default: "false",
				description: "Focus the input on mount."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "wiring-it-to-a-list",
			children: "Wiring it to a list"
		}),
		"\n",
		createVNode(_components.p, { children: "The component is decoupled from the list it filters — you mark items with attributes and pass selectors. Three pieces:" }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Items" }),
				" carry ",
				createVNode(_components.code, { children: "data-search-item" }),
				" and (optionally) ",
				createVNode(_components.code, { children: "data-search-text" }),
				". If ",
				createVNode(_components.code, { children: "data-search-text" }),
				" is omitted, the item’s ",
				createVNode(_components.code, { children: "textContent" }),
				" is used. Custom text lets you index hidden facets (category, tags, alternate names)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Groups" }),
				" (optional) wrap items and carry the group selector (e.g. ",
				createVNode(_components.code, { children: "data-search-group" }),
				"). When every item inside a group is hidden, the group is hidden too — so empty section headers don’t linger."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Empty state" }), " (optional) is any element marked with the empty selector — hidden by default, revealed when zero items match."] }),
			"\n"
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
							children: " Search "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Search.astro\""
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "Search"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  targetSelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"[data-search-item]\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  groupSelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"[data-search-group]\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  emptySelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"[data-search-empty]\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  placeholder"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Search…\""
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
							children: " data-search-group"
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
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Primitives</"
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
							children: "ul"
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
							children: "li"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-search-item"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-search-text"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Button primary action CTA\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "li"
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
							children: "li"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-search-item"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-search-text"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Tag chip pill label\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">…</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "li"
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
							children: "ul"
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
							style: { color: "#85E89D" },
							children: "section"
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
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-search-empty"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " hidden"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">No results.</"
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
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "wiring-to-a-content-collection",
			children: "Wiring to a content collection"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Items rendered from a content collection just need their text concatenated into ",
			createVNode(_components.code, { children: "data-search-text" }),
			". The full setup used by the live ",
			createVNode(_components.a, {
				href: "/components/",
				children: "Components index"
			}),
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
							children: " { getCollection } "
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
							children: " Search "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Search.astro\""
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
							children: " all"
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
							children: " getCollection"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"components\""
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
							style: { color: "#79B8FF" },
							children: " groups"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ["
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"primitive\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"block\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"pattern\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "]."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "map"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "cat"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ({"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  category: cat,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  items: all."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "filter"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "c"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " c.data.category "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "==="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " cat),"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}));"
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
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "Search"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  targetSelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"[data-search-item]\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  groupSelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"[data-search-group]\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  emptySelector"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"[data-search-empty]\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  placeholder"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Search components…\""
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
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{groups."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "map"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "group"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
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
							children: "section"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-search-group"
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
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{group.category}</"
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
							children: "ul"
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
							children: "      {group.items."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "map"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "item"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        <"
					}), createVNode(_components.span, {
						style: { color: "#85E89D" },
						children: "li"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "          data-search-item"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "          data-search-text"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "item"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "data"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "title"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "} ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "item"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "data"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "description"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "} ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "item"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "data"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "category"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        >"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "          <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "a"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " href"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`/components/${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "item"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "id"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}/`"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}>"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "            <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h3"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{item.data.title}</"
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
							children: "            <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{item.data.description}</"
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
							children: "          </"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "a"
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
							children: "        </"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "li"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      ))}"
					})
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
							children: "ul"
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
							children: "section"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "))}"
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
							children: " data-search-empty"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " hidden"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">No components match.</"
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
		createVNode(_components.p, { children: "Same shape works for any collection — blog tags, FAQ entries, changelog items." }),
		"\n",
		createVNode(_components.h2, {
			id: "scoring",
			children: "Scoring"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"The fuzzy scorer returns a value in ",
			createVNode(_components.code, { children: "[0..1]" }),
			":"
		] }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Score" }),
					"\n",
					createVNode(_components.th, { children: "Meaning" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "1.0" }) }),
					"\n",
					createVNode(_components.td, { children: "Query matches at the start of the target string." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "0.9" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Query matches a word boundary (after space, ",
						createVNode(_components.code, { children: "-" }),
						", ",
						createVNode(_components.code, { children: "_" }),
						", ",
						createVNode(_components.code, { children: "/" }),
						")."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "0.7" }) }),
					"\n",
					createVNode(_components.td, { children: "Query matches mid-word as a contiguous substring." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "0–0.6" }) }),
					"\n",
					createVNode(_components.td, { children: "Subsequence match — query characters in order, with gaps allowed." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "0" }) }),
					"\n",
					createVNode(_components.td, { children: "At least one query character couldn’t be matched." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Items pass when their score is greater than ",
			createVNode(_components.code, { children: "minScore" }),
			". With the default ",
			createVNode(_components.code, { children: "minScore=0.01" }),
			" everything that’s at least a subsequence match shows up; raise it to ",
			createVNode(_components.code, { children: "0.7" }),
			" if you only want substring matches."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "events",
			children: "Events"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Each filter pass dispatches a ",
			createVNode(_components.code, { children: "search:filter" }),
			" event on the wrapper:"
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
							style: { color: "#E1E4E8" },
							children: "document."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "addEventListener"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"search:filter\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", ("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "e"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
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
							style: { color: "#E1E4E8" },
							children: "  console."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "log"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(e.detail);"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "  // { query: \"btn\", visible: 1, total: 47 }"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "});"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "Use it to update a result counter, log analytics, or persist the query to the URL." }),
		"\n",
		createVNode(_components.h2, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Real ",
				createVNode(_components.code, { children: "<input type=\"search\">" }),
				" — gets ",
				createVNode(_components.code, { children: "Cmd/Ctrl+F" }),
				"-style browser affordances and supports the native Escape-clear behavior."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "<label>" }), " is visually hidden by default but always present — screen readers announce the input’s purpose."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Polite ",
				createVNode(_components.code, { children: "aria-live" }),
				" status region announces ",
				createVNode(_components.code, { children: "\"N results for 'query'\"" }),
				" after each filter pass, so screen-reader users know the list shrank."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Clear button is a real ",
				createVNode(_components.code, { children: "<button>" }),
				" with ",
				createVNode(_components.code, { children: "aria-label=\"Clear search\"" }),
				". Hidden when the input is empty, so the tab order isn’t cluttered."
			] }),
			"\n",
			createVNode(_components.li, { children: "The browser’s built-in WebKit clear UI is suppressed in CSS so we don’t double up." }),
			"\n",
			createVNode(_components.li, { children: [
				"Items are hidden via the ",
				createVNode(_components.code, { children: "hidden" }),
				" attribute, which removes them from both the visual flow and the accessibility tree."
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
			createVNode(_components.li, { children: "Filtering happens entirely client-side, so the full list must be rendered server-side first. For very large lists (thousands of items) consider a server-rendered search route instead — fuzzy matching across thousands of nodes per keystroke will lag." }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "data-search-text" }), " is plain text — no HTML. Concatenate whatever facets you want indexed."] }),
			"\n",
			createVNode(_components.li, { children: "Hidden items remain in the DOM, so deep-linking and “view source” still work as expected." }),
			"\n",
			createVNode(_components.li, { children: [
				"The scorer is deliberately small (≈40 lines) and dependency-free. If you outgrow it (typo tolerance, weighted fields, multi-word AND), swap to ",
				createVNode(_components.a, {
					href: "https://fusejs.io/",
					children: "Fuse.js"
				}),
				" or ",
				createVNode(_components.a, {
					href: "https://lucaong.github.io/minisearch/",
					children: "MiniSearch"
				}),
				" and feed results back via ",
				createVNode(_components.code, { children: "hidden" }),
				" toggles using the same selector contract."
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
	"title": "Search",
	"description": "Type-to-filter input with a fuzzy subsequence scorer. Filters DOM items in place — no re-rendering, no virtual list, no client framework.",
	"category": "pattern",
	"order": 55,
	"sourceFile": "src/components/Search.astro",
	"status": "stable",
	"related": [
		"FilterBar",
		"ComboboxGrouped",
		"Pagination"
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
			"slug": "wiring-it-to-a-list",
			"text": "Wiring it to a list"
		},
		{
			"depth": 2,
			"slug": "wiring-to-a-content-collection",
			"text": "Wiring to a content collection"
		},
		{
			"depth": 2,
			"slug": "scoring",
			"text": "Scoring"
		},
		{
			"depth": 2,
			"slug": "events",
			"text": "Events"
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
var url = "src/content/components/search.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/search.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/search.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
