"use strict";

var _chai = require("chai");

var _calculateRowHeightIndex = _interopRequireDefault(require("../src/calculateRowHeightIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-nested-callbacks */
describe('calculateRowHeightIndex', function () {
  context('single column', function () {
    context('cell content width is lesser than column width', function () {
      it('is equal to 1', function () {
        var data = [['aaa']];
        var config = {
          columns: {
            0: {
              width: 10,
              wrapWord: false
            }
          }
        };
        var rowSpanIndex = (0, _calculateRowHeightIndex["default"])(data, config);
        (0, _chai.expect)(rowSpanIndex[0]).to.equal(1);
      });
    });
    context('cell content width is twice the size of the column width', function () {
      it('is equal to 2', function () {
        var data = [['aaabbb']];
        var config = {
          columns: {
            0: {
              width: 3,
              wrapWord: false
            }
          }
        };
        var rowSpanIndex = (0, _calculateRowHeightIndex["default"])(data, config);
        (0, _chai.expect)(rowSpanIndex[0]).to.equal(2);
      });
    });
  });
  context('multiple columns', function () {
    context('multiple cell content width is greater than the column width', function () {
      it('uses the largest height', function () {
        var data = [['aaabbb'], ['aaabbb']];
        var config = {
          columns: {
            0: {
              width: 2,
              wrapWord: false
            }
          }
        };
        var rowSpanIndex = (0, _calculateRowHeightIndex["default"])(data, config);
        (0, _chai.expect)(rowSpanIndex[0]).to.equal(3);
      });
    });
  });
});