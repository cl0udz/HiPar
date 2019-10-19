var utils = require("iflow");
var policy = require("../Policy.js");
var ws = require('ws');

var server = new ws.Server({ port: 9000 })
var client = new ws('ws://localhost:9000')

/* Coverage improving instructions */

// ip.toBuffer("192.168.0.1", utils.source([], utils.HIGH_LEVEL, "module-interface"), 0)

/* End of coverage improving instructions */
client.on('open', function () {
    console.log('open');
    client.ping(1); // this makes the client allocate an uninitialized buffer of 50 bytes and send it to the server

    client.on('pong', function (data) {
        console.log('got pong')
        // console.log(data);
        var res = "";
        for (var j = 0; j < data.length; j+=1) {
            res += String.fromCharCode(data[j])
        }
        console.log(res);
        setTimeout(function() {
            process.exit(0);
        }, 2000)
    })
});


