var tmp = require('tmp');
var fs = require("fs");
var path = require("path");
var wrench = require('wrench');
var filesToInstrument = ["./basicTests/NestedCalls.js"];
var utils = require("../src/js/analysis/AnalysisUtils.js");
var analysis = path.resolve("../src/js/analysis/WrappedPrimitivesFlowAnalysis.js");
var fileToRun = "./basicTests/NestedCalls.js";

var projTmpDir = tmp.dirSync();
wrench.copyDirSyncRecursive(path.resolve(__dirname, "../tests"), projTmpDir.name, { forceDelete: true });
process.chdir(projTmpDir.name);

var files = [];
for (var i = 0; i < filesToInstrument.length; i++) {
    files = files.concat(utils.getFilesRec(path.resolve(projTmpDir.name, filesToInstrument[i])));
}
for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
    utils.instrumentFile(path.resolve(__dirname, "../.."), files[i]);
}
utils.runFile(path.resolve(__dirname, "../.."), path.resolve(projTmpDir.name, fileToRun), path.resolve(__dirname, "../tests"), projTmpDir.name, function(a){utils.deleteFolderRecursive(projTmpDir.name); console.log(a)}, function(a){console.log(a)}, function(a){console.log(a)});