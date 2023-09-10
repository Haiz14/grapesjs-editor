import {meterSvg} from "../svg.js"
export default {
	name: "meter",
	trait:{
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
	data:{
		label: "meter",
		type: "meter",
		content: "<meter></meter>",
		selectable: true,
		category: "Extra",
		media: meterSvg,
		activate: true,
	},
}



