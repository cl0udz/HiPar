"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.find-index");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.link");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var _ = require('lodash');

var uglifycss = require('uglifycss');

var colors = require('colors');

var cheerio = require('cheerio');

var axios = require('axios');

var fs = require('fs');

var path = require('path');

var glob = require('glob');

var async = require('async');

var nodemailer = require('nodemailer');

var sanitizeHtml = require('sanitize-html');

var escape = require('html-entities').AllHtmlEntities;

var mkdirp = require('mkdirp');

var ObjectId = require('mongodb').ObjectID;

var countryList = require('countries-list'); // Parse country list once


var countryArray = [];
Object.keys(countryList.countries).forEach(function (country) {
  countryArray.push(countryList.countries[country].name);
}); // Allowed mime types for product images

var allowedMimeType = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
var fileSizeLimit = 10485760; // common functions

var cleanHtml = function cleanHtml(html) {
  return sanitizeHtml(html);
};

var mongoSanitize = function mongoSanitize(param) {
  if (param instanceof Object) {
    for (var key in param) {
      if (/^\$/.test(key)) {
        delete param[key];
      }
    }
  }

  return param;
};

var safeParseInt = function safeParseInt(param) {
  if (param) {
    try {
      return parseInt(param);
    } catch (ex) {
      return param;
    }
  } else {
    return param;
  }
};

var checkboxBool = function checkboxBool(param) {
  if (param && param === 'on') {
    return true;
  }

  return false;
};

var convertBool = function convertBool(value) {
  if (value === 'true' || value === true) {
    return true;
  }

  return false;
}; // adds products to sitemap.xml


var addSitemapProducts = function addSitemapProducts(req, res, cb) {
  var db = req.app.db;
  var config = getConfig();
  var hostname = config.baseUrl;
  db.products.find({
    productPublished: true
  }).toArray(function (err, products) {
    var posts = [];

    if (err) {
      cb(null, posts);
    }

    async.eachSeries(products, function (item, callback) {
      var post = {};
      var url = item._id;

      if (item.productPermalink) {
        url = item.productPermalink;
      }

      post.url = hostname + '/' + url;
      post.changefreq = 'weekly';
      post.priority = 0.7;
      posts.push(post);
      callback(null, posts);
    }, function () {
      cb(null, posts);
    });
  });
};

var clearSessionValue = function clearSessionValue(session, sessionVar) {
  var temp;

  if (session) {
    temp = session[sessionVar];
    session[sessionVar] = null;
  }

  return temp;
};

