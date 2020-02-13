"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-float");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var _arguments = arguments,
    _this = void 0;

var fs = require('fs');

var yenv = require('yenv');

if (fs.existsSync('./env.yaml')) {
  process.env = yenv('env.yaml', {
    strict: false
  });
}

var path = require('path');

var express = require('express');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var session = require('express-session');

var moment = require('moment');

var _ = require('lodash');

var MongoStore = require('connect-mongodb-session')(session);

var numeral = require('numeral');

var helmet = require('helmet');

var colors = require('colors');

var cron = require('node-cron');

var crypto = require('crypto');

var common = require('./lib/common');

var _require = require('./lib/indexing'),
    runIndexing = _require.runIndexing;

var _require2 = require('./lib/schema'),
    addSchemas = _require2.addSchemas;

var _require3 = require('./lib/db'),
    initDb = _require3.initDb,
    getDbUri = _require3.getDbUri;

var handlebars = require('express-handlebars');

var i18n = require('i18n'); // Validate our settings schema


var Ajv = require('ajv');

var ajv = new Ajv({
  useDefaults: true
}); // get config

var config = common.getConfig();
var baseConfig = ajv.validate(require('./config/baseSchema'), config);

if (baseConfig === false) {
  console.log(colors.red("settings.json incorrect: ".concat(ajv.errorsText())));
  process.exit(2);
} // Validate the payment gateway config


switch (config.paymentGateway) {
  case 'paypal':
    if (ajv.validate(require('./config/paypalSchema'), require('./config/paypal.json')) === false) {
      console.log(colors.red("PayPal config is incorrect: ".concat(ajv.errorsText())));
      process.exit(2);
    }

    break;

  case 'stripe':
    if (ajv.validate(require('./config/stripeSchema'), require('./config/stripe.json')) === false) {
      console.log(colors.red("Stripe config is incorrect: ".concat(ajv.errorsText())));
      process.exit(2);
    }

    break;

  case 'authorizenet':
    if (ajv.validate(require('./config/authorizenetSchema'), require('./config/authorizenet.json')) === false) {
      console.log(colors.red("Authorizenet config is incorrect: ".concat(ajv.errorsText())));
      process.exit(2);
    }

    break;

  case 'adyen':
    if (ajv.validate(require('./config/adyenSchema'), require('./config/adyen.json')) === false) {
      console.log(colors.red("adyen config is incorrect: ".concat(ajv.errorsText())));
      process.exit(2);
    }

    break;

  case 'instore':
    if (ajv.validate(require('./config/instoreSchema'), require('./config/instore.json')) === false) {
      console.log(colors.red("instore config is incorrect: ".concat(ajv.errorsText())));
      process.exit(2);
    }

    break;
} // require the routes


var index = require('./routes/index');

var admin = require('./routes/admin');

var product = require('./routes/product');

var customer = require('./routes/customer');

var order = require('./routes/order');

var user = require('./routes/user');

var paypal = require('./routes/payments/paypal');

var stripe = require('./routes/payments/stripe');

var authorizenet = require('./routes/payments/authorizenet');

var adyen = require('./routes/payments/adyen');

var instore = require('./routes/payments/instore');

var app = express(); // Language initialize

i18n.configure({
  locales: config.availableLanguages,
  defaultLocale: config.defaultLocale,
  cookie: 'locale',
  queryParameter: 'lang',
  directory: "".concat(__dirname, "/locales"),
  directoryPermissions: '755',
  api: {
    __: '__',
    // now req.__ becomes req.__
    __n: '__n' // and req.__n can be called as req.__n

  }
}); // view engine setup

app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', handlebars({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: 'layout.hbs',
  partialsDir: [path.join(__dirname, 'views')]
}));
app.set('view engine', 'hbs'); // helpers for the handlebar templating platform

