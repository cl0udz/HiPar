var path = require('path');
var tynt = require('tynt');
var traceCmp = require(path.resolve(__dirname, "../../taintable/utils/traceCmp.js"));

//loop iteration
function loopProperty(testFunc, param) {
    var properties = Object.getOwnPropertyNames(param);
    console.log("properties: ", properties);

    //Running test with purely untainted param
    console.log(tynt.Green('[-]Running test with purely untainted param'));
    testFunc(param);
    traceCmp.log_trace_and_cmp(-1);
    
    //Running test with with tainted property
    for (var property of properties) {
        console.log(tynt.Green('[-]Running test with tainted property: ' + property));
        var tmp = clone(param); // generate a copy of param
        tmp[property] = source(tmp[property], property);
        testFunc(tmp);
        traceCmp.log_trace_and_cmp(property);
    }

    //Running test with param tainted in root
    var varName = varToString(param);
    param = source(param, varName);
    console.log(tynt.Green('[-]Running test with param tainted in root'));
    testFunc(param);
    traceCmp.log_trace_and_cmp(varName);
}

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
        for (var i = 0, len = obj.length; i < len; ++i) {
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

function varToString(varObj) {
    return Object.keys(varObj)[0]
}

exports.clone = clone;
exports.varToString = varToString;
exports.loopProperty = loopProperty;