"use strict";

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths"); // Reads custom settings

$WORKFLOW('Settings', 'load');