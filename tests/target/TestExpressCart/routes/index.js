"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.to-fixed");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-float");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/es.string.link");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var express = require('express');

var router = express.Router();

var colors = require('colors');

var hash = require('object-hash');

var stripHtml = require('string-strip-html');

var moment = require('moment');

var _ = require('lodash');

var _require = require('../lib/common'),
    getId = _require.getId,
    hooker = _require.hooker,
    clearSessionValue = _require.clearSessionValue,
    sortMenu = _require.sortMenu,
    getMenu = _require.getMenu,
    getPaymentConfig = _require.getPaymentConfig,
    getImages = _require.getImages,
    updateTotalCart = _require.updateTotalCart,
    emptyCart = _require.emptyCart,
    updateSubscriptionCheck = _require.updateSubscriptionCheck,
    getData = _require.getData,
    addSitemapProducts = _require.addSitemapProducts,
    getCountryList = _require.getCountryList;

var countryList = getCountryList(); // These is the customer facing routes

router.get('/payment/:orderId', function _callee2(req, res, next) {
  var db, config, order;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;
          config = req.app.config; // Get the order

          _context2.next = 4;
          return regeneratorRuntime.awrap(db.orders.findOne({
            _id: getId(req.params.orderId)
          }));

        case 4:
          order = _context2.sent;

          if (order) {
            _context2.next = 8;
            break;
          }

          res.render('error', {
            title: 'Not found',
            message: 'Order not found',
            helpers: req.handlebars.helpers,
            config: config
          });
          return _context2.abrupt("return");

        case 8:
          // If stock management is turned on payment approved update stock level
          if (config.trackStock && req.session.paymentApproved) {
            order.orderProducts.forEach(function _callee(product) {
              var dbProduct, newStockLevel;
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(db.products.findOne({
                        _id: getId(product.productId)
                      }));

                    case 2:
                      dbProduct = _context.sent;
                      newStockLevel = dbProduct.productStock - product.quantity;

                      if (newStockLevel < 1) {
                        newStockLevel = 0;
                      } // Update product stock


                      _context.next = 7;
                      return regeneratorRuntime.awrap(db.products.updateOne({
                        _id: getId(product.productId)
                      }, {
                        $set: {
                          productStock: newStockLevel
                        }
                      }, {
                        multi: false
                      }));

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            });
          } // If hooks are configured, send hook


          if (!config.orderHook) {
            _context2.next = 12;
            break;
          }

          _context2.next = 12;
          return regeneratorRuntime.awrap(hooker(order));

        case 12:
          ;
          _context2.t0 = res;
          _context2.t1 = "".concat(config.themeViews, "payment-complete");
          _context2.t2 = req.app.config;
          _context2.t3 = req.session;
          _context2.t4 = order;
          _context2.t5 = clearSessionValue(req.session, 'message');
          _context2.t6 = clearSessionValue(req.session, 'messageType');
          _context2.t7 = req.handlebars.helpers;
          _context2.t8 = sortMenu;
          _context2.next = 24;
          return regeneratorRuntime.awrap(getMenu(db));

        case 24:
          _context2.t9 = _context2.sent;
          _context2.t10 = (0, _context2.t8)(_context2.t9);
          _context2.t11 = {
            title: 'Payment complete',
            config: _context2.t2,
            session: _context2.t3,
            result: _context2.t4,
            message: _context2.t5,
            messageType: _context2.t6,
            helpers: _context2.t7,
            showFooter: 'showFooter',
            menu: _context2.t10
          };

          _context2.t0.render.call(_context2.t0, _context2.t1, _context2.t11);

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/emptycart', function _callee3(req, res, next) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          emptyCart(req, res, '');

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/checkout/information', function _callee4(req, res, next) {
  var config, paymentType;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          config = req.app.config; // if there is no items in the cart then render a failure

          if (req.session.cart) {
            _context4.next = 6;
            break;
          }

          req.session.message = 'The are no items in your cart. Please add some items before checking out';
          req.session.messageType = 'danger';
          res.redirect('/');
          return _context4.abrupt("return");

        case 6:
          paymentType = '';

          if (req.session.cartSubscription) {
            paymentType = '_subscription';
          } // render the payment page


          res.render("".concat(config.themeViews, "checkout-information"), {
            title: 'Checkout - Information',
            config: req.app.config,
            session: req.session,
            paymentType: paymentType,
            cartClose: false,
            page: 'checkout-information',
            countryList: countryList,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            showFooter: 'showFooter'
          });

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/checkout/shipping', function _callee5(req, res, next) {
  var config, netCartAmount;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          config = req.app.config; // if there is no items in the cart then render a failure

          if (req.session.cart) {
            _context5.next = 6;
            break;
          }

          req.session.message = 'The are no items in your cart. Please add some items before checking out';
          req.session.messageType = 'danger';
          res.redirect('/');
          return _context5.abrupt("return");

        case 6:
          if (req.session.customerEmail) {
            _context5.next = 11;
            break;
          }

          req.session.message = 'Cannot proceed to shipping without customer information';
          req.session.messageType = 'danger';
          res.redirect('/checkout/information');
          return _context5.abrupt("return");

        case 11:
          // Net cart amount
          netCartAmount = req.session.totalCartAmount - req.session.totalCartShipping || 0; // Recalculate shipping

          config.modules.loaded.shipping.calculateShipping(netCartAmount, config, req); // render the payment page

          res.render("".concat(config.themeViews, "checkout-shipping"), {
            title: 'Checkout - Shipping',
            config: req.app.config,
            session: req.session,
            cartClose: false,
            cartReadOnly: true,
            page: 'checkout-shipping',
            countryList: countryList,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            showFooter: 'showFooter'
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.get('/checkout/cart', function (req, res) {
  var config = req.app.config;
  res.render("".concat(config.themeViews, "checkout-cart"), {
    title: 'Checkout - Cart',
    page: req.query.path,
    config: config,
    session: req.session,
    message: clearSessionValue(req.session, 'message'),
    messageType: clearSessionValue(req.session, 'messageType'),
    helpers: req.handlebars.helpers,
    showFooter: 'showFooter'
  });
});
router.get('/checkout/cartdata', function (req, res) {
  var config = req.app.config;
  res.status(200).json({
    cart: req.session.cart,
    session: req.session,
    currencySymbol: config.currencySymbol || '$'
  });
});
router.get('/checkout/payment', function _callee6(req, res) {
  var config, paymentType;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          config = req.app.config; // if there is no items in the cart then render a failure

          if (req.session.cart) {
            _context6.next = 6;
            break;
          }

          req.session.message = 'The are no items in your cart. Please add some items before checking out';
          req.session.messageType = 'danger';
          res.redirect('/');
          return _context6.abrupt("return");

        case 6:
          paymentType = '';

          if (req.session.cartSubscription) {
            paymentType = '_subscription';
          } // update total cart amount one last time before payment


          _context6.next = 10;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 10:
          res.render("".concat(config.themeViews, "checkout-payment"), {
            title: 'Checkout - Payment',
            config: req.app.config,
            paymentConfig: getPaymentConfig(),
            session: req.session,
            paymentPage: true,
            paymentType: paymentType,
            cartClose: true,
            cartReadOnly: true,
            page: 'checkout-information',
            countryList: countryList,
            message: clearSessionValue(req.session, 'message'),
            messageType: clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            showFooter: 'showFooter'
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router.post('/checkout/adddiscountcode', function _callee7(req, res) {
  var config, db, discount;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          config = req.app.config;
          db = req.app.db; // if there is no items in the cart return a failure

          if (req.session.cart) {
            _context7.next = 5;
            break;
          }

          res.status(400).json({
            message: 'The are no items in your cart.'
          });
          return _context7.abrupt("return");

        case 5:
          if (config.modules.loaded.discount) {
            _context7.next = 8;
            break;
          }

          res.status(400).json({
            message: 'Access denied.'
          });
          return _context7.abrupt("return");

        case 8:
          if (!(!req.body.discountCode || req.body.discountCode === '')) {
            _context7.next = 11;
            break;
          }

          res.status(400).json({
            message: 'Discount code is invalid or expired'
          });
          return _context7.abrupt("return");

        case 11:
          _context7.next = 13;
          return regeneratorRuntime.awrap(db.discounts.findOne({
            code: req.body.discountCode
          }));

        case 13:
          discount = _context7.sent;

          if (discount) {
            _context7.next = 17;
            break;
          }

          res.status(400).json({
            message: 'Discount code is invalid or expired'
          });
          return _context7.abrupt("return");

        case 17:
          if (moment().isBetween(moment(discount.start), moment(discount.end))) {
            _context7.next = 20;
            break;
          }

          res.status(400).json({
            message: 'Discount is expired'
          });
          return _context7.abrupt("return");

        case 20:
          // Set the discount code
          req.session.discountCode = discount.code; // Update the cart amount

          _context7.next = 23;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 23:
          // Return the message
          res.status(200).json({
            message: 'Discount code applied'
          });

        case 24:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.post('/checkout/removediscountcode', function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (req.session.cart) {
            _context8.next = 3;
            break;
          }

          res.status(400).json({
            message: 'The are no items in your cart.'
          });
          return _context8.abrupt("return");

        case 3:
          // Delete the discount code
          delete req.session.discountCode; // update total cart amount

          _context8.next = 6;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 6:
          // Return the message
          res.status(200).json({
            message: 'Discount code removed'
          });

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // show an individual product

router.get('/product/:id', function _callee9(req, res) {
  var db, config, product, productOptions, images;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          _context9.next = 4;
          return regeneratorRuntime.awrap(db.products.findOne({
            $or: [{
              _id: getId(req.params.id)
            }, {
              productPermalink: req.params.id
            }]
          }));

        case 4:
          product = _context9.sent;

          if (product) {
            _context9.next = 8;
            break;
          }

          res.render('error', {
            title: 'Not found',
            message: 'Order not found',
            helpers: req.handlebars.helpers,
            config: config
          });
          return _context9.abrupt("return");

        case 8:
          if (!(product.productPublished === false)) {
            _context9.next = 11;
            break;
          }

          res.render('error', {
            title: 'Not found',
            message: 'Product not found',
            helpers: req.handlebars.helpers,
            config: config
          });
          return _context9.abrupt("return");

        case 11:
          productOptions = product.productOptions; // If JSON query param return json instead

          if (!(req.query.json === 'true')) {
            _context9.next = 15;
            break;
          }

          res.status(200).json(product);
          return _context9.abrupt("return");

        case 15:
          _context9.next = 17;
          return regeneratorRuntime.awrap(getImages(product._id, req, res));

        case 17:
          images = _context9.sent;
          _context9.t0 = res;
          _context9.t1 = "".concat(config.themeViews, "product");
          _context9.t2 = product.productTitle;
          _context9.t3 = product;
          _context9.t4 = productOptions;
          _context9.t5 = images;
          _context9.t6 = stripHtml(product.productDescription);
          _context9.t7 = config.cartTitle + ' - ' + product.productTitle;
          _context9.t8 = config;
          _context9.t9 = req.session;
          _context9.t10 = config.baseUrl + req.originalUrl;
          _context9.t11 = clearSessionValue(req.session, 'message');
          _context9.t12 = clearSessionValue(req.session, 'messageType');
          _context9.t13 = req.handlebars.helpers;
          _context9.t14 = sortMenu;
          _context9.next = 35;
          return regeneratorRuntime.awrap(getMenu(db));

        case 35:
          _context9.t15 = _context9.sent;
          _context9.t16 = (0, _context9.t14)(_context9.t15);
          _context9.t17 = {
            title: _context9.t2,
            result: _context9.t3,
            productOptions: _context9.t4,
            images: _context9.t5,
            productDescription: _context9.t6,
            metaDescription: _context9.t7,
            config: _context9.t8,
            session: _context9.t9,
            pageUrl: _context9.t10,
            message: _context9.t11,
            messageType: _context9.t12,
            helpers: _context9.t13,
            showFooter: 'showFooter',
            menu: _context9.t16
          };

          _context9.t0.render.call(_context9.t0, _context9.t1, _context9.t17);

        case 39:
        case "end":
          return _context9.stop();
      }
    }
  });
}); // Gets the current cart

router.get('/cart/retrieve', function _callee10(req, res, next) {
  var db, cart;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          db = req.app.db; // Get the cart from the DB using the session id

          _context10.next = 3;
          return regeneratorRuntime.awrap(db.cart.findOne({
            sessionId: getId(req.session.id)
          }));

        case 3:
          cart = _context10.sent;
          res.status(200).json({
            cart: cart.cart
          });

        case 5:
        case "end":
          return _context10.stop();
      }
    }
  });
}); // Updates a single product quantity

router.post('/product/updatecart', function _callee11(req, res, next) {
  var db, config, cartItem, productQuantity, product, productPrice;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          cartItem = req.body; // Check cart exists

          if (req.session.cart) {
            _context11.next = 6;
            break;
          }

          emptyCart(req, res, 'json', 'There are no items if your cart or your cart is expired');
          return _context11.abrupt("return");

        case 6:
          // Calculate the quantity to update
          productQuantity = cartItem.quantity ? cartItem.quantity : 1;

          if (typeof productQuantity === 'string') {
            productQuantity = parseInt(productQuantity);
          }

          if (!(productQuantity === 0)) {
            _context11.next = 12;
            break;
          }

          // quantity equals zero so we remove the item
          delete req.session.cart[cartItem.cartId];
          res.status(400).json({
            message: 'There was an error updating the cart',
            totalCartItems: Object.keys(req.session.cart).length
          });
          return _context11.abrupt("return");

        case 12:
          _context11.next = 14;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: getId(req.session.cart[cartItem.cartId].productId)
          }));

        case 14:
          product = _context11.sent;

          if (product) {
            _context11.next = 18;
            break;
          }

          res.status(400).json({
            message: 'There was an error updating the cart',
            totalCartItems: Object.keys(req.session.cart).length
          });
          return _context11.abrupt("return");

        case 18:
          if (!config.trackStock) {
            _context11.next = 22;
            break;
          }

          if (!(productQuantity > product.productStock)) {
            _context11.next = 22;
            break;
          }

          res.status(400).json({
            message: 'There is insufficient stock of this product.',
            totalCartItems: Object.keys(req.session.cart).length
          });
          return _context11.abrupt("return");

        case 22:
          productPrice = parseFloat(product.productPrice).toFixed(2);

          if (req.session.cart[cartItem.cartId]) {
            _context11.next = 26;
            break;
          }

          res.status(400).json({
            message: 'There was an error updating the cart',
            totalCartItems: Object.keys(req.session.cart).length
          });
          return _context11.abrupt("return");

        case 26:
          // Update the cart
          req.session.cart[cartItem.cartId].quantity = productQuantity;
          req.session.cart[cartItem.cartId].totalItemPrice = productPrice * productQuantity; // update total cart amount

          _context11.next = 30;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 30:
          // Update checking cart for subscription
          updateSubscriptionCheck(req, res); // Update cart to the DB

          _context11.next = 33;
          return regeneratorRuntime.awrap(db.cart.updateOne({
            sessionId: req.session.id
          }, {
            $set: {
              cart: req.session.cart
            }
          }));

        case 33:
          res.status(200).json({
            message: 'Cart successfully updated',
            totalCartItems: Object.keys(req.session.cart).length
          });

        case 34:
        case "end":
          return _context11.stop();
      }
    }
  });
}); // Remove single product from cart

