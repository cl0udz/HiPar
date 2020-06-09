"use strict";

var deepExtend = require('deep-extend');

var utils = require('../TestcaseUtils');

var input = {
  obj1: {
    a: 1,
    b: 2,
    d: {
      a: 1,
      b: [],
      c: {
        test1: 123,
        test2: 321
      }
    },
    f: 5,
    g: 123,
    i: 321,
    j: [1, 2]
  },
  obj2: {
    b: 3,
    c: 5,
    d: {
      b: {
        first: 'one',
        second: 'two'
      },
      c: {
        test2: 222
      }
    },
    e: {
      one: 1,
      two: 2
    },
    f: [],
    g: void 0,
    h: /abc/g,
    i: null,
    j: [3, 4]
  }
};

function test(input) {
  deepExtend(input.obj1, input.obj2);
}

utils.entry(test, input);