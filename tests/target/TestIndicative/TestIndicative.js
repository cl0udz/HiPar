"use strict";

var _sanitizer = require("indicative/sanitizer");

var rules = {
  username: 'trim',
  email: 'normalize_email'
};
var data = {
  username: '  foo',
  email: 'john+doe@gmail.com'
}; // mutates the original data object

(0, _sanitizer.sanitize)(data, rules);
console.log(data);