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
            var cur_file = get_loc_by_iid(iid);
            if(cur_file in target_lst){
                try{
                    if(name in target_lst[cur_file]){
                        for(var property in val){
                            p_index = target_lst[cur_file][name].indexOf(property);
                            if(p_index != -1 && val[property] != "H1P4r"){
                                //log_hipar(cur_file, name, property);
                                target_lst[cur_file][name][p_index] = undefined;
                            }
                        }
                    }
                } catch (e){
                    return val;
                }
            }
            return val;
        };

        this.endExecution = function(){
            // print final result on exit
            for(var f in target_lst){
                for(var vn in target_lst[f]){
                    for(var pi in target_lst[f][vn]){
                        if(target_lst[f][vn][pi] != undefined)
                            log_hipar(f, vn, target_lst[f][vn][pi]);
                    }
                }
            }
            console.log(tynt.Green("[+] HiparVerification HiPar verified"))
            console.log(verified_hipar);
        };
    }

    sandbox.analysis = new HiparVerification();

})(J$);
