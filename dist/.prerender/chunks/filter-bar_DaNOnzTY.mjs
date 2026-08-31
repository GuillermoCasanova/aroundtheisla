import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/FilterBar.astro
createAstro("https://example.com");
var $$FilterBar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FilterBar;
	const { group, options, allLabel = "All", showCounts = true, searchable = false, searchPlaceholder = "Search…", paramKey, queryParamKey, class: className = "" } = Astro.props;
	const param = paramKey ?? `filter-${group}`;
	const queryParam = queryParamKey ?? `q-${group}`;
	const totalCount = options.reduce((n, o) => n + (o.count ?? 0), 0);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["filter-bar flex flex-col gap-4 md:flex-row md:items-center md:justify-between", className], "class:list")}${addAttribute(group, "data-filter-bar")}${addAttribute(param, "data-filter-param")}${addAttribute(queryParam, "data-query-param")} data-astro-cid-2t5tmnod> <div class="flex flex-wrap items-center gap-2" role="toolbar"${addAttribute(`Filter ${group} by category`, "aria-label")} data-astro-cid-2t5tmnod> <button type="button" data-filter="all" aria-pressed="true" class="filter-btn is-active border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer" data-astro-cid-2t5tmnod> ${allLabel} ${showCounts && totalCount > 0 && renderTemplate`<span class="ml-2 opacity-60" data-astro-cid-2t5tmnod>(${totalCount})</span>`} </button> ${options.map((o) => renderTemplate`<button type="button"${addAttribute(o.value, "data-filter")} aria-pressed="false" class="filter-btn border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer" data-astro-cid-2t5tmnod> ${o.label} ${showCounts && typeof o.count === "number" && renderTemplate`<span class="ml-2 opacity-60" data-astro-cid-2t5tmnod>(${o.count})</span>`} </button>`)} </div> ${searchable && renderTemplate`<label class="relative block md:w-72" data-astro-cid-2t5tmnod> <span class="sr-only" data-astro-cid-2t5tmnod>${`Search ${group}`}</span> <input type="search" data-search-input${addAttribute(searchPlaceholder, "placeholder")} class="w-full border bg-transparent px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-current placeholder:opacity-50 focus:outline-none" data-astro-cid-2t5tmnod> </label>`} </div> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/FilterBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/FilterBar.astro", void 0);
