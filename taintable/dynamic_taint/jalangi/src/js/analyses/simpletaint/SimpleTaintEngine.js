/*
 * Copyright 2013 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen

(function (sandbox) {

    function SimpleTaintEngine() {
        var TRACE_FILE_NAME = "jalangi_trace";
        var TAINT_SUMMARY = "jalangi_taint";
        var ConcolicValue = require('./../../ConcolicValue');
        var getIIDInfo = require('./../../utils/IIDInfo');
        var iidToLocation = sandbox.iidToLocation;
        var taintedConditionals = {};
        var writeSet = {};
        var readSet = {};
        if (!(this instanceof SimpleTaintEngine)) {
            return new SimpleTaintEngine();
        }

        var getConcrete = this.getConcrete = ConcolicValue.getConcrete;
        var getSymbolic = this.getSymbolic = ConcolicValue.getSymbolic;

        function showLocation(iid) {
           console.log('  Source Location: ' + iidToLocation(iid));
        }

        function get_name_by_iid(iid){
            var vlocation = iidToLocation(iid);
            console.log("Location: " + vlocation);
            if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                var content = vlocation.slice(1,-1).split(":");
                var loc = {};
                //console.log(content);
                loc['file_loc'] = content[0];
                loc['var_loc'] = {};
                loc['var_loc']['start'] = {};
                loc['var_loc']['end'] = {};
                loc['var_loc']['start']['line'] = parseInt(content[1], 10);

                loc['var_loc']['start']['column'] = parseInt(content[2], 10) - 1;
                loc['var_loc']['end']['line'] = parseInt(content[3], 10);
                loc['var_loc']['end']['column'] = parseInt(content[4], 10) - 1;
                //console.log(JSON.stringify(loc));
                
                return [loc['file_loc']];
            } else {
                return null;
            }
        }



        this.beginExecution = function (prefix) {
            this.prefix = prefix;
        }

        this.getField = function (iid, base, offset, result_c) {
            if (result_c instanceof ConcolicValue) {
                return result_c;
            } else {
                console.log('[Tainted variable in getField]:'+get_name_by_iid(iid))
                return new ConcolicValue(result_c, true);
            }
        }

        this.putField = function (iid, base, offset, val) {
            var base_c = this.getConcrete(base);
            if (!(val instanceof ConcolicValue)) {
                base_c[offset] = new ConcolicValue(val, false);
            }
            return val;
        }

        this.binary = function (iid, op, left, right, result_c) {
            var left_s = getSymbolic(left);
            var right_s = getSymbolic(right);
            if (left_s || right_s) {
                return new ConcolicValue(result_c, true);
            } else {
                return  result_c;
            }
        }

        this.unary = function (iid, op, left, result_c) {
            var left_s = getSymbolic(left);
            if (left_s) {
                return new ConcolicValue(result_c, true);
            } else {
                return result_c;
            }
        }

        this.conditional = function (iid, left, result_c) {
            var left_s = getSymbolic(left);
            if (left_s) {
                taintedConditionals[iid] = true;
            }
            return left;
        }
        this.read = function(iid, name, val, isGlobal) {
            if (val instanceof ConcolicValue) {
                console.log('[New Taint - Read]',name)                
            }
            return val
        }



        this.endExecution = function () {
            var fileName = process.argv[2] ? process.argv[2] : TRACE_FILE_NAME;
            var suffix = fileName.substring(TRACE_FILE_NAME.length);
            var fs = require('fs');
            fs.writeFileSync(TAINT_SUMMARY + suffix, JSON.stringify([taintedConditionals, this.prefix]), "utf8");
            console.log("Listing tainted conditionals:")
            for (var iid in taintedConditionals) {
                if (taintedConditionals.hasOwnProperty(iid)) {
                    console.log("Branch at " + getIIDInfo(iid));
                }
            }
        }
    }

    sandbox.analysis = new SimpleTaintEngine();
}(J$));