/*
 *  A very simple hello world program
 *  demonstrating some simple operation
 *  interception using Jalangi
 */

J$.analysis = {};

(function(sandbox) {
    function TaintAnalysis() {
        var iidToLocation = sandbox.iidToLocation;

        var currentFile;
        var currentFunc;
        var valueID = 0;

        var tainted_values = {}; // {file: {function: {id: loc}}}
        var taint_trace = {};

        var smemory = sandbox.smemory;

        this.scriptEnter = function(iid, fileName) {

        };

        this.scriptExit = function(iid) {

        };

        this.functionEnter = function(iid, fun, dis, args) {

        };

        this.functionExit = function(iid) {

        };

        this.literal = function(iid, val) {
            console.log('creating literal operation intercepted: ' + val);
            return val;
        };

        this.invokeFunPre = function(iid, f, base, args, isConstructor) {
            console.log('function call intercepted before invoking');

        };

        this.functionEnter = function(iid, fun, dis /* this */ , args) {

        };

        this.invokeFun = function(iid, f, base, args, val, isConstructor) {
            console.log('function call intercepted after invoking');

            val.id = valueID++;
            if (f.name === "source") {
                //tainted_values[val.id] = iidToLocation(val.id);
                args[0].tainted = true;
            }

            currentFunc = f.name;
            return val;
        };

        this.getField = function(iid, base, offset, val) {
            console.log('get field operation intercepted: ' + offset);
            return val;
        }

        this.read = function(iid, name, val, isGlobal) {
            console.log('reading variable operation intercepted: ' + name);
            return val;
        };

        this.write = function(iid, name, val, oldValue) {
            console.log('writing variable operation intercept: ' + name);
            if (val && tainted_values.hasOwnProperty(val.id) != -1) {
                tainted_values[iid] = iidToLocation(iid);
            }
            // TODO: Clean the value in the future
            return val;
        };

        this.binary = function(iid, op, left, right, result_c) {
            console.log('binary operation intercepted: ' + op);

            return result_c;
        };
    }

    sandbox.analysis = new TaintAnalysis();
})(J$);