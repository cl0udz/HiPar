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
var targetRoot = path.resolve(__dirname,'target');
var cacheRoot = path.resolve(__dirname,'../outputs/target_cache/');
if(!fs.existsSync(cacheRoot))
    fs.mkdirSync(cacheRoot);

//generate tasks with absolute path
var tasks = [];
var useCache = true;

for (var i = 0; i < configs.length; i++) {
    configs[i].projPath = path.resolve(__dirname, configs[i].projPath)
    tasks.push(configs[i]);
}



function run(task) {

    
    console.log("Running " + task.projPath);

    // check the useCache variable to dicide whether we use cache

    var projectCache = path.resolve(cacheRoot, task.projPath.split('/target/')[1])
    var completed = path.resolve(projectCache, "complete_instrumented");
    if(!useCache && fs.existsSync(completed))
        fs.rmdirSync(completed);
    var targetPath = utils.instrumentSync(task.projPath, task.instrFiles, task.testName);
    process.chdir(cacheRoot);

    var testName = task.testName;
    console.log(targetPath, testName, task)
    var resDirName = path.resolve(resultsDir, testName);
    fs.mkdirSync(resDirName);

    var newIteration = true;
    var children = [];
    
    // Analysis testcases with Jalangi
    utils.runFile(task.startFile, targetPath, function() {
        console.log("New iteration");
        newIteration = true;
    }, function(cp) {
        console.log("New Process was created");
        children.push(cp);
    });

    console.log("Finished executing " + task.startFile)
    traceCmp.cmp_fini()

    
    if (tasks.length > 0) {
        run(tasks.shift());
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
run(tasks.shift());
