var parser = require('mongo-parse');
var path = require('path')
var utils = require(path.resolve(__dirname,"Utils.js"))
// var traceCmp = require(path.resolve(__dirname,"../../../taintable/utils/traceCmp.js"))
var ConcolicValue = require('../../../taintable/dynamic_taint/jalangi/src/js/ConcolicValue');
/* Coverage improving instructions */



var query = {
    "username": "admin",
    "password": "adminPass",
    "id": "101"
}

// get properties of the parameter
var properties = Object.getOwnPropertyNames(query);
console.log("properties: ",properties);

var res = [];

console.log( "source: NOTHING" );
//run with untainted parameter
res.push(parser.parse(query));
// traceCmp.log_trace_and_cmp(-1);

//run with property-tainted parameter
for (var a of properties) {
    console.log("source: " + a);
    var tmp = utils.clone(query);  // generate a copy of query
    tmp[a]   = source(tmp[a]);
    res.push(parser.parse(tmp));
    // traceCmp.log_trace_and_cmp(a);
    // console.log(query[a])
}


console.log("source: THE ROOT" );
//run with root-tainted parameter
varName=utils.varToString({query});
query = source(query);

res.push(parser.parse(query));

// traceCmp.log_trace_and_cmp(varName);
/* End of coverage improving instructions */

function source(source_var) {
    var tmp = new ConcolicValue(source_var,true);
    console.log(tmp)
    return tmp
}

