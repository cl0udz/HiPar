"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.replace");

require("regenerator-runtime/runtime");

var express = require('express');

var common = require('../lib/common');

var _require = require('../lib/auth'),
    restrict = _require.restrict,
    checkAccess = _require.checkAccess;

var escape = require('html-entities').AllHtmlEntities;

var colors = require('colors');

var bcrypt = require('bcryptjs');

var moment = require('moment');

var fs = require('fs');

var path = require('path');

var multer = require('multer');

var mime = require('mime-type/with-db');

var _require2 = require('../lib/schema'),
    validateJson = _require2.validateJson;

var ObjectId = require('mongodb').ObjectID;

var router = express.Router(); // Regex

var emailRegex = /\S+@\S+\.\S+/;
var numericRegex = /^\d*\.?\d*$/; // Admin section

router.get('/admin', restrict, function (req, res, next) {
  res.redirect('/admin/dashboard');
}); // logout

router.get('/admin/logout', function (req, res) {
  req.session.user = null;
  req.session.message = null;
  req.session.messageType = null;
  res.redirect('/');
}); // login form

router.get('/admin/login', function _callee(req, res) {
  var db, userCount;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.users.countDocuments({}));

        case 3:
          userCount = _context.sent;

          // we check for a user. If one exists, redirect to login form otherwise setup
          if (userCount && userCount > 0) {
            // set needsSetup to false as a user exists
            req.session.needsSetup = false;
            res.render('login', {
              title: 'Login',
              referringUrl: req.header('Referer'),
              config: req.app.config,
              message: common.clearSessionValue(req.session, 'message'),
              messageType: common.clearSessionValue(req.session, 'messageType'),
              helpers: req.handlebars.helpers,
              showFooter: 'showFooter'
            });
          } else {
            // if there are no users set the "needsSetup" session
            req.session.needsSetup = true;
            res.redirect('/admin/setup');
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // login the user and check the password

router.post('/admin/login_action', function _callee2(req, res) {
  var db, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db.users.findOne({
            userEmail: common.mongoSanitize(req.body.email)
          }));

        case 3:
          user = _context2.sent;

          if (!(!user || user === null)) {
            _context2.next = 7;
            break;
          }

          res.status(400).json({
            message: 'A user with that email does not exist.'
          });
          return _context2.abrupt("return");

        case 7:
          // we have a user under that email so we compare the password
          bcrypt.compare(req.body.password, user.userPassword).then(function (result) {
            if (result) {
              req.session.user = req.body.email;
              req.session.usersName = user.usersName;
              req.session.userId = user._id.toString();
              req.session.isAdmin = user.isAdmin;
              res.status(200).json({
                message: 'Login successful'
              });
              return;
            } // password is not correct


            res.status(400).json({
              message: 'Access denied. Check password and try again.'
            });
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // setup form is shown when there are no users setup in the DB

router.get('/admin/setup', function _callee3(req, res) {
  var db, userCount;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          db = req.app.db;
          _context3.next = 3;
          return regeneratorRuntime.awrap(db.users.countDocuments({}));

        case 3:
          userCount = _context3.sent;
          // dont allow the user to "re-setup" if a user exists.
          // set needsSetup to false as a user exists
          req.session.needsSetup = false;

          if (!(userCount === 0)) {
            _context3.next = 9;
            break;
          }

          req.session.needsSetup = true;
          res.render('setup', {
            title: 'Setup',
            config: req.app.config,
            helpers: req.handlebars.helpers,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            showFooter: 'showFooter'
          });
          return _context3.abrupt("return");

        case 9:
          res.redirect('/admin/login');

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // insert a user

router.post('/admin/setup_action', function _callee4(req, res) {
  var db, doc, userCount;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          db = req.app.db;
          doc = {
            usersName: req.body.usersName,
            userEmail: req.body.userEmail,
            userPassword: bcrypt.hashSync(req.body.userPassword, 10),
            isAdmin: true,
            isOwner: true
          }; // check for users

          _context4.next = 4;
          return regeneratorRuntime.awrap(db.users.countDocuments({}));

        case 4:
          userCount = _context4.sent;

          if (!(userCount === 0)) {
            _context4.next = 18;
            break;
          }

          _context4.prev = 6;
          _context4.next = 9;
          return regeneratorRuntime.awrap(db.users.insertOne(doc));

        case 9:
          res.status(200).json({
            message: 'User account inserted'
          });
          return _context4.abrupt("return");

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](6);
          console.error(colors.red('Failed to insert user: ' + _context4.t0));
          res.status(200).json({
            message: 'Setup failed'
          });
          return _context4.abrupt("return");

        case 18:
          res.status(200).json({
            message: 'Already setup.'
          });

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[6, 13]]);
}); // dashboard

router.get('/admin/dashboard', restrict, function _callee5(req, res) {
  var db, dashboardData;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          db = req.app.db; // Collate data for dashboard

          _context5.next = 3;
          return regeneratorRuntime.awrap(db.products.countDocuments({
            productPublished: true
          }));

        case 3:
          _context5.t0 = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(db.orders.countDocuments({}));

        case 6:
          _context5.t1 = _context5.sent;
          _context5.next = 9;
          return regeneratorRuntime.awrap(db.orders.aggregate([{
            $match: {}
          }, {
            $group: {
              _id: null,
              sum: {
                $sum: '$orderTotal'
              }
            }
          }]).toArray());

        case 9:
          _context5.t2 = _context5.sent;
          _context5.next = 12;
          return regeneratorRuntime.awrap(db.orders.aggregate([{
            $match: {}
          }, {
            $group: {
              _id: null,
              sum: {
                $sum: '$orderProductCount'
              }
            }
          }]).toArray());

        case 12:
          _context5.t3 = _context5.sent;
          _context5.next = 15;
          return regeneratorRuntime.awrap(db.orders.aggregate([{
            $project: {
              _id: 0
            }
          }, {
            $project: {
              o: {
                $objectToArray: '$orderProducts'
              }
            }
          }, {
            $unwind: '$o'
          }, {
            $group: {
              _id: '$o.v.productId',
              title: {
                $last: '$o.v.title'
              },
              productImage: {
                $last: '$o.v.productImage'
              },
              count: {
                $sum: '$o.v.quantity'
              }
            }
          }, {
            $sort: {
              count: -1
            }
          }, {
            $limit: 5
          }]).toArray());

        case 15:
          _context5.t4 = _context5.sent;
          dashboardData = {
            productsCount: _context5.t0,
            ordersCount: _context5.t1,
            ordersAmount: _context5.t2,
            productsSold: _context5.t3,
            topProducts: _context5.t4
          };

          // Fix aggregate data
          if (dashboardData.ordersAmount.length > 0) {
            dashboardData.ordersAmount = dashboardData.ordersAmount[0].sum;
          }

          if (dashboardData.productsSold.length > 0) {
            dashboardData.productsSold = dashboardData.productsSold[0].sum;
          } else {
            dashboardData.productsSold = 0;
          }

          res.render('dashboard', {
            title: 'Cart dashboard',
            session: req.session,
            admin: true,
            dashboardData: dashboardData,
            themes: common.getThemes(),
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            config: req.app.config
          });

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // settings

router.get('/admin/settings', restrict, function (req, res) {
  res.render('settings', {
    title: 'Cart settings',
    session: req.session,
    admin: true,
    themes: common.getThemes(),
    message: common.clearSessionValue(req.session, 'message'),
    messageType: common.clearSessionValue(req.session, 'messageType'),
    helpers: req.handlebars.helpers,
    config: req.app.config,
    footerHtml: typeof req.app.config.footerHtml !== 'undefined' ? escape.decode(req.app.config.footerHtml) : null,
    googleAnalytics: typeof req.app.config.googleAnalytics !== 'undefined' ? escape.decode(req.app.config.googleAnalytics) : null
  });
}); // create API key

router.post('/admin/createApiKey', restrict, checkAccess, function _callee6(req, res) {
  var db, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          db = req.app.db;
          _context6.next = 3;
          return regeneratorRuntime.awrap(db.users.findOneAndUpdate({
            _id: ObjectId(req.session.userId),
            isAdmin: true
          }, {
            $set: {
              apiKey: new ObjectId()
            }
          }, {
            returnOriginal: false
          }));

        case 3:
          result = _context6.sent;

          if (!(result.value && result.value.apiKey)) {
            _context6.next = 7;
            break;
          }

          res.status(200).json({
            message: 'API Key generated',
            apiKey: result.value.apiKey
          });
          return _context6.abrupt("return");

        case 7:
          res.status(400).json({
            message: 'Failed to generate API Key'
          });

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // settings update

router.post('/admin/settings/update', restrict, checkAccess, function (req, res) {
  var result = common.updateConfig(req.body);

  if (result === true) {
    req.app.config = common.getConfig();
    res.status(200).json({
      message: 'Settings successfully updated'
    });
    return;
  }

  res.status(400).json({
    message: 'Permission denied'
  });
}); // settings menu

router.get('/admin/settings/menu', restrict, function _callee7(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          db = req.app.db;
          _context7.t0 = res;
          _context7.t1 = req.session;
          _context7.t2 = common.clearSessionValue(req.session, 'message');
          _context7.t3 = common.clearSessionValue(req.session, 'messageType');
          _context7.t4 = req.handlebars.helpers;
          _context7.t5 = req.app.config;
          _context7.t6 = common;
          _context7.next = 10;
          return regeneratorRuntime.awrap(common.getMenu(db));

        case 10:
          _context7.t7 = _context7.sent;
          _context7.t8 = _context7.t6.sortMenu.call(_context7.t6, _context7.t7);
          _context7.t9 = {
            title: 'Cart menu',
            session: _context7.t1,
            admin: true,
            message: _context7.t2,
            messageType: _context7.t3,
            helpers: _context7.t4,
            config: _context7.t5,
            menu: _context7.t8
          };

          _context7.t0.render.call(_context7.t0, 'settings-menu', _context7.t9);

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  });
}); // page list

router.get('/admin/settings/pages', restrict, function _callee8(req, res) {
  var db, pages;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          db = req.app.db;
          _context8.next = 3;
          return regeneratorRuntime.awrap(db.pages.find({}).toArray());

        case 3:
          pages = _context8.sent;
          _context8.t0 = res;
          _context8.t1 = pages;
          _context8.t2 = req.session;
          _context8.t3 = common.clearSessionValue(req.session, 'message');
          _context8.t4 = common.clearSessionValue(req.session, 'messageType');
          _context8.t5 = req.handlebars.helpers;
          _context8.t6 = req.app.config;
          _context8.t7 = common;
          _context8.next = 14;
          return regeneratorRuntime.awrap(common.getMenu(db));

        case 14:
          _context8.t8 = _context8.sent;
          _context8.t9 = _context8.t7.sortMenu.call(_context8.t7, _context8.t8);
          _context8.t10 = {
            title: 'Static pages',
            pages: _context8.t1,
            session: _context8.t2,
            admin: true,
            message: _context8.t3,
            messageType: _context8.t4,
            helpers: _context8.t5,
            config: _context8.t6,
            menu: _context8.t9
          };

          _context8.t0.render.call(_context8.t0, 'settings-pages', _context8.t10);

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // pages new

router.get('/admin/settings/pages/new', restrict, checkAccess, function _callee9(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          db = req.app.db;
          _context9.t0 = res;
          _context9.t1 = req.session;
          _context9.t2 = common.clearSessionValue(req.session, 'message');
          _context9.t3 = common.clearSessionValue(req.session, 'messageType');
          _context9.t4 = req.handlebars.helpers;
          _context9.t5 = req.app.config;
          _context9.t6 = common;
          _context9.next = 10;
          return regeneratorRuntime.awrap(common.getMenu(db));

        case 10:
          _context9.t7 = _context9.sent;
          _context9.t8 = _context9.t6.sortMenu.call(_context9.t6, _context9.t7);
          _context9.t9 = {
            title: 'Static pages',
            session: _context9.t1,
            admin: true,
            button_text: 'Create',
            message: _context9.t2,
            messageType: _context9.t3,
            helpers: _context9.t4,
            config: _context9.t5,
            menu: _context9.t8
          };

          _context9.t0.render.call(_context9.t0, 'settings-page', _context9.t9);

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  });
}); // pages editor

router.get('/admin/settings/pages/edit/:page', restrict, checkAccess, function _callee10(req, res) {
  var db, page, menu;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          db = req.app.db;
          _context10.next = 3;
          return regeneratorRuntime.awrap(db.pages.findOne({
            _id: common.getId(req.params.page)
          }));

        case 3:
          page = _context10.sent;
          _context10.t0 = common;
          _context10.next = 7;
          return regeneratorRuntime.awrap(common.getMenu(db));

        case 7:
          _context10.t1 = _context10.sent;
          menu = _context10.t0.sortMenu.call(_context10.t0, _context10.t1);

          if (page) {
            _context10.next = 12;
            break;
          }

          res.status(404).render('error', {
            title: '404 Error - Page not found',
            config: req.app.config,
            message: '404 Error - Page not found',
            helpers: req.handlebars.helpers,
            showFooter: 'showFooter',
            menu: menu
          });
          return _context10.abrupt("return");

        case 12:
          res.render('settings-page', {
            title: 'Static pages',
            page: page,
            button_text: 'Update',
            session: req.session,
            admin: true,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            config: req.app.config,
            menu: menu
          });

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  });
}); // insert/update page

router.post('/admin/settings/page', restrict, checkAccess, function _callee11(req, res) {
  var db, doc, page, updatedPage, newDoc;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          db = req.app.db;
          doc = {
            pageName: req.body.pageName,
            pageSlug: req.body.pageSlug,
            pageEnabled: req.body.pageEnabled,
            pageContent: req.body.pageContent
          };

          if (!req.body.pageId) {
            _context11.next = 21;
            break;
          }

          _context11.next = 5;
          return regeneratorRuntime.awrap(db.pages.findOne({
            _id: common.getId(req.body.pageId)
          }));

        case 5:
          page = _context11.sent;

          if (page) {
            _context11.next = 9;
            break;
          }

          res.status(400).json({
            message: 'Page not found'
          });
          return _context11.abrupt("return");

        case 9:
          _context11.prev = 9;
          _context11.next = 12;
          return regeneratorRuntime.awrap(db.pages.findOneAndUpdate({
            _id: common.getId(req.body.pageId)
          }, {
            $set: doc
          }, {
            returnOriginal: false
          }));

        case 12:
          updatedPage = _context11.sent;
          res.status(200).json({
            message: 'Page updated successfully',
            pageId: req.body.pageId,
            page: updatedPage.value
          });
          _context11.next = 19;
          break;

        case 16:
          _context11.prev = 16;
          _context11.t0 = _context11["catch"](9);
          res.status(400).json({
            message: 'Error updating page. Please try again.'
          });

        case 19:
          _context11.next = 32;
          break;

        case 21:
          _context11.prev = 21;
          _context11.next = 24;
          return regeneratorRuntime.awrap(db.pages.insertOne(doc));

        case 24:
          newDoc = _context11.sent;
          res.status(200).json({
            message: 'New page successfully created',
            pageId: newDoc.insertedId
          });
          return _context11.abrupt("return");

        case 29:
          _context11.prev = 29;
          _context11.t1 = _context11["catch"](21);
          res.status(400).json({
            message: 'Error creating page. Please try again.'
          });

        case 32:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[9, 16], [21, 29]]);
}); // delete a page

router.post('/admin/settings/page/delete', restrict, checkAccess, function _callee12(req, res) {
  var db, page;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          db = req.app.db;
          _context12.next = 3;
          return regeneratorRuntime.awrap(db.pages.findOne({
            _id: common.getId(req.body.pageId)
          }));

        case 3:
          page = _context12.sent;

          if (page) {
            _context12.next = 7;
            break;
          }

          res.status(400).json({
            message: 'Page not found'
          });
          return _context12.abrupt("return");

        case 7:
          _context12.prev = 7;
          _context12.next = 10;
          return regeneratorRuntime.awrap(db.pages.deleteOne({
            _id: common.getId(req.body.pageId)
          }, {}));

        case 10:
          res.status(200).json({
            message: 'Page successfully deleted'
          });
          return _context12.abrupt("return");

        case 14:
          _context12.prev = 14;
          _context12.t0 = _context12["catch"](7);
          res.status(400).json({
            message: 'Error deleting page. Please try again.'
          });

        case 17:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[7, 14]]);
}); // new menu item

