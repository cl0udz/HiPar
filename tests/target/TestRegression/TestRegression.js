"use strict";

var do_test = require("regre_tester");

var path = require('path');

var utils = require(path.resolve(__dirname, "../TestcaseUtils.js"));

var user_input = {
  'username': 'a'
};

utils.entry(do_test, user_input);