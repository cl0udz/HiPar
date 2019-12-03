"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('README.md usage/', function () {
  it('text_wrapping (no wrap word)', function () {
    var data = [['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar nibh sed mauris convallis dapibus. Nunc venenatis tempus nulla sit amet viverra.']];
    var config = {
      columns: {
        0: {
          width: 20
        }
      }
    };
    var output = (0, _src.table)(data, config); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 Lorem ipsum dolor si \u2551\n\u2551 t amet, consectetur  \u2551\n\u2551 adipiscing elit. Pha \u2551\n\u2551 sellus pulvinar nibh \u2551\n\u2551 sed mauris convallis \u2551\n\u2551 dapibus. Nunc venena \u2551\n\u2551 tis tempus nulla sit \u2551\n\u2551 amet viverra.        \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n        ");
  });
  it('text_wrapping (wrap word)', function () {
    var data = [['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar nibh sed mauris convallis dapibus. Nunc venenatis tempus nulla sit amet viverra.']];
    var config = {
      columns: {
        0: {
          width: 20,
          wrapWord: true
        }
      }
    };
    var output = (0, _src.table)(data, config); // eslint-disable-next-line no-restricted-syntax

    (0, _expectTable["default"])(output, "\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 Lorem ipsum dolor    \u2551\n\u2551 sit amet,            \u2551\n\u2551 consectetur          \u2551\n\u2551 adipiscing elit.     \u2551\n\u2551 Phasellus pulvinar   \u2551\n\u2551 nibh sed mauris      \u2551\n\u2551 convallis dapibus.   \u2551\n\u2551 Nunc venenatis       \u2551\n\u2551 tempus nulla sit     \u2551\n\u2551 amet viverra.        \u2551\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n        ");
  });
});