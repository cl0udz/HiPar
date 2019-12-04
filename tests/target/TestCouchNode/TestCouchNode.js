var couchbase = require('couchbase')

function testUpsert(query){
    var couchbase = require('couchbase').Mock;
    var cluster = new couchbase.Cluster();
    var bucket = cluster.openBucket();

    bucket.upsert('testdoc', query, function(err, result) {
    if (err) throw err;

    bucket.get('testdoc', function(err, result) {
        if (err) throw err;

        console.log(result.value);
        // {name: Frank}
    });
})
}

var utils = require('../TestcaseUtils.js');
utils.entry(testUpsert,{name:'Frank'})
