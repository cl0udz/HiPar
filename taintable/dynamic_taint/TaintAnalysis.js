J$.analysis = {};

(function(sandbox) {
    function TaintAnalysis() {
        var tynt = require('tynt');
	var attr_finder = require(__dirname + '/../utils/attrFinder.js');
	var af = new attr_finder();
        var fs = require("fs");

        var taint_state = true;
        var source_executed = false; // if source() has never been called, nothing will be tainted. In most cases, 

        // API provided by Jalangi
        var iidToLocation = sandbox.iidToLocation;
        var smemory = sandbox.smemory;
        
        // internal variables
        var taint_tag_to_input = {};
        var omap = new WeakMap();
        var tainted_var = {};  // tainted_var = { "tainted_property_in_user_input" : {"file_path": [variables]} }
        var currentFunc;
        var valueID = 0;
        var analysis_property = ['tainted', 'tainted_iiid'];

        // results
        var hidden_attr = {}; // hidden_attr = {"tainted_property_in_user_input" : { "hidden_param" : {"base": base_variable, "file_path": file_path} }}
        var sname = "";

	    function convertString(val){
	        return new String(val);
	    }

        function convertNumber(val){
            return new Number(val);
        }

        // return location of given iid
        // input: iid of (function, variable ...)
        // output: [file_path, the name of something]
        function get_loc_by_iid(iid){
            var vlocation = iidToLocation(iid);
            // original location format: {file_path:start_line:start_column:end_line:end_column}
            // all the numbers start from 1 while not 0
            if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                var content = vlocation.slice(1,-1).split(":");
                var loc = {};
                
                loc['file_loc'] = content[0];
                loc['var_loc'] = {};
                loc['var_loc']['start'] = {};
                loc['var_loc']['end'] = {};
                loc['var_loc']['start']['line'] = parseInt(content[1], 10);

                loc['var_loc']['start']['column'] = parseInt(content[2], 10) - 1;
                loc['var_loc']['end']['line'] = parseInt(content[3], 10);
                loc['var_loc']['end']['column'] = parseInt(content[4], 10) - 1;
                // console.log(JSON.stringify(loc));
                
                name = af.get_name_by_loc(loc, af);
                // console.log("[get name] " + name);
                
                return [loc['file_loc'], name];
            } else {
                return null;
            }
        }

        this.scriptEnter = function(iid, fileName) {
            // get the name of current script
            if(sname == ""){
                fnarray = fileName.split("/");
                sname = fnarray[fnarray.length - 1] + "on";
            }
        };

        this.invokeFunPre = function(iid, f, base, args, isConstructor){
           //console.log("Entering " + f.name);
	   //console.log(get_loc_by_iid(iid));
        }

        this.invokeFun = function(iid, f, base, args, val, isConstructor) {
            // hook source to insert taint tag
            if (f.name === "source") {
		        //if(typeof(args[0]) == "string"){
		        //    args[0] = convertString(args[0]);
                //} else if(typeof(args[0] == "number")){
                //    args[0] = convertNumber(args[0]);
                //} else if(args[0] == null || args[0] == undefined){
                //    return val;
                //}

                //if(typeof(args[0] == "object"))
    		    //    args[0].tainted = "source";

		        if(typeof(val) == "string"){
		            val = convertString(val);
                } else if (typeof(val) == "number"){
                    val = convertNumber(val);
                } else if(val == null || val == undefined){
                    return val;
                }

                if(typeof(val) != "object")
                    return val;

                var source_id = ++valueID;
		        //val.tainted = "source";
                //val.tainted_iiid = valueID;
                //Object.defineProperty(val, "tainted", {configurable: true, get: function() {return "source";}});
		        val.tainted = "source";
                //Object.defineProperty(val, "tainted_iiid", {configurable: true, get: function() {return source_id;}});
        		val.tainted_iiid = source_id;

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
                if(val && Object.prototype.hasOwnProperty.call(val,'tainted') && val.tainted == "source"){
                    taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                    //val.tainted = val.tainted_iiid;
                    //delete val.tainted;
                    //Object.defineProperty(val, "tainted", {configurable: true, get: function() {return val.tainted_iiid;}});
	    	    val.tainted = val.tainted_iiid;
                }
            } catch(e){
                // catch the error caused by getter/setter
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
                var file_path = name_data[0].toString();
                var variable_name = name_data[1].toString();

                if(typeof(val) == "object"){
               	    if(omap.get(base) == undefined){
                  	    omap.set(val, variable_name + "." + offset);
                    } else {
       	                omap.set(val, omap.get(base).toString() + "." + offset);
                    }
                }

                if(val && Object.prototype.hasOwnProperty.call(val, 'tainted') && val.tainted > 0 && analysis_property.indexOf(offset) == -1){
                    val.tainted_loc = variable_name;
                    if(name_data != null){
                        //hidden_list = af.analyze_hidden_attr(name_data[0], [omap.get(val)], af);
                        //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + JSON.stringify(hidden_list)));
                           
                        var input_name = taint_tag_to_input[val.tainted].name;
                        if(tainted_var[input_name][file_path] == undefined)
                            tainted_var[input_name][file_path] = [omap.get(val)];
                        else if(tainted_var[input_name][file_path].indexOf(omap.get(val)) == -1)
                            tainted_var[input_name][file_path].push(omap.get(val));
                    }
                }

		        if(Object.prototype.hasOwnProperty.call(base, 'tainted') && base.tainted > 0){
		            if(name_data != null){
        		        //hidden_list = af.analyze_hidden_attr(name_data[0], [variable_name], af);
        	            //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[base.tainted].name + ": " + JSON.stringify(hidden_list)));
                         
                        var input_name = taint_tag_to_input[base.tainted].name;
                        if(tainted_var[input_name][file_path] == undefined)
                            tainted_var[input_name][file_path] = [variable_name];
                        else if(tainted_var[input_name][file_path].indexOf(variable_name) == -1)
                            tainted_var[input_name][file_path].push(variable_name);
        		    }
        		}
            }
            return val;
        }

        this.read = function(iid, name, val, isGlobal) {
            if(taint_state){
                if(val && Object.prototype.hasOwnProperty.call(val, 'tainted') && val.tainted == "source"){
                    taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                    //val.tainted = val.tainted_iiid;
                    //delete val.tainted;
                    //Object.defineProperty(val, "tainted", {configurable: true, get: function() {return val.tainted_iiid;}});
        		    val.tainted = val.tainted_iiid;
                }

                try{
	                if(val && Object.prototype.hasOwnProperty.call(val, 'tainted') && val.tainted > 0){
                        name_data = get_loc_by_iid(iid);
                        var file_path = name_data[0];
                        var variable_name = name_data[1];
                        if(name_data != null){
				            //hidden_list = af.analyze_hidden_attr(name_data[0], [variable_name], af);
	                        //console.log(tynt.Green("[Hi!Parameters] hidden_list for input " + taint_tag_to_input[val.tainted].name + ": " + JSON.stringify(hidden_list)));
                         
                            var input_name = taint_tag_to_input[val.tainted].name;
                            if(tainted_var[input_name][file_path] == undefined)
                                tainted_var[input_name][file_path] = [variable_name];
                            else if(tainted_var[input_name][file_path].indexOf(variable_name) == -1)
                                tainted_var[input_name][file_path].push(variable_name);
	                    }
                    }
                } catch (e){
                    // catch the error caused by getter/setter
                }

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
            try{
                if(val && Object.prototype.hasOwnProperty.call(val, 'tainted') && val.tainted == "source"){
                    taint_tag_to_input[val.tainted_iiid].location = iidToLocation(iid);
                    val.tainted = val.tainted_iiid;
                }
            } catch (e){
                // catch the error caused by getter/setter
            }

            return val;
        };

        function get_hidden_attr(tainted_dict){
            //tainted_dict =  {"param": {file_path: [tainted_varibles], file_path2: [tainted_variable2]}}
            for(var param in tainted_dict){
                for(var file in tainted_dict[param]){
                    try{
                        hidden_list = af.analyze_hidden_attr(file, tainted_dict[param][file], af);
                    }catch(e){
                        console.log(tynt.Red("[Error]@TaintAnalysis - get_hidden_httr. " + e));
                        console.log(tynt.Red("[Error]params: file: " + file + ", param: " + JSON.stringify(tainted_dict[param][file])));
                    }
                    for(var key in hidden_list){
                        for(var hidden_index in hidden_list[key]){
                            obj_index = hidden_list[key][hidden_index].indexOf(key);
                            dot_index = hidden_list[key][hidden_index].substring(obj_index+key.length+1).indexOf(".");
                            hidden_param = hidden_list[key][hidden_index].substring(obj_index+key.length+1);
                            base_param = "";

                            if(key.indexOf(".") == -1){
                                base_param = key;
                            } else {
                                key_arr = key.split(".");
                                base_param = key_arr[key_arr.length - 1];
                            }

                            hidden_attr[param][hidden_param] = {"base": base_param, "file": file};
                        }
                    }
                }
            }
        }

        this.endExecution = function(){
            if(!source_executed){
                console.log(tynt.Red("[Error]@TaintAnalysis - endExecution. source function has never been called."));
                return;
            }

            get_hidden_attr(tainted_var);
            console.log(JSON.stringify(tainted_var));

            console.log(hidden_attr);
            fs.writeFileSync(__dirname + "/../../outputs/hidden_attr/" + sname, JSON.stringify(hidden_attr));
        }
    }

    sandbox.analysis = new TaintAnalysis();
})(J$);
