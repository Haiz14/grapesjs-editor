import {rangeSvg} from '../svg.js';
export default {
	name: 'range',
	trait: {
		isComponent: (el) => el.tagName == 'INPUT' && el.type == 'range',
		model: {
			defaults: {
				resizable: true,
				draggable: true,
				type: 'range',
				traits: [
					"id",
					"name",
					"min",
					"max",
					"step",
					"value",
				],
			},
		}
	},
	data: {
		label: 'range',
		content: '<input type="range" style="padding: 30px;"/>',
		activate: true,
		media: rangeSvg,
		category: 'Basic',
		resizeable: true,

	},
}
