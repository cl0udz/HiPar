"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

var express = require('express');

var common = require('../../lib/common');

var _require = require('../../lib/indexing'),
    indexOrders = _require.indexOrders;

var paypal = require('paypal-rest-sdk');

var router = express.Router();
router.get('/checkout_cancel', function (req, res, next) {
  // return to checkout for adjustment or repayment
  res.redirect('/checkout');
});
router.get('/checkout_return', function (req, res, next) {
  var db = req.app.db;
  var config = req.app.config;
  var paymentId = req.session.paymentId;
  var payerId = req.query.PayerID;
  var details = {
    payer_id: payerId
  };
  paypal.payment.execute(paymentId, details, function (error, payment) {
    var paymentApproved = false;
    var paymentMessage = '';
    var paymentDetails = '';

    if (error) {
      paymentApproved = false;

      if (error.response.name === 'PAYMENT_ALREADY_DONE') {
        paymentApproved = false;
        paymentMessage = error.response.message;
      } else {
        paymentApproved = false;
        paymentDetails = error.response.error_description;
      } // set the error


      req.session.messageType = 'danger';
      req.session.message = error.response.error_description;
      req.session.paymentApproved = paymentApproved;
      req.session.paymentDetails = paymentDetails;
      res.redirect('/payment/' + req.session.orderId);
      return;
    }

    var paymentOrderId = req.session.orderId;
    var paymentStatus = 'Approved'; // fully approved

    if (payment.state === 'approved') {
      paymentApproved = true;
      paymentStatus = 'Paid';
      paymentMessage = 'Your payment was successfully completed';
      paymentDetails = '<p><strong>Order ID: </strong>' + paymentOrderId + '</p><p><strong>Transaction ID: </strong>' + payment.id + '</p>'; // clear the cart

      if (req.session.cart) {
        common.emptyCart(req, res, 'function');
      }
    } // failed


    if (payment.failureReason) {
      paymentApproved = false;
      paymentMessage = 'Your payment failed - ' + payment.failureReason;
      paymentStatus = 'Declined';
    } // update the order status


    db.orders.updateOne({
      _id: common.getId(paymentOrderId)
    }, {
      $set: {
        orderStatus: paymentStatus
      }
    }, {
      multi: false
    }, function (err, numReplaced) {
      if (err) {
        console.info(err.stack);
      }

      db.orders.findOne({
        _id: common.getId(paymentOrderId)
      }, function (err, order) {
        if (err) {
          console.info(err.stack);
        } // add to lunr index


        indexOrders(req.app).then(function () {
          // set the results
          req.session.messageType = 'success';
          req.session.message = paymentMessage;
          req.session.paymentEmailAddr = order.orderEmail;
          req.session.paymentApproved = paymentApproved;
          req.session.paymentDetails = paymentDetails;
          var paymentResults = {
            message: req.session.message,
            messageType: req.session.messageType,
            paymentEmailAddr: req.session.paymentEmailAddr,
            paymentApproved: req.session.paymentApproved,
            paymentDetails: req.session.paymentDetails
          }; // send the email with the response
          // TODO: Should fix this to properly handle result

          common.sendEmail(req.session.paymentEmailAddr, 'Your payment with ' + config.cartTitle, common.getEmailTemplate(paymentResults));
          res.redirect('/payment/' + order._id);
        });
      });
    });
  });
}); // The homepage of the site

router.post('/checkout_action', function (req, res, next) {
  var db = req.app.db;
  var config = req.app.config;
  var paypalConfig = common.getPaymentConfig(); // setup the payment object

  var payment = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: config.baseUrl + '/paypal/checkout_return',
      cancel_url: config.baseUrl + '/paypal/checkout_cancel'
    },
    transactions: [{
      amount: {
        total: req.session.totalCartAmount,
        currency: paypalConfig.paypalCurrency
      },
      description: paypalConfig.paypalCartDescription
    }]
  }; // set the config

  paypal.configure(paypalConfig); // create payment

  paypal.payment.create(payment, function (error, payment) {
    if (error) {
      req.session.message = 'There was an error processing your payment. You have not been changed and can try again.';
      req.session.messageType = 'danger';
      res.redirect('/checkout/payment');
      return;
    }

    if (payment.payer.payment_method === 'paypal') {
      req.session.paymentId = payment.id;
      var redirectUrl;

      for (var i = 0; i < payment.links.length; i++) {
        var link = payment.links[i];

        if (link.method === 'REDIRECT') {
          redirectUrl = link.href;
        }
      } // if there is no items in the cart then render a failure


      if (!req.session.cart) {
        req.session.message = 'The are no items in your cart. Please add some items before checking out';
        req.session.messageType = 'danger';
        res.redirect('/');
        return;
      } // new order doc


      var orderDoc = {
        orderPaymentId: payment.id,
        orderPaymentGateway: 'Paypal',
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
        orderStatus: payment.state,
        orderDate: new Date(),
        orderProducts: req.session.cart,
        orderType: 'Single'
      };

      if (req.session.orderId) {
        // we have an order ID (probably from a failed/cancelled payment previosuly) so lets use that.
        // send the order to Paypal
        res.redirect(redirectUrl);
      } else {
        // no order ID so we create a new one
        db.orders.insertOne(orderDoc, function (err, newDoc) {
          if (err) {
            console.info(err.stack);
          } // get the new ID


          var newId = newDoc.insertedId; // set the order ID in the session

          req.session.orderId = newId; // send the order to Paypal

          res.redirect(redirectUrl);
        });
      }
    }
  });
});
module.exports = router;