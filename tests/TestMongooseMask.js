/**
 * Advisory 54: https://nodesecurity.io/advisories/54
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

var configs = require("./configs.json");
var policy = require("./Policy.js")(__dirname, null);

var mongomask = require('mongoosemask');
var obj = {};

/* Coverage improving instructions */
var _ = require('./node_modules/mongoosemask/node_modules/lodash/dist/lodash.js');
dup = {}
obj.mask = 25;
obj._id=13
var newObj = [{id: "mask"}];
newObj = utils.source(newObj, utils.HIGH_LEVEL, "tests-taint")
_.keys(utils.source(23, utils.HIGH_LEVEL, "tests-taint"));
_.keys(utils.source(null, utils.HIGH_LEVEL, "tests-taint"));
_.keys(utils.source({x:23}, utils.HIGH_LEVEL, "tests-taint"));
// var myObj = {x:23}
// var fct = function(){return true}
// var fct = utils.source(fct, utils.HIGH_LEVEL, "tests-taint")
 _.forOwn(newObj,fct, myObj);
_.forOwn(newObj,function(){return true}, {});
_.forOwn(newObj,function(){return false}, {});
_.forOwn(newObj);
_.forOwn(utils.source(null, utils.HIGH_LEVEL, "tests-taint"),function(){return false}, {});
_.forOwn(utils.source({length: "test"}, utils.HIGH_LEVEL, "tests-taint"));
var old = Object.keys;
Object.keys = function() {return false};
_.forOwn(utils.source({length: "test"}, utils.HIGH_LEVEL, "tests-taint"));
Object.keys = old;

_.forIn(newObj,function(){return true}, {});
_.forIn(newObj,function(){return false}, {});
_.forIn(newObj);
_.forIn(utils.source(null, utils.HIGH_LEVEL, "tests-taint"),function(){return false}, {});
_.forIn(utils.source({length: "test"}, utils.HIGH_LEVEL, "tests-taint"));

_.forEach(newObj,function(){return false}, {});
_.forEach(newObj,function(){return true}, {});

_.forEach(utils.source(null, utils.HIGH_LEVEL, "tests-taint"),function(){return false}, {});
_.forEach(newObj);
_.forEach(utils.source({length: "test"}, utils.HIGH_LEVEL, "tests-taint"));

_.isObject(newObj,function(){return false}, {});
_.isObject(newObj,function(){return true}, {});
_.isObject(utils.source(null, utils.HIGH_LEVEL, "tests-taint"),function(){return false}, {});
_.isObject(utils.source({length: "test"}, utils.HIGH_LEVEL, "tests-taint"));
_.isObject(newObj);
_.isObject(newObj,utils.source(function(){return true}, utils.HIGH_LEVEL, "module-interface"));
var maskedModel = mongomask.mask(obj, newObj);
obj._id = {x:23}
var taintedVal = utils.source("mask", utils.HIGH_LEVEL, "tests-taint")
var maskedModel = mongomask.mask(obj, [taintedVal]);
/* End of coverage improving instructions */

attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
    if (configs.sources.intf === true) {
        payload = utils.source(payload, utils.HIGH_LEVEL, "module-interface");
    }
    dup = {}
    var maskedModel = mongomask.mask(obj, [{_id:'"]; ' + payload + '//'}]);
}, function(result, filesWithSinks) {
    dup = {}
    var benignInput = "benignIdKey"
    if (configs.sources.intf === true) {
        benignInput = utils.source(benignInput, utils.HIGH_LEVEL, "module-interface");
    }
    var maskedModel = mongomask.mask(obj, [{_id: benignInput}]);
    attackUtils.printCallStrings();
    result += " " + attackUtils.observedString(benignInput);

});

