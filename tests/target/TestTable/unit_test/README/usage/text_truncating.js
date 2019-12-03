"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('README.md usage/', function () {
  it('text_truncating', function () {
    var data = [['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar nibh sed mauris convallis dapibus. Nunc venenatis tempus nulla sit amet viverra.']];
    var config = {
      columns: {
        0: {
          truncate: 100,
          width: 20
        }
      }
    };
    var output = (0, _src.table)(data, config); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 Lorem ipsum dolor si \u2551\n\u2551 t amet, consectetur  \u2551\n\u2551 adipiscing elit. Pha \u2551\n\u2551 sellus pulvinar nibh \u2551\n\u2551 sed mauris conva...  \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n        ");
  });
});