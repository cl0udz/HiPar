var copy = require('copy-anything').copy
var utils = require('../TestcaseUtils');

var original = { name: 'Flareon', type: ['fire'], id: '136' }


function test(original){
    var b = copy(original, { props: ['name'] });
    console.log(b);
}

utils.entry(test,original)