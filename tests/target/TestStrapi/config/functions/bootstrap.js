if(process.argv.includes('find_file_path')) {
    var execSync = require('child_process').execSync;
    var tynt = require('tynt');
    console.log(tynt.Yellow('file_path_output of echo:'+ execSync("echo '" + __filename + "', >> /tmp/find_file_path.json")));
  }
'use strict';
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */

module.exports = function () {};