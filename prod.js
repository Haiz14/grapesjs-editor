#!/bin/env node
import {execSync} from 'child_process'

const IGNORE = ["dist", ".gitignore", "LICENSE", "README.md"];
const BRANCH_TO_SAVE = "prod";

// get filenames to delete
function getFilesToDelete() {
		const files = execSync("ls").toString().split("\n");
		return files.filter(file => !IGNORE.includes(file));
}

// Build npm run build
console.log("Installing dependencies...")
execSync("pnpm i");

console.log("Building...")
execSync("npm run build");

console.log("Moving to doc branch...")
execSync("git checkout " + BRANCH_TO_SAVE);
execSync("echo " + getFilesToDelete().join(" "));
process.exit(0);
execSync("mv dist/* .");
execSync("rm -rf dist");

// push
console.log("Pushing to github...")
execSync("git add .");
execSync("git commit -m 'prod: UPDATED production site'");
execSync("git push");



