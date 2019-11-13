/*
 * Hipar Dynamic Verification
 */
const path = require('path')
const tynt = require('tynt');
J$.analysis = {};

(function (sandbox) {
    function HiparVerification() {
        var iidToLocation = sandbox.iidToLocation;
        var file_path;
        var hipar_name;
        var is_found = false;
        var verifed_hipar = [];


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
                //console.log(JSON.stringify(loc));

                return loc['file_loc'];
            } else {
                return null;
            }
        }

        function visit_obj(obj){
            var proto_flag = false;
            var attr_flag = check_hipar(obj);
            // check hipar in prototype
            if (obj) {
                proto_flag = check_hipar(obj.__proto__);
            }
            return attr_flag || proto_flag ; 
        }

        function check_hipar(obj) {
            var walked = [];
            var stack = [{obj: obj}];
            while(stack.length > 0)
            {
                var item = stack.pop();
                var obj = item.obj;
                for (var property in obj) {
                    if (obj.hasOwnProperty(property)) {
                        if (typeof obj[property] == "object") {
                            var alreadyFound = false;
                            for(var i = 0; i < walked.length; i++)
                            {
                                if (walked[i] === obj[property])
                                {
                                    alreadyFound = true;
                                    break;
                                }
                            }

                            if (!alreadyFound)
                            {
                                walked.push(obj[property]);
                                stack.push({obj: obj[property]});
                            }

                        }
                        else
                        {

                            if (property == hipar_name && obj[property] == "H1P4r"){
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }

        this.invokeFun = function (iid, f, base, args, val, isConstructor) {
            if(f.name === "verify_hipar"){
                // get file_pathh and the hiddden parameter to check
                file_path = args[0];
                hipar_name = args[1];
                is_found = false;
            }
            return val;
        };

        this.read = function (iid, name, val, isGlobal) {
            var cur_file = get_loc_by_iid(iid);
            if ( !is_found && file_path && cur_file == file_path) {
                if (visit_obj(val)){
                    verifed_hipar.push((file_path, hipar_name))
                    is_found = true;
                }
            }
            return val;
        };

        this.endExecution = function(){
            // print final result on exit
            console.log(tynt.Green("[+] HiparVerification HiPar verified" + verifed_hipar));
        };
    }

    sandbox.analysis = new HiparVerification();

})(J$);
