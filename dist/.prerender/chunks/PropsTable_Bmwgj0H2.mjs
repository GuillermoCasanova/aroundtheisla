import { C as addAttribute, F as createComponent, P as createAstro, _ as renderTemplate, x as maybeRenderHead } from "./server_CAElGhNO.mjs";
import "./compiler_CFFOkF3Y.mjs";
//#region src/components/_docs/PropsTable.astro
createAstro("https://example.com");
var $$PropsTable = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PropsTable;
	const { props, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["not-prose my-6 overflow-x-auto border border-stroke", className], "class:list")}> <table class="w-full border-collapse text-sm"> <thead> <tr class="border-b border-stroke bg-panel-muted text-left text-xs font-semibold uppercase tracking-wider text-fg-subtle"> <th class="px-4 py-3">Prop</th> <th class="px-4 py-3">Type</th> <th class="px-4 py-3">Default</th> <th class="px-4 py-3 w-2/5">Description</th> </tr> </thead> <tbody> ${props.map((p, i) => renderTemplate`<tr${addAttribute([i > 0 && "border-t border-stroke"], "class:list")}> <td class="px-4 py-3 align-top"> <code class="font-mono text-xs text-fg">${p.name}</code> ${p.required && renderTemplate`<span class="ml-1 text-xs text-intent">*</span>`} </td> <td class="px-4 py-3 align-top"> <code class="font-mono text-xs text-fg-muted whitespace-pre-wrap">${p.type}</code> </td> <td class="px-4 py-3 align-top"> ${p.default ? renderTemplate`<code class="font-mono text-xs text-fg-muted">${p.default}</code>` : renderTemplate`<span class="text-fg-subtle">—</span>`} </td> <td class="px-4 py-3 align-top text-fg-muted"> ${p.description ?? ""} </td> </tr>`)} </tbody> </table> </div>`;
}, "/Users/casanova/Documents/00 - Projects/_0 - Dev_Projects/aroundtheisla/src/components/_docs/PropsTable.astro", void 0);
//#endregion
export { $$PropsTable as t };