//#endregion
//#region src/content/components/filter-bar.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
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
		createVNode(_components.p, { children: [
			"A reusable filter bar that drives category buttons + an optional search input. It is ",
			createVNode(_components.strong, { children: "content-agnostic" }),
			": it does not own the items it filters. Instead, items elsewhere in the DOM opt in via ",
			createVNode(_components.code, { children: "data-filter-group" }),
			" / ",
			createVNode(_components.code, { children: "data-filter-value" }),
			" (and an optional ",
			createVNode(_components.code, { children: "data-search" }),
			" haystack), and the bar shows/hides them. Category and search are AND-combined, and both are synced to the URL (",
			createVNode(_components.code, { children: "?filter-<group>=…&q-<group>=…" }),
			") so links and refreshes preserve state."
		] }),
		"\n",
		createVNode(_components.p, { children: "This is a good fit for blog/news lists, resource libraries, integration directories, case-study grids — anywhere a static or CMS-rendered list needs lightweight client-side filtering with no framework." }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Category filter — mocked blog post list",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full flex flex-col gap-6",
				children: [
					createVNode($$FilterBar, {
						group: "docs-blog",
						options: [
							{
								value: "Blog",
								label: "Blog",
								count: 3
							},
							{
								value: "Tutorial",
								label: "Tutorial",
								count: 2
							},
							{
								value: "Release",
								label: "Release",
								count: 1
							}
						]
					}),
					createVNode("ul", {
						class: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: [
							createVNode("li", {
								"data-filter-group": "docs-blog",
								"data-filter-value": "Blog",
								"data-search": "welcome to the blog astro",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Blog"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Welcome to the blog"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog",
								"data-filter-value": "Tutorial",
								"data-search": "building a filter bar tutorial",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Tutorial"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Building a filter bar"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog",
								"data-filter-value": "Release",
								"data-search": "v1.4 changelog release",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Release"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "v1.4 changelog"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog",
								"data-filter-value": "Blog",
								"data-search": "design tokens recap blog",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Blog"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Design tokens recap"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog",
								"data-filter-value": "Tutorial",
								"data-search": "island hydration patterns tutorial",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Tutorial"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Island hydration patterns"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog",
								"data-filter-value": "Blog",
								"data-search": "why we picked astro blog",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Blog"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Why we picked Astro"
								})]
							})
						]
					}),
					createVNode("p", {
						"data-filter-empty": "docs-blog",
						hidden: true,
						class: "text-sm text-fg-subtle",
						children: "No posts match."
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Category + search",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full flex flex-col gap-6",
				children: [
					createVNode($$FilterBar, {
						group: "docs-blog-search",
						searchable: true,
						searchPlaceholder: "Search posts…",
						options: [
							{
								value: "Blog",
								label: "Blog",
								count: 2
							},
							{
								value: "Tutorial",
								label: "Tutorial",
								count: 2
							},
							{
								value: "Release",
								label: "Release",
								count: 1
							}
						]
					}),
					createVNode("ul", {
						class: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: [
							createVNode("li", {
								"data-filter-group": "docs-blog-search",
								"data-filter-value": "Blog,Tutorial",
								"data-search": "why we picked astro blog tutorial",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Blog · Tutorial"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Why we picked Astro"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog-search",
								"data-filter-value": "Tutorial",
								"data-search": "evals workflow tutorial",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Tutorial"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Evals workflow"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog-search",
								"data-filter-value": "Release",
								"data-search": "v1.4 changelog release",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Release"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "v1.4 changelog"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog-search",
								"data-filter-value": "Blog",
								"data-search": "welcome to the blog astro",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Blog"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Welcome to the blog"
								})]
							}),
							createVNode("li", {
								"data-filter-group": "docs-blog-search",
								"data-filter-value": "Tutorial",
								"data-search": "island hydration patterns tutorial",
								class: "border border-stroke p-4",
								children: [createVNode("span", {
									class: "font-mono text-[10px] uppercase tracking-wider opacity-60",
									children: "Tutorial"
								}), createVNode("p", {
									class: "mt-1 text-sm",
									children: "Island hydration patterns"
								})]
							})
						]
					}),
					createVNode("p", {
						"data-filter-empty": "docs-blog-search",
						hidden: true,
						class: "text-sm text-fg-subtle",
						children: "No posts match."
					})
				]
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
				name: "group",
				type: "string",
				required: true,
				description: "Identifier shared by the bar and the items it controls. Drives data-filter-bar on the bar and matches data-filter-group on each item."
			},
			{
				name: "options",
				type: "FilterOption[]",
				required: true,
				description: "Category buttons (excluding 'All'). Each is { value, label, count? }."
			},
			{
				name: "allLabel",
				type: "string",
				default: "\"All\"",
				description: "Label for the implicit 'All' button."
			},
			{
				name: "showCounts",
				type: "boolean",
				default: "true",
				description: "Render counts in parentheses next to each label."
			},
			{
				name: "searchable",
				type: "boolean",
				default: "false",
				description: "Render a search input that filters items by their data-search attribute."
			},
			{
				name: "searchPlaceholder",
				type: "string",
				default: "\"Search…\"",
				description: "Placeholder for the search input."
			},
			{
				name: "paramKey",
				type: "string",
				default: "filter-<group>",
				description: "URL search-param name for the active category."
			},
			{
				name: "queryParamKey",
				type: "string",
				default: "q-<group>",
				description: "URL search-param name for the search query."
			},
			{
				name: "class",
				type: "string",
				default: "\"\"",
				description: "Extra classes on the root."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The ",
			createVNode(_components.code, { children: "FilterOption" }),
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
							children: " FilterOption"
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
							children: "  value"
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
							children: ";     "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// matches data-filter-value on items"
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
							children: ";     "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// visible label on the button"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  count"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " number"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ";    "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// optional badge"
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
			id: "contract",
			children: "Contract"
		}),
		"\n",
		createVNode(_components.p, { children: "The bar does not render the items — it just shows/hides them. Each filterable item must declare:" }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Attribute" }),
					"\n",
					createVNode(_components.th, { children: "Required" }),
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
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-filter-group" }) }),
					"\n",
					createVNode(_components.td, { children: "yes" }),
					"\n",
					createVNode(_components.td, { children: [
						"Must equal the bar’s ",
						createVNode(_components.code, { children: "group" }),
						" prop."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-filter-value" }) }),
					"\n",
					createVNode(_components.td, { children: "yes" }),
					"\n",
					createVNode(_components.td, { children: "The category. Comma-separated list for items with multiple tags." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-search" }) }),
					"\n",
					createVNode(_components.td, { children: ["only when ", createVNode(_components.code, { children: "searchable" })] }),
					"\n",
					createVNode(_components.td, { children: "Lowercased haystack the search input matches against (substring)." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"You can also place an empty-state element anywhere in the document with ",
			createVNode(_components.code, { children: "data-filter-empty=\"<group>\"" }),
			" — the bar toggles its ",
			createVNode(_components.code, { children: "hidden" }),
			" attribute when the visible count drops to zero."
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
							children: " FilterBar "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/FilterBar.astro\""
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
							children: " posts"
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
							children: "\"blog\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ");"
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
							children: " counts"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " posts."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "reduce"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "Record"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "number"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">>(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "acc"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "p"
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
							children: "  acc[p.data.category] "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " (acc[p.data.category] "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "??"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 0"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "+"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
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
					children: [createVNode(_components.span, {
						style: { color: "#F97583" },
						children: "  return"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: " acc;"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}, {});"
					})
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
							children: " options"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " Object."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "entries"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(counts)."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "map"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "((["
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "value"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "count"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "]) "
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
						children: "  value,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  label: value,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  count,"
					})
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "FilterBar"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " group"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"blog\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " options"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={options} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "searchable"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
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
							children: "  {posts."
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
							children: "p"
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
						children: "    <"
					}), createVNode(_components.span, {
						style: { color: "#85E89D" },
						children: "li"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "      data-filter-group"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"blog\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "      data-filter-value"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "{p.data.category}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "      data-search"
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
							children: "p"
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
							children: "p"
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
							children: "summary"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "toLowerCase"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    >"
					})
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
							children: "`/blog/${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "p"
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
							children: "}>{p.data.title}</"
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
							children: "    </"
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
						children: "  ))}"
					})
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
							children: "ul"
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
							children: " data-filter-empty"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"blog\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " hidden"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">No posts match.</"
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
		createVNode(_components.p, { children: "For multi-tag items, comma-join the values:" }),
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
						style: { color: "#85E89D" },
						children: "li"
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: " data-filter-group"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "="
					}),
					createVNode(_components.span, {
						style: { color: "#9ECBFF" },
						children: "\"blog\""
					}),
					createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: " data-filter-value"
					}),
					createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "="
					}),
					createVNode(_components.span, {
						style: { color: "#9ECBFF" },
						children: "\"Tutorial,Release\""
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
			}) })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Click a category." }),
				" The bar toggles ",
				createVNode(_components.code, { children: "is-active" }),
				" / ",
				createVNode(_components.code, { children: "aria-pressed" }),
				" on its buttons, walks every ",
				createVNode(_components.code, { children: "[data-filter-group=\"…\"]" }),
				", and sets ",
				createVNode(_components.code, { children: "el.hidden" }),
				" based on whether ",
				createVNode(_components.code, { children: "data-filter-value" }),
				" matches (with comma-separated values treated as a set)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Type in the search input." }),
				" The query is lowercased and trimmed, then substring-matched against each item’s ",
				createVNode(_components.code, { children: "data-search" }),
				". Category and search are AND-combined."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "URL sync." }),
				" Both filter and query are written to the URL with ",
				createVNode(_components.code, { children: "history.replaceState" }),
				" (no reload, no history pollution). Loading the page or following a link reads them back."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Empty state." }),
				" If a ",
				createVNode(_components.code, { children: "[data-filter-empty=\"<group>\"]" }),
				" element exists, it is shown when zero items remain visible and hidden otherwise."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "a11y",
			children: "A11y"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Buttons sit in a ",
				createVNode(_components.code, { children: "role=\"toolbar\"" }),
				" with an ",
				createVNode(_components.code, { children: "aria-label" }),
				" of ",
				createVNode(_components.code, { children: "\"Filter <group> by category\"" }),
				", and each button reflects state via ",
				createVNode(_components.code, { children: "aria-pressed" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The search input has a visually-hidden ",
				createVNode(_components.code, { children: "<span class=\"sr-only\">" }),
				" label tied to the group name."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Items are hidden via the native ",
				createVNode(_components.code, { children: "hidden" }),
				" attribute, so screen readers and tab order skip them — no ",
				createVNode(_components.code, { children: "display: none" }),
				" / ",
				createVNode(_components.code, { children: "visibility: hidden" }),
				" ambiguity."
			] }),
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
				createVNode(_components.strong, { children: [createVNode(_components.code, { children: "group" }), " must be unique per page."] }),
				" The script scans the whole document for ",
				createVNode(_components.code, { children: "[data-filter-group=\"…\"]" }),
				", so two bars with the same ",
				createVNode(_components.code, { children: "group" }),
				" would each control all matching items. Use distinct names (e.g. ",
				createVNode(_components.code, { children: "blog" }),
				", ",
				createVNode(_components.code, { children: "case-studies" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Items live anywhere in the document, not inside the bar." }),
				" That is the point — but it means the bar will not filter items that haven’t yet been rendered (e.g. an island that hydrates later). For static + content-collection lists this is ideal; for dynamic lists, re-call ",
				createVNode(_components.code, { children: "apply" }),
				" after they appear."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: [createVNode(_components.code, { children: "data-search" }), " is not built for you."] }), " The component does not normalize accents or lowercase your strings — pass an already-lowercased haystack. The query input is lowercased before matching."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Counts are static." }),
				" The number in parentheses is whatever you pass in ",
				createVNode(_components.code, { children: "options[i].count" }),
				"; it is not recomputed as items are filtered. Display total-per-category, not visible-per-category."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: [
					createVNode(_components.code, { children: "history.replaceState" }),
					", not ",
					createVNode(_components.code, { children: "pushState" }),
					"."
				] }),
				" Filtering does not create back-button entries — refreshing or sharing the URL preserves state, but the back button leaves the page entirely. Swap to ",
				createVNode(_components.code, { children: "pushState" }),
				" if you want each filter change in history."
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
	"title": "FilterBar",
	"description": "Reusable, content-agnostic category filter with optional search. AND-combines both, syncs to the URL, and works on any list of items via data-* attributes.",
	"category": "pattern",
	"order": 75,
	"sourceFile": "src/components/FilterBar.astro",
	"status": "stable",
	"related": []
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
			"slug": "contract",
			"text": "Contract"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "behavior",
			"text": "Behavior"
		},
		{
			"depth": 2,
			"slug": "a11y",
			"text": "A11y"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/filter-bar.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/filter-bar.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/filter-bar.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
