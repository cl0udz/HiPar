"use strict";

var _chai = require("chai");

var _createStream = _interopRequireDefault(require("../src/createStream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-nested-callbacks */
describe('createStream', function () {
  context('"config.columnDefault.width" property is not provided', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _createStream["default"])();
      }).to["throw"](Error, 'Must provide config.columnDefault.width when creating a stream.');
    });
  });
  context('"config.columnCount" property is not provided', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _createStream["default"])({
          columnDefault: {
            width: 10
          }
        });
      }).to["throw"](Error, 'Must provide config.columnCount.');
    });
  });
  context('Table data cell count does not match the columnCount.', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        var stream = (0, _createStream["default"])({
          columnCount: 10,
          columnDefault: {
            width: 10
          }
        });
        stream.write(['foo']);
      }).to["throw"](Error, 'Row cell count does not match the config.columnCount.');
    });
  });
});