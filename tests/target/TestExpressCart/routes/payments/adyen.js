"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("regenerator-runtime/runtime");

var express = require('express');

var common = require('../../lib/common');

var _require = require('../../lib/indexing'),
    indexOrders = _require.indexOrders;

var numeral = require('numeral');

var _require2 = require('@adyen/api-library'),
    Client = _require2.Client,
    CheckoutAPI = _require2.CheckoutAPI;

var router = express.Router();
router.post('/setup', function _callee(req, res, next) {
  var adyenConfig, client, checkout, paymentsResponse;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          adyenConfig = common.getPaymentConfig();
          client = new Client({
            apiKey: adyenConfig.apiKey,
            environment: adyenConfig.environment
          });
          checkout = new CheckoutAPI(client);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(checkout.paymentMethods({
            amount: {
              currency: 'AUD',
              value: 0
            },
            countryCode: 'AU',
            channel: 'Web',
            merchantAccount: adyenConfig.merchantAccount
          }));

        case 6:
          paymentsResponse = _context.sent;
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          console.log('Exception getting supported payment methods', _context.t0.message);
          res.status(400).json({
            message: 'Failed to retrieve payment methods.' + _context.t0.message
          });

        case 13:
          res.status(200).json({
            paymentsResponse: paymentsResponse,
            environment: adyenConfig.environment,
            publicKey: adyenConfig.publicKey
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
});
router.post('/checkout_action', function _callee2(req, res, next) {
  var db, config, adyenConfig, client, checkout, response, paymentStatus, orderDoc, newOrder, newId;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          adyenConfig = common.getPaymentConfig();
          client = new Client({
            apiKey: adyenConfig.apiKey,
            environment: adyenConfig.environment
          });
          checkout = new CheckoutAPI(client);
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(checkout.payments({
            shopperInteraction: 'Ecommerce',
            amount: {
              currency: adyenConfig.currency,
              value: numeral(req.session.totalCartAmount).format('0.00').replace('.', '')
            },
            paymentMethod: JSON.parse(req.body.payment),
            reference: adyenConfig.statementDescriptor,
            merchantAccount: adyenConfig.merchantAccount,
            shopperStatement: adyenConfig.statementDescriptor
          }));

        case 8:
          response = _context2.sent;
          _context2.next = 17;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](5);
          console.log('Payment exception', _context2.t0.message);
          req.session.messageType = 'danger';
          req.session.message = 'Card declined. Contact card issuer';
          return _context2.abrupt("return");

        case 17:
          // Update response
          paymentStatus = 'Paid';

          if (response && response.resultCode !== 'Authorised') {
            paymentStatus = 'Declined';
          } // new order doc


          orderDoc = {
            orderPaymentId: response.pspReference,
            orderPaymentGateway: 'Adyen',
            orderPaymentMessage: response.refusalReason,
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
            orderStatus: paymentStatus,
            orderDate: new Date(),
            orderProducts: req.session.cart,
            orderType: 'Single'
          }; // insert order into DB

          _context2.next = 22;
          return regeneratorRuntime.awrap(db.orders.insertOne(orderDoc));

        case 22:
          newOrder = _context2.sent;
          // get the new ID
          newId = newOrder.insertedId; // add to lunr index

          indexOrders(req.app).then(function () {
            // Process the result
            if (paymentStatus === 'Paid') {
              // set the results
              req.session.messageType = 'success';
              req.session.message = 'Your payment was successfully completed';
              req.session.paymentEmailAddr = orderDoc.orderEmail;
              req.session.paymentApproved = true;
              req.session.paymentDetails = '<p><strong>Order ID: </strong>' + newId + '</p><p><strong>Transaction ID: </strong>' + response.pspReference + '</p>'; // set payment results for email

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


              common.sendEmail(req.session.paymentEmailAddr, 'Your payment with ' + config.cartTitle, common.getEmailTemplate(paymentResults));
            }

            res.status(200).json({
              paymentId: newId
            });
          });

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 11]]);
});
module.exports = router;