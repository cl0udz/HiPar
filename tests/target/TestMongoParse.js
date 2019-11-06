var parser = require('mongo-parse');
var path = require('path')
var utils = require(path.resolve(__dirname,"Utils.js"))
var traceCmp = require(path.resolve(__dirname,"../../../taintable/utils/traceCmp.js"))
/* Coverage improving instructions */



var query = {
    "username": "admin",
    "password": "adminPass",
    "id": "101"
}


var properties = Object.getOwnPropertyNames(query)
console.log("properties: ",properties)

var res = []
console.log( "source: NOTHING" )
res.push(parser.parse(query))
traceCmp.cmp_trace(-1)
for (var a of properties) {
    console.log("source: " + a)
    var tmp = utils.clone(query) // generate a copy of query
    tmp[a]   = source(tmp[a],a)
    res.push(parser.parse(tmp))
    traceCmp.cmp_trace(a)
    // console.log(query[a])
}


console.log("source: THE ROOT" )

// const displayName = varToString({ someVar })
varName=utils.varToString({query})
query = source(query,varName)

res.push(parser.parse(query))

traceCmp.cmp_trace(varName)
/* End of coverage improving instructions */

function source(source_var) {
    return source_var;
}

