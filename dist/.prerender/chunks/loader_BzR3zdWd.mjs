//#region src/content/components/loader.mdx?astroPropagatedAssets
async function getMod() {
	return import("./loader_nf9z05lo.mjs");
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
