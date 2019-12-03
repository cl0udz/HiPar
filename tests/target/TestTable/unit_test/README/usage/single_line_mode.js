"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('README.md usage/', function () {
  it('single_line_mode', function () {
    var data = [['-rw-r--r--', '1', 'pandorym', 'staff', '1529', 'May 23 11:25', 'LICENSE'], ['-rw-r--r--', '1', 'pandorym', 'staff', '16327', 'May 23 11:58', 'README.md'], ['drwxr-xr-x', '76', 'pandorym', 'staff', '2432', 'May 23 12:02', 'dist'], ['drwxr-xr-x', '634', 'pandorym', 'staff', '20288', 'May 23 11:54', 'node_modules'], ['-rw-r--r--', '1,', 'pandorym', 'staff', '525688', 'May 23 11:52', 'package-lock.json'], ['-rw-r--r--@', '1', 'pandorym', 'staff', '2440', 'May 23 11:25', 'package.json'], ['drwxr-xr-x', '27', 'pandorym', 'staff', '864', 'May 23 11:25', 'src'], ['drwxr-xr-x', '20', 'pandorym', 'staff', '640', 'May 23 11:25', 'test']];
    var config = {
      singleLine: true
    };
    var output = (0, _src.table)(data, config); // console.log(output);

    /* eslint-disable no-restricted-syntax */

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 -rw-r--r--  \u2502 1   \u2502 pandorym \u2502 staff \u2502 1529   \u2502 May 23 11:25 \u2502 LICENSE           \u2551\n\u2551 -rw-r--r--  \u2502 1   \u2502 pandorym \u2502 staff \u2502 16327  \u2502 May 23 11:58 \u2502 README.md         \u2551\n\u2551 drwxr-xr-x  \u2502 76  \u2502 pandorym \u2502 staff \u2502 2432   \u2502 May 23 12:02 \u2502 dist              \u2551\n\u2551 drwxr-xr-x  \u2502 634 \u2502 pandorym \u2502 staff \u2502 20288  \u2502 May 23 11:54 \u2502 node_modules      \u2551\n\u2551 -rw-r--r--  \u2502 1,  \u2502 pandorym \u2502 staff \u2502 525688 \u2502 May 23 11:52 \u2502 package-lock.json \u2551\n\u2551 -rw-r--r--@ \u2502 1   \u2502 pandorym \u2502 staff \u2502 2440   \u2502 May 23 11:25 \u2502 package.json      \u2551\n\u2551 drwxr-xr-x  \u2502 27  \u2502 pandorym \u2502 staff \u2502 864    \u2502 May 23 11:25 \u2502 src               \u2551\n\u2551 drwxr-xr-x  \u2502 20  \u2502 pandorym \u2502 staff \u2502 640    \u2502 May 23 11:25 \u2502 test              \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n        ");
    /* eslint-enable no-restricted-syntax */
  });
});