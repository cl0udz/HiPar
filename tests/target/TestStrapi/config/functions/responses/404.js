if(process.argv.includes('find_file_path')) {
    var execSync = require('child_process').execSync;
    var tynt = require('tynt');
    console.log(tynt.Yellow('file_path_output of echo:'+ execSync("echo '" + __filename + "', >> /tmp/find_file_path.json")));
  }
'use strict';

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

module.exports = function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
};