router.post('/product/removefromcart', function _callee12(req, res, next) {
  var db;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          db = req.app.db; // Check for item in cart

          if (req.session.cart[req.body.cartId]) {
            _context12.next = 3;
            break;
          }

          return _context12.abrupt("return", res.status(400).json({
            message: 'Product not found in cart'
          }));

        case 3:
          // remove item from cart
          delete req.session.cart[req.body.cartId]; // If not items in cart, empty it

          if (!(Object.keys(req.session.cart).length === 0)) {
            _context12.next = 6;
            break;
          }

          return _context12.abrupt("return", emptyCart(req, res, 'json'));

        case 6:
          _context12.next = 8;
          return regeneratorRuntime.awrap(db.cart.updateOne({
            sessionId: req.session.id
          }, {
            $set: {
              cart: req.session.cart
            }
          }));

        case 8:
          _context12.next = 10;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 10:
          // Update checking cart for subscription
          updateSubscriptionCheck(req, res);
          return _context12.abrupt("return", res.status(200).json({
            message: 'Product successfully removed',
            totalCartItems: Object.keys(req.session.cart).length
          }));

        case 12:
        case "end":
          return _context12.stop();
      }
    }
  });
}); // Totally empty the cart

router.post('/product/emptycart', function _callee13(req, res, next) {
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          emptyCart(req, res, 'json');

        case 1:
        case "end":
          return _context13.stop();
      }
    }
  });
}); // Add item to cart

