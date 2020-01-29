"use strict";

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

require("./debug");

var utils = require('../TestcaseUtils'); 
var auth = {
    email:"test@email.com",
    password:"testtest"
};
  
var send = function(auth) {
    return new Promise(function (resolve, reject) {
        var request = require('request');
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
        var burp0_bodyString = JSON.stringify(auth);
        
        var burp0_headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0", 
            "Content-Type": "application/json; charset=utf-8", 
        }
        
        var burp0_options = {
            url: "http://127.0.0.1:8000/api/account/login/",
            headers: burp0_headers,
            method: "post",
            body: burp0_bodyString
        }
        request(burp0_options, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode)
        console.log('error: ', error)
        console.log('body: ', body)
        resolve();
        })
        
        
  });
}
  
function test() {
    utils.entry(send, auth, true);
}
setTimeout(test, 10000);
setTimeout(process.exit, 20000);