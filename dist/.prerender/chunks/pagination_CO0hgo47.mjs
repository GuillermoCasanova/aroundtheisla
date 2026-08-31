import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Pagination.astro
createAstro("https://example.com");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { current, total, hrefFor, buttons = false, siblings = 1, boundaries = true, ariaLabel = "Pagination", prevLabel = "Previous", nextLabel = "Next", class: className } = Astro.props;
	if (!buttons && !hrefFor) throw new Error("Pagination: pass `hrefFor` or set `buttons={true}`.");
	function buildPageList(current, total, siblings, boundaries) {
		if (total <= 0) return [];
		const pages = /* @__PURE__ */ new Set();
		pages.add(current);
		for (let i = 1; i <= siblings; i++) {
			if (current - i >= 1) pages.add(current - i);
			if (current + i <= total) pages.add(current + i);
		}
		if (boundaries) {
			pages.add(1);
			pages.add(total);
		}
		const sorted = Array.from(pages).sort((a, b) => a - b);
		const out = [];
		for (let i = 0; i < sorted.length; i++) {
			if (i > 0 && sorted[i] - sorted[i - 1] > 1) out.push(null);
			out.push(sorted[i]);
		}
		return out;
	}
	const pageList = buildPageList(current, total, siblings, boundaries);
	const hasPrev = current > 1;
	const hasNext = current < total;
	const Tag = buttons ? "button" : "a";
	return renderTemplate`${maybeRenderHead($$result)}<nav data-pagination${addAttribute(current, "data-pagination-current")}${addAttribute(total, "data-pagination-total")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(["pagination", className], "class:list")}> <ol data-pagination-list> <li> ${renderComponent($$result, "Tag", Tag, {
		"type": buttons ? "button" : void 0,
		"href": !buttons && hasPrev && hrefFor ? hrefFor(current - 1) : void 0,
		"data-pagination-prev": true,
		"aria-label": prevLabel,
		"aria-disabled": !hasPrev ? "true" : void 0,
		"disabled": buttons && !hasPrev ? true : void 0
	}, { "default": ($$result) => renderTemplate` <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"> <polyline points="15 6 9 12 15 18"></polyline> </svg> <span class="pagination__label">${prevLabel}</span> ` })} </li> ${pageList.map((p) => p === null ? renderTemplate`<li data-pagination-ellipsis aria-hidden="true">…</li>` : renderTemplate`<li> ${renderComponent($$result, "Tag", Tag, {
		"type": buttons ? "button" : void 0,
		"href": !buttons && hrefFor ? hrefFor(p) : void 0,
		"data-pagination-page": p,
		"aria-label": `Page ${p}`,
		"aria-current": p === current ? "page" : void 0
	}, { "default": ($$result) => renderTemplate`${p}` })} </li>`)} <li> ${renderComponent($$result, "Tag", Tag, {
		"type": buttons ? "button" : void 0,
		"href": !buttons && hasNext && hrefFor ? hrefFor(current + 1) : void 0,
		"data-pagination-next": true,
		"aria-label": nextLabel,
		"aria-disabled": !hasNext ? "true" : void 0,
		"disabled": buttons && !hasNext ? true : void 0
	}, { "default": ($$result) => renderTemplate` <span class="pagination__label">${nextLabel}</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"> <polyline points="9 6 15 12 9 18"></polyline> </svg> ` })} </li> </ol> </nav> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Pagination.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Pagination.astro", void 0);