router.post('/admin/settings/menu/new', restrict, checkAccess, function (req, res) {
  var result = common.newMenu(req);

  if (result === false) {
    res.status(400).json({
      message: 'Failed creating menu.'
    });
    return;
  }

  res.status(200).json({
    message: 'Menu created successfully.'
  });
}); // update existing menu item

router.post('/admin/settings/menu/update', restrict, checkAccess, function (req, res) {
  var result = common.updateMenu(req);

  if (result === false) {
    res.status(400).json({
      message: 'Failed updating menu.'
    });
    return;
  }

  res.status(200).json({
    message: 'Menu updated successfully.'
  });
}); // delete menu item

router.post('/admin/settings/menu/delete', restrict, checkAccess, function (req, res) {
  var result = common.deleteMenu(req, req.body.menuId);

  if (result === false) {
    res.status(400).json({
      message: 'Failed deleting menu.'
    });
    return;
  }

  res.status(200).json({
    message: 'Menu deleted successfully.'
  });
}); // We call this via a Ajax call to save the order from the sortable list

router.post('/admin/settings/menu/saveOrder', restrict, checkAccess, function (req, res) {
  var result = common.orderMenu(req, res);

  if (result === false) {
    res.status(400).json({
      message: 'Failed saving menu order'
    });
    return;
  }

  res.status(200).json({});
}); // validate the permalink

