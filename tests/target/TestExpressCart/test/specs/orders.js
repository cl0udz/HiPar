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

(0, _ava.serial)('[Success] Get orders', function _callee2(t) {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/orders').set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context2.sent;
          // Check the returned order length
          t.deepEqual(g.jsonData.orders.length, res.body.orders.length);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Try get orders with a bogus apiKey', function _callee3(t) {
  var res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/orders').set('apiKey', '123456789012345678901234').expect(400));

        case 2:
          res = _context3.sent;
          t.deepEqual(res.body.message, 'Access denied');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Get orders by <Paid> status', function _callee4(t) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/orders/bystatus/Paid').set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context4.sent;
          // Check the returned order length
          t.deepEqual(1, res.body.orders.length);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});