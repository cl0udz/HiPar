var dirtraces = process.argv[2];
var resSubtraces = process.argv[3];
var fs = require('fs');
if (fs.existsSync(resSubtraces)) {
    deleteFolderRecursive(resSubtraces);
}
fs.mkdirSync(resSubtraces);
var path = require('path');
var exec = require('exec-sync');
var tests = fs.readdirSync(dirtraces);
var TraceConstants = require("../../src/js/analysis/TraceConstants.js");
var TRACE_ENTRY_SEP = ',';

for (var i = 0; i < tests.length; i++) {
    var resDir = path.resolve(dirtraces, tests[i]);
    if (fs.lstatSync(resDir).isDirectory()) {
        var result = getSinksAndSource(resDir);
        var sinks = result.sinks;
        var sources = result.sources;
        var count = 0;

        console.log("Generate " + (sources.length  *  sinks.length) + " subtraces");
        for (var j = 0; j < sources.length; j++) {
            for (var k = 0; k < sinks.length; k++) {
                count++;
                var subtraceDir = path.resolve(resSubtraces, tests[i] + "-" + count);
                generateSubtrace(resDir, subtraceDir, sources[j], sinks[k]);
                fs.appendFileSync(path.resolve(subtraceDir, "setup.csv"), "-" + j + "-" + k)
            }
        }
    }
}
console.log("Done");

function getSinksAndSource(resDir) {
    var sources = [];
    var sinks = [];
    var fs = require('fs');
    var files = fs.readdirSync(resDir);
    files.sort(function(a,b) {
        if (a.match(/trace.*json$/) && b.match(/trace.*json$/)) {
            var noA = parseInt(a.replace(/.json$/, "").match(/\d+$/)[0]);
            var noB = parseInt(b.replace(/.json$/, "").match(/\d+$/)[0]);
            return noA - noB;
        }
        return a - b;s
    });

    for (var index in files) {
        var name = files[index];
        var path = resDir + "/" + name;
        if (path.match("trace[0-9]*.json$")) {
            var content = fs.readFileSync(path).toString();
            var entries = content.split("\n");
            for (var indexOp = 1; indexOp < entries.length; indexOp++) {
                if (entries[indexOp].length && entries[indexOp][0] != '#') {
                    var entry = entries[indexOp].split(TRACE_ENTRY_SEP);
                    //if (entry[0] == TraceConstants.SOURCE_OP) { //&& sources.indexOf(entry[4]) === -1) {
                    if (entry[0] == TraceConstants.SOURCE_OP && sources.indexOf(entry[4]) === -1) {
                        sources.push(entry[4]);
                    }

                    if (entry[0] == TraceConstants.FLOW_OP) {
                        sinks.push(entries[indexOp]);
                    }
                }
            }
        }
    }
    return {sources:sources, sinks:sinks};
}

function generateSubtrace(resDir, subtraceDir, source, sink) {
    var fs = require('fs');
    var path = require('path');
    var wrench = require('wrench');
    wrench.copyDirSyncRecursive(resDir, subtraceDir);
    var files = fs.readdirSync(resDir);
    files.sort(function(a,b) {
        if (a.match(/trace.*json$/) && b.match(/trace.*json$/)) {
            var noA = parseInt(a.replace(/.json$/, "").match(/\d+$/)[0]);
            var noB = parseInt(b.replace(/.json$/, "").match(/\d+$/)[0]);
            return noA - noB;
        }
        return a - b;s
    });

    for (var index in files) {
        var name = files[index];
        var pathSrc = resDir + "/" + name;
        var pathDest = subtraceDir + "/" + name;
        if (pathSrc.match("trace[0-9]*.json$")) {
            var content = fs.readFileSync(pathSrc).toString();
            fs.writeFileSync(pathDest, "");
            var entries = content.split("\n");
            for (var indexOp = 1; indexOp < entries.length; indexOp++) {
                if (entries[indexOp].length && entries[indexOp][0] != '#') {
                    var entry = entries[indexOp].split(TRACE_ENTRY_SEP);
                    if (entry[0] == TraceConstants.SOURCE_OP) {
                        if (entry[4] === source) {
                        //if (entries[indexOp] === source) {
                            fs.appendFileSync(pathDest, entries[indexOp] + "\n");
                        }
                    } else if (entry[0] == TraceConstants.FLOW_OP) {
                        if (entries[indexOp] === sink) {
                            fs.appendFileSync(pathDest, entries[indexOp] + "\n");
                        }
                    } else {
                        fs.appendFileSync(pathDest,entries[indexOp] + "\n");
                    }
                } else {
                    fs.appendFileSync(pathDest,entries[indexOp] + "\n");
                }
            }
        }
    }
}

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        var list = fs.readdirSync(path)
        list.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}
