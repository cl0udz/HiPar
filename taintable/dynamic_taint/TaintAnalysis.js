/*
 *  A very simple hello world program
 *  demonstrating some simple operation
 *  interception using Jalangi
 */

J$.analysis = {};

(function(sandbox) {
    function TaintAnalysis() {
        var tynt = require('tynt');
	    var attr_finder = require(__dirname + '/../utils/attrFinder.js');
        var iidToLocation = sandbox.iidToLocation;
        var taint_tag_to_input = {};

        var currentFile;
        var currentFunc;
        var valueID = 0;

        var tainted_values = {}; // {file: {function: {id: loc}}}
        var taint_trace = {};

        var smemory = sandbox.smemory;

	    function convertString(val){
	        return new String(val);
	    }

        this.scriptEnter = function(iid, fileName) {

        };

        this.scriptExit = function(iid) {

        };

        this.functionEnter = function(iid, fun, dis, args) {

        };

        this.functionExit = function(iid) {

        };

        this.literal = function(iid, val) {
            //console.log('creating literal operation intercepted: ' + val);
            return val;
        };

        this.invokeFunPre = function(iid, f, base, args, isConstructor) {
            //console.log('function call intercepted before invoking');
    	    if(f){
	    	//console.log("Calling: " + f.name);
	        }
        };

        this.functionEnter = function(iid, fun, dis /* this */ , args) {

        };

        this.invokeFun = function(iid, f, base, args, val, isConstructor) {
            //console.log('function call intercepted after invoking');

            if (f.name === "source") {
                //tainted_values[val.id] = iidToLocation(val.id);
		        if(typeof(args[0]) == "string"){
		            args[0] = convertString(args[0]);
		        }
		        args[0].tainted = "source";

		        if(typeof(val) == "string"){
		            val = convertString(val);
		        }
                valueID++;
		        val.tainted = "source";
                val.iiid = valueID;
                taint_tag_to_input[valueID] = {"name": args[1], "location": "undefined"};
                console.log(tynt.Blue("[source] name: " + args[1]));
            }
	    //console.log("Tainted something. args[0]: " + args[0]);
            return val;
        };

        this.getField = function(iid, base, offset, val) {
            //console.log('get field operation intercepted: ' + offset);
            if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                taint_tag_to_input[val.iiid].location = iidToLocation(iid);
                console.log("---------New Variable--------");
                console.log(tynt.Blue("[Tagging] source: " + taint_tag_to_input[val.iiid].name + ", tag: " + val.iiid));
                val.tainted = val.iiid;
            }

	        if(val && val.hasOwnProperty('tainted') && val.tainted > 0){
                console.log(tynt.Blue("[Tainted variable] name: " + taint_tag_to_input[val.iiid].name));//+ ", val: " + val);
                var vlocation = iidToLocation(iid);
                console.log("Location: " + vlocation);
                if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                    var content = vlocation.slice(1,-1).split(":");
                    var loc = {};
                    console.log(content);
                    loc['file_loc'] = content[0];
                    loc['var_loc'] = {};
                    loc['var_loc']['start'] = {};
                    loc['var_loc']['end'] = {};
                    loc['var_loc']['start']['line'] = parseInt(content[1], 10);

                    loc['var_loc']['start']['column'] = parseInt(content[2], 10);
                    loc['var_loc']['end']['line'] = parseInt(content[3], 10);
                    loc['var_loc']['end']['column'] = parseInt(content[4], 10);

                    console.log(JSON.stringify(loc));
		    
                    hidden_list = attr_finder.analyze_hidden_attr(loc['file_loc'], [attr_finder.get_name_by_loc(loc)]);
                    console.log(tynt.Blue("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + hidden_list));
                    console.log("----------------------------");
                }
            }
            return val;
        }

        this.read = function(iid, name, val, isGlobal) {
            if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                //taint_tag_to_input[valueID] = {"name": name, "location": iidToLocation(iid)};
                console.log("---------New Variable--------");
                taint_tag_to_input[val.iiid].location = iidToLocation(iid);
                console.log(tynt.Blue("[Tagging] source: " + taint_tag_to_input[val.iiid].name + ", tag: " + valueID));
                val.tainted = val.iiid;
            }

            //console.log('reading variable operation intercepted: ' + name);
	        if(val && val.hasOwnProperty('tainted') && val.tainted > 0){
		        console.log(tynt.Blue("[Tainted variable] name: " + name));//+ ", val: " + val);
		        var vlocation = iidToLocation(iid);
		        //console.log("Location: " + vlocation);
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

		            console.log("[Location] " + JSON.stringify(loc));

		            hidden_list = attr_finder.analyze_hidden_attr(loc['file_loc'], [attr_finder.get_name_by_loc(loc)]);
                    console.log(tynt.Blue("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + hidden_list));
                    console.log("----------------------------");
		        }
	        }
            return val;
        };

        this.write = function(iid, name, val, oldValue) {
            //console.log('writing variable operation intercept: ' + name);
	        if(val && val.hasOwnProperty("tainted") && val.tainted > 0)
		        console.log("write to name: " + name);
            if (val && tainted_values.hasOwnProperty(val.id) != -1) {
                tainted_values[iid] = iidToLocation(iid);
            }
            // TODO: Clean the value in the future
        
            return val;
        };

        this.binary = function(iid, op, left, right, result_c) {
            //console.log('binary operation intercepted: ' + op);

	        if(left && left.hasOwnProperty("tainted") && left.tainted == true){
		    
	        }
            return result_c;
        };
    }

    sandbox.analysis = new TaintAnalysis();
})(J$);
