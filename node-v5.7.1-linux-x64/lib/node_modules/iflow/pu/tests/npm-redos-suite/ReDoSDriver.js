var iflow = require("iflow");
var exec = require("child_process").exec;
var currDir = __dirname;
var path = require('path');
var fs = require('fs');
var SELENIUM_PATH = path.resolve("./selenium-server-standalone-2.47.1.jar");

var configs = [null,
    {
        testName : "debug",
        projPath : ".",
        startFile : "./tests/test-debug.js",
        instrFiles : ["./tests/test-debug.js", "./Policy.js"],
        instrModules: ["debug"]
    },
    {   //TODO problematic
        testName : "lodash",
        projPath : ".",
        startFile : "./tests/test-lodash.js",
        instrFiles : ["./tests/test-lodash.js", "./Policy.js"],
        instrModules: ["lodash"]
    },
    {
        testName : "mime",
        projPath : ".",
        startFile : "./tests/test-mime.js",
        instrFiles : ["./tests/test-mime.js", "./Policy.js"],
        instrModules: ["mime"]
    },
    {   //TODO problematic
        testName : "ajv",
        projPath : ".",
        startFile : "./tests/test-ajv.js",
        instrFiles : ["./tests/test-ajv.js", "./Policy.js"],
        instrModules: ["ajv/lib"]
    },
    {
        testName : "tough-cookie",
        projPath : ".",
        startFile : "./tests/test-tough-cookie.js",
        instrFiles : ["./tests/test-tough-cookie.js", "./Policy.js"],
        instrModules: ["tough-cookie"]
    },
    {
        testName : "fresh",
        projPath : ".",
        startFile : "./tests/test-fresh.js",
        instrFiles : ["./tests/test-fresh.js", "./Policy.js"],
        instrModules: ["fresh"]
    },
    {   //TODO problematic
        testName : "moment",
        projPath : ".",
        startFile : "./tests/test-moment.js",
        instrFiles : ["./tests/test-moment.js", "./Policy.js"],
        instrModules: ["moment"]
    },
    {
        testName : "forwarded",
        projPath : ".",
        startFile : "./tests/test-forwarded.js",
        instrFiles : ["./tests/test-forwarded.js", "./Policy.js"],
        instrModules: ["forwarded"]
    },
    {
        testName : "underscore.string",
        projPath : ".",
        startFile : "./tests/test-underscore-string.js",
        instrFiles : ["./tests/test-underscore-string.js", "./Policy.js"],
        instrModules: ["underscore.string"]
    },
    {   //10
        testName : "ua-parser-js",
        projPath : ".",
        startFile : "./tests/test-ua-parser-js.js",
        instrFiles : ["./tests/test-ua-parser-js.js", "./Policy.js"],
        instrModules: ["ua-parser-js"]
    },
    {
        testName : "parsejson",
        projPath : ".",
        startFile : "./tests/test-parsejson.js",
        instrFiles : ["./tests/test-parsejson.js", "./Policy.js"],
        instrModules: ["parsejson"]
    },
    {
        testName : "useragent",
        projPath : ".",
        startFile : "./tests/test-useragent.js",
        instrFiles : ["./tests/test-useragent.js", "./Policy.js"],
        instrModules: ["useragent"]
    },
    {
        testName : "no-case",
        projPath : ".",
        startFile : "./tests/test-no-case.js",
        instrFiles : ["./tests/test-no-case.js", "./Policy.js"],
        instrModules: ["no-case"]
    },
    {   //TODO problematic
        testName : "marked",
        projPath : ".",
        startFile : "./tests/test-marked.js",
        instrFiles : ["./tests/test-marked.js", "./Policy.js"],
        instrModules: ["marked"]
    },
    {   //15
        testName : "content-type-parser",
        projPath : ".",
        startFile : "./tests/test-content-type-parser.js",
        instrFiles : ["./tests/test-content-type-parser.js", "./Policy.js"],
        instrModules: ["content-type-parser"]
    },
    {   //TODO problematic
        testName : "platform",
        projPath : ".",
        startFile : "./tests/test-platform.js",
        instrFiles : ["./tests/test-platform.js", "./Policy.js"],
        instrModules: ["platform"]
    },
    {
        testName : "timespan",
        projPath : ".",
        startFile : "./tests/test-timespan.js",
        instrFiles : ["./tests/test-timespan.js", "./Policy.js"],
        instrModules: ["timespan"]
    },
    {
        testName : "string",
        projPath : ".",
        startFile : "./tests/test-string.js",
        instrFiles : ["./tests/test-string.js", "./Policy.js"],
        instrModules: ["string"]
    },
    {
        testName : "content",
        projPath : ".",
        startFile : "./tests/test-content.js",
        instrFiles : ["./tests/test-content.js", "./Policy.js"],
        instrModules: ["content"]
    },
    {   //20
        testName : "slug",
        projPath : ".",
        startFile : "./tests/test-slug.js",
        instrFiles : ["./tests/test-slug.js", "./Policy.js"],
        instrModules: ["slug"]
    },
    {
        testName : "htmlparser",
        projPath : ".",
        startFile : "./tests/test-htmlparser.js",
        instrFiles : ["./tests/test-htmlparser.js", "./Policy.js"],
        instrModules: ["htmlparser"]
    },
    {
        testName : "charset",
        projPath : ".",
        startFile : "./tests/test-charset.js",
        instrFiles : ["./tests/test-charset.js", "./Policy.js"],
        instrModules: ["charset"]
    },
    {
        testName : "mobile-detect",
        projPath : ".",
        startFile : "./tests/test-mobile-detect.js",
        instrFiles : ["./tests/test-mobile-detect.js", "./Policy.js"],
        instrModules: ["mobile-detect"]
    },
    {
        testName : "ismobilejs",
        projPath : ".",
        startFile : "./tests/test-ismobilejs.js",
        instrFiles : ["./tests/test-ismobilejs.js", "./Policy.js"],
        instrModules: ["ismobilejs"]
    },
    {
        testName : "dns-sync",
        projPath : ".",
        startFile : "./tests/test-dns-sync.js",
        instrFiles : ["./tests/test-dns-sync.js", "./Policy.js"],
        instrModules: ["dns-sync"]
    }

];
var tests = [1,3,5,6,8,9,10,11,12,13,15,17,18,19,20,21,22,23,24,25];
// var tests = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// var tests = [17];
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
    exec("cp ./RegexDB.js   " + projPath);
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
        console.log("Finished executing " + bigTask.initialConfig.startFile)
        exec("cp " + projPath + "/trace* " + resDirName);
        exec("cp " + projPath + "/lc.json " + resDirName);
        exec("cp " + projPath + "/instrumented.txt " + resDirName);
        exec("cp " + projPath + "/upgrades.json " + resDirName);
        exec("cp " + projPath + "/setup.csv " + resDirName);
        exec("cp " + projPath + "/jalangi_* " + resDirName );
        //deleteFolderRecursive(projPath);
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
                && file != "public" && file != "test" && file != "assets"
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
