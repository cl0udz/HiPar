#!/usr/bin/env node
//TODO remove the execs to "node x" to a direct JS code to "x"
var exec = require('child_process').exec;
//var execSync = require('execSync');
var execSync = require('child_process').execSync
var fs = require('fs');
var esprima = require('esprima');
var escodegen = require('escodegen');
var program = require('commander');
var path = require('path');
var IFLOW_NPM_MODULE_NAME = "/iflow/";
var MODULES_NAME = "/node_modules/";
var UTILS_NAME = "uTILs2342ClEAnPC";

var policy = "var ex = require('child_process').exec;\n\tutil.addSink(ex);\n\tutil.addSink(eval);";
var testTemplate = "(function() {\n\tvar util = require('../../../TestUtils');\n\tvar module = require('MODULE_NAME');\n\t" + policy + "\nCALLS})();"


program
    .usage('[options]')
    .option('-i, --instrument', 'Instrument current folder')
    .option('-r, --run', 'Run the test given as parameter')
    .option('-t, --tests', 'Run basic tests')
    .option('-d, --download', 'Download module given as parameter')
    .parse(process.argv);

if(!program.download && !program.execute && !program.instrument && !program.tests && !program.run) {
    program.help();
    exit;
}


var DOWNLOAD_COMMAND = "npm install --prefix . "
if (program.download) {
    console.log("Downloading...")
    console.log("Download node module " + process.argv[3]);
    exec(DOWNLOAD_COMMAND + " " + process.argv[3], function() {});
}

if (program.tests) {
    var testProc = exec(__dirname + "/run_basic_tests_npm.sh \"" + path.resolve(__dirname + "/../../") + "\"");
    testProc.stdout.pipe(process.stdout);
    testProc.stderr.pipe(process.stderr);
}


if (program.run) {
    var analysisPath = __dirname + "/../src/js/analysis/WrappedPrimitivesFlowAnalysis.js";
    var iterations = 1;
    (function recursiveRun() {
        console.log("********* Iteration " + (iterations++) + " *********");
        var runProc = exec("node  --max-stack-size=16000 " + __dirname + "/../../jalangi/src/js/commands/direct.js --smemory --analysis " + analysisPath + " " + process.argv[3],{maxBuffer: 1024 * 1000}, //--debug --prof
            function (error, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error.stack.toString());
                }
                if (stdout.indexOf("Violation of Permissive-Upgrade Policy") != -1) {
                    //recursive call
                    console.log("Must run again")
                    recursiveRun();
                } else {
                    exec("node " + __dirname + "/../src/js/analysis/LightweightTraceInterpreter.js ./trace1.json ./jalangi_tmp/jalangi_sourcemap.json",
                        function (error, stdout, stderr) {
                            console.log(stdout);
                            console.log(stderr);
                            if (error !== null) {
                                console.log('exec error: ' + error);
                            } else {
                                traceTransform("./trace1.json", "./jalangi_tmp/jalangi_sourcemap.json");
                            }
                        });
                }
            });
        runProc.stdout.pipe(process.stdout);
        runProc.stderr.pipe(process.stderr);
        runProc.on('uncaughtException', function(err) {
            console.log(err.stack);
            throw err;
        });
    })();
}

var escapeShell = function(cmd) {
    return cmd.replace(/(["\s'$`\\])/g,'\\$1');
};


if (program.instrument) {
    deleteFolderRecursive("./jalangi_tmp")
    var filesToInstrument;
    if (process.argv[3]) {
        filesToInstrument = [];
        var stat = fs.statSync(process.argv[3]);
        if (!stat || !stat.isDirectory())
            filesToInstrument.push(path.resolve(process.argv[3]));
        else
            filesToInstrument = walk(path.resolve(process.argv[3]));
    } else {
        filesToInstrument = walk(".");
    }
    fs.mkdirSync("jalangi_tmp");
    process.chdir("jalangi_tmp");
    filesToInstrument.forEach(function(name) {
        if (name.match(/^.*\.js$/) && name.indexOf(IFLOW_NPM_MODULE_NAME) === -1) {
            console.log("Instrumenting " + name);
            var pathInstr = path.resolve(name);
            try {
                execSync("node " + __dirname + "/../../jalangi/src/js/instrument/esnstrument.js " + escapeShell(path.resolve(name)) + " --out " + escapeShell(pathInstr));
            } catch (e) {
                console.log("\nPreprocessor: Error when instrumenting " + name + ". Will ignore this file.\n" + e);
                return;
            }
            //attach utils
            var code = fs.readFileSync(pathInstr, "utf8");
            try {
                var ast = esprima.parse(code, {loc: true, range: true, comment: true, tokens: true, raw: true});
            } catch (e) {
                console.log("\nPreprocessor: Error when parsing " + pathInstr + ". Will ignore this file.\n" + e);
                return code;
            }
            ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
            ast.body.splice(0, 0, esprima.parse("var " + UTILS_NAME + " = require(\"iflow\");"));
            var transformedCode = escodegen.generate(ast, {comment: true});
            fs.writeFileSync(pathInstr, transformedCode, "utf8")
            execSync("  node " + __dirname + "/../src/js/analysis/PCCleaner.js " + escapeShell(pathInstr));
        }
    });
    process.chdir("..");
}

function walk(dir) {
    var results = [];
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else {
            results.push(path.resolve(file))
        }
    });
    return results;
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

function getSource(sourceMap, iid) {
    var i = 0;
    for (i = 0; i < sourceMap.length; i++) {
        if (sourceMap[i][iid]) {
            return sourceMap[i][iid];
        }
    }
    return -1
}

function traceTransform(traceFile, sourceMapFile){
    var fs = require("fs");
    var traceContent = fs.readFileSync(traceFile);
    var sourceMapContent = fs.readFileSync(sourceMapFile).toString();
    var lines = traceContent.toString().split("\n");
    var iids = JSON.parse(sourceMapContent);
    var result = ""
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line) {
            if (!line.match(/#.*/)) {
                var elements = line.split(",");
                var iid = elements[elements.length - 1];
                var map = getSource(iids, iid)
                if (map == -1) {
                    console.log("ERROR" + " -- " + iid + " " + line)
                }
                var re = new RegExp(iid + "$");
                line = line.replace(re, iids[0][iid]);
            }
            result += line + "\n";
        }
    }
    fs.writeFileSync(traceFile, result);

}

