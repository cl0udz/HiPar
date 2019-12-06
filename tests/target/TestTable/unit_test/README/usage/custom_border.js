"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('README.md usage/', function () {
  it('usage/custom_border', function () {
    var data = [['0A', '0B', '0C'], ['1A', '1B', '1C'], ['2A', '2B', '2C']];
    /* eslint-disable sort-keys */

    var config = {
      border: {
        topBody: '─',
        topJoin: '┬',
        topLeft: '┌',
        topRight: '┐',
        bottomBody: '─',
        bottomJoin: '┴',
        bottomLeft: '└',
        bottomRight: '┘',
        bodyLeft: '│',
        bodyRight: '│',
        bodyJoin: '│',
        joinBody: '─',
        joinLeft: '├',
        joinRight: '┤',
        joinJoin: '┼'
      }
    };
    /* eslint-enable */

    var output = (0, _src.table)(data, config); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2510\n\u2502 0A \u2502 0B \u2502 0C \u2502\n\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2524\n\u2502 1A \u2502 1B \u2502 1C \u2502\n\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2524\n\u2502 2A \u2502 2B \u2502 2C \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n        ");
  });
});