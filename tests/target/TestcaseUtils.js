"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.get-own-property-names");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var path = require('path');

var tynt = require('tynt');

var fs = require('fs');

var rootMagicName = 'R0ot';

var http = require('http');

var async = require('async');

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
    };
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
    }); // 将数据写入请求体

    req.write(content); //注意这个地方  

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

function entry(testFunc, param, sync) {
  if (sync != true) sync = false;
  if ('analysis' in process.argv) loopProperty(testFunc, param, sync);else if ('verify' in process.argv) verifyHipar(testFunc, param, ProjectDir);else {
    console.log(tynt.Red('Incorrect Prompt argumnet, we do analysis by default'));
    loopProperty(testFunc, param, sync);
  }
} //loop iteration


function loopProperty(testFunc, param, sync) {
  var param_list = [];
  var stack = [{
    param: param,
    nameChain: []
  }];
  var tmp = clone(param);
  tmp = source(tmp, rootMagicName);
  param_list.push(tmp);

  while (stack.length > 0) {
    var s = stack.shift();
    if (typeof s.param == 'string' || s.param == null || s.param == undefined) continue;

    if (Array.isArray(s.param)) {
      console.log(s.param);

      for (var i = 0; i < s.param.length; i++) {
        var nameChain = s.nameChain.concat(i);
        stack.push({
          param: s.param[i],
          nameChain: nameChain
        });
      }

      continue;
    }

    console.log(s.param);
    var properties = Object.getOwnPropertyNames(s.param);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var property = _step.value;
        var nameChain = s.nameChain.concat(property);
        stack.push({
          param: s.param[property],
          nameChain: nameChain
        });
        var tmp = clone(param);

        try {
          addSource(tmp, nameChain.slice());
        } catch (e) {
          console.log(tynt.Red(e));
          console.log(nameChain);
        }

        param_list.push(tmp);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  if (sync) {
    var runFunc = function runFunc() {
      var i;
      return regeneratorRuntime.async(function runFunc$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < param_list.length)) {
                _context.next = 9;
                break;
              }

              console.log('start', i);
              _context.next = 5;
              return regeneratorRuntime.awrap(testFunc(param_list[i]));

            case 5:
              console.log('end', i);

            case 6:
              i++;
              _context.next = 1;
              break;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    runFunc();
  } else {
    for (var i = 0; i < param_list.length; i++) {
      testFunc(param_list[i]);
    }
  }
}

function addSource(obj, hiparNames) {
  if (hiparNames.length == 1) {
    obj[hiparNames[0]] = source(obj[hiparNames[0]], hiparNames[0]);
    return;
  }

  var nextProperty = hiparNames.shift();
  return addSource(obj[nextProperty], hiparNames);
}

function verifyHipar(testFunc, param) {
  //verify Hipar 
  testFileName = process.argv[1].split('/').pop();
  var verifyPath = path.resolve(__dirname, "../../outputs/hidden_attr/" + testFileName + "on"); // console.log(tynt.Green("located verify json file in "+verifyPath));

  console.log(verifyPath);

  if (fs.existsSync(verifyPath)) {
    console.log(tynt.Green('[-]Verifying hidden Parameter'));
    var result = JSON.parse(fs.readFileSync(verifyPath));

    for (var property in result) {
      for (var hipar_name in result[property]) {
        var hipar_content = result[property][hipar_name];
        var tmp = clone(param); // generate a copy of param

        hipar_multi_names = hipar_name.split('.');
        if (property != rootMagicName) tmp = tmp[property];

        while (hipar_multi_names.length > 1) {
          name = hipar_multi_names.shift();
          tmp[name] = {};
          tmp = tmp[name];
        }

        name = hipar_multi_names.shift();
        tmp[name] = "H1P4r";
        verify_hipar(hipar_content.file, hipar_name, hipar_content.base);
        console.log(tmp);

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
  console.log(tynt.Green(var_name));
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