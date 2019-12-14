// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


var input = { 'a': 1 };
function test(value_to_change){
    _.defaults(value_to_change, { 'a': 3, 'b': 2 });
}

var utils = require('../TestcaseUtils.js');
utils.entry(test,input);