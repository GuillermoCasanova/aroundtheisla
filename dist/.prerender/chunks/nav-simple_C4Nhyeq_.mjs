//#region src/content/components/nav-simple.mdx?astroPropagatedAssets
async function getMod() {
	return import("./nav-simple_CaSppBGs.mjs");
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
