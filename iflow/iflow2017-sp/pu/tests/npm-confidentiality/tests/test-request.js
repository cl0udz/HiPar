var utils = require("iflow");
var policy = require("../Policy.js");
var http = require('http');
var request = require('request')

http.createServer(function (req, res) {
    var data = ''
    req.setEncoding('utf8')
    req.on('data', function (chunk) {
        console.log('data')
        data += chunk
    })
    req.on('end', function () {
// this will print uninitialized memory from the client
        console.log('Client sent:\n', data)
        process.exit(0);
    })
    res.end()
}).listen(8000)

/* Coverage improving instructions */

request({
    method: 'POST',
    uri: 'http://localhost:8000',
    multipart: [{ body: utils.source([24,21], utils.HIGH_LEVEL, "tests") , x:2}]
}, function() {});

// try {
//     request({
//         method: 'POST',
//         uri: 'http://localhost:8000',
//         multipart: [{xxx: utils.source([24, 21], utils.HIGH_LEVEL, "tests"), x: 2}]
//     }, function () {
//     });
// }catch(e) {}

request({
    method: 'POST',
    uri: 'http://localhost:8000',
    multipart: [{body:utils.source([24,21], utils.HIGH_LEVEL, "tests"), headers: utils.source({multipart: ""}, utils.HIGH_LEVEL, "tests")}]
}, function () {
});

try {
    request.Request.prototype.start.call(utils.source({_aborted: true}, utils.HIGH_LEVEL, "tests"), "");
    request.Request.prototype.start.call(utils.source({uri: {href: 23}, src: 23}, utils.HIGH_LEVEL, "tests"), "");
} catch(e) {}
try {
    request.Request.prototype.start.call(utils.source({uri: {href: 23}, timing:true, httpModule: {request: function() {}}, _aws: true, aws: function() {}}, utils.HIGH_LEVEL, "tests"), "");
} catch(e) {}
try {
    request.Request.prototype.start.call(utils.source({method: "POST", uri: {href: 23}, timeout:200000, httpModule: {request: function() {}}, _aws: true, aws: function() {}}, utils.HIGH_LEVEL, "tests"), "");
} catch(e) {}
// try {
//     request.Request.prototype.start.call(utils.source({method: "POST", uri: {href: 23}, timeout:-1, httpModule: {request: function() {}}, _aws: true, aws: function() {}}, utils.HIGH_LEVEL, "tests"), "");
// } catch(e) {}
try {
    request.Request.prototype.start.call(utils.source({uri: {href: 23}, src: {stat:23}, timing:true}, utils.HIGH_LEVEL, "tests"), "");
} catch(e) {}
try {
    request.Request.prototype.start.call(utils.source({uri: {href: 23}, src: {stat: {size:25}}}, utils.HIGH_LEVEL, "tests"), "");
} catch(e) {}
try {
    request.Request.prototype.start.call(utils.source({uri: {href: 23}, src: {stat: {size:25}}, headers: {"content-length":23}}, utils.HIGH_LEVEL, "tests"), "");
} catch(e) {}

/* End of coverage improving instructions */

request({
        method: 'POST',
        uri: 'http://localhost:8000',
        multipart: [{ body: 100 }]
    },
    function (err, res, body) {
        if (err) return console.error('upload failed:', err)
        console.log('sent')
    });
