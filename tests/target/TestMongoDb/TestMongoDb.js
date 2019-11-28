var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require('path')
var utils = require(path.resolve(__dirname, "../TestcaseUtils.js"))

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';

// first connect test
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

// insert {a : 1}, {a : 2}, {a : 3} to collection 'documents'
const insertManyDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// use findOne to find results from collection 'documents'
const findOneDocuments = function (db, query, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.findOne(query, function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

const findAllDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


// connect and  find result of query 
function test(query) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    insertManyDocuments(db, function () {
      findOneDocuments(db, query, function () {
        client.close();
      });
    });
  });
}

const updateDocument = function (db, query, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a: 2 }
    , { $set: query }, function (err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
}

function testUpdate(query) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    updateDocument(db, query, function () {
      client.close();
    });
  });
}

const removeDocument = function (db, query, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne(query, function (err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}

function testRemove(query) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    removeDocument(db, query, function () {
      client.close();
    });
  });

}

const indexCollection = function (db, query, callback) {
  db.collection('documents').createIndex(
    query,
    null,
    function (err, results) {
      console.log(results);
      callback();
    }
  );
};

function testIndex(query) {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    indexCollection(db, query, function () {
      client.close();
    });
  });
}

// control iterations and pass names to Analysis Func
function main() {
  utils.entry(test, { 'a': 3 });
  utils.entry(testUpdate, { 'b': 2 });
  utils.entry(testRemove, { 'a': 1 })
  utils.entry(testIndex, { 'a': 1 })

}

main()
