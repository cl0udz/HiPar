var utils = require('../TestcaseUtils.js');
var mixin = require("mixin-pro");



// traditional: create base class Foo, Foo1, Foo2, ...
function Foo() {};
Foo.prototype = {
   t0: function() { console.log('Foo->t0()'); }

};

input.prototype = {
   t0: function() { console.log('Foo->t0()'); }
};
function Foo1() {};
Foo1.prototype = {
   t1: function() { console.log('Foo1->t1()'); }
};


// normal mixin: add features to existing classes
function test(payload){
    console.log(Foo1);
    console.log(payload)
    var Foo2 = mixin(Foo1, payload);
    console.log(Foo2);
}

utils.entry(test,input);

