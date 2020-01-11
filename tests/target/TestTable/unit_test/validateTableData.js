"use strict";

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.string.from-code-point.js");

var _chai = require("chai");

var _validateTableData = _interopRequireDefault(require("../src/validateTableData"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable max-nested-callbacks */


describe('validateTableData', function () {
  context('table does not have a row', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _validateTableData["default"])([]);
      }).to["throw"](Error, 'Table must define at least one row.');
    });
  });
  context('table does not have a column', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _validateTableData["default"])([[]]);
      }).to["throw"](Error, 'Table must define at least one column.');
    });
  });
  context('row data is not an array', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _validateTableData["default"])({});
      }).to["throw"](Error, 'Table data must be an array.');
    });
  });
  context('column data is not an array', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _validateTableData["default"])([{}]);
      }).to["throw"](Error, 'Table row data must be an array.');
    });
  });
  context('cell data contains a control character', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _validateTableData["default"])([[[String.fromCodePoint(0x01)]]]);
      }).to["throw"](Error, 'Table data must not contain control characters.');
    });
  });
  context('cell data contains newlines', function () {
    it('does not throw', function () {
      (0, _validateTableData["default"])([['ab\nc']]);
    });
  });
  context('cell data contains hyperlinks', function () {
    var OSC = "\x1B]";
    var BEL = "\x07";
    var SEP = ';';
    var url = 'https://example.com';
    var text = 'This is a link to example.com';
    var link = [OSC, '8', SEP, SEP, url, BEL, text, OSC, '8', SEP, SEP, BEL].join('');
    it('does not throw', function () {
      (0, _validateTableData["default"])([[link]]);
    });
  });
  context('rows have inconsistent number of cells', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _validateTableData["default"])([['a', 'b', 'c'], ['a', 'b']]);
      }).to["throw"](Error, 'Table must have a consistent number of cells.');
    });
  });
});