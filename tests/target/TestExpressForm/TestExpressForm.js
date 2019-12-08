
var express = require('express'),
bodyParser = require('body-parser'),
form = require('express-form'),
field = form.field;

var app = express();
app.use(bodyParser());

app.post(

// Route
'/user',

// Form filter and validation middleware
form(
field("username").trim().required().is(/^[a-z]+$/),
field("password").trim().required().is(/^[0-9]+$/),
field("email").trim().isEmail()
),

// Express request-handler now receives filtered and validated data
function(req, res){
 if (!req.form.isValid) {
   // Handle errors
   console.log(req.form.errors);

 } else {
   // Or, use filtered form data from the form object:
   console.log("Username:", req.form.username);
   console.log("Password:", req.form.password);
   console.log("Email:", req.form.email);
 }
}
);

app.listen(3000);
var utils = require('../TestcaseUtils.js');

var user = {username:'abc',password:'123',email:'abc@abc.com'};
function send(user){
    utils.sendViaWebRequest('post',JSON.stringify(user),'/user',3000,'127.0.0.1');
}

function test(){
    utils.entry(send,user);
}

setTimeout(test,3000);