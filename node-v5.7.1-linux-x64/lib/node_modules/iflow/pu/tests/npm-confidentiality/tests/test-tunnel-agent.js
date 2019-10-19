var utils = require("iflow");
var policy = require("../Policy.js");
var http = require('http');
var request = require('request')

var net = require('net');

var server = net.createServer(function(sock) {
    sock.on('data', function(data) {
        var authString = data.toString().split("\n")[2].replace(/.*Basic /,"").trim();
        // console.log(authString);
        var buf = new Buffer(authString, 'base64');
        console.log(buf.toString())
        process.exit(0)

    });
    // socket.write('Echo server\r\n');
    // socket.pipe(socket);
});

server.listen(3000, '127.0.0.1');


setTimeout(function() {
    require('request')({
        method: 'GET',
        uri: 'http://www.example.com',
        tunnel: true,
        proxy:{
            protocol: 'http:',
            host:"127.0.0.1",
            port:3000,
            auth:800
        }
    });
}, 1000)
