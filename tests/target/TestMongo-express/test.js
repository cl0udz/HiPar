var request = require('request');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
var burp0_bodyString = "document={\"_id\":1,\"user\":\"test\",\"pass\":\"tesssst123\"}"

var burp0_headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Authorization": "Basic YWRtaW46cGFzcw==", 
}

var burp0_options = {
    url: "http://localhost:8081/db/local/test",
    headers: burp0_headers,
    method: "post",
    followRedirect:false,
    body: burp0_bodyString
}
request(burp0_options, function (error, response, body) {
console.log('statusCode:', response && response.statusCode)
console.log('error: ', error)
console.log('body: ', body)
})

