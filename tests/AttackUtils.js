var callStrings = [];
var fs = require("fs");
const TIMEOUT_CHECK = 3000;
const DUMMY_FILE = "tmp-success-23-42" + Math.random();
const PROP_FLAG = "my-awesome-prop-23-42"
var path = require("path")
const SINK_VALUES_PATH = path.resolve(__dirname, "./resources/sink-values.txt");
var oldCons = console.log;
var filesContainingSinks = {};
var fs = require("fs");
var currentPayloads;

function getWrapper(fct, type) {

    var f = function() {
        var file = _getCallerFile();
        if (file) {
            callStrings.push("[" + type + ":" + file + "]" + arguments[0]);
            filesContainingSinks[file.replace(/:.*/,"")] = 23;
        } else
            callStrings.push("[" + type + "/?]" + arguments[0]);
        return fct.apply(this, arguments);
    };
    f.isWrapped = true;
    return f;
}

function print(str) {
    fs.appendFileSync(SINK_VALUES_PATH, str + "\n*****\n")
    //console.log(str + "\n*****\n");
}

function checkPostTest(payload) {
    var result = 0;
    if (console[PROP_FLAG]) {
        result = 1;
        delete console[PROP_FLAG];
        console[PROP_FLAG] = undefined;
    }
    if (fs.existsSync(DUMMY_FILE) ) {
        result = 1;
        fs.unlinkSync(DUMMY_FILE);
    }
    if (result === 1) {
        //print("Payload=" + payload + ((result === 1) ? " succeded" : " failed") + "; calls:");
        for (var i = 0; i < callStrings.length; i++) {
            if (callStrings[i].indexOf(payload) !== -1 || containsPayload(callStrings[i])) // a bit too strict this one
                print("[malicious]" + callStrings[i]);
            else
                print("[benign]" + callStrings[i]);
        }
    }

    return result
}

function containsPayload(str) {
    //console.log("======")
    //console.log(str);
    for (var i = 0; i < currentPayloads.length; i++) {
        //console.log(currentPayloads[i])
        //console.log(str.indexOf(currentPayloads[i]))
        if (str.indexOf(currentPayloads[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function clearPreTest() {
    callStrings = [];
    oldCons = console.log;
    if (fs.existsSync(DUMMY_FILE)) {
        fs.unlinkSync(DUMMY_FILE);
    }
}

function deliverPayload(result, payloads, cb, tcb) {
    clearPreTest();
    try {
        cb(payloads[result.count]);
    } catch (e) {
        //console.log(e);
    }
    setTimeout(function() {
        result.succeded += checkPostTest(payloads[result.count]);
        result.count++;
        if (result.count < payloads.length)
            deliverPayload(result, payloads, cb, tcb);
        else if (tcb) {
            clearPreTest();
            tcb(result.succeded + "/" + result.count, Object.keys(filesContainingSinks));
        }
    }, TIMEOUT_CHECK);
}

function _getCallerFile() {
    try {
        var err = new Error();
        var callerfile;
        var currentfile;

        var oldE = Error.prepareStackTrace;
        Error.prepareStackTrace = function (err, stack) { return stack; };

        currentfile = err.stack.shift().getFileName();

        while (err.stack.length) {
            var entry = err.stack.shift();
            callerfile = entry.getFileName();

            if(currentfile !== callerfile) {
                Error.prepareStackTrace = oldE;
                return callerfile + ":" + entry.getLineNumber();
            }
        }
    } catch (err) {}
    Error.prepareStackTrace = oldE;
    return undefined;
}


module.exports = {
    payloadsExec : [
        "a;\" touch " + DUMMY_FILE + " #",
        "; touch " + DUMMY_FILE + " #",
        "a'; touch " + DUMMY_FILE + " #",
        " | touch " + DUMMY_FILE + " #",
        "`touch " + DUMMY_FILE + "`",
        "$(touch " + DUMMY_FILE + ")",
	"\"$(touch " + DUMMY_FILE + ")\""
    ],
    payloadsEval : [
        //"require('fs').writeFileSync('" + DUMMY_FILE + "','');" this does not work because we transform our eval in indirect eval
        "console['" + PROP_FLAG + "'] = 23;",
        "Object.defineProperty(console, '" + PROP_FLAG + "',{value:23});"
    ], setup : function(m) {
        filesContainingSinks = {};
        if (!require("child_process").exec.isWrapped)
            require("child_process").exec = getWrapper(require("child_process").exec, "exec");
        if (!eval.isWrapped)
            eval = getWrapper(eval, "eval");
        //if (!Function.isWrapped)
        //    Function = getWrapper(Function, "Function");
        //try {
        //    if (m)
        //        m.exec = getWrapper(m.exec, "custom");
        //} catch (e) {}
    },deliverPayloads: function(payloads, cb, tcb) {
        currentPayloads = payloads;
        deliverPayload({succeded:0, count:0}, payloads, cb, tcb)
    },deleteFolderRecursive : function(path) {
        var fs = require("fs");
        if(fs.existsSync(path) ) {
            fs.readdirSync(path).forEach(function(file,index){
                var curPath = path + "/" + file;
                if(fs.lstatSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    },observedString: function(str) {
        for (var i = 0; i < callStrings.length; i++)
            if (callStrings[i].indexOf(str) != -1)
                return true;
        return false;
    }, getCallStrings: function() {
        return callStrings;
    }, printCallStrings: function() {
        //print("Benign inputs:");
        for (var i = 0; i < callStrings.length; i++) {
            print("[benign]" + callStrings[i]);
        }
    },
    DUMMY_FILE: DUMMY_FILE
}
