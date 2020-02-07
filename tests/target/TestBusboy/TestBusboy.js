"use strict";

var Busboy = require('busboy');

function test(query) {
  var busboy = new Busboy(query);
}

var utils = require('../TestcaseUtils.js');

var q = {
  headers: {
    "Host": "sss",
    "content-type": "multipart/form-data; boundary=---------------------------30333176734664",
    "a": "b"
  }
};
utils.entry(test, q);