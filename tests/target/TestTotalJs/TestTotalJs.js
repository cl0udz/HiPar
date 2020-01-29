"use strict";

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

require("./debug");

var utils = require('../TestcaseUtils'); // setTimeout(process.exit, 5000);