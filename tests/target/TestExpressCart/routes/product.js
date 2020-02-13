"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var express = require('express');

var common = require('../lib/common');

var _require = require('../lib/auth'),
    restrict = _require.restrict,
    checkAccess = _require.checkAccess;

var _require2 = require('../lib/indexing'),
    indexProducts = _require2.indexProducts;

var _require3 = require('../lib/schema'),
    validateJson = _require3.validateJson;

var colors = require('colors');

var rimraf = require('rimraf');

var fs = require('fs');

var path = require('path');

var router = express.Router();
router.get('/admin/products', restrict, function _callee(req, res, next) {
  var db, topResults;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db; // get the top results

          _context.next = 3;
          return regeneratorRuntime.awrap(db.products.find({}).sort({
            productAddedDate: -1
          }).limit(10).toArray());

        case 3:
          topResults = _context.sent;
          res.render('products', {
            title: 'Cart',
            results: topResults,
            resultType: 'top',
            session: req.session,
            admin: true,
            config: req.app.config,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/admin/products/filter/:search', restrict, function _callee2(req, res, next) {
  var db, searchTerm, productsIndex, lunrIdArray, results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;
          searchTerm = req.params.search;
          productsIndex = req.app.productsIndex;
          lunrIdArray = [];
          productsIndex.search(searchTerm).forEach(function (id) {
            lunrIdArray.push(common.getId(id.ref));
          }); // we search on the lunr indexes

          _context2.next = 7;
          return regeneratorRuntime.awrap(db.products.find({
            _id: {
              $in: lunrIdArray
            }
          }).toArray());

        case 7:
          results = _context2.sent;

          if (!req.apiAuthenticated) {
            _context2.next = 11;
            break;
          }

          res.status(200).json(results);
          return _context2.abrupt("return");

        case 11:
          res.render('products', {
            title: 'Results',
            results: results,
            resultType: 'filtered',
            admin: true,
            config: req.app.config,
            session: req.session,
            searchTerm: searchTerm,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // insert form

router.get('/admin/product/new', restrict, checkAccess, function (req, res) {
  res.render('product-new', {
    title: 'New product',
    session: req.session,
    productTitle: common.clearSessionValue(req.session, 'productTitle'),
    productDescription: common.clearSessionValue(req.session, 'productDescription'),
    productPrice: common.clearSessionValue(req.session, 'productPrice'),
    productPermalink: common.clearSessionValue(req.session, 'productPermalink'),
    message: common.clearSessionValue(req.session, 'message'),
    messageType: common.clearSessionValue(req.session, 'messageType'),
    editor: true,
    admin: true,
    helpers: req.handlebars.helpers,
    config: req.app.config
  });
}); // insert new product form action

router.post('/admin/product/insert', restrict, checkAccess, function _callee3(req, res) {
  var db, productOptions, doc, schemaValidate, product, newDoc, newId;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          db = req.app.db; // Process supplied options

          productOptions = req.body.productOptions;

          if (productOptions && _typeof(productOptions) !== 'object') {
            try {
              productOptions = JSON.parse(req.body.productOptions);
            } catch (ex) {
              console.log('Failure to parse options');
            }
          }

          doc = {
            productPermalink: req.body.productPermalink,
            productTitle: common.cleanHtml(req.body.productTitle),
            productPrice: req.body.productPrice,
            productDescription: common.cleanHtml(req.body.productDescription),
            productPublished: common.convertBool(req.body.productPublished),
            productTags: req.body.productTags,
            productOptions: productOptions || null,
            productComment: common.checkboxBool(req.body.productComment),
            productAddedDate: new Date(),
            productStock: common.safeParseInt(req.body.productStock) || null
          }; // Validate the body again schema

          schemaValidate = validateJson('newProduct', doc);

          if (schemaValidate.result) {
            _context3.next = 9;
            break;
          }

          console.log('schemaValidate errors', schemaValidate.errors);
          res.status(400).json(schemaValidate.errors);
          return _context3.abrupt("return");

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap(db.products.countDocuments({
            productPermalink: req.body.productPermalink
          }));

        case 11:
          product = _context3.sent;

          if (!(product > 0 && req.body.productPermalink !== '')) {
            _context3.next = 15;
            break;
          }

          res.status(400).json({
            message: 'Permalink already exists. Pick a new one.'
          });
          return _context3.abrupt("return");

        case 15:
          _context3.prev = 15;
          _context3.next = 18;
          return regeneratorRuntime.awrap(db.products.insertOne(doc));

        case 18:
          newDoc = _context3.sent;
          // get the new ID
          newId = newDoc.insertedId; // add to lunr index

          indexProducts(req.app).then(function () {
            res.status(200).json({
              message: 'New product successfully created',
              productId: newId
            });
          });
          _context3.next = 27;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](15);
          console.log(colors.red('Error inserting document: ' + _context3.t0));
          res.status(400).json({
            message: 'Error inserting document'
          });

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[15, 23]]);
}); // render the editor

router.get('/admin/product/edit/:id', restrict, checkAccess, function _callee4(req, res) {
  var db, images, product, options;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          db = req.app.db;
          _context4.next = 3;
          return regeneratorRuntime.awrap(common.getImages(req.params.id, req, res));

        case 3:
          images = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: common.getId(req.params.id)
          }));

        case 6:
          product = _context4.sent;

          if (product) {
            _context4.next = 15;
            break;
          }

          if (!req.apiAuthenticated) {
            _context4.next = 11;
            break;
          }

          res.status(400).json({
            message: 'Product not found'
          });
          return _context4.abrupt("return");

        case 11:
          req.session.message = 'Product not found';
          req.session.messageType = 'danger';
          res.redirect('/admin/products');
          return _context4.abrupt("return");

        case 15:
          options = {};

          if (product.productOptions) {
            options = product.productOptions;

            if (_typeof(product.productOptions) !== 'object') {
              options = JSON.parse(product.productOptions);
            }
          } // If API request, return json


          if (!req.apiAuthenticated) {
            _context4.next = 20;
            break;
          }

          res.status(200).json(product);
          return _context4.abrupt("return");

        case 20:
          res.render('product-edit', {
            title: 'Edit product',
            result: product,
            images: images,
            options: options,
            admin: true,
            session: req.session,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            config: req.app.config,
            editor: true,
            helpers: req.handlebars.helpers
          });

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Remove option from product

router.post('/admin/product/removeoption', restrict, checkAccess, function _callee5(req, res) {
  var db, product, opts, updateOption;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          db = req.app.db;
          _context5.next = 3;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: common.getId(req.body.productId)
          }));

        case 3:
          product = _context5.sent;

          if (!(product && product.productOptions)) {
            _context5.next = 22;
            break;
          }

          opts = product.productOptions;
          delete opts[req.body.optName];
          _context5.prev = 7;
          _context5.next = 10;
          return regeneratorRuntime.awrap(db.products.findOneAndUpdate({
            _id: common.getId(req.body.productId)
          }, {
            $set: {
              productOptions: opts
            }
          }));

        case 10:
          updateOption = _context5.sent;

          if (!(updateOption.ok === 1)) {
            _context5.next = 14;
            break;
          }

          res.status(200).json({
            message: 'Option successfully removed'
          });
          return _context5.abrupt("return");

        case 14:
          res.status(400).json({
            message: 'Failed to remove option. Please try again.'
          });
          return _context5.abrupt("return");

        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](7);
          res.status(400).json({
            message: 'Failed to remove option. Please try again.'
          });
          return _context5.abrupt("return");

        case 22:
          res.status(400).json({
            message: 'Product not found. Try saving before removing.'
          });

        case 23:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[7, 18]]);
}); // Update an existing product form action

