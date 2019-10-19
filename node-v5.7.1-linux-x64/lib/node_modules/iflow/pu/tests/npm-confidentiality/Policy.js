var iflow = require("iflow");

Buffer = wrap(Buffer);
require('buffer').Buffer = wrap(require('buffer').Buffer);

function wrap(orig) {
    var newConstr = function (a) {

        var unwrappedArgs = [];
        for (var i = 0; i < arguments.length; i++)
            if (iflow.isAutoWrapped(arguments[i]))
                unwrappedArgs.push(iflow.unwrap(arguments[i]));
            else
                unwrappedArgs.push(arguments[i]);
        var res = orig.apply(this, unwrappedArgs);
        if (a && Number.isInteger(a)) {
            // var err = new Error();
            // console.log(err.stack)
            res = mySource(res)
        }
        return res;
    };
    newConstr.prototype = orig.prototype;
    var methods = Object.getOwnPropertyNames(orig);
    for (var i = 0; i < methods.length; i++)
        newConstr[methods[i]] = orig[methods[i]];
    return newConstr;
}


function mySource(a) {
    return a;
}

iflow.addSource(mySource, iflow.HIGH_LEVEL, "buffer");

var http = require('http');
var req = http.request({});
iflow.addSink(req.write, "http-request-write");
iflow.addSink(http.request, "http-request");

var https = require('https');
iflow.addSink(https.request, "https-request");

var request = require('request');
iflow.addSink(request.Request.prototype.write, "request-write");

var Query = require("./node_modules/sequelize/lib/dialects/postgres/query.js")
// console.log(Query.prototype.run);
iflow.addSink(Query.prototype.run, "postgres-sql-run");

// var sender = require("ws").Sender;
// iflow.addSink(sender.prototype.send, "ws-send");

iflow.addSink(process.stdout.write, "stdout")

console.log("Policy successfuly loaded!");