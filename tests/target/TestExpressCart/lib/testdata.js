"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _require = require('./common'),
    getConfig = _require.getConfig;

var _require2 = require('./db'),
    initDb = _require2.initDb;

var _require3 = require('../test/helper'),
    fixProductDates = _require3.fixProductDates,
    fixDiscountDates = _require3.fixDiscountDates;

var fs = require('fs');

var path = require('path');

var testData = fs.readFileSync(path.join(__dirname, '..', 'bin', 'testdata.json'), 'utf-8');
var jsonData = JSON.parse(testData); // get config

var config = getConfig();
initDb(config.databaseConnectionString, function (err, db) {
  Promise.all([db.users.deleteMany({}, {}), db.customers.deleteMany({}, {}), db.products.deleteMany({}, {}), db.discounts.deleteMany({}, {}), db.menu.deleteMany({}, {})]).then(function () {
    Promise.all([db.users.insertMany(jsonData.users), db.customers.insertMany(jsonData.customers), db.products.insertMany(fixProductDates(jsonData.products)), db.discounts.insertMany(fixDiscountDates(jsonData.discounts)), db.menu.insertOne(jsonData.menu)]).then(function () {
      console.log('Test data complete');
      process.exit();
    })["catch"](function (err) {
      console.log('Error inserting test data', err);
      process.exit(2);
    });
  })["catch"](function (err) {
    console.log('Error removing existing test data', err);
    process.exit(2);
  });
});