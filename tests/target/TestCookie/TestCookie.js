"use strict";

var http = require('http');

var Cookies = require('cookies');

var request = require('request'); // Optionally define keys to sign cookie values
// to prevent client tampering


var keys = ['keyboard cat'];
var portNum = 3000;

function test(input) {
  var server = http.createServer(function (req, res) {
    // Create a cookies object
    var cookies = new Cookies(req, res, {
      keys: input
    }); // Get a cookie

    var lastVisit = cookies.get('LastVisit', {
      signed: true
    }); // Set the cookie to a value

    cookies.set('LastVisit', new Date().toISOString(), {
      signed: true
    });

    if (!lastVisit) {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome, first time visitor!');
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome back! Nothing much changed since your last visit at ' + lastVisit + '.');
    }
  });
  portNum++;
  server.listen(portNum, function () {
    console.log('Visit us at http://127.0.0.1:' + portNum);
  });
  request("http://127.0.0.1:" + portNum);
}

var utils = require("../TestcaseUtils.js");

utils.entry(test, keys, __dirname);
setTimeout(process.exit, 6000);