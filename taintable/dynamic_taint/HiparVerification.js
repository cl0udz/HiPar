/*
 * Hipar Dynamic Verification
 */
const path = require('path')
const tynt = require('tynt');
J$.analysis = {};

(function (sandbox) {
    function HiparVerification() {
        var iidToLocation = sandbox.iidToLocation;
        var target_lst = {};
        var verified_hipar = [];

        var hipar_blacklist = ["length", "toString", "forEach", "valueOf"];
        var ifstmt_queue = {};
        var function_queue = [];
        var taintedIfStmt = {};
        
        var cnt = 0;

        // get function name of given location. For anonymous function, the name will be like anon_111
        function getFunc(line_start, col_start, line_end, col_end){
            for(i in function_queue){
                if((function_queue[i][0] == line_start && function_queue[i][1] <= col_start) || function_queue[i][0] < line_start){
                    if((function_queue[i][2] == line_end && function_queue[i][3] >= col_end) || function_queue[i][2] > line_end){
                        return i;
                    }
                }                       
            }

            return null;
        }

        function getIfStmt(line_start, col_start, line_end, col_end){
            var fname = getFunc(line_start, col_start, line_end, line_end);
            if(fname == null)
                return false;
            for(i in ifstmt_queue[fname]){
                if((ifstmt_queue[fname][i][0] == line_start && ifstmt_queue[fname][i][1] <= col_start) || ifstmt_queue[fname][i][0] < line_start){
                    if((ifstmt_queue[fname][i][2] == line_end && ifstmt_queue[fname][i][3] >= col_end) || ifstmt_queue[fname][i][2] > line_end){
                        //console.log("isIfStmt true. object Location: " + [line_start, col_start, line_end, col_end] + ". If stmt Location: " + ifstmt_queue[fname][i]);
                        return [fname, i];
                    }
                }                       
            }

            return null;
        }

        function get_loc_by_iid(iid){
            var vlocation = iidToLocation(iid);
            // original location format: {file_path:start_line:start_column:end_line:end_column}
            // all the number start from 1 while not 0
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

                return loc['file_loc'];
            } else {
                return null;
            }
        }

        function log_hipar(file_path, var_name, hipar_name){
            //console.log("var_name: " + var_name + ", hipar_name: " + hipar_name);
            if (!(file_path in verified_hipar)) verified_hipar[file_path] = [];
            res = var_name +"."+ hipar_name;
            if (verified_hipar[file_path].indexOf(res) == -1 ) verified_hipar[file_path].push(res);
        }

        this.scriptEnter = function(iid, fileName){
            var fnarray = fileName.split("target_cache/");
            var sname = fnarray[fnarray.length - 1];
            taintedIfStmt[sname] = [];
        }

        this.invokeFun = function (iid, f, base, args, val, isConstructor) {
            if(f.name === "verify_hipar"){
                // get file_pathh and the hiddden parameter to check
                var file_path = args[0];
                var attr_name = args[1];
                var var_name = args[2];
                if (!(file_path in target_lst))
                    target_lst[file_path] = {};
                if(target_lst[file_path][var_name])
                    target_lst[file_path][var_name].push(attr_name);
                else
                    target_lst[file_path][var_name] = [attr_name];
            }
            return val;
        };

        this.functionEnter = function(iid, f, dis, args){
            // get the location of the function and create a list in ifstmt_queue
            var vlocation = iidToLocation(iid);
            if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                var content = vlocation.slice(1,-1).split(":");
                var line_start = parseInt(content[1], 10);
                var col_start = parseInt(content[2], 10)-1;
                var line_end = parseInt(content[3], 10);
                var col_end = parseInt(content[4], 10)-1;

                if(f.name == ""){
                    fname = "anon_" + cnt;
                    cnt++;
                } else {
                    fname = f.name;
                }

                function_queue[fname] = [line_start,col_start,line_end,col_end];
                ifstmt_queue[fname] = [];
            }
        }

        this.functionExit = function(iid, ret, wrappedExceptionVal){
            var vlocation = iidToLocation(iid);
            if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                var content = vlocation.slice(1,-1).split(":");
                var line_start = parseInt(content[1], 10);
                var col_start = parseInt(content[2], 10)-1;
                var line_end = parseInt(content[3], 10);
                var col_end = parseInt(content[4], 10)-1;

                var fname = getFunc(line_start, col_start, line_end, col_end);

                function_queue[fname] = [line_start,col_start,line_end,col_end];
                var i = -1;
                for(index in function_queue){
                    if(function_queue[index][0] == line_start 
                       && function_queue[index][1] == col_start
                       && function_queue[index][2] == line_end 
                       && function_queue[index][3] == col_end){
                        i = index;
                        break;
                    }
                }
                function_queue.splice(i, 1);
 

                ifstmt_queue[fname] = [];
            }

        }

        this.getField = function (iid, base, offset, val) {
            var cur_file = get_loc_by_iid(iid);
            if(cur_file in target_lst){
                try{
                    if(offset in target_lst[cur_file]){
                        for(var property in val){
                            p_index = target_lst[cur_file][offset].indexOf(property);
                            if(p_index != -1 && val[property] != "H1P4r"){
                                //log_hipar(cur_file, offset, property);
                                target_lst[cur_file][offset][p_index] = undefined;
                            } else if(p_index != -1 && val[property] == "H1P4r"){
                                target_lst[cur_file][name][p_index] = "confirmed";
                            }

                        }
                    }
                } catch (e){
                    return val;
                }
            }
            return val;
        }

        this.read = function (iid, name, val, isGlobal) {
            // if the varible is a part of if stmt, check the property and try to find taint tag
            var vlocation = iidToLocation(iid);
            var cur_file = get_loc_by_iid(iid);
            if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                var content = vlocation.slice(1,-1).split(":");
                var line_start = parseInt(content[1], 10);
                var col_start = parseInt(content[2], 10) - 1;
                var line_end = parseInt(content[3], 10);
                var col_end = parseInt(content[4], 10) - 1;

                var index = getIfStmt(line_start, col_start, line_end, col_end);
                if(index){
                    try{
                        for(var property in val){
                            if(property in hipar_blacklist){
                                continue;
                            }
                            if(val[property] != "H1P4r"){
                                console.log("Found taint tag in branch! Object Location: " + [line_start, col_start, line_end, col_end] + ". If Stmt Location: " + ifstmt_queue[index[0]][index[1]]);
                                var fnarray = cur_file.split("target/");
                                var sname = fnarray[fnarray.length - 1]; 
                                taintedIfStmt[sname].push({"obj": [line_start, col_start, line_end, col_end], "if": ifstmt_queue[index[0]][index[1]]});
                            }
                        }
                    }catch(e){
                        return val;
                    }
                }
            }

            if(cur_file in target_lst){
                try{
                    if(name in target_lst[cur_file]){
                        for(var property in val){
                            if(property in hipar_blacklist){
                                continue;
                            }
                            p_index = target_lst[cur_file][name].indexOf(property);
                            if(p_index != -1 && val[property] != "H1P4r"){
                                //log_hipar(cur_file, name, property);
                                target_lst[cur_file][name][p_index] = undefined;
                            } else if(p_index != -1 && val[property] == "H1P4r"){
                                log_hipar(cur_file, name, property);
                            }
                        }
                    }
                } catch (e){
                    return val;
                }
            }
            return val;
        };

        this.conditionalPre = function(iid, left){
            //get current function name and insert the location of the if stmt to the list
            var vlocation = iidToLocation(iid);
            if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
                var content = vlocation.slice(1,-1).split(":");
                var line_start = parseInt(content[1], 10);
                var col_start = parseInt(content[2], 10)-1;
                var line_end = parseInt(content[3], 10);
                var col_end = parseInt(content[4], 10)-1;

                var fname = getFunc(line_start, col_start, line_end, col_end);
                if(fname){
                    ifstmt_queue[fname].push([line_start,col_start,line_end,col_end]);
                }
                //console.log("Entering if stmt. location: " + vlocation);
            }
        }
        
        //this.conditional = function(iid, left, ret){
        //    console.log("[conditional]");
        //    var vlocation = iidToLocation(iid);
        //    if(/.*:\d*:\d*:\d*:\d*/.test(vlocation)){
        //        var content = vlocation.slice(1,-1).split(":");
        //        var line_start = parseInt(content[1], 10);
        //        var col_start = parseInt(content[2], 10);
        //        var line_end = parseInt(content[3], 10);
        //        var col_end = parseInt(content[4], 10);

        //        var i = -1;
        //        for(index in ifstmt_queue){
        //            if(ifstmt_queue[index][0] == line_start 
        //               && ifstmt_queue[index][1] == col_start
        //               && ifstmt_queue[index][2] == line_end 
        //               && ifstmt_queue[index][3] == col_end){
        //                i = index;
        //                break;
        //            }
        //        }
        //        ifstmt_queue.splice(i, 1);
        //        console.log("Leaving if stmt. location: " + vlocation);
        //    }
        //}

        this.endExecution = function(){
            // print final result on exit
            for(var f in target_lst){
                for(var vn in target_lst[f]){
                    for(var pi in target_lst[f][vn]){
                        if(target_lst[f][vn][pi] != undefined){
                            //log_hipar(f, vn, target_lst[f][vn][pi]);
                        }
                    }
                }
            }
            console.log(tynt.Green("[+] HiparVerification HiPar verified"))
            console.log(verified_hipar);

            console.log(tynt.Green("[+] HiparVerification Tainted If Statement"));
            console.log(JSON.stringify(taintedIfStmt));
        };
    }

    sandbox.analysis = new HiparVerification();

})(J$);
