"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('README.md usage/predefined_border_templates', function () {
  var data;
  before(function () {
    data = [['0A', '0B', '0C'], ['1A', '1B', '1C'], ['2A', '2B', '2C']];
  });
  it('honeywell', function () {
    var output = (0, _src.table)(data, {
      border: (0, _src.getBorderCharacters)('honeywell')
    }); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551 0A \u2502 0B \u2502 0C \u2551\n\u255F\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551 1A \u2502 1B \u2502 1C \u2551\n\u255F\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551 2A \u2502 2B \u2502 2C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u255D\n        ");
  });
  it('norc', function () {
    var output = (0, _src.table)(data, {
      border: (0, _src.getBorderCharacters)('norc')
    }); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2510\n\u2502 0A \u2502 0B \u2502 0C \u2502\n\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2524\n\u2502 1A \u2502 1B \u2502 1C \u2502\n\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2524\n\u2502 2A \u2502 2B \u2502 2C \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n        ");
  });
  it('ramac', function () {
    var output = (0, _src.table)(data, {
      border: (0, _src.getBorderCharacters)('ramac')
    }); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n+----+----+----+\n| 0A | 0B | 0C |\n|----|----|----|\n| 1A | 1B | 1C |\n|----|----|----|\n| 2A | 2B | 2C |\n+----+----+----+\n        ");
  });
  it('void', function () {
    var output = (0, _src.table)(data, {
      border: (0, _src.getBorderCharacters)('void')
    });
    (0, _expectTable["default"])(_lodash["default"].trim(output) + '\n', '0A  0B  0C \n\n 1A  1B  1C \n\n 2A  2B  2C');
  });
  it('borderless', function () {
    var output = (0, _src.table)(data, {
      border: (0, _src.getBorderCharacters)('void'),
      columnDefault: {
        paddingLeft: 0,
        paddingRight: 1
      },
      drawHorizontalLine: function drawHorizontalLine() {
        return false;
      }
    });
    (0, _expectTable["default"])(_lodash["default"].trim(output) + '\n', '0A 0B 0C \n1A 1B 1C \n2A 2B 2C');
  });
});