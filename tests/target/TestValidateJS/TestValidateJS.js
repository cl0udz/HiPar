var validate = require("validate.js");

var data = {username: "nick", password: "better"};

function test(input){
    var constraints = {
        username: {
            presence: true,
            exclusion: {
                  within: ["nicklas"],
                  message: "'%{value}' is not allowed"
            }
        },
        password: {
            presence: true,
            length: {
                  minimum: 6,
                  message: "must be at least 6 characters"
            }
        }
    };

    validate(input, constraints);

    //validate({password: "bad"}, constraints);

    // => {
    //   "username": ["Username can't be blank"],
    //   "password": ["Password must be at least 6 characters"]
    // }

    //validate({username: "nick", password: "better"}, constraints);
    // => undefined

    //validate({username: "nicklas", password: "better"}, constraints);
    // => {"username": ["Username 'nicklas' is not allowed"]}

    //validate({password: "better"}, constraints, {fullMessages: false});
    // => {"username": ["can't be blank"]}

    //validate({username: "nicklas", password: "bad"}, constraints, {format: "detailed"});
}

var utils = require('../TestcaseUtils.js');
utils.whatWeDoThisTime(test, data, __dirname);
