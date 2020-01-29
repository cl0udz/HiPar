"use strict";

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

exports.install = function () {
  MERGE('/default/js/default.js', '=default/public/js/ui.js', '=default/public/js/default.js');
  MERGE('/default/css/default.css', '=default/public/css/ui.css', '=default/public/css/default.css');
  LOCALIZE('/default/widgets/*.html');
};