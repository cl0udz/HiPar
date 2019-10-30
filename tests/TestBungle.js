var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);
var fs = require("fs");
var oldDir = __dirname;
process.chdir("./resources");
fs.mkdir("attacks");
var exec = require("child_process").exec;
require('babel-polyfill');
require('babel-register')({
    presets: ['es2015','stage-3'],
    comments: false,
    only: function(filename) {
        if (/bungle\/(?!node_modules)/.test(filename)) {
            return true;
        }
        if (/esx-bower\/(?!node_modules)/.test(filename)) {
            return true;
        }
        return false;
    }
});

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    try {
        fs.writeFileSync("./attacks/" + payload, "");
        var Cli = require('bungle/lib/cli').Cli;
        new Cli().run();
        setTimeout(function() {
            fs.unlinkSync("./attacks/" + payload, "");
        },300);
    } catch (e) {
        //console.log(e);
    }
}, function(result, filesWithSinks) {
    setTimeout(function() {
        var benignInput = "decentBenignFileName.txt"
        fs.writeFileSync("./attacks/" + benignInput, "");
        var Cli = require('bungle/lib/cli').Cli;
        new Cli().run();
        setTimeout(function() {
            attackUtils.printCallStrings();
            result += " " + attackUtils.observedString(benignInput);
            attackUtils.deleteFolderRecursive("./attacks");
            attackUtils.deleteFolderRecursive("./.bungle");
            process.chdir(oldDir);
            process.exit(0);
        }, 1000);
    }, 1000);
});
