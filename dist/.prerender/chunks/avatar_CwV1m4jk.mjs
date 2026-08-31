import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { n as $$Image } from "./_astro_assets_CWgiBl4N.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Avatar.astro
createAstro("https://example.com");
var $$Avatar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Avatar;
	const { name, src, alt, position, size = "md", shape = "circle", status, hideLabel = false, class: className } = Astro.props;
	const imgAlt = alt ?? (hideLabel ? name : "");
	const initials = (() => {
		const parts = name.trim().split(/\s+/).filter(Boolean);
		if (parts.length === 0) return "?";
		if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
		return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
	})();
	return renderTemplate`${maybeRenderHead($$result)}<span data-avatar${addAttribute(size, "data-avatar-size")}${addAttribute(shape, "data-avatar-shape")}${addAttribute(["avatar", className], "class:list")}> <span data-avatar-figure role="img"${addAttribute(hideLabel ? name : void 0, "aria-label")}> <span data-avatar-initials aria-hidden="true">${initials}</span> ${src && (typeof src === "string" ? renderTemplate`<img data-avatar-img${addAttribute(src, "src")}${addAttribute(imgAlt, "alt")} loading="lazy" decoding="async">` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"data-avatar-img": true,
		"src": src,
		"alt": imgAlt,
		"loading": "lazy",
		"decoding": "async"
	})}`)} ${status && renderTemplate`<span${addAttribute(status, "data-avatar-status")} role="status"${addAttribute({
		online: "Online",
		offline: "Offline",
		away: "Away",
		busy: "Busy"
	}[status], "aria-label")}></span>`} </span> ${!hideLabel && renderTemplate`<span data-avatar-label> <span data-avatar-name>${name}</span> ${position && renderTemplate`<span data-avatar-position>${position}</span>`} </span>`} </span> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Avatar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Avatar.astro", void 0);
