"use strict";

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.date.to-string.js");

var utils = require("../TestcaseUtils.js");

var _require = require('@cesium133/forgjs'),
    Validator = _require.Validator,
    Rule = _require.Rule;

var emailRule = new Rule({
  type: 'email',
  user: function user(_user) {
    return _user === 'dedede';
  },
  domain: function domain(_domain) {
    return ['outlook', 'gmail', 'yahoo'].indexOf(_domain) !== -1;
  }
}, null);
var passwordRule = new Rule({
  type: 'password',
  minLength: 8,
  uppercase: 1,
  numbers: 1,
  matchesOneOf: ['@', '_', '-', '.', '!']
}, null);
var vComplex = new Validator({
  age: new Rule({
    type: 'int',
    min: 18,
    max: 99
  }),
  dateOfBirth: new Rule({
    type: 'date'
  }),
  array: new Rule({
    type: 'array',
    of: new Rule({
      type: 'string'
    })
  }),
  email: emailRule,
  password: passwordRule
});
vComplex.test({
  age: 26,
  dateOfBirth: new Date(1995, 10, 3),
  array: ['1'],
  email: 'dedede@yahoo.fr;',
  password: 'ad1_A@@Axs'
});
var json = {
  age: 26,
  dateOfBirth: new Date(1995, 10, 3),
  array: ['1'],
  email: 'dedede@yahoo.fr;',
  password: 'ad1_A@@Axs'
};

function test(userJson) {
  vComplex.test(userJson);
} // console.log(test(json));


utils.entry(test, json);