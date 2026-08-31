import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/TimelineVertical.astro
createAstro("https://example.com");
var $$TimelineVertical = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimelineVertical;
	const { items, outlineMarkers = false, ariaLabel, class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div data-timeline="component"${addAttribute(outlineMarkers ? "true" : void 0, "data-timeline-outline")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(["timeline", className], "class:list")}> <ol data-timeline-list> ${items ? items.map((item) => renderTemplate`<li data-timeline-item${addAttribute(item.status ?? "default", "data-timeline-status")}> <span data-timeline-marker aria-hidden="true"></span> ${item.date && renderTemplate`<time data-timeline-date${addAttribute(item.dateAttribute, "datetime")}>${item.date}</time>`} <h3 data-timeline-title>${item.title}</h3> ${item.description && renderTemplate`<p data-timeline-description>${item.description}</p>`} </li>`) : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </ol> </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/TimelineVertical.astro", void 0);
//#endregion
//#region src/content/components/timeline-vertical.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		em: "em",
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
		createVNode(_components.p, { children: [
			"A vertical timeline you can drop into a roadmap, changelog, or company-history section without rebuilding the dot/line/connector dance every time. Pass an ",
			createVNode(_components.code, { children: "items" }),
			" array and you’re done; reach for the slot only when you need links, badges, or other rich content per row."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Company milestones — mixed statuses",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$TimelineVertical, {
					ariaLabel: "Company history",
					items: [
						{
							date: "Jan 2023",
							title: "Founded",
							description: "Three engineers in a Berlin co-working space, one whiteboard, one shared bank account.",
							status: "complete"
						},
						{
							date: "Jul 2023",
							title: "First customer",
							description: "Signed a regional bank as design partner. Their feedback shipped most of v1.",
							status: "complete"
						},
						{
							date: "Mar 2024",
							title: "Series A",
							description: "$12M led by a tier-1 fund. Hired heads of design and infra in the same week.",
							status: "complete"
						},
						{
							date: "Now",
							title: "Public beta",
							description: "Self-serve sign-up open to the world.",
							status: "current"
						},
						{
							date: "Q4 2025",
							title: "Enterprise tier",
							description: "SAML, SCIM, audit logs, and a real on-call rotation.",
							status: "future"
						}
					]
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Plain — no statuses, outlined markers",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$TimelineVertical, {
					outlineMarkers: true,
					items: [
						{
							date: "v1.0",
							title: "Initial release",
							description: "Public launch with core feature set."
						},
						{
							date: "v1.1",
							title: "Search overhaul",
							description: "Replaced the in-memory matcher with FTS5."
						},
						{
							date: "v1.2",
							title: "Async exports",
							description: "Long-running CSV exports moved off the request path."
						},
						{
							date: "v1.3",
							title: "Workspaces",
							description: "Multi-tenancy plus role-based access control."
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
				type: "Item[]",
				description: "Array of timeline entries. Omit to drive via the default slot instead."
			},
			{
				name: "outlineMarkers",
				type: "boolean",
				default: "false",
				description: "Use outlined ring markers instead of filled dots."
			},
			{
				name: "ariaLabel",
				type: "string",
				description: "Accessible label for the timeline region (e.g. \"Company history\", \"Release timeline\")."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "item-shape",
			children: [createVNode(_components.code, { children: "Item" }), " shape"]
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
							children: "  date"
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
							children: ";            "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// Display text — \"Jan 2024\", \"Q3\", \"v1.4.0\", \"Now\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  dateAttribute"
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
							children: ";   "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// ISO date for <time datetime=\"...\"> (optional)"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  title"
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
							children: ";            "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// Required heading"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  description"
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
							children: ";     "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// Plain-text body"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "  status"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "?:"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"default\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"complete\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"current\""
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " |"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"future\""
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
						style: { color: "#E1E4E8" },
						children: "};"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "status-variants",
			children: "Status variants"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Status" }),
					"\n",
					createVNode(_components.th, { children: "Marker" }),
					"\n",
					createVNode(_components.th, { children: "When" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "default" }) }),
					"\n",
					createVNode(_components.td, { children: "Filled dark circle" }),
					"\n",
					createVNode(_components.td, { children: "Generic entry, no temporal positioning." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "complete" }) }),
					"\n",
					createVNode(_components.td, { children: "Green filled circle" }),
					"\n",
					createVNode(_components.td, { children: "Past milestone, done." }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "current" }) }),
					"\n",
					createVNode(_components.td, { children: "Intent-coloured dot with a soft halo" }),
					"\n",
					createVNode(_components.td, { children: "“You are here.”" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "future" }) }),
					"\n",
					createVNode(_components.td, { children: "Empty ring + faded text" }),
					"\n",
					createVNode(_components.td, { children: "Planned, not yet shipped." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "rich-content-via-slot",
			children: "Rich content via slot"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"When you need links, code, badges, or any non-text content inside an item, drop the ",
			createVNode(_components.code, { children: "items" }),
			" prop and write the list directly:"
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
							children: "TimelineVertical"
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
							children: "\"Release timeline\""
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
							children: "li"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-timeline-item"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-timeline-status"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"complete\""
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
							style: { color: "#B392F0" },
							children: " data-timeline-marker"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " aria-hidden"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"true\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "></"
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
							style: { color: "#85E89D" },
							children: "time"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-timeline-date"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " datetime"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"2024-03-12\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">v1.2.0 — Mar 12, 2024</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "time"
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
							children: "h3"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-timeline-title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Async exports</"
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " data-timeline-description"
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
						children: "      Long-running CSV exports now run in a background worker —"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      see the <"
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
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/blog/async-exports\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">deep-dive</"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "a"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">."
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
							children: "  </"
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
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "TimelineVertical"
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
			"The component recognizes the same ",
			createVNode(_components.code, { children: "data-timeline-*" }),
			" markup contract as it generates internally, so styling stays consistent."
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
				"Renders an ordered list (",
				createVNode(_components.code, { children: "<ol>" }),
				"/",
				createVNode(_components.code, { children: "<li>" }),
				") so screen readers announce position (“3 of 5”) naturally."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Each date uses ",
				createVNode(_components.code, { children: "<time>" }),
				"; pass ",
				createVNode(_components.code, { children: "dateAttribute" }),
				" (ISO 8601) for machine-readable dates without losing the human-readable display string."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The connector line is a CSS ",
				createVNode(_components.code, { children: "::before" }),
				" pseudo-element — never appears in the accessibility tree."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Markers carry ",
				createVNode(_components.code, { children: "aria-hidden=\"true\"" }),
				" because they’re purely decorative; semantics come from the date / title / description."
			] }),
			"\n",
			createVNode(_components.li, { children: "The status variants are visual only — if “current” or “complete” is meaningful for assistive tech, repeat the information in the title or description (e.g. “Series A — completed Mar 2024”)." }),
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
			createVNode(_components.li, { children: "The connector line stops at the last marker — no trailing stub past the end of the list." }),
			"\n",
			createVNode(_components.li, { children: [
				"For ",
				createVNode(_components.em, { children: "horizontal" }),
				" timelines (process flows, onboarding step indicators), see ",
				createVNode(_components.code, { children: "FlowSteps" }),
				" instead — different pattern, different ergonomics."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "outlineMarkers" }),
				" and per-item ",
				createVNode(_components.code, { children: "status" }),
				" can coexist: a ",
				createVNode(_components.code, { children: "current" }),
				" item still renders with its filled-intent dot regardless of the outline preference."
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
	"title": "TimelineVertical",
	"description": "Vertical timeline for changelogs, company history, and roadmap. Data-driven via an `items` array with optional rich-content slot fallback. Status variants drive marker styling.",
	"category": "pattern",
	"order": 65,
	"sourceFile": "src/components/TimelineVertical.astro",
	"status": "stable",
	"related": ["FlowSteps", "AccordionFAQ"]
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
			"depth": 3,
			"slug": "item-shape",
			"text": "Item shape"
		},
		{
			"depth": 3,
			"slug": "status-variants",
			"text": "Status variants"
		},
		{
			"depth": 2,
			"slug": "rich-content-via-slot",
			"text": "Rich content via slot"
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
var url = "src/content/components/timeline-vertical.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/timeline-vertical.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/timeline-vertical.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
