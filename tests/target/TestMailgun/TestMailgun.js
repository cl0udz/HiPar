"use strict";

var utils = require("../TestcaseUtils.js");

var api_key = 'XXXXXXXXXXXXXXXXXXXXXXX';
var domain = 'www.mydomain.com';

var mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain
});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

function test(userJson) {
  mailgun.messages().send(userJson, function (error, body) {
    console.log(body);
  });
} // console.log(test(json));


utils.entry(test, data);