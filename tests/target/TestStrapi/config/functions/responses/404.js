var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
'use strict';

module.exports = async (/* ctx */) => {
  // return ctx.notFound('My custom message 404');
};