//#endregion
//#region src/content/components/pagination.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
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
		createVNode(_components.p, { children: "Numeric pagination component for paginated lists, blog archives, search results, and any “page N of M” surface. Two render modes:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Anchor mode (default)" }),
				" — pages render as real ",
				createVNode(_components.code, { children: "<a href=\"...\">" }),
				" tags via the ",
				createVNode(_components.code, { children: "hrefFor" }),
				" prop. Works without JavaScript, plays nicely with crawlers, and supports browser middle-click / open-in-new-tab."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Button mode" }),
				" — pages render as ",
				createVNode(_components.code, { children: "<button>" }),
				" and clicks dispatch a ",
				createVNode(_components.code, { children: "pagination:change" }),
				" event. Use this for client-side filtering or in-page list navigation."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Anchor mode (current = 3 of 10)",
			align: "center",
			children: createVNode("div", {
				class: "py-2",
				children: createVNode($$Pagination, {
					current: 3,
					total: 10,
					hrefFor: (p) => `?page=${p}`
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Long range with ellipsis (current = 7 of 50)",
			align: "center",
			children: createVNode("div", {
				class: "py-2",
				children: createVNode($$Pagination, {
					current: 7,
					total: 50,
					hrefFor: (p) => `?page=${p}`
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Button mode",
			align: "center",
			children: createVNode("div", {
				class: "py-2",
				children: createVNode($$Pagination, {
					current: 1,
					total: 5,
					buttons: true
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
				name: "current",
				type: "number",
				required: true,
				description: "1-based current page."
			},
			{
				name: "total",
				type: "number",
				required: true,
				description: "Total number of pages."
			},
			{
				name: "hrefFor",
				type: "(page: number) => string",
				description: "URL builder for anchor mode. Required unless `buttons` is true."
			},
			{
				name: "buttons",
				type: "boolean",
				default: "false",
				description: "Render <button> elements and dispatch `pagination:change` instead of using anchors."
			},
			{
				name: "siblings",
				type: "number",
				default: "1",
				description: "Number of sibling pages to show on each side of `current` before truncating."
			},
			{
				name: "boundaries",
				type: "boolean",
				default: "true",
				description: "Always include the first and last page (with ellipsis if needed)."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Pagination\"",
				description: "Accessible label for the wrapping <nav>."
			},
			{
				name: "prevLabel",
				type: "string",
				default: "\"Previous\"",
				description: "Label for the previous button."
			},
			{
				name: "nextLabel",
				type: "string",
				default: "\"Next\"",
				description: "Label for the next button."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "anchor-mode",
			children: "Anchor mode"
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
							children: " Pagination "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Pagination.astro\""
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
							children: " currentPage"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Number"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(Astro.url.searchParams."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "get"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"page\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "??"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
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
							children: " totalPages"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " Math."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "ceil"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(totalItems "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "/"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " pageSize);"
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
						children: "Pagination"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  current"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={currentPage}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  total"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={totalPages}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  hrefFor"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={("
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
							style: { color: "#9ECBFF" },
							children: " `?${"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "new"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " URLSearchParams"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "({ page: "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "String"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: ") })"
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
						children: "/>"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Each page button is a real anchor — no JS required, works offline, plays nicely with crawlers, and supports middle-click open-in-new-tab. The current page is ",
			createVNode(_components.code, { children: "aria-current=\"page\"" }),
			" and styled as the active state."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "button-mode",
			children: "Button mode"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Pagination"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " current"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "total"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "5"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "buttons"
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
							children: "script"
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
							children: "  document."
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
							children: "\"pagination:change\""
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
							children: "    console."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "log"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`Page change: ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "e"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "detail"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "} → ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "e"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "detail"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "to"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "    // Render the next page of results"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  });"
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
							children: "script"
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
			"Listen on the wrapper (or any ancestor — the event bubbles). The event is ",
			createVNode(_components.code, { children: "cancelable" }),
			" — call ",
			createVNode(_components.code, { children: "preventDefault()" }),
			" to manage state externally before letting the component update its own ",
			createVNode(_components.code, { children: "data-pagination-current" }),
			" attribute."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "wiring-to-a-content-collection-blog-docs-changelog",
			children: "Wiring to a content collection (blog, docs, changelog…)"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Astro has a built-in ",
			createVNode(_components.code, { children: "paginate()" }),
			" helper that splits any array into page-sized chunks and generates one route per page. Combined with this component, that gives you a full paginated archive with stable URLs — ",
			createVNode(_components.code, { children: "/blog/" }),
			", ",
			createVNode(_components.code, { children: "/blog/2/" }),
			", ",
			createVNode(_components.code, { children: "/blog/3/" }),
			" — that work without JavaScript."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "1-define-the-collection",
			children: "1. Define the collection"
		}),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "src/content.config.ts" }), ":"] }),
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
							children: " { defineCollection, z } "
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
							children: " { glob } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro/loaders\""
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
							children: " blog"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " defineCollection"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "({"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  loader: "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "glob"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "({ pattern: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"**/*.{md,mdx}\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", base: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"./src/content/blog\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }),"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  schema: z."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "object"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "({"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    title: z."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(),"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    description: z."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(),"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    date: z.coerce."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "date"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(),"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    draft: z."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "boolean"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "default"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "false"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "),"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  }),"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "});"
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
							children: "export"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " collections"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { blog };"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "2-create-the-paginated-route",
			children: "2. Create the paginated route"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "src/pages/blog/[...page].astro" }),
			" — the ",
			createVNode(_components.code, { children: "[...page]" }),
			" rest segment is what makes Astro generate ",
			createVNode(_components.code, { children: "/blog/" }),
			", ",
			createVNode(_components.code, { children: "/blog/2/" }),
			", ",
			createVNode(_components.code, { children: "/blog/3/" }),
			", …"
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
							children: " \"@layouts/Layout.astro\""
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
							children: " Pagination "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Pagination.astro\""
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
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { GetStaticPaths } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro\""
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
							children: "export"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " const"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " getStaticPaths"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " GetStaticPaths"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " async"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ({ "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "paginate"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }) "
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
							style: { color: "#F97583" },
							children: "  const"
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
							style: { color: "#E1E4E8" },
							children: " ("
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "await"
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
							children: ", ({ "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "data"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }) "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " !"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "data.draft))"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    ."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "sort"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "a"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "b"
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
							children: " b.data.date."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "valueOf"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "() "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " a.data.date."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "valueOf"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "());"
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
							children: "  return"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " paginate"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(posts, { pageSize: "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "9"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " });"
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
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "page"
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
							style: { color: "#E1E4E8" },
							children: " Astro.props;"
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
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`Blog — page ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "page"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "currentPage"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
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
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Blog</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h1"
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
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "ul"
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
							children: "\"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3\""
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
							children: "    {page.data."
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
							children: "post"
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
							children: "      <"
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
							children: "        <"
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
							children: "post"
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
							children: "          <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "h2"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{post.data.title}</"
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
							children: "          <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{post.data.description}</"
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
							children: "        </"
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
							children: "      </"
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
						children: "    ))}"
					})
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
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  <"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "Pagination"
					})]
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
							children: "\"mt-10\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    current"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={page.currentPage}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    total"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={page.lastPage}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    hrefFor"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={("
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
							children: " (p "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "==="
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ?"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"/blog/\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " :"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " `/blog/${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}/`"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ")}"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  />"
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
			createVNode(_components.code, { children: "page" }),
			" is the ",
			createVNode(_components.a, {
				href: "https://docs.astro.build/en/reference/api-reference/#page",
				children: [createVNode(_components.code, { children: "Page" }), " object"]
			}),
			" Astro injects: ",
			createVNode(_components.code, { children: "page.data" }),
			" is the posts on this page, ",
			createVNode(_components.code, { children: "page.currentPage" }),
			" and ",
			createVNode(_components.code, { children: "page.lastPage" }),
			" map directly to this component’s ",
			createVNode(_components.code, { children: "current" }),
			" / ",
			createVNode(_components.code, { children: "total" }),
			" props, and ",
			createVNode(_components.code, { children: "page.url.prev" }),
			" / ",
			createVNode(_components.code, { children: "page.url.next" }),
			" are also available if you’d rather use them than ",
			createVNode(_components.code, { children: "hrefFor" }),
			"."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "3-filtering-by-tag-category-etc",
			children: "3. Filtering by tag, category, etc."
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Wrap the same pattern in a second rest param to paginate filtered subsets — ",
			createVNode(_components.code, { children: "/blog/tag/astro/" }),
			", ",
			createVNode(_components.code, { children: "/blog/tag/astro/2/" }),
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// src/pages/blog/tag/[tag]/[...page].astro"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "export"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " const"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " getStaticPaths"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: ":"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " GetStaticPaths"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " async"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ({ "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "paginate"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }) "
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
							style: { color: "#F97583" },
							children: "  const"
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
							children: ", ({ "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "data"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }) "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " !"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "data.draft);"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "  const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " tags"
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
							style: { color: "#F97583" },
							children: "...new"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " Set"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(posts."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "flatMap"
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
							children: " p.data.tags "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "??"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " []))];"
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
							children: "  return"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " tags."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "flatMap"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "tag"
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
							style: { color: "#F97583" },
							children: "    const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " filtered"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " posts"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      ."
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
							children: " p.data.tags?."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "includes"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(tag))"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      ."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "sort"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "a"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "b"
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
							children: " b.data.date."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "valueOf"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "() "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " a.data.date."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "valueOf"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "());"
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
							children: "    return"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " paginate"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(filtered, {"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      pageSize: "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "9"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ","
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      params: { tag },"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      props: { tag },"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    });"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  });"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "};"
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
						children: "Pagination"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  current"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={page.currentPage}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  total"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={page.lastPage}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  hrefFor"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={("
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
							children: " (p "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "==="
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ?"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " `/blog/tag/${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "tag"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}/`"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " :"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " `/blog/tag/${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "tag"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}/${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}/`"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ")}"
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
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "4-query-string-mode-filters-search",
			children: "4. Query-string mode (filters, search)"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"For ",
			createVNode(_components.code, { children: "?page=N" }),
			" style pagination — e.g. when the list is filtered by a search box and you don’t want a separate static path per query — a single non-paginated route is enough:"
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// src/pages/blog/index.astro"
					})
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
							children: " PAGE_SIZE"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 9"
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
							style: { color: "#E1E4E8" },
							children: " ("
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "await"
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
							children: ", ({ "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "data"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }) "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "=>"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " !"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "data.draft))"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  ."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "sort"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "a"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "b"
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
							children: " b.data.date."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "valueOf"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "() "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " a.data.date."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "valueOf"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "());"
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
							children: " currentPage"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
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
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "Number"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(Astro.url.searchParams."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "get"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"page\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "??"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "));"
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
							children: " totalPages"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
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
							children: "1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", Math."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "ceil"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(posts."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "length"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " /"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " PAGE_SIZE"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "));"
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
							children: " start"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " (currentPage "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "*"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " PAGE_SIZE"
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
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " pageItems"
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
							children: "slice"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(start, start "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "+"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " PAGE_SIZE"
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
						children: "Pagination"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  current"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={currentPage}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  total"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={totalPages}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  hrefFor"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={("
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
							style: { color: "#9ECBFF" },
							children: " `?${"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "new"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " URLSearchParams"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "({ page: "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "String"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: ") })"
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
						children: "/>"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"This needs SSR (",
			createVNode(_components.code, { children: "output: \"server\"" }),
			" or hybrid mode in ",
			createVNode(_components.code, { children: "astro.config.mjs" }),
			") since the URL search params change per-request. For static builds, prefer pattern (2) — one path per page, fully prerendered, crawlable, and cache-friendly."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "truncation-algorithm",
			children: "Truncation algorithm"
		}),
		"\n",
		createVNode(_components.p, { children: "The list always includes:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "The current page." }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "siblings" }), " pages on each side of current."] }),
			"\n",
			createVNode(_components.li, { children: [
				"The first and last page (when ",
				createVNode(_components.code, { children: "boundaries" }),
				" is true)."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Gaps between non-adjacent runs are rendered as a ",
			createVNode(_components.code, { children: "…" }),
			" ellipsis (",
			createVNode(_components.code, { children: "<li data-pagination-ellipsis>" }),
			" with ",
			createVNode(_components.code, { children: "aria-hidden" }),
			"). Examples for ",
			createVNode(_components.code, { children: "siblings=1" }),
			", ",
			createVNode(_components.code, { children: "total=10" }),
			":"
		] }),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, {
						style: { textAlign: "right" },
						children: "Current"
					}),
					"\n",
					createVNode(_components.th, { children: "Visible pages" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, {
						style: { textAlign: "right" },
						children: "1"
					}),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "1 2 … 10" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, {
						style: { textAlign: "right" },
						children: "4"
					}),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "1 … 3 4 5 … 10" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, {
						style: { textAlign: "right" },
						children: "7"
					}),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "1 … 6 7 8 … 10" }) }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, {
						style: { textAlign: "right" },
						children: "10"
					}),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "1 … 9 10" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "<nav aria-label=\"Pagination\">" }), " wrapper — screen readers announce the region."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Current page marked with ",
				createVNode(_components.code, { children: "aria-current=\"page\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Disabled prev/next: in anchor mode, ",
				createVNode(_components.code, { children: "aria-disabled=\"true\"" }),
				" (link still renders without href); in button mode, the button has the native ",
				createVNode(_components.code, { children: "disabled" }),
				" attribute."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Each numeric link/button has ",
				createVNode(_components.code, { children: "aria-label=\"Page N\"" }),
				" so screen readers announce purpose, not just the number."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "<nav>" }),
				" is ordered (",
				createVNode(_components.code, { children: "<ol>" }),
				") so screen readers announce position correctly."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Focus-visible outline uses ",
				createVNode(_components.code, { children: "--color-focus" }),
				"."
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
				"On screens narrower than 480px, the visible “Previous” / “Next” labels collapse to just the arrow icons. The ",
				createVNode(_components.code, { children: "aria-label" }),
				" still announces the full text."
			] }),
			"\n",
			createVNode(_components.li, { children: "Use anchor mode whenever the URL is the source of truth (deep linking, sharing, SEO). Use button mode only when pagination state is in-page transient." }),
			"\n",
			createVNode(_components.li, { children: [
				"For “Load more” patterns, prefer a real ",
				createVNode(_components.code, { children: "<button>" }),
				" with progressive disclosure — this component is for discrete page navigation, not infinite scroll."
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
	"title": "Pagination",
	"description": "Page-N-of-M control with prev/next, numeric pages, and ellipsis truncation. Anchor-based by default (no JS needed); button-mode for client-side state.",
	"category": "pattern",
	"order": 60,
	"sourceFile": "src/components/Pagination.astro",
	"status": "stable",
	"related": ["FilterBar"]
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
			"slug": "anchor-mode",
			"text": "Anchor mode"
		},
		{
			"depth": 2,
			"slug": "button-mode",
			"text": "Button mode"
		},
		{
			"depth": 2,
			"slug": "wiring-to-a-content-collection-blog-docs-changelog",
			"text": "Wiring to a content collection (blog, docs, changelog…)"
		},
		{
			"depth": 3,
			"slug": "1-define-the-collection",
			"text": "1. Define the collection"
		},
		{
			"depth": 3,
			"slug": "2-create-the-paginated-route",
			"text": "2. Create the paginated route"
		},
		{
			"depth": 3,
			"slug": "3-filtering-by-tag-category-etc",
			"text": "3. Filtering by tag, category, etc."
		},
		{
			"depth": 3,
			"slug": "4-query-string-mode-filters-search",
			"text": "4. Query-string mode (filters, search)"
		},
		{
			"depth": 2,
			"slug": "truncation-algorithm",
			"text": "Truncation algorithm"
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
var url = "src/content/components/pagination.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/pagination.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/pagination.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
