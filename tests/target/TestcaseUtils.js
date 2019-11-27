var path = require('path');
var tynt = require('tynt');
var fs = require('fs')
var rootMagicName = 'R0ot';
var http = require('http')


function sendViaWebRequest(method, data, location, port, hostname) {

    var http = require('http');

    var content = data;
    var options = {
        hostname: hostname || '127.0.0.1',
        port: port,
        path: location || '/',
        method: 'GET'
    };
    if (method == 'post') {
        options.method = 'POST';
        options.headers = {
            'Content-Type': 'application/json'
        }
        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        // 将数据写入请求体
        req.write(content);//注意这个地方  

        req.end();
    } else {
        options.location += '?' + content;
        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        req.end();
    }
}



function entry(testFunc, param) {
    if (process.argv[2] == 'analysis') loopProperty(testFunc, param);
    else if (process.argv[2] == 'verify') verifyHipar(testFunc, param, ProjectDir);
    else {
        console.log(tynt.Red('Incorrect Prompt argumnet, we do analysis by default'));
        loopProperty(testFunc, param);
    }
}
//loop iteration
function loopProperty(testFunc, param) {
    var properties = Object.getOwnPropertyNames(param);

    //Running test with purely untainted param
    console.log(tynt.Green('[-]Running test with purely untainted param'));
    testFunc(param);

    //Running test with with tainted property
    if (typeof (param) == 'string') return;
    console.log("properties: ", properties);
    for (var property of properties) {
        console.log(tynt.Green('[-]Running test with tainted property: ' + property));
        var tmp = clone(param); // generate a copy of param
        tmp[property] = source(tmp[property], property);
        testFunc(tmp);
    }

    //Running test with param tainted in root
    param = source(param, rootMagicName);
    console.log(tynt.Green('[-]Running test with param tainted in root'));
    testFunc(param);

}


function verifyHipar(testFunc, param) {
    //verify Hipar 
    testFileName = process.argv[1].split('/').pop()
    var verifyPath = path.resolve(__dirname, "../../outputs/hidden_attr/" + testFileName + "on");
    // console.log(tynt.Green("located verify json file in "+verifyPath));
    console.log(verifyPath)
    if (fs.existsSync(verifyPath)) {
        console.log(tynt.Green('[-]Verifying hidden Parameter'));
        var result = JSON.parse(fs.readFileSync(verifyPath));

        for (var property in result) {
            for (var hipar_name in result[property]) {
                var hipar_content = result[property][hipar_name];
                var tmp = clone(param); // generate a copy of param
                if (property == rootMagicName)
                    tmp[hipar_name] = "H1P4r";
                else
                    tmp[property][hipar_name] = "H1P4r";
                verify_hipar(hipar_content.file, hipar_name, hipar_content.base);
                console.log(tmp)
                try {
                    testFunc(tmp);
                } catch (e) {
                    process.stdout.write(tynt.Red('[Verify Error]:'));
                    console.log(tynt.Red(e));
                }
            }
        }
    }
}



function source(source_var, var_name) {
    return source_var;
}

function verify_hipar(source_var) {
    return source_var;
}

function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}


exports.clone = clone;
exports.loopProperty = loopProperty;
exports.verifyHipar = verifyHipar;
exports.entry = entry;
exports.sendViaWebRequest = sendViaWebRequest;
