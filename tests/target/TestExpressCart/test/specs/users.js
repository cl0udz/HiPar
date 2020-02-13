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

(0, _ava.serial)('[Success] Create API key', function _callee2(t) {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test'
          }));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/admin/createApiKey').expect(200));

        case 4:
          res = _context2.sent;
          g.users[0].apiKey = res.body.apiKey;
          t.deepEqual(res.body.message, 'API Key generated');
          t.deepEqual(res.body.apiKey.length, 24);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] User Login', function _callee3(t) {
  var res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test'
          }).expect(200));

        case 2:
          res = _context3.sent;
          t.deepEqual(res.body.message, 'Login successful');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Incorrect user password', function _callee4(t) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test1'
          }).expect(400));

        case 2:
          res = _context4.sent;
          t.deepEqual(res.body.message, 'Access denied. Check password and try again.');

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Delete own user account', function _callee5(t) {
  var res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/delete').send({
            userId: g.users[0]._id
          }).expect(400));

        case 2:
          res = _context5.sent;
          t.deepEqual(res.body.message, 'Unable to delete own user account');

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Delete invalid user ID', function _callee6(t) {
  var res;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/delete').send({
            userId: 'invalid_user_id'
          }).expect(400));

        case 2:
          res = _context6.sent;
          t.deepEqual(res.body.message, 'User not found.');

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Create new user', function _callee7(t) {
  var user, res;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          user = {
            usersName: 'Jim Smith',
            userEmail: 'jim.smith@gmail.com',
            userPassword: 'test',
            isAdmin: false
          };
          _context7.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/insert').send(user).set('apiKey', g.users[0].apiKey).expect(200));

        case 3:
          res = _context7.sent;
          t.deepEqual(res.body.message, 'User account inserted');

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Create new user with invalid email', function _callee8(t) {
  var user, res;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          user = {
            usersName: 'Jim Smith',
            userEmail: 'jim.smith@gmail',
            userPassword: 'test',
            isAdmin: false
          };
          _context8.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/insert').send(user).set('apiKey', g.users[0].apiKey).expect(400));

        case 3:
          res = _context8.sent;
          t.deepEqual(res.body.message, 'Failed to create user. Check inputs.');
          t.deepEqual(res.body.error[0].message, 'should match format "emailAddress"');

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Update user', function _callee9(t) {
  var user, res;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          user = {
            userId: g.users[1]._id,
            usersName: 'Jim Smith',
            userEmail: 'jim.smith@gmail.com',
            userPassword: 'test',
            isAdmin: false
          };
          _context9.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/update').send(user).set('apiKey', g.users[0].apiKey).expect(200));

        case 3:
          res = _context9.sent;
          t.deepEqual(res.body.user._id, g.users[1]._id.toString());
          t.deepEqual(res.body.user.usersName, 'Jim Smith');
          t.deepEqual(res.body.user.userEmail, 'jim.smith@gmail.com');
          t.deepEqual(res.body.message, 'User account updated');

        case 8:
        case "end":
          return _context9.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Update user invalid email', function _callee10(t) {
  var user, res;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          user = {
            userId: g.users[1]._id,
            usersName: 'Jim Smith',
            userEmail: 'jim.smith@gmail',
            userPassword: 'test',
            isAdmin: false
          };
          _context10.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/update').send(user).set('apiKey', g.users[0].apiKey).expect(400));

        case 3:
          res = _context10.sent;
          t.deepEqual(res.body.message, 'Failed to create user. Check inputs.');
          t.deepEqual(res.body.error[0].message, 'should match format "emailAddress"');

        case 6:
        case "end":
          return _context10.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Update user invalid userId', function _callee11(t) {
  var user, res;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          user = {
            userId: '5dcfc8a5492532d1943e259e',
            usersName: 'Jim Smith',
            userEmail: 'jim.smith@gmail',
            userPassword: 'test',
            isAdmin: false
          };
          _context11.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/user/update').send(user).set('apiKey', g.users[0].apiKey).expect(400));

        case 3:
          res = _context11.sent;
          t.deepEqual(res.body.message, 'User not found');

        case 5:
        case "end":
          return _context11.stop();
      }
    }
  });
});