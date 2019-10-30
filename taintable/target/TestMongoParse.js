/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
//var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

//var configs = require("./configs.json");
//var policy = require("./Policy.js")(__dirname, null);
HIGH_LEVEL = 2;

var parser = require('mongo-parse');

/* Coverage improving instructions */
function g(x) {
    console.log("Myfct");
}
g = source(g, HIGH_LEVEL, "module-interface");
var query = parser.parse(g);
var query = parser.parse(source(23, HIGH_LEVEL, "module-interface"));
/* End of coverage improving instructions */

attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
    //if (configs.sources.intf === true) {
        payload = source(payload, HIGH_LEVEL, "module-interface");
	console.log("Here I am + payload: " + payload);
    //}
    var query = parser.parse('}); ' + payload + '//');
}, function(result, filesWithSinks) {
    var benignInput = "{ myQueryField: x}"
    //if (configs.sources.intf === true) {
        benignInput = source(benignInput, HIGH_LEVEL, "module-interface");
    //}
    console.log("typeof : " + typeof(benignInput));
    if(benignInput.hasOwnProperty("tainted") && benignInput.tainted == true)
        console.log("It works.");
    var query = parser.parse(benignInput);
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);
});

function source(source_var, level, catagory){
    return source_var;
}