handlebars = handlebars.create({
  helpers: {
    // Language helper
    __: function __() {
      return i18n.__(_this, _arguments);
    },
    // eslint-disable-line no-undef
    __n: function __n() {
      return i18n.__n(_this, _arguments);
    },
    // eslint-disable-line no-undef
    availableLanguages: function availableLanguages(block) {
      var total = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = i18n.getLocales()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var lang = _step.value;
          total += block.fn(lang);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return total;
    },
    perRowClass: function perRowClass(numProducts) {
      if (parseInt(numProducts) === 1) {
        return 'col-6 col-md-12 product-item';
      }

      if (parseInt(numProducts) === 2) {
        return 'col-6 col-md-6 product-item';
      }

      if (parseInt(numProducts) === 3) {
        return 'col-6 col-md-4 product-item';
      }

      if (parseInt(numProducts) === 4) {
        return 'col-6 col-md-3 product-item';
      }

      return 'col-md-6 product-item';
    },
    menuMatch: function menuMatch(title, search) {
      if (!title || !search) {
        return '';
      }

      if (title.toLowerCase().startsWith(search.toLowerCase())) {
        return 'class="navActive"';
      }

      return '';
    },
    getTheme: function getTheme(view) {
      return "themes/".concat(config.theme, "/").concat(view);
    },
    formatAmount: function formatAmount(amt) {
      if (amt) {
        return numeral(amt).format('0.00');
      }

      return '0.00';
    },
    amountNoDecimal: function amountNoDecimal(amt) {
      if (amt) {
        return handlebars.helpers.formatAmount(amt).replace('.', '');
      }

      return handlebars.helpers.formatAmount(amt);
    },
    getStatusColor: function getStatusColor(status) {
      switch (status) {
        case 'Paid':
          return 'success';

        case 'Approved':
          return 'success';

        case 'Approved - Processing':
          return 'success';

        case 'Failed':
          return 'danger';

        case 'Completed':
          return 'success';

        case 'Shipped':
          return 'success';

        case 'Pending':
          return 'warning';

        default:
          return 'danger';
      }
    },
    checkProductOptions: function checkProductOptions(opts) {
      if (opts) {
        return 'true';
      }

      return 'false';
    },
    currencySymbol: function currencySymbol(value) {
      if (typeof value === 'undefined' || value === '') {
        return '$';
      }

      return value;
    },
    objectLength: function objectLength(obj) {
      if (obj) {
        return Object.keys(obj).length;
      }

      return 0;
    },
    stringify: function stringify(obj) {
      if (obj) {
        return JSON.stringify(obj);
      }

      return '';
    },
    checkedState: function checkedState(state) {
      if (state === 'true' || state === true) {
        return 'checked';
      }

      return '';
    },
    selectState: function selectState(state, value) {
      if (state === value) {
        return 'selected';
      }

      return '';
    },
    isNull: function isNull(value, options) {
      if (typeof value === 'undefined' || value === '') {
        return options.fn(_this);
      }

      return options.inverse(_this);
    },
    toLower: function toLower(value) {
      if (value) {
        return value.toLowerCase();
      }

      return null;
    },
    formatDate: function formatDate(date, format) {
      return moment(date).format(format);
    },
    discountExpiry: function discountExpiry(start, end) {
      return moment().isBetween(moment(start), moment(end));
    },
    ifCond: function ifCond(v1, operator, v2, options) {
      switch (operator) {
        case '==':
          return v1 === v2 ? options.fn(_this) : options.inverse(_this);

        case '!=':
          return v1 !== v2 ? options.fn(_this) : options.inverse(_this);

        case '===':
          return v1 === v2 ? options.fn(_this) : options.inverse(_this);

        case '<':
          return v1 < v2 ? options.fn(_this) : options.inverse(_this);

        case '<=':
          return v1 <= v2 ? options.fn(_this) : options.inverse(_this);

        case '>':
          return v1 > v2 ? options.fn(_this) : options.inverse(_this);

        case '>=':
          return v1 >= v2 ? options.fn(_this) : options.inverse(_this);

        case '&&':
          return v1 && v2 ? options.fn(_this) : options.inverse(_this);

        case '||':
          return v1 || v2 ? options.fn(_this) : options.inverse(_this);

        default:
          return options.inverse(_this);
      }
    },
    isAnAdmin: function isAnAdmin(value, options) {
      if (value === 'true' || value === true) {
        return options.fn(_this);
      }

      return options.inverse(_this);
    },
    paymentMessage: function paymentMessage(status) {
      if (status === 'Paid') {
        return '<h2 class="text-success">Your payment has been successfully processed</h2>';
      }

      if (status === 'Pending') {
        var paymentConfig = common.getPaymentConfig();

        if (config.paymentGateway === 'instore') {
          return "<h2 class=\"text-warning\">".concat(paymentConfig.resultMessage, "</h2>");
        }

        return '<h2 class="text-warning">The payment for this order is pending. We will be in contact shortly.</h2>';
      }

      return '<h2 class="text-success">Your payment has failed. Please try again or contact us.</h2>';
    },
    paymentOutcome: function paymentOutcome(status) {
      if (status === 'Paid' || status === 'Pending') {
        return '<h5 class="text-warning">Please retain the details above as a reference of payment</h5>';
      }

      return '';
    },
    upperFirst: function upperFirst(value) {
      if (value) {
        return value.replace(/^\w/, function (chr) {
          return chr.toUpperCase();
        });
      }

      return value;
    },
    math: function math(lvalue, operator, rvalue, options) {
      lvalue = parseFloat(lvalue);
      rvalue = parseFloat(rvalue);
      return {
        '+': lvalue + rvalue,
        '-': lvalue - rvalue,
        '*': lvalue * rvalue,
        '/': lvalue / rvalue,
        '%': lvalue % rvalue
      }[operator];
    },
    showCartButtons: function showCartButtons(cart) {
      if (!cart) {
        return 'd-none';
      }

      return '';
    },
    snip: function snip(text) {
      if (text && text.length > 155) {
        return text.substring(0, 155) + '...';
      }

      return text;
    },
    feather: function feather(icon) {
      // eslint-disable-next-line keyword-spacing
      return "<svg\n                width=\"16\"\n                height=\"16\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                class=\"feather feather-".concat(icon, "\"\n                >\n                <use xlink:href=\"/dist/feather-sprite.svg#").concat(icon, "\"/>\n            </svg>");
    }
  }
}); // session store

