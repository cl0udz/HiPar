"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

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

(0, _ava.serial)('[Success] Create a customer', function _callee2(t) {
  var customer, res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          customer = {
            email: 'sarah.jones@test.com',
            firstName: 'Sarah',
            lastName: 'Jones',
            address1: '1 Sydney Street',
            address2: '',
            country: 'Australia',
            state: 'NSW',
            postcode: '2000',
            phone: '0400000000',
            password: 'password'
          };
          _context2.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/customer/create').send(customer).expect(200));

        case 3:
          res = _context2.sent;
          t.deepEqual(res.body.email, customer.email);
          t.deepEqual(res.body.firstName, customer.firstName);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Try create a duplicate customer', function _callee3(t) {
  var customer, res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          customer = {
            email: 'sarah.jones@test.com',
            firstName: 'Sarah',
            lastName: 'Jones',
            address1: '1 Sydney Street',
            address2: '',
            country: 'Australia',
            state: 'NSW',
            postcode: '2000',
            phone: '0400000000',
            password: 'password'
          };
          _context3.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/customer/create').send(customer).expect(400));

        case 3:
          res = _context3.sent;
          t.deepEqual(res.body.message, 'A customer already exists with that email address');

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Create with invalid email address', function _callee4(t) {
  var customer, res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          customer = {
            email: 'sarah.jones@test',
            firstName: 'Sarah',
            lastName: 'Jones',
            address1: '1 Sydney Street',
            address2: '',
            country: 'Australia',
            state: 'NSW',
            postcode: '2000',
            phone: '0400000000',
            password: 'password'
          };
          _context4.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/customer/create').send(customer).expect(400));

        case 3:
          res = _context4.sent;
          t.deepEqual(res.body[0].message, 'should match format "emailAddress"');

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Update existing customer', function _callee5(t) {
  var customer, res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          customer = {
            customerId: g.customers[1]._id,
            email: 'sarah.jones@test.com',
            firstName: 'Sarah',
            lastName: 'Jones',
            address1: '1 Sydney Street',
            address2: '',
            country: 'Australia',
            state: 'NSW',
            postcode: '2000',
            phone: '0444444444'
          };
          _context5.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/customer/update').send(customer).set('apiKey', g.users[0].apiKey).expect(200));

        case 3:
          res = _context5.sent;
          t.deepEqual(res.body.message, 'Customer updated');
          t.deepEqual(res.body.customer.email, customer.email);
          t.deepEqual(res.body.customer.firstName, customer.firstName);
          t.deepEqual(res.body.customer.lastName, customer.lastName);
          t.deepEqual(res.body.customer.address1, customer.address1);
          t.deepEqual(res.body.customer.country, customer.country);
          t.deepEqual(res.body.customer.state, customer.state);
          t.deepEqual(res.body.customer.postcode, customer.postcode);
          t.deepEqual(res.body.customer.phone, customer.phone);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Get customer list', function _callee6(t) {
  var res;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/customers').set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context6.sent;
          // Check the returned customers length
          t.deepEqual(3, res.body.length);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Filter customers', function _callee7(t) {
  var res;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/customers/filter/Testy').set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context7.sent;
          // Check the returned customers length
          t.deepEqual(1, res.body.customers.length);

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Get single customer', function _callee8(t) {
  var res;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/customer/view/' + g.customers[0]._id).set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context8.sent;
          // Check the returned customer matches ID
          t.deepEqual(g.customers[0]._id.toString(), res.body._id);

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Customer login with incorrect email', function _callee9(t) {
  var res;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/customer/login_action').send({
            loginEmail: 'test1111@test.com',
            loginPassword: 'test'
          }).expect(400));

        case 2:
          res = _context9.sent;
          t.deepEqual(res.body.message, 'A customer with that email does not exist.');

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Customer login with correct email', function _callee10(t) {
  var res;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/customer/login_action').send({
            loginEmail: g.customers[0].email,
            loginPassword: 'test'
          }).expect(200));

        case 2:
          res = _context10.sent;
          t.deepEqual(res.body.message, 'Successfully logged in');

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Delete a customer', function _callee11(t) {
  var res;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(g.request["delete"]('/admin/customer').send({
            customerId: g.customers[0]._id
          }).set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context11.sent;
          t.deepEqual(res.body.message, 'Customer deleted');

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Failed deleting an incorrect customer', function _callee12(t) {
  var res;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(g.request["delete"]('/admin/customer').send({
            customerId: g.customers[0]._id
          }).set('apiKey', g.users[0].apiKey).expect(400));

        case 2:
          res = _context12.sent;
          t.deepEqual(res.body.message, 'Failed to delete customer. Customer not found');

        case 4:
        case "end":
          return _context12.stop();
      }
    }
  });
});