"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

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

(0, _ava.serial)('[Success] Add subscripton product to cart', function _callee2(t) {
  var res, sessions;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[7]._id,
            productQuantity: 1,
            productOptions: {}
          }).expect(200));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(g.db.cart.find({}).toArray());

        case 5:
          sessions = _context2.sent;

          if (!sessions || sessions.length === 0) {
            t.fail();
          }

          t.deepEqual(res.body.message, 'Cart successfully updated');

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add product to cart when subscription already added', function _callee3(t) {
  var res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[1]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[1].productOptions)
          }).expect(400));

        case 2:
          res = _context3.sent;
          t.deepEqual(res.body.message, 'Subscription already existing in cart. You cannot add more.');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add quantity which exceeds the maxQuantity', function _callee4(t) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[4]._id,
            productQuantity: 75,
            productOptions: {}
          }).expect(400));

        case 2:
          res = _context4.sent;
          t.deepEqual(res.body.message, 'The quantity exceeds the max amount. Please contact us for larger orders.');

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Empty cart', function _callee5(t) {
  var res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/emptycart').expect(200));

        case 2:
          res = _context5.sent;
          t.deepEqual(res.body.message, 'Cart successfully emptied');

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Add product to cart', function _callee6(t) {
  var res, sessions;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(200));

        case 2:
          res = _context6.sent;
          _context6.next = 5;
          return regeneratorRuntime.awrap(g.db.cart.find({}).toArray());

        case 5:
          sessions = _context6.sent;

          if (!sessions || sessions.length === 0) {
            t.fail();
          }

          t.deepEqual(res.body.message, 'Cart successfully updated');

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Update cart', function _callee7(t) {
  var cart, cartId, productId, res, checkCart;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/cart/retrieve').expect(200));

        case 2:
          cart = _context7.sent;
          cartId = Object.keys(cart.body.cart)[0];
          productId = cart.body.cart[cartId].id;
          _context7.next = 7;
          return regeneratorRuntime.awrap(g.request.post('/product/updatecart').send({
            productId: productId,
            cartId: cartId,
            quantity: 10
          }).expect(200));

        case 7:
          res = _context7.sent;
          t.deepEqual(res.body.message, 'Cart successfully updated');
          _context7.next = 11;
          return regeneratorRuntime.awrap(g.request.get('/cart/retrieve').expect(200));

        case 11:
          checkCart = _context7.sent;
          // Check new quantity and total price has been updated
          t.deepEqual(checkCart.body.cart[cartId].quantity, 10);
          t.deepEqual(checkCart.body.cart[cartId].totalItemPrice, cart.body.cart[cartId].totalItemPrice * 10);

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Cannot add subscripton when other product in cart', function _callee8(t) {
  var res;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[7]._id,
            productQuantity: 1,
            productOptions: {}
          }).expect(400));

        case 2:
          res = _context8.sent;
          t.deepEqual(res.body.message, 'You cannot combine subscription products with existing in your cart. Empty your cart and try again.');

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add product to cart with not enough stock', function _callee9(t) {
  var res;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[0]._id,
            productQuantity: 20,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(400));

        case 2:
          res = _context9.sent;
          t.deepEqual(res.body.message, 'There is insufficient stock of this product.');

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add incorrect product to cart', function _callee10(t) {
  var res;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: 'fake_product_id',
            productQuantity: 20,
            productOptions: JSON.stringify(g.products[0].productOptions)
          }).expect(400));

        case 2:
          res = _context10.sent;
          t.deepEqual(res.body.message, 'Error updating cart. Please try again.');

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Remove item previously added to cart', function _callee11(t) {
  var cart, res;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/addtocart').send({
            productId: g.products[1]._id,
            productQuantity: 1,
            productOptions: JSON.stringify(g.products[1].productOptions)
          }).expect(200));

        case 2:
          cart = _context11.sent;
          _context11.next = 5;
          return regeneratorRuntime.awrap(g.request.post('/product/removefromcart').send({
            cartId: cart.body.cartId
          }).expect(200));

        case 5:
          res = _context11.sent;
          t.deepEqual(res.body.message, 'Product successfully removed');

        case 7:
        case "end":
          return _context11.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Try remove an item which is not in the cart', function _callee12(t) {
  var res;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/product/removefromcart').send({
            cartId: 'bogus_product_id'
          }).expect(400));

        case 2:
          res = _context12.sent;
          t.deepEqual(res.body.message, 'Product not found in cart');

        case 4:
        case "end":
          return _context12.stop();
      }
    }
  });
});