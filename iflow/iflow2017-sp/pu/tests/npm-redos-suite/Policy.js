var iflow = require("iflow");
var interestingRegex = require("./RegexsDB");

function sinkBaseCall() {}
function sinkCall() {}

iflow.addSink(sinkBaseCall, "sink-call-base", true);
iflow.addSink(sinkCall, "sink-call");


String.prototype.replace = wrapBase(String.prototype.replace);
String.prototype.match = wrapBase(String.prototype.match);
String.prototype.split = wrapBase(String.prototype.split);
String.prototype.search = wrapBase(String.prototype.search);

RegExp.prototype.exec = wrap(RegExp.prototype.exec);
RegExp.prototype.test = wrap(RegExp.prototype.test);

function wrap(oldFct) {
    return function() {
        if (interestingRegex(this)) {
            // console.log(oldFct.name + " " + arguments[0])
            sinkCall(arguments[0]);
        } else {
            // console.log(this)
        }
        return oldFct.apply(this, arguments);
    }
}

function wrapBase(oldFct) {
    return function() {
        if (arguments.length > 0 && arguments[0] instanceof RegExp) {
            if (interestingRegex(arguments[0])) {
                // console.log(" " + arguments[0]);
                sinkCall(this);
            } else {
                // console.log(arguments[0])
            }
        }
        // var name = "old"+ oldFct.name;
        // if (!this[name])
        //     this[name] = oldFct;
        // return this[name](arguments[0]);
        var result = oldFct.apply(this, arguments);
        return interestingRegex.propagateTaint(result, arguments);
    }
}

console.log("Policy successfuly loaded!");