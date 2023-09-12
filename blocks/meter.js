//@ts-check
import {meterSvg} from "../svg.js"
import * as Types from "../types.js"

// export default 
/** @type {Types.blockConfig}*/
const blockConfig = {
	name: "meter",
	componentType:{
	isComponent: el => el.tagName === "METER",
		model: {
			defaults: {
				type: "meter",
				traits: [
					"name",
					"value",
					"min",
					"max",
					"low",
					"high",
					"optimum",
				]
			}
		}
	},
	blockProperties:{
		label: "meter",
		content: "<meter></meter>",
		category: "Extra",
		media: meterSvg,
		activate: true,
	},
}

export default blockConfig

