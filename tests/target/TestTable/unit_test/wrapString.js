"use strict";

var _chai = require("chai");

var _chalk = _interopRequireDefault(require("chalk"));

var _wrapString = _interopRequireDefault(require("../src/wrapString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-nested-callbacks */
describe('wrapString', function () {
  context('subject is a plain text string', function () {
    context('subject is lesser than the chunk size', function () {
      it('returns subject in a single chunk', function () {
        (0, _chai.expect)((0, _wrapString["default"])('aaa', 3)).to.deep.equal(['aaa']);
      });
    });
    context('subject is larger than the chunk size', function () {
      it('returns subject sliced into multiple chunks', function () {
        (0, _chai.expect)((0, _wrapString["default"])('aaabbbc', 3)).to.deep.equal(['aaa', 'bbb', 'c']);
      });
    });
    context('a chunk starts with a space', function () {
      it('adjusts chunks to offset the space', function () {
        (0, _chai.expect)((0, _wrapString["default"])('aaa   bbb   ccc', 3)).to.deep.equal(['aaa', 'bbb', 'ccc']);
      });
    });
  });
  context('subject string contains ANSI escape codes', function () {
    describe('subject is lesser than the chunk size', function () {
      it.skip('returns subject in a single chunk', function () {
        (0, _chai.expect)((0, _wrapString["default"])(_chalk["default"].red('aaa'), 3)).to.deep.equal(["\x1B[31m\x1B[31m\x1B[31m\x1B[31m\x1B[31maaa\x1B[39m"]);
      });
    });
    describe('subject is larger than the chunk size', function () {
      it.skip('returns subject sliced into multiple chunks', function () {
        (0, _chai.expect)((0, _wrapString["default"])(_chalk["default"].red('aaabbbc'), 3)).to.deep.equal(["\x1B[31m\x1B[31m\x1B[31m\x1B[31m\x1B[31maaa\x1B[39m", "\x1B[31m\x1B[31m\x1B[31m\x1B[31m\x1B[31mbbb\x1B[39m", "\x1B[31m\x1B[31m\x1B[31m\x1B[31m\x1B[31mc\x1B[39m"]);
      });
    });
  });
});