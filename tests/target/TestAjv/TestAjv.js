"use strict";

var Ajv = require('ajv');

var ajv = new Ajv({
  $data: true
});
var schema = {
  "properties": {
    "smaller": {
      "type": "number",
      "maximum": {
        "$data": "1/larger"
      }
    },
    "larger": {
      "type": "number"
    }
  }
};
var validData = {
  smaller: 5,
  larger: 7
};

function test(validData) {
  ajv.validate(schema, validData); // true
}

var utils = require('../TestcaseUtils');

utils.whatWeDoThisTime(test, validData, __dirname);