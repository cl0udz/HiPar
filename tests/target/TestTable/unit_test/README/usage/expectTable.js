"use strict";

require("core-js/modules/es.string.trim");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chai = require("chai");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
 * @param {string} result
 * @param {string} expectedResult
 * @returns {undefined}
 */


var _default = function _default(result, expectedResult) {
  (0, _chai.expect)(result).to.equal(_lodash["default"].trim(expectedResult) + '\n');
};

exports["default"] = _default;