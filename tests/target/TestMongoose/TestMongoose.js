"use strict";

var mongoose = require('mongoose');

require('./person.js')();

var Person = mongoose.model('Person');

function Testcreate(query) {
  mongoose.connect('mongodb://localhost/persons', function (err) {
    if (err) throw err;
    Person.create(query, function (err, doc) {
      if (err) throw err;
      mongoose.disconnect();
    });
  });
}

function Testfind(query) {
  mongoose.connect('mongodb://localhost/persons', function (err) {
    if (err) throw err;
    Person.findOne(query, function (err, doc) {
      if (err) throw err;
      mongoose.disconnect();
      process.exit();
    });
  });
}

var initdata = {
  name: 'bill',
  age: 25,
  birthday: new Date().setFullYear(new Date().getFullYear() - 25),
  gender: 'Male',
  likes: ['movies', 'games', 'dogs']
};

var utils = require('../TestcaseUtils.js');

function main() {
  utils.entry(Testcreate, initdata);
  utils.entry(Testfind, {
    "name": "bill"
  });
}

main();