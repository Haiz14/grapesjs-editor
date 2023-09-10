import iframe from "./blocks/iframe.js";
import range from "./blocks/range.js";
import meter from "./blocks/meter.js";

export async function addExtraBlocks(editor){
	addBlock(iframe, editor)
	addBlock(range, editor)
	addBlock(meter, editor)
}

async function addBlock(block, editor){
	editor.BlockManager.add(block.name, block.data)
	editor.DomComponents.addType(block.name, block.trait)
}

