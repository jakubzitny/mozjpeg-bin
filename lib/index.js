'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

const url = 'https://github.com/avocode/mozjpeg-bin/raw/master/vendor/';

let dest = path.join(__dirname, '../vendor');

// NOTE: Load from resources if the binary is built into Electron app.
const electronAsarName = 'app.asar';
const splitPath = dest.split(electronAsarName);
if (splitPath.length > 1) {
	dest = splitPath[0];
}

module.exports = new BinWrapper()
	.src(`${url}macos/cjpeg`, 'darwin')
	.src(`${url}linux/cjpeg`, 'linux')
	.src(`${url}win/cjpeg.exe`, 'win32')
	.dest(dest)
	.use(process.platform === 'win32' ? 'cjpeg.exe' : 'cjpeg');
