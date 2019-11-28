"use strict";

var nano = require('nano')('http://localhost:5984');
var utils = require('../TestcaseUtils.js');
var alice;


nano.db.create('alice').catch((err) => {
    console.log(err)
    // failure - error information is in 'err'
  }).then(function (response) {
  alice = nano.use('alice');
  return alice.insert({
    happy: true
  }, 'rabbit');
}).then(function (response) {
  console.log('you have inserted a document with an _id of rabbit');
  console.log(response);
  utils.entry(testInsert, {
    happy: true
  });
  utils.entry(testBulk, {
    a: 1,
    b: 2
  });
  utils.entry(testIndex, {
    fields: ['foo']
  });
  utils.entry(testSearch, {
    q: 'cat'
  });
  utils.entry(testView, {
    'keys': ['Hearts', 'Clubs']
  });
}).then(function(response){
    nano.db.destroy('alice');
}).catch((err) => {
    console.log(err)
    // failure - error information is in 'err'
  });


function testInsert(query) {
  alice.insert(query, 'test');
}

function testBulk(query) {
  var documents = [query, {
    _id: 'tiger',
    striped: true
  }];
  alice.bulk({
    docs: documents
  }).then(function (body) {
    console.log(body);
  });
}

function testIndex(query) {
  var indexDef = {
    index: query,
    name: 'fooindex'
  };
  alice.createIndex(indexDef).then(function (result) {
    console.log(result);
  });
}

function testSearch(query) {
  alice.search('characters', 'happy_ones', query).then(function (doc) {
    console.log(doc);
  });
}

function testView(query) {
  alice.view('characters', 'soldiers', query).then(function (body) {
    body.rows.forEach(function (doc) {
      console.log(doc.value);
    });
  });
}

