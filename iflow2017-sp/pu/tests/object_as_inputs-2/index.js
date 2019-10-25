"use strict";

//require("@babel/polyfill");
var MongoClient = require('mongodb').MongoClient;

var assert = require('assert');

var ObjectID = require('mongodb').ObjectID; // Connection URL


var url = 'mongodb://localhost:27017'; // // Database Name

var dbName = 'bsontype'; // // Create a new MongoClient

var client = new MongoClient(url); //
// // Use connect method to connect to the Server

client.connect(function (err) {
  assert.equal(null, err);
  var db = client.db(dbName);
  findDocuments(db, function () {
    client.close();
  });
});
var id = {
  "length": 0,
  "toHexString": true,
  "id": {
    "length": 12
  },
  "__proto__": {
    "polluted": "true"
  }
};

var findDocuments = function findDocuments(db, callback) {
  // Get the documents collection
  var collection = db.collection('users'); //     // Find some documents

  obj = {
    "_bsontype": "aaaaa"
  };
  collection.find({
    id: obj
  }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};
