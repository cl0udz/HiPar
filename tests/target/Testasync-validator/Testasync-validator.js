var utils = require('../TestcaseUtils');

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _asyncValidator = _interopRequireDefault(require("async-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }


var descriptor = {
  name: {
    type: "string",
    required: true,
    validator: function validator(rule, value) {
      return value === 'muji';
    }
  },
  age: {
    type: "number",
    asyncValidator: function asyncValidator(rule, value) {
      return new Promise(function (resolve, reject) {
        if (value < 18) {
          reject("too young"); // reject with error message
        } else {
          resolve();
        }
      });
    }
  }
};
var validator = new _asyncValidator["default"](descriptor);
var input = {
  name: "muji",
  age: 16
};

function test(input) {
  // PROMISE USAGE
  validator.validate(input).then(function () {// validation passed or without error message
  })["catch"](function (_ref) {
    var errors = _ref.errors,
        fields = _ref.fields;
    return console.log(errors, fields);
  });
}

utils.entry(test,input);