/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var printer = require("printer");

attackUtils.deliverPayloads(attackUtils.payloadsExec, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    printer.printDirect({data:"Test",
        printer: "" + payload,
        success:function(jobID){
            console.log("sent to printer with ID: "+jobID);
        },
        error:function(err){
            console.log(err);
        }
    });
}, function(result, filesWithSinks) {
    var benignInput = "printerName";
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    printer.printDirect({data:"Test",
        printer: benignInput,
        success:function(jobID){
            console.log("sent to printer with ID: "+jobID);
        },
        error:function(err){
            console.log(err);
        }
    });
    setTimeout(function() {
        attackUtils.printCallStrings();
        result += " " + attackUtils.observedString(benignInput);
    }, 1000);
});
