//#region src/content/components/logo.mdx?astroPropagatedAssets
async function getMod() {
	return import("./logo_Dlupckyf.mjs");
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
