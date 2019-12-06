"use strict";

var archiver = require('archiver');
var utils = require("../TestcaseUtils.js");
var archive = archiver('zip', {
    zlib: { level: 9  } // Sets the compression level.

});

var json = {
    key: {
        url: "http://example.com"
    },
};

function test(userJson){
    archive.append(buffer3, {name: 'file3.txt'});
}
var buffer3 = Buffer.from('buff it!');
utils.entry(test, buffer3);