router.post('/admin/validatePermalink', function _callee13(req, res) {
  var db, query, products;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          // if doc id is provided it checks for permalink in any products other that one provided,
          // else it just checks for any products with that permalink
          db = req.app.db;
          query = {};

          if (typeof req.body.docId === 'undefined' || req.body.docId === '') {
            query = {
              productPermalink: req.body.permalink
            };
          } else {
            query = {
              productPermalink: req.body.permalink,
              _id: {
                $ne: common.getId(req.body.docId)
              }
            };
          }

          _context13.next = 5;
          return regeneratorRuntime.awrap(db.products.countDocuments(query));

        case 5:
          products = _context13.sent;

          if (!(products && products > 0)) {
            _context13.next = 9;
            break;
          }

          res.status(400).json({
            message: 'Permalink already exists'
          });
          return _context13.abrupt("return");

        case 9:
          res.status(200).json({
            message: 'Permalink validated successfully'
          });

        case 10:
        case "end":
          return _context13.stop();
      }
    }
  });
}); // Discount codes

router.get('/admin/settings/discounts', restrict, checkAccess, function _callee14(req, res) {
  var db, discounts;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          db = req.app.db;
          _context14.next = 3;
          return regeneratorRuntime.awrap(db.discounts.find({}).toArray());

        case 3:
          discounts = _context14.sent;
          res.render('settings-discounts', {
            title: 'Discount code',
            config: req.app.config,
            session: req.session,
            discounts: discounts,
            admin: true,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers
          });

        case 5:
        case "end":
          return _context14.stop();
      }
    }
  });
}); // Edit a discount code

