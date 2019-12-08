"use strict";

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    "host": "smtp.qq.com",
    "port": 25,
    "auth": {
        "user": "827977014@qq.com",
        "pass": "xxxxxx"
    },
    "logger": true,
    "debug": false
});
var message = {
    from: "827977014@qq.com",
    to: "827977014@qq.com",
    subject: 'ttt',
    text: 'ok'
};

function test(message) {
    transporter.sendMail(message);
}

var utils = require('../TestcaseUtils.js');

utils.entry(test, message);
