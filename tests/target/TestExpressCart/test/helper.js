"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var fs = require('fs');

var _ = require('lodash');

var moment = require('moment');

var supertest = require('supertest');

var app = require('../app.js');

var _require = require('../lib/common'),
    newId = _require.newId;

var _require2 = require('../lib/indexing'),
    runIndexing = _require2.runIndexing; // Get test data to compare in tests


var rawTestData = fs.readFileSync('./bin/testdata.json', 'utf-8');
var jsonData = JSON.parse(rawTestData); // Setup some global DB objects for comparison

var g = {
  db: {},
  config: {},
  products: {},
  discounts: {},
  customers: {},
  users: {},
  request: null,
  jsonData: jsonData
};

var setup = function setup(db) {
  return Promise.all([db.cart.deleteMany({}, {}), db.users.deleteMany({}, {}), db.customers.deleteMany({}, {}), db.products.deleteMany({}, {}), db.discounts.deleteMany({}, {}), db.orders.deleteMany({}, {}), db.sessions.deleteMany({}, {})]).then(function () {
    return Promise.all([db.users.insertMany(addApiKey(jsonData.users)), db.customers.insertMany(jsonData.customers), db.products.insertMany(fixProductDates(jsonData.products)), db.discounts.insertMany(fixDiscountDates(jsonData.discounts))]);
  });
};

var runBefore = function runBefore() {
  return regeneratorRuntime.async(function runBefore$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // Create a session
          g.request = supertest.agent(app);
          _context3.next = 3;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            app.on('appStarted', function _callee2() {
              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Set some stuff now we have the app started
                      g.config = app.config;
                      g.db = app.db;
                      _context2.next = 4;
                      return regeneratorRuntime.awrap(setup(g.db));

                    case 4:
                      _context2.next = 6;
                      return regeneratorRuntime.awrap(g.db.products.find({}).toArray());

                    case 6:
                      g.products = _context2.sent;
                      _context2.next = 9;
                      return regeneratorRuntime.awrap(g.db.customers.find({}).toArray());

                    case 9:
                      g.customers = _context2.sent;
                      _context2.next = 12;
                      return regeneratorRuntime.awrap(g.db.discounts.find({}).toArray());

                    case 12:
                      g.discounts = _context2.sent;
                      _context2.next = 15;
                      return regeneratorRuntime.awrap(g.db.users.find({}).toArray());

                    case 15:
                      g.users = _context2.sent;

                      // Insert orders using product ID's
                      _(jsonData.orders).each(function _callee(order) {
                        return regeneratorRuntime.async(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                order.orderProducts.push({
                                  productId: g.products[0]._id,
                                  title: g.products[0].productTitle,
                                  quantity: 1,
                                  totalItemPrice: g.products[0].productPrice,
                                  options: {
                                    size: '7.5'
                                  },
                                  productImage: g.products[0].productImage,
                                  productComment: null
                                });
                                order.orderDate = new Date();
                                _context.next = 4;
                                return regeneratorRuntime.awrap(g.db.orders.insertOne(order));

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        });
                      }); // Index everything


                      _context2.next = 19;
                      return regeneratorRuntime.awrap(runIndexing(app));

                    case 19:
                      resolve();

                    case 20:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            });
          }));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var fixProductDates = function fixProductDates(products) {
  var index = 0;
  products.forEach(function () {
    products[index].productAddedDate = new Date();
    index++;
  });
  return products;
};

var fixDiscountDates = function fixDiscountDates(discounts) {
  var index = 0;
  discounts.forEach(function () {
    var startDate = moment().subtract(1, 'days').toDate();
    var endDate = moment().add(7, 'days').toDate();
    var expiredStart = moment().subtract(14, 'days').toDate();
    var expiredEnd = moment().subtract(7, 'days').toDate();
    var futureStart = moment().add(7, 'days').toDate();
    var futureEnd = moment().add(14, 'days').toDate(); // If code is expired, make sure the dates are correct

    if (discounts[index].code.substring(0, 7) === 'expired') {
      startDate = expiredStart;
      endDate = expiredEnd;
    } // If code is future, make sure the dates are correct


    if (discounts[index].code.substring(0, 6) === 'future') {
      startDate = futureStart;
      endDate = futureEnd;
    } // Set the expiry dates


    discounts[index].start = startDate;
    discounts[index].end = endDate;
    index++;
  });
  return discounts;
};

var addApiKey = function addApiKey(users) {
  var index = 0;
  users.forEach(function () {
    users[index].apiKey = newId();
    index++;
  });
  return users;
};

module.exports = {
  runBefore: runBefore,
  setup: setup,
  g: g,
  fixProductDates: fixProductDates,
  fixDiscountDates: fixDiscountDates
};