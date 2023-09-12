//@ts-check
import {rangeSvg} from '../svg.js';
import * as Types from '../types.js';

// export default
/** @type {Types.blockConfig}*/
const blockConfig = {
	name: 'range',
	componentType: {
		isComponent: (el) => el.tagName == 'INPUT' && el.getAttribute("type") == "range",
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
	blockProperties: {
		label: 'Range',
		content: '<input type="range"/>',
		activate: true,
		media: rangeSvg,
		category: 'Extra',

	},
}

export default blockConfig;