router.post('/product/addtocart', function _callee14(req, res, next) {
  var db, config, productQuantity, productComment, product, stockHeld, totalHeld, netStock, productPrice, options, productHash, cartQuantity, productObj;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          productQuantity = req.body.productQuantity ? parseInt(req.body.productQuantity) : 1;
          productComment = req.body.productComment ? req.body.productComment : null; // If maxQuantity set, ensure the quantity doesn't exceed that value

          if (!(config.maxQuantity && productQuantity > config.maxQuantity)) {
            _context14.next = 6;
            break;
          }

          return _context14.abrupt("return", res.status(400).json({
            message: 'The quantity exceeds the max amount. Please contact us for larger orders.'
          }));

        case 6:
          // Don't allow negative quantity
          if (productQuantity < 1) {
            productQuantity = 1;
          } // setup cart object if it doesn't exist


          if (!req.session.cart) {
            req.session.cart = {};
          } // Get the product from the DB


          _context14.next = 10;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: getId(req.body.productId)
          }));

        case 10:
          product = _context14.sent;

          if (product) {
            _context14.next = 13;
            break;
          }

          return _context14.abrupt("return", res.status(400).json({
            message: 'Error updating cart. Please try again.'
          }));

        case 13:
          if (!req.session.cartSubscription) {
            _context14.next = 15;
            break;
          }

          return _context14.abrupt("return", res.status(400).json({
            message: 'Subscription already existing in cart. You cannot add more.'
          }));

        case 15:
          if (!(Object.keys(req.session.cart).length !== 0)) {
            _context14.next = 18;
            break;
          }

          if (!product.productSubscription) {
            _context14.next = 18;
            break;
          }

          return _context14.abrupt("return", res.status(400).json({
            message: 'You cannot combine subscription products with existing in your cart. Empty your cart and try again.'
          }));

        case 18:
          if (!(config.trackStock && product.productStock)) {
            _context14.next = 29;
            break;
          }

          if (!(productQuantity > product.productStock)) {
            _context14.next = 21;
            break;
          }

          return _context14.abrupt("return", res.status(400).json({
            message: 'There is insufficient stock of this product.'
          }));

        case 21:
          _context14.next = 23;
          return regeneratorRuntime.awrap(db.cart.aggregate({
            $match: {
              cart: {
                $elemMatch: {
                  productId: product._id.toString()
                }
              }
            }
          }, {
            $unwind: '$cart'
          }, {
            $group: {
              _id: '$cart.productId',
              sumHeld: {
                $sum: '$cart.quantity'
              }
            }
          }, {
            $project: {
              sumHeld: 1
            }
          }).toArray());

        case 23:
          stockHeld = _context14.sent;

          if (!(stockHeld.length > 0)) {
            _context14.next = 29;
            break;
          }

          totalHeld = _.find(stockHeld, {
            _id: product._id.toString()
          }).sumHeld;
          netStock = product.productStock - totalHeld; // Check there is sufficient stock

          if (!(productQuantity > netStock)) {
            _context14.next = 29;
            break;
          }

          return _context14.abrupt("return", res.status(400).json({
            message: 'There is insufficient stock of this product.'
          }));

        case 29:
          productPrice = parseFloat(product.productPrice).toFixed(2);
          options = {};

          if (req.body.productOptions) {
            try {
              if (_typeof(req.body.productOptions) === 'object') {
                options = req.body.productOptions;
              } else {
                options = JSON.parse(req.body.productOptions);
              }
            } catch (ex) {}
          } // Product with options hash


          productHash = hash({
            productId: product._id.toString(),
            options: options
          }); // if exists we add to the existing value

          cartQuantity = 0;

          if (req.session.cart[productHash]) {
            cartQuantity = parseInt(req.session.cart[productHash].quantity) + productQuantity;
            req.session.cart[productHash].quantity = cartQuantity;
            req.session.cart[productHash].totalItemPrice = productPrice * parseInt(req.session.cart[productHash].quantity);
          } else {
            // Set the card quantity
            cartQuantity = productQuantity; // new product deets

            productObj = {};
            productObj.productId = product._id;
            productObj.title = product.productTitle;
            productObj.quantity = productQuantity;
            productObj.totalItemPrice = productPrice * productQuantity;
            productObj.options = options;
            productObj.productImage = product.productImage;
            productObj.productComment = productComment;
            productObj.productSubscription = product.productSubscription;

            if (product.productPermalink) {
              productObj.link = product.productPermalink;
            } else {
              productObj.link = product._id;
            } // merge into the current cart


            req.session.cart[productHash] = productObj;
          } // Update cart to the DB


          _context14.next = 37;
          return regeneratorRuntime.awrap(db.cart.updateOne({
            sessionId: req.session.id
          }, {
            $set: {
              cart: req.session.cart
            }
          }, {
            upsert: true
          }));

        case 37:
          _context14.next = 39;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 39:
          // Update checking cart for subscription
          updateSubscriptionCheck(req, res);

          if (product.productSubscription) {
            req.session.cartSubscription = product.productSubscription;
          }

          return _context14.abrupt("return", res.status(200).json({
            message: 'Cart successfully updated',
            cartId: productHash,
            totalCartItems: req.session.totalCartItems
          }));

        case 42:
        case "end":
          return _context14.stop();
      }
    }
  });
}); // search products