router.get('/admin/settings/discount/edit/:id', restrict, checkAccess, function _callee15(req, res) {
  var db, discount;
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          db = req.app.db;
          _context15.next = 3;
          return regeneratorRuntime.awrap(db.discounts.findOne({
            _id: common.getId(req.params.id)
          }));

        case 3:
          discount = _context15.sent;
          res.render('settings-discount-edit', {
            title: 'Discount code edit',
            session: req.session,
            admin: true,
            discount: discount,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            config: req.app.config
          });

        case 5:
        case "end":
          return _context15.stop();
      }
    }
  });
}); // Update discount code

router.post('/admin/settings/discount/update', restrict, checkAccess, function _callee16(req, res) {
  var db, discountDoc, schemaValidate, checkCode;
  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          db = req.app.db; // Doc to insert

          discountDoc = {
            discountId: req.body.discountId,
            code: req.body.code,
            type: req.body.type,
            value: parseInt(req.body.value),
            start: moment(req.body.start, 'DD/MM/YYYY HH:mm').toDate(),
            end: moment(req.body.end, 'DD/MM/YYYY HH:mm').toDate()
          }; // Validate the body again schema

          schemaValidate = validateJson('editDiscount', discountDoc);

          if (schemaValidate.result) {
            _context16.next = 6;
            break;
          }

          res.status(400).json(schemaValidate.errors);
          return _context16.abrupt("return");

        case 6:
          if (!moment(discountDoc.start).isBefore(moment())) {
            _context16.next = 9;
            break;
          }

          res.status(400).json({
            message: 'Discount start date needs to be after today'
          });
          return _context16.abrupt("return");

        case 9:
          if (moment(discountDoc.end).isAfter(moment(discountDoc.start))) {
            _context16.next = 12;
            break;
          }

          res.status(400).json({
            message: 'Discount end date needs to be after start date'
          });
          return _context16.abrupt("return");

        case 12:
          _context16.next = 14;
          return regeneratorRuntime.awrap(db.discounts.countDocuments({
            code: discountDoc.code,
            _id: {
              $ne: common.getId(discountDoc.discountId)
            }
          }));

        case 14:
          checkCode = _context16.sent;

          if (!checkCode) {
            _context16.next = 18;
            break;
          }

          res.status(400).json({
            message: 'Discount code already exists'
          });
          return _context16.abrupt("return");

        case 18:
          // Remove discountID
          delete discountDoc.discountId;
          _context16.prev = 19;
          _context16.next = 22;
          return regeneratorRuntime.awrap(db.discounts.updateOne({
            _id: common.getId(req.body.discountId)
          }, {
            $set: discountDoc
          }, {}));

        case 22:
          res.status(200).json({
            message: 'Successfully saved',
            discount: discountDoc
          });
          _context16.next = 28;
          break;

        case 25:
          _context16.prev = 25;
          _context16.t0 = _context16["catch"](19);
          res.status(400).json({
            message: 'Failed to save. Please try again'
          });

        case 28:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[19, 25]]);
}); // Create a discount code

