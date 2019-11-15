var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require('path')
var utils = require(path.resolve(__dirname,"../Utils.js"))

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';
 
// first connect test
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});

// insert {a : 1}, {a : 2}, {a : 3} to collection 'documents'
const insertManyDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// use findOne to find results from collection 'documents'
const findOneDocuments = function(db, query, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.findOne(query).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

// init db content
function init(){
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, client) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	 
	  const db = client.db(dbName);
	 
	  insertManyDocuments(db, function() {
	    client.close();
	  });
	});
}

// connect and  find result of query 
function test(query) {
	MongoClient.connect(url, function(err, client) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	 
	  const db = client.db(dbName);
	 
	  findOneDocuments(db, query, function() {
	    client.close();
	  });
	});
}

// control iterations and pass names to Analysis Func
function main(){
	var query = {'a': 3}
	utils.whatWeDoThisTime(test,query,__dirname)
}


main()
