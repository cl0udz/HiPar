"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var express = require('express');

var common = require('../lib/common');

var _require = require('../lib/auth'),
    restrict = _require.restrict;

var colors = require('colors');

var bcrypt = require('bcryptjs');

var _require2 = require('../lib/schema'),
    validateJson = _require2.validateJson;

var router = express.Router();
router.get('/admin/users', restrict, function _callee(req, res) {
  var db, users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.users.find({}, {
            projection: {
              userPassword: 0
            }
          }).toArray());

        case 3:
          users = _context.sent;

          if (!req.apiAuthenticated) {
            _context.next = 7;
            break;
          }

          res.status(200).json(users);
          return _context.abrupt("return");

        case 7:
          res.render('users', {
            title: 'Users',
            users: users,
            admin: true,
            config: req.app.config,
            isAdmin: req.session.isAdmin,
            helpers: req.handlebars.helpers,
            session: req.session,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType')
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}); // edit user

router.get('/admin/user/edit/:id', restrict, function _callee2(req, res) {
  var db, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db.users.findOne({
            _id: common.getId(req.params.id)
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 12;
            break;
          }

          if (!req.apiAuthenticated) {
            _context2.next = 8;
            break;
          }

          res.status(400).json({
            message: 'User not found'
          });
          return _context2.abrupt("return");

        case 8:
          req.session.message = 'User not found';
          req.session.messageType = 'danger';
          res.redirect('/admin/users');
          return _context2.abrupt("return");

        case 12:
          if (!(user.userEmail !== req.session.user && req.session.isAdmin === false)) {
            _context2.next = 20;
            break;
          }

          if (!req.apiAuthenticated) {
            _context2.next = 16;
            break;
          }

          res.status(400).json({
            message: 'Access denied'
          });
          return _context2.abrupt("return");

        case 16:
          req.session.message = 'Access denied';
          req.session.messageType = 'danger';
          res.redirect('/admin/users');
          return _context2.abrupt("return");

        case 20:
          res.render('user-edit', {
            title: 'User edit',
            user: user,
            admin: true,
            session: req.session,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            config: req.app.config
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // users new

router.get('/admin/user/new', restrict, function (req, res) {
  res.render('user-new', {
    title: 'User - New',
    admin: true,
    session: req.session,
    helpers: req.handlebars.helpers,
    message: common.clearSessionValue(req.session, 'message'),
    messageType: common.clearSessionValue(req.session, 'messageType'),
    config: req.app.config
  });
}); // delete a user

router.post('/admin/user/delete', restrict, function _callee3(req, res) {
  var db, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          db = req.app.db; // userId

          if (!(req.session.isAdmin !== true)) {
            _context3.next = 4;
            break;
          }

          res.status(400).json({
            message: 'Access denied'
          });
          return _context3.abrupt("return");

        case 4:
          if (!(req.session.userId === req.body.userId)) {
            _context3.next = 7;
            break;
          }

          res.status(400).json({
            message: 'Unable to delete own user account'
          });
          return _context3.abrupt("return");

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(db.users.findOne({
            _id: common.getId(req.body.userId)
          }));

        case 9:
          user = _context3.sent;

          if (user) {
            _context3.next = 13;
            break;
          }

          res.status(400).json({
            message: 'User not found.'
          });
          return _context3.abrupt("return");

        case 13:
          if (!user.isOwner) {
            _context3.next = 16;
            break;
          }

          res.status(400).json({
            message: 'Access denied.'
          });
          return _context3.abrupt("return");

        case 16:
          _context3.prev = 16;
          _context3.next = 19;
          return regeneratorRuntime.awrap(db.users.deleteOne({
            _id: common.getId(req.body.userId)
          }, {}));

        case 19:
          res.status(200).json({
            message: 'User deleted.'
          });
          return _context3.abrupt("return");

        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](16);
          console.log('Failed to delete user', _context3.t0);
          res.status(200).json({
            message: 'Cannot delete user'
          });
          return _context3.abrupt("return");

        case 28:
          ;

        case 29:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[16, 23]]);
}); // update a user

router.post('/admin/user/update', restrict, function _callee4(req, res) {
  var db, isAdmin, user, updateDoc, schemaResult, updatedUser, returnUser;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          db = req.app.db;
          isAdmin = req.body.userAdmin === 'on'; // get the user we want to update

          _context4.next = 4;
          return regeneratorRuntime.awrap(db.users.findOne({
            _id: common.getId(req.body.userId)
          }));

        case 4:
          user = _context4.sent;

          if (user) {
            _context4.next = 8;
            break;
          }

          res.status(400).json({
            message: 'User not found'
          });
          return _context4.abrupt("return");

        case 8:
          // If the current user changing own account ensure isAdmin retains existing
          if (user.userEmail === req.session.user) {
            isAdmin = user.isAdmin;
          } // if the user we want to edit is not the current logged in user and the current user is not
          // an admin we render an access denied message


          if (!(user.userEmail !== req.session.user && req.session.isAdmin === false)) {
            _context4.next = 12;
            break;
          }

          res.status(400).json({
            message: 'Access denied'
          });
          return _context4.abrupt("return");

        case 12:
          // create the update doc
          updateDoc = {};
          updateDoc.isAdmin = isAdmin;

          if (req.body.usersName) {
            updateDoc.usersName = req.body.usersName;
          }

          if (req.body.userEmail) {
            updateDoc.userEmail = req.body.userEmail;
          }

          if (req.body.userPassword) {
            updateDoc.userPassword = bcrypt.hashSync(req.body.userPassword);
          } // Validate update user


          schemaResult = validateJson('editUser', updateDoc);

          if (schemaResult.result) {
            _context4.next = 21;
            break;
          }

          res.status(400).json({
            message: 'Failed to create user. Check inputs.',
            error: schemaResult.errors
          });
          return _context4.abrupt("return");

        case 21:
          _context4.prev = 21;
          _context4.next = 24;
          return regeneratorRuntime.awrap(db.users.findOneAndUpdate({
            _id: common.getId(req.body.userId)
          }, {
            $set: updateDoc
          }, {
            multi: false,
            returnOriginal: false
          }));

        case 24:
          updatedUser = _context4.sent;
          returnUser = updatedUser.value;
          delete returnUser.userPassword;
          delete returnUser.apiKey;
          res.status(200).json({
            message: 'User account updated',
            user: updatedUser.value
          });
          return _context4.abrupt("return");

        case 32:
          _context4.prev = 32;
          _context4.t0 = _context4["catch"](21);
          console.error(colors.red('Failed updating user: ' + _context4.t0));
          res.status(400).json({
            message: 'Failed to update user'
          });

        case 36:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[21, 32]]);
}); // insert a user

router.post('/admin/user/insert', restrict, function _callee5(req, res) {
  var db, userCount, isAdmin, userObj, schemaResult, user, newUser;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          db = req.app.db; // Check number of users

          _context5.next = 3;
          return regeneratorRuntime.awrap(db.users.countDocuments({}));

        case 3:
          userCount = _context5.sent;
          isAdmin = false; // if no users, setup user as admin

          if (userCount === 0) {
            isAdmin = true;
          }

          userObj = {
            usersName: req.body.usersName,
            userEmail: req.body.userEmail,
            userPassword: bcrypt.hashSync(req.body.userPassword, 10),
            isAdmin: isAdmin
          }; // Validate new user

          schemaResult = validateJson('newUser', userObj);

          if (schemaResult.result) {
            _context5.next = 11;
            break;
          }

          res.status(400).json({
            message: 'Failed to create user. Check inputs.',
            error: schemaResult.errors
          });
          return _context5.abrupt("return");

        case 11:
          _context5.next = 13;
          return regeneratorRuntime.awrap(db.users.findOne({
            userEmail: req.body.userEmail
          }));

        case 13:
          user = _context5.sent;

          if (!user) {
            _context5.next = 18;
            break;
          }

          console.error(colors.red('Failed to insert user, possibly already exists'));
          res.status(400).json({
            message: 'A user with that email address already exists'
          });
          return _context5.abrupt("return");

        case 18:
          _context5.prev = 18;
          _context5.next = 21;
          return regeneratorRuntime.awrap(db.users.insertOne(userObj));

        case 21:
          newUser = _context5.sent;
          res.status(200).json({
            message: 'User account inserted',
            userId: newUser.insertedId
          });
          _context5.next = 29;
          break;

        case 25:
          _context5.prev = 25;
          _context5.t0 = _context5["catch"](18);
          console.error(colors.red('Failed to insert user: ' + _context5.t0));
          res.status(400).json({
            message: 'New user creation failed'
          });

        case 29:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[18, 25]]);
});
module.exports = router;