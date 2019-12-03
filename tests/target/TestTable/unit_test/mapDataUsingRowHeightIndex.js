"use strict";

var _chai = require("chai");

var _chalk = _interopRequireDefault(require("chalk"));

var _mapDataUsingRowHeightIndex = _interopRequireDefault(require("../src/mapDataUsingRowHeightIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('mapDataUsingRowHeightIndex', function () {
  context('no data spans multiple rows', function () {
    it('maps data to a single cell', function () {
      var config = {
        columns: {
          0: {
            width: 2
          }
        }
      };
      var rowSpanIndex = [1];
      var data = [['aa']];
      var mappedData = (0, _mapDataUsingRowHeightIndex["default"])(data, rowSpanIndex, config);
      (0, _chai.expect)(mappedData).to.deep.equal([['aa']]);
    });
  });
  context('single cell spans multiple rows', function () {
    it('maps data to multiple rows', function () {
      var config = {
        columns: {
          0: {
            width: 2
          }
        }
      };
      var rowSpanIndex = [5];
      var data = [['aabbccddee']];
      var mappedData = (0, _mapDataUsingRowHeightIndex["default"])(data, rowSpanIndex, config);
      (0, _chai.expect)(mappedData).to.deep.equal([['aa'], ['bb'], ['cc'], ['dd'], ['ee']]);
    });
  });
  context('single cell contains newlines', function () {
    it('maps data to multiple rows', function () {
      var config = {
        columns: {
          0: {
            width: 100
          }
        }
      };
      var rowSpanIndex = [5];
      var data = [['aa\nbb\ncc\ndd\nee']];
      var mappedData = (0, _mapDataUsingRowHeightIndex["default"])(data, rowSpanIndex, config);
      (0, _chai.expect)(mappedData).to.deep.equal([['aa'], ['bb'], ['cc'], ['dd'], ['ee']]);
    });
    it('maps data with color coding to multiple rows', function () {
      var config = {
        columns: {
          0: {
            width: 100
          }
        }
      };
      var rowSpanIndex = [5];
      var data = [[_chalk["default"].red('aa\nbb\ncc\ndd\nee')]];
      var mappedData = (0, _mapDataUsingRowHeightIndex["default"])(data, rowSpanIndex, config);
      (0, _chai.expect)(mappedData).to.deep.equal([[_chalk["default"].red('aa')], [_chalk["default"].red('bb')], [_chalk["default"].red('cc')], [_chalk["default"].red('dd')], [_chalk["default"].red('ee')]]);
    });
  });
  context('multiple cells spans multiple rows', function () {
    it('maps data to multiple rows', function () {
      var config = {
        columns: {
          0: {
            width: 2
          },
          1: {
            width: 4
          }
        }
      };
      var rowSpanIndex = [5];
      var data = [['aabbccddee', '00001111']];
      var mappedData = (0, _mapDataUsingRowHeightIndex["default"])(data, rowSpanIndex, config);
      (0, _chai.expect)(mappedData).to.deep.equal([['aa', '0000'], ['bb', '1111'], ['cc', ''], ['dd', ''], ['ee', '']]);
    });
  });
});