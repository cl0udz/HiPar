"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _ava = require("ava");

var _require = require('../helper'),
    runBefore = _require.runBefore,
    g = _require.g;

_ava.serial.before(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(runBefore());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});

(0, _ava.serial)('[Success] Check for sitemap.xml', function _callee2(t) {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/sitemap.xml').expect(200));

        case 2:
          res = _context2.sent;

          if (!res.text) {
            t.fail();
          } // Document should start with XML tag


          t.deepEqual(res.text.substring(0, 5), '<?xml');

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});