/**
 * For this test I've mocked the kinit utility because we do not have a kerberos infrastructure for testing. Put the kinit file in your path!
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var kerb = require("kerb_request");

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    try {
        console.log(kerb("test", "test", payload));
    } catch(e) {
        console.log(e);
    }
}, function(result, filesWithSinks) {
    var benignInput = "www.mybenignurl.com";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    try {
        console.log(kerb("test", "test", benignInput));
    } catch(e) {
        console.log(e);
    }
    setTimeout(function() {
        attackUtils.printCallStrings();
        result += " " + attackUtils.observedString(benignInput);
    },1000);
});
