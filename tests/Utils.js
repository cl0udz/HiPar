(function() {
	var execSync = require('child_process').execSync;
	var fs = require('fs');
    var path = require('path');
    var esprima = require('esprima');
    var escodegen = require('escodegen');
    var exec = require('child_process').exec;
    var sloc = require("sloc");
    var escapeShell = function(cmd) {
        return cmd.replace(/(["\s'$`\\])/g,'\\$1');
    };
    var UTILS_NAME = "uTILs2342ClEAnPC";


    function instrumentSync(projectDir, filesToInstrument, callback) {
	    //TODO remove this duplicate code
	    console.log("instrumentSync:"+projectDir)
	    var Promise = require("bluebird");
	    var tmp = require('tmp');
	    var wrench = require('wrench');
	    var fs = require("fs");
	    var path = require("path");

	    var projTmpDir = tmp.dirSync();

	    console.log("[-]Copying Target to Tempdir")
	    wrench.copyDirSyncRecursive(projectDir, projTmpDir.name, { forceDelete: true });
	    console.log("[+]Copying Target to Tempdir ...done")

	    //var tmpDir = path.resolve(projTmpDir.name, "./jalangi_tmp")
	    //fs.mkdirSync(tmpDir);
	    process.chdir(projTmpDir.name);
	    var files = [];
	    console.log(filesToInstrument.length)
	    for (var i = 0; i < filesToInstrument.length; i++) {
	        files = files.concat(getFilesRec(path.resolve(projTmpDir.name, filesToInstrument[i])));
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
	        instrumentFile(path.resolve(__dirname, "../taintable/dynamic_taint"), files[i]);
	    }
	    //callback(projTmpDir.name, loc);
	    return projTmpDir.name;
    }

    function instrumentFile(projePath, name) {
        if (name.match(/^.*\.js$/)) {
            console.log("Instrumenting ~" + name);
            var pathInstr = path.resolve(name);
            try {
		console.log("node " + path.resolve(projePath, "./jalangi/src/js/instrument/esnstrument.js") + " "  + escapeShell(path.resolve(name)) + " --out " + escapeShell(pathInstr));
                execSync("node " + path.resolve(projePath, "./jalangi/src/js/instrument/esnstrument.js") + " "  + escapeShell(path.resolve(name)) + " --out " + escapeShell(pathInstr));
            } catch (e) {
                console.log("\nPreprocessor: Error when instrumenting " + name + ". Will ignore this file.\n" + e);
                return;
            }
            //attach utils
            var code = fs.readFileSync(pathInstr, "utf8");
            try {
                var ast = esprima.parse(code, {loc: true, range: true, comment: true, tokens: true, raw: true});
            } catch (e) {
                console.log("\nPreprocessor: Error when parsing " + pathInstr + ". Will ignore this file.\n" + e);
                return code;
            }
            ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
            ast.body.splice(0, 0, esprima.parse("var " + UTILS_NAME + " = require(\"iflow\");"));
            var transformedCode = escodegen.generate(ast, {comment: true});
            fs.writeFileSync(pathInstr, transformedCode, "utf8")
            execSync("node " + path.resolve( __dirname + "/PCCleaner.js") + " " + escapeShell(pathInstr));
        }
    }


function runFile(filename, tmpProjPath, callback, iterationsCallback, creationCallback) {
	var file = path.resolve(tmpProjPath+"/"+filename)
    var analysisPath = path.resolve(__dirname, "../taintable/dynamic_taint/TaintAnalysis.js")
    var mainProc = null;
    console.log("executing: "+"node  " + path.resolve(__dirname , "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + analysisPath + " " + escapeShell(file) + " >> /tmp/result.txt ")
    var runProc = exec("node  " + path.resolve(__dirname , "../taintable/dynamic_taint/jalangi/src/js/commands/direct.js") + " --smemory --analysis " + analysisPath + " " + escapeShell(file) + " >> /tmp/result.txt ", // --debug --max-stack-size=16000
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error.stack);
            }
           
        });
    runProc.stdout.pipe(process.stdout);
    runProc.stderr.pipe(process.stderr);
    console.log("Install cleanup");
    if (mainProc === null)
        mainProc = runProc;
    mainProc.on('exit', function () {
        console.log("Cleanup " + runProc.pid);
        try {
            runProc.kill();
            process.kill(runProc.pid + 1);// No idea why two processes are created. :(
        } catch (e) {
            //best effort
        }
    });
    runProc.on('uncaughtException', function(err) {
        console.log(err.stack);
        if (err.stack.toString().indexOf("deprecated") === -1)
            throw err;
    });
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
    exports.escapeShell=escapeShell;
})();
