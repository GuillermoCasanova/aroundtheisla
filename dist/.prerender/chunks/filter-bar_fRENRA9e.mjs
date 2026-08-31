//#region src/content/components/filter-bar.mdx?astroPropagatedAssets
async function getMod() {
	return import("./filter-bar_DaNOnzTY.mjs");
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
