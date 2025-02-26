"use strict";

var validator = require('is-my-json-valid');

var utils = require('../TestcaseUtils.js');

var validate = validator({
  required: true,
  type: 'object',
  properties: {
    hello: {
      required: true,
      type: 'string'
    }
  }
});
var myJson = {
  hello: 'world'
};

function test(myJson) {
  console.log('should be valid', validate(myJson));
  console.log('should not be valid', validate({})); // get the last list of errors by checking validate.errors
  // the following will print [{field: 'data.hello', message: 'is required'}]

  console.log(validate.errors);
}

utils.entry(test, myJson);