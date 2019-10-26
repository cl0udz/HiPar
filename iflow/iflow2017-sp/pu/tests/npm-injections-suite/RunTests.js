/**
 *
 * For changing the node version: 
 * sudo ./node_modules/n/bin/n
 */
module.exports = function(tests, file, appendHeader) {
	const fs = require("fs");
	const path = require("path");
	var fileRes = path.resolve(file);
	var filesWithsinks = {};
	prepare();
	setTimeout(start, 3000);
	const OUT_FILE = path.resolve("./resources/sink-values.txt");

	function start() {
	    var oldPE = process.exit;
	    process.exit = function() {}
	    fs.appendFile(OUT_FILE, "test:" + tests[0].name + "\n");
	    fs.appendFile(OUT_FILE, "*****\n");
	    require(tests[0].test)(aggregateResults);
	    var results = {}
	    var inputs = {};
	    var count = 0;
	    var sprintf = require("sprintf-js").sprintf;
	    function aggregateResults(file, result, sinksFiles) {
		results[file] = result;
		for (var i = 0; i < sinksFiles.length; i++)
		    filesWithsinks[sinksFiles[i]] = 23;
		count++;
		if (count === tests.length) {
		    console.log("");
		    if (appendHeader)
		    	fs.appendFileSync(fileRes, sprintf("%70s","=== Test results ===\n"));
		    var tsts = Object.keys(results);
		    for (var t in tsts) {
		        fs.appendFileSync(fileRes, sprintf("%50s %20s\n", tsts[t].replace(/.*\//,""), results[tsts[t]]));
		    }
		    console.log("");
		    console.log("Files containing sinks")
		    var filesSinksKeys = Object.keys(filesWithsinks);
		    for (var i = 0; i < filesSinksKeys.length; i++)
		        console.log(filesSinksKeys[i]);
		    oldPE(0);
		} else {
		    fs.appendFile(OUT_FILE, "test:" + tests[count].name + "\n");
		    fs.appendFile(OUT_FILE, "*****\n");
		    require(tests[count].test)(aggregateResults);
		}
	    }
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
}
