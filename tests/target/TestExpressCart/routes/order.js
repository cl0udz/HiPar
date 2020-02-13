"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.for-each");

require("regenerator-runtime/runtime");

var express = require('express');

var _require = require('../lib/common'),
    clearSessionValue = _require.clearSessionValue,
    emptyCart = _require.emptyCart,
    getCountryList = _require.getCountryList,
    getId = _require.getId,
    sendEmail = _require.sendEmail,
    getEmailTemplate = _require.getEmailTemplate,
    clearCustomer = _require.clearCustomer;

var _require2 = require('../lib/auth'),
    restrict = _require2.restrict,
    checkAccess = _require2.checkAccess;

var _require3 = require('../lib/indexing'),
    indexOrders = _require3.indexOrders;

var router = express.Router(); // Show orders

router.get('/admin/orders', restrict, function _callee(req, res, next) {
  var db, orders;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db; // Top 10 products

          _context.next = 3;
          return regeneratorRuntime.awrap(db.orders.find({}).sort({
            orderDate: -1
          }).limit(10).toArray());

        case 3:
          orders = _context.sent;

          if (!req.apiAuthenticated) {
            _context.next = 7;
            break;
          }

          res.status(200).json({
            orders: orders
          });
          return _context.abrupt("return");

        case 7:
          res.render('orders', {
            title: 'Cart',
            orders: orders,
            admin: true,
            config: req.app.config,
            session: req.session,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Admin section

router.get('/admin/orders/bystatus/:orderstatus', restrict, function _callee2(req, res, next) {
  var db, regex, orders;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;

          if (!(typeof req.params.orderstatus === 'undefined')) {
            _context2.next = 4;
            break;
          }

          res.redirect('/admin/orders');
          return _context2.abrupt("return");

        case 4:
          // case insensitive search
          regex = new RegExp(['^', req.params.orderstatus, '$'].join(''), 'i');
          _context2.next = 7;
          return regeneratorRuntime.awrap(db.orders.find({
            orderStatus: regex
          }).sort({
            orderDate: -1
          }).limit(10).toArray());

        case 7:
          orders = _context2.sent;

          if (!req.apiAuthenticated) {
            _context2.next = 11;
            break;
          }

          res.status(200).json({
            orders: orders
          });
          return _context2.abrupt("return");

        case 11:
          res.render('orders', {
            title: 'Cart',
            orders: orders,
            admin: true,
            filteredOrders: true,
            filteredStatus: req.params.orderstatus,
            config: req.app.config,
            session: req.session,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // render the editor

router.get('/admin/order/view/:id', restrict, function _callee3(req, res) {
  var db, order;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          db = req.app.db;
          _context3.next = 3;
          return regeneratorRuntime.awrap(db.orders.findOne({
            _id: getId(req.params.id)
          }));

        case 3:
          order = _context3.sent;
          res.render('order', {
            title: 'View order',
            result: order,
            config: req.app.config,
            session: req.session,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            editor: true,
            admin: true,
            helpers: req.handlebars.helpers
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // render the editor

router.get('/admin/order/create', restrict, function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.render('order-create', {
            title: 'Create order',
            config: req.app.config,
            session: req.session,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            countryList: getCountryList(),
            editor: true,
            admin: true,
            helpers: req.handlebars.helpers
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.post('/admin/order/create', function _callee5(req, res, next) {
  var db, config, orderDoc, newDoc, orderId;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          db = req.app.db;
          config = req.app.config; // Check if cart is empty

          if (!req.session.cart) {
            res.status(400).json({
              message: 'The cart is empty. You will need to add items to the cart first.'
            });
          }

          orderDoc = {
            orderPaymentId: getId(),
            orderPaymentGateway: 'Instore',
            orderPaymentMessage: 'Your payment was successfully completed',
            orderTotal: req.session.totalCartAmount,
            orderShipping: req.session.totalCartShipping,
            orderItemCount: req.session.totalCartItems,
            orderProductCount: req.session.totalCartProducts,
            orderEmail: req.body.email || req.session.customerEmail,
            orderFirstname: req.body.firstName || req.session.customerFirstname,
            orderLastname: req.body.lastName || req.session.customerLastname,
            orderAddr1: req.body.address1 || req.session.customerAddress1,
            orderAddr2: req.body.address2 || req.session.customerAddress2,
            orderCountry: req.body.country || req.session.customerCountry,
            orderState: req.body.state || req.session.customerState,
            orderPostcode: req.body.postcode || req.session.customerPostcode,
            orderPhoneNumber: req.body.phone || req.session.customerPhone,
            orderComment: req.body.orderComment || req.session.orderComment,
            orderStatus: req.body.orderStatus,
            orderDate: new Date(),
            orderProducts: req.session.cart,
            orderType: 'Single'
          }; // insert order into DB

          _context5.prev = 4;
          _context5.next = 7;
          return regeneratorRuntime.awrap(db.orders.insertOne(orderDoc));

        case 7:
          newDoc = _context5.sent;
          // get the new ID
          orderId = newDoc.insertedId; // add to lunr index

          indexOrders(req.app).then(function () {
            // set the results
            req.session.messageType = 'success';
            req.session.message = 'Your order was successfully placed. Payment for your order will be completed instore.';
            req.session.paymentEmailAddr = newDoc.ops[0].orderEmail;
            req.session.paymentApproved = true;
            req.session.paymentDetails = "<p><strong>Order ID: </strong>".concat(orderId, "</p>\n            <p><strong>Transaction ID: </strong>").concat(orderDoc.orderPaymentId, "</p>"); // set payment results for email

            var paymentResults = {
              message: req.session.message,
              messageType: req.session.messageType,
              paymentEmailAddr: req.session.paymentEmailAddr,
              paymentApproved: true,
              paymentDetails: req.session.paymentDetails
            }; // clear the cart

            if (req.session.cart) {
              emptyCart(req, res, 'function');
            } // Clear customer session


            clearCustomer(req); // send the email with the response
            // TODO: Should fix this to properly handle result

            sendEmail(req.session.paymentEmailAddr, "Your order with ".concat(config.cartTitle), getEmailTemplate(paymentResults)); // redirect to outcome

            res.status(200).json({
              message: 'Order created successfully',
              orderId: orderId
            });
          });
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](4);
          res.status(400).json({
            err: 'Your order declined. Please try again'
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[4, 12]]);
}); // Admin section

router.get('/admin/orders/filter/:search', restrict, function _callee6(req, res, next) {
  var db, searchTerm, ordersIndex, lunrIdArray, orders;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          db = req.app.db;
          searchTerm = req.params.search;
          ordersIndex = req.app.ordersIndex;
          lunrIdArray = [];
          ordersIndex.search(searchTerm).forEach(function (id) {
            lunrIdArray.push(getId(id.ref));
          }); // we search on the lunr indexes

          _context6.next = 7;
          return regeneratorRuntime.awrap(db.orders.find({
            _id: {
              $in: lunrIdArray
            }
          }).toArray());

        case 7:
          orders = _context6.sent;

          if (!req.apiAuthenticated) {
            _context6.next = 11;
            break;
          }

          res.status(200).json({
            orders: orders
          });
          return _context6.abrupt("return");

        case 11:
          res.render('orders', {
            title: 'Order results',
            orders: orders,
            admin: true,
            config: req.app.config,
            session: req.session,
            searchTerm: searchTerm,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // order product

router.get('/admin/order/delete/:id', restrict, function _callee7(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          db = req.app.db; // remove the order

          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(db.orders.deleteOne({
            _id: getId(req.params.id)
          }));

        case 4:
          // remove the index
          indexOrders(req.app).then(function () {
            if (req.apiAuthenticated) {
              res.status(200).json({
                message: 'Order successfully deleted'
              });
              return;
            } // redirect home


            req.session.message = 'Order successfully deleted';
            req.session.messageType = 'success';
            res.redirect('/admin/orders');
          });
          _context7.next = 16;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](1);
          console.log('Cannot delete order', _context7.t0);

          if (!req.apiAuthenticated) {
            _context7.next = 13;
            break;
          }

          res.status(200).json({
            message: 'Error deleting order'
          });
          return _context7.abrupt("return");

        case 13:
          // redirect home
          req.session.message = 'Error deleting order';
          req.session.messageType = 'danger';
          res.redirect('/admin/orders');

        case 16:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 7]]);
}); // update order status

router.post('/admin/order/statusupdate', restrict, checkAccess, function _callee8(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          db = req.app.db;
          _context8.prev = 1;
          _context8.next = 4;
          return regeneratorRuntime.awrap(db.orders.updateOne({
            _id: getId(req.body.order_id)
          }, {
            $set: {
              orderStatus: req.body.status
            }
          }, {
            multi: false
          }));

        case 4:
          return _context8.abrupt("return", res.status(200).json({
            message: 'Status successfully updated'
          }));

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](1);
          console.info('Error updating status', _context8.t0);
          return _context8.abrupt("return", res.status(400).json({
            message: 'Failed to update the order status'
          }));

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 7]]);
});
module.exports = router;