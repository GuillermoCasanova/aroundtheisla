//#region src/content/components/logo-marquee.mdx?astroPropagatedAssets
async function getMod() {
	return import("./logo-marquee_BFE0RDfw.mjs");
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
