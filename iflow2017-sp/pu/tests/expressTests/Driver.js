var iflow = require("iflow");
var exec = require("child_process").exec;
var currDir = __dirname;
var path = require('path');
var fs = require('fs');
var SELENIUM_PATH = path.resolve("./selenium-server-standalone-2.47.1.jar");

var configs = [null,
    {
        projPath : "./app1/ClientManager/",
        startFile : "./app.js",
        port : 8080,
        instrFiles : ["./app.js", "./Policy.js", "./Jakefile.js", "./app", "./config", "./lib"],
        seleniumTests : "./app1/selenium-tests.html"
    },
    {
        projPath : "./app2/mongo-express/",
        startFile : "./app.js",
        port : 8081,
        instrFiles : ["./routes", "./Policy.js", "./app.js", "./db.js", "./middleware.js", "router.js", "./utils.js", "./json.js", "./filters.js", "./bson.js"],
        seleniumTests : "./app2/selenium-tests.html",
        credentials : "admin:pass@"
    },
    {
        projPath : "./app3/simple-node-blog/",
        startFile : "./app.js",
        port : 3737,
        instrFiles : ["./routes", "./Policy.js", "./app.js", "./libs", "./config"],
        seleniumTests : "./app3/selenium-tests.html"
    },
    {
        projPath : "./app4/nodecellar/",
        startFile : "./server.js",
        port : 3000,
        instrFiles : ["./server.js", "./routes", "./Policy.js"],
        seleniumTests : "./app4/selenium-tests.html"
    },
    {
        projPath : "./app5/swot/",
        startFile : "./server.js",
        port : 3000,
        instrFiles : ["./server.js", "./Policy.js", "./routes", "./lib"],
        seleniumTests : "./app5//selenium-tests.html"
    },
    {
        projPath : "./app6/LightBlog",
        startFile : "./app.js",
        port : 1337,
        instrFiles : ["./models", "./routes", "./app.js", "./Policy.js", "./settings.js"],
        seleniumTests : "./app6/selenium-tests.html"
    },
    {
        projPath : "./app7/lask",
        startFile : "./index.js",
        port : 3000,
        instrFiles : ["./index.js", "./Policy.js", "./models"],
        seleniumTests : "./app7/selenium-tests.html"
    },
    {
        projPath : "./app8/Roll-Call-App",
        startFile : "./bin/www",
        port : 8080,
        instrFiles : ["./app.js", "./Policy.js", "./bin", "./routes"],
        seleniumTests : "./app8/selenium-tests.html"
    },
    {
        projPath : "./app9/express-basic-app", // <---- no flow
        startFile : "./script.sh",
        port : 3000,
        instrFiles : ["./Policy.js", "./handlers", "./helpers", "./middleware", "./app.js", "./models", "./routes", "./services"],
        seleniumTests : "./app9/selenium-tests.html"
    },
    {
        projPath : "./app10/expressboard",
        startFile : "./app.js",
        port : 3000,
        instrFiles : ["./Policy.js", "./app.js", "./routes"],
        seleniumTests : "./app10/selenium-tests.html"
    },
    {
        projPath : "./app11/watcherjs",
        startFile : "./examples/watcher-extended.js",
        port : 7777,
        instrFiles : ["./Policy.js", "./examples/watcher-extended.js", "./src/routes", "./src/connectors.js",
            "./src/constants.js", "./src/database.js", "./src/http-server.js", "./src/logger.js",
            "./src/resolvers.js", "./src/utils.js", "./src/validator.js", "./src/watcher.js"
        ],
        seleniumTests : "./app11/selenium-tests.html"
    },
    {
        projPath : "./app12/jps-passbook-manager",
        startFile : "./server.js",
        port : 1333,
        instrFiles : ["./Policy.js", "./server.js", "./routes"],
        seleniumTests : "./app12/selenium-tests.html"
    },
    {
        projPath : "./app13/mean-stack/RateAMeeting",
        startFile : "./v01_server.js",
        port : 3000,
        instrFiles : ["./Policy.js", "./v01_server.js", "./server_v01"],
        seleniumTests : "./app13/selenium-tests.html"
    },
    {
        projPath : "./app14/newsfeed",
        startFile : "./app.js",
        port : 3000,
        instrFiles : ["./Policy.js", "./app.js", "./server"],
        seleniumTests : "./app14/selenium-tests.html"
    }
];
var tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var resultsDir = "/tmp/res/";
deleteFolderRecursive(resultsDir);
fs.mkdirSync(resultsDir);
var tasks = [];

for (var t = 0; t < tests.length; t++) {
    var currProj = configs[tests[t]];
    currProj.projPath = path.resolve(currProj.projPath);
    currProj.seleniumTests = path.resolve(currProj.seleniumTests);
    var parentProcess = process;

    var configsFile = JSON.parse(fs.readFileSync(path.resolve(__dirname, './configs.json'), 'utf8'));
    var sinksKeys = Object.keys(configsFile.sinks);
    var sourcesKeys = Object.keys(configsFile.sources);
    var i = 0;
    for (var i = 0; i < sourcesKeys.length; i++) {
        var newConfig = JSON.parse(JSON.stringify(configsFile));
        newConfig.sources[sourcesKeys[i]] = true;
        tasks.push({initialConfig:currProj, policy:newConfig});
    }
    fs.writeFileSync(path.resolve(currProj.projPath, "./Policy.js"), fs.readFileSync(path.resolve(__dirname, "./Policy.js")));
}
console.log("Running " + tasks.length + " one-to-one policies");

function run(bigTask) {
    console.log("Running " + bigTask.initialConfig.projPath);
    var projPath = iflow.instrumentSync(bigTask.initialConfig.projPath, bigTask.initialConfig.instrFiles);
    var testName = path.basename(projPath);
    var task = bigTask.policy;
    var resDirName = path.resolve(resultsDir, testName);
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
    iflow.runFile(bigTask.initialConfig.projPath, projPath, bigTask.initialConfig.startFile,function () {
        console.log("New iteration");
        newIteration = true;
    }, function (cp) {
        console.log("New Process was created");
        children.push(cp);
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

    setTimeout(selenium, 20000);

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
