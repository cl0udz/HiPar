var assert = require('assert');

var PREFIX1 = "J$";
SPECIAL_PROP = "*" + PREFIX1 + "*";
SPECIAL_PROP2 = "*" + PREFIX1 + "I*";
SPECIAL_PROP3 = "*" + PREFIX1 + "C*";
SPECIAL_PROP4 = "*" + PREFIX1 + "W*";
var utils = require("../src/ObjectTraversalUtils")(SPECIAL_PROP, SPECIAL_PROP2, SPECIAL_PROP3, SPECIAL_PROP4);
var net = require('net');

var cb = function (parent, prop, val) {
    res[prop] = val;
};

/* Simple Object */
var obj = {prop:23, o : { p2 : 42}};
var res = {};
utils.traverse(obj, cb);
assert.equal(res.prop, 23);
assert.equal(res.p2, 42);

/* Simple self ref*/
obj = {prop:23, sef : obj};
res = {};
utils.traverse(obj, cb);
assert.equal(res.prop, 23);

/* Big object */
var socket = new net.Socket({ fd: null,
    allowHalfOpen: false,
    readable: false,
    writable: false
});
res = {};
utils.traverse(socket, cb);
var keys = Object.keys(socket);
for (var index in keys) {
    assert(res.hasOwnProperty(keys[index]));
}

/* Inheritance test*/
var x = Object.create(socket);
res = {};
utils.traverse(x, cb);
var keys = Object.keys(socket);
for (var index in keys) {
    assert(res.hasOwnProperty(keys[index]));
}

/* Hidden property */
var x = {p : 23};
Object.defineProperty(x, "autoWrapped", {
    enumerable: false,
    writable: true
});
x.autoWrapped = true;
res = {};
utils.traverse(x, cb);
assert(res.hasOwnProperty("autoWrapped"));

/* Inherited Hidden property */
var z = Object.create(x);
assert(Object.getOwnPropertyNames(z).length === 0);
res = {};
utils.traverse(z, cb);
assert(res.hasOwnProperty("autoWrapped"));


/* Skip special property and proto */
var x = {};
Object.defineProperty(x, "*J$*", {
    enumerable: false,
    writable: true
});
assert(x.hasOwnProperty("*J$*"));
res = {};
utils.traverse(x, cb);
assert(!res.hasOwnProperty("__proto__"));
assert(!res.hasOwnProperty("*J$*"));

/* Random bug found */
var birthday = new Date(1995, 11, 17);
birthday.ownRef = birthday;
birthday.a = 23;
res = {};
utils.traverse(birthday, cb);
assert(res["a"] === 23);

console.log("Basic tests completed succesfully!");
