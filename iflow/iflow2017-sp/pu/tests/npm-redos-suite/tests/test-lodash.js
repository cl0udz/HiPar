/**
 * Not yet working: in the next release only
 */
var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js")

var _ = require('lodash');
//require("../utils").monkeyPatch();

measureTime(function() {
    var agent = _.lowerCase(utils.source(genstr(80000, "1")+ "'nN", utils.HIGH_LEVEL, "module-interface"));
});
measureTime(function() {
    var agent = _.upperFirst(utils.source(genstr(80000, "1")+ "'nN", utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    var agent = _.lowerCase(utils.source(genstr(50000, "A"), utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    var agent = _.upperCase(utils.source(genstr(80000, "A"), utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    var agent = _.camelCase(utils.source(genstr(80000, "A"), utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    var agent = _.kebabCase(utils.source(genstr(80000, "A"), utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    var agent = _.snakeCase(utils.source(genstr(80000, "A"), utils.HIGH_LEVEL, "module-interface"));
});

measureTime(function() {
    var agent = _.startCase(utils.source(genstr(80000, "A"), utils.HIGH_LEVEL, "module-interface"));
});
