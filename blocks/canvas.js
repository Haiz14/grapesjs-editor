import {canvasSvg} from '../svg.js';
export default {
	name: 'canvas',
	trait: {
		isComponent: (el) => el.tagName == 'CANVAS',
		model: {
			defaults: {
				resizable: true,
				draggable: true,
				type: 'canvas',
				traits: [
					"id",
					"class",
				],
			},
		}
	},
	data: {
		label: 'Canvas',
		content: '<canvas></canvas>',
		activate: true,
		media: canvasSvg,
		category: 'Extra',
		resizeable: true,
	},
}
