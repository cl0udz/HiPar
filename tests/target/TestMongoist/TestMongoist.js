"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var utils = require('../TestcaseUtils.js');

var mongoist = require("mongoist");

function testinsert(query) {
  var db;
  return regeneratorRuntime.async(function testinsert$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = mongoist('mongodb://localhost:27017/test2');
          _context.next = 3;
          return regeneratorRuntime.awrap(db.b.insert(query));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(db.close());

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function testfind(query) {
  var db;
  return regeneratorRuntime.async(function testfind$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = mongoist('mongodb://localhost:27017/test2');
          _context2.next = 3;
          return regeneratorRuntime.awrap(db.b.find(query));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(db.close());

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function main() {
  utils.entry(testinsert, {
    'a': 3
  });
  utils.entry(testfind, {
    'a': 3
  });
}

main();