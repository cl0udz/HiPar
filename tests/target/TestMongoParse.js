var parser = require('mongo-parse');
var path = require('path')
var traceCmp = require(path.resolve(__dirname,"../../../taintable/utils/traceCmp.js"))
/* Coverage improving instructions */

const varToString = varObj => Object.keys(varObj)[0]

var query = {
    "username": "admin",
    "password": "adminPass",
    "id": "101"
}


var properties = Object.getOwnPropertyNames(query)
console.log("properties: ",properties)

var res = []
console.log("source: NOTHING" )
res.push(parser.parse(query))

for (var a of properties) {
    console.log("source: " + a)
    var tmp = clone(query) // generate a copy of query
    tmp[a]   = source(tmp[a],a)
    res.push(parser.parse(tmp))
    traceCmp.cmp_trace(a)
    // console.log(query[a])
}


console.log("source: THE ROOT" )

const displayName = varToString({ someVar })
query = source(query,varToString(query))

res.push(parser.parse(query))


/* End of coverage improving instructions */

function source(source_var) {
    return source_var;
}


function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;
 
    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
 
    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0,len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}