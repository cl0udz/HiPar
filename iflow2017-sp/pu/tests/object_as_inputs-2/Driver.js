var iflow = require("iflow");
var exec = require("child_process").exec;
var currDir = __dirname;
var path = require('path');
var fs = require('fs');
var SELENIUM_PATH = path.resolve("./selenium-server-standalone-2.47.1.jar");
/*
"exec" : true,
"fs" : true,
"http" : true,
"db" : true,
"intf" : false
*/
var configs = [null,
    {
        testName : "fish",
        projPath : ".",
        startFile : "./TestFish.js",
        instrFiles : ["./TestFish.js", "./Policy.js"],
        instrModules: ["fish"],
        sources: "intf"
    },
    {
        testName : "growl",
        projPath : ".",
        startFile : "./TestGrowl.js",
        instrFiles : ["./TestGrowl.js", "./Policy.js"],
        instrModules: ["growl"],
        sources: "intf"
    },
    {
        testName : "gm",
        projPath : ".",
        startFile : "./TestGm.js",
        instrFiles : ["./TestGm.js", "./Policy.js"],
        instrModules: ["gm"],
        sources: "intf"
    },
    {
        testName : "libnotify",
        projPath : ".",
        startFile : "./TestLibnotify.js",
        instrFiles : ["./TestLibnotify.js", "./Policy.js"],
        instrModules: ["libnotify"],
        sources: "intf"
    },
    {
        testName : "mixin-pro",
        projPath : ".",
        startFile : "./TestMixinPro.js",
        instrFiles : ["./TestMixinPro.js", "./Policy.js"],
        instrModules: ["mixin-pro"],
        sources: "intf"
    },
    {
        testName : "modulify",
        projPath : ".",
        startFile : "./TestModulify.js",
        instrFiles : ["./TestModulify.js", "./Policy.js"],
        instrModules: ["modulify"],
        sources: "intf"
    },
    {
        testName : "mol-proto",
        projPath : ".",
        startFile : "./TestMolProto.js",
        instrFiles : ["./TestMolProto.js", "./Policy.js"],
        instrModules: ["mol-proto"],
        sources: "intf"
    },
    {
        testName : "mongoosify",
        projPath : ".",
        startFile : "./TestMongosify.js",
        instrFiles : ["./TestMongosify.js", "./Policy.js"],
        instrModules: ["mongoosify"],
        sources: "intf"
    },
    {
        testName : "m-log",
        projPath : ".",
        startFile : "./TestMLog.js",
        instrFiles : ["./TestMLog.js", "./Policy.js"],
        instrModules: ["m-log"],
        sources: "intf"
    },
    {   //10
        testName : "mobile-icon-resizer",
        projPath : ".",
        startFile : "./TestMobileIconResizer.js",
        instrFiles : ["./TestMobileIconResizer.js", "./Policy.js"],
        instrModules: ["mobile-icon-resizer"],
        sources: "fs"
    },
    {
        testName : "mongodb",
	projPath : ".",
	startFile : "./index.js",
	instrFiles : ["./index.js", "./Policy.js"],
	instrModules: ["mongodb"],
	sources: "db"
    },
    {
        testName : "mongo-parse",
        projPath : ".",
        startFile : "./TestMongoParse.js",
        instrFiles : ["./TestMongoParse.js", "./Policy.js"],
        instrModules: ["mongo-parse"],
        sources: "intf"
    },
    {
        testName : "mongoosemask",
        projPath : ".",
        startFile : "./TestMongooseMask.js",
        instrFiles : ["./TestMongooseMask.js", "./Policy.js"],
        instrModules: ["mongoosemask","mongoosemask/node_modules/lodash"],
        sources: "intf"
    },
    {
        testName : "mongui",
        projPath : ".",
        startFile : "./TestMongui.js",
        instrFiles : ["./TestMongui.js", "./Policy.js"],
        instrModules: ["mongui"],
        sources: "http"
    },
    {
        testName : "mongo-edit",
        projPath : ".",
        startFile : "./TestMongoEdit.js",
        instrFiles : ["./TestMongoEdit.js", "./Policy.js"],
        instrModules: ["mongo-edit"],
        sources: "http"
    },
    {   //15
        testName : "mock2easy",
        projPath : ".",
        startFile : "./TestMock2Easy.js",
        instrFiles : ["./TestMock2Easy.js", "./Policy.js"],
        instrModules: ["mock2easy"],
        sources: "http"
    },
    {   //TODO problematic
        testName : "mqtt-growl",
        projPath : ".",
        startFile : "./TestMqtt.js",
        instrFiles : ["./TestMqtt.js", "./Policy.js", "./node_modules/mqtt-growl/node_modules/mqtt/lib/client.js", "./node_modules/mqtt-growl/node_modules/mqtt/lib/mqtt.js"],
        instrModules: ["mqtt-growl", "growl", "mqtt"],
        sources: "http"
    },
    {
        testName : "chook-growl-reporter",
        projPath : ".",
        startFile : "./TestChookGrowlReporter.js",
        instrFiles : ["./TestChookGrowlReporter.js", "./Policy.js", "./node_modules/chook-growl-reporter/node_modules/growl/lib/growl.js"],
        instrModules: ["chook-growl-reporter"],
        sources: "intf"
    },
    {   //TODO problematic
        testName : "bungle",
        projPath : ".",
        startFile : "./TestBungle.js",
        instrFiles : ["./TestBungle.js", "./Policy.js"],
        instrModules: ["bungle", "growl"],
        sources: "fs"
    },
    {
        testName : "git2json",
        projPath : ".",
        startFile : "./TestGit2Json.js",
        instrFiles : ["./TestGit2Json.js", "./Policy.js"],
        instrModules: ["git2json", "growl"],
        sources: "intf"
    },
    {   //20
        testName : "kerb_request",
        projPath : ".",
        startFile : "./TestKerbRequest.js",
        instrFiles : ["./TestKerbRequest.js", "./Policy.js"],
        instrModules: ["kerb_request"],
        sources: "intf"
    },
    {
        testName : "printer",
        projPath : ".",
        startFile : "./TestPrinter.js",
        instrFiles : ["./TestPrinter.js", "./Policy.js"],
        instrModules: ["printer"],
        sources: "intf"
    },
    {   //TODO problematic
        testName : "keepass-dmenu",
        projPath : ".",
        startFile : "./TestKeepassDmenu.js",
        instrFiles : ["./TestKeepassDmenu.js", "./Policy.js"],
        instrModules: ["keepass-dmenu", "keepass-dmenu/node_modules/yargs"],
        sources: "intf"
    },
    {   //TODO problematic
        testName : "codem-transcode",
        projPath : ".",
        startFile : "./TestCodemTranscode.js",
        instrFiles : ["./TestCodemTranscode.js", "./Policy.js"],
        instrModules: ["codem-transcode"],
        sources: "http"
    },
    {   //TODO problematic: checkFile.bind(this, d, fileName)
        testName : "autolint",
        projPath : ".",
        startFile : "./TestAutolint.js",
        instrFiles : ["./TestAutolint.js", "./Policy.js", "./node_modules/autolint/node_modules/growl/lib/growl.js"],
        instrModules: ["autolint"],
        sources: "fs"
    }

];
prepare(function() {
    console.log("Started prerequisites");
});
//var tests = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,20,21];
//  var tests = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// var tests = [13];

