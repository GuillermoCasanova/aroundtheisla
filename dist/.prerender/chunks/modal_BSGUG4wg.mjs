//#region src/content/components/modal.mdx?astroPropagatedAssets
async function getMod() {
	return import("./modal_DCn-N3r1.mjs");
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
