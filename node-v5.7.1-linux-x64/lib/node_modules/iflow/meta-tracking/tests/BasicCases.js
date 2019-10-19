var path = require('path');
var assert = require('assert');
console.log("Running Basic Tests");
function setMeta(){};
function getMeta(){};
function deleteMeta(){};

var x = 12;         // LOCAL TO SCRIPT
setMeta(x, "x-meta");
assert.equal(getMeta(x), "x-meta");

y = 42;             // GLOBAL
setMeta(y, "y-meta");
assert.equal(getMeta(y), "y-meta");

var obj = {};
obj.prop = 43;       // OBJ prop
setMeta(obj.prop, "prop-meta");
assert.equal(getMeta(obj.prop), "prop-meta");

var obj2 = {};
setMeta(obj2.ref, "ref-meta");
assert.equal(getMeta(obj2.ref), "ref-meta");


function f(a) {     // PARAM
    setMeta(a, "param-meta");
    assert.equal(getMeta(a), "param-meta");
    var b = 34;     // LOCAL
    setMeta(b, "local-meta");
    assert.equal(getMeta(b), "local-meta");

    return function() {
        assert.equal(getMeta(b), "local-meta");
        assert.equal(getMeta(y), "y-meta");
        assert.equal(getMeta(obj.prop), "prop-meta");
        return b;
    }
}

var closure = f(12);
closure();

var z = 23;
assert.equal(getMeta(z), "");
setMeta(z, "local-z-meta");
z = 45;
assert.equal(getMeta(z), "");
assert.equal(getMeta(obj.prop), "prop-meta");
deleteMeta(obj.prop);
assert.equal(getMeta(obj.prop), "");
var t = new Object();
assert.equal(getMeta(t.toString), "");
setMeta(t.toString, "test-non-conf");
assert.equal(getMeta(t.toString), "test-non-conf");
console.log("Executed basic tests successfully");