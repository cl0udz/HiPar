"use strict";

var express = require('express');
var request = require('request');
var http = require('http');
var api = require('./api');

var dbStatusCode = 0; // Establish connection to the cluster

api.connect(function (error) {
	if (error) {
		// handle failure
		dbStatusCode = error.code;
		console.log('Connection to Aerospike cluster failed!');
	} else {
		// handle success
		console.log('Connection to Aerospike cluster succeeded!');
	}
}); // Setup default/home route
var utils = require("../TestcaseUtils.js");

var name = {"name": "James"};

function send(input){
	if (dbStatusCode === 0) {
		api.writeRecord('Hello', input, function (error, result) {
			if (error) {
				// handle failure
				console.log(error.message);
			} else {
				// handle success
				api.readRecord('Hello', function (error, result) {
					if (error) {// handle failure
					} else {// handle success
					}

					console.log(result);
				});
			}
		});
	} else {
		res.send('Connection to Aerospike cluster failed!');
	}
}

function go(){
	utils.entry(send, name);
}

setTimeout(go, 2000);
setTimeout(process.exit, 10000);
