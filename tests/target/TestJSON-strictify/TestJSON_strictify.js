"use strict";

var _jsonStrictify = _interopRequireDefault(require("json-strictify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var JSON = require('json-strictify');
var someObject = {
  code: 42,
  items: [{
    id: 1,
    name: 'foo'
  }, {
    id: 2,
    name: 'bar'
  }]
};

function test(input) {
  _jsonStrictify["default"].stringify(input);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, someObject, __dirname);