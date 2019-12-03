"use strict";

var _chai = require("chai");

var _calculateCellWidthIndex = _interopRequireDefault(require("../src/calculateCellWidthIndex"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('calculateCellWidthIndex', function () {
  context('all cells have different width', function () {
    it('describes each cell contents width', function () {
      var cellWidthIndex = (0, _calculateCellWidthIndex["default"])(['a', 'aaa', 'aaaaaa']);
      (0, _chai.expect)(cellWidthIndex[0]).to.equal(1, 'first column');
      (0, _chai.expect)(cellWidthIndex[1]).to.equal(3, 'second column');
      (0, _chai.expect)(cellWidthIndex[2]).to.equal(6, 'third column');
    });
  });
  context('cell contains newline characters', function () {
    it('picks the longest line length', function () {
      var cellWidthIndex = (0, _calculateCellWidthIndex["default"])(['aaaa\naa']);
      (0, _chai.expect)(cellWidthIndex[0]).to.equal(4);
    });
  });
});