(function() {
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
    var cacheDir = path.resolve(projectDir,'../outputs/target_cache');
    var completed = path.resolve(cacheDir,"complete_instrumented");
    var escapeShell = function(cmd) {
        return cmd.replace(/(["\s'$`\\])/g, '\\$1');
    };

    // instrument js files 

    function instrumentSync(projectDir, files2Instru, modules2Instru, callback) {

        

        console.log("instrumentSync:" + projectDir);

        if(fs.existsSync(completed)){
            console.log(tynt.Green("Cache found"));
            return cacheDir;
        }
        else console.log(tynt.Red("Cache not found. Start instrumenting new files"));

        console.log("[-]Copying all project files to cacheDir");
        //copy all files in project to temp directory
        wrench.copyDirSyncRecursive(projectDir, cacheDir, {
            forceDelete: true
        });
        console.log("[+]Copying all project files to cacheDir ...done");

        process.chdir(cacheDir);
        var files = [];
        console.log(files2Instru.length + " Files to be instrumented.");
        // add Testxxx files to file list 
        for (var i = 0; i < files2Instru.length; i++) {
            files = files.concat(getFilesRec(path.resolve(projectDir, files2Instru[i])));
        }
        // add module files to file list
        for (var i = 0; i < modules2Instru.length; i++) {
            files = files.concat(getFilesRec(path.resolve(projectDir, "./node_modules/" + modules2Instru)))
        }
        // output all instrumented file to instrumented.txt
        var iFileOut = path.resolve(cacheDir, "instrumented.txt");
        fs.writeFileSync(iFileOut, "");
        // instrument all files in file list
        for (var i = 0; i < files.length; i++) {
            console.log(files[i]);
            fs.appendFileSync(iFileOut, files[i]);
            instrumentFile(files[i], cacheDir);
        }
        //callback(projTmpDir, loc);
        //Back up instrumented files to cache 
        if(useCache) fs.mkdirSync(completed);
        return cacheDir;
    }

    function instrumentFile(file, tmpProjPath) {
        var TanitPath = path.resolve(__dirname, "../taintable/dynamic_taint")
        if (file.match(/^.*\.js$/)) {
            var filePath = path.resolve(file);
            var tmpFilePath = path.resolve(tmpProjPath, file.toString().split('target/')[1])
            try {
                console.log("node " + path.resolve(TanitPath, "./jalangi/src/js/instrument/esnstrument.js") + " " + escapeShell(filePath) + " --out " + escapeShell(tmpFilePath));
                execSync("node " + path.resolve(TanitPath, "./jalangi/src/js/instrument/esnstrument.js") + " " + escapeShell(filePath) + " --out " + escapeShell(tmpFilePath));
            } catch (e) {
                console.log("\nPreprocessor: Error when instrumenting " + file + ". Will ignore this file.\n" + e);
                return;
            }
        }
    }

    //Instrument Single Js File
    function runFile(filename, tmpProjPath, callback, iterationsCallback, creationCallback) {
        var file = path.resolve(tmpProjPath + "/" + filename)
        var analysisPath = path.resolve(__dirname, "../taintable/dynamic_taint/TaintAnalysis.js")
        var ctrlFlowMonPath = path.resolve(__dirname, "../taintable/dynamic_taint/ControlFlowMon.js")
        var mainProc = null;
        console.log("=========================================================")
        console.log("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/analyses/ChainedAnalyses.js") + " --analysis " + analysisPath + " --analysis " + ctrlFlowMonPath + " " + escapeShell(file))
        console.log("[+] ControlFlowMon  Result :")
        
        //var runProcCtrlFlow = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + ctrlFlowMonPath + " --analysis " + analysisPath + " " + escapeShell(file));
        var runProc = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/analyses/ChainedAnalyses.js") + " --analysis " + analysisPath + " --analysis " + ctrlFlowMonPath + " " + escapeShell(file));

        //var runProc = execSync("node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + analysisPath  + " " + escapeShell(file));
        //console.log("=========================================================")
        //console.log("executing: " + "node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + analysisPath + " " + escapeShell(file))
        console.log("[+] Analysis Result :")
        console.log(runProc.toString())
        console.log("=========================================================")


    }


    function walkDirectory(dir) {
        var results = [];
        var list = fs.readdirSync(dir)
        list.forEach(function(file) {
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
            list.forEach(function(file, index) {
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
