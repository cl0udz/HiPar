"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.for-each");

require("regenerator-runtime/runtime");

var express = require('express');

var router = express.Router();

var colors = require('colors');

var randtoken = require('rand-token');

var bcrypt = require('bcryptjs');

var common = require('../lib/common');

var rateLimit = require('express-rate-limit');

var _require = require('../lib/indexing'),
    indexCustomers = _require.indexCustomers;

var _require2 = require('../lib/schema'),
    validateJson = _require2.validateJson;

var _require3 = require('../lib/auth'),
    restrict = _require3.restrict;

var apiLimiter = rateLimit({
  windowMs: 300000,
  // 5 minutes
  max: 5
}); // insert a customer

router.post('/customer/create', function _callee(req, res) {
  var db, customerObj, schemaResult, customer, newCustomer;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db;
          customerObj = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address1: req.body.address1,
            address2: req.body.address2,
            country: req.body.country,
            state: req.body.state,
            postcode: req.body.postcode,
            phone: req.body.phone,
            password: bcrypt.hashSync(req.body.password, 10),
            created: new Date()
          };
          schemaResult = validateJson('newCustomer', customerObj);

          if (schemaResult.result) {
            _context.next = 6;
            break;
          }

          res.status(400).json(schemaResult.errors);
          return _context.abrupt("return");

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(db.customers.findOne({
            email: req.body.email
          }));

        case 8:
          customer = _context.sent;

          if (!customer) {
            _context.next = 12;
            break;
          }

          res.status(400).json({
            message: 'A customer already exists with that email address'
          });
          return _context.abrupt("return");

        case 12:
          _context.prev = 12;
          _context.next = 15;
          return regeneratorRuntime.awrap(db.customers.insertOne(customerObj));

        case 15:
          newCustomer = _context.sent;
          indexCustomers(req.app).then(function () {
            // Return the new customer
            var customerReturn = newCustomer.ops[0];
            delete customerReturn.password; // Set the customer into the session

            req.session.customerPresent = true;
            req.session.customerEmail = customerReturn.email;
            req.session.customerFirstname = customerReturn.firstName;
            req.session.customerLastname = customerReturn.lastName;
            req.session.customerAddress1 = customerReturn.address1;
            req.session.customerAddress2 = customerReturn.address2;
            req.session.customerCountry = customerReturn.country;
            req.session.customerState = customerReturn.state;
            req.session.customerPostcode = customerReturn.postcode;
            req.session.customerPhone = customerReturn.phone;
            req.session.orderComment = req.body.orderComment; // Return customer oject

            res.status(200).json(customerReturn);
          });
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](12);
          console.error(colors.red('Failed to insert customer: ', _context.t0));
          res.status(400).json({
            message: 'Customer creation failed.'
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[12, 19]]);
});
router.post('/customer/save', function _callee2(req, res) {
  var customerObj, schemaResult;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          customerObj = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address1: req.body.address1,
            address2: req.body.address2,
            country: req.body.country,
            state: req.body.state,
            postcode: req.body.postcode,
            phone: req.body.phone
          };
          schemaResult = validateJson('saveCustomer', customerObj);

          if (schemaResult.result) {
            _context2.next = 5;
            break;
          }

          res.status(400).json(schemaResult.errors);
          return _context2.abrupt("return");

        case 5:
          // Set the customer into the session
          req.session.customerPresent = true;
          req.session.customerEmail = customerObj.email;
          req.session.customerFirstname = customerObj.firstName;
          req.session.customerLastname = customerObj.lastName;
          req.session.customerAddress1 = customerObj.address1;
          req.session.customerAddress2 = customerObj.address2;
          req.session.customerCountry = customerObj.country;
          req.session.customerState = customerObj.state;
          req.session.customerPostcode = customerObj.postcode;
          req.session.customerPhone = customerObj.phone;
          req.session.orderComment = req.body.orderComment;
          res.status(200).json(customerObj);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Update a customer

router.post('/admin/customer/update', restrict, function _callee3(req, res) {
  var db, customerObj, schemaResult, customer, updatedCustomer;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          db = req.app.db;
          customerObj = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address1: req.body.address1,
            address2: req.body.address2,
            country: req.body.country,
            state: req.body.state,
            postcode: req.body.postcode,
            phone: req.body.phone
          }; // Handle optional values

          if (req.body.password) {
            customerObj.password = bcrypt.hashSync(req.body.password, 10);
          }

          schemaResult = validateJson('editCustomer', customerObj);

          if (schemaResult.result) {
            _context3.next = 8;
            break;
          }

          console.log('errors', schemaResult.errors);
          res.status(400).json(schemaResult.errors);
          return _context3.abrupt("return");

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(db.customers.findOne({
            _id: common.getId(req.body.customerId)
          }));

        case 10:
          customer = _context3.sent;

          if (customer) {
            _context3.next = 14;
            break;
          }

          res.status(400).json({
            message: 'Customer not found'
          });
          return _context3.abrupt("return");

        case 14:
          _context3.prev = 14;
          _context3.next = 17;
          return regeneratorRuntime.awrap(db.customers.findOneAndUpdate({
            _id: common.getId(req.body.customerId)
          }, {
            $set: customerObj
          }, {
            multi: false,
            returnOriginal: false
          }));

        case 17:
          updatedCustomer = _context3.sent;
          indexCustomers(req.app).then(function () {
            var returnCustomer = updatedCustomer.value;
            delete returnCustomer.password;
            res.status(200).json({
              message: 'Customer updated',
              customer: updatedCustomer.value
            });
          });
          _context3.next = 25;
          break;

        case 21:
          _context3.prev = 21;
          _context3.t0 = _context3["catch"](14);
          console.error(colors.red('Failed updating customer: ' + _context3.t0));
          res.status(400).json({
            message: 'Failed to update customer'
          });

        case 25:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[14, 21]]);
}); // Delete a customer

