var do_test = require("regre_tester");
var path = require('path');
var utils = require(path.resolve(__dirname, "../Utils.js"));

var user_input = {
  'username': 'a'
};

utils.whatWeDoThisTime(do_test, user_input, __dirname);