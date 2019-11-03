// var iflow = require("iflow");
var exec = require("child_process").exec;
var currDir = __dirname;
var fs = require('fs');
var execSync = require('child_process').execSync;
var path = require('path');
var Promise = require("bluebird");
var tmp = require('tmp');
var wrench = require('wrench');
var utils = require(path.resolve(__dirname, "Utils"));
var configs = require(path.resolve(__dirname, "configs.json"))
var traceCmp = require(path.resolve(__dirname, "../taintable/utils/traceCmp.js"))

var taintPath = path.resolve(__dirname, "../taintable/dynamic_taint/")
var AnalysisPath = path.resolve(__dirname, "../taintable/dynamic_taint/TaintAnalysis.js")
var resultsDir = "/tmp/res/";
utils.deleteFolderRecursive(resultsDir);
fs.mkdirSync(resultsDir);


//generate tasks with absolute path
var tasks = [];

for (var i = 0; i < configs.length; i++) {
    configs[i].projPath = path.resolve(__dirname, configs[i].projPath)
    tasks.push(configs[i]);
}


function instruModule(modulePath) {

    var projTmpDir = tmp.dirSync();
    wrench.copyDirSyncRecursive(projectDir, projTmpDir.name, {
        forceDelete: true
    });
    //var tmpDir = path.resolve(projTmpDir.name, "./jalangi_tmp")
    //fs.mkdirSync(tmpDir);
    process.chdir(projTmpDir.name);
    var files = [];
    for (var i = 0; i < filesToInstrument.length; i++) {
        files = files.concat(utils.getFilesRec(path.resolve(projTmpDir.name, filesToInstrument[i])));
    }
    var loc = 0;
    var iFileOut = path.resolve(projTmpDir.name, "instrumented.txt");
    fs.writeFileSync(iFileOut, "");
    for (var i = 0; i < files.length; i++) {
        var content = fs.readFileSync(files[i]).toString();

        if (files[i].indexOf("Policy.js") === -1) {
            var stats = sloc(content, "js");
            // console.log(stats.keys);
            loc += stats.source
        }
        // loc +=  fs.readFileSync(files[i]).toString().split(/\r\n|\r|\n/).length;
        console.log(files[i] + " " + loc);
        fs.appendFileSync(iFileOut, files[i] + " " + loc);
        utils.instrumentFile(path.resolve(__dirname, "../../"), files[i]);
    }
    //callback(projTmpDir.name, loc);
    return projTmpDir.name;
}

function AnalysisMoudle() {

}

function runModule(modulePath) {
    console.log("Instrumenting " + modulePath)

}

function run(task) {

    console.log("Running " + task.projPath);

    var projPath = utils.instrumentSync(task.projPath, task.instrFiles, task.instrModules);

    // var projPath = task.projPath
    var testName = task.testName;
    console.log(projPath, testName, task)
    var resDirName = path.resolve(resultsDir, testName);
    fs.mkdirSync(resDirName);



    var newIteration = true;
    var children = [];
    utils.runFile(task.startFile, projPath, function() {
        console.log("New iteration");
        newIteration = true;
    }, function(cp) {
        console.log("New Process was created");
        children.push(cp);
    });

    console.log("Finished executing " + task.startFile)
    traceCmp.cmp_fini()

    utils.deleteFolderRecursive(projPath);
    if (tasks.length > 0) {
        run(tasks.pop());
    } else {
        process.exit(0);
    }

}



function getFilesToInstr(path) {
    var res = [];
    if (fs.existsSync(path)) {
        var list = fs.readdirSync(path)
        list.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory() && file != "node_modules" &&
                file != "public" && file != "test" && file != "assets") { // recurse
                res = res.concat(getFilesToInstr(curPath));
            } else {
                if (file.toString().match(/.*\.js$/)) {
                    res.push(curPath);
                }
            }
        });
    }
    return res;
}



// entry point
run(tasks.pop());