router.post('/admin/product/update', restrict, checkAccess, function _callee6(req, res) {
  var db, product, count, images, productOptions, productDoc, schemaValidate;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          db = req.app.db;
          _context6.next = 3;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: common.getId(req.body.productId)
          }));

        case 3:
          product = _context6.sent;

          if (product) {
            _context6.next = 7;
            break;
          }

          res.status(400).json({
            message: 'Failed to update product'
          });
          return _context6.abrupt("return");

        case 7:
          _context6.next = 9;
          return regeneratorRuntime.awrap(db.products.countDocuments({
            productPermalink: req.body.productPermalink,
            _id: {
              $ne: common.getId(product._id)
            }
          }));

        case 9:
          count = _context6.sent;

          if (!(count > 0 && req.body.productPermalink !== '')) {
            _context6.next = 13;
            break;
          }

          res.status(400).json({
            message: 'Permalink already exists. Pick a new one.'
          });
          return _context6.abrupt("return");

        case 13:
          _context6.next = 15;
          return regeneratorRuntime.awrap(common.getImages(req.body.productId, req, res));

        case 15:
          images = _context6.sent;
          // Process supplied options
          productOptions = req.body.productOptions;

          if (productOptions && _typeof(productOptions) !== 'object') {
            try {
              productOptions = JSON.parse(req.body.productOptions);
            } catch (ex) {
              console.log('Failure to parse options');
            }
          }

          productDoc = {
            productId: req.body.productId,
            productPermalink: req.body.productPermalink,
            productTitle: common.cleanHtml(req.body.productTitle),
            productPrice: req.body.productPrice,
            productDescription: common.cleanHtml(req.body.productDescription),
            productPublished: common.convertBool(req.body.productPublished),
            productTags: req.body.productTags,
            productOptions: productOptions || null,
            productComment: common.checkboxBool(req.body.productComment),
            productStock: common.safeParseInt(req.body.productStock) || null
          }; // Validate the body again schema

          schemaValidate = validateJson('editProduct', productDoc);

          if (schemaValidate.result) {
            _context6.next = 23;
            break;
          }

          res.status(400).json({
            message: 'Form invalid. Please check values and try again.',
            error: schemaValidate.errors
          });
          return _context6.abrupt("return");

        case 23:
          // Remove productId from doc
          delete productDoc.productId; // if no featured image

          if (!product.productImage) {
            if (images.length > 0) {
              productDoc.productImage = images[0].path;
            } else {
              productDoc.productImage = '/uploads/placeholder.png';
            }
          } else {
            productDoc.productImage = product.productImage;
          }

          _context6.prev = 25;
          _context6.next = 28;
          return regeneratorRuntime.awrap(db.products.updateOne({
            _id: common.getId(req.body.productId)
          }, {
            $set: productDoc
          }, {}));

        case 28:
          // Update the index
          indexProducts(req.app).then(function () {
            res.status(200).json({
              message: 'Successfully saved',
              product: productDoc
            });
          });
          _context6.next = 34;
          break;

        case 31:
          _context6.prev = 31;
          _context6.t0 = _context6["catch"](25);
          res.status(400).json({
            message: 'Failed to save. Please try again'
          });

        case 34:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[25, 31]]);
}); // delete a product

