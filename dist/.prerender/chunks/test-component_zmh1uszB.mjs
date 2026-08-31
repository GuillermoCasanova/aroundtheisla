//#region src/content/components/test-component.mdx?astroPropagatedAssets
async function getMod() {
	return import("./test-component_h8jTid8S.mjs");
}
var defaultMod = {
	__astroPropagation: true,
	getMod,
	collectedLinks: "@@ASTRO-LINKS@@",
	collectedStyles: "@@ASTRO-STYLES@@",
	collectedScripts: []
};
//#endregion
export { defaultMod as default };
