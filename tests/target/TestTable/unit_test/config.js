"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

var _chai = require("chai");

var _ajv = _interopRequireDefault(require("ajv"));

var _ajvKeywords = _interopRequireDefault(require("ajv-keywords"));

var _validateConfig = _interopRequireDefault(require("../dist/validateConfig"));

var _config = _interopRequireDefault(require("../src/schemas/config.json"));

var _configSamples = _interopRequireDefault(require("./configSamples"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('config.json schema', function () {
  var validate;
  before(function () {
    var ajv = new _ajv["default"]({
      allErrors: true
    });
    (0, _ajvKeywords["default"])(ajv, 'typeof');
    validate = ajv.compile(_config["default"]);
  });
  it('passes validation of valid config samples', function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _configSamples["default"].valid[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var sample = _step.value;
        (0, _chai.expect)(validate(sample)).to.equal(true);
        (0, _chai.expect)((0, _validateConfig["default"])(sample)).to.equal(true);
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
  });
  it('fails validation of invalid config samples', function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _configSamples["default"].invalid[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var sample = _step2.value;
        (0, _chai.expect)(validate(sample)).to.equal(false);
        (0, _chai.expect)((0, _validateConfig["default"])(sample)).to.equal(false);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
});