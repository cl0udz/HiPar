/**
 * This test need to start mongod before
 */
var utils = require("iflow");
var attackUtils = require("./AttackUtils.js");
attackUtils.setup();

// var configs = require("./configs.json");
// var policy = require("./Policy.js")(__dirname, app);
var app = require("mongui");

/* Coverage improving instructions */
setTimeout(function() {
    var request = require('superagent');
    //get instad of post for login
    var user1 = request.agent();
    user1
        .get('http://localhost:3443/login')
        .query({user:23})
        .end(function(){
            //missing command
            user1
                .post('http://localhost:3443/login')
                .send('user=test&pass=1234')
                .end(function (err, res) {
                    user1
                        .post('http://localhost:3443/command')
                        .send('xxx=23&db=blog')
                        .end(function (req, res) {
                            //get instead of post
                            user1
                                .get('http://localhost:3443/command')
                                .query({user:23})
                                .end(function() {
                                    //missing db
                                    user1
                                        .post('http://localhost:3443/command')
                                        .send('command=23')
                                        .end(function (req, res) {
                                            user1
                                                .get('http://localhost:3443/')
                                                .query({user:23})
                                                .set('User-Agent', "Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0")
                                                .end(function () {
                                                    setTimeout(actualAttacks, 2000)
                                                });
                                            //console.log(res);
                                        });
                                });
                        });
                });
        });

    //wrong password
    user1 = request.agent();
    user1
        .post('http://localhost:3443/login')
        .send('user=test&pass=1233')
        .end(function (err, res) {
        })
}, 2000);
/* End of coverage improving instructions */


function actualAttacks() {
    attackUtils.deliverPayloads(attackUtils.payloadsEval, function (payload) {
        var request = require('superagent');
        var user1 = request.agent();
        user1
            .post('http://localhost:3443/login')
            .send('user=test&pass=1234')
            .end(function (err, res) {
                user1
                    .post('http://localhost:3443/command')
                    .send('command=' + payload + '&db=blog')
                    .end(function (req, res) {
                        //console.log(res);
                    });
            });
    }, function (result, filesWithSinks) {
        var benignInput = "{ qty: { $gt: 4 } }";
        var request = require('superagent');
        var user1 = request.agent();
        user1
            .post('http://localhost:3443/login')
            .send('user=test&pass=1234')
            .end(function (err, res) {
                user1
                    .post('http://localhost:3443/command')
                    .send('command=' + benignInput + '&db=blog')
                    .end(function (req, res) {
                        attackUtils.printCallStrings();
                        result += " " + attackUtils.observedString(benignInput);
                        console.log(result);
                        process.exit(0);
                    });
            });
    });
}
