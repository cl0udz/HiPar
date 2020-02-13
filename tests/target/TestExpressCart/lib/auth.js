"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var ObjectId = require('mongodb').ObjectID;

var _ = require('lodash');

var restrictedRoutes = [{
  route: '/admin/product/new',
  response: 'redirect'
}, {
  route: '/admin/product/insert',
  response: 'redirect'
}, {
  route: '/admin/product/edit/:id',
  response: 'redirect'
}, {
  route: '/admin/product/update',
  response: 'redirect'
}, {
  route: '/admin/product/delete/:id',
  response: 'redirect'
}, {
  route: '/admin/product/publishedState',
  response: 'json'
}, {
  route: '/admin/product/setasmainimage',
  response: 'json'
}, {
  route: '/admin/product/deleteimage',
  response: 'json'
}, {
  route: '/admin/product/removeoption',
  response: 'json'
}, {
  route: '/admin/order/statusupdate',
  response: 'json'
}, {
  route: '/admin/settings/update',
  response: 'json'
}, {
  route: '/admin/settings/pages/new',
  response: 'redirect'
}, {
  route: '/admin/settings/pages/edit/:page',
  response: 'redirect'
}, {
  route: '/admin/settings/pages',
  response: 'json'
}, {
  route: '/admin/settings/page/delete/:page',
  response: 'json'
}, {
  route: '/admin/settings/menu/new',
  response: 'json'
}, {
  route: '/admin/settings/menu/update',
  response: 'json'
}, {
  route: '/admin/settings/menu/delete',
  response: 'json'
}, {
  route: '/admin/settings/menu/saveOrder',
  response: 'json'
}, {
  route: '/admin/file/upload',
  response: 'json'
}];

var restrict = function restrict(req, res, next) {
  checkLogin(req, res, next);
};

var checkLogin = function checkLogin(req, res, next) {
  var db, user;
  return regeneratorRuntime.async(function checkLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = req.app.db; // if not protecting we check for public pages and don't checkLogin

          if (!(req.session.needsSetup === true)) {
            _context.next = 4;
            break;
          }

          res.redirect('/admin/setup');
          return _context.abrupt("return");

        case 4:
          if (!req.headers.apikey) {
            _context.next = 21;
            break;
          }

          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(db.users.findOne({
            apiKey: ObjectId(req.headers.apikey),
            isAdmin: true
          }));

        case 8:
          user = _context.sent;

          if (user) {
            _context.next = 12;
            break;
          }

          res.status(400).json({
            message: 'Access denied'
          });
          return _context.abrupt("return");

        case 12:
          // Set API authenticated in the req
          req.apiAuthenticated = true;
          next();
          return _context.abrupt("return");

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);
          res.status(400).json({
            message: 'Access denied'
          });
          return _context.abrupt("return");

        case 21:
          if (!req.session.user) {
            _context.next = 24;
            break;
          }

          next();
          return _context.abrupt("return");

        case 24:
          res.redirect('/admin/login');

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 17]]);
}; // Middleware to check for admin access for certain route


var checkAccess = function checkAccess(req, res, next) {
  var routeCheck = _.find(restrictedRoutes, {
    route: req.route.path
  }); // If the user is not an admin and route is restricted, show message and redirect to /admin


  if (req.session.isAdmin === false && routeCheck) {
    if (routeCheck.response === 'redirect') {
      req.session.message = 'Unauthorised. Please refer to administrator.';
      req.session.messageType = 'danger';
      res.redirect('/admin');
      return;
    }

    if (routeCheck.response === 'json') {
      res.status(400).json({
        message: 'Unauthorised. Please refer to administrator.'
      });
    }
  } else {
    next();
  }
};

module.exports = {
  restrict: restrict,
  checkLogin: checkLogin,
  checkAccess: checkAccess
};