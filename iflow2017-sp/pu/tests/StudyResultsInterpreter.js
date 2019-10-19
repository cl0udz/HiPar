var dirtraces = process.argv[2];

var fs = require('fs');
var path = require('path');
var exec = require('exec-sync');
var tests = fs.readdirSync(dirtraces);
var resultsFile = process.argv[3];

var PROJ_ROOT = __dirname + '/../../';
var rawDataOutputFolder = PROJ_ROOT + "/results/";
var prevalenceFile = path.resolve(rawDataOutputFolder, "prevalence-microflows.dat");
fs.writeFileSync(prevalenceFile, "");
var prevalencee2eFile = path.resolve(rawDataOutputFolder, "prevalence-microflows-e2e.dat");
fs.writeFileSync(prevalencee2eFile, "");
var diffTypesFile = path.resolve(rawDataOutputFolder, "diff-types-e2e-bar.dat");
fs.writeFileSync(diffTypesFile, "");
var labelCreepFile = path.resolve(rawDataOutputFolder, "label-creep.dat");
fs.writeFileSync(labelCreepFile, "");
var e2eFlowsFile = path.resolve(rawDataOutputFolder, "e2eflows.dat");
fs.writeFileSync(e2eFlowsFile, "");
var permFile = path.resolve(rawDataOutputFolder, "permissiveness.dat");
fs.writeFileSync(permFile, "");
var typee2eFlows = [0,0,0,0,0,0,0,0];
fs.writeFileSync(resultsFile, "TEST INSTANCE, ITERATIONS, COVERAGE, EIF+OIF+HIFs, EIF+OIFs, EIFs, EXPLICIT, OBSERVABLE IMPLICIT, HIDDEN IMPLICIT, E2E EXPLICIT, E2E OBSERVABLE IMPLICIT, E2E HIDDEN IMPLICIT, END-2-END VIOLATIONS, TRACE SIZE, E2E TYPE0, E2E TYPE1, E2E TYPE2, E2E TYPE3, E2E TYPE4, E2E TYPE5, E2E TYPE6, E2E TYPE7, IIDSINK, COUNT, E2E TYPE0, E2E TYPE1, E2E TYPE2, E2E TYPE3, E2E TYPE4, E2E TYPE5, E2E TYPE6, E2E TYPE7\n")
var lcs = {10:{}, 20:{}, 30:{}, 40:{}, 50:{}, 60:{}, 70:{}, 80:{}, 90:{}, 100:{}};
var resultsOrder = [
    "fish-exec",
    "growl-exec",
    "gm-exec",
    "libnotify-exec",
    "mixin-pro-exec",
    //5
    "modulify-exec",
    "mol-proto-exec",
    "mongoosify-exec",
    "m-log-exec",
    "mobile-icon-resizer-exec",
    //10
    "mongo-parse-exec",
    "mongoosemask-exec",
    "mongui-exec",
    "mongo-edit-exec",
    "mock2easy-exec",
    //15
    "chook-growl-reporter-exec",
    "git2json-exec",
    "kerb_request-exec",
    "printer-exec",
    "debug-intf",
    //20
    "mime-intf",
    "tough-cookie-intf",
    "fresh-intf",
    "forwarded-intf",
    "underscore.string-intf",
    //25
    "ua-parser-js-intf",
    "parsejson-intf",
    "useragent-intf",
    "no-case-intf",
    "content-type-parser-intf",
    //30
    "timespan-intf",
    "string-intf",
    "content-intf",
    "slug-intf",
    "htmlparser-intf",
    //35
    "charset-intf",
    "mobile-detect-intf",
    "ismobilejs-intf",
    "dns-sync-intf",
    "ip-intf",
    //40
    "concat-stream-intf",
    "bl-intf",
    "request-intf",
    "ws-intf",
    "floody-intf",
    //45
    "tunnel-agent-intf",
    "yp_js-intf",
    "fonts-intf",
    "fonts2-intf",
    "fonts3-intf",
    //50
    "extensions-intf",
    "doNotTrack-intf",
    "login-intf",
    "html5Flags-intf",
    "extensionGhostery-intf",
    //55
    "resourceReaderFirefox-intf",
];

var currGroupCost = {ese:{sum:0, min:Number.MAX_VALUE, max: 0},
    ose:{sum:0, min:Number.MAX_VALUE, max: 0},
    ni:{sum:0, min:Number.MAX_VALUE, max: 0}};
