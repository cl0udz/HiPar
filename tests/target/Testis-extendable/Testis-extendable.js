var isExtendable = require('is-extendable');
var utils = require('../TestcaseUtils');

var input = {a:'b',b:{c:'d'}};

function test(input){
    var result = isExtendable(input);
    console.log(result);
}

utils.entry(test,input)