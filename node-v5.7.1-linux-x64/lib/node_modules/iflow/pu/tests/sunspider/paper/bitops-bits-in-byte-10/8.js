// Copyright (c) 2004 by Arthur Langereis (arthur_ext at domain xfinitegames, tld com)
var utils = require('../../../basicTests/TestUtils');
var result = 0;
// 1 op = 2 assigns, 16 compare/branches, 8 ANDs, (0-8) ADDs, 8 SHLs
// O(n)
function bitsinbyte(b) {
    var m = 1, c = 0;
    while (m < utils.source(256)) {
        if (b & m)
            c++;
        m <<= 1;
    }
    return c;
}
function TimeFunc(func) {
    var x, y, t;
    var sum = 0;
    for (var x = 0; x < 350; x++)
        for (var y = 0; y < utils.source(256); y++)
            sum += func(y);
    return sum;
}
utils.addSink(TimeFunc);
result = TimeFunc(bitsinbyte);
var expected = 358400;
if (result != expected)
    throw utils.source('ERROR: bad result: expected ') + expected + ' but got ' + result;