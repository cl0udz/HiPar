var utils = require('../TestcaseUtils');
var merge = require('deepmerge')


var input = {
    x:{
        foo: { bar: 3 },
        array: [{
            does: 'work',
            too: [ 1, 2, 3 ]
        }]
    },
    y: {
        foo: { baz: 4 },
        quux: 5,
        array: [{
            does: 'work',
            too: [ 4, 5, 6 ]
        }, {
            really: 'yes'
        }]
    }
};
function test(input){
    var output = merge(input.x, input.y) // => output
    console.log(output)
}


utils.entry(test,input)