var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);
var oldDir = __dirname;
process.chdir("./resources");

var autolint = require("autolint");
var exec = require("child_process").exec;
require("./node_modules/autolint/bin/autolint");
var fs = require("fs");
setTimeout(function() {
    attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
        fs.writeFileSync("dirty.js", "var x = {        x:\"" + payload + "\"    };");
    }, function(result, filesWithSinks) {
        var benignInput = "some benign string";
        fs.writeFileSync("dirty.js", "var x = {        x:\"" + benignInput + "\"    };");
        setTimeout(function() {
            attackUtils.printCallStrings();
            attackUtils.printCallStrings();
            result += " " + attackUtils.observedString(benignInput);
            process.chdir(oldDir);
            console.log(result);
            process.exit(0)
        }, 1000);
    });
}, 2000);
