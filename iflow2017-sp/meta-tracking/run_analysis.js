var tmp = require('tmp');
var fs = require("fs");
var path = require("path");
var wrench = require('wrench');
var filesToInstrument = ["./tests"];
var utils = require("../pu/src/js/analysis/AnalysisUtils.js");
var analysis = path.resolve("./src/MetaTrackingAnalysis.js");
var fileToRun = "./tests/BasicCases.js";

var projTmpDir = tmp.dirSync();
wrench.copyDirSyncRecursive(".", projTmpDir.name, { forceDelete: true });
process.chdir(projTmpDir.name);

var files = [];
for (var i = 0; i < filesToInstrument.length; i++) {
    files = files.concat(utils.getFilesRec(path.resolve(projTmpDir.name, filesToInstrument[i])));
}
for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
    utils.instrumentFile(path.resolve(__dirname, ".."), files[i]);
}
utils.runFileCustomAnalysis(path.resolve(__dirname, ".."), path.resolve(projTmpDir.name, fileToRun), analysis);
utils.deleteFolderRecursive(projTmpDir);