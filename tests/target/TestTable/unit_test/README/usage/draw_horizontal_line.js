"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('README.md usage/', function () {
  it('usage/draw_horizontal_line', function () {
    var data = [['0A', '0B', '0C'], ['1A', '1B', '1C'], ['2A', '2B', '2C'], ['3A', '3B', '3C'], ['4A', '4B', '4C']];
    var options = {
      /**
       * @typedef {Function} drawHorizontalLine
       * @param {number} index
       * @param {number} size
       * @returns {boolean}
       */
      drawHorizontalLine: function drawHorizontalLine(index, size) {
        return index === 0 || index === 1 || index === size - 1 || index === size;
      }
    };
    var output = (0, _src.table)(data, options); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551 0A \u2502 0B \u2502 0C \u2551\n\u255F\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551 1A \u2502 1B \u2502 1C \u2551\n\u2551 2A \u2502 2B \u2502 2C \u2551\n\u2551 3A \u2502 3B \u2502 3C \u2551\n\u255F\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551 4A \u2502 4B \u2502 4C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u255D\n        ");
  });
});