router.post('/admin/product/delete', restrict, checkAccess, function _callee7(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          db = req.app.db; // remove the product

          _context7.next = 3;
          return regeneratorRuntime.awrap(db.products.deleteOne({
            _id: common.getId(req.body.productId)
          }, {}));

        case 3:
          // delete any images and folder
          rimraf('public/uploads/' + req.body.productId, function (err) {
            if (err) {
              console.info(err.stack);
              res.status(400).json({
                message: 'Failed to delete product'
              });
            } // re-index products


            indexProducts(req.app).then(function () {
              res.status(200).json({
                message: 'Product successfully deleted'
              });
            });
          });

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
}); // update the published state based on an ajax call from the frontend

router.post('/admin/product/publishedState', restrict, checkAccess, function _callee8(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          db = req.app.db;
          _context8.prev = 1;
          _context8.next = 4;
          return regeneratorRuntime.awrap(db.products.updateOne({
            _id: common.getId(req.body.id)
          }, {
            $set: {
              productPublished: common.convertBool(req.body.state)
            }
          }, {
            multi: false
          }));

        case 4:
          res.status(200).json({
            message: 'Published state updated'
          });
          _context8.next = 11;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](1);
          console.error(colors.red('Failed to update the published state: ' + _context8.t0));
          res.status(400).json({
            message: 'Published state not updated'
          });

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 7]]);
}); // set as main product image

router.post('/admin/product/setasmainimage', restrict, checkAccess, function _callee9(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          db = req.app.db;
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(db.products.updateOne({
            _id: common.getId(req.body.product_id)
          }, {
            $set: {
              productImage: req.body.productImage
            }
          }, {
            multi: false
          }));

        case 4:
          res.status(200).json({
            message: 'Main image successfully set'
          });
          _context9.next = 10;
          break;

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](1);
          res.status(400).json({
            message: 'Unable to set as main image. Please try again.'
          });

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 7]]);
}); // deletes a product image

router.post('/admin/product/deleteimage', restrict, checkAccess, function _callee10(req, res) {
  var db, product;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          db = req.app.db; // get the productImage from the db

          _context10.next = 3;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: common.getId(req.body.product_id)
          }));

        case 3:
          product = _context10.sent;

          if (product) {
            _context10.next = 7;
            break;
          }

          res.status(400).json({
            message: 'Product not found'
          });
          return _context10.abrupt("return");

        case 7:
          if (!(req.body.productImage === product.productImage)) {
            _context10.next = 13;
            break;
          }

          _context10.next = 10;
          return regeneratorRuntime.awrap(db.products.updateOne({
            _id: common.getId(req.body.product_id)
          }, {
            $set: {
              productImage: null
            }
          }, {
            multi: false
          }));

        case 10:
          // remove the image from disk
          fs.unlink(path.join('public', req.body.productImage), function (err) {
            if (err) {
              res.status(400).json({
                message: 'Image not removed, please try again.'
              });
            } else {
              res.status(200).json({
                message: 'Image successfully deleted'
              });
            }
          });
          _context10.next = 14;
          break;

        case 13:
          // remove the image from disk
          fs.unlink(path.join('public', req.body.productImage), function (err) {
            if (err) {
              res.status(400).json({
                message: 'Image not removed, please try again.'
              });
            } else {
              res.status(200).json({
                message: 'Image successfully deleted'
              });
            }
          });

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  });
});
module.exports = router;