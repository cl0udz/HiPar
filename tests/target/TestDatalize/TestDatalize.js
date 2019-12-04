"use strict";

require("core-js/modules/es.string.trim");

require("core-js/modules/es.string.trim");

var express = require('express');

var datalize = require('datalize');

var field = datalize.field;
var app = express(); // add any body parser

app.use(require('body-parser').json());
app.post('/', datalize([field('email', 'E-mail').required().email(), field('firstname', 'Firstname').required(), field('lastname', 'Lastname').required().trim(), field('isTerms').bool(true)]), function (req, res) {
  res.send({
    status: 'success',
    data: req.form
  });
});

var utils = require('../TestcaseUtils.js');

app.listen(3000, function () {
  console.log('server start');
  utils.entry(test, {
    email: 'a@a.com',
    firstname: 'bob',
    lastname: 'Green',
    isTerms: true
  });
  setTimeout(process.exit,5000);
})


function test(query) {
  utils.sendViaWebRequest('post', JSON.stringify(query), '/', 3000, '127.0.0.1');
}