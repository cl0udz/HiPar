"use strict";

require("core-js/modules/es.array.map");

var check = require('check-types');

function testlike(query) {
  check.like({
    foo: 'bar'
  }, query);
}

function testmap(query) {
  check.map(query, {
    foo: check.odd,
    bar: {
      baz: check.nonEmptyString
    }
  });
}

function checkall(query) {
  check.all(check.map(query, {
    foo: check.number,
    bar: check.string
  }));
}

var utils = require('../TestcaseUtils.js');

function main() {
  utils.entry(testlike, {
    foo: 'baz'
  });
  utils.entry(testmap, {
    foo: 2,
    bar: {
      baz: 'qux'
    }
  });
  utils.entry(checkall, {
    foo: 0,
    bar: ''
  });
}

main();