router.get('/admin/settings/discount/new', restrict, checkAccess, function _callee17(req, res) {
  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          res.render('settings-discount-new', {
            title: 'Discount code create',
            session: req.session,
            admin: true,
            message: common.clearSessionValue(req.session, 'message'),
            messageType: common.clearSessionValue(req.session, 'messageType'),
            helpers: req.handlebars.helpers,
            config: req.app.config
          });

        case 1:
        case "end":
          return _context17.stop();
      }
    }
  });
}); // Create a discount code

router.post('/admin/settings/discount/create', restrict, checkAccess, function _callee18(req, res) {
  var db, discountDoc, schemaValidate, checkCode, discount;
  return regeneratorRuntime.async(function _callee18$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          db = req.app.db; // Doc to insert

          discountDoc = {
            code: req.body.code,
            type: req.body.type,
            value: parseInt(req.body.value),
            start: moment(req.body.start, 'DD/MM/YYYY HH:mm').toDate(),
            end: moment(req.body.end, 'DD/MM/YYYY HH:mm').toDate()
          }; // Validate the body again schema

          schemaValidate = validateJson('newDiscount', discountDoc);

          if (schemaValidate.result) {
            _context18.next = 6;
            break;
          }

          res.status(400).json(schemaValidate.errors);
          return _context18.abrupt("return");

        case 6:
          _context18.next = 8;
          return regeneratorRuntime.awrap(db.discounts.countDocuments({
            code: discountDoc.code
          }));

        case 8:
          checkCode = _context18.sent;

          if (!checkCode) {
            _context18.next = 12;
            break;
          }

          res.status(400).json({
            message: 'Discount code already exists'
          });
          return _context18.abrupt("return");

        case 12:
          if (!moment(discountDoc.start).isBefore(moment())) {
            _context18.next = 15;
            break;
          }

          res.status(400).json({
            message: 'Discount start date needs to be after today'
          });
          return _context18.abrupt("return");

        case 15:
          if (moment(discountDoc.end).isAfter(moment(discountDoc.start))) {
            _context18.next = 18;
            break;
          }

          res.status(400).json({
            message: 'Discount end date needs to be after start date'
          });
          return _context18.abrupt("return");

        case 18:
          _context18.next = 20;
          return regeneratorRuntime.awrap(db.discounts.insertOne(discountDoc));

        case 20:
          discount = _context18.sent;
          res.status(200).json({
            message: 'Discount code created successfully',
            discountId: discount.insertedId
          });

        case 22:
        case "end":
          return _context18.stop();
      }
    }
  });
}); // Delete discount code

