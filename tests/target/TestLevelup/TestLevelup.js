"use strict";

var levelup = require('levelup');

var leveldown = require('leveldown');

var db = levelup(leveldown('./mydb'));
var ops = [{
  type: 'put',
  key: 'name',
  value: 'Yuri Irsenovich Kim'
}, {
  type: 'put',
  key: 'dob',
  value: '16 February 1941'
}, {
  type: 'put',
  key: 'spouse',
  value: 'Kim Young-sook'
}, {
  type: 'put',
  key: 'occupation',
  value: 'Clown'
}];

var utils = require('../TestcaseUtils.js');

function test(query) {
  db.batch(query, function (err) {//console.log('ok');
  });
}

utils.entry(test, ops);