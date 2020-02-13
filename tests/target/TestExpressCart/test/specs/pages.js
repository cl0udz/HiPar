"use strict";

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

var insertedPageId;
(0, _ava.serial)('[Success] Create a new page', function _callee2(t) {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test'
          }));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/page').send({
            pageName: 'This is a page name',
            pageSlug: 'the-page-slug',
            pageEnabled: true,
            pageContent: 'This is the content of the page.'
          }));

        case 4:
          res = _context2.sent;
          // Keep the ID
          insertedPageId = res.body.pageId;
          t.deepEqual(res.body.message, 'New page successfully created');

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Update a page', function _callee3(t) {
  var updatedPage, res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test'
          }));

        case 2:
          updatedPage = {
            pageId: insertedPageId,
            pageName: 'This is a new page name',
            pageSlug: 'the-page-slug-has-been-changed',
            pageEnabled: false,
            pageContent: 'This is the new content of the page.'
          }; // Update page

          _context3.next = 5;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/page').send(updatedPage));

        case 5:
          res = _context3.sent;
          t.deepEqual(res.body.message, 'Page updated successfully');
          t.deepEqual(res.body.pageId, insertedPageId);
          t.deepEqual(res.body.page.pageName, updatedPage.pageName);
          t.deepEqual(res.body.page.pageSlug, updatedPage.pageSlug);
          t.deepEqual(res.body.page.pageEnabled, updatedPage.pageEnabled);
          t.deepEqual(res.body.page.pageContent, updatedPage.pageContent);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
});
(0, _ava.serial)('[Success] Delete a page', function _callee4(t) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test'
          }));

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/page/delete').send({
            pageId: insertedPageId
          }));

        case 4:
          res = _context4.sent;
          t.deepEqual(res.body.message, 'Page successfully deleted');

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
});
(0, _ava.serial)('[Fail] Delete an bogus page id', function _callee5(t) {
  var res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(g.request.post('/admin/login_action').send({
            email: g.users[0].userEmail,
            password: 'test'
          }));

        case 2:
          _context5.next = 4;
          return regeneratorRuntime.awrap(g.request.post('/admin/settings/page/delete').send({
            pageId: insertedPageId
          }));

        case 4:
          res = _context5.sent;
          t.deepEqual(res.body.message, 'Page not found');

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});