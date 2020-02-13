"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.timers");

var request = require('request');

var urlencode = require('urlencode');

var utils = require('../TestcaseUtils');

require('./app');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
var input = {colour: {
    label: "Select colour",
    name: "colour",
    value: "Heather green"
  }};

var send = function send(input) {
  return new Promise(function (resolve, reject) {
    var burp0_headers = {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0"
    };
    var burp0_options = {
      url: "http://localhost:1111/",
      headers: burp0_headers,
      method: "get"
    };
    request(burp0_options, function (error, response, body) {
      console.log('statusCode:', response && response.statusCode);
      console.log(response.headers); // console.log('error: ', error)
      // console.log('body: ', body)

      var burp0_bodyString = "productId=5e399f599a82b91e6d276069&productQuantity=1&productOptions=" + urlencode(JSON.stringify(input));
      var burp0_headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0",
        "Referer": "http://localhost:1111/",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      };
      burp0_headers['Cookie'] = response.headers['set-cookie'];
      var burp1_options = {
        url: "http://localhost:1111/product/addtocart",
        headers: burp0_headers,
        method: "post",
        body: burp0_bodyString
      };
      request(burp1_options, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode);
        console.log('error: ', error);
        console.log('body: ', body);
        resolve();
      });
    });
  });
};

function test() {
  utils.entry(send, input, true);
}

setTimeout(test, 10000);
setTimeout(process.exit, 20000);