"use strict";

var express = require('express');

var request = require('request');

var bodyParser = require('body-parser');

var app = express();
var portNum = 3000; // create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var jsonParser = bodyParser.json(); // POST /login gets urlencoded bodies

app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username);
}); // POST /api/users gets JSON bodies

app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
  res.send(req.body.todo);
});
app.listen(portNum);

function test(input) {
  request.post('http://127.0.0.1:' + portNum + "/api/users", {
    json: data
  }, function (error, res, body) {
    if (error) {
      console.error(error);
      return;
    }

    console.log("statusCode: ".concat(res.statusCode));
    console.log(body);
  });
}

var data = {
  todo: 'Buy the milk'
};

var utils = require("../TestcaseUtils.js");

utils.entry(test, data);
setTimeout(process.exit, 8000);