router["delete"]('/admin/customer', restrict, function _callee4(req, res) {
  var db, customer;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          db = req.app.db; // check for existing customer

          _context4.next = 3;
          return regeneratorRuntime.awrap(db.customers.findOne({
            _id: common.getId(req.body.customerId)
          }));

        case 3:
          customer = _context4.sent;

          if (customer) {
            _context4.next = 7;
            break;
          }

          res.status(400).json({
            message: 'Failed to delete customer. Customer not found'
          });
          return _context4.abrupt("return");

        case 7:
          _context4.prev = 7;
          _context4.next = 10;
          return regeneratorRuntime.awrap(db.customers.deleteOne({
            _id: common.getId(req.body.customerId)
          }));

        case 10:
          indexCustomers(req.app).then(function () {
            res.status(200).json({
              message: 'Customer deleted'
            });
          });
          _context4.next = 17;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](7);
          console.error(colors.red('Failed deleting customer: ' + _context4.t0));
          res.status(400).json({
            message: 'Failed to delete customer'
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[7, 13]]);
}); // render the customer view

router.get('/admin/customer/view/:id?', restrict, function _callee5(req, res) {
  var db, customer;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          db = req.app.db;
          _context5.next = 3;
          return regeneratorRuntime.awrap(db.customers.findOne({
            _id: common.getId(req.params.id)
          }));

        case 3:
          customer = _context5.sent;

          if (customer) {
            _context5.next = 10;
            break;
          }

          if (!req.apiAuthenticated) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(400).json({
            message: 'Customer not found'
          }));

        case 7:
          req.session.message = 'Customer not found';
          req.session.message_type = 'danger';
          return _context5.abrupt("return", res.redirect('/admin/customers'));

        case 10:
          if (!req.apiAuthenticated) {
            _context5.next = 12;
            break;
          }

          return _context5.abrupt("return", res.status(200).json(customer));

        case 12:
          return _context5.abrupt("return", res.render('customer', {
            title: 'View customer',
            result: customer,
            admin: true,
            session: req.session,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            countryList: common.getCountryList(),
            config: req.app.config,
            editor: true,
            helpers: req.handlebars.helpers
          }));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // customers list

router.get('/admin/customers', restrict, function _callee6(req, res) {
  var db, customers;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          db = req.app.db;
          _context6.next = 3;
          return regeneratorRuntime.awrap(db.customers.find({}).limit(20).sort({
            created: -1
          }).toArray());

        case 3:
          customers = _context6.sent;

          if (!req.apiAuthenticated) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return", res.status(200).json(customers));

        case 6:
          return _context6.abrupt("return", res.render('customers', {
            title: 'Customers - List',
            admin: true,
            customers: customers,
            session: req.session,
            helpers: req.handlebars.helpers,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            config: req.app.config
          }));

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // Filtered customers list

router.get('/admin/customers/filter/:search', restrict, function _callee7(req, res, next) {
  var db, searchTerm, customersIndex, lunrIdArray, customers;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          db = req.app.db;
          searchTerm = req.params.search;
          customersIndex = req.app.customersIndex;
          lunrIdArray = [];
          customersIndex.search(searchTerm).forEach(function (id) {
            lunrIdArray.push(common.getId(id.ref));
          }); // we search on the lunr indexes

          _context7.next = 7;
          return regeneratorRuntime.awrap(db.customers.find({
            _id: {
              $in: lunrIdArray
            }
          }).sort({
            created: -1
          }).toArray());

        case 7:
          customers = _context7.sent;

          if (!req.apiAuthenticated) {
            _context7.next = 10;
            break;
          }

          return _context7.abrupt("return", res.status(200).json({
            customers: customers
          }));

        case 10:
          return _context7.abrupt("return", res.render('customers', {
            title: 'Customer results',
            customers: customers,
            admin: true,
            config: req.app.config,
            session: req.session,
            searchTerm: searchTerm,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          }));

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.post('/admin/customer/lookup', restrict, function _callee8(req, res, next) {
  var db, customerEmail, customer;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          db = req.app.db;
          customerEmail = req.body.customerEmail; // Search for a customer

          _context8.next = 4;
          return regeneratorRuntime.awrap(db.customers.findOne({
            email: customerEmail
          }));

        case 4:
          customer = _context8.sent;

          if (!customer) {
            _context8.next = 17;
            break;
          }

          req.session.customerPresent = true;
          req.session.customerEmail = customer.email;
          req.session.customerFirstname = customer.firstName;
          req.session.customerLastname = customer.lastName;
          req.session.customerAddress1 = customer.address1;
          req.session.customerAddress2 = customer.address2;
          req.session.customerCountry = customer.country;
          req.session.customerState = customer.state;
          req.session.customerPostcode = customer.postcode;
          req.session.customerPhone = customer.phone;
          return _context8.abrupt("return", res.status(200).json({
            message: 'Customer found',
            customer: customer
          }));

        case 17:
          return _context8.abrupt("return", res.status(400).json({
            message: 'No customers found'
          }));

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // login the customer and check the password

router.post('/customer/login_action', function _callee9(req, res) {
  var db, customer;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          db = req.app.db;
          _context9.next = 3;
          return regeneratorRuntime.awrap(db.customers.findOne({
            email: common.mongoSanitize(req.body.loginEmail)
          }));

        case 3:
          customer = _context9.sent;

          if (!(customer === undefined || customer === null)) {
            _context9.next = 7;
            break;
          }

          res.status(400).json({
            message: 'A customer with that email does not exist.'
          });
          return _context9.abrupt("return");

        case 7:
          // we have a customer under that email so we compare the password
          bcrypt.compare(req.body.loginPassword, customer.password).then(function (result) {
            if (!result) {
              // password is not correct
              res.status(400).json({
                message: 'Access denied. Check password and try again.'
              });
              return;
            } // Customer login successful


            req.session.customerPresent = true;
            req.session.customerEmail = customer.email;
            req.session.customerFirstname = customer.firstName;
            req.session.customerLastname = customer.lastName;
            req.session.customerAddress1 = customer.address1;
            req.session.customerAddress2 = customer.address2;
            req.session.customerCountry = customer.country;
            req.session.customerState = customer.state;
            req.session.customerPostcode = customer.postcode;
            req.session.customerPhone = customer.phone;
            res.status(200).json({
              message: 'Successfully logged in',
              customer: customer
            });
          })["catch"](function (err) {
            res.status(400).json({
              message: 'Access denied. Check password and try again.'
            });
          });

        case 8:
        case "end":
          return _context9.stop();
      }
    }
  });
}); // customer forgotten password

router.get('/customer/forgotten', function (req, res) {
  res.render('forgotten', {
    title: 'Forgotten',
    route: 'customer',
    forgotType: 'customer',
    config: req.app.config,
    helpers: req.handlebars.helpers,
    message: common.clearSessionValue(req.session, 'message'),
    messageType: common.clearSessionValue(req.session, 'messageType'),
    showFooter: 'showFooter'
  });
}); // forgotten password

router.post('/customer/forgotten_action', apiLimiter, function _callee10(req, res) {
  var db, config, passwordToken, customer, tokenExpiry, mailOpts;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          passwordToken = randtoken.generate(30); // find the user

          _context10.next = 5;
          return regeneratorRuntime.awrap(db.customers.findOne({
            email: req.body.email
          }));

        case 5:
          customer = _context10.sent;
          _context10.prev = 6;

          if (customer) {
            _context10.next = 10;
            break;
          }

          // if don't have an email on file, silently fail
          res.status(200).json({
            message: 'If your account exists, a password reset has been sent to your email'
          });
          return _context10.abrupt("return");

        case 10:
          tokenExpiry = Date.now() + 3600000;
          _context10.next = 13;
          return regeneratorRuntime.awrap(db.customers.updateOne({
            email: req.body.email
          }, {
            $set: {
              resetToken: passwordToken,
              resetTokenExpiry: tokenExpiry
            }
          }, {
            multi: false
          }));

        case 13:
          // send forgotten password email
          mailOpts = {
            to: req.body.email,
            subject: 'Forgotten password request',
            body: "You are receiving this because you (or someone else) have requested the reset of the password for your user account.\n\n\n                Please click on the following link, or paste this into your browser to complete the process:\n\n\n                ".concat(config.baseUrl, "/customer/reset/").concat(passwordToken, "\n\n\n                If you did not request this, please ignore this email and your password will remain unchanged.\n")
          }; // send the email with token to the user
          // TODO: Should fix this to properly handle result

          common.sendEmail(mailOpts.to, mailOpts.subject, mailOpts.body);
          res.status(200).json({
            message: 'If your account exists, a password reset has been sent to your email'
          });
          _context10.next = 21;
          break;

        case 18:
          _context10.prev = 18;
          _context10.t0 = _context10["catch"](6);
          res.status(400).json({
            message: 'Password reset failed.'
          });

        case 21:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[6, 18]]);
}); // reset password form

router.get('/customer/reset/:token', function _callee11(req, res) {
  var db, customer;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          db = req.app.db; // Find the customer using the token

          _context11.next = 3;
          return regeneratorRuntime.awrap(db.customers.findOne({
            resetToken: req.params.token,
            resetTokenExpiry: {
              $gt: Date.now()
            }
          }));

        case 3:
          customer = _context11.sent;

          if (customer) {
            _context11.next = 9;
            break;
          }

          req.session.message = 'Password reset token is invalid or has expired';
          req.session.message_type = 'danger';
          res.redirect('/forgot');
          return _context11.abrupt("return");

        case 9:
          // show the password reset form
          res.render('reset', {
            title: 'Reset password',
            token: req.params.token,
            route: 'customer',
            config: req.app.config,
            message: common.clearSessionValue(req.session, 'message'),
            message_type: common.clearSessionValue(req.session, 'message_type'),
            show_footer: 'show_footer',
            helpers: req.handlebars.helpers
          });

        case 10:
        case "end":
          return _context11.stop();
      }
    }
  });
}); // reset password action

