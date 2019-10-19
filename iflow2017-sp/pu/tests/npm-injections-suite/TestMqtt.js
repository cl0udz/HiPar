var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var topic = 'test' + (Math.random() * 10000);

process.argv.push("-p");
process.argv.push("1884");
process.argv.push("-t");
process.argv.push(topic);

require("mqtt-growl",{});
var fs = require("fs");

setTimeout(function() {
    var mqtt = require('mqtt');
    var client = mqtt.createClient(1884, "localhost")

    client.on('connect', function () {
        console.log("connected");
        client.subscribe(topic);
        attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
            client.publish(topic, 'Hello ' + payload);
        }, function(result, filesWithSinks) {
            var benignInput = "safe benign message"
            client.publish(topic, benignInput);
            setTimeout(function() {
                attackUtils.printCallStrings();
                result += " " + attackUtils.observedString(benignInput);
                process.argv.pop();
                process.argv.pop();
                process.argv.pop();
                process.argv.pop();
                process.exit(0);
            }, 1000);
        });

    });
}, 2000);
