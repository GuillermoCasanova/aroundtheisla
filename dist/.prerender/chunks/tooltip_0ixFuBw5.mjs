import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, d as Fragment, j as createVNode, m as renderSlot, o as renderScript, t as __astro_tag_component__, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
import { t as $$Preview } from "./Preview_ChFXYVhZ.mjs";
import { t as $$PropsTable } from "./PropsTable_Bmwgj0H2.mjs";
//#region src/components/Tooltip.astro
createAstro("https://example.com");
var $$Tooltip = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tooltip;
	const { text, placement = "top", showDelay = 200, hideDelay = 100, id, class: className } = Astro.props;
	const tooltipId = id ?? `tt-${Math.random().toString(36).slice(2, 10)}`;
	const hasNamedTrigger = Astro.slots.has("trigger");
	const hasContentSlot = Astro.slots.has("content");
	return renderTemplate`${maybeRenderHead($$result)}<span data-tooltip="component"${addAttribute(placement, "data-tooltip-placement")}${addAttribute(showDelay, "data-tooltip-show-delay")}${addAttribute(hideDelay, "data-tooltip-hide-delay")}${addAttribute(tooltipId, "data-tooltip-target")}${addAttribute(["tooltip", className], "class:list")}> ${hasNamedTrigger ? renderTemplate`${renderSlot($$result, $$slots["trigger"])}` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} <span${addAttribute(tooltipId, "id")} role="tooltip" popover="manual" data-tooltip="content"${addAttribute(placement, "data-placement")}> ${hasContentSlot ? renderTemplate`${renderSlot($$result, $$slots["content"])}` : text} <span data-tooltip="arrow" aria-hidden="true"></span> </span> </span> ${renderScript($$result, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Tooltip.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/Tooltip.astro", void 0);
//#endregion
//#region src/content/components/tooltip.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		code: "code",
		em: "em",
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
			"Lightweight tooltip built on the native ",
			createVNode(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
				children: "Popover API"
			}),
			". Uses ",
			createVNode(_components.code, { children: "popover=\"manual\"" }),
			" so its visibility is controlled by hover/focus, not by click — that’s the right model for a hint, not an action menu. ",
			createVNode(_components.code, { children: "aria-describedby" }),
			" is wired automatically from the trigger to the tooltip."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "preview",
			children: "Preview"
		}),
		"\n",
		createVNode($$Preview, {
			label: "Hover or focus the buttons",
			align: "center",
			children: createVNode("div", {
				class: "flex flex-wrap items-center gap-6 py-8",
				children: [
					createVNode($$Tooltip, {
						text: "Top-anchored tooltip",
						placement: "top",
						children: createVNode("button", {
							class: "border border-stroke bg-panel px-4 py-2 text-sm",
							children: "Top"
						})
					}),
					createVNode($$Tooltip, {
						text: "Bottom-anchored tooltip",
						placement: "bottom",
						children: createVNode("button", {
							class: "border border-stroke bg-panel px-4 py-2 text-sm",
							children: "Bottom"
						})
					}),
					createVNode($$Tooltip, {
						text: "Left-anchored tooltip",
						placement: "left",
						children: createVNode("button", {
							class: "border border-stroke bg-panel px-4 py-2 text-sm",
							children: "Left"
						})
					}),
					createVNode($$Tooltip, {
						text: "Right-anchored tooltip",
						placement: "right",
						children: createVNode("button", {
							class: "border border-stroke bg-panel px-4 py-2 text-sm",
							children: "Right"
						})
					})
				]
			})
		}),
		"\n",
		createVNode($$Preview, {
			label: "Rich content via the `content` slot",
			align: "center",
			children: createVNode("div", {
				class: "py-8",
				children: createVNode($$Tooltip, {
					placement: "top",
					children: [createVNode("button", {
						slot: "trigger",
						class: "border border-stroke bg-panel px-4 py-2 text-sm",
						children: createVNode(_components.p, { children: "Hover for details" })
					}), createVNode(Fragment$1, {
						slot: "content",
						children: createVNode(_components.p, { children: [
							createVNode(_components.strong, { children: "Pro tip:" }),
							" rich tooltips support ",
							createVNode(_components.em, { children: "any" }),
							" markup — but keep them short."
						] })
					})]
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
				name: "text",
				type: "string",
				description: "Plain-text body. Use the `content` slot instead for rich markup."
			},
			{
				name: "placement",
				type: "\"top\" | \"bottom\" | \"left\" | \"right\"",
				default: "\"top\"",
				description: "Side of the trigger to anchor to."
			},
			{
				name: "showDelay",
				type: "number",
				default: "200",
				description: "Show delay in ms — debounces accidental hovers."
			},
			{
				name: "hideDelay",
				type: "number",
				default: "100",
				description: "Hide delay in ms — bridges brief gaps when re-entering the trigger."
			},
			{
				name: "id",
				type: "string",
				description: "Stable ID for the tooltip element. Auto-generated if omitted."
			},
			{
				name: "class",
				type: "string",
				description: "Additional classes on the wrapper."
			}
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "slots",
			children: "Slots"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "Slot" }),
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
					createVNode(_components.td, { children: "(default)" }),
					"\n",
					createVNode(_components.td, { children: [
						"The trigger element. The first focusable descendant gets ",
						createVNode(_components.code, { children: "aria-describedby" }),
						"."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "trigger" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Alternative explicit trigger slot — used when ",
						createVNode(_components.code, { children: "content" }),
						" slot is also provided."
					] }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: createVNode(_components.code, { children: "content" }) }),
					"\n",
					createVNode(_components.td, { children: [
						"Rich content for the tooltip body. Overrides ",
						createVNode(_components.code, { children: "text" }),
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
			id: "accessibility",
			children: "Accessibility"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"Tooltip element gets ",
				createVNode(_components.code, { children: "role=\"tooltip\"" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"The trigger gets ",
				createVNode(_components.code, { children: "aria-describedby" }),
				" pointing at the tooltip — screen readers announce the description after the trigger label."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.code, { children: "popover=\"manual\"" }),
				" means clicks elsewhere do ",
				createVNode(_components.strong, { children: "not" }),
				" dismiss the tooltip — that’s the right behavior for a description, not a menu."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				"Opens on ",
				createVNode(_components.code, { children: "focus" }),
				" (keyboard users) as well as ",
				createVNode(_components.code, { children: "pointerenter" }),
				". Closes on ",
				createVNode(_components.code, { children: "blur" }),
				" and ",
				createVNode(_components.code, { children: "pointerleave" }),
				"."
			] }),
			"\n",
			createVNode(_components.li, { children: "Escape closes the tooltip without moving focus." }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.code, { children: "prefers-reduced-motion: reduce" }), " removes the fade/slide transition."] }),
			"\n",
			createVNode(_components.li, { children: [
				"Tooltips have ",
				createVNode(_components.code, { children: "pointer-events: none" }),
				" so they never intercept clicks on the underlying UI."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "dependencies",
			children: "Dependencies"
		}),
		"\n",
		createVNode(_components.p, { children: "None. Native Popover API (Baseline 2024)." }),
		"\n",
		createVNode(_components.h2, {
			id: "notes",
			children: "Notes"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				"The trigger should be a real focusable element (",
				createVNode(_components.code, { children: "<button>" }),
				", ",
				createVNode(_components.code, { children: "<a>" }),
				", ",
				createVNode(_components.code, { children: "<input>" }),
				", etc.). Tooltips on non-focusable text are a screen-reader trap; if you need one, add ",
				createVNode(_components.code, { children: "tabindex=\"0\"" }),
				" to the trigger."
			] }),
			"\n",
			createVNode(_components.li, { children: "Tooltips close on scroll and resize — re-hovering re-opens them at the new position." }),
			"\n",
			createVNode(_components.li, { children: "Multiple tooltips on a page are independent and can be triggered from different elements with no shared state." }),
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
	"title": "Tooltip",
	"description": "Accessible popover-API tooltip — hover and focus to open, Escape or blur to close, anchored to the trigger via a small JS positioner.",
	"category": "pattern",
	"order": 57,
	"sourceFile": "src/components/Tooltip.astro",
	"status": "stable",
	"related": ["Dropdown", "Modal"]
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
			"slug": "accessibility",
			"text": "Accessibility"
		},
		{
			"depth": 2,
			"slug": "dependencies",
			"text": "Dependencies"
		},
		{
			"depth": 2,
			"slug": "notes",
			"text": "Notes"
		}
	];
}
var url = "src/content/components/tooltip.mdx";
var file = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/tooltip.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/content/components/tooltip.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