//#endregion
//#region src/content/components/avatar.mdx
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
		createVNode(_components.p, { children: "Compact author block — avatar circle (image or initials) plus an optional name and position label. Image is optional; if omitted or it fails to load, initials derived from the name are shown instead. An optional status dot can be pinned to the corner of the avatar." }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Image + name + position",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-col gap-4 py-2",
				children: [
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						position: "Principal Designer"
					}),
					createVNode($$Avatar, {
						name: "Marcus Reed",
						src: "https://i.pravatar.cc/120?img=12",
						position: "Engineering Manager"
					}),
					createVNode($$Avatar, {
						name: "Anna Schmidt",
						position: "Product, Growth"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Initials fallback (no image)",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-4 py-2",
				children: [
					createVNode($$Avatar, {
						name: "Jane Cooper",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Marcus Reed",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Olu Adebayo",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Sam",
						hideLabel: true
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Sizes",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-end gap-4 py-2",
				children: [
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						size: "xs",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						size: "sm",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						size: "md",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						size: "lg",
						hideLabel: true
					}),
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						size: "xl",
						hideLabel: true
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Status indicators",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-6 py-2",
				children: [
					createVNode($$Avatar, {
						name: "Jane Cooper",
						src: "https://i.pravatar.cc/120?img=47",
						status: "online",
						position: "Online",
						size: "lg"
					}),
					createVNode($$Avatar, {
						name: "Marcus Reed",
						src: "https://i.pravatar.cc/120?img=12",
						status: "busy",
						position: "Busy",
						size: "lg"
					}),
					createVNode($$Avatar, {
						name: "Olu Adebayo",
						status: "away",
						position: "Away",
						size: "lg"
					}),
					createVNode($$Avatar, {
						name: "Sam Lee",
						status: "offline",
						position: "Offline",
						size: "lg"
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Square shape",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-4 py-2",
				children: [createVNode($$Avatar, {
					name: "Acme Co.",
					src: "https://i.pravatar.cc/120?img=68",
					shape: "square",
					position: "Brand"
				}), createVNode($$Avatar, {
					name: "Globex",
					shape: "square",
					position: "Brand"
				})]
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
				name: "name",
				type: "string",
				description: "Person's full name. Required — drives initials, alt text, and the accessible label when `hideLabel` is set."
			},
			{
				name: "src",
				type: "string | ImageMetadata",
				description: "Avatar image — an imported astro:assets asset (optimized) or a URL string (CMS/remote). If omitted, or if it fails to load, initials are shown instead."
			},
			{
				name: "alt",
				type: "string",
				description: "Image alt text. Defaults to `name`. Set to an empty string when a sibling label already announces the person."
			},
			{
				name: "position",
				type: "string",
				description: "Sub-label rendered under the name (job title, team, role)."
			},
			{
				name: "size",
				type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
				default: "\"md\"",
				description: "Avatar diameter. Label font size scales with the avatar size."
			},
			{
				name: "shape",
				type: "\"circle\" | \"square\"",
				default: "\"circle\"",
				description: "Avatar shape."
			},
			{
				name: "status",
				type: "\"online\" | \"offline\" | \"away\" | \"busy\"",
				description: "Show a status dot at the corner of the avatar with an aria-label announcing the state."
			},
			{
				name: "hideLabel",
				type: "boolean",
				default: "false",
				description: "Hide the visible name + position. The avatar still gets an accessible name from `name`."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
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
				"The avatar figure is ",
				createVNode(_components.code, { children: "role=\"img\"" }),
				" and gets an ",
				createVNode(_components.code, { children: "aria-label" }),
				" of ",
				createVNode(_components.code, { children: "name" }),
				" when ",
				createVNode(_components.code, { children: "hideLabel" }),
				" is set, so screen readers always announce who it represents."
			] }),
			"\n",
			createVNode(_components.li, { children: "When the visible name is shown, the figure’s accessible name is left empty (the name appears as text right next to it) — this avoids duplicate announcement." }),
			"\n",
			createVNode(_components.li, { children: [
				"Status dots get ",
				createVNode(_components.code, { children: "role=\"status\"" }),
				" and an ",
				createVNode(_components.code, { children: "aria-label" }),
				" like ",
				createVNode(_components.code, { children: "\"Online\"" }),
				" so screen readers describe presence."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Initials are marked ",
				createVNode(_components.code, { children: "aria-hidden" }),
				" — they’re a visual fallback, not part of the accessible name."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The image uses ",
				createVNode(_components.code, { children: "loading=\"lazy\"" }),
				" and ",
				createVNode(_components.code, { children: "decoding=\"async\"" }),
				" to keep avatars off the critical path."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "wiring-to-md--mdx-content",
			children: "Wiring to MD / MDX content"
		}),
		"\n",
		createVNode(_components.p, { children: "There are three common patterns for driving Avatars from authored content." }),
		"\n",
		createVNode(_components.h3, {
			id: "1-inline-inside-mdx",
			children: "1. Inline inside MDX"
		}),
		"\n",
		createVNode(_components.p, { children: "MDX files can import the component and use it directly — same as inside this doc:" }),
		"\n",
		createVNode(_components.pre, {
			class: "astro-code github-dark",
			style: {
				backgroundColor: "#24292e",
				color: "#e1e4e8",
				overflowX: "auto"
			},
			tabindex: "0",
			"data-language": "mdx",
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
						children: "title: \"Why we ship every Friday\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "date: 2026-04-12"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "import Avatar from \""
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "@"
						}),
						createVNode(_components.span, {
							style: {
								color: "#DBEDFF",
								textDecoration: "underline"
							},
							children: "components/Avatar"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ".astro\";"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "<Avatar"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  name=\"Jane Cooper\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  src=\"/img/team/jane.jpg\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  position=\"Principal Designer\""
					})
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "The team has been shipping every Friday for the past two years…"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"This works for the body of any MDX page (blog posts, case studies, changelog entries) because MDX evaluates ",
			createVNode(_components.code, { children: "import" }),
			" and JSX. Plain ",
			createVNode(_components.code, { children: ".md" }),
			" files cannot do this — Astro’s Markdown renderer doesn’t run JSX."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "2-frontmatter-driven-recommended-for-blog-posts--case-studies",
			children: "2. Frontmatter-driven (recommended for blog posts / case studies)"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Type the author shape on the collection so every entry can pass it to ",
			createVNode(_components.code, { children: "<Avatar />" }),
			" from a layout. In ",
			createVNode(_components.code, { children: "src/content.config.ts" }),
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
							children: "    author: z."
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
							children: "      name: z."
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
							children: "      position: z."
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
							children: "      avatar: z."
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
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    }),"
					})
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
		createVNode(_components.p, { children: "A blog post’s frontmatter:" }),
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
						children: "title: \"Why we ship every Friday\""
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "date: 2026-04-12"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "author:"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  name: Jane Cooper"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  position: Principal Designer"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  avatar: /img/team/jane.jpg"
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
						children: "Body copy here…"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Render it from the page route (e.g. ",
			createVNode(_components.code, { children: "src/pages/blog/[...slug].astro" }),
			"):"
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
							children: " Avatar "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Avatar.astro\""
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
							children: " { getEntry, render } "
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
							children: " entry"
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
							children: " getEntry"
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
							children: ", Astro.params.slug);"
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
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Content"
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
							style: { color: "#F97583" },
							children: " await"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " render"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(entry);"
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
							style: { color: "#E1E4E8" },
							children: " { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "author"
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
							children: " entry.data;"
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
							style: { color: "#85E89D" },
							children: "header"
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
							children: "h1"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">{entry.data.title}</"
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
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  <"
					}), createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "Avatar"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    name"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={author.name}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    src"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={author.avatar}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "    position"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={author.position}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    size"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"sm\""
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
							style: { color: "#85E89D" },
							children: "header"
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
							children: "<"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Content"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " />"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"This works for both ",
			createVNode(_components.code, { children: ".md" }),
			" and ",
			createVNode(_components.code, { children: ".mdx" }),
			" posts because the layout — not the body — renders the avatar."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "3-shared-author-records-referenced-from-posts",
			children: "3. Shared author records (referenced from posts)"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"If the same person writes many posts, define an ",
			createVNode(_components.code, { children: "authors" }),
			" collection and reference it by id from each post:"
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
							children: "const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " authors"
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
							children: "\"./src/content/authors\""
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
							children: "    name: z."
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
							children: "    position: z."
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
							children: "    avatar: z."
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
							children: "    author: "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "reference"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"authors\""
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
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "src/content/authors/jane-cooper.md" }), ":"] }),
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
						children: "name: Jane Cooper"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "position: Principal Designer"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "avatar: /img/team/jane.jpg"
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
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"A post references ",
			createVNode(_components.code, { children: "author: jane-cooper" }),
			", and the page resolves it:"
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
							children: " Avatar "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Avatar.astro\""
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
							children: " { getEntry } "
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
							children: " post"
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
							children: " getEntry"
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
							children: ", Astro.params.slug);"
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
							children: " author"
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
							children: " getEntry"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(post.data.author);"
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
						children: "Avatar"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  name"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={author.data.name}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  src"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={author.data.avatar}"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#B392F0" },
						children: "  position"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "={author.data.position}"
					})]
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
		createVNode(_components.p, { children: "Editing one author file updates the avatar everywhere." }),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Initials are derived as: first letter of the first word + first letter of the last word, uppercased. Single-word names use the first two letters. Empty / whitespace-only names render ",
				createVNode(_components.code, { children: "?" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "The image is layered over the initials; if it fails to load, a small client script hides the image so the initials show through. Cached errors before the listener attaches are also handled." }),
			"\n",
			createVNode(_components.li, { children: [
				"The status dot uses ",
				createVNode(_components.code, { children: "box-shadow" }),
				" to draw a ring matching ",
				createVNode(_components.code, { children: "--color-canvas" }),
				", so it stands out against any avatar."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"For groups of overlapping avatars (a stack), wrap several ",
				createVNode(_components.code, { children: "Avatar" }),
				"s in a flex container with negative left margins on all but the first."
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
	"title": "Avatar",
	"description": "Author avatar with image + initials fallback, optional name and position label, optional status indicator, and five size variants.",
	"category": "primitive",
	"order": 13,
	"sourceFile": "src/components/Avatar.astro",
	"status": "stable",
	"related": ["Tag", "Logo"]
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
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "wiring-to-md--mdx-content",
			"text": "Wiring to MD / MDX content"
		},
		{
			"depth": 3,
			"slug": "1-inline-inside-mdx",
			"text": "1. Inline inside MDX"
		},
		{
			"depth": 3,
			"slug": "2-frontmatter-driven-recommended-for-blog-posts--case-studies",
			"text": "2. Frontmatter-driven (recommended for blog posts / case studies)"
		},
		{
			"depth": 3,
			"slug": "3-shared-author-records-referenced-from-posts",
			"text": "3. Shared author records (referenced from posts)"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/avatar.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/avatar.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/avatar.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
