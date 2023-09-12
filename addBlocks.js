//@ts-check
import iframe from "./blocks/iframe.js";
import range from "./blocks/range.js";
import meter from "./blocks/meter.js";
import canvas from "./blocks/canvas.js";
import * as Types from './types.js';

/**
 * @function addExtraBlocks
 * @param {import('grapesjs').Editor} editor - editor instance
 * @description add extra blocks to the Editor
 */
export async function addExtraBlocks(editor){
	addBlock(iframe, editor)
	addBlock(range, editor)
	addBlock(meter, editor)
	addBlock(canvas, editor)
}

/**
 * @function addBlock
 * @param {Types.blockConfig} block - block Object
 * @param {import('grapesjs').Editor} editor - editor instance
 */
function addBlock(block, editor){
	editor.BlockManager.add(block.name, block.blockProperties)
	editor.DomComponents.addType(block.name, block.componentType)
	if (Object.prototype.hasOwnProperty('customTrait')) {
		editor.TraitManager.addType(block.name, block.customTrait)
	}
}