// Only test Mongo-Parse
var tests = [12];
var resultsDir = "/tmp/res/";
deleteFolderRecursive(resultsDir);
fs.mkdirSync(resultsDir);
var tasks = [];

for (var t = 0; t < tests.length; t++) {
    var currProj = configs[tests[t]];
    console.log(currProj);
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

function run(bigTask) {
    // if (bigTask.initialConfig.testName === configs[23].testName || bigTask.initialConfig.testName === configs[24].testName) {
    //     exec("sudo ./node_modules/n/bin/n 0.10.47");
    //     console.log("switched node version to 0.10.47");
    // }

    console.log("Running " + bigTask.initialConfig.projPath);
    var projPath = iflow.instrumentSync(bigTask.initialConfig.projPath, bigTask.initialConfig.instrFiles);
    var testName = bigTask.initialConfig.testName;
    var task = bigTask.policy;
    var resDirName = path.resolve(resultsDir, testName +"-" +  bigTask.srcTrue);
    fs.mkdirSync(resDirName);
    fs.writeFileSync(path.resolve(projPath,'./setup.csv'), path.basename(path.resolve(bigTask.initialConfig.projPath, "..")) + "+");

    var sourcesKeys = Object.keys(bigTask.policy.sources);
    for (var j = 0; j < sourcesKeys.length; j++)
        if (bigTask.policy.sources[sourcesKeys[j]])
            fs.appendFileSync(path.resolve(projPath,'./setup.csv'), sourcesKeys[j]);

    console.log(JSON.stringify(task));
    fs.writeFileSync(path.resolve(projPath,'./configs.json'), JSON.stringify(task));
    fs.writeFileSync(path.resolve(resDirName, "configs.json"), JSON.stringify(task));

    var newIteration = true;
    var children = [];
    iflow.runFile(bigTask.initialConfig.projPath, projPath, bigTask.initialConfig.startFile,function () {
        if (fs.exists(projPath + "/trace1.json"))
            fs.unlink(projPath + "/trace1.json");
        if (fs.exists(projPath + "/lc.json"))
            fs.unlink(projPath + "/lc.json");
        console.log("New iteration");
        newIteration = true;
    }, function (cp) {
        console.log("New Process was created");
        children.push(cp);
    }).then(function() {
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
    });

    function selenium() {
        setTimeout(function () {
            console.log("Running selenium tests");
            newIteration = false;
            var child = exec("java -jar " + SELENIUM_PATH + " -htmlSuite \"*chrome\" \"http://" + (bigTask.initialConfig.credentials ? bigTask.initialConfig.credentials : "") + "127.0.0.1:" + bigTask.initialConfig.port + "\" " + bigTask.initialConfig.seleniumTests + " ./out.txt",
                function (err, ok) {
                    console.log("Selenium tests were done");
                    if (!newIteration) {
                        /* Check if we killed it or it was already dead :) */

                        if (err) {
                            console.log("Error running selenium tests");
                            console.log(err);
                        }
                        setTimeout(function () {
                            var fs = require("fs");
                            var path = require("path");
                            var exec = require("child_process").exec;

                            for (var i = 0; i < children.length; i++) {
                                console.log("Kill " + children[i].pid);
                                try {
                                    children[i].stdout.unpipe(process.stdout);
                                    children[i].stderr.unpipe(process.stderr);
                                    process.kill(children[i].pid + 1, 'SIGINT');
                                }catch (e) {}
                                try {
                                    children[i].kill('SIGINT');
                                } catch (e) {}
                            }

                            setTimeout(function() {
                                exec("cp " + projPath + "/trace* " + resDirName);
                                exec("cp " + projPath + "/upgrades.json " + resDirName);
                                exec("cp " + projPath + "/setup.csv " + resDirName);
                                deleteFolderRecursive(projPath);
                            }, 5000);

                            if (tasks.length > 0) {
                                run(tasks.pop());
                            }
                        }, 3000);
                    } else {
                        console.log("Rerun tests");
                        //TODO remove trace file
                        var exec = require("child_process").exec;
                        exec("rm " + projPath + "/trace* ");
                        selenium();
                    }
                })
        }, 3000);
    }

//    setTimeout(selenium, 20000);

}
run(tasks.pop());

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

function prepare(cb) {
    var exec = require("child_process").exec;
    exec("mongod", cb);
    exec("mosquitto -p 1884", function(a,b) {
        console.log(a);
        console.log(b);
    });
}

process.on('uncaughtException', function(a) {
    console.log(a);
});
