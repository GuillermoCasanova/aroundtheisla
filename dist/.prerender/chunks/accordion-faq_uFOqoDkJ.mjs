import { F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
import { t as $$Accordion } from "./Accordion_DnEpkoL8.mjs";
//#region src/components/AccordionFAQ.astro
createAstro("https://example.com");
var $$AccordionFAQ = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AccordionFAQ;
	const { items, closePrevious = true, openByDefault, class: className } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Accordion", $$Accordion, {
		"closePrevious": closePrevious,
		"openByDefault": openByDefault,
		"class:list": ["flex flex-col", className]
	}, { "default": ($$result) => renderTemplate`${items.map((item) => renderTemplate`${maybeRenderHead($$result)}<div data-accordion="item" class="border-b border-stroke"> <button type="button" data-accordion="button" class="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-fg transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"> <span class="text-base font-medium">${item.question}</span> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:chevron-down",
		"data-accordion": "icon",
		"class": "h-4 w-4 shrink-0 text-fg-muted",
		"aria-hidden": "true"
	})} </button> <div data-accordion="content"> <div class="pb-5 text-body-lg text-fg-muted">${item.answer}</div> </div> </div>`)}` })}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/AccordionFAQ.astro", void 0);
//#endregion
//#region src/content/components/accordion-faq.mdx
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
			"A styled, opinionated preset over the ",
			createVNode(_components.code, { children: "Accordion" }),
			" primitive. Takes a list of ",
			createVNode(_components.code, { children: "{ question, answer }" }),
			" objects and renders an FAQ-style disclosure list with native ",
			createVNode(_components.code, { children: "<button>" }),
			" triggers, a chevron that rotates on open, muted answer text, and bottom borders between items. All behavior and accessibility come from the primitive — this preset only adds markup and default styling."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Use this when you have straightforward Q/A content (e.g., the ",
			createVNode(_components.code, { children: "faq" }),
			" content collection). For rich content inside items — embedded buttons, videos, images, custom per-item styling — reach for the primitive directly."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Inline data",
			align: "start",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$AccordionFAQ, {
					openByDefault: 1,
					items: [
						{
							question: "What is Astro?",
							answer: "A web framework for content-driven websites — ships zero JS by default."
						},
						{
							question: "How does it compare to Next.js?",
							answer: "Astro ships less JavaScript by default. Next.js is better for app-like UIs."
						},
						{
							question: "Can I use React inside Astro?",
							answer: "Yes — and Vue, Svelte, Solid, Preact, and Lit. Mix frameworks per island."
						},
						{
							question: "What's a content collection?",
							answer: "A typed, file-backed data source. Astro generates types from a Zod schema you declare in src/content.config.ts."
						}
					]
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
				name: "items",
				type: "{ question: string; answer: string }[]",
				required: true,
				description: "List of question/answer pairs to render."
			},
			{
				name: "closePrevious",
				type: "boolean",
				default: "true",
				description: "Close other items when one opens (single-open mode)."
			},
			{
				name: "openByDefault",
				type: "number",
				description: "1-based index of the item to open on page load."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Does ",
			createVNode(_components.strong, { children: "not" }),
			" forward ",
			createVNode(_components.code, { children: "closeOnSecondClick" }),
			" — defaults to ",
			createVNode(_components.code, { children: "true" }),
			" from the primitive, which is almost always what you want for FAQs."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "what-it-renders",
			children: "What it renders"
		}),
		"\n",
		createVNode(_components.p, { children: "For each item:" }),
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
			children: createVNode(_components.code, { children: [
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
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"item\""
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
							children: "\"border-b border-stroke\""
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
							children: "button"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"button\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"button\""
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
							children: "\"...\""
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
							children: "span"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{question}</"
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: {
								color: "#FDAEB7",
								fontStyle: "italic"
							},
							children: "Icon"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"icon\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " name"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"lucide:chevron-down\""
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
							children: "button"
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
							children: "div"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-accordion"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"content\""
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
							children: "\"pb-5 text-body-lg text-fg-muted\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{answer}</"
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
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  </"
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
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Triggers are ",
				createVNode(_components.strong, { children: ["native ", createVNode(_components.code, { children: "<button>" })] }),
				" elements — correct focus, activation, and screen-reader semantics out of the box."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Chevron is ",
				createVNode(_components.code, { children: "lucide:chevron-down" }),
				" via ",
				createVNode(_components.code, { children: "astro-icon" }),
				", rotates 180° on open (inherited from the primitive’s CSS)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Answer text uses ",
				createVNode(_components.code, { children: "text-fg-muted" }),
				" so it flips in dark mode automatically."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "prefers-reduced-motion" }), " is respected via the primitive — no extra wiring needed."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "from-inline-data",
			children: "From inline data"
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
							children: " AccordionFAQ "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/AccordionFAQ.astro\""
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
							children: " faqItems"
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
							children: "  { question: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"What is Astro?\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", answer: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"A web framework for content-driven websites.\""
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
							children: "  { question: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"How does it compare to Next.js?\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", answer: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Astro ships less JavaScript by default.\""
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
							children: "AccordionFAQ"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={faqItems} />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "from-the-faq-content-collection",
			children: [
				"From the ",
				createVNode(_components.code, { children: "faq" }),
				" content collection"
			]
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
							children: " AccordionFAQ "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/AccordionFAQ.astro\""
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
							children: " faqs"
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
							children: "\"faq\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "))"
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
							children: "filter"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "faq"
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
							children: " faq.data.page "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "==="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"homepage\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ")"
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
							children: " a.data.order "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "-"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " b.data.order);"
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
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " faqs."
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
							children: "faq"
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
						children: "  question: faq.data.question,"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  answer: faq.body "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "??"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"\""
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
							children: "AccordionFAQ"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={items} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "openByDefault"
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
							children: "} />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "when-to-use-the-primitive-instead",
			children: "When to use the primitive instead"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Reach for ",
			createVNode(_components.code, { children: "Accordion" }),
			" when:"
		] }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Each item’s body contains rich content (buttons, videos, embedded code, custom-styled lists)." }),
			"\n",
			createVNode(_components.li, { children: "You need per-item styling differences (different background per item, custom icons)." }),
			"\n",
			createVNode(_components.li, { children: "The trigger is more than plain text + chevron (icon + text + badge, for example)." }),
			"\n",
			createVNode(_components.li, { children: "You want a different default typography scale for questions/answers." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "AccordionFAQ" }), " is intentionally opinionated — when you need to override its rendering, you’re better off writing the primitive’s markup yourself than fighting the preset."] }),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Answer text renders as plain text. If you need markdown in answers (bold, links), compile the markdown body yourself before passing — e.g., ",
				createVNode(_components.code, { children: "<Fragment set:html={compiledMarkdownHtml} />" }),
				" inside the primitive instead of this preset."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "AccordionFAQ" }),
				" adds ",
				createVNode(_components.code, { children: "border-b border-stroke" }),
				" to each item and ",
				createVNode(_components.code, { children: "flex flex-col" }),
				" to the wrapper. Override via ",
				createVNode(_components.code, { children: "class" }),
				" if you want different separators."
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
	"title": "AccordionFAQ",
	"description": "Typed, mapped preset over the Accordion primitive — pass an array of question/answer pairs.",
	"category": "pattern",
	"order": 20,
	"sourceFile": "src/components/AccordionFAQ.astro",
	"status": "stable",
	"related": ["Accordion", "AccordionMorph"]
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
			"slug": "what-it-renders",
			"text": "What it renders"
		},
		{
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 3,
			"slug": "from-inline-data",
			"text": "From inline data"
		},
		{
			"depth": 3,
			"slug": "from-the-faq-content-collection",
			"text": "From the faq content collection"
		},
		{
			"depth": 2,
			"slug": "when-to-use-the-primitive-instead",
			"text": "When to use the primitive instead"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/accordion-faq.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/accordion-faq.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/accordion-faq.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
