"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var express = require('express');

var axios = require('axios');

var stripBom = require('strip-bom');

var common = require('../../lib/common');

var _require = require('../../lib/indexing'),
    indexOrders = _require.indexOrders;

var router = express.Router(); // The homepage of the site

router.post('/checkout_action', function (req, res, next) {
  var db = req.app.db;
  var config = req.app.config;
  var authorizenetConfig = common.getPaymentConfig();
  var authorizeUrl = 'https://api.authorize.net/xml/v1/request.api';

  if (authorizenetConfig.mode === 'test') {
    authorizeUrl = 'https://apitest.authorize.net/xml/v1/request.api';
  }

  var chargeJson = {
    createTransactionRequest: {
      merchantAuthentication: {
        name: authorizenetConfig.loginId,
        transactionKey: authorizenetConfig.transactionKey
      },
      transactionRequest: {
        transactionType: 'authCaptureTransaction',
        amount: req.session.totalCartAmount,
        payment: {
          opaqueData: {
            dataDescriptor: req.body.opaqueData.dataDescriptor,
            dataValue: req.body.opaqueData.dataValue
          }
        }
      }
    }
  };
  axios.post(authorizeUrl, chargeJson, {
    responseType: 'text'
  }).then(function _callee(response) {
    var txn, orderStatus, orderDoc, newDoc, newId;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // This is crazy but the Authorize.net API returns a string with BOM and totally
            // screws the JSON response being parsed. So many hours wasted!
            txn = JSON.parse(stripBom(response.data)).transactionResponse;

            if (txn) {
              _context.next = 6;
              break;
            }

            console.log('Declined request payload', chargeJson);
            console.log('Declined response payload', response.data);
            res.status(400).json({
              err: 'Your payment has declined. Please try again'
            });
            return _context.abrupt("return");

          case 6:
            // order status if approved
            orderStatus = 'Paid';

            if (txn && txn.responseCode !== '1') {
              console.log('Declined response payload', response.data);
              orderStatus = 'Declined';
            }

            orderDoc = {
              orderPaymentId: txn.transHash,
              orderPaymentGateway: 'AuthorizeNet',
              orderPaymentMessage: 'Your payment was successfully completed',
              orderTotal: req.session.totalCartAmount,
              orderShipping: req.session.totalCartShipping,
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
              orderStatus: orderStatus,
              orderDate: new Date(),
              orderProducts: req.session.cart,
              orderType: 'Single'
            }; // insert order into DB

            _context.prev = 9;
            _context.next = 12;
            return regeneratorRuntime.awrap(db.orders.insertOne(orderDoc));

          case 12:
            newDoc = _context.sent;
            // get the new ID
            newId = newDoc.insertedId; // add to lunr index

            indexOrders(req.app).then(function () {
              // if approved, send email etc
              if (orderStatus === 'Paid') {
                // set the results
                req.session.messageType = 'success';
                req.session.message = 'Your payment was successfully completed';
                req.session.paymentEmailAddr = newDoc.ops[0].orderEmail;
                req.session.paymentApproved = true;
                req.session.paymentDetails = "<p><strong>Order ID: </strong>".concat(newId, "</p>\n                    <p><strong>Transaction ID: </strong>").concat(orderDoc.orderPaymentId, "</p>"); // set payment results for email

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


                common.sendEmail(req.session.paymentEmailAddr, "Your payment with ".concat(config.cartTitle), common.getEmailTemplate(paymentResults)); // redirect to outcome

                res.status(200).json({
                  orderId: newId
                });
              } else {
                // redirect to failure
                req.session.messageType = 'danger';
                req.session.message = 'Your payment has declined. Please try again';
                req.session.paymentApproved = false;
                req.session.paymentDetails = "<p><strong>Order ID: </strong>".concat(newId, "\n                    </p><p><strong>Transaction ID: </strong> ").concat(txn.transHash, "</p>");
                res.status(400).json({
                  err: true,
                  orderId: newId
                });
              }
            });
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](9);
            console.log('Error sending payment to API', _context.t0);
            res.status(400).json({
              err: 'Your payment has declined. Please try again'
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[9, 17]]);
  })["catch"](function (err) {
    console.log('Error sending payment to API', err);
    res.status(400).json({
      err: 'Your payment has declined. Please try again'
    });
  });
});
module.exports = router;