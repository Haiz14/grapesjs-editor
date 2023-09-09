import {iframeSvg} from "../svg.js"
export default {
	name: "iframe",
	trait:{
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
	data:{
		label: "iframe",
		type: "iframe",
		content: "<iframe> </iframe>",
		attributes: { class: "fa fa-iframe" },
		selectable: true,
		category: "Basic",
		media: iframeSvg,
		activate: true,
	},
}