router.get('/search/:searchTerm/:pageNum?', function (req, res) {
  var db = req.app.db;
  var searchTerm = req.params.searchTerm;
  var productsIndex = req.app.productsIndex;
  var config = req.app.config;
  var numberProducts = config.productsPerPage ? config.productsPerPage : 6;
  var lunrIdArray = [];
  productsIndex.search(searchTerm).forEach(function (id) {
    lunrIdArray.push(getId(id.ref));
  });
  var pageNum = 1;

  if (req.params.pageNum) {
    pageNum = req.params.pageNum;
  }

  Promise.all([getData(req, pageNum, {
    _id: {
      $in: lunrIdArray
    }
  }), getMenu(db)]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        results = _ref2[0],
        menu = _ref2[1];

    // If JSON query param return json instead
    if (req.query.json === 'true') {
      res.status(200).json(results.data);
      return;
    }

    res.render("".concat(config.themeViews, "index"), {
      title: 'Results',
      results: results.data,
      filtered: true,
      session: req.session,
      metaDescription: req.app.config.cartTitle + ' - Search term: ' + searchTerm,
      searchTerm: searchTerm,
      message: clearSessionValue(req.session, 'message'),
      messageType: clearSessionValue(req.session, 'messageType'),
      productsPerPage: numberProducts,
      totalProductCount: results.totalProducts,
      pageNum: pageNum,
      paginateUrl: 'search',
      config: config,
      menu: sortMenu(menu),
      helpers: req.handlebars.helpers,
      showFooter: 'showFooter'
    });
  })["catch"](function (err) {
    console.error(colors.red('Error searching for products', err));
  });
}); // search products

