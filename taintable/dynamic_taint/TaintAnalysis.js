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

        var taint_state = true;

        var iidToLocation = sandbox.iidToLocation;
        var taint_tag_to_input = {};
        var iid_to_name = {};

        var omap = new WeakMap();
        var tainted_var = {};

        var currentFunc;
        var valueID = 0;
        var analysis_property = ['tainted', 'tainted_iiid'];

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
                //console.log(("[source] name: " + args[1]));

                hidden_attr[args[1]] = {};
                tainted_var[args[1]] = [];

                taint_state = true;
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
            try{
                if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                    taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                    //console.log("---------New Taint - putField--------");
                    //console.log("[Tagging] source: " + taint_tag_to_input[val.tainted_iiid].name + ", tag: " + val.tainted_iiid + ", func: " + currentFunc);
                    //console.log("[Tagging] location: " + taint_tag_to_input[val.tainted_iiid].location);
                    val.tainted = val.tainted_iiid;
                }
            } catch(e) {

            }
            return val;
        }

        this.getField = function(iid, base, offset, val) {
            // For a getField statement a[b] ;
            // iid      ->      the putField statement.
            // base     ->      object a
            // offset   ->      the string "b"
            // val      ->      object c
            
            if(taint_state && val ){//&& source_executed){
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

                try{
	                if(val && val.hasOwnProperty('tainted') && val.tainted > 0 && analysis_property.indexOf(offset) == -1){
                        val.tainted_loc = name_data[0];

                        if(name_data != null){
                            //tainted_var[taint_tag_to_input[val.tainted].name].push([name_data[0], [omap.get(val)]]);
                            //hidden_list = attr_finder.analyze_hidden_attr(name_data[0], [omap.get(val)]);
                            //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + hidden_list));
                            if(tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]] == undefined)
                                tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]] = [omap.get(val)];
                            else if(tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]].indexOf(omap.get(val)) == -1)
                                tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]].push(omap.get(val));
                            
                            //for(var key in hidden_list){
                            //    original_param = hidden_list[key].split(".");
                            //    hidden_attr[taint_tag_to_input[val.tainted].name][original_param[original_param.length - 1]] = name_data[0];
                            //}
                        }
                    }
                } catch(e){
                    console.log("val type: " + typeof(val) + ", offset: " + offset);
                    console.log(iidToLocation(iid));
                    console.log(val);
                }
            }
            return val;
        }

        this.read = function(iid, name, val, isGlobal) {
            if(taint_state){
                if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                    taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                    //console.log(("[Tagging] source: " + taint_tag_to_input[val.tainted_iiid].name + ", tag: " + valueID));
                    val.tainted = val.tainted_iiid;
                }

	            if(val && val.hasOwnProperty('tainted') && val.tainted > 0){
                    name_data = get_loc_by_iid(iid);
                    if(name_data != null){
                        console.log(name_data[1]);
                        if(tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]] == undefined)
                            tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]] = [name_data[1]];
                        else if(tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]].indexOf(name_data[1]) == -1)
                            tainted_var[taint_tag_to_input[val.tainted].name][name_data[0]].push(name_data[1]);
                        //console.log(name_data[0] + ", " + name_data[1]);
                        //console.log("arg[0]: " + name_data[0]);
		                //hidden_list = attr_finder.analyze_hidden_attr(name_data[0], [name_data[1]]);
                        //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + hidden_list));
                        //for(var key in hidden_list){
                        //    original_param = hidden_list[key].split(".");
                        //    hidden_attr[taint_tag_to_input[val.tainted].name][original_param[original_param.length - 1]] = name_data[0];
                        //}
	                }
                }

                iid_to_name[iid] = name;
                return val;
            }
            return val;
        };

        this.write = function(iid, name, val, oldValue) {
            // For a write statement a = func(b);
            // iid      ->      func(b)
            // name     ->      string "a"
            // val      ->      the value of a after assignment
            // oldValuoe->      the value of a before assignment
            if(val && val.hasOwnProperty('tainted') && val.tainted == "source"){
                taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                //console.log("[Tagging] source: " + taint_tag_to_input[val.tainted_iiid].name + ", tag: " + valueID);
                val.tainted = val.tainted_iiid;
            }

            iid_to_name[iid] = name;
            return val;
        };

        this.binary = function(iid, op, left, right, result_c) {
            return result_c;
        };
        
        function get_hidden_attr(tainted_dict){
            //tainted_dict =  {"param": {file_path: [tainted_varibles], file_path2: [tainted_variable2]}}
            for(var param in tainted_dict){
                for(var file in tainted_dict[param]){
                    //console.log("file: " + file + ", param: " + JSON.stringify(tainted_dict[param][file]));
                    hidden_list = attr_finder.analyze_hidden_attr(file, tainted_dict[param][file]);
                    //console.log("hidden_list: " + hidden_list);
                    for(var key in hidden_list){
                        //console.log("key: " + key);
                        for(var hidden_index in hidden_list[key]){
                            obj_index = hidden_list[key][hidden_index].indexOf(key);
                            dot_index = hidden_list[key][hidden_index].substring(obj_index+key.length+1).indexOf(".");
                            //console.log("path: " + hidden_list[key][hidden_index].substring(obj_index+dot_index+key.length+2));
                            hidden_param = hidden_list[key][hidden_index].substring(obj_index+dot_index+key.length+2);
                            //original_param = hidden_list[key][hidden_index].split(".");
                            base_param = "";
                            if(key.indexOf(".") == -1){
                                base_param = key;
                            } else {
                                key_arr = key.split(".");
                                base_param = key_arr[key_arr.length - 1];
                            }

                            //hidden_attr[param][original_param[original_param.length - 1]] = {"base": original_param[1], "file": file};
                            hidden_attr[param][hidden_param] = {"base": base_param, "file": file};
                        }
                    }
                }
            }
        }

        this.endExecution = function(){
            //console.log(omap);
            if(!source_executed){
                console.log(tynt.Red("[Error from TaintAnalysis] source function has never been called."));
                return;
            }

            //console.log("sname: " + sname);
            get_hidden_attr(tainted_var);
            //console.log(JSON.stringify(tainted_var));

            console.log(hidden_attr);
            fs.writeFileSync(__dirname + "/../../outputs/hidden_attr/" + sname, JSON.stringify(hidden_attr));
        }
    }

    sandbox.analysis = new TaintAnalysis();
})(J$);
