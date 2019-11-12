(function () {
    var execSync = require('child_process').execSync;
    var fs = require('fs');
    var path = require('path');
    var esprima = require('esprima');
    var escodegen = require('escodegen');
    var exec = require('child_process').exec;
    var sloc = require("sloc");
    var tynt = require('tynt');
    var Promise = require("bluebird");
    var tmp = require('tmp');
    var wrench = require('wrench');
    var cacheRoot = path.resolve(__dirname, '../outputs/target_cache/');
    var escapeShell = function (cmd) {
        return cmd.replace(/(["\s'$`\\])/g, '\\$1');
    };

    // instrument js files 

    function instrumentSync(projectDir, files2Instru, testName, callback) {

        var projectCache = path.resolve(cacheRoot, projectDir.split('/target/')[1])
        var completed = path.resolve(projectCache, "complete_instrumented");
        console.log("instrumentSync:" + projectDir);
        var files = [];

        if (fs.existsSync(completed)) {
            console.log(tynt.Green("Cache of module " + testName + " found"));
        }
        else{ 
            console.log(tynt.Red("Cache of module " + testName + " not found. Start instrumenting new files"));
            console.log("[-]Copying all project files to prjectCache");
            //copy all files in project to temp directory
            wrench.copyDirSyncRecursive(projectDir, projectCache, {
                forceDelete: true
            });
            console.log("[+]Copying all project files to projectCache ...done");
            // add module files to file list
            files = files.concat(getFilesRec(path.resolve(projectDir, "./node_modules/")))
        }

        process.chdir(cacheRoot);
        
        console.log(files2Instru.length + " Files to be instrumented.");
        // add Testxxx files to file list 
        for (var i = 0; i < files2Instru.length; i++) {
            files = files.concat(getFilesRec(path.resolve(projectDir, files2Instru[i])));
        }


        // instrument all files in file list
        for (var i = 0; i < files.length; i++) {
            console.log(files[i]);
            instrumentFile(files[i], cacheRoot);
        }
        if(!fs.existsSync(completed))
            fs.mkdirSync(completed);
        return projectCache;
    }

    function instrumentFile(file, cacheRoot) {
        var TanitPath = path.resolve(__dirname, "../taintable/dynamic_taint")
        if (file.match(/^.*\.js$/)) {
            var filePath = path.resolve(file);
            var targetFilePath = path.resolve(cacheRoot, file.toString().split('target/')[1])
            try {
                console.log("node " + path.resolve(TanitPath, "./jalangi/src/js/instrument/esnstrument.js") + " " + escapeShell(filePath) + " --out " + escapeShell(targetFilePath));
                execSync("node " + path.resolve(TanitPath, "./jalangi/src/js/instrument/esnstrument.js") + " " + escapeShell(filePath) + " --out " + escapeShell(targetFilePath));
            } catch (e) {
                console.log(tynt.Red("\nPreprocessor: Error when instrumenting " + file + ". Will ignore this file.\n" + e +"\nPlease try babel to format the target js file to ES5,or just delete it if it's unused file "));
                return;
            }
        }
    }

    //Instrument Single Js File
    function runFile(filename, targetDir, callback, iterationsCallback, creationCallback) {
        var file = path.resolve(targetDir + "/" + filename)
        var analysisPath = path.resolve(__dirname, "../taintable/dynamic_taint/TaintAnalysis.js");
        var ctrlFlowMonPath = path.resolve(__dirname, "../taintable/dynamic_taint/ControlFlowMon.js");
        var HiparVerifyPath = path.resolve(__dirname, "../taintable/dynamic_taint/HiparVerification.js");
        console.log("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/analyses/ChainedAnalyses.js") + " --analysis " + analysisPath + " --analysis " + ctrlFlowMonPath + " " + escapeShell(file))


        //var runProcCtrlFlow = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + ctrlFlowMonPath + " --analysis " + analysisPath + " " + escapeShell(file));
        console.log("[+] Analysis Result :");
        var runProc = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/analyses/ChainedAnalyses.js") + " --analysis " + analysisPath + " --analysis " + ctrlFlowMonPath + " " + escapeShell(file));

        //var runProc = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + analysisPath  + " " + escapeShell(file));
        //console.log("executing: " + "node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + analysisPath + " " + escapeShell(file))
        console.log(runProc.toString());

        console.log("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + HiparVerifyPath + " " + escapeShell(file));
        var verifyProc = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + HiparVerifyPath + " " + escapeShell(file));
        console.log(verifyProc);


    }


    function walkDirectory(dir) {
        var results = [];
        var list = fs.readdirSync(dir)
        list.forEach(function (file) {
            file = dir + '/' + file
            var stat = fs.statSync(file)
            if (stat && stat.isDirectory()) results = results.concat(walkDirectory(file))
            else {
                results.push(path.resolve(file))
            }
        });
        return results;
    }

    function getFilesRec(file) {
        var stat = fs.statSync(file)
        if (!stat) {
            return [];
        } else if (stat.isDirectory()) {
            return walkDirectory(file)
        } else {
            return [path.resolve(file)];
        }
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


    exports.runFile = runFile;
    exports.walkDirectory = walkDirectory;
    exports.getFilesRec = getFilesRec;
    exports.instrumentFile = instrumentFile;
    exports.runFile = runFile;
    exports.deleteFolderRecursive = deleteFolderRecursive;
    exports.instrumentSync = instrumentSync;
    exports.escapeShell = escapeShell;
})();
