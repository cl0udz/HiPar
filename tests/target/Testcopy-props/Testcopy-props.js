var copyProps = require('copy-props');
var utils = require('../TestcaseUtils')

var input = {
    src:{ a: 1, b: { b1: 'bbb' }, c: 'ccc' },
    dst:{ a: 2, b: { b1: 'xxx', b2: 'yyy' } }
};

function test(input){
    var output = copyProps(input.src, input.dst);
    console.log(output);
}

utils.entry(test,input);
