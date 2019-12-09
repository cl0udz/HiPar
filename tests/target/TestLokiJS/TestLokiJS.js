"use strict";

require("core-js/modules/es.array.find");

var loki = require('lokijs');

var db = new loki("quickstart1.db");
var users = db.addCollection("users");
users.insert({
  name: 'odin',
  age: 50
});
users.insert({
  name: 'thor',
  age: 35
});
var result = users.find({
  age: {
    $lte: 35
  }
});
console.log(result);
var user = {
  name: 'ex1t',
  age: 18
};

function testInsert(user) {
  users.insert(user);
}

var query = {
  age: {
    $lte: 35
  }
};

function testFind(query) {
  console.log(users.find(query));
}

var utils = require('../TestcaseUtils.js');

utils.entry(testInsert, user);
utils.entry(testFind, query); // dumps array with 1 doc (thor) to console