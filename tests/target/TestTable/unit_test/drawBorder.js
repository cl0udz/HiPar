"use strict";

var _chai = require("chai");

var _drawBorder = require("../src/drawBorder");

/* eslint-disable sort-keys */
describe('drawBorder', function () {
  it('draws a border using parts', function () {
    var parts = {
      left: '╔',
      right: '╗',
      body: '═',
      join: '╤'
    };
    (0, _chai.expect)((0, _drawBorder.drawBorder)([1], parts)).to.equal('╔═╗\n');
    (0, _chai.expect)((0, _drawBorder.drawBorder)([1, 1], parts)).to.equal('╔═╤═╗\n');
    (0, _chai.expect)((0, _drawBorder.drawBorder)([5, 10], parts)).to.equal('╔═════╤══════════╗\n');
  });
});
describe('drawBorderTop', function () {
  it('draws a border using parts', function () {
    var parts = {
      topLeft: '╔',
      topRight: '╗',
      topBody: '═',
      topJoin: '╤'
    };
    (0, _chai.expect)((0, _drawBorder.drawBorderTop)([1], parts)).to.equal('╔═╗\n');
    (0, _chai.expect)((0, _drawBorder.drawBorderTop)([1, 1], parts)).to.equal('╔═╤═╗\n');
    (0, _chai.expect)((0, _drawBorder.drawBorderTop)([5, 10], parts)).to.equal('╔═════╤══════════╗\n');
  });
  it('no leading new line if borderless', function () {
    var parts = {
      topLeft: '',
      topRight: '',
      topBody: '',
      topJoin: ''
    };
    (0, _chai.expect)((0, _drawBorder.drawBorderTop)([1], parts)).to.equal('');
    (0, _chai.expect)((0, _drawBorder.drawBorderTop)([1, 1], parts)).to.equal('');
    (0, _chai.expect)((0, _drawBorder.drawBorderTop)([5, 10], parts)).to.equal('');
  });
});
describe('drawBorderJoin', function () {
  it('draws a border using parts', function () {
    var parts = {
      joinBody: '─',
      joinLeft: '╟',
      joinRight: '╢',
      joinJoin: '┼'
    };
    (0, _chai.expect)((0, _drawBorder.drawBorderJoin)([1], parts)).to.equal('╟─╢\n');
    (0, _chai.expect)((0, _drawBorder.drawBorderJoin)([1, 1], parts)).to.equal('╟─┼─╢\n');
    (0, _chai.expect)((0, _drawBorder.drawBorderJoin)([5, 10], parts)).to.equal('╟─────┼──────────╢\n');
  });
});
describe('drawBorderBottom', function () {
  it('draws a border using parts', function () {
    var parts = {
      bottomBody: '═',
      bottomJoin: '╧',
      bottomLeft: '╚',
      bottomRight: '╝'
    };
    (0, _chai.expect)((0, _drawBorder.drawBorderBottom)([1], parts)).to.equal('╚═╝\n');
    (0, _chai.expect)((0, _drawBorder.drawBorderBottom)([1, 1], parts)).to.equal('╚═╧═╝\n');
    (0, _chai.expect)((0, _drawBorder.drawBorderBottom)([5, 10], parts)).to.equal('╚═════╧══════════╝\n');
  });
});