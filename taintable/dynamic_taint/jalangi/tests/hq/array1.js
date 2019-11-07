var ConcolicValue = require('../../src/js/ConcolicValue');




var array = new ConcolicValue({'a':1},true)
array['b'] = 2
var c = array.a
var bbb = []
bbb.push(array)
// if (array.a < array.b)
// {
// 	c--;
// }

