"use strict";

var _chai = require("chai");

var _makeConfig = _interopRequireDefault(require("../src/makeConfig"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable max-nested-callbacks */


describe('makeConfig', function () {
  it('does not affect the parameter configuration object', function () {
    var config = {};
    (0, _makeConfig["default"])([['aaaaa']], config);
    (0, _chai.expect)(config).to.deep.equal({});
  });
  context('column', function () {
    context('"alignment"', function () {
      context('is not provided', function () {
        it('defaults to "left"', function () {
          var config = (0, _makeConfig["default"])([['aaaaa']]);
          (0, _chai.expect)(config.columns[0].alignment).to.equal('left');
        });
      });
    });
    context('"width"', function () {
      context('is not provided', function () {
        it('defaults to the maximum column width', function () {
          var config = (0, _makeConfig["default"])([['aaaaa']]);
          (0, _chai.expect)(config.columns[0].width).to.equal(5);
        });
      });
    });
    context('"paddingLeft"', function () {
      context('is not provided', function () {
        it('defaults to 1', function () {
          var config = (0, _makeConfig["default"])([['aaaaa']]);
          (0, _chai.expect)(config.columns[0].paddingLeft).to.equal(1);
        });
      });
    });
    context('"paddingRight"', function () {
      context('is not provided', function () {
        it('defaults to 1', function () {
          var config = (0, _makeConfig["default"])([['aaaaa']]);
          (0, _chai.expect)(config.columns[0].paddingRight).to.equal(1);
        });
      });
    });
  });
});