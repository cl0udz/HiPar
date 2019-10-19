var iflow = require("iflow");
var exec = require("child_process").exec;
var currDir = __dirname;
var path = require('path');
var fs = require('fs');
var SELENIUM_PATH = path.resolve("./selenium-server-standalone-2.47.1.jar");

var configs = [null,
    {
        testName : "ip",
        projPath : ".",
        startFile : "./tests/test-ip.js",
        instrFiles : ["./tests/test-ip.js", "./Policy.js"],
        instrModules: ["ip"]
    },
    {
        testName : "concat-stream",
        projPath : ".",
        startFile : "./tests/test-concat-stream.js",
        instrFiles : ["./tests/test-concat-stream.js", "./Policy.js"],
        instrModules: ["concat-stream"]
    },
    {
        testName : "bl",
        projPath : ".",
        startFile : "./tests/test-bl.js",
        instrFiles : ["./tests/test-bl.js", "./Policy.js"],
        instrModules: ["bl"]
    },
    {
        testName : "request",
        projPath : ".",
        startFile : "./tests/test-request.js",
        instrFiles : ["./tests/test-request.js", "./Policy.js"],
        instrModules: ["request"]
    },
    {
        testName : "sequelize",
        projPath : ".",
        startFile : "./tests/test-sequelize.js",
        instrFiles : ["./tests/test-sequelize.js", "./Policy.js"],
        instrModules: ["sequelize"]
    },
    {
        testName : "ws",
        projPath : ".",
        startFile : "./tests/test-ws.js",
        instrFiles : ["./tests/test-ws.js", "./Policy.js"],
        instrModules: ["ws"]
    },
    {
        testName : "floody",
        projPath : ".",
        startFile : "./tests/test-floody.js",
        instrFiles : ["./tests/test-floody.js", "./Policy.js"],
        instrModules: ["floody"]
    },
    {
        testName : "tunnel-agent",
        projPath : ".",
        startFile : "./tests/test-tunnel-agent.js",
        instrFiles : ["./tests/test-tunnel-agent.js", "./Policy.js"],
        instrModules: ["tunnel-agent"]
    },
    {
        testName : "mongoose",
        projPath : ".",
        startFile : "./tests/test-mongoose.js",
        instrFiles : ["./tests/test-mongoose.js", "./Policy.js"],
        instrModules: ["mongoose"]
    },
    {
        testName : "yp_js",
        projPath : ".",
        startFile : "./tests/yp_js.js",
        instrFiles : ["./tests/yp_js.js", "./Policy.js"],
        instrModules: []
    },
    {
        testName : "fonts",
        projPath : ".",
        startFile : "./tests/fonts.js",
        instrFiles : ["./tests/fonts.js", "./Policy.js"],
        instrModules: []
    },
    {
        testName : "extensions",
        projPath : ".",
        startFile : "./tests/extensions.js",
        instrFiles : ["./tests/extensions.js", "./Policy.js"],
        instrModules: []
    },
    {
        testName : "hif-check",
        projPath : ".",
        startFile : "./tests/test-hif-check.js",
        instrFiles : ["./tests/test-hif-check.js"],
        instrModules: []
    },
    {
        testName : "fonts2",
        projPath : ".",
        startFile : "./tests/fonts2.js",
        instrFiles : ["./tests/fonts2.js"],
        instrModules: []
    },
    {
        testName : "fonts3",
        projPath : ".",
        startFile : "./tests/fonts3.js",
        instrFiles : ["./tests/fonts3.js"],
        instrModules: []
    },
    {
        testName : "doNotTrack",
        projPath : ".",
        startFile : "./tests/doNotTrack.js",
        instrFiles : ["./tests/doNotTrack.js"],
        instrModules: []
    },
    {
        testName : "login",
        projPath : ".",
        startFile : "./tests/login.js",
        instrFiles : ["./tests/login.js"],
        instrModules: []
    },
    {
        testName : "html5Flags",
        projPath : ".",
        startFile : "./tests/html5Flags.js",
        instrFiles : ["./tests/html5Flags.js"],
        instrModules: []
    },
    {
        testName : "extensionGhostery",
        projPath : ".",
        startFile : "./tests/extensionGhostery.js",
        instrFiles : ["./tests/extensionGhostery.js"],
        instrModules: []
    },
    {
        testName : "resourceReaderFirefox",
        projPath : ".",
        startFile : "./tests/resourceReaderFirefox.js",
        instrFiles : ["./tests/resourceReaderFirefox.js"],
        instrModules: []
    }
];

var tests = [1,2,3,4,6,7,8,10,11,12,13,14,15,16,17,18,19,20];
// var tests = [6];
var resultsDir = "/tmp/res/";
deleteFolderRecursive(resultsDir);
fs.mkdirSync(resultsDir);
var tasks = [];

for (var t = 0; t < tests.length; t++) {
    var currProj = configs[tests[t]];
    for (var i = 0; i < currProj.instrModules.length; i++) {
        var currModule = "./node_modules/" + currProj.instrModules[i];
        currProj.instrFiles = currProj.instrFiles.concat(getFilesToInstr(currModule))
    }
    currProj.projPath = path.resolve(currProj.projPath);
    var parentProcess = process;

    tasks.push({initialConfig: currProj, srcTrue: "intf"});

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
    // var task = bigTask.policy;
    var resDirName = path.resolve(resultsDir, testName +"-" +  bigTask.srcTrue);
    fs.mkdirSync(resDirName);
    // exec("cp ./PolicyHelper.js   " + projPath);
    // fs.writeFileSync(path.resolve(projPath,'./setup.csv'), path.basename(path.resolve(bigTask.initialConfig.projPath, "..")) + "+");
    //
    // var sourcesKeys = Object.keys(bigTask.policy.sources);
    // for (var j = 0; j < sourcesKeys.length; j++)
    //     if (bigTask.policy.sources[sourcesKeys[j]])
    //         fs.appendFileSync(path.resolve(projPath,'./setup.csv'), sourcesKeys[j]);
    //
    // fs.writeFileSync(path.resolve(projPath,'./configs.json'), JSON.stringify(task));
    // fs.writeFileSync(path.resolve(resDirName, "configs.json"), JSON.stringify(task));

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
        setTimeout(function () {
            console.log("Finished executing " + bigTask.initialConfig.startFile)
            exec("cp " + projPath + "/trace* " + resDirName);
            exec("cp " + projPath + "/instrumented.txt " + resDirName);
            exec("cp " + projPath + "/lc.json " + resDirName);
            exec("cp " + projPath + "/upgrades.json " + resDirName);
            exec("cp " + projPath + "/setup.csv " + resDirName);
            exec("cp " + projPath + "/jalangi_* " + resDirName);
            //deleteFolderRecursive(projPath);
            if (tasks.length > 0) {
                run(tasks.pop());
            } else {
                process.exit(0);
            }
        }, 2000);
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
                && file != "public" && file != "test" && file != "assets"
                && file != "bin"
                    //remove these two lines
                && file != "min" && file != "locale") { // recurse
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

process.on('uncaughtException', function(a) {
    console.log(a);
});
