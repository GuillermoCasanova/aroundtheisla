import { f as $$Button } from "./Layout_Dlmeugkd.mjs";
import { d as Fragment, j as createVNode, t as __astro_tag_component__ } from "./server_CAElGhNO.mjs";
import { t as $$Form } from "./Form_C-39q8SU.mjs";
import { t as $$Field } from "./Field_DzsbRHkc.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
//#region src/content/components/contact-form.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		em: "em",
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
			"End-to-end pattern that ties together four moving parts: a static page with the\nexisting ",
			createVNode(_components.code, { children: "<Form>" }),
			" / ",
			createVNode(_components.code, { children: "<Field>" }),
			" / ",
			createVNode(_components.code, { children: "<Button>" }),
			" components, an Astro Action that\nvalidates input with Zod, a Cloudflare Worker ",
			createVNode(_components.code, { children: "send_email" }),
			" binding, and Email\nRouting on a Cloudflare-managed zone."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The user-facing flow is unremarkable — fill three fields, hit Send, get a\nconfirmation. The interesting part is what’s ",
			createVNode(_components.em, { children: "not" }),
			" there: no Resend, no\nSendGrid, no SMTP credentials, no third-party SDK. The whole notification\npath is native Cloudflare."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Contact form (preview only — submit posts to /_actions/contact in a real build)",
			align: "stretch",
			children: createVNode("div", {
				class: "w-full max-w-md",
				children: createVNode($$Form, {
					action: "/_actions/contact",
					method: "POST",
					noEnhance: true,
					children: [
						createVNode($$Field, {
							label: "First name",
							name: "firstName",
							required: true,
							autocomplete: "given-name",
							maxlength: 100
						}),
						createVNode($$Field, {
							label: "Last name",
							name: "lastName",
							required: true,
							autocomplete: "family-name",
							maxlength: 100
						}),
						createVNode($$Field, {
							label: "Email",
							name: "email",
							type: "email",
							required: true,
							autocomplete: "email",
							maxlength: 254
						}),
						createVNode($$Button, {
							type: "submit",
							variant: "primary",
							withArrow: false,
							children: "Send"
						})
					]
				})
			})
		}),
		"\n",
		createVNode(_components.h2, {
			id: "files-involved",
			children: "Files involved"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "File" }),
					"\n",
					createVNode(_components.th, { children: "Role" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "astro.config.mjs" }) }),
					"\n",
					createVNode(_components.td, { children: [
						createVNode(_components.code, { children: "output: 'static'" }),
						" + ",
						createVNode(_components.code, { children: "@astrojs/cloudflare" }),
						" adapter. The adapter mounts actions at ",
						createVNode(_components.code, { children: "/_actions/<name>" }),
						" as on-demand endpoints alongside prerendered pages."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "wrangler.jsonc" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Worker config — declares the ",
						createVNode(_components.code, { children: "NOTIFY_EMAIL" }),
						" send_email binding plus ",
						createVNode(_components.code, { children: "FROM_EMAIL" }),
						" / ",
						createVNode(_components.code, { children: "FROM_NAME" }),
						" / ",
						createVNode(_components.code, { children: "NOTIFY_TO" }),
						" vars."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "src/env.d.ts" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Module-augments the ",
						createVNode(_components.code, { children: "cloudflare:workers" }),
						" ",
						createVNode(_components.code, { children: "Env" }),
						" interface so ",
						createVNode(_components.code, { children: "import { env }" }),
						" is fully typed."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "src/actions/index.ts" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"The ",
						createVNode(_components.code, { children: "contact" }),
						" action — Zod input, MIME message via ",
						createVNode(_components.code, { children: "mimetext" }),
						", send via the binding."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "src/pages/contact.astro" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"The example page — uses ",
						createVNode(_components.code, { children: "<Form>" }),
						", ",
						createVNode(_components.code, { children: "<Field>" }),
						", ",
						createVNode(_components.code, { children: "<Button>" }),
						", posts to ",
						createVNode(_components.code, { children: "/_actions/contact" }),
						"."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "how-the-wiring-works",
			children: "How the wiring works"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The form posts ",
				createVNode(_components.code, { children: "multipart/form-data" }),
				" to ",
				createVNode(_components.code, { children: "/_actions/contact" }),
				". With JS,\n",
				createVNode(_components.code, { children: "Form.astro" }),
				" intercepts and ",
				createVNode(_components.code, { children: "fetch()" }),
				"s; without JS the browser does a native\nform POST. Both paths hit the same endpoint."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The adapter routes that path to ",
				createVNode(_components.code, { children: "server.contact" }),
				" in ",
				createVNode(_components.code, { children: "src/actions/index.ts" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Zod validates the payload. The honeypot field (",
				createVNode(_components.code, { children: "website" }),
				") silently 200s if\nfilled."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The handler imports ",
				createVNode(_components.code, { children: "env" }),
				" from ",
				createVNode(_components.code, { children: "cloudflare:workers" }),
				" (the Astro 6 API —\n",
				createVNode(_components.code, { children: "Astro.locals.runtime.env" }),
				" was removed) and calls\n",
				createVNode(_components.code, { children: "env.NOTIFY_EMAIL.send(new EmailMessage(from, to, mime))" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "action-shape",
			children: "Action shape"
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// src/actions/index.ts"
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
							children: " { defineAction, ActionError } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:actions\""
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
							children: " { z } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"astro:schema\""
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
							children: " { EmailMessage } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"cloudflare:email\""
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
							children: " { env } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"cloudflare:workers\""
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
							children: " { createMimeMessage } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"mimetext\""
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
							style: { color: "#79B8FF" },
							children: " server"
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
							style: { color: "#E1E4E8" },
							children: "  contact: "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "defineAction"
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
							children: "    accept: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"form\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    input: z."
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
							children: "      firstName: z."
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
							children: "trim"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "min"
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
							children: ")."
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
							children: "100"
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
							children: "      lastName: z."
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
							children: "trim"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "min"
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
							children: ")."
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
							children: "100"
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
							children: "      email: z."
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
							children: "trim"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "email"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "()."
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
							children: "254"
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
							children: "      website: z."
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
							children: "max"
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
							children: ")."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "optional"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(), "
						}),
						createVNode(_components.span, {
							style: { color: "#6A737D" },
							children: "// honeypot"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "    handler"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "async"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
						}),
						createVNode(_components.span, {
							style: { color: "#FFAB70" },
							children: "input"
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
							children: "      if"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " (input.website) "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "return"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { ok: "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "true"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " };"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "      // DEV / no-binding short-circuit lets `astro dev` run without"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "      // provisioning Email Routing."
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "      if"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " ("
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "import"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "meta"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ".env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "DEV"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ||"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " !"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "NOTIFY_EMAIL"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ") {"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "        console."
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
							children: "\"[contact] would send\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", input);"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "        return"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { ok: "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "true"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " };"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      }"
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
							children: "      const"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " mime"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " createMimeMessage"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "();"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      mime."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "setSender"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "({ name: env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "FROM_NAME"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", addr: env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "FROM_EMAIL"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      mime."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "setRecipient"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "NOTIFY_TO"
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
							style: { color: "#E1E4E8" },
							children: "      mime."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "setSubject"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`New contact: ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "firstName"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "} ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "lastName"
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      mime."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "addMessage"
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
							children: "        contentType: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"text/plain\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "        data: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "`Name: ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "firstName"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "} ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "lastName"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "\\n"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "Email: ${"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "input"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "email"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "}`"
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
						children: "      });"
					})
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#F97583" },
						children: "      try"
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: " {"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "        await"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "NOTIFY_EMAIL"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "send"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "          new"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " EmailMessage"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "(env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "FROM_EMAIL"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", env."
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "NOTIFY_TO"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", mime."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "asRaw"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "())"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "        );"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "      } "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "catch"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " (err) {"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "        console."
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "error"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "("
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"send_email failed\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", err);"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "        throw"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " new"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " ActionError"
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
							children: "          code: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"INTERNAL_SERVER_ERROR\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "          message: "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Could not send notification.\""
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
						children: "        });"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "      }"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "      return"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " { ok: "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "true"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " };"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "    },"
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
						children: "};"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.h2, {
			id: "binding-shape",
			children: "Binding shape"
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
			"data-language": "jsonc",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// wrangler.jsonc — relevant fields only"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "{"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "  \"compatibility_date\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"2026-04-04\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "  \"compatibility_flags\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": ["
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"nodejs_compat\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"global_fetch_strictly_public\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "],"
						})
					]
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "  \"send_email\""
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ": ["
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "    { "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "\"name\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"NOTIFY_EMAIL\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ", "
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "\"destination_address\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"you@example.com\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: " }"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  ],"
					})
				}),
				"\n",
				createVNode(_components.span, { class: "line" }),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [createVNode(_components.span, {
						style: { color: "#79B8FF" },
						children: "  \"vars\""
					}), createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: ": {"
					})]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "    \"FROM_EMAIL\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ": "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"noreply@yourdomain.tld\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "    \"FROM_NAME\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ":  "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Your App\""
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
					children: [
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "    \"NOTIFY_TO\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ":  "
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"you@example.com\""
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "  }"
					})
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: createVNode(_components.span, {
						style: { color: "#E1E4E8" },
						children: "}"
					})
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "destination_address" }),
			" locks the binding to a single verified inbox — exactly\nthe “notify me” use case. To allow multiple recipients, use ",
			createVNode(_components.code, { children: "allowed_destination_addresses" }),
			" instead."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.strong, { children: [
				"Don’t put a ",
				createVNode(_components.code, { children: "main" }),
				" field"
			] }),
			" in ",
			createVNode(_components.code, { children: "wrangler.jsonc" }),
			" — the new Cloudflare Vite\nplugin checks it at sync time before the build exists. The adapter writes its\nown ",
			createVNode(_components.code, { children: "dist/server/wrangler.json" }),
			" with the right entry on build."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "page-wiring",
			children: "Page wiring"
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
							children: " Layout "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"../layouts/Layout.astro\""
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
							children: " Form "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Form.astro\""
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
							children: " Field "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Field.astro\""
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
							children: " Button "
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: "from"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"@components/Button.astro\""
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
					children: createVNode(_components.span, {
						style: { color: "#6A737D" },
						children: "// Astro mounts every action at /_actions/<name>."
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
							children: " contactUrl"
						}),
						createVNode(_components.span, {
							style: { color: "#F97583" },
							children: " ="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " \"/_actions/contact\""
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
							children: "Layout"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " title"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Contact\""
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
							children: "Form"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " action"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={contactUrl} "
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "method"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"POST\""
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
							style: { color: "#79B8FF" },
							children: "Field"
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
							children: "\"firstName\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"First name\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " required"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " autocomplete"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"given-name\""
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Field"
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
							children: "\"lastName\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Last name\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "  required"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " autocomplete"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"family-name\""
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Field"
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
							children: "\"email\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "     label"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"Email\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "      type"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"email\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " required"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " autocomplete"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"email\""
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
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
							children: "\"submit\""
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " withArrow"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "={"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "false"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "}>Send</"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: "Button"
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
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"success\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Thanks — we'll be in touch shortly.</"
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
							children: "    <"
						}),
						createVNode(_components.span, {
							style: { color: "#85E89D" },
							children: "p"
						}),
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: " slot"
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: "="
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: "\"error\""
						}),
						createVNode(_components.span, {
							style: { color: "#E1E4E8" },
							children: ">Something went wrong. Please try again.</"
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
							style: { color: "#79B8FF" },
							children: "Form"
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
			"The existing ",
			createVNode(_components.code, { children: "<Form>" }),
			" accepts ",
			createVNode(_components.code, { children: "action" }),
			" as a string URL, so we pass\n",
			createVNode(_components.code, { children: "\"/_actions/contact\"" }),
			" directly. (",
			createVNode(_components.code, { children: "String(actions.contact)" }),
			" does ",
			createVNode(_components.strong, { children: "not" }),
			" return\nthe action URL — it stringifies the action proxy and posts to the wrong place.)"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "local-dev--two-modes",
			children: "Local dev — two modes"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "npm-run-dev--fast-ui-iteration",
			children: [createVNode(_components.code, { children: "npm run dev" }), " — fast UI iteration"]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Standard Astro dev server. The action’s DEV branch logs the payload and\nreturns success without touching the binding, so the form’s success state\nstill renders correctly. ",
			createVNode(_components.strong, { children: ["Don’t enable ", createVNode(_components.code, { children: "platformProxy" })] }),
			" in the adapter\nconfig — it makes Astro run SSR through workerd, which breaks ",
			createVNode(_components.code, { children: "astro-icon" }),
			"\n(used across this project) with ",
			createVNode(_components.code, { children: "module is not defined" }),
			"."
		] }),
		"\n",
		createVNode(_components.h3, {
			id: "wrangler-dev--exercise-the-real-binding",
			children: [createVNode(_components.code, { children: "wrangler dev" }), " — exercise the real binding"]
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
			"data-language": "sh",
			children: createVNode(_components.code, { children: [
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "npm"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " run"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " build"
						})
					]
				}),
				"\n",
				createVNode(_components.span, {
					class: "line",
					children: [
						createVNode(_components.span, {
							style: { color: "#B392F0" },
							children: "npx"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " wrangler"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " dev"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " --config"
						}),
						createVNode(_components.span, {
							style: { color: "#9ECBFF" },
							children: " dist/server/wrangler.json"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " --port"
						}),
						createVNode(_components.span, {
							style: { color: "#79B8FF" },
							children: " 4400"
						})
					]
				})
			] })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Miniflare doesn’t actually deliver email — it writes each sent message to a\n",
			createVNode(_components.code, { children: ".eml" }),
			" file under ",
			createVNode(_components.code, { children: "%TEMP%/miniflare-*/email/email/<uuid>.eml" }),
			" and logs the\npath. Open that file to verify subject/body/headers."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "production-setup-one-time",
			children: "Production setup (one-time)"
		}),
		"\n",
		createVNode(_components.p, { children: "The binding only works against a domain on Cloudflare with Email Routing\nenabled, sending to verified destination addresses." }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: "Buy or transfer a domain into Cloudflare Registrar (at-cost)." }),
			"\n",
			createVNode(_components.li, { children: [
				"Dashboard → the zone → ",
				createVNode(_components.strong, { children: "Email" }),
				" → ",
				createVNode(_components.strong, { children: "Email Routing" }),
				" → enable."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "Destination addresses" }), " → add your inbox and click the verification link."] }),
			"\n",
			createVNode(_components.li, { children: [
				"(Optional) Add a routing rule like ",
				createVNode(_components.code, { children: "hello@yourdomain.tld → you@example.com" }),
				"\nso replies work."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Update ",
				createVNode(_components.code, { children: "wrangler.jsonc" }),
				": ",
				createVNode(_components.code, { children: "FROM_EMAIL" }),
				" to an address on the Cloudflare zone,\n",
				createVNode(_components.code, { children: "NOTIFY_TO" }),
				" and ",
				createVNode(_components.code, { children: "destination_address" }),
				" to the verified inbox."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "npx wrangler deploy --config dist/server/wrangler.json" }), "."] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "reuse-checklist",
			children: "Reuse checklist"
		}),
		"\n",
		createVNode(_components.p, { children: "To drop this pattern into another Astro 6 project:" }),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "npm i @astrojs/cloudflare mimetext" }), "."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "astro.config.mjs" }),
				": ",
				createVNode(_components.code, { children: "output: 'static'" }),
				" + ",
				createVNode(_components.code, { children: "adapter: cloudflare()" }),
				" (no ",
				createVNode(_components.code, { children: "platformProxy" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Copy ",
				createVNode(_components.code, { children: "wrangler.jsonc" }),
				", ",
				createVNode(_components.code, { children: "src/env.d.ts" }),
				", ",
				createVNode(_components.code, { children: "src/actions/index.ts" }),
				", ",
				createVNode(_components.code, { children: "src/pages/contact.astro" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Update ",
				createVNode(_components.code, { children: "name" }),
				", ",
				createVNode(_components.code, { children: "FROM_EMAIL" }),
				", ",
				createVNode(_components.code, { children: "NOTIFY_TO" }),
				", and ",
				createVNode(_components.code, { children: "destination_address" }),
				" in ",
				createVNode(_components.code, { children: "wrangler.jsonc" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"If the project doesn’t already have ",
				createVNode(_components.code, { children: "Form" }),
				" / ",
				createVNode(_components.code, { children: "Field" }),
				" / ",
				createVNode(_components.code, { children: "Button" }),
				", copy those over."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "status-field--why-per-project",
			children: "Status field — why “per-project”"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Marked ",
			createVNode(_components.code, { children: "per-project" }),
			" (not ",
			createVNode(_components.code, { children: "stable" }),
			") because the pattern requires environment\nconfig (",
			createVNode(_components.code, { children: "wrangler.jsonc" }),
			", Email Routing on a Cloudflare zone) that the\ncomponent itself can’t carry. It’s a ",
			createVNode(_components.em, { children: "recipe" }),
			" you reproduce in each project,\nnot a drop-in component."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "things-to-add-later",
			children: "Things to add later"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "Rate limiting (Turnstile, or a KV-backed per-IP counter)." }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "Reply-To" }), " header set to the submitter’s email so you can reply directly."] }),
			"\n",
			createVNode(_components.li, { children: "HTML body alongside the plain-text one." }),
			"\n",
			createVNode(_components.li, { children: "Persistence to D1 if submissions need to be auditable beyond email." }),
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
				"The action has a DEV short-circuit (",
				createVNode(_components.code, { children: "import.meta.env.DEV || !env.NOTIFY_EMAIL" }),
				") so the form works in ",
				createVNode(_components.code, { children: "astro dev" }),
				" without the binding. Remove or tighten it if you want dev to require the real binding (run ",
				createVNode(_components.code, { children: "wrangler dev" }),
				" instead)."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Astro 6 removed ",
				createVNode(_components.code, { children: "Astro.locals.runtime.env" }),
				". Use ",
				createVNode(_components.code, { children: "import { env } from \"cloudflare:workers\"" }),
				" and module-augment its ",
				createVNode(_components.code, { children: "Env" }),
				" interface in ",
				createVNode(_components.code, { children: "src/env.d.ts" }),
				" for typed bindings."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The honeypot is provided by ",
				createVNode(_components.code, { children: "<Form>" }),
				" itself (hidden ",
				createVNode(_components.code, { children: "website" }),
				" input). The action’s Zod schema mirrors that name and rejects any non-empty value."
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
	"title": "Contact form",
	"description": "Reusable pattern — simple form (first name, last name, email) captured by an Astro Action and emailed via Cloudflare's native send_email binding. No third-party email API.",
	"category": "form",
	"order": 12,
	"sourceFile": "src/pages/contact.astro",
	"status": "per-project",
	"related": [
		"Form",
		"Field",
		"Button"
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
			"slug": "files-involved",
			"text": "Files involved"
		},
		{
			"depth": 2,
			"slug": "how-the-wiring-works",
			"text": "How the wiring works"
		},
		{
			"depth": 2,
			"slug": "action-shape",
			"text": "Action shape"
		},
		{
			"depth": 2,
			"slug": "binding-shape",
			"text": "Binding shape"
		},
		{
			"depth": 2,
			"slug": "page-wiring",
			"text": "Page wiring"
		},
		{
			"depth": 2,
			"slug": "local-dev--two-modes",
			"text": "Local dev — two modes"
		},
		{
			"depth": 3,
			"slug": "npm-run-dev--fast-ui-iteration",
			"text": "npm run dev — fast UI iteration"
		},
		{
			"depth": 3,
			"slug": "wrangler-dev--exercise-the-real-binding",
			"text": "wrangler dev — exercise the real binding"
		},
		{
			"depth": 2,
			"slug": "production-setup-one-time",
			"text": "Production setup (one-time)"
		},
		{
			"depth": 2,
			"slug": "reuse-checklist",
			"text": "Reuse checklist"
		},
		{
			"depth": 2,
			"slug": "status-field--why-per-project",
			"text": "Status field — why “per-project”"
		},
		{
			"depth": 2,
			"slug": "things-to-add-later",
			"text": "Things to add later"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/contact-form.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/contact-form.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[/* @__PURE__ */ Symbol.for("mdx-component")] = true;
Content[/* @__PURE__ */ Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/contact-form.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