router["delete"]('/admin/settings/discount/delete', restrict, checkAccess, function _callee19(req, res) {
  var db;
  return regeneratorRuntime.async(function _callee19$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          db = req.app.db;
          _context19.prev = 1;
          _context19.next = 4;
          return regeneratorRuntime.awrap(db.discounts.deleteOne({
            _id: common.getId(req.body.discountId)
          }, {}));

        case 4:
          res.status(200).json({
            message: 'Discount code successfully deleted'
          });
          return _context19.abrupt("return");

        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](1);
          res.status(400).json({
            message: 'Error deleting discount code. Please try again.'
          });

        case 11:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // upload the file

var upload = multer({
  dest: 'public/uploads/'
});
router.post('/admin/file/upload', restrict, checkAccess, upload.single('uploadFile'), function _callee20(req, res) {
  var db, file, mimeType, product, productPath, uploadDir, source, dest, imagePath;
  return regeneratorRuntime.async(function _callee20$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          db = req.app.db;

          if (!req.file) {
            _context20.next = 29;
            break;
          }

          file = req.file; // Get the mime type of the file

          mimeType = mime.lookup(file.originalname); // Check for allowed mime type and file size

          if (!(!common.allowedMimeType.includes(mimeType) || file.size > common.fileSizeLimit)) {
            _context20.next = 8;
            break;
          }

          // Remove temp file
          fs.unlinkSync(file.path); // Return error

          res.status(400).json({
            message: 'File type not allowed or too large. Please try again.'
          });
          return _context20.abrupt("return");

        case 8:
          _context20.next = 10;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: common.getId(req.body.productId)
          }));

        case 10:
          product = _context20.sent;

          if (product) {
            _context20.next = 15;
            break;
          }

          // delete the temp file.
          fs.unlinkSync(file.path); // Return error

          res.status(400).json({
            message: 'File upload error. Please try again.'
          });
          return _context20.abrupt("return");

        case 15:
          productPath = product._id.toString();
          uploadDir = path.join('public/uploads', productPath); // Check directory and create (if needed)

          common.checkDirectorySync(uploadDir);
          source = fs.createReadStream(file.path);
          dest = fs.createWriteStream(path.join(uploadDir, file.originalname.replace(/ /g, '_'))); // save the new file

          source.pipe(dest);
          source.on('end', function () {}); // delete the temp file.

          fs.unlinkSync(file.path);
          imagePath = path.join('/uploads', productPath, file.originalname.replace(/ /g, '_')); // if there isn't a product featured image, set this one

          if (product.productImage) {
            _context20.next = 27;
            break;
          }

          _context20.next = 27;
          return regeneratorRuntime.awrap(db.products.updateOne({
            _id: common.getId(req.body.productId)
          }, {
            $set: {
              productImage: imagePath
            }
          }, {
            multi: false
          }));

        case 27:
          // Return success message
          res.status(200).json({
            message: 'File uploaded successfully'
          });
          return _context20.abrupt("return");

        case 29:
          // Return error
          res.status(400).json({
            message: 'File upload error. Please try again.'
          });

        case 30:
        case "end":
          return _context20.stop();
      }
    }
  });
}); // delete a file via ajax request

