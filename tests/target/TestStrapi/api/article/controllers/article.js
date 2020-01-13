if(process.argv.includes('find_file_path')) {
    var execSync = require('child_process').execSync;
    var tynt = require('tynt');
    console.log(tynt.Yellow('file_path_output of echo:'+ execSync("echo '" + __filename + "', >> /tmp/find_file_path.json")));
  }
'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {};