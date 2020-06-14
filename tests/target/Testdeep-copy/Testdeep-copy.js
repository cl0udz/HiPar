var utils = require('../TestcaseUtils');
var dcopy = require('deep-copy')


var input = {a: {b: [{c: 5}]}};
// deep copy object
function test(input){
    var copy = dcopy(input)
    console.log(copy)
}


utils.entry(test,input)