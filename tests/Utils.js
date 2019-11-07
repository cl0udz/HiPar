(function() {
    var execSync = require('child_process').execSync;
    var fs = require('fs');
    var path = require('path');
    var esprima = require('esprima');
    var escodegen = require('escodegen');
    var exec = require('child_process').exec;
    var sloc = require("sloc");
    var Promise = require("bluebird");
    var tmp = require('tmp');
    var wrench = require('wrench');


    var escapeShell = function(cmd) {
        return cmd.replace(/(["\s'$`\\])/g, '\\$1');
    };
    // instrument modules with cached file
    function instruModule(projDir,module,projTmpDir) {
        var modulePath = path.resolve(projectDir, "./node_modules/" + module);
        var cachePath = path.resolve(projectDir, "../cache/node_modules/" + module);
        if (!fs.existsSync(cachePath)){
            execSync('node src/js/commands/instrument.js --outputDir' + cachePath + modulePath);
        }
        wrench.copyDirSyncRecursive(modulePath, path.resolve(projTmpDir,'node_modules/'+ module), {
            forceDelete: true
        });
    }
    // instrument js files 
    function instrumentSync(projectDir, files2Instru, modules2Instru, callback) {
        console.log("instrumentSync:" + projectDir)
        var tmpDirRoot = path.resolve(__dirname,"../outputs/target_tmp")
        if(!fs.existsSync(tmpDirRoot))
            fs.mkdirSync(tmpDirRoot)
        var projTmpDir = tmp.dirSync({"dir":tmpDirRoot}).name;

        console.log("[-]Copying Target to Tempdir")
        wrench.copyDirSyncRecursive(projectDir, projTmpDir, {
            forceDelete: true
        });
        console.log("[+]Copying Target to Tempdir ...done")

        //var tmpDir = path.resolve(projTmpDir, "./jalangi_tmp")
        //fs.mkdirSync(tmpDir);
        process.chdir(projTmpDir);
        var files = [];
        console.log(files2Instru.length + " Files to be instrumented.")
        for (var i = 0; i < files2Instru.length; i++) {
            files = files.concat(getFilesRec(path.resolve(projectDir, files2Instru[i])));
        }
        instruModule(projDir,modules2Instru,projTmpDir)
        
        var iFileOut = path.resolve(projTmpDir, "instrumented.txt");
        fs.writeFileSync(iFileOut, "");
        for (var i = 0; i < files.length; i++) {
            console.log(files[i]);
            fs.appendFileSync(iFileOut, files[i]);
            instrumentFile(files[i], projTmpDir);
        }
        //callback(projTmpDir, loc);
        return projTmpDir;
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
        console.log("executing: " + "node  " + path.resolve(__dirname, "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + ctrlFlowMonPath + " --analysis " + analysisPath + " " + escapeShell(file))
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
