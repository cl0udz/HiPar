var utils = require(__dirname + "/../Utils.js");
var mixin = require("mixin-pro");

var x = {};


// traditional: create base class Foo, Foo1, Foo2, ...
function Foo() {}
Foo.prototype = {
   t0: function() { console.log('Foo->t0()'); }
};

function Foo1() {}
Foo.prototype = {
   t1: function() { console.log('Foo1->t1()'); }
};
// normal mixin: add features to existing classes
var Foo1 = mixin(Foo1, Foo);


