import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/LogoMarquee.astro
createAstro("https://example.com");
var $$LogoMarquee = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LogoMarquee;
	const { class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative"> <div class="text-body-xsm text-fg-muted text-center absolute -mt-3 left-1/2 -translate-x-1/2 bg-canvas px-2">Trusted by leading data companies</div> <div${addAttribute(["overflow-hidden", className], "class:list")}> <div class="flex animate-marquee gap-8"> <!-- First set --> ${renderSlot($$result, $$slots["default"])} <!-- Duplicate for seamless loop --> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/LogoMarquee.astro", void 0);
//#endregion
//#region src/content/components/logo-marquee.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "A continuous, JS-free marquee. The slot is rendered twice — when the first set scrolls out, the duplicate is already in place, so the loop is seamless." }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Lucide-icon marquee",
			children: createVNode($$LogoMarquee, {
				class: "border-y border-stroke py-8 w-full",
				children: [
					createVNode($$Icon, {
						name: "lucide:figma",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:github",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:slack",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:linkedin",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:youtube",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:twitch",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:dribbble",
						class: "h-6 w-auto shrink-0 text-fg-muted"
					}),
					createVNode($$Icon, {
						name: "lucide:codepen",
						class: "h-6 w-auto shrink-0 text-fg-muted"
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
		createVNode($$PropsTable, { props: [{
			name: "class",
			type: "string",
			default: "\"\"",
			description: "Extra classes on the overflow container — typically borders and vertical padding."
		}] }),
		"\n",
		createVNode(_components.p, { children: [
			"Children are passed via the default ",
			createVNode(_components.code, { children: "<slot />" }),
			"."
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
				"Outer container has ",
				createVNode(_components.code, { children: "overflow-hidden" }),
				" to clip content at the viewport edges."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A flex inner container uses the ",
				createVNode(_components.code, { children: "animate-marquee" }),
				" utility (defined in ",
				createVNode(_components.code, { children: "global.css" }),
				") — ",
				createVNode(_components.code, { children: "translateX(0)" }),
				" to ",
				createVNode(_components.code, { children: "translateX(-50%)" }),
				" over 30 seconds."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The ",
				createVNode(_components.code, { children: "<slot />" }),
				" is rendered ",
				createVNode(_components.strong, { children: "twice" }),
				". When the first set translates out of view, the duplicate has scrolled in to replace it — no visible seam."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"A “Trusted by leading data companies” label is absolutely positioned above the marquee with a ",
				createVNode(_components.code, { children: "bg-canvas" }),
				" background to punch through the border."
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
							children: " LogoMarquee "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/LogoMarquee.astro\""
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
							children: "LogoMarquee"
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
							children: "\"border-t border-stroke py-6\""
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
							children: "img"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/logos/company-1.svg\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Company 1\""
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
							children: "\"h-6 w-auto shrink-0\""
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
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "img"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/logos/company-2.svg\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Company 2\""
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
							children: "\"h-6 w-auto shrink-0\""
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
							children: "  <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "img"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " src"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"/logos/company-3.svg\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " alt"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Company 3\""
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
							children: "\"h-6 w-auto shrink-0\""
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
							children: "</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "LogoMarquee"
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
			id: "gotchas",
			children: "Gotchas"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "You need enough children to fill the container width — otherwise the seam between the two duplicate sets is visible as a gap." }),
			"\n",
			createVNode(_components.li, { children: "The slot is duplicated in HTML, so each child appears in the DOM twice. Avoid putting interactive elements inside (clickable logos will have two activations registering against analytics, etc.)." }),
			"\n",
			createVNode(_components.li, { children: [
				"The animation is pure CSS. Speed comes from the ",
				createVNode(_components.code, { children: "marquee" }),
				" keyframes in ",
				createVNode(_components.code, { children: "global.css" }),
				" (currently 30s linear)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The “Trusted by” label assumes the page background matches ",
				createVNode(_components.code, { children: "--color-canvas" }),
				" so its ",
				createVNode(_components.code, { children: "bg-canvas" }),
				" punches through any overlapping border cleanly."
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
	"title": "LogoMarquee",
	"description": "Infinitely scrolling row of logos with a centered \"Trusted by\" label, pure CSS animation.",
	"category": "block",
	"order": 30,
	"sourceFile": "src/components/LogoMarquee.astro",
	"status": "stable",
	"related": ["Logo"]
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
			"depth": 2,
			"slug": "usage",
			"text": "Usage"
		},
		{
			"depth": 2,
			"slug": "gotchas",
			"text": "Gotchas"
		}
	];
}
var url = "src/content/components/logo-marquee.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/logo-marquee.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/logo-marquee.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
