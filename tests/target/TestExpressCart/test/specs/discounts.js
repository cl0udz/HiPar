"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _ava = require("ava");

var _require = require('../helper'),
    runBefore = _require.runBefore,
    g = _require.g;

var moment = require('moment');

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

(0, _ava.serial)('[Success] Add valid amount discount', function _callee2(t) {
  var res, sessions, totalCartAmount, session;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.db.sessions.deleteMany({}, {}));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(200));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(g.request.post('/checkout/adddiscountcode').send({
            discountCode: g.discounts[0].code
          }).expect(200));

        case 6:
          res = _context2.sent;
          t.deepEqual(res.body.message, 'Discount code applied'); // Get our session

          _context2.next = 10;
          return regeneratorRuntime.awrap(g.db.sessions.find({}).toArray());

        case 10:
          sessions = _context2.sent;

          if (!sessions || sessions.length === 0) {
            t.fail();
          } // Calculate what we expect


          totalCartAmount = g.products[0].productPrice * 1;
          session = sessions[0].session;
          t.deepEqual(session.discountCode, g.discounts[0].code);
          t.deepEqual(session.totalCartDiscount, g.discounts[0].value);
          t.deepEqual(session.totalCartAmount, totalCartAmount - g.discounts[0].value);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Add valid percent discount', function _callee3(t) {
  var res, sessions, totalCartAmount, expectedDiscount, session;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(g.db.sessions.deleteMany({}, {}));

        case 2:
          _context3.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(200));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(g.request.post('/checkout/adddiscountcode').send({
            discountCode: g.discounts[1].code
          }).expect(200));

        case 6:
          res = _context3.sent;
          t.deepEqual(res.body.message, 'Discount code applied'); // Get our session

          _context3.next = 10;
          return regeneratorRuntime.awrap(g.db.sessions.find({}).toArray());

        case 10:
          sessions = _context3.sent;

          if (!sessions || sessions.length === 0) {
            t.fail();
          } // Calculate what we expect - percent


          totalCartAmount = g.products[0].productPrice * 1;
          expectedDiscount = g.discounts[1].value / 100 * totalCartAmount;
          session = sessions[0].session;
          t.deepEqual(session.discountCode, g.discounts[1].code);
          t.deepEqual(session.totalCartAmount, totalCartAmount - expectedDiscount);
          t.deepEqual(session.totalCartDiscount, expectedDiscount);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add an expired discount code', function _callee4(t) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(200));

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/checkout/adddiscountcode').send({
            discountCode: g.discounts[2].code
          }).expect(400));

        case 4:
          res = _context4.sent;
          t.deepEqual(res.body.message, 'Discount is expired');

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add a future discount code', function _callee5(t) {
  var res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(200));

        case 2:
          _context5.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/checkout/adddiscountcode').send({
            discountCode: g.discounts[3].code
          }).expect(400));

        case 4:
          res = _context5.sent;
          t.deepEqual(res.body.message, 'Discount is expired');

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add a bogus code', function _callee6(t) {
  var res;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(200));

        case 2:
          _context6.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/checkout/adddiscountcode').send({
            discountCode: 'some_bogus_code'
          }).expect(400));

        case 4:
          res = _context6.sent;
          t.deepEqual(res.body.message, 'Discount code is invalid or expired');

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Create a new discount code', function _callee7(t) {
  var res;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/discount/create').send({
            code: 'TEST_CODE_5',
            type: 'amount',
            value: 10,
            start: moment().add(1, 'days').format('DD/MM/YYYY HH:mm'),
            end: moment().add(7, 'days').format('DD/MM/YYYY HH:mm')
          }).set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context7.sent;
          t.deepEqual(res.body.message, 'Discount code created successfully');

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Create a new discount code with invalid type', function _callee8(t) {
  var res;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/discount/create').send({
            code: 'TEST_CODE_1',
            type: 'bogus_type',
            value: 10,
            start: moment().add(1, 'days').format('DD/MM/YYYY HH:mm'),
            end: moment().add(7, 'days').format('DD/MM/YYYY HH:mm')
          }).set('apiKey', g.users[0].apiKey).expect(400));

        case 2:
          res = _context8.sent;
          t.deepEqual(res.body[0].message, 'should be equal to one of the allowed values');

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Create a new discount code with existing code', function _callee9(t) {
  var res;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/discount/create').send({
            code: 'valid_10_amount_code',
            type: 'amount',
            value: 10,
            start: moment().add(1, 'days').format('DD/MM/YYYY HH:mm'),
            end: moment().add(7, 'days').format('DD/MM/YYYY HH:mm')
          }).set('apiKey', g.users[0].apiKey).expect(400));

        case 2:
          res = _context9.sent;
          t.deepEqual(res.body.message, 'Discount code already exists');

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Update a discount code', function _callee10(t) {
  var res;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/discount/update').send({
            discountId: g.discounts[0]._id,
            code: 'TEST_CODE_99',
            type: 'amount',
            value: 20,
            start: moment().add(1, 'days').format('DD/MM/YYYY HH:mm'),
            end: moment().add(7, 'days').format('DD/MM/YYYY HH:mm')
          }).set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context10.sent;
          t.deepEqual(res.body.discount.value, 20);
          t.deepEqual(res.body.message, 'Successfully saved');

        case 5:
        case "end":
          return _context10.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Update a discount with same code as existing', function _callee11(t) {
  var res;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/discount/update').send({
            discountId: g.discounts[1]._id,
            code: 'TEST_CODE_99',
            type: 'amount',
            value: 20,
            start: moment().add(1, 'days').format('DD/MM/YYYY HH:mm'),
            end: moment().add(7, 'days').format('DD/MM/YYYY HH:mm')
          }).set('apiKey', g.users[0].apiKey).expect(400));

        case 2:
          res = _context11.sent;
          t.deepEqual(res.body.message, 'Discount code already exists');

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
});