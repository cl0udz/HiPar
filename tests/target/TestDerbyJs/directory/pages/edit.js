"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.define-property");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var EditForm =
/*#__PURE__*/
function () {
  function EditForm() {
    _classCallCheck(this, EditForm);
  }

  _createClass(EditForm, [{
    key: "init",
    value: function init(model) {
      this.people = model.scope('people');
      this.person = model.ref('person', model.scope('_page.person'));
      this.nameError = model.at('nameError');
    }
  }, {
    key: "done",
    value: function done() {
      var _this = this;

      if (!this.person.get('name')) {
        var checkName = this.person.on('change', 'name', function (value) {
          if (!value) return;

          _this.nameError.del();

          _this.model.removeListener('change', checkName);
        });
        this.nameError.set(true);
        this.nameInput.focus();
        return;
      }

      if (!this.person.get('id')) {
        this.people.add(this.person.get()); // Wait for all model changes to go through before going to the next page, mainly because
        // in non-single-page-app mode (basically IE < 10) we want changes to save to the server before leaving the page

        this.model.whenNothingPending(function () {
          _this.app.history.push('/people');
        });
      } else {
        this.app.history.push('/people');
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.app.history.back();
    }
  }, {
    key: "deletePerson",
    value: function deletePerson() {
      var _this2 = this; // Update model without emitting events so that the page doesn't update


      this.person.silent().del(); // Wait for all model changes to go through before going back, mainly because
      // in non-single-page-app mode (basically IE < 10) we want changes to save to the server before leaving the page

      this.model.whenNothingPending(function () {
        _this2.app.history.back();
      });
    }
  }]);

  return EditForm;
}();

;
EditForm.view = {
  file: __dirname + '/edit',
  dependencies: [require('./chrome')]
};
module.exports = EditForm;