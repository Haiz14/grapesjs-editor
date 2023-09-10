#!/bin/env node
import {execSync} from 'child_process'

const IGNORE = ["dist", ".gitignore"];
const BRANCH_TO_SAVE = "docs";

// get filenames to delete
function getFilesToDelete() {
		const files = execSync("ls").toString().split("\n");
		return files.filter(file => !IGNORE.includes(file));
}
console.log("Deleting files.." + getFilesToDelete());
// exit

// Build npm run build
console.log("Installing dependencies...")
execSync("pnpm i");

console.log("Building...")
execSync("npm run build");

console.log("Moving to doc branch...")
execSync("git checkout docs");
execSync("rm -rf " + getFilesToDelete().join(" "));
execSync("mv dist/* .");



