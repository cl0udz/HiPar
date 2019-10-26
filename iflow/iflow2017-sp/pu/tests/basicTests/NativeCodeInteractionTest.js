(function() {

    var utils = require("../TestUtils");

    //var obj = getUninstrumentedObject();
    //var secret = utils.source(obj, utils.HIGH_LEVEL, "test-source-array-element");
    //secret.p2.p3 = 24;
    //check that the uninstrumented object has the new property, but it has the same structure, no wrappers!!
    //console.log(obj.p2.p3);
    var net = require('net');
    var socket = new net.Socket();
    console.log(socket._getsockname);
    console.log(socket);
    console.log(Object.getOwnPropertyDescriptor(socket, "on"))

})();
