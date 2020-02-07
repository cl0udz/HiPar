"use strict";

var multer = require('multer');

function testmulter(query) {
  var upload = multer(query);
}

var q = {
  dest: 'uploads/'
};

var utils = require('../TestcaseUtils.js');

utils.entry(testmulter, q);