router.get('/category/:cat/:pageNum?', function (req, res) {
  var db = req.app.db;
  var searchTerm = req.params.cat;
  var productsIndex = req.app.productsIndex;
  var config = req.app.config;
  var numberProducts = config.productsPerPage ? config.productsPerPage : 6;
  var lunrIdArray = [];
  productsIndex.search(searchTerm).forEach(function (id) {
    lunrIdArray.push(getId(id.ref));
  });
  var pageNum = 1;

  if (req.params.pageNum) {
    pageNum = req.params.pageNum;
  }

  Promise.all([getData(req, pageNum, {
    _id: {
      $in: lunrIdArray
    }
  }), getMenu(db)]).then(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        results = _ref4[0],
        menu = _ref4[1];

    var sortedMenu = sortMenu(menu); // If JSON query param return json instead

    if (req.query.json === 'true') {
      res.status(200).json(results.data);
      return;
    }

    res.render("".concat(config.themeViews, "index"), {
      title: "Category: ".concat(searchTerm),
      results: results.data,
      filtered: true,
      session: req.session,
      searchTerm: searchTerm,
      metaDescription: "".concat(req.app.config.cartTitle, " - Category: ").concat(searchTerm),
      message: clearSessionValue(req.session, 'message'),
      messageType: clearSessionValue(req.session, 'messageType'),
      productsPerPage: numberProducts,
      totalProductCount: results.totalProducts,
      pageNum: pageNum,
      menuLink: _.find(sortedMenu.items, function (obj) {
        return obj.link === searchTerm;
      }),
      paginateUrl: 'category',
      config: config,
      menu: sortedMenu,
      helpers: req.handlebars.helpers,
      showFooter: 'showFooter'
    });
  })["catch"](function (err) {
    console.error(colors.red('Error getting products for category', err));
  });
}); // Language setup in cookie

