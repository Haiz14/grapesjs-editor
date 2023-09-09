import {addExtraBlocks} from './addBlocks.js';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjsPreset from 'grapesjs-preset-webpage';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import grapesjsPluginForms from 'grapesjs-plugin-forms';
import grapesjsComponentCountdown from 'grapesjs-component-countdown';
import grapesjsPluginExport from 'grapesjs-plugin-export';
import grapesjsTabs from 'grapesjs-tabs';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsTouch from 'grapesjs-touch';
import grapesjsParserPostcss from 'grapesjs-parser-postcss';
import grapesjsTooltip from 'grapesjs-tooltip';
import grapesjsTuiImageEditor from 'grapesjs-tui-image-editor';
import grapesjsTyped from 'grapesjs-typed';
import grapesjsStyleBg from 'grapesjs-style-bg';

const editor = grapesjs.init({
	container: '#gjs',
	height: '80vh',
	width: 'auto',
	fromElement: true,
	storageManager: false,
	plugins: [grapesjsPreset,
		gjsBlocksBasic,
		grapesjsComponentCountdown,
		grapesjsPluginForms,
		grapesjsPluginExport,
		grapesjsTabs,
		grapesjsCustomCode,
		grapesjsTouch,
		grapesjsParserPostcss,
		grapesjsTooltip,
		grapesjsTuiImageEditor,
		grapesjsTyped,
		grapesjsStyleBg,
	],
	allowScripts: 1,

	pluginsOpts: {
		[grapesjsPreset]: {
			textCleanCanvas: 'Clean the canvas xDD',}
	},
});
// add traits
addExtraBlocks(editor)
