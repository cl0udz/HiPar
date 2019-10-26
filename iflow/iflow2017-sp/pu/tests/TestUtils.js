(function() {

    var LOW_LEVEL = 0;
    var PLEAKED_LEVEL = 1;
    var HIGH_LEVEL = 2;

    function addSource(sourceFunc, label, sourceID) {
        return sourceFunc;
    }
    function addSink(sinkFunc, sinkID, isBaseSink) {
        return sinkFunc;
    }
    function tolerate(varTo, varFrom) {
        return varTo
    }
    function sink(value) {
        console.log(value);
        return value;
    }
    function source(value, label, sourceID) {
        return value;
    }
    function cleanPC(iid){
    }
    function downgrade(value){
    }
    function unwrap(value) {

    }
    function addCallbackSource(fct, paramIndex, fctArgIndex, label){
    }

    function isAutoWrapped(object) {
        var PROJ_ROOT = __dirname + '/../../';
        var ConcolicValue = require(PROJ_ROOT + 'jalangi/src/js/ConcolicValue.js');
        if (object && (object instanceof ConcolicValue) && (object.autoWrapped))
            return true;
        return false;
    }

    function instrumentAndRun(projectDir, fileToRun, filesToInstrument) {
        var Promise = require("bluebird");
        var tmp = require('tmp');
        var wrench = require('wrench');
        var fs = require("fs");
        var path = require("path");
        var utils = require(path.resolve(__dirname, "../src/js/analysis/AnalysisUtils"));
        return new Promise(function (resolve, reject) {
            process.nextTick(function() {
                var projTmpDir = tmp.dirSync();
                wrench.copyDirSyncRecursive(projectDir, projTmpDir.name, { forceDelete: true });
                var tmpDir = path.resolve(projTmpDir.name, "./jalangi_tmp")
                fs.mkdirSync(tmpDir);
                process.chdir(tmpDir);
                var files = [];
                for (var i = 0; i < filesToInstrument.length; i++) {
                    files = files.concat(utils.getFilesRec(path.resolve(projTmpDir.name, filesToInstrument[i])));
                }
                for (var i = 0; i < files.length; i++) {
                    console.log(files[i])
                    utils.instrumentFile(path.resolve(__dirname, "../../"), files[i]);
                }
                utils.runFile(path.resolve(__dirname, "../../"), path.resolve(projTmpDir.name, fileToRun), projectDir, projTmpDir.name, resolve);
            });
        });
    }

    var sloc = require("sloc");

    function instrumentSync(projectDir, filesToInstrument, callback) {
        //TODO remove this duplicate code
        var Promise = require("bluebird");
        var tmp = require('tmp');
        var wrench = require('wrench');
        var fs = require("fs");
        var path = require("path");
        var utils = require(path.resolve(__dirname, "../src/js/analysis/AnalysisUtils"));

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

    function instrument(projectDir, filesToInstrument) {
        //TODO remove this duplicate code
        var Promise = require("bluebird");
        var tmp = require('tmp');
        var wrench = require('wrench');
        var fs = require("fs");
        var path = require("path");
        var utils = require(path.resolve(__dirname, "../src/js/analysis/AnalysisUtils"));
        return new Promise(function (resolve, reject) {
            process.nextTick(function() {
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
                for (var i = 0; i < files.length; i++) {
                    loc +=  fs.readFileSync(files[i]).toString().split(/\r\n|\r|\n/).length;
                    console.log(files[i] +" " + loc);
                    utils.instrumentFile(path.resolve(__dirname, "../../"), files[i]);
                }
                resolve(projTmpDir.name, loc);
            });
        });
    }
    function runFile(projectDir, tmpProj, fileToRun, iterationsCallback, procCreationCallBack) {
        var Promise = require("bluebird");
        var tmp = require('tmp');
        var wrench = require('wrench');
        var fs = require("fs");
        var path = require("path");
        var utils = require(path.resolve(__dirname, "../src/js/analysis/AnalysisUtils"));
        //var tmpDir = path.resolve(tmpProj, "./jalangi_tmp")
        process.chdir(tmpProj);
        return new Promise(function (resolve, reject) {
            utils.runFileNoInterp(path.resolve(__dirname, "../../"), path.resolve(tmpProj, fileToRun), projectDir, tmpProj, resolve, iterationsCallback, procCreationCallBack);
        });
    }

    // exports
    exports.tolerate = tolerate;
    exports.sink = sink;
    exports.source = source;
    exports.addSource = addSource;
    exports.addSink = addSink;
    exports.cleanPC = cleanPC;
    exports.downgrade = downgrade;
    exports.addCallbackSource = addCallbackSource;
    exports.LOW_LEVEL = LOW_LEVEL;
    exports.HIGH_LEVEL = HIGH_LEVEL;
    exports.PLEAKED_LEVEL = PLEAKED_LEVEL;
    exports.instrumentAndRun = instrumentAndRun;
    exports.instrument = instrument;
    exports.runFile = runFile;
    exports.unwrap = unwrap;
    exports.instrumentSync = instrumentSync;
    exports.isAutoWrapped = isAutoWrapped;
})();
