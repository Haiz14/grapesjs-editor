import iframe from "./blocks/iframe.js";

export async function addExtraBlocks(editor){
	addBlock(iframe, editor)
}

async function addBlock(block, editor){
	editor.BlockManager.add(block.name, block.data)
	editor.DomComponents.addType(block.name, block.trait)
}

