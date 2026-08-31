import { f as $$Button } from "./Layout_Dlmeugkd.mjs";
import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, l as renderComponent, m as renderSlot, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Icon } from "./components_BhnmEz9L.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Modal.astro
createAstro("https://example.com");
var $$Modal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Modal;
	const { id, ariaLabel, size = "md", dismissOnOverlay = true, closable = true, class: className = "" } = Astro.props;
	const sizeClass = {
		sm: "max-w-sm",
		md: "max-w-md",
		lg: "max-w-lg",
		xl: "max-w-2xl"
	}[size];
	const titleId = `${id}-title`;
	const descId = `${id}-desc`;
	const hasTitle = Astro.slots.has("title");
	const hasDescription = Astro.slots.has("description");
	const hasFooter = Astro.slots.has("footer");
	return renderTemplate`${maybeRenderHead($$result)}<dialog${addAttribute(id, "id")} data-modal${addAttribute(dismissOnOverlay ? "true" : "false", "data-dismiss-overlay")}${addAttribute(hasTitle ? titleId : void 0, "aria-labelledby")}${addAttribute(!hasTitle ? ariaLabel : void 0, "aria-label")}${addAttribute(hasDescription ? descId : void 0, "aria-describedby")}${addAttribute([
		"modal m-auto w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] border border-stroke bg-canvas shadow-popover p-0",
		sizeClass,
		className
	], "class:list")}>  <div class="flex flex-col max-h-[inherit]"> ${(hasTitle || hasDescription || closable) && renderTemplate`<header class="flex items-start justify-between gap-4 px-6 pt-6 pb-4"> <div class="flex-1 min-w-0"> ${hasTitle && renderTemplate`<h2${addAttribute(titleId, "id")} class="h4 text-fg"> ${renderSlot($$result, $$slots["title"])} </h2>`} ${hasDescription && renderTemplate`<p${addAttribute(descId, "id")} class="mt-2 text-sm text-fg-muted"> ${renderSlot($$result, $$slots["description"])} </p>`} </div> ${closable && renderTemplate`<button type="button" data-modal-close aria-label="Close dialog" class="grid h-8 w-8 shrink-0 place-items-center text-fg-muted transition hover:bg-panel-muted hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, {
		"name": "lucide:x",
		"class": "h-4 w-4",
		"aria-hidden": "true"
	})} </button>`} </header>`} <div class="px-6 pb-6 overflow-y-auto"> ${renderSlot($$result, $$slots["default"])} </div> ${hasFooter && renderTemplate`<footer class="flex items-center justify-end gap-2 border-t border-stroke px-6 py-4"> ${renderSlot($$result, $$slots["footer"])} </footer>`} </div> </dialog> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Modal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Modal.astro", void 0);
//#endregion
//#region src/content/components/modal.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul"
	}, props.components);
	const { Fragment: Fragment$1 } = _components;
	if (!Fragment$1) _missingMdxReference("Fragment", true);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"Top-layer dialog built on native ",
			createVNode(_components.code, { children: "<dialog>" }),
			" + ",
			createVNode(_components.code, { children: ".showModal()" }),
			". Triggers wired by id (",
			createVNode(_components.code, { children: "data-modal-open=\"...\"" }),
			"), so multiple buttons can open the same modal — common case for hero CTA + footer CTA + pricing-tier button all opening the same signup flow."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Trigger + dialog",
			align: "start",
			children: createVNode("div", {
				class: "flex flex-col gap-3",
				children: [createVNode("div", {
					class: "flex flex-wrap gap-2",
					children: [
						createVNode($$Button, {
							label: "Open signup",
							"data-modal-open": "docs-signup"
						}),
						createVNode($$Button, {
							label: "Open confirm",
							variant: "secondary",
							"data-modal-open": "docs-confirm"
						}),
						createVNode($$Button, {
							label: "Same modal again",
							variant: "secondary",
							"data-modal-open": "docs-signup"
						})
					]
				}), createVNode("p", {
					class: "text-xs text-fg-subtle",
					children: "All three buttons share the same modal pair. Open one, then try Esc, the X, or clicking the backdrop."
				})]
			})
		}),
		"\n",
		createVNode($$Modal, {
			id: "docs-signup",
			size: "md",
			ariaLabel: "Sign up",
			children: [
				createVNode("h2", {
					slot: "title",
					children: "Create your account"
				}),
				createVNode("p", {
					slot: "description",
					children: "Spin up a project in under five minutes."
				}),
				createVNode("form", {
					onsubmit: "event.preventDefault(); this.closest('dialog').close();",
					children: createVNode("label", {
						class: "flex flex-col gap-1 text-sm",
						children: [createVNode("span", {
							class: "text-fg-muted",
							children: "Email"
						}), createVNode("input", {
							type: "email",
							required: true,
							"data-modal-autofocus": true,
							class: "border border-stroke bg-canvas px-3 py-2 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
						})]
					})
				}),
				createVNode(Fragment$1, {
					slot: "footer",
					children: [createVNode($$Button, {
						label: "Cancel",
						variant: "secondary",
						"data-modal-close": true
					}), createVNode($$Button, { label: "Create account" })]
				})
			]
		}),
		"\n",
		createVNode($$Modal, {
			id: "docs-confirm",
			size: "sm",
			ariaLabel: "Confirm action",
			children: [
				createVNode("h2", {
					slot: "title",
					children: "Delete project?"
				}),
				createVNode("p", {
					slot: "description",
					children: "This action can’t be undone. All associated data will be permanently removed."
				}),
				createVNode(Fragment$1, {
					slot: "footer",
					children: [createVNode($$Button, {
						label: "Cancel",
						variant: "secondary",
						"data-modal-close": true
					}), createVNode($$Button, {
						label: "Delete",
						"data-modal-close": true
					})]
				})
			]
		}),
		"\n",
		createVNode(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		createVNode($$PropsTable, { props: [
			{
				name: "id",
				type: "string",
				required: true,
				description: "DOM id triggers point at via data-modal-open."
			},
			{
				name: "ariaLabel",
				type: "string",
				description: "Accessible name when no title slot is provided."
			},
			{
				name: "size",
				type: "\"sm\" | \"md\" | \"lg\" | \"xl\"",
				default: "\"md\"",
				description: "Caps the dialog max-width (sm 24rem → xl 42rem)."
			},
			{
				name: "dismissOnOverlay",
				type: "boolean",
				default: "true",
				description: "Click outside the dialog box closes it."
			},
			{
				name: "closable",
				type: "boolean",
				default: "true",
				description: "Render the X close button in the header."
			},
			{
				name: "class",
				type: "string",
				description: "Extra classes on the <dialog> element."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "slots",
			children: "Slots"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: createVNode(_components.code, { children: "title" }) }),
				" — heading. Auto-wired to ",
				createVNode(_components.code, { children: "aria-labelledby" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: createVNode(_components.code, { children: "description" }) }),
				" — optional sub-heading paragraph. Auto-wired to ",
				createVNode(_components.code, { children: "aria-describedby" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "default" }), " — body content."] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: createVNode(_components.code, { children: "footer" }) }),
				" — optional action row. Use ",
				createVNode(_components.code, { children: "<Fragment slot=\"footer\">" }),
				" to drop in multiple buttons."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "trigger--close-attributes",
			children: "Trigger / close attributes"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Attribute" }),
					"\n",
					createVNode(_components.th, { children: "Where" }),
					"\n",
					createVNode(_components.th, { children: "Behavior" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-modal-open=\"<id>\"" }) }),
					"\n",
					createVNode(_components.td, { children: "Any button or link, anywhere" }),
					"\n",
					createVNode(_components.td, { children: "Opens the modal with that id" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-modal-close" }) }),
					"\n",
					createVNode(_components.td, { children: "Element inside the modal" }),
					"\n",
					createVNode(_components.td, { children: "Closes the enclosing dialog" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-modal-close=\"<id>\"" }) }),
					"\n",
					createVNode(_components.td, { children: "Element outside, on a different modal" }),
					"\n",
					createVNode(_components.td, { children: "Closes that specific dialog" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "data-modal-autofocus" }) }),
					"\n",
					createVNode(_components.td, { children: "Child of the modal" }),
					"\n",
					createVNode(_components.td, { children: "Focused on open (overrides default first-focusable)" }),
					"\n"
				] }),
				"\n"
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
				"Native ",
				createVNode(_components.code, { children: "<dialog>" }),
				" — keyboard, focus trap, Esc-to-close, inert background all from the platform."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "aria-labelledby" }),
				" / ",
				createVNode(_components.code, { children: "aria-describedby" }),
				" auto-wired to the title / description slots."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Focus moves into the modal on open; the element with ",
				createVNode(_components.code, { children: "data-modal-autofocus" }),
				" wins, otherwise first focusable."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Focus restored to the original trigger button on close — works for any close path (X, Esc, backdrop, programmatic ",
				createVNode(_components.code, { children: ".close()" }),
				")."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Body scroll locked while open via ",
				createVNode(_components.code, { children: "html.modal-open { overflow: hidden }" }),
				". ",
				createVNode(_components.code, { children: "scrollbar-gutter: stable" }),
				" on ",
				createVNode(_components.code, { children: "<html>" }),
				" prevents layout shift."
			] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }), " disables the entry/exit animation."] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
var frontmatter = {
	"title": "Modal",
	"description": "Accessible dialog using the native <dialog> element with id-based trigger wiring.",
	"category": "pattern",
	"order": 40,
	"sourceFile": "src/components/Modal.astro",
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
			"slug": "slots",
			"text": "Slots"
		},
		{
			"depth": 2,
			"slug": "trigger--close-attributes",
			"text": "Trigger / close attributes"
		},
		{
			"depth": 2,
			"slug": "a11y",
			"text": "A11y"
		}
	];
}
var url = "src/content/components/modal.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/modal.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/modal.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
