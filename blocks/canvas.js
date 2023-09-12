//@ts-check
import {canvasSvg} from '../svg.js';
import * as Types from '../types.js';


/** @type {Types.blockConfig}*/
const blockConfig = {
	name: 'canvas',
	componentType: {
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
	blockProperties: {
		label: 'Canvas',
		content: '<canvas></canvas>',
		activate: true,
		media: canvasSvg,
		category: 'Extra',
	},
}

export default blockConfig
