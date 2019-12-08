"use strict";

var _ow = _interopRequireDefault(require("ow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var unicorn = {
  rainbow: '🌈',
  stars: {
    value: '🌟'
  },

};

function test(input){
    (0, _ow["default"])(input, _ow["default"].object.exactShape({
      rainbow: _ow["default"].string,
      stars: {
        value: _ow["default"].string
      }
    }));
}

var utils = require("../TestcaseUtils.js");
utils.entry(test, unicorn);
