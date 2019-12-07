var avro = require('avsc');
var type = avro.Type.forSchema({
    type: 'record',
    fields: [
        {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG']}},
        {name: 'name', type: 'string'}
    ]
});


function test(input,input2){
    var buf = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer.
    var val = type.fromBuffer(input2);// = {kind: 'CAT', name: 'Albert'}

}

var utils = require('../TestcaseUtils.js');

var buf2 = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer.
utils.entry(test, type , buf2);
