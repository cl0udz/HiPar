"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

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

(0, _ava.serial)('[Success] Get products JSON', function _callee2(t) {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.request.get('?json=true').expect(200));

        case 2:
          res = _context2.sent;

          if (res.body.length < g.config.productsPerPage) {
            t.is(res.body.length, g.products.length);
          } else {
            t.is(res.body.length, g.config.productsPerPage);
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Search products', function _callee3(t) {
  var res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/category/backpack?json=true').expect(200));

        case 2:
          res = _context3.sent;
          // Should be two backpack products
          t.deepEqual(res.body.length, 2);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Filter products', function _callee4(t) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/products/filter/backpack').set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context4.sent;
          // Should be two backpack products
          t.deepEqual(res.body.length, 2);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Edit a product', function _callee5(t) {
  var res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(g.request.get("/admin/product/edit/".concat(g.products[0]._id)).set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context5.sent;
          // Products should match
          t.deepEqual(res.body._id.toString(), g.products[0]._id.toString());
          t.deepEqual(res.body.productPermalink, g.products[0].productPermalink);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Edit an invalid product', function _callee6(t) {
  var res;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(g.request.get('/admin/product/edit/some_invalid_product').set('apiKey', g.users[0].apiKey).expect(400));

        case 2:
          res = _context6.sent;
          // Check the returned message
          t.deepEqual(res.body.message, 'Product not found');

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Add a product', function _callee7(t) {
  var product, res;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          product = {
            productPermalink: 'test-jacket',
            productTitle: 'Test Jacket',
            productPrice: '100.00',
            productDescription: 'Test desc',
            productPublished: true,
            productTags: 'organic, jacket',
            productOptions: {
              Size: {
                optName: 'Size',
                optLabel: 'Select size',
                optType: 'select',
                optOptions: ['S', 'M', 'L', 'XL']
              }
            },
            productComment: false,
            productStock: 50
          };
          _context7.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/product/insert').send(product).set('apiKey', g.users[0].apiKey).expect(200));

        case 3:
          res = _context7.sent;
          // Check the returned message
          t.deepEqual(res.body.message, 'New product successfully created');

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Add a product - Duplicate permalink', function _callee8(t) {
  var product, res;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          product = {
            productPermalink: 'test-jacket',
            productTitle: 'Test Jacket - blue',
            productPrice: '100.00',
            productDescription: 'Test desc blue',
            productPublished: true,
            productTags: 'organic, jacket, blue',
            productOptions: {
              Size: {
                optName: 'Size',
                optLabel: 'Select size',
                optType: 'select',
                optOptions: ['S', 'M', 'L', 'XL']
              }
            },
            productComment: false,
            productStock: 50
          };
          _context8.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/product/insert').send(product).set('apiKey', g.users[0].apiKey).expect(400));

        case 3:
          res = _context8.sent;
          // Check the returned message
          t.deepEqual(res.body.message, 'Permalink already exists. Pick a new one.');

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Update a product', function _callee9(t) {
  var product, res;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          product = {
            productId: g.products[0]._id,
            productTitle: 'Test Jacket',
            productPrice: '200.00',
            productDescription: 'Test desc',
            productPublished: true,
            productTags: 'organic, jacket',
            productOptions: {
              Size: {
                optName: 'Size',
                optLabel: 'Select size',
                optType: 'select',
                optOptions: ['S', 'M', 'L', 'XL']
              }
            },
            productComment: true,
            productStock: 50
          };
          _context9.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/product/update').send(product).set('apiKey', g.users[0].apiKey).expect(200));

        case 3:
          res = _context9.sent;
          // Check the returned message
          t.deepEqual(res.body.message, 'Successfully saved');
          t.deepEqual(res.body.product.productTitle, product.productTitle);
          t.deepEqual(res.body.product.productPrice, product.productPrice);

        case 7:
        case "end":
          return _context9.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Update a product - Duplicate permalink', function _callee10(t) {
  var product, res;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          product = {
            productId: g.products[0]._id,
            productPermalink: 'test-jacket'
          };
          _context10.next = 3;
          return regeneratorRuntime.awrap(g.request.post('/admin/product/update').send(product).set('apiKey', g.users[0].apiKey).expect(400));

        case 3:
          res = _context10.sent;
          // Check the returned message
          t.deepEqual(res.body.message, 'Permalink already exists. Pick a new one.');

        case 5:
        case "end":
          return _context10.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Delete a product', function _callee11(t) {
  var res;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/product/delete').send({
            productId: g.products[0]._id
          }).set('apiKey', g.users[0].apiKey).expect(200));

        case 2:
          res = _context11.sent;
          // Check the returned message
          t.deepEqual(res.body.message, 'Product successfully deleted');

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
});