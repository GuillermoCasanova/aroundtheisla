import { d as $$AnnouncementBanner } from "./Layout_Dlmeugkd.mjs";
import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/content/components/announcement-banner.mdx
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
			"Site-wide announcement banner. Optionally a link, optionally dismissible, hides on scroll-down and reappears on scroll-up. Content and scheduling live in the ",
			createVNode(_components.code, { children: "announcements" }),
			" content collection — editors publish, queue, or expire banners by editing markdown files, no code changes."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Plain — no link, dismissible",
			children: createVNode("div", {
				class: "relative w-full",
				children: createVNode($$AnnouncementBanner, {
					class: "bg-intent text-fg-on-intent",
					children: createVNode(_components.span, { children: [createVNode(_components.strong, { children: "New:" }), " Component showcase is live"] })
				})
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "As a link with arrow",
			children: createVNode("div", {
				class: "relative w-full",
				children: createVNode($$AnnouncementBanner, {
					href: "/series-a",
					class: "bg-intent text-fg-on-intent",
					dismissible: false,
					children: createVNode(_components.span, { children: [createVNode(_components.strong, { children: "Read the post:" }), " Announcing our Series A"] })
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
				name: "href",
				type: "string",
				description: "When set, the banner becomes a clickable link with a trailing arrow icon."
			},
			{
				name: "dismissible",
				type: "boolean",
				default: "true",
				description: "Show a close button that dismisses for the session."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes — typically background + text color (e.g. bg-intent text-fg-on-intent)."
			}
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Banner copy is passed via the default slot. Inline markdown (",
			createVNode(_components.code, { children: "**bold**" }),
			", links) is supported when rendering from the content collection."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "mechanism",
			children: "Mechanism"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Renders as ",
				createVNode(_components.code, { children: "<a>" }),
				" when ",
				createVNode(_components.code, { children: "href" }),
				" is set, otherwise ",
				createVNode(_components.code, { children: "<div>" }),
				". A trailing arrow icon is appended in link mode."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The dismiss button is absolutely positioned on the right when ",
				createVNode(_components.code, { children: "dismissible" }),
				" is true."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "scroll-behavior",
			children: "Scroll behavior"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "On page load, the banner’s natural height is measured and set explicitly so CSS height transitions can run." }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Scroll down" }),
				" (delta > 5px): banner collapses to ",
				createVNode(_components.code, { children: "height: 0" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Scroll up" }), " (delta < -5px): banner expands back to its natural height."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Dismiss" }),
				": sets ",
				createVNode(_components.code, { children: "height: 0" }),
				", stores ",
				createVNode(_components.code, { children: "\"announcement-dismissed\"" }),
				" in ",
				createVNode(_components.code, { children: "sessionStorage" }),
				", then ",
				createVNode(_components.code, { children: "display: none" }),
				" after the transition ends. Focus moves to the first focusable element in ",
				createVNode(_components.code, { children: "[data-nav-bar]" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "a11y",
			children: "A11y"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "role=\"status\"" }),
				" and ",
				createVNode(_components.code, { children: "aria-label=\"Site announcement\"" }),
				" on the wrapper."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Close button has ",
				createVNode(_components.code, { children: "aria-label=\"Dismiss announcement\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Arrow icon is ",
				createVNode(_components.code, { children: "aria-hidden=\"true\"" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "data-source-the-announcements-content-collection",
			children: [
				"Data source: the ",
				createVNode(_components.code, { children: "announcements" }),
				" content collection"
			]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Banners are ",
			createVNode(_components.strong, { children: "not" }),
			" hardcoded — they’re markdown files in ",
			createVNode(_components.code, { children: "src/content/announcements/" }),
			". The layout reads the collection at build time, picks the currently-active entry, and renders it. Empty directory → no banner."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "schema-srccontentconfigts",
			children: [
				"Schema (",
				createVNode(_components.code, { children: "src/content.config.ts" }),
				")"
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
			"data-language": "ts",
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
							children: " announcements"
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
							children: "\"**/*.md\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", base: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"./src/content/announcements\""
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
							children: "    href: z."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "string"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "optional"
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
							children: "    dismissible: z."
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
							children: "true"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    startsAt: z.coerce."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "date"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "optional"
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
							children: "    endsAt: z.coerce."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "date"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "optional"
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
							children: "    enabled: z."
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
							children: "true"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    priority: z."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "number"
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
							children: "0"
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
				})
			] })
		}),
		"\n",
		createVNode(_components.h3, {
			id: "frontmatter-fields",
			children: "Frontmatter fields"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Field" }),
					"\n",
					createVNode(_components.th, { children: "Type" }),
					"\n",
					createVNode(_components.th, { children: "Default" }),
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
					createVNode(_components.td, { children: createVNode(_components.code, { children: "href" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "string?" }) }),
					"\n",
					createVNode(_components.td, { children: "—" }),
					"\n",
					createVNode(_components.td, { children: "Makes the banner a link" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "dismissible" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "boolean" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "true" }) }),
					"\n",
					createVNode(_components.td, { children: "Passed through to the component’s dismiss button" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "startsAt" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "Date?" }) }),
					"\n",
					createVNode(_components.td, { children: "—" }),
					"\n",
					createVNode(_components.td, { children: "Banner is hidden before this date (UTC, ISO format)" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "endsAt" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "Date?" }) }),
					"\n",
					createVNode(_components.td, { children: "—" }),
					"\n",
					createVNode(_components.td, { children: "Banner auto-expires after this date" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "enabled" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "boolean" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "true" }) }),
					"\n",
					createVNode(_components.td, { children: "Manual on/off — useful to stage content without deleting" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "priority" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "number" }) }),
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "0" }) }),
					"\n",
					createVNode(_components.td, { children: "Tie-breaker when multiple entries are active; highest wins" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "selection-logic-in-layoutastro",
			children: "Selection logic (in Layout.astro)"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Load all entries via ",
				createVNode(_components.code, { children: "getCollection(\"announcements\")" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Keep only entries where ",
				createVNode(_components.code, { children: "enabled === true" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Keep only entries whose ",
				createVNode(_components.code, { children: "startsAt" }),
				" is in the past (or missing)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Keep only entries whose ",
				createVNode(_components.code, { children: "endsAt" }),
				" is in the future (or missing)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Sort by ",
				createVNode(_components.code, { children: "priority" }),
				" desc, then ",
				createVNode(_components.code, { children: "startsAt" }),
				" desc."
			] }),
			"\n",
			createVNode(_components.li, { children: "Take the first; if nothing remains, no banner is rendered." }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "usage-patterns",
			children: "Usage patterns"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "publish-a-banner-now",
			children: "Publish a banner now"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Create ",
			createVNode(_components.code, { children: "src/content/announcements/launch.md" }),
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
			"data-language": "md",
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
						children: "href: \"/launch\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "dismissible: true"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "enabled: true"
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
					children: [createVNode(_components.span, {
						style: {
							color: "#E1E4E8",
							fontWeight: "bold"
						},
						children: "**Launching today:**"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: " our new dashboard"
					})]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "Commit and deploy. Banner appears immediately." }),
		"\n",
		createVNode(_components.h3, {
			id: "schedule-a-banner-for-later",
			children: "Schedule a banner for later"
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
			"data-language": "md",
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
						children: "href: \"/series-a\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "startsAt: \"2026-05-01\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "endsAt: \"2026-05-15\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "enabled: true"
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
					children: [createVNode(_components.span, {
						style: {
							color: "#E1E4E8",
							fontWeight: "bold"
						},
						children: "**New:**"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: " Announcing our Series A"
					})]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: "Hidden before May 1, 2026. Auto-expires after May 15." }),
		"\n",
		createVNode(_components.h3, {
			id: "temporarily-hide-without-deleting",
			children: "Temporarily hide without deleting"
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
			"data-language": "md",
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
						children: "enabled: false"
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "Content stays here for when you want it back."
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "build-time-gotcha",
			children: "Build-time gotcha"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Filtering uses ",
			createVNode(_components.code, { children: "new Date()" }),
			" evaluated ",
			createVNode(_components.strong, { children: "at build time" }),
			", not in the browser. If ",
			createVNode(_components.code, { children: "endsAt" }),
			" passes between deploys, the banner is still shown until the next rebuild."
		] }),
		"\n",
		createVNode(_components.p, { children: "Common mitigations:" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Scheduled rebuilds" }), " — Netlify, Vercel, and Cloudflare Pages all support cron-triggered deploys. Nightly is usually enough."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Client-side expiry check" }),
				" — add a small script that hides the banner if ",
				createVNode(_components.code, { children: "endsAt < now" }),
				". The data is in the DOM at build time; JS just re-validates."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "For most marketing sites, nightly rebuilds are fine. Add the client-side check if you publish time-sensitive banners (“sale ends at midnight”)." }),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Dismissal uses ",
				createVNode(_components.code, { children: "sessionStorage" }),
				", so it resets per session (not persistent)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Designed to be rendered into ",
				createVNode(_components.code, { children: "Nav.astro" }),
				"’s ",
				createVNode(_components.code, { children: "announcement" }),
				" slot — that’s where it sits inside the grid layout."
			] }),
			"\n",
			createVNode(_components.li, { children: "The component itself knows nothing about collections — it just receives slot content and props. That keeps it reusable for any data source (JSON, CMS, env var, etc.)." }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "AnnouncementBanner",
	"description": "Top-of-page banner with optional link, dismiss, scroll-aware hide, and a content-collection-driven publishing flow.",
	"category": "block",
	"order": 40,
	"sourceFile": "src/components/AnnouncementBanner.astro",
	"status": "stable",
	"related": [
		"Nav",
		"NavMega",
		"NavMorph"
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
			"slug": "scroll-behavior",
			"text": "Scroll behavior"
		},
		{
			"depth": 3,
			"slug": "a11y",
			"text": "A11y"
		},
		{
			"depth": 2,
			"slug": "data-source-the-announcements-content-collection",
			"text": "Data source: the announcements content collection"
		},
		{
			"depth": 3,
			"slug": "schema-srccontentconfigts",
			"text": "Schema (src/content.config.ts)"
		},
		{
			"depth": 3,
			"slug": "frontmatter-fields",
			"text": "Frontmatter fields"
		},
		{
			"depth": 3,
			"slug": "selection-logic-in-layoutastro",
			"text": "Selection logic (in Layout.astro)"
		},
		{
			"depth": 2,
			"slug": "usage-patterns",
			"text": "Usage patterns"
		},
		{
			"depth": 3,
			"slug": "publish-a-banner-now",
			"text": "Publish a banner now"
		},
		{
			"depth": 3,
			"slug": "schedule-a-banner-for-later",
			"text": "Schedule a banner for later"
		},
		{
			"depth": 3,
			"slug": "temporarily-hide-without-deleting",
			"text": "Temporarily hide without deleting"
		},
		{
			"depth": 2,
			"slug": "build-time-gotcha",
			"text": "Build-time gotcha"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/announcement-banner.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/announcement-banner.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/announcement-banner.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
