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
        var fs = require("fs");

        var iidToLocation = sandbox.iidToLocation;
        var taint_tag_to_input = {};
        var iid_to_name = {};

        var omap = new WeakMap();

        var currentFunc;
        var valueID = 0;
        var analysis_property = ['tainted', 'tainted_iiid'];

        var tainted_values = {}; // {file: {function: {id: loc}}}
        var hidden_attr = {};
        var sname = "";

        var source_executed = false;

        var smemory = sandbox.smemory;

	    function convertString(val){
	        return new String(val);
	    }

        // return location of given iid
        function get_loc_by_iid(iid){
            var vlocation = iidToLocation(iid);
            // original location format: {file_path:start_line:start_column:end_line:end_column}
            // all the number start from 1 while not 0
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
                //console.log(JSON.stringify(loc));
                
                name = attr_finder.get_name_by_loc(loc);
                //console.log("[get name] " + name);
                
                return [loc['file_loc'], name];
            } else {
                return null;
            }
        }

        this.scriptEnter = function(iid, fileName) {
            if(sname == ""){
                fnarray = fileName.split("/");
                sname = fnarray[fnarray.length - 1] + "on";
            }
        };

        this.scriptExit = function(iid) {
        };

        this.functionEnter = function(iid, fun, dis, args) {
        };

        this.functionExit = function(iid) {
        };

        this.literal = function(iid, val) {
            return val;
        };

        this.invokeFunPre = function(iid, f, base, args, isConstructor) {
            //console.log('function call intercepted before invoking');
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
                val.tainted_iiid = valueID;
                taint_tag_to_input[valueID] = {"name": args[1], "location": "undefined"};
                //val.tainted_path = args[1];
                //console.log(("[source] name: " + args[1]));

                hidden_attr[args[1]] = {};

                source_executed = true;
            }
            return val;
        };

        this.putField = function(iid, base, offset, val){
            // For a putField statement a[b] = c;
            // iid      ->      the putField statement.
            // base     ->      object a
            // offset   ->      the string "b"
            // val      ->      object c
            if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                //console.log("base: type is " + typeof(base) + ", content is" + JSON.stringify(base));
                //console.log(base);
                //console.log("offset: type is " + typeof(base) + ", content is" + JSON.stringify(offset));
                //console.log(offset);
                //console.log("val: type is " + typeof(base) + ", content is" + JSON.stringify(val));
                //console.log(val);

                taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                //console.log("---------New Taint - putField--------");
                //console.log("[Tagging] source: " + taint_tag_to_input[val.tainted_iiid].name + ", tag: " + val.tainted_iiid + ", func: " + currentFunc);
                //console.log("[Tagging] location: " + taint_tag_to_input[val.tainted_iiid].location);
                val.tainted = val.tainted_iiid;
            }
            return val;
        }

        this.getField = function(iid, base, offset, val) {
            // For a getField statement a[b] ;
            // iid      ->      the putField statement.
            // base     ->      object a
            // offset   ->      the string "b"
            // val      ->      object c
            
            //if(base && base.hasOwnProperty('tainted') && base.tainted > 0 && val && analysis_property.indexOf(offset) == -1){
            //    console.log("base: type is " + typeof(base) + ", content is" + JSON.stringify(base));
            //    console.log(base);
            //    console.log("offset: type is " + typeof(base) + ", content is" + JSON.stringify(offset));
            //    console.log(offset);
            //    console.log("val: type is " + typeof(base) + ", content is" + JSON.stringify(val));
            //    console.log(val);

            //    name_data = get_loc_by_iid(iid);
            //    if(name_data != null){
            //        console.log(("[Tainted variable - base] current name: " + name_data[1]));
            //        console.log(("arg[0]: " + name_data[0]));
            //        console.log(("name: " + name));
            //        hidden_list = attr_finder.analyze_hidden_attr(name_data[0], [name_data[1]]);//[name_data[1]]);
            //        console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[base.tainted].name + ": " + hidden_list));
            //    }
            //}
            
            if(val){
                if(typeof(offset) == "string"){
                    //console.log("offset: " + offset + ", loc: " + iidToLocation(iid));
                    //console.log(val);
                }

                name_data = get_loc_by_iid(iid);
                if(name_data == null)
                    return val;

                try{
                    if(typeof(val) == "object"){
                        //console.log(val);
                  	    if(omap.get(base) == undefined){
                    	    omap.set(val, name_data[1] + "." + offset);
                            //console.log("[omap] value: " + omap.get(val));
                        } else {
        	                omap.set(val, omap.get(base) + "." + offset);
                            //console.log("[omap] value: " + omap.get(val));
                        }
                    }
                } catch (e){
                    console.log(tynt.Red("[Error]  " + e));
                    console.log(tynt.Red("[Error] val: " + val));
                }

	            if(val && val.hasOwnProperty('tainted') && val.tainted > 0 && analysis_property.indexOf(offset) == -1){
                    //console.log(("[Tainted variable] source name: " + taint_tag_to_input[val.tainted_iiid].name));//+ ", val: " + val);
		    
                    val.tainted_loc = name_data[0];

                    //console.log("[tainted_path] " + omap.get(val));
                    if(name_data != null){
                        //console.log(("[Tainted variable - getField] current name: " + omap.get(val)));
                        //console.log(("arg[0]: " + name_data[0]));
                        hidden_list = attr_finder.analyze_hidden_attr(name_data[0], [omap.get(val)]);
                        //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + hidden_list));
                            
                        for(var key in hidden_list){
                            original_param = hidden_list[key].split(".");
                            hidden_attr[taint_tag_to_input[val.tainted].name][original_param[original_param.length - 1]] = name_data[0];
                        }
                    }
                }
            }
            return val;
        }

        this.read = function(iid, name, val, isGlobal) {
            if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                //console.log(("---------New Taint - Read--------"));
                taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                //console.log(("[Tagging] source: " + taint_tag_to_input[val.tainted_iiid].name + ", tag: " + valueID));
                val.tainted = val.tainted_iiid;
            }

	        if(val && val.hasOwnProperty('tainted') && val.tainted > 0){
		        //console.log("[Tainted variable - Read] name: " + name);//+ ", val: " + val);

                name_data = get_loc_by_iid(iid);
                if(name_data != null){
                    //console.log("arg[0]: " + name_data[0]);
                    
		            hidden_list = attr_finder.analyze_hidden_attr(name_data[0], [name_data[1]]);
                    //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + hidden_list));
                    for(var key in hidden_list){
                        original_param = hidden_list[key].split(".");
                        hidden_attr[taint_tag_to_input[val.tainted].name][original_param[original_param.length - 1]] = name_data[0];
                    }
	            }
            }

            iid_to_name[iid] = name;
            return val;
        };

        this.write = function(iid, name, val, oldValue) {
            // For a write statement a = func(b);
            // iid      ->      func(b)
            // name     ->      string "a"
            // val      ->      the value of a after assignment
            // oldValuoe->      the value of a before assignment
            if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                //console.log("name: type is " + typeof(name) + ", content is" + JSON.stringify(name));
                //console.log(name);
                //console.log("val: type is " + typeof(val) + ", content is" + JSON.stringify(val));
                //console.log(val);
                //console.log("oldValue: type is " + typeof(oldValue) + ", content is " + JSON.stringify(oldValue));
                //console.log(oldValue);

                //taint_tag_to_input[valueID] = {"name": name, "location": iidToLocation(iid)};
                //console.log("---------New Taint - Write--------");
                taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                //console.log("[Tagging] source: " + taint_tag_to_input[val.tainted_iiid].name + ", tag: " + valueID);
                val.tainted = val.tainted_iiid;
            }

	        if(val && val.hasOwnProperty("tainted") && val.tainted > 0){
		        //console.log("write to name: " + name);
            }
            if (val && val.hasOwnProperty("id") && tainted_values.hasOwnProperty(val.id) != -1) {
                tainted_values[iid] = iidToLocation(iid);
            }

            iid_to_name[iid] = name;
            return val;
        };

        this.binary = function(iid, op, left, right, result_c) {
            //console.log('binary operation intercepted: ' + op);
            return result_c;
        };
        
        this.endExecution = function(){
            //console.log(omap);
            if(!source_executed)
                console.log(tynt.Red("[Error from TaintAnalysis] source function has never been called."));

            //console.log("End");
            //console.log("sname: " + sname);
            console.log(hidden_attr);
            fs.writeFileSync(__dirname + "/../../outputs/hidden_attr/" + sname, JSON.stringify(hidden_attr));
        }
    }

    sandbox.analysis = new TaintAnalysis();
})(J$);