var costTable = "";
var benchmarksWithHidden = 0;
var puAlarms = 0;
var nsuAlarms = 0;
var outTxt = "";
var totalLCNI = 0;
var totalLCES = 0;
var totalLCOS = 0;
var dropNIOS = [];
var dropOSES = [];
var totalExplicit = 0, totalObservable = 0, totalHidden = 0;
var avgExplicit = 0, avgObservable = 0, avgCost = 0;
var countAvg = 0;
for (var i = 0; i < resultsOrder.length; i++) {
    var resDir = path.resolve(dirtraces, resultsOrder[i]);
    if (fs.lstatSync(resDir).isDirectory() && resultsOrder[i] != "." && resultsOrder[i] != ".") {
        var testName = (i + 1) + "";
        var lcFile = path.resolve(resDir, "./lc.json")
        if (fs.existsSync(lcFile)) {
            var lcEntries = fs.readFileSync(lcFile).toString().split("\n");
            // console.log(resDir + "===============")
            if (lcEntries.length > 10) {
                for (var k = 0; k < 10; k++) {
                    var length = lcEntries.length - 1;
                    var index = Math.floor((k+1)*(length/10)) - 1;
                    // console.log(lcEntries[index])
                    lcs[(k+1)*10][testName] = lcEntries[index].split(",")[2];
                    // console.log(lcFile + " " + lcs[(k+1)*10][testName])
                }
            }
            // console.log(tests[i] + " " + lcEntries[lcEntries.length - 2]);
        } else {
            // console.log(tests[i] + " N/A");
        }
        var printTraces = false;
        // if (testName == "12" || testName == "26" || testName == "34" || testName == "43" || testName == "44" || testName == "45")
        if (testName == "49")
            printTraces = true;
        // var res = exec("node " + "../src/js/analysis/StudyTraceInterpreter.js " + path.resolve(resDir) + " -v -e2e");
        var res = require("../src/js/analysis/StudyTraceInterpreter.js")(path.resolve(resDir), lcEntries, printTraces);
        totalExplicit += res.totalExplicitFlows;
        totalObservable += res.totalImplcitFlows;
        totalHidden += res.totalHiddenFlows;
        var totalFlows = res.totalHiddenFlows+res.totalImplcitFlows+res.totalExplicitFlows;
        avgCost += (res.niCost - res.eseCost)/res.niCost;
        if (totalFlows) {
            avgExplicit += (res.totalExplicitFlows) / (totalFlows)
            avgObservable += (res.totalImplcitFlows) / (totalFlows)
        }
        countAvg++;
        // console.log(res);
        // var testName = resultsOrder[i].replace("-.*", "");
        // var testName = resultsOrder[i]
        if (res.totalHiddenFlows > 0)
            benchmarksWithHidden++;
        if (testName != "hif-check-intf") {
            var total = res.totalExplicitFlows + res.totalImplcitFlows + res.totalHiddenFlows;
            if (total != 0)
                fs.appendFileSync(prevalenceFile, testName
                    + "," + (res.totalExplicitFlows / total)
                    + "," + (res.totalImplcitFlows / total)
                    + "," + (res.totalHiddenFlows / total) + "\n")
            else
                fs.appendFileSync(prevalenceFile, testName + ",0,0,0\n");

            var total = res.e2eExplicit + res.e2eImplicit + res.e2eHidden;
            if (total != 0)
                fs.appendFileSync(prevalencee2eFile, testName
                    + "," + (res.e2eExplicit / total)
                    + "," + (res.e2eImplicit / total)
                    + "," + (res.e2eHidden / total) + "\n")
            else
                fs.appendFileSync(prevalencee2eFile, testName + ",0,0,0\n");

            fs.appendFileSync(e2eFlowsFile, testName + "," + res.taintPaths + "," + (res.obsSecPaths-res.taintPaths) + "," + (res.iflowPaths-res.obsSecPaths) + "\n");
            for (var j = 0; j < res.e2ePaths.length; j++) {
                if (res.e2ePaths[j])
                    typee2eFlows[j]++;
                    // typee2eFlows[j] += res.e2ePaths[j];
            }
            currGroupCost.ese.sum += res.eseCost;
            if (res.eseCost < currGroupCost.ese.min)
                currGroupCost.ese.min = res.eseCost
            if (res.eseCost > currGroupCost.ese.max)
                currGroupCost.ese.max = res.eseCost
            currGroupCost.ose.sum += res.oseCost;
            if (res.oseCost < currGroupCost.ose.min)
                currGroupCost.ose.min = res.oseCost
            if (res.oseCost > currGroupCost.ose.max)
                currGroupCost.ose.max = res.oseCost
            currGroupCost.ni.sum += res.niCost;
            if (res.niCost < currGroupCost.ni.min)
                currGroupCost.ni.min = res.niCost
            if (res.niCost > currGroupCost.ni.max)
                currGroupCost.ni.max = res.niCost
            if (i == 18) {
                costTable += ("Injections &" + currGroupCost.ese.min + " & " + (currGroupCost.ese.sum/19).toFixed(2) + " & " + (currGroupCost.ese.max)+ " & "
                    + currGroupCost.ose.min + " & " + (currGroupCost.ose.sum/19).toFixed(2) + " & " + (currGroupCost.ose.max) + "& "
                    + currGroupCost.ni.min + " & " + (currGroupCost.ni.sum/19).toFixed(2) + " & " + (currGroupCost.ni.max) + "\\\\\n")
                currGroupCost = {ese:{sum:0, min:Number.MAX_VALUE, max: 0},
                    ose:{sum:0, min:Number.MAX_VALUE, max: 0},
                    ni:{sum:0, min:Number.MAX_VALUE, max: 0}};
            }
            if (i === 38) {
                costTable += ("ReDoS &" + currGroupCost.ese.min + " & " + (currGroupCost.ese.sum/20).toFixed(2) + " & " + (currGroupCost.ese.max)+ " & "
                    + currGroupCost.ose.min + " & " + (currGroupCost.ose.sum/20).toFixed(2) + " & " + (currGroupCost.ose.max) + "& "
                    + currGroupCost.ni.min + " & " + (currGroupCost.ni.sum/20).toFixed(2) + " & " + (currGroupCost.ni.max) + "\\\\\n")
                currGroupCost = {ese:{sum:0, min:Number.MAX_VALUE, max: 0},
                    ose:{sum:0, min:Number.MAX_VALUE, max: 0},
                    ni:{sum:0, min:Number.MAX_VALUE, max: 0}};
            }
            if (i === 45) {
                costTable += ("Buffer &" + currGroupCost.ese.min + " & " + (currGroupCost.ese.sum/7).toFixed(2) + " & " + (currGroupCost.ese.max)+ " & "
                    + currGroupCost.ose.min + " & " + (currGroupCost.ose.sum/7).toFixed(2) + " & " + (currGroupCost.ose.max) + "& "
                    + currGroupCost.ni.min + " & " + (currGroupCost.ni.sum/7).toFixed(2) + " & " + (currGroupCost.ni.max) + "\\\\\n")
                currGroupCost = {ese:{sum:0, min:Number.MAX_VALUE, max: 0},
                    ose:{sum:0, min:Number.MAX_VALUE, max: 0},
                    ni:{sum:0, min:Number.MAX_VALUE, max: 0}};
            }
            if (i === 55) {
                costTable += ("Fingerprinting &" + currGroupCost.ese.min + " & " + (currGroupCost.ese.sum/10).toFixed(2) + " & " + (currGroupCost.ese.max)+ " & "
                    + currGroupCost.ose.min + " & " + (currGroupCost.ose.sum/10).toFixed(2) + " & " + (currGroupCost.ose.max) + "& "
                    + currGroupCost.ni.min + " & " + (currGroupCost.ni.sum/10).toFixed(2) + " & " + (currGroupCost.ni.max) + "\\\\\n")
                currGroupCost = null
            }
        }
        var upgrades = 1;
        var upgradesFile = path.resolve(resDir, "./upgrades.json");
        console.log(res.lcNI + " " + res.lcES + " " + res.lcOS)
        console.log(totalLCES);
        totalLCNI += res.lcNI;
        totalLCES += res.lcES;
        totalLCOS += res.lcOS;
        dropNIOS.push({test: testName, drop: res.lcNI - res.lcOS});
        dropOSES.push({test: testName, drop: res.lcOS - res.lcES});
        if (testName == "35" || testName == "34" || testName == "11" || testName == "12") {
            var lcsExFil = path.resolve(rawDataOutputFolder, "lcs" + testName + ".dat");
            fs.writeFileSync(lcsExFil, ",Non Interference, Observable Secrecy, Explicit Secrecy\n0,0,0,0\n");
            for (var k = 10; k <= 100; k+= 10 ) {
                fs.appendFileSync(lcsExFil, k + "," + res.lcNIVec[k] + "," + res.lcOSVec[k] + "," + res.lcESVec[k] + "\n");
            }
        }
        if (testName == "50")
            for (var k = 10; k <= 100; k+= 10 )
                console.log("=====" + res.lcNIVec[k])

        var curPU = 0
        if (fs.existsSync(upgradesFile)) {
            curPU = Object.keys(JSON.parse(fs.readFileSync(upgradesFile))).length;
            puAlarms += curPU;
            upgrades = Object.keys(JSON.parse(fs.readFileSync(upgradesFile))).length + 1;
        }
        nsuAlarms += res.nsuViolations;
        var otHalts = (res.obsSecPaths-res.taintPaths) + (res.iflowPaths-res.obsSecPaths);
        if (res.nsuViolations != 0 || curPU != 0)
            //+ "," + otHalts
            fs.appendFileSync(permFile, (i+1) + "," + res.nsuViolations + "," + curPU  + "\n");
        outTxt += ((i+1) + "," + curPU) + "\n"

        var setupFile = path.resolve(resDir, "./setup.csv");
        // if (fs.existsSync(setupFile))
        //     testName = fs.readFileSync(setupFile);
        fs.appendFileSync(resultsFile, testName + "," + upgrades + ",");
        fs.appendFileSync(resultsFile, res.outText + "\n");
    }
}
console.log("Average drop LC from NI to OS: " + (((totalLCNI - totalLCOS) / 56)).toFixed(1));
dropOSES.sort(function(a,b) {return b.drop - a.drop});
dropNIOS.sort(function(a,b) {return b.drop - a.drop});
for (var i = 0; i < 5; i++)
    console.log(dropNIOS[i])
