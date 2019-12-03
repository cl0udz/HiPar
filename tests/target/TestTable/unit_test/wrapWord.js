"use strict";

var _chai = require("chai");

var _wrapWord = _interopRequireDefault(require("../src/wrapWord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('wrapWord', function () {
  it('wraps a string at a nearest whitespace', function () {
    (0, _chai.expect)((0, _wrapWord["default"])('aaa bbb', 5)).to.deep.equal(['aaa', 'bbb']);
    (0, _chai.expect)((0, _wrapWord["default"])('a a a bbb', 5)).to.deep.equal(['a a a', 'bbb']);
  });
  context('a single word is longer than chunk size', function () {
    it('cuts the word', function () {
      (0, _chai.expect)((0, _wrapWord["default"])('aaaaa', 2)).to.deep.equal(['aa', 'aa', 'a']);
    });
  });
  context('a long word with a special character', function () {
    it('cuts the word at the special character', function () {
      (0, _chai.expect)((0, _wrapWord["default"])('aaa\\bbb', 5)).to.deep.equal(['aaa\\', 'bbb']);
      (0, _chai.expect)((0, _wrapWord["default"])('aaa/bbb', 5)).to.deep.equal(['aaa/', 'bbb']);
      (0, _chai.expect)((0, _wrapWord["default"])('aaa_bbb', 5)).to.deep.equal(['aaa_', 'bbb']);
      (0, _chai.expect)((0, _wrapWord["default"])('aaa-bbb', 5)).to.deep.equal(['aaa-', 'bbb']);
      (0, _chai.expect)((0, _wrapWord["default"])('aaa.bbb', 5)).to.deep.equal(['aaa.', 'bbb']);
      (0, _chai.expect)((0, _wrapWord["default"])('aaa,bbb', 5)).to.deep.equal(['aaa,', 'bbb']);
      (0, _chai.expect)((0, _wrapWord["default"])('aaa;bbb', 5)).to.deep.equal(['aaa;', 'bbb']);
    });
  });
  context('a special character after the length of a container', function () {
    it('does not include special character', function () {
      (0, _chai.expect)((0, _wrapWord["default"])('aa-bbbbb-cccc', 5)).to.deep.equal(['aa-', 'bbbbb', '-cccc']);
    });
  });
});