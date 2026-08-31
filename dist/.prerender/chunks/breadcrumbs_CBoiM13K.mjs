import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Breadcrumbs.astro
createAstro("https://example.com");
var $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumbs;
	const { items, homeHref = "/", homeLabel = "Home", ariaLabel = "Breadcrumb", class: className = "" } = Astro.props;
	const lastIdx = items.length - 1;
	return renderTemplate`${maybeRenderHead($$result)}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(["inline-flex w-fit items-center gap-1.5 border border-stroke bg-canvas px-2.5 py-1.5 text-xs text-fg-muted mb-8", className], "class:list")}> <ol class="flex items-center gap-1.5"> <li class="flex items-center"> <a${addAttribute(homeHref, "href")}${addAttribute(homeLabel, "aria-label")} class="grid h-6 w-6 place-items-center text-fg-muted transition hover:text-fg focus-visible:text-fg outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:house",
		"class": "h-3.5 w-3.5",
		"aria-hidden": "true"
	})} </a> </li> ${items.map((item, i) => {
		const isLast = i === lastIdx;
		return renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, {
			"name": "lucide:chevron-right",
			"class": "h-3.5 w-3.5 text-fg-subtle",
			"aria-hidden": "true"
		})} ${isLast || !item.href ? renderTemplate`<span${addAttribute(isLast ? "page" : void 0, "aria-current")} class="text-fg"> ${item.label} </span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="transition hover:text-fg focus-visible:text-fg outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"> ${item.label} </a>`} </li>`;
	})} </ol> </nav>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Breadcrumbs.astro", void 0);
//#endregion
//#region src/content/components/breadcrumbs.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"A small framed trail showing the user’s location in the site hierarchy. The first slot is always a home-icon link; subsequent items are chevron-separated, with the last item rendered as a non-link ",
			createVNode(_components.code, { children: "aria-current=\"page\"" }),
			" label."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Default",
			align: "start",
			children: createVNode($$Breadcrumbs, { items: [{
				label: "Components",
				href: "/components/"
			}, { label: "Breadcrumbs" }] })
		}),
		"\n",
		createVNode($$Preview, {
			label: "Deeper hierarchy",
			align: "start",
			children: createVNode($$Breadcrumbs, { items: [
				{
					label: "Docs",
					href: "/docs/"
				},
				{
					label: "Guides",
					href: "/docs/guides/"
				},
				{
					label: "Routing",
					href: "/docs/guides/routing/"
				},
				{ label: "Dynamic params" }
			] })
		}),
		"\n",
		createVNode($$Preview, {
			label: "Custom home",
			align: "start",
			children: createVNode($$Breadcrumbs, {
				homeHref: "/dashboard/",
				homeLabel: "Dashboard",
				items: [{
					label: "Settings",
					href: "/dashboard/settings/"
				}, { label: "Billing" }]
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
				type: "{ label: string; href?: string }[]",
				required: true,
				description: "Trail entries after the home icon. Last item renders as plain text with aria-current='page'. Items without href also render as plain text."
			},
			{
				name: "homeHref",
				type: "string",
				default: "\"/\"",
				description: "Destination of the home-icon link."
			},
			{
				name: "homeLabel",
				type: "string",
				default: "\"Home\"",
				description: "Accessible label for the home link (used as aria-label and as the prefix in the menu's aria-label)."
			},
			{
				name: "ariaLabel",
				type: "string",
				default: "\"Breadcrumb\"",
				description: "aria-label on the wrapping <nav>."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes appended to the container."
			}
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
				"Renders ",
				createVNode(_components.code, { children: "<nav aria-label=\"…\"><ol><li>…" }),
				" — the standard breadcrumbs pattern."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The home item is always an icon link (",
				createVNode(_components.code, { children: "lucide:house" }),
				"), even when items is empty."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Each subsequent item is preceded by a ",
				createVNode(_components.code, { children: "lucide:chevron-right" }),
				" separator marked ",
				createVNode(_components.code, { children: "aria-hidden=\"true\"" }),
				" so it isn’t announced."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The last item gets ",
				createVNode(_components.code, { children: "aria-current=\"page\"" }),
				" and is rendered as a ",
				createVNode(_components.code, { children: "<span>" }),
				". Any earlier item without an ",
				createVNode(_components.code, { children: "href" }),
				" is also rendered as a ",
				createVNode(_components.code, { children: "<span>" }),
				" (e.g. for a non-clickable section label)."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "<nav aria-label>" }), " so assistive tech can identify the landmark."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Chevrons are decorative (",
				createVNode(_components.code, { children: "aria-hidden" }),
				"); the visual separator does not interfere with announcement."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Focus-visible rings (",
				createVNode(_components.code, { children: "ring-focus" }),
				", ",
				createVNode(_components.code, { children: "ring-offset-canvas" }),
				") on every link."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Home link carries an explicit ",
				createVNode(_components.code, { children: "aria-label" }),
				" (icon-only, no text)."
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
							children: " Breadcrumbs "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Breadcrumbs.astro\""
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
							children: "Breadcrumbs"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " items"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={["
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "  { label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Components\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", href: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/components/\""
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
							children: "  { label: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Button\""
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
						children: "]} />"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Wired by default into ",
			createVNode(_components.code, { children: "src/pages/components/[...slug].astro" }),
			" so every component doc page gets a trail above its title."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "tokens",
			children: "Tokens"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Container: ",
				createVNode(_components.code, { children: "border-stroke" }),
				" + ",
				createVNode(_components.code, { children: "bg-canvas" }),
				", ",
				createVNode(_components.code, { children: "text-xs text-fg-muted" })
			] }),
			"\n",
			createVNode(_components.li, { children: ["Hover/current: ", createVNode(_components.code, { children: "text-fg" })] }),
			"\n",
			createVNode(_components.li, { children: ["Separators: ", createVNode(_components.code, { children: "text-fg-subtle" })] }),
			"\n",
			createVNode(_components.li, { children: [
				"Focus ring: ",
				createVNode(_components.code, { children: "ring-focus" }),
				" with ",
				createVNode(_components.code, { children: "ring-offset-canvas" })
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
	"title": "Breadcrumbs",
	"description": "Compact bordered breadcrumb trail with home icon and chevron separators. Drop into any page header.",
	"category": "pattern",
	"order": 30,
	"sourceFile": "src/components/Breadcrumbs.astro",
	"status": "stable",
	"related": ["Nav", "NavMorph"]
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
			"slug": "tokens",
			"text": "Tokens"
		}
	];
}
var url = "src/content/components/breadcrumbs.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/breadcrumbs.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/breadcrumbs.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