console.log("Average drop LC from OS to ES: " + (((totalLCOS - totalLCES) / 56)).toFixed(1));
for (var i = 0; i < 10; i++)
    console.log(dropOSES[i])
// console.log(outTxt);
// console.log(typee2eFlows)
var res = "";
res += "all types of microflows, " + typee2eFlows[7] + "\n";
res += "observable + hidden implicit, " + typee2eFlows[6] + "\n";
res += "explicit + hidden implicit, " + typee2eFlows[5] + "\n";
res += "explicit + observable implicit, " + typee2eFlows[3] + "\n";
res += "hidden implicit, " + typee2eFlows[4] + "\n";
res += "observable implicit, " + typee2eFlows[2] + "\n";
res += "explicit, " + typee2eFlows[1] + "\n";
res += "no microflow, " + typee2eFlows[0] + "\n";
// console.log(res);
fs.writeFileSync(diffTypesFile, res);
var keys = Object.keys(lcs[10]);
fs.appendFileSync(labelCreepFile, "," + keys.join(",") + "\n");
fs.appendFileSync(labelCreepFile,"0");
for (var j = 0 ; j < keys.length; j++)
    fs.appendFileSync(labelCreepFile,",0");
fs.appendFileSync(labelCreepFile,"\n");
for (var i = 10; i <= 100; i+=10) {
    fs.appendFileSync(labelCreepFile,i);
    for (var j = 0 ; j < keys.length; j++)
        if (lcs[i][keys[j]])
            fs.appendFileSync(labelCreepFile,"," + lcs[i][keys[j]]);
        else
            fs.appendFileSync(labelCreepFile,",");
    fs.appendFileSync(labelCreepFile,"\n");
    // console.log()
}
// console.log(lcs)
console.log("To copy in cost table:\n" + costTable);

console.log("PU Alarms = " + puAlarms);
console.log("NSU Alarms = " + nsuAlarms);


console.log("Constants to copy in the sp.tex");
console.log("\\newcommand{\\percObsImplMicroFlows}{" + (100*avgObservable/countAvg).toFixed(1) + "\\%}");
console.log("\\newcommand{\\percExplMicroFlows}{" + (100*avgExplicit/countAvg).toFixed(1) +  "\\%}");
console.log("\\newcommand{\\percEventsExplicitOnly}{" + (100*avgCost/countAvg).toFixed(1) + "\\%}");
console.log("\\newcommand{\\benchmarksWithHidden}{" + benchmarksWithHidden + "}");
console.log("\\newcommand{\\puVsNsuPermissiveness}{" + (nsuAlarms/puAlarms).toFixed(2) + "}");
console.log("\\newcommand{\\dropInLCNIOS}{" + (((totalLCNI - totalLCOS)/totalLCNI)*100).toFixed(1) + "\\%}");
console.log("\\newcommand{\\dropInLCOSES}{" + (((totalLCOS - totalLCES)/totalLCOS)*100).toFixed(1) + "\\%}");

console.log("Done");