router.post('/customer/reset/:token', function _callee12(req, res) {
  var db, customer, newPassword, mailOpts;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          db = req.app.db; // get the customer

          _context12.next = 3;
          return regeneratorRuntime.awrap(db.customers.findOne({
            resetToken: req.params.token,
            resetTokenExpiry: {
              $gt: Date.now()
            }
          }));

        case 3:
          customer = _context12.sent;

          if (customer) {
            _context12.next = 8;
            break;
          }

          req.session.message = 'Password reset token is invalid or has expired';
          req.session.message_type = 'danger';
          return _context12.abrupt("return", res.redirect('/forgot'));

        case 8:
          // update the password and remove the token
          newPassword = bcrypt.hashSync(req.body.password, 10);
          _context12.prev = 9;
          _context12.next = 12;
          return regeneratorRuntime.awrap(db.customers.updateOne({
            email: customer.email
          }, {
            $set: {
              password: newPassword,
              resetToken: undefined,
              resetTokenExpiry: undefined
            }
          }, {
            multi: false
          }));

        case 12:
          mailOpts = {
            to: customer.email,
            subject: 'Password successfully reset',
            body: 'This is a confirmation that the password for your account ' + customer.email + ' has just been changed successfully.\n'
          }; // TODO: Should fix this to properly handle result

          common.sendEmail(mailOpts.to, mailOpts.subject, mailOpts.body);
          req.session.message = 'Password successfully updated';
          req.session.message_type = 'success';
          return _context12.abrupt("return", res.redirect('/checkout/payment'));

        case 19:
          _context12.prev = 19;
          _context12.t0 = _context12["catch"](9);
          console.log('Unable to reset password', _context12.t0);
          req.session.message = 'Unable to reset password';
          req.session.message_type = 'danger';
          return _context12.abrupt("return", res.redirect('/forgot'));

        case 25:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[9, 19]]);
}); // logout the customer

router.post('/customer/logout', function (req, res) {
  // Clear our session
  common.clearCustomer(req);
  res.status(200).json({});
});
module.exports = router;