router.post('/admin/testEmail', restrict, function (req, res) {
  var config = req.app.config; // TODO: Should fix this to properly handle result

  common.sendEmail(config.emailAddress, 'expressCart test email', 'Your email settings are working');
  res.status(200).json({
    message: 'Test email sent'
  });
});
router.post('/admin/searchall', restrict, function _callee21(req, res, next) {
  var db, searchValue, limitReturned, customers, orders, products, customerQuery, orderQuery, productQuery;
  return regeneratorRuntime.async(function _callee21$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          db = req.app.db;
          searchValue = req.body.searchValue;
          limitReturned = 5; // Empty arrays

          customers = [];
          orders = [];
          products = []; // Default queries

          customerQuery = {};
          orderQuery = {};
          productQuery = {}; // If an ObjectId is detected use that

          if (!ObjectId.isValid(req.body.searchValue)) {
            _context21.next = 20;
            break;
          }

          _context21.next = 12;
          return regeneratorRuntime.awrap(db.customers.find({
            _id: ObjectId(searchValue)
          }).limit(limitReturned).sort({
            created: 1
          }).toArray());

        case 12:
          customers = _context21.sent;
          _context21.next = 15;
          return regeneratorRuntime.awrap(db.orders.find({
            _id: ObjectId(searchValue)
          }).limit(limitReturned).sort({
            orderDate: 1
          }).toArray());

        case 15:
          orders = _context21.sent;
          _context21.next = 18;
          return regeneratorRuntime.awrap(db.products.find({
            _id: ObjectId(searchValue)
          }).limit(limitReturned).sort({
            productAddedDate: 1
          }).toArray());

        case 18:
          products = _context21.sent;
          return _context21.abrupt("return", res.status(200).json({
            customers: customers,
            orders: orders,
            products: products
          }));

        case 20:
          // If email address is detected
          if (emailRegex.test(req.body.searchValue)) {
            customerQuery.email = searchValue;
            orderQuery.orderEmail = searchValue;
          } else if (numericRegex.test(req.body.searchValue)) {
            // If a numeric value is detected
            orderQuery.amount = req.body.searchValue;
            productQuery.productPrice = req.body.searchValue;
          } else {
            // String searches
            customerQuery.$or = [{
              firstName: {
                $regex: new RegExp(searchValue, 'img')
              }
            }, {
              lastName: {
                $regex: new RegExp(searchValue, 'img')
              }
            }];
            orderQuery.$or = [{
              orderFirstname: {
                $regex: new RegExp(searchValue, 'img')
              }
            }, {
              orderLastname: {
                $regex: new RegExp(searchValue, 'img')
              }
            }];
            productQuery.$or = [{
              productTitle: {
                $regex: new RegExp(searchValue, 'img')
              }
            }, {
              productDescription: {
                $regex: new RegExp(searchValue, 'img')
              }
            }];
          } // Get customers


          if (!(Object.keys(customerQuery).length > 0)) {
            _context21.next = 25;
            break;
          }

          _context21.next = 24;
          return regeneratorRuntime.awrap(db.customers.find(customerQuery).limit(limitReturned).sort({
            created: 1
          }).toArray());

        case 24:
          customers = _context21.sent;

        case 25:
          if (!(Object.keys(orderQuery).length > 0)) {
            _context21.next = 29;
            break;
          }

          _context21.next = 28;
          return regeneratorRuntime.awrap(db.orders.find(orderQuery).limit(limitReturned).sort({
            orderDate: 1
          }).toArray());

        case 28:
          orders = _context21.sent;

        case 29:
          if (!(Object.keys(productQuery).length > 0)) {
            _context21.next = 33;
            break;
          }

          _context21.next = 32;
          return regeneratorRuntime.awrap(db.products.find(productQuery).limit(limitReturned).sort({
            productAddedDate: 1
          }).toArray());

        case 32:
          products = _context21.sent;

        case 33:
          return _context21.abrupt("return", res.status(200).json({
            customers: customers,
            orders: orders,
            products: products
          }));

        case 34:
        case "end":
          return _context21.stop();
      }
    }
  });
});
module.exports = router;