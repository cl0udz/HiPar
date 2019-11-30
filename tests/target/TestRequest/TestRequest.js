const request = require("request");

const data = {uri:'http://www.wupco.cn',har:{'method':'post'}};

function test(input){
    request.get(input, function (error, response, body) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
}

var utils = require('../TestcaseUtils.js');
utils.entry(test, data);
