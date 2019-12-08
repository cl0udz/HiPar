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
    var stack = [{ param: param, nameChain: [] }]
    var tmp = clone(param)
    tmp = source(tmp, rootMagicName);
    testFunc(tmp);
    while (stack.length > 0) {
        s = stack.shift();
        if (typeof (s.param) == 'string' || typeof(s.param)== 'null' || typeof(s.param) == 'undefined' ) continue;
        if (Array.isArray(s.param)) {
            console.log(s.param);
            for (var i = 0; i < s.param.length; i++) {
                var nameChain = s.nameChain.concat(i);
                stack.push({param:s.param[i],nameChain:nameChain});
            }
            continue;
        }
        console.log(s.param)
        var properties = Object.getOwnPropertyNames(s.param);
        for (var property of properties){
            var nameChain = s.nameChain.concat(property);
            stack.push({param:s.param[property],nameChain:nameChain});
            var tmp = clone(param);
            try{
                addSource(tmp,nameChain.slice());
            }
            catch(e){
                console.log(tynt.Red(e));
                console.log(nameChain)
            }
            testFunc(tmp);
        }
    }
}

function addSource(obj,hiparNames){

    while(hiparNames.length > 1){
        var nextProperty = hiparNames.shift();
        obj = obj[nextProperty];
    }
    obj[hiparNames[0]] = source(obj[hiparNames[0]],hiparNames[0]);     
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
                hipar_multi_names = hipar_name.split('.')

                if (property != rootMagicName)
                    tmp = tmp[property];
                while (hipar_multi_names.length > 1) {
                    name = hipar_multi_names.shift()
                    tmp[name] = {};
                    tmp = tmp[name];
                }
                name = hipar_multi_names.shift()
                tmp[name] = "H1P4r";

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
    console.log(tynt.Green(var_name))
    return source_var;
}

function verify_hipar(source_var) {
    return source_var;
}

function clone(a) {
    return JSON.parse(JSON.stringify(a));
 }


exports.clone = clone;
exports.loopProperty = loopProperty;
exports.verifyHipar = verifyHipar;
exports.entry = entry;
exports.sendViaWebRequest = sendViaWebRequest;
