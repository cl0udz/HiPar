"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var writeJsonFile = require('write-json-file');

var data = {
        code: 42,
        items: [{
            id: 1,
            name: 'foo'

        }, {
            id: 2,
            name: 'bar'

        }]

    };

function test(input){
    (function _callee() {
        return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(writeJsonFile('foo.json', input));

                case 2:
                case "end":
                    return _context.stop();
                }
            }
        });
    })();
}

var utils = require("../TestcaseUtils.js");
utils.entry(test, data, __dirname);
