var dirtraces = process.argv[2];
console.log(dirtraces)
var fs = require('fs');
var path = require('path');
var exec = require('exec-sync');
var tests = fs.readdirSync(dirtraces);
var resultsFile = process.argv[3];
fs.appendFileSync(resultsFile, "TEST INSTANCE, ITERATIONS, COVERAGE, EIF+OIF+HIFs, EIF+OIFs, EIFs, EXPLICIT, OBSERVABLE IMPLICIT, HIDDEN IMPLICIT, E2E EXPLICIT, E2E OBSERVABLE IMPLICIT, E2E HIDDEN IMPLICIT, END-2-END VIOLATIONS, TRACE SIZE, E2E TYPE0, E2E TYPE1, E2E TYPE2, E2E TYPE3, E2E TYPE4, E2E TYPE5, E2E TYPE6, E2E TYPE7, IIDSINK, COUNT, E2E TYPE0, E2E TYPE1, E2E TYPE2, E2E TYPE3, E2E TYPE4, E2E TYPE5, E2E TYPE6, E2E TYPE7\n")
for (var i = 0; i < tests.length; i++) {
    var resDir = path.resolve(dirtraces, tests[i]);
    if (fs.lstatSync(resDir).isDirectory()) {

        var res = exec("node " + "../../src/js/analysis/StudyTraceInterpreter.js " + path.resolve(resDir) + " -v -e2e");
        var upgrades = 1;
        var upgradesFile = path.resolve(resDir, "./upgrades.json");
        if (fs.existsSync(upgradesFile))
            upgrades = Object.keys(JSON.parse(fs.readFileSync(upgradesFile))).length + 1;
        var testName = resDir;
        var setupFile = path.resolve(resDir, "./setup.csv");
        if (fs.existsSync(setupFile))
            testName = fs.readFileSync(setupFile);
        fs.appendFileSync(resultsFile, tests[i] + "," + upgrades + ",");
        fs.appendFileSync(resultsFile, res + "\n");
    }
}
console.log("Done");