router.get('/lang/:locale', function (req, res) {
  res.cookie('locale', req.params.locale, {
    maxAge: 900000,
    httpOnly: true
  });
  res.redirect('back');
}); // return sitemap

router.get('/sitemap.xml', function (req, res, next) {
  var sm = require('sitemap');

  var config = req.app.config;
  addSitemapProducts(req, res, function (err, products) {
    if (err) {
      console.error(colors.red('Error generating sitemap.xml', err));
    }

    var sitemap = sm.createSitemap({
      hostname: config.baseUrl,
      cacheTime: 600000,
      urls: [{
        url: '/',
        changefreq: 'weekly',
        priority: 1.0
      }]
    });
    var currentUrls = sitemap.urls;
    var mergedUrls = currentUrls.concat(products);
    sitemap.urls = mergedUrls; // render the sitemap

    sitemap.toXML(function (err, xml) {
      if (err) {
        return res.status(500).end();
      }

      res.header('Content-Type', 'application/xml');
      res.send(xml);
      return true;
    });
  });
});
router.get('/page/:pageNum', function (req, res, next) {
  var db = req.app.db;
  var config = req.app.config;
  var numberProducts = config.productsPerPage ? config.productsPerPage : 6;
  Promise.all([getData(req, req.params.pageNum), getMenu(db)]).then(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        results = _ref6[0],
        menu = _ref6[1];

    // If JSON query param return json instead
    if (req.query.json === 'true') {
      res.status(200).json(results.data);
      return;
    }

    res.render("".concat(config.themeViews, "index"), {
      title: 'Shop',
      results: results.data,
      session: req.session,
      message: clearSessionValue(req.session, 'message'),
      messageType: clearSessionValue(req.session, 'messageType'),
      metaDescription: req.app.config.cartTitle + ' - Products page: ' + req.params.pageNum,
      config: req.app.config,
      productsPerPage: numberProducts,
      totalProductCount: results.totalProducts,
      pageNum: req.params.pageNum,
      paginateUrl: 'page',
      helpers: req.handlebars.helpers,
      showFooter: 'showFooter',
      menu: sortMenu(menu)
    });
  })["catch"](function (err) {
    console.error(colors.red('Error getting products for page', err));
  });
}); // The main entry point of the shop

