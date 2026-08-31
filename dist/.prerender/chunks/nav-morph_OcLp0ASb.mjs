//#region src/content/components/nav-morph.mdx?astroPropagatedAssets
async function getMod() {
	return import("./nav-morph_CloTrdka.mjs");
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
