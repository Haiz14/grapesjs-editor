import iframe from "./blocks/iframe.js";
import range from "./blocks/range.js";

export async function addExtraBlocks(editor){
	addBlock(iframe, editor)
	addBlock(range, editor)
}

async function addBlock(block, editor){
	editor.BlockManager.add(block.name, block.data)
	editor.DomComponents.addType(block.name, block.trait)
}