var store = new MongoStore({
  uri: getDbUri(config.databaseConnectionString),
  collection: 'sessions'
}); // Setup secrets

if (!config.secretCookie || config.secretCookie === '') {
  var randomString = crypto.randomBytes(20).toString('hex');
  config.secretCookie = randomString;
  common.updateConfigLocal({
    secretCookie: randomString
  });
}

if (!config.secretSession || config.secretSession === '') {
  var _randomString = crypto.randomBytes(20).toString('hex');

  config.secretSession = _randomString;
  common.updateConfigLocal({
    secretSession: _randomString
  });
}

app.enable('trust proxy');
app.use(helmet());
app.set('port', process.env.PORT || 1111);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser(config.secretCookie));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secretSession,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 900000
  },
  store: store
}));
app.use(bodyParser.json({
  // Only on Stripe URL's which need the rawBody
  verify: function verify(req, res, buf) {
    if (req.originalUrl === '/stripe/subscription_update') {
      req.rawBody = buf.toString();
    }
  }
})); // Set locales from session

app.use(i18n.init); // serving static content

app.use(express["static"](path.join(__dirname, 'public')));
app.use(express["static"](path.join(__dirname, 'views', 'themes')));
app.use(express["static"](path.join(__dirname, 'node_modules', 'feather-icons')));
console.log('test', path.join(__dirname, 'node_modules', 'feather-icons', 'dist')); // Make stuff accessible to our router

app.use(function (req, res, next) {
  req.handlebars = handlebars;
  next();
}); // Ran on all routes

app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, no-store');
  next();
}); // setup the routes

app.use('/', index);
app.use('/', customer);
app.use('/', product);
app.use('/', order);
app.use('/', user);
app.use('/', admin);
app.use('/paypal', paypal);
app.use('/stripe', stripe);
app.use('/authorizenet', authorizenet);
app.use('/adyen', adyen);
app.use('/instore', instore); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); // error handlers
// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.error(colors.red(err.stack));
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      helpers: handlebars.helpers
    });
  });
} // production error handler
// no stacktraces leaked to user


app.use(function (err, req, res, next) {
  console.error(colors.red(err.stack));
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    helpers: handlebars.helpers
  });
}); // Nodejs version check

var nodeVersionMajor = parseInt(process.version.split('.')[0].replace('v', ''));

if (nodeVersionMajor < 7) {
  console.log(colors.red("Please use Node.js version 7.x or above. Current version: ".concat(nodeVersionMajor)));
  process.exit(2);
}

app.on('uncaughtException', function (err) {
  console.error(colors.red(err.stack));
  process.exit(2);
});
initDb(config.databaseConnectionString, function _callee2(err, db) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // On connection error we display then exit
          if (err) {
            console.log(colors.red('Error connecting to MongoDB: ' + err));
            process.exit(2);
          } // add db to app for routes


          app.db = db;
          app.config = config;
          app.port = app.get('port'); // Fire up the cron job to clear temp held stock

          cron.schedule('*/1 * * * *', function _callee() {
            var validSessions, validSessionIds;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(db.sessions.find({}).toArray());

                  case 2:
                    validSessions = _context.sent;
                    validSessionIds = [];

                    _.forEach(validSessions, function (value) {
                      validSessionIds.push(value._id);
                    }); // Remove any invalid cart holds


                    _context.next = 7;
                    return regeneratorRuntime.awrap(db.cart.deleteMany({
                      sessionId: {
                        $nin: validSessionIds
                      }
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }); // Set trackStock for testing

          if (process.env.NODE_ENV === 'test') {
            config.trackStock = true;
          } // Process schemas


          _context2.next = 8;
          return regeneratorRuntime.awrap(addSchemas());

        case 8:
          if (!(process.env.NODE_ENV !== 'test')) {
            _context2.next = 17;
            break;
          }

          _context2.prev = 9;
          _context2.next = 12;
          return regeneratorRuntime.awrap(runIndexing(app));

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](9);
          console.error(colors.red('Error setting up indexes:' + err));

        case 17:
          _context2.prev = 17;
          _context2.next = 20;
          return regeneratorRuntime.awrap(app.listen(app.get('port')));

        case 20:
          app.emit('appStarted');

          if (process.env.NODE_ENV !== 'test') {
            console.log(colors.green('expressCart running on host: http://localhost:' + app.get('port')));
          }

          _context2.next = 28;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t1 = _context2["catch"](17);
          console.error(colors.red('Error starting expressCart app:' + err));
          process.exit(2);

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[9, 14], [17, 24]]);
});
module.exports = app;