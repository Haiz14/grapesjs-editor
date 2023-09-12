//@ts-check
import {iframeSvg} from "../svg.js"
import * as Types from "../types.js"

/** @type {Types.blockConfig}*/
const blockConfig = {
	name: "iframe",
	componentType: {
	isComponent: el => el.tagName === "IFRAME",
		model: {
			defaults: {
				type: "iframe",
				traits: [
					"src",
					"title",
					"id"
				]
			}
		}
	},
	blockProperties:{
		label: "iframe",
		content: "<iframe> </iframe>",
		attributes: { class: "fa fa-iframe" },
		category: "Basic",
		media: iframeSvg,
		activate: true,
	},
}

export default blockConfig

