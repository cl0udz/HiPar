var merge = require('merge-deep');
var utils = require('../TestcaseUtils');


var input = {
    Va: { a: { b: { c: 'c', d: 'd' } } }, Vb: { a: { b: { e: 'e', f: 'f' } } }
}

function test(input){
    var result = merge(input.Va,input.Vb);
    console.log(result);
}

utils.entry(test,input)