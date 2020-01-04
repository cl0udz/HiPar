"use strict";

var AJS = require('another-json-schema');

var userSchema = AJS('userSchema', {
  _id: {
    type: 'string',
    pattern: /^[0-9a-z]{24}$/,
    required: true
  },
  name: {
    type: 'string'
  },
  age: {
    type: 'number',
    gte: 18
  },
  gender: {
    type: 'string',
    "enum": ['male', 'female']
  }
});
var commentSchema = AJS('commentSchema', {
  _id: {
    type: 'string',
    pattern: /^[0-9a-z]{24}$/,
    required: true
  },
  user: userSchema,
  content: {
    type: 'string'
  }
});
var postSchema = AJS('postSchema', {
  _id: {
    type: 'string',
    pattern: /^[0-9a-z]{24}$/,
    required: true
  },
  author: userSchema,
  content: {
    type: 'string'
  },
  comments: [commentSchema]
});
var post = {
  _id: 'post11111111111111111111',
  author: {
    _id: 'user11111111111111111111',
    name: 'nswbmw',
    age: 100,
    gender: 'male',
    pet: 'cat'
  },
  content: 'lalala',
  comments: [{
    _id: 'comment11111111111111111',
    user: {
      _id: 'wrong_id',
      name: 'user1',
      age: 100,
      gender: 'male'
    },
    content: 'sofa'
  }]
};

function test(intput) {
  postSchema.validate(post);
}

var utils = require("../TestcaseUtils.js");

utils.entry(test, post);