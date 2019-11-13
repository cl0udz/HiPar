var path = require('path');
var tynt = require('tynt');
var fs = require('fs')
var traceCmp = require(path.resolve(__dirname, "../../taintable/utils/traceCmp.js"));

//loop iteration
function loopProperty(testFunc, param, ProjectDir) {
    var properties = Object.getOwnPropertyNames(param);
    

    //Running test with purely untainted param
    console.log(tynt.Green('[-]Running test with purely untainted param'));
    testFunc(param);
    traceCmp.log_trace_and_cmp(-1);

    //Running test with with tainted property
    if(typeof(param) == 'string') return;
    console.log("properties: ", properties);
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


    //verify Hipar 
    verifyPath = path.resolve(__dirname, "../../outputs/hidden_attr/" + ProjectDir.split('/').pop() + ".json")
    // console.log(tynt.Green("located verify json file in w"+verifyPath));
    if (fs.existsSync(verifyPath)) {
        console.log(tynt.Green('[-]Verifying hidden Parameter'));
        var result = JSON.parse(fs.readFileSync(verifyPath));
        for (var property in result) {
            for (var hipar_name in result[property]) {
                var hipar_path = result[property][hipar_name];
                // console.log(tynt.Green('adding the magic word to ' + hipar_name + ' of property ' + property));
                var tmp = clone(param); // generate a copy of param
                tmp[property][hipar_name] = "H1P4r";
                verify_hipar(hipar_path, hipar_name);
                testFunc(tmp);
            }
        }
    }
}

function source(source_var) {
    return source_var;
}

function verify_hipar(source_var) {
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