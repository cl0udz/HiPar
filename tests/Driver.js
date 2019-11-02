// var iflow = require("iflow");
var exec = require("child_process").exec;
var currDir = __dirname;
var fs = require('fs');
var path = require('path');
var Promise = require("bluebird");
var tmp = require('tmp');
var wrench = require('wrench');
var utils = require(path.resolve(__dirname, "Utils"));
var configs = require("./init-configs.json")
// console.log(configs)
var tests = [1,2];

var taintPath = path.resolve(__dirname, "../taintable/dynamic_taint/")
var AnalysisPath = path.resolve(__dirname, "../taintable/dynamic_taint/TaintAnalysis.js")
var resultsDir = "/tmp/res/";
utils.deleteFolderRecursive(resultsDir);
fs.mkdirSync(resultsDir);
var tasks = [];

for (var t = 0; t < tests.length; t++) {
    var currProj = configs[tests[t]];
    for (var i = 0; i < currProj.instrModules.length; i++) {
        var currModule = "./node_modules/" + currProj.instrModules[i];
        currProj.instrFiles = currProj.instrFiles.concat(getFilesToInstr(currModule))
    }
    currProj.projPath = path.resolve(currProj.projPath);
    // currProj.seleniumTests = path.resolve(currProj.seleniumTests);
    var parentProcess = process;

    var configsFile = JSON.parse(fs.readFileSync(path.resolve(__dirname, './configs.json'), 'utf8'));
    var sinksKeys = Object.keys(configsFile.sinks);
    var sourcesKeys = Object.keys(configsFile.sources);
    var i = 0;
    if (!currProj.sources) {
        for (var i = 0; i < sourcesKeys.length; i++) {
            var newConfig = JSON.parse(JSON.stringify(configsFile));
            newConfig.sources[sourcesKeys[i]] = true;
            tasks.push({initialConfig: currProj, policy: newConfig, srcTrue: sourcesKeys[i]});
        }
    } else {
        var newConfig = JSON.parse(JSON.stringify(configsFile));
        newConfig.sources[currProj.sources] = true;
        tasks.push({initialConfig: currProj, policy: newConfig, srcTrue: sourcesKeys[i]});
    }
    fs.writeFileSync(path.resolve(currProj.projPath, "./Policy.js"), fs.readFileSync(path.resolve(__dirname, "./Policy.js")));
}
console.log("Running " + tasks.length + " one-to-one policies");


function instruModule(modulePath){

    var projTmpDir = tmp.dirSync();
    wrench.copyDirSyncRecursive(projectDir, projTmpDir.name, { forceDelete: true });
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
        console.log(files[i] +" " + loc);
        fs.appendFileSync(iFileOut, files[i] +" " + loc);
        utils.instrumentFile(path.resolve(__dirname, "../../"), files[i]);
    }
    //callback(projTmpDir.name, loc);
    return projTmpDir.name;
}

function AnalysisMoudle(){

}

function runModule(modulePath){
    console.log("Instrumenting " + modulePath)
    
}

function run(bigTask) {
    // if (bigTask.initialConfig.testName === configs[23].testName || bigTask.initialConfig.testName === configs[24].testName) {
    //     exec("sudo ./node_modules/n/bin/n 0.10.47");
    //     console.log("switched node version to 0.10.47");
    // }

    console.log("Running " + bigTask.initialConfig.projPath);
    console.log("[----------------- CheckPoint2 -----------------]")
    var projPath = utils.instrumentSync(bigTask.initialConfig.projPath, bigTask.initialConfig.instrFiles);
    console.log("[----------------- CheckPoint4 -----------------]")
    // var projPath = bigTask.initialConfig.projPath
    var testName = bigTask.initialConfig.testName;
    var task = bigTask.policy;
    console.log(projPath,testName,task)
    var resDirName = path.resolve(resultsDir, testName +"-" +  bigTask.srcTrue);
    fs.mkdirSync(resDirName);
    fs.writeFileSync(path.resolve(projPath,'./setup.csv'), path.basename(path.resolve(bigTask.initialConfig.projPath, "..")) + "+");

    var sourcesKeys = Object.keys(bigTask.policy.sources);
    for (var j = 0; j < sourcesKeys.length; j++)
        if (bigTask.policy.sources[sourcesKeys[j]])
            fs.appendFileSync(path.resolve(projPath,'./setup.csv'), sourcesKeys[j]);

    fs.writeFileSync(path.resolve(projPath,'./configs.json'), JSON.stringify(task));
    fs.writeFileSync(path.resolve(resDirName, "configs.json"), JSON.stringify(task));

    var newIteration = true;
    var children = [];
    utils.runFile(bigTask.initialConfig.projPath, projPath, bigTask.initialConfig.startFile,function () {
        if (fs.exists(projPath + "/trace1.json"))
            fs.unlink(projPath + "/trace1.json");
        if (fs.exists(projPath + "/lc.json"))
            fs.unlink(projPath + "/lc.json");
        console.log("New iteration");
        newIteration = true;
    }, function (cp) {
        console.log("New Process was created");
        children.push(cp);
    });

    (function() {
        // if (bigTask.initialConfig.testName === configs[23].testName || bigTask.initialConfig.testName === configs[24].testName) {
        //     exec("sudo ./node_modules/n/bin/n 5.7.1");
        //     console.log("switched node version to 5.7.1");
        // }
        console.log("Finished executing " + bigTask.initialConfig.startFile)
        exec("cp " + projPath + "/trace* " + resDirName);
        exec("cp " + projPath + "/lc.json " + resDirName);
        exec("cp " + projPath + "/instrumented.txt " + resDirName);
        exec("cp " + projPath + "/upgrades.json " + resDirName);
        exec("cp " + projPath + "/setup.csv " + resDirName);
        // deleteFolderRecursive(projPath);
        if (tasks.length > 0) {
            run(tasks.pop());
        } else {
            process.exit(0);
        }
    })();
}




function getFilesToInstr(path) {
    var res = [];
    if (fs.existsSync(path)) {
        var list = fs.readdirSync(path)
        list.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory() && file != "node_modules"
                && file != "public" && file != "test" && file != "assets") { // recurse
                res = res.concat(getFilesToInstr(curPath));
            } else {
                if (file.toString().match(/.*\.js$/)){
                    res.push(curPath);
                }
            }
        });
    }
    return res;
}



// entry point
console.log("[----------------- CheckPoint1 -----------------]")
run(tasks.pop());