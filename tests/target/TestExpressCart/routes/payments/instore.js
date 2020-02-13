"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var express = require('express');

var common = require('../../lib/common');

var _require = require('../../lib/indexing'),
    indexOrders = _require.indexOrders;

var router = express.Router(); // The homepage of the site

router.post('/checkout_action', function _callee(req, res, next) {
  var db, config, instoreConfig, orderDoc, newDoc, newId;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          instoreConfig = common.getPaymentConfig();
          orderDoc = {
            orderPaymentId: common.getId(),
            orderPaymentGateway: 'Instore',
            orderPaymentMessage: 'Your payment was successfully completed',
            orderTotal: req.session.totalCartAmount,
            orderShipping: 0,
            orderItemCount: req.session.totalCartItems,
            orderProductCount: req.session.totalCartProducts,
            orderEmail: req.session.customerEmail,
            orderFirstname: req.session.customerFirstname,
            orderLastname: req.session.customerLastname,
            orderAddr1: req.session.customerAddress1,
            orderAddr2: req.session.customerAddress2,
            orderCountry: req.session.customerCountry,
            orderState: req.session.customerState,
            orderPostcode: req.session.customerPostcode,
            orderPhoneNumber: req.session.customerPhone,
            orderComment: req.session.orderComment,
            orderStatus: instoreConfig.orderStatus,
            orderDate: new Date(),
            orderProducts: req.session.cart,
            orderType: 'Single'
          }; // insert order into DB

          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(db.orders.insertOne(orderDoc));

        case 7:
          newDoc = _context.sent;
          // get the new ID
          newId = newDoc.insertedId; // add to lunr index

          indexOrders(req.app).then(function () {
            // set the results
            req.session.messageType = 'success';
            req.session.message = 'Your order was successfully placed. Payment for your order will be completed instore.';
            req.session.paymentEmailAddr = newDoc.ops[0].orderEmail;
            req.session.paymentApproved = true;
            req.session.paymentDetails = "<p><strong>Order ID: </strong>".concat(newId, "</p>\n            <p><strong>Transaction ID: </strong>").concat(orderDoc.orderPaymentId, "</p>"); // set payment results for email

            var paymentResults = {
              message: req.session.message,
              messageType: req.session.messageType,
              paymentEmailAddr: req.session.paymentEmailAddr,
              paymentApproved: true,
              paymentDetails: req.session.paymentDetails
            }; // clear the cart

            if (req.session.cart) {
              common.emptyCart(req, res, 'function');
            } // send the email with the response
            // TODO: Should fix this to properly handle result


            common.sendEmail(req.session.paymentEmailAddr, "Your order with ".concat(config.cartTitle), common.getEmailTemplate(paymentResults)); // redirect to outcome

            res.redirect('/payment/' + newId);
          });
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          console.log('Error sending payment to API', _context.t0);
          res.status(400).json({
            err: 'Your order declined. Please try again'
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 12]]);
});
module.exports = router;