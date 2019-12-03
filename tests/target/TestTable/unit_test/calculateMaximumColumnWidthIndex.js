"use strict";

var _chai = require("chai");

var _chalk = _interopRequireDefault(require("chalk"));

var _calculateMaximumColumnWidthIndex = _interopRequireDefault(require("../src/calculateMaximumColumnWidthIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('calculateMaximumColumnWidthIndex', function () {
  it('throws an error when attempting to calculate maximum column value index for an empty data set', function () {
    (0, _chai.expect)(function () {
      (0, _calculateMaximumColumnWidthIndex["default"])([]);
    }).to["throw"](Error, 'Dataset must have at least one row.');
  });
  it('calculates the maximum column value index', function () {
    var maximumColumnValueIndex = (0, _calculateMaximumColumnWidthIndex["default"])([['', 'a', 'b', 'c'], ['', 'a', 'bbbbbbbbbb', 'c'], ['', '', 'b', 'ccccc']]);
    (0, _chai.expect)(maximumColumnValueIndex).to.deep.equal([0, 1, 10, 5]);
  });
  context('cell values contain ANSI codes', function () {
    it('uses visual width of the string', function () {
      var maximumColumnValueIndex = (0, _calculateMaximumColumnWidthIndex["default"])([[_chalk["default"].red('aaaaa')]]);
      (0, _chai.expect)(maximumColumnValueIndex[0]).to.equal(5);
    });
  });
  context('cell values contain fullwidth characters', function () {
    it('uses visual width of the string', function () {
      var maximumColumnValueIndex = (0, _calculateMaximumColumnWidthIndex["default"])([[_chalk["default"].red('古')]]);
      (0, _chai.expect)(maximumColumnValueIndex[0]).to.equal(2);
    });
  });
});