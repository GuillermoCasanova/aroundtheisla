//#region src/content/components/field.mdx?astroPropagatedAssets
async function getMod() {
	return import("./field_NQb-1tab.mjs");
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
