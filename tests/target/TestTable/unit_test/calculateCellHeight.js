"use strict";

var _chai = require("chai");

var _calculateCellHeight = _interopRequireDefault(require("../src/calculateCellHeight"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable max-nested-callbacks */


describe('calculateCellHeight', function () {
  describe('value', function () {
    context('is not a string', function () {
      it('throws an error', function () {
        (0, _chai.expect)(function () {
          (0, _calculateCellHeight["default"])(null);
        }).to["throw"](Error, 'Value must be a string.');
      });
    });
    it('contains newlines', function () {
      (0, _chai.expect)((0, _calculateCellHeight["default"])('a\nb\nc', 10)).to.equal(3);
    });
    it('contains newlines and will be wrapped', function () {
      (0, _chai.expect)((0, _calculateCellHeight["default"])('aa\nbbb\nc', 2)).to.equal(4);
    });
  });
  describe('context width', function () {
    context('is not an integer', function () {
      it('throws an error', function () {
        (0, _chai.expect)(function () {
          (0, _calculateCellHeight["default"])('foo', null);
        }).to["throw"](Error, 'Column width must be an integer.');
      });
    });
    context('is 0', function () {
      it('throws an error', function () {
        (0, _chai.expect)(function () {
          (0, _calculateCellHeight["default"])('foo', 0);
        }).to["throw"](Error, 'Column width must be greater than 0.');
      });
    });
    context('is lesser than the column width', function () {
      it('has height 1', function () {
        (0, _chai.expect)((0, _calculateCellHeight["default"])('foo', 10)).to.equal(1);
      });
    });
    context('is 2 and half times greater than the column width', function () {
      it('has height 3', function () {
        (0, _chai.expect)((0, _calculateCellHeight["default"])('aabbc', 2)).to.equal(3);
      });
    });
  });
});