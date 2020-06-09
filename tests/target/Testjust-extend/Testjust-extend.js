var extend = require('just-extend')
var utils = require('../TestcaseUtils')
 

var input = {a: 3, b: 5};


function test(obj) {
    var arr = [1, 2, 3];
    extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
    arr.push(4);
    console.log(obj); // {a: 3, b: 5, c: [1, 2, 3, 4]}
}

utils.entry(test, input);