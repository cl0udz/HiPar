/*
 * Copyright 2014 University of California, Berkeley.
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

// Author: Liang Gong

/*
 *  A very simple hello world program
 *  demonstrating some simple operation
 *  interception using Jalangi
 */

J$.analysis = {};

(function(sandbox) {
    function AnalysisEngine() {
        var iidToLocation = sandbox.iidToLocation;
        var PREFIX1 = "J$";
        var SPECIAL_PROP = "*" + PREFIX1 + "*";
        var TRACE_FILE_NAME = "jalangi_trace";
        var TAINT_SUMMARY = "jalangi_taint";
        var writeSet = {};
        var readSet = {};
        function ConcolicValue (concrete, symbolic) {
                this.concrete = concrete;
                this.symbolic = symbolic;
            }

        ConcolicValue.prototype.toString = function() {
            return this.concrete+"";
        };

        ConcolicValue.prototype.valueOf = function() {
            if (this.concrete !== null && this.concrete !== undefined)
                return this.concrete.valueOf();
            else
                return this.concrete;
        }

        ConcolicValue.getConcrete = function (val) {
            if (val instanceof ConcolicValue) {
                return val.concrete;
            } else {
                return val;
            }
        }

        ConcolicValue.getSymbolic = function (val) {
            if (val instanceof ConcolicValue) {
                return val.symbolic;
            } else {
                return undefined;
            }
        }

        var getConcrete =  this.getConcrete = ConcolicValue.getConcrete;
        var getSymbolic =  this.getSymbolic = ConcolicValue.getSymbolic;
        function showLocation(iid) {
            console.log('  Source Location: ' + iidToLocation(iid));
        }

        function HOP(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };

        function getValueWritten(result_c) {
            var c = getConcrete(result_c);
            var pval = [];
            var type = typeof c;
            pval[0] = type;
            if (!(type === "object" || type === "function")) {
                pval[1] = c;
            }
            return pval;
        }

        this.getField = function (iid, base, offset, result_c) {
                if (result_c instanceof ConcolicValue) {
                    return result_c;
                } else {
                    var base_c = this.getConcrete(base);
                    if (base_c[SPECIAL_PROP] === undefined || base_c[SPECIAL_PROP][SPECIAL_PROP] === undefined) {
                        return result_c;
                    }
                    var field = base_c[SPECIAL_PROP][SPECIAL_PROP] + "." + offset;
                    var sym = {};
                    sym[field] = getValueWritten(result_c);
                    return new ConcolicValue(result_c, sym);
                }
            }

            this.putField = function (iid, base, offset, val) {
                var pval = getValueWritten(val);
                var base_c = this.getConcrete(base);
                if (base_c[SPECIAL_PROP] !== undefined && base_c[SPECIAL_PROP][SPECIAL_PROP] !== undefined) {
                    var field = base_c[SPECIAL_PROP][SPECIAL_PROP] + "." + offset;
                    writeSet[field] = pval;
                }
                if (!(val instanceof ConcolicValue)) {
                    base_c[offset] = new ConcolicValue(val, {"nofield":pval});
                }
                return val;
            }



            this.unary = function (iid, op, left, result_c) {
                var left_s = getSymbolic(left);
                if (left_s) {
                    return new ConcolicValue(result_c, left_s);
                } else {
                    return result_c;
                }
            }

            this.conditional = function (iid, left, result_c) {
                var left_s = getSymbolic(left);
                if (left_s) {
                    for (var e in left_s) {
                        if (HOP(left_s, e)) {
                            readSet[e] = left_s[e];
                        }
                    }
                }
                return left;
            }

            this.endExecution = function () {

                //delete readSet.nofield;
                console.log(JSON.stringify([readSet, writeSet]));
            }
    }

    sandbox.analysis = new AnalysisEngine();
})(J$);