"use strict";

var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);
var data = {
  posts: {
    id: 1,
    title: 'lowdb is awesome'
  },
  uname: 'typicode',
  cname: 'count'
};

function test(input) {
  // Set some defaults (required if your JSON file is empty)
  db.defaults({
    posts: [],
    user: {},
    count: 0
  }).write(); // Add a post

  db.get('posts').push(data.posts).write(); // Set a user using Lodash shorthand syntax

  db.set('user.name', data.uname).write(); // Increment count

  db.update(data.cname, function (n) {
    return n + 1;
  }).write();
}

var utils = require("../TestcaseUtils.js");

utils.entry(test, data, __dirname);