var updateTotalCart = function updateTotalCart(req, res) {
  var config, db, discount;
  return regeneratorRuntime.async(function updateTotalCart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config = getConfig();
          db = req.app.db;
          req.session.totalCartAmount = 0;
          req.session.totalCartItems = 0;
          req.session.totalCartProducts = 0; // If cart is empty return zero values

          if (req.session.cart) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return");

        case 7:
          Object.keys(req.session.cart).forEach(function (item) {
            req.session.totalCartAmount = req.session.totalCartAmount + req.session.cart[item].totalItemPrice;
            req.session.totalCartProducts = req.session.totalCartProducts + req.session.cart[item].quantity;
          }); // Update the total items in cart for the badge

          req.session.totalCartItems = Object.keys(req.session.cart).length; // Update the total amount not including shipping/discounts

          req.session.totalCartNetAmount = req.session.totalCartAmount; // Calculate shipping using the loaded module

          config.modules.loaded.shipping.calculateShipping(req.session.totalCartNetAmount, config, req); // If discount module enabled

          if (!config.modules.loaded.discount) {
            _context.next = 16;
            break;
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(db.discounts.findOne({
            code: req.session.discountCode
          }));

        case 14:
          discount = _context.sent;

          if (discount) {
            config.modules.loaded.discount.calculateDiscount(discount, req);
          } else {
            // If discount code is not found, remove it
            delete req.session.discountCode;
            req.session.totalCartDiscount = 0;
          }

        case 16:
          // Calculate our total amount removing discount and adding shipping
          req.session.totalCartAmount = req.session.totalCartNetAmount - req.session.totalCartDiscount + req.session.totalCartShipping;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

var emptyCart = function emptyCart(req, res, type, customMessage) {
  var db, message;
  return regeneratorRuntime.async(function emptyCart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          db = req.app.db; // Remove from session

          delete req.session.cart;
          delete req.session.shippingAmount;
          delete req.session.orderId;
          delete req.session.cartSubscription;
          delete req.session.discountCode; // Remove cart from DB

          _context2.next = 8;
          return regeneratorRuntime.awrap(db.cart.deleteOne({
            sessionId: req.session.id
          }));

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(updateTotalCart(req, res));

        case 10:
          // Update checking cart for subscription
          updateSubscriptionCheck(req, res); // Set returned message

          message = 'Cart successfully emptied';

          if (customMessage) {
            message = customMessage;
          }

          if (!(type === 'function')) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return");

        case 15:
          if (!(type === 'json')) {
            _context2.next = 18;
            break;
          }

          res.status(200).json({
            message: message,
            totalCartItems: 0
          });
          return _context2.abrupt("return");

        case 18:
          req.session.message = message;
          req.session.messageType = 'success';
          res.redirect('/');

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var clearCustomer = function clearCustomer(req) {
  // Clear our session
  req.session.customerPresent = null;
  req.session.customerEmail = null;
  req.session.customerFirstname = null;
  req.session.customerLastname = null;
  req.session.customerAddress1 = null;
  req.session.customerAddress2 = null;
  req.session.customerCountry = null;
  req.session.customerState = null;
  req.session.customerPostcode = null;
  req.session.customerPhone = null;
  req.session.orderComment = null;
};

var updateSubscriptionCheck = function updateSubscriptionCheck(req, res) {
  // If cart is empty
  if (!req.session.cart || req.session.cart.length === 0) {
    req.session.cartSubscription = null;
    return;
  }

  Object.keys(req.session.cart).forEach(function (item) {
    if (item.productSubscription) {
      req.session.cartSubscription = item.productSubscription;
    } else {
      req.session.cartSubscription = null;
    }
  });
};

var checkDirectorySync = function checkDirectorySync(directory) {
  try {
    fs.statSync(directory);
  } catch (e) {
    try {
      fs.mkdirSync(directory);
    } catch (err) {
      mkdirp.sync(directory); // error : directory & sub directories to be newly created
    }
  }
};

var getThemes = function getThemes() {
  return fs.readdirSync(path.join(__dirname, '../', 'views', 'themes')).filter(function (file) {
    return fs.statSync(path.join(path.join(__dirname, '../', 'views', 'themes'), file)).isDirectory();
  });
};

var getImages = function getImages(id, req, res, callback) {
  var db, product, files, fileList, i, file;
  return regeneratorRuntime.async(function getImages$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          db = req.app.db;
          _context3.next = 3;
          return regeneratorRuntime.awrap(db.products.findOne({
            _id: getId(id)
          }));

        case 3:
          product = _context3.sent;

          if (product) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", []);

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(glob.sync("public/uploads/".concat(product._id.toString(), "/**"), {
            nosort: true
          }));

        case 8:
          files = _context3.sent;
          // sort array
          files.sort(); // declare the array of objects

          fileList = []; // loop these files

          for (i = 0; i < files.length; i++) {
            // only want files
            if (fs.lstatSync(files[i]).isDirectory() === false) {
              // declare the file object and set its values
              file = {
                id: i,
                path: files[i].substring(6)
              };

              if (product.productImage === files[i].substring(6)) {
                file.productImage = true;
              } // push the file object into the array


              fileList.push(file);
            }
          }

          return _context3.abrupt("return", fileList);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var getConfig = function getConfig() {
  var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../config', 'settings.json'), 'utf8'));
  var localConfigFilePath = path.join(__dirname, '../config', 'settings-local.json'); // Check for local config file and merge with base settings

  if (fs.existsSync(localConfigFilePath)) {
    var localConfigFile = JSON.parse(fs.readFileSync(localConfigFilePath, 'utf8'));
    config = Object.assign(config, localConfigFile);
  } // Override from env.yaml environment file


  Object.keys(config).forEach(function (configKey) {
    if (process.env[configKey]) {
      config[configKey] = process.env[configKey];
    }
  });
  config.customCss = typeof config.customCss !== 'undefined' ? escape.decode(config.customCss) : null;
  config.footerHtml = typeof config.footerHtml !== 'undefined' ? escape.decode(config.footerHtml) : null;
  config.googleAnalytics = typeof config.googleAnalytics !== 'undefined' ? escape.decode(config.googleAnalytics) : null; // setup theme

  config.themeViews = '';

  if (typeof config.theme === 'undefined' || config.theme === '') {
    config.theme = 'Cloth'; // Default to Cloth theme
  }

  config.themeViews = '../views/themes/' + config.theme + '/'; // set the environment for files

  config.env = '.min';

  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
    config.env = '';
  } // load modules


  try {
    config.modules.loaded = {};
    Object.keys(config.modules.enabled).forEach(function (mod) {
      config.modules.loaded[mod] = require("./modules/".concat(config.modules.enabled[mod]));
    });
  } catch (ex) {
    console.log('Could not load modules, check your config.', ex);
    process.exit(1);
  }

  return config;
};

var getPaymentConfig = function getPaymentConfig() {
  var siteConfig = getConfig();
  var gateConfigFile = path.join(__dirname, '../config', "".concat(siteConfig.paymentGateway, ".json"));
  var config = [];

  if (fs.existsSync(gateConfigFile)) {
    config = JSON.parse(fs.readFileSync(gateConfigFile, 'utf8'));
  } // If a local config we combine the objects. Local configs are .gitignored


  var localConfig = path.join(__dirname, '../config', "".concat(siteConfig.paymentGateway, "-local.json"));

  if (fs.existsSync(localConfig)) {
    var localConfigObj = JSON.parse(fs.readFileSync(localConfig, 'utf8'));
    config = Object.assign(config, localConfigObj);
  } // Override from env.yaml environment file


  Object.keys(config).forEach(function (configKey) {
    if (process.env[configKey]) {
      config[configKey] = process.env[configKey];
    }
  });
  return config;
};

var updateConfig = function updateConfig(fields) {
  var settingsFile = getConfig();

  _.forEach(fields, function (value, key) {
    settingsFile[key] = value;

    if (key === 'customCss_input') {
      settingsFile.customCss = escape.encode(uglifycss.processString(value));
    }

    if (key === 'footerHtml_input') {
      var footerHtml = typeof value !== 'undefined' || value === '' ? escape.encode(value) : '';
      settingsFile.footerHtml = footerHtml;
    }

    if (key === 'googleAnalytics_input') {
      var googleAnalytics = typeof value !== 'undefined' ? escape.encode(value) : '';
      settingsFile.googleAnalytics = googleAnalytics;
    }
  }); // delete any settings


  delete settingsFile.customCss_input;
  delete settingsFile.footerHtml_input;
  delete settingsFile.googleAnalytics_input;

  if (fields.emailSecure === 'on') {
    settingsFile.emailSecure = true;
  } else {
    settingsFile.emailSecure = false;
  }

  if (!fields.menuEnabled) {
    settingsFile.menuEnabled = false;
  } else {
    settingsFile.menuEnabled = true;
  }

  if (fields.emailPort) {
    settingsFile.emailPort = parseInt(fields.emailPort);
  }

  if (fields.productsPerRow) {
    settingsFile.productsPerRow = parseInt(fields.productsPerRow);
  }

  if (fields.productsPerPage) {
    settingsFile.productsPerPage = parseInt(fields.productsPerPage);
  } // If we have a local settings file (not git tracked) we loop its settings and save
  // and changes made to them. All other settings get updated to the base settings file.


  var localSettingsFile = path.join(__dirname, '../config', 'settings-local.json');

  if (fs.existsSync(localSettingsFile)) {
    var localSettings = JSON.parse(fs.readFileSync(localSettingsFile));

    _.forEach(localSettings, function (value, key) {
      if (fields[key]) {
        localSettings[key] = fields[key]; // Exists in local so remove from main settings file

        delete settingsFile[key];
      }
    }); // Save our local settings


    try {
      fs.writeFileSync(localSettingsFile, JSON.stringify(localSettings, null, 4));
    } catch (exception) {
      console.log('Failed to save local settings file', exception);
    }
  } // write base settings file


  var baseSettingsFile = path.join(__dirname, '../config', 'settings.json');

  try {
    fs.writeFileSync(baseSettingsFile, JSON.stringify(settingsFile, null, 4));
    return true;
  } catch (exception) {
    return false;
  }
};

var updateConfigLocal = function updateConfigLocal(field) {
  var localSettingsFile = path.join(__dirname, '../config', 'settings-local.json');

  try {
    var localSettings = {};

    if (fs.existsSync(localSettingsFile)) {
      localSettings = JSON.parse(fs.readFileSync(localSettingsFile));
    }

    Object.assign(localSettings, field);
    fs.writeFileSync(localSettingsFile, JSON.stringify(localSettings, null, 4));
  } catch (exception) {
    console.log('Failed to save local settings file', exception);
  }
};

var getMenu = function getMenu(db) {
  return db.menu.findOne({});
}; // creates a new menu item


var newMenu = function newMenu(req) {
  var db = req.app.db;
  return getMenu(db).then(function (menu) {
    // if no menu present
    if (!menu) {
      menu = {};
      menu.items = [];
    }

    var newNav = {
      title: req.body.navMenu,
      link: req.body.navLink,
      order: Object.keys(menu.items).length + 1
    };
    menu.items.push(newNav);
    return db.menu.updateOne({}, {
      $set: {
        items: menu.items
      }
    }, {
      upsert: true
    }).then(function () {
      return true;
    });
  })["catch"](function (err) {
    console.log('Error creating new menu', err);
    return false;
  });
}; // delete a menu item


var deleteMenu = function deleteMenu(req, menuIndex) {
  var db = req.app.db;
  return getMenu(db).then(function (menu) {
    // Remove menu item
    menu.items.splice(menuIndex, 1);
    return db.menu.updateOne({}, {
      $set: {
        items: menu.items
      }
    }, {
      upsert: true
    }).then(function () {
      return true;
    });
  })["catch"](function () {
    return false;
  });
}; // updates and existing menu item


var updateMenu = function updateMenu(req) {
  var db = req.app.db;
  return getMenu(db).then(function (menu) {
    // find menu item and update it
    var menuIndex = _.findIndex(menu.items, ['title', req.body.navId]);

    menu.items[menuIndex].title = req.body.navMenu;
    menu.items[menuIndex].link = req.body.navLink;
    return db.menu.updateOne({}, {
      $set: {
        items: menu.items
      }
    }, {
      upsert: true
    }).then(function () {
      return true;
    });
  })["catch"](function () {
    return false;
  });
};

var sortMenu = function sortMenu(menu) {
  if (menu && menu.items) {
    menu.items = _.sortBy(menu.items, 'order');
    return menu;
  }

  return {};
}; // orders the menu


var orderMenu = function orderMenu(req, res) {
  var db = req.app.db;
  return getMenu(db).then(function (menu) {
    var menuOrder = req.body['order[]']; // update the order

    for (var i = 0; i < menuOrder.length; i++) {
      _.find(menu.items, ['title', menuOrder[i]]).order = i;
    }

    return db.menu.updateOne({}, {
      $set: {
        items: menu.items
      }
    }, {
      upsert: true
    }).then(function () {
      return true;
    });
  })["catch"](function () {
    return false;
  });
};

var getEmailTemplate = function getEmailTemplate(result) {
  var config = getConfig();
  var template = fs.readFileSync(path.join(__dirname, '../public/email_template.html'), 'utf8');
  $ = cheerio.load(template);
  $('#brand').text(config.cartTitle);
  $('#paymentResult').text(result.message);

  if (result.paymentApproved === true) {
    $('#paymentResult').addClass('text-success');
  } else {
    $('#paymentResult').addClass('text-danger');
  }

  $('#paymentMessage').text('Thanks for shopping with us. We hope you will shop with us again soon.');
  $('#paymentDetails').html(result.paymentDetails);
  return $.html();
};

var sendEmail = function sendEmail(to, subject, body) {
  var config = getConfig();
  var emailSettings = {
    host: config.emailHost,
    port: config.emailPort,
    secure: config.emailSecure,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword
    }
  }; // outlook needs this setting

  if (config.emailHost === 'smtp-mail.outlook.com') {
    emailSettings.tls = {
      ciphers: 'SSLv3'
    };
  }

  var transporter = nodemailer.createTransport(emailSettings);
  var mailOptions = {
    from: config.emailAddress,
    // sender address
    to: to,
    // list of receivers
    subject: subject,
    // Subject line
    html: body // html body

  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.error(colors.red(error));
    }

    return true;
  });
}; // gets the correct type of index ID


var getId = function getId(id) {
  if (id) {
    if (id.length !== 24) {
      return id;
    }
  }

  return ObjectId(id);
};

var newId = function newId() {
  return new ObjectId();
};

var getData = function getData(req, page, query) {
  var db = req.app.db;
  var config = getConfig();
  var numberProducts = config.productsPerPage ? config.productsPerPage : 6;
  var skip = 0;

  if (page > 1) {
    skip = (page - 1) * numberProducts;
  }

  if (!query) {
    query = {};
  }

  query.productPublished = {
    $ne: false
  }; // Run our queries

  return Promise.all([db.products.find(query).skip(skip).limit(parseInt(numberProducts)).toArray(), db.products.countDocuments(query)]).then(function (result) {
    var returnData = {
      data: result[0],
      totalProducts: result[1]
    };
    return returnData;
  })["catch"](function (err) {
    throw new Error('Error retrieving products');
  });
};

var hooker = function hooker(order) {
  var config = getConfig();
  return axios.post(config.orderHook, order, {
    responseType: 'application/json'
  }).then(function (response) {
    if (response.status === 200) {
      console.info('Successfully called order hook');
    }
  })["catch"](function (err) {
    console.log('Error calling hook:', err);
  });
};

var getCountryList = function getCountryList() {
  return countryArray;
};

var cleanAmount = function cleanAmount(amount) {
  if (amount) {
    return parseInt(amount.toString().replace('.', ''));
  }

  return amount;
};

module.exports = {
  allowedMimeType: allowedMimeType,
  fileSizeLimit: fileSizeLimit,
  cleanHtml: cleanHtml,
  mongoSanitize: mongoSanitize,
  safeParseInt: safeParseInt,
  checkboxBool: checkboxBool,
  convertBool: convertBool,
  addSitemapProducts: addSitemapProducts,
  clearSessionValue: clearSessionValue,
  updateTotalCart: updateTotalCart,
  emptyCart: emptyCart,
  clearCustomer: clearCustomer,
  updateSubscriptionCheck: updateSubscriptionCheck,
  checkDirectorySync: checkDirectorySync,
  getThemes: getThemes,
  getImages: getImages,
  getConfig: getConfig,
  getPaymentConfig: getPaymentConfig,
  updateConfig: updateConfig,
  updateConfigLocal: updateConfigLocal,
  getMenu: getMenu,
  newMenu: newMenu,
  deleteMenu: deleteMenu,
  updateMenu: updateMenu,
  sortMenu: sortMenu,
  orderMenu: orderMenu,
  getEmailTemplate: getEmailTemplate,
  sendEmail: sendEmail,
  getId: getId,
  newId: newId,
  getData: getData,
  hooker: hooker,
  getCountryList: getCountryList,
  cleanAmount: cleanAmount
};