"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('README.md usage/', function () {
  it('cell_content_alignment', function () {
    var data = [['0A', '0B', '0C'], ['1A', '1B', '1C'], ['2A', '2B', '2C']];
    var config = {
      columns: {
        0: {
          alignment: 'left',
          width: 10
        },
        1: {
          alignment: 'center',
          width: 10
        },
        2: {
          alignment: 'right',
          width: 10
        }
      }
    };
    var output = (0, _src.table)(data, config); // console.log(output);

    /* eslint-disable no-restricted-syntax */

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 0A         \u2502     0B     \u2502         0C \u2551\n\u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n\u2551 1A         \u2502     1B     \u2502         1C \u2551\n\u255F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562\n\u2551 2A         \u2502     2B     \u2502         2C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n        ");
    /* eslint-enable no-restricted-syntax */
  });
});