"use strict";

var Validator = require('validatorjs');

var data = {
  users: [{
    name: 'John',
    bio: {
      age: 28,
      education: {
        primary: 'Elementary School',
        secondary: 'Secondary School'
      }
    }
  }]
};
var rules = {
  'users.*.name': 'required',
  'users.*.bio.age': 'min:18',
  'users.*.bio.education.primary': 'string',
  'users.*.bio.education.secondary': 'string'
}; //let validation = new Validator(data, rules);

function test(input) {
  var validation = new Validator(input, rules);
  validation.fails();
  validation.passes();
}

var utils = require("../TestcaseUtils.js");

utils.entry(test, data);