/*
  Copyright (C) 2014, Daishi Kato <daishi@axlight.com>
  Copyright (C) 2014, Etienne Rossignon
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in th
      documentation and/or other materials provided with the distributio

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
  HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/* global BenchmarkSuite: false */

var vm = require('vm');
var fs = require('fs');
var path = require('path');
var os = require('os');

GLOBAL.print = function(str) {
  console.log(str);
};

GLOBAL.read = function(a, b) {
  var a = path.normalize(a);
  var c = fs.readFileSync(a);
  if (!c && a != path.resolve(a)) {
    a = path.join(__dirname, '..', 'src', a);
    c = fs.readFileSync(a);
  }
  if (c && !b) {
    c = c.toString();
  }
  return c;
};

function load(filename) {
  global.require = require;
  vm.runInThisContext(fs.readFileSync(filename, 'utf8'), filename);
}

var base_dir = __dirname + '/../program/';

load(__dirname + '/base.js');
load(base_dir + 'code-load.js');

var success = true;

function PrintResult(name, result) {
  print((name + '                      ').substr(0, 20) + ': ' + result);
}

function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}

function PrintScore(score) {
  if (success) {
    print('----');
    print('Score (version ' + BenchmarkSuite.version + '): ' + score);
  }
}

BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

function run() {
  console.log('    hostname     :', os.hostname());
  console.log('    node version :', process.version);
  console.log('      V8 version :', process.versions['v8']);
  console.log(' platform & arch :', process.platform, process.arch);
  console.log('');
  console.log(' config :', require('util').inspect(process.config, {
    colors: true,
    depth: 10
  }));
  console.log('');
  BenchmarkSuite.RunSuites({
    NotifyResult: PrintResult,
    NotifyError: PrintError,
    NotifyScore: PrintScore
  });
  console.log(' duration ', process.uptime(), ' seconds');
}

run();

