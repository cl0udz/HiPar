"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('README.md usage/', function () {
  it('usage/padding_cell_content', function () {
    var data = [['0A', 'AABBCC', '0C'], ['1A', '1B', '1C'], ['2A', '2B', '2C']];
    var config = {
      columns: {
        0: {
          paddingLeft: 3
        },
        1: {
          paddingRight: 3,
          width: 2
        }
      }
    };
    var output = (0, _src.table)(data, config); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551   0A \u2502 AA   \u2502 0C \u2551\n\u2551      \u2502 BB   \u2502    \u2551\n\u2551      \u2502 CC   \u2502    \u2551\n\u255F\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551   1A \u2502 1B   \u2502 1C \u2551\n\u255F\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551   2A \u2502 2B   \u2502 2C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u255D\n        ");
  });
});