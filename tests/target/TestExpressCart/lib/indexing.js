"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

var colors = require('colors');

var lunr = require('lunr');

var indexProducts = function indexProducts(app) {
  // index all products in lunr on startup
  return new Promise(function (resolve, reject) {
    app.db.products.find({}).toArray(function (err, productsList) {
      if (err) {
        console.error(colors.red(err.stack));
        reject(err);
      } // setup lunr indexing


      var productsIndex = lunr(function () {
        this.field('productTitle', {
          boost: 10
        });
        this.field('productTags', {
          boost: 5
        });
        this.field('productDescription');
        var lunrIndex = this; // add to lunr index

        productsList.forEach(function (product) {
          var doc = {
            productTitle: product.productTitle,
            productTags: product.productTags,
            productDescription: product.productDescription,
            id: product._id
          };
          lunrIndex.add(doc);
        });
      });
      app.productsIndex = productsIndex;

      if (process.env.NODE_ENV !== 'test') {
        console.log(colors.cyan('- Product indexing complete'));
      }

      resolve();
    });
  });
};

var indexCustomers = function indexCustomers(app) {
  // index all products in lunr on startup
  return new Promise(function (resolve, reject) {
    app.db.customers.find({}).toArray(function (err, customerList) {
      if (err) {
        console.error(colors.red(err.stack));
        reject(err);
      } // setup lunr indexing


      var customersIndex = lunr(function () {
        this.field('email', {
          boost: 10
        });
        this.field('name', {
          boost: 5
        });
        this.field('phone');
        var lunrIndex = this; // add to lunr index

        customerList.forEach(function (customer) {
          var doc = {
            email: customer.email,
            name: "".concat(customer.firstName, " ").concat(customer.lastName),
            phone: customer.phone,
            id: customer._id
          };
          lunrIndex.add(doc);
        });
      });
      app.customersIndex = customersIndex;

      if (process.env.NODE_ENV !== 'test') {
        console.log(colors.cyan('- Customer indexing complete'));
      }

      resolve();
    });
  });
};

var indexOrders = function indexOrders(app, cb) {
  // index all orders in lunr on startup
  return new Promise(function (resolve, reject) {
    app.db.orders.find({}).toArray(function (err, ordersList) {
      if (err) {
        console.error(colors.red('Error setting up products index: ' + err));
        reject(err);
      } // setup lunr indexing


      var ordersIndex = lunr(function () {
        this.field('orderEmail', {
          boost: 10
        });
        this.field('orderLastname', {
          boost: 5
        });
        this.field('orderPostcode');
        var lunrIndex = this; // add to lunr index

        ordersList.forEach(function (order) {
          var doc = {
            orderLastname: order.orderLastname,
            orderEmail: order.orderEmail,
            orderPostcode: order.orderPostcode,
            id: order._id
          };
          lunrIndex.add(doc);
        });
      });
      app.ordersIndex = ordersIndex;

      if (process.env.NODE_ENV !== 'test') {
        console.log(colors.cyan('- Order indexing complete'));
      }

      resolve();
    });
  });
}; // start indexing products and orders


var runIndexing = function runIndexing(app) {
  if (process.env.NODE_ENV !== 'test') {
    console.info(colors.yellow('Setting up indexes..'));
  }

  return Promise.all([indexProducts(app), indexOrders(app), indexCustomers(app)])["catch"](function (err) {
    console.info(colors.yellow('Error setting up indexes', err));
    process.exit(2);
  });
};

module.exports = {
  indexProducts: indexProducts,
  indexCustomers: indexCustomers,
  indexOrders: indexOrders,
  runIndexing: runIndexing
};