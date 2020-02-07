"use strict";

var Database = require('warehouse');

var db = new Database();
var Post = db.model('posts', {
  title: String,
  created: {
    type: Date,
    default: Date.now
  }
});

function testinsert(query) {
  Post.insert(query);
}

function testfind(query) {
  Post.find(query);
}

var utils = require('../TestcaseUtils.js');

utils.entry(testfind, {
  title: "Hello world"
});
utils.entry(testinsert, {
  title: 'Hello world'
});