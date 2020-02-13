'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = require('events');

var expect = require('chai').expect;

var sinon = require('sinon');

var MockTopology =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(MockTopology, _EventEmitter);

  function MockTopology() {
    var _this;

    _classCallCheck(this, MockTopology);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockTopology).call(this));
    _this.s = {
      promiseLibrary: Promise
    };
    return _this;
  }

  _createClass(MockTopology, [{
    key: "isDestroyed",
    value: function isDestroyed() {
      return false;
    }
  }, {
    key: "capabilities",
    value: function capabilities() {
      return {};
    }
  }, {
    key: "hasSessionSupport",
    value: function hasSessionSupport() {
      return false;
    }
  }, {
    key: "command",
    value: function command(namespace, _command, options, callback) {
      callback(null, {
        result: {
          ok: 1
        }
      });
    }
  }]);

  return MockTopology;
}(EventEmitter);

var _test = {};
describe('Database', function () {
  before(function () {
    // NOTE: These modules are being used prior to test run. In order to monkey-patch them
    //       we must remove their cached versions.
    var resolvedUtils = require.resolve('../../lib/utils');

    var resolvedDb = require.resolve('../../lib/db');

    delete require.cache[resolvedUtils];
    delete require.cache[resolvedDb];
    _test.utils = require('../../lib/utils'); // create a sandbox for stub cleanup

    _test.sandbox = sinon.sandbox.create();
  });
  afterEach(function () {
    return _test.sandbox.restore();
  });
  it('should ignore a readPreference for dropDatabase', {
    metadata: {
      requires: {
        topology: 'single'
      }
    },
    test: function test() {
      sinon.stub(_test.utils, 'executeLegacyOperation').callsFake(function (topology, operation, args) {
        var options = args[args.length - 2];
        expect(options.readPreference).to.equal('primary');
      });

      var Db = require('../../lib/db');

      var db = new Db('fakeDb', new MockTopology(), {
        readPreference: 'nearest'
      });
      db.dropDatabase();
    }
  });
});