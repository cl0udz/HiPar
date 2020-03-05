// require('./node_modules/mongo-express/app') 
var utils = require('../TestcaseUtils')

var doc ={ user:'test', pass:'test123' };

function send(doc) {
    var request = require('request');
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
        var burp0_bodyString = "document="+JSON.stringify(doc);

        var burp0_headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0", 
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", 
            "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2", 
            "Accept-Encoding": "gzip, deflate", 
            "Content-Type": "application/x-www-form-urlencoded", 
            "Content-Length": "104", 
            "Origin": "http://localhost:8081", 
            "Authorization": "Basic YWRtaW46cGFzcw==", 
            "Connection": "close", 
            "Referer": "http://localhost:8081/db/local/test?skip=0&key=&value=&type=&query=&projection=", 
            "Upgrade-Insecure-Requests": "1",
        }

        var burp01_options = {
            url: "http://localhost:8081/db/local/test",
            headers: burp0_headers,
            method: "post",
            body: burp0_bodyString,
            jar:j
        }
        request(burp01_options, function (error, response, body) {
            console.log('statusCode:', response && response.statusCode)
            console.log('error: ', error)
            console.log('body: ', body)
        });
  }


function test() {
    utils.entry(send, doc);
}

setTimeout(test, 5000);
// setTimeout(process.exit, 10000);