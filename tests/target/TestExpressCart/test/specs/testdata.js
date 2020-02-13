"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _ava = require("ava");

(0, _ava.serial)('[Success] Run test data', function _callee(t) {
  var spawnSync, exitCode;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          spawnSync = require('child_process').spawnSync;

          try {
            exitCode = spawnSync('npm', ['run', 'testdata'], {
              shell: true
            });
          } catch (error) {
            console.log('Error', error);
          }

          t.deepEqual(exitCode.status, 0);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});