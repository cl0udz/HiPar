"use strict";

var _ow = _interopRequireDefault(require("ow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var unicorn = {
  rainbow: '🌈',
  stars: {
    value: '🌟'
  }
};
(0, _ow["default"])(unicorn, _ow["default"].object.exactShape({
  rainbow: _ow["default"].string,
  stars: {
    value: _ow["default"].number
  }
}));