router.get('/:page?', function _callee15(req, res, next) {
  var db, config, numberProducts, page;
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          db = req.app.db;
          config = req.app.config;
          numberProducts = config.productsPerPage ? config.productsPerPage : 6; // if no page is specified, just render page 1 of the cart

          if (req.params.page) {
            _context15.next = 7;
            break;
          }

          Promise.all([getData(req, 1, {}), getMenu(db)]).then(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                results = _ref8[0],
                menu = _ref8[1];

            // If JSON query param return json instead
            if (req.query.json === 'true') {
              res.status(200).json(results.data);
              return;
            }

            res.render("".concat(config.themeViews, "index"), {
              title: "".concat(config.cartTitle, " - Shop"),
              theme: config.theme,
              results: results.data,
              session: req.session,
              message: clearSessionValue(req.session, 'message'),
              messageType: clearSessionValue(req.session, 'messageType'),
              config: config,
              productsPerPage: numberProducts,
              totalProductCount: results.totalProducts,
              pageNum: 1,
              paginateUrl: 'page',
              helpers: req.handlebars.helpers,
              showFooter: 'showFooter',
              menu: sortMenu(menu)
            });
          })["catch"](function (err) {
            console.error(colors.red('Error getting products for page', err));
          });
          _context15.next = 42;
          break;

        case 7:
          if (!(req.params.page === 'admin')) {
            _context15.next = 10;
            break;
          }

          next();
          return _context15.abrupt("return");

        case 10:
          // lets look for a page
          page = db.pages.findOne({
            pageSlug: req.params.page,
            pageEnabled: 'true'
          }); // if we have a page lets render it, else throw 404

          if (!page) {
            _context15.next = 32;
            break;
          }

          _context15.t0 = res;
          _context15.t1 = "".concat(config.themeViews, "page");
          _context15.t2 = page.pageName;
          _context15.t3 = page;
          _context15.t4 = req.params.page;
          _context15.t5 = req.session;
          _context15.t6 = clearSessionValue(req.session, 'message');
          _context15.t7 = clearSessionValue(req.session, 'messageType');
          _context15.t8 = req.app.config;
          _context15.t9 = req.app.config.cartTitle + ' - ' + page;
          _context15.t10 = req.handlebars.helpers;
          _context15.t11 = sortMenu;
          _context15.next = 26;
          return regeneratorRuntime.awrap(getMenu(db));

        case 26:
          _context15.t12 = _context15.sent;
          _context15.t13 = (0, _context15.t11)(_context15.t12);
          _context15.t14 = {
            title: _context15.t2,
            page: _context15.t3,
            searchTerm: _context15.t4,
            session: _context15.t5,
            message: _context15.t6,
            messageType: _context15.t7,
            config: _context15.t8,
            metaDescription: _context15.t9,
            helpers: _context15.t10,
            showFooter: 'showFooter',
            menu: _context15.t13
          };

          _context15.t0.render.call(_context15.t0, _context15.t1, _context15.t14);

          _context15.next = 42;
          break;

        case 32:
          _context15.t15 = res.status(404);
          _context15.t16 = req.app.config;
          _context15.t17 = req.handlebars.helpers;
          _context15.t18 = sortMenu;
          _context15.next = 38;
          return regeneratorRuntime.awrap(getMenu(db));

        case 38:
          _context15.t19 = _context15.sent;
          _context15.t20 = (0, _context15.t18)(_context15.t19);
          _context15.t21 = {
            title: '404 Error - Page not found',
            config: _context15.t16,
            message: '404 Error - Page not found',
            helpers: _context15.t17,
            showFooter: 'showFooter',
            menu: _context15.t20
          };

          _context15.t15.render.call(_context15.t15, 'error', _context15.t21);

        case 42:
        case "end":
          return _context15.stop();
      }
    }
  });
});
module.exports = router;