'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aspect = {
  READ_OPERATION: Symbol('READ_OPERATION'),
  SKIP_SESSION: Symbol('SKIP_SESSION'),
  WRITE_OPERATION: Symbol('WRITE_OPERATION'),
  RETRYABLE: Symbol('RETRYABLE'),
  EXECUTE_WITH_SELECTION: Symbol('EXECUTE_WITH_SELECTION')
};
/**
 * This class acts as a parent class for any operation and is responsible for setting this.options,
 * as well as setting and getting a session.
 * Additionally, this class implements `hasAspect`, which determines whether an operation has
 * a specific aspect, including `SKIP_SESSION` and other aspects to encode retryability
 * and other functionality.
 */

var OperationBase =
/*#__PURE__*/
function () {
  function OperationBase(options) {
    _classCallCheck(this, OperationBase);

    this.options = Object.assign({}, options);
  }

  _createClass(OperationBase, [{
    key: "hasAspect",
    value: function hasAspect(aspect) {
      if (this.constructor.aspects == null) {
        return false;
      }

      return this.constructor.aspects.has(aspect);
    }
  }, {
    key: "clearSession",
    value: function clearSession() {
      delete this.options.session;
    }
  }, {
    key: "execute",
    value: function execute() {
      throw new TypeError('`execute` must be implemented for OperationBase subclasses');
    }
  }, {
    key: "session",
    set: function set(session) {
      Object.assign(this.options, {
        session: session
      });
    },
    get: function get() {
      return this.options.session;
    }
  }, {
    key: "canRetryRead",
    get: function get() {
      return true;
    }
  }]);

  return OperationBase;
}();

function defineAspects(operation, aspects) {
  if (!Array.isArray(aspects) && !(aspects instanceof Set)) {
    aspects = [aspects];
  }

  aspects = new Set(aspects);
  Object.defineProperty(operation, 'aspects', {
    value: aspects,
    writable: false
  });
  return aspects;
}

module.exports = {
  Aspect: Aspect,
  defineAspects: defineAspects,
  OperationBase: OperationBase
};