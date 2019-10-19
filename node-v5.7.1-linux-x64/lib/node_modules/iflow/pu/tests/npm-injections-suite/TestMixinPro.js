/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var mixin = require("mixin-pro");

var x = {};

attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    function Foo() {
    }
    var obj = {};
    obj.value = "f(){}; " + payload + " //";
    Object.defineProperty(Foo, "name", obj);
    mixin(Foo, x);
}, function(result, filesWithSinks) {
    function Foo() {
    }
    var benignInput = "benignFunctionName"
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    Object.defineProperty(Foo, "name", { value: benignInput });
    try {
        mixin(Foo, x);
    } catch (e) {}
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});

