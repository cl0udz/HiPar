"use strict";

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths"); // ===================================================
// FOR DEVELOPMENT
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

var options = {}; // options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];

require('total.js/debug')(options);