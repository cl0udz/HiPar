"use strict";

require("core-js/modules/es.array.concat");

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

var stripe = require('stripe')(common.getPaymentConfig().secretKey);

var router = express.Router(); // The homepage of the site

router.post('/checkout_action', function (req, res, next) {
  var db = req.app.db;
  var config = req.app.config;
  var stripeConfig = common.getPaymentConfig(); // Create the Stripe payload

  var chargePayload = {
    amount: numeral(req.session.totalCartAmount).format('0.00').replace('.', ''),
    currency: stripeConfig.stripeCurrency.toLowerCase(),
    source: req.body.stripeToken,
    description: stripeConfig.stripeDescription,
    shipping: {
      name: "".concat(req.session.customerFirstname, " ").concat(req.session.customerFirstname),
      address: {
        line1: req.session.customerAddress1,
        line2: req.session.customerAddress2,
        postal_code: req.session.customerPostcode,
        state: req.session.customerState,
        country: req.session.customerCountry
      }
    }
  }; // charge via stripe

  stripe.charges.create(chargePayload, function (err, charge) {
    if (err) {
      console.info(err.stack);
      req.session.messageType = 'danger';
      req.session.message = 'Your payment has declined. Please try again';
      req.session.paymentApproved = false;
      req.session.paymentDetails = '';
      res.redirect('/checkout/payment');
      return;
    } // order status


    var paymentStatus = 'Paid';

    if (charge.paid !== true) {
      paymentStatus = 'Declined';
    } // new order doc


    var orderDoc = {
      orderPaymentId: charge.id,
      orderPaymentGateway: 'Stripe',
      orderPaymentMessage: charge.outcome.seller_message,
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

    db.orders.insertOne(orderDoc, function (err, newDoc) {
      if (err) {
        console.info(err.stack);
      } // get the new ID


      var newId = newDoc.insertedId; // add to lunr index

      indexOrders(req.app).then(function () {
        // if approved, send email etc
        if (charge.paid === true) {
          // set the results
          req.session.messageType = 'success';
          req.session.message = 'Your payment was successfully completed';
          req.session.paymentEmailAddr = newDoc.ops[0].orderEmail;
          req.session.paymentApproved = true;
          req.session.paymentDetails = '<p><strong>Order ID: </strong>' + newId + '</p><p><strong>Transaction ID: </strong>' + charge.id + '</p>'; // set payment results for email

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


          common.sendEmail(req.session.paymentEmailAddr, 'Your payment with ' + config.cartTitle, common.getEmailTemplate(paymentResults)); // redirect to outcome

          res.redirect('/payment/' + newId);
        } else {
          // redirect to failure
          req.session.messageType = 'danger';
          req.session.message = 'Your payment has declined. Please try again';
          req.session.paymentApproved = false;
          req.session.paymentDetails = '<p><strong>Order ID: </strong>' + newId + '</p><p><strong>Transaction ID: </strong>' + charge.id + '</p>';
          res.redirect('/payment/' + newId);
        }
      });
    });
  });
}); // Subscription hook from Stripe

router.all('/subscription_update', function _callee(req, res, next) {
  var db, stripeSigSecret, stripeSig, hook, order, orderStatus;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db;
          stripeSigSecret = common.getPaymentConfig().stripeWebhookSecret;
          stripeSig = req.headers['stripe-signature'];

          if (!stripeSigSecret) {
            _context.next = 18;
            break;
          }

          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(stripe.webhooks.constructEvent(req.rawBody, stripeSig, stripeSigSecret));

        case 7:
          hook = _context.sent;
          console.info('Stripe Webhook received');
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          return _context.abrupt("return", res.status(400).send("Webhook Error: ".concat(_context.t0.message)));

        case 14:
          if (hook.data.object.customer) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Customer not found'
          }));

        case 16:
          _context.next = 19;
          break;

        case 18:
          hook = req.body;

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(db.orders.findOne({
            orderCustomer: hook.data.object.customer,
            orderType: 'Subscription'
          }));

        case 21:
          order = _context.sent;

          if (order) {
            _context.next = 24;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Order not found'
          }));

        case 24:
          orderStatus = 'Paid';

          if (hook.type === 'invoice.payment_failed') {
            orderStatus = 'Declined';
          } // Update order status


          _context.next = 28;
          return regeneratorRuntime.awrap(db.orders.updateOne({
            _id: common.getId(order._id),
            orderType: 'Subscription'
          }, {
            $set: {
              orderStatus: orderStatus
            }
          }));

        case 28:
          return _context.abrupt("return", res.status(200).json({
            message: 'Status successfully updated'
          }));

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]]);
});
router.post('/checkout_action_subscription', function _callee2(req, res, next) {
  var db, config, plan, customer, subscription, orderDoc, order, orderId;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(stripe.plans.retrieve(req.body.stripePlan));

        case 5:
          plan = _context2.sent;

          if (plan) {
            _context2.next = 11;
            break;
          }

          req.session.messageType = 'danger';
          req.session.message = 'The plan connected to this product doesn\'t exist';
          res.redirect('/checkout/payment');
          return _context2.abrupt("return");

        case 11:
          _context2.next = 19;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](2);
          req.session.messageType = 'danger';
          req.session.message = 'The plan connected to this product doesn\'t exist';
          res.redirect('/checkout/payment');
          return _context2.abrupt("return");

        case 19:
          _context2.next = 21;
          return regeneratorRuntime.awrap(stripe.customers.create({
            source: req.body.stripeToken,
            plan: req.body.stripePlan,
            email: req.body.shipEmail,
            name: "".concat(req.body.shipFirstname, " ").concat(req.body.shipLastname),
            phone: req.body.shipPhoneNumber
          }));

        case 21:
          customer = _context2.sent;

          if (customer) {
            _context2.next = 29;
            break;
          }

          req.session.messageType = 'danger';
          req.session.message = 'Your subscripton has declined. Please try again';
          req.session.paymentApproved = false;
          req.session.paymentDetails = '';
          res.redirect('/checkout/payment');
          return _context2.abrupt("return");

        case 29:
          if (!(customer.subscriptions.data && customer.subscriptions.data.length === 0)) {
            _context2.next = 36;
            break;
          }

          req.session.messageType = 'danger';
          req.session.message = 'Your subscripton has declined. Please try again';
          req.session.paymentApproved = false;
          req.session.paymentDetails = '';
          res.redirect('/checkout/payment');
          return _context2.abrupt("return");

        case 36:
          subscription = customer.subscriptions.data[0]; // Create the new order document

          orderDoc = {
            orderPaymentId: subscription.id,
            orderPaymentGateway: 'Stripe',
            orderPaymentMessage: subscription.collection_method,
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
            orderStatus: 'Pending',
            orderDate: new Date(),
            orderProducts: req.session.cart,
            orderType: 'Subscription',
            orderCustomer: customer.id
          }; // insert order into DB

          _context2.next = 40;
          return regeneratorRuntime.awrap(db.orders.insertOne(orderDoc));

        case 40:
          order = _context2.sent;
          orderId = order.insertedId;
          indexOrders(req.app).then(function () {
            // set the results
            req.session.messageType = 'success';
            req.session.message = 'Your subscription was successfully created';
            req.session.paymentEmailAddr = req.body.shipEmail;
            req.session.paymentApproved = true;
            req.session.paymentDetails = '<p><strong>Order ID: </strong>' + orderId + '</p><p><strong>Subscription ID: </strong>' + subscription.id + '</p>'; // set payment results for email

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


            common.sendEmail(req.session.paymentEmailAddr, 'Your payment with ' + config.cartTitle, common.getEmailTemplate(paymentResults)); // redirect to outcome

            res.redirect('/payment/' + orderId);
          });

        case 43:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 13]]);
});
module.exports = router;