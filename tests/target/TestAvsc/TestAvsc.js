var avro = require('avsc');
var type = avro.Type.forSchema({
    type: 'record',
    fields: [
        {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG']}},
        {name: 'name', type: 'string'}
    ]
});



function test2(input2){
    var val2 = type.toBuffer(input2);
}

var utils = require('../TestcaseUtils.js');
utils.entry(test2, {kind: 'CAT', name: 'Albert'});
//var buf2 = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer.
//utils.entry(test, buf2);

