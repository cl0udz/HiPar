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

        function visit_obj(obj, target_attr){
            var proto_flag = false;
            var attr_flag = check_hipar(obj, target_attr);
            // check hipar in prototype
            if (obj) {
                proto_flag = check_hipar(obj.__proto__, target_attr);
            }
            return attr_flag || proto_flag ; 
        }

        function check_hipar(obj, target_attr) {
            // skip empty variables
            if ( !obj || Object.keys(obj).length == 0) return false;
            var walked = [];
            var stack = [{obj: obj}];
            while(stack.length > 0)
            {
                var item = stack.pop();
                var obj = item.obj;
                for (var property in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, property)) {
                        // Detect if obj has a Setter without Getter, which may cause obj to be undefined when accessing its property
                        try{ obj[property]; }catch(e){ return false; }

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
                            if (property == target_attr && obj[property] == "H1P4r"){
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
                var file_path = args[0];
                var attr_name = args[1];
                var var_name = args[2];
                if (!(file_path in target_lst)) target_lst[file_path] = {};
                    target_lst[file_path][var_name] = attr_name;
                console.log("list:");
                console.log(target_lst);
            }
            return val;
        };

        this.getField = function (iid, base, offset, val) {
            var cur_file = get_loc_by_iid(iid);
            try{
            if(val.hasOwnProperty("_bsontype") && val._bsontype == "H1P4r"){
                console.log(val);
                console.log(cur_file);
            }} catch (e){
                return val;
            }
 
            /*if(cur_file in target_lst && val == "H1P4r"){
                var target_attr = target_lst[cur_file][offset];
                console.log("offset: " + offset + ", target_attr: " + target_attr);
                if(visit_obj(val, target_attr)){
                    if(!(target_attr in verified_hipar)) verified_hipar[target_attr] = cur_file;
                }
            }*/
            return val;
        }

        this.read = function (iid, name, val, isGlobal) {
            var cur_file = get_loc_by_iid(iid);
            try{
            if(val.hasOwnProperty("_bsontype") && val._bsontype == "H1P4r"){
                console.log(val);
                console.log(cur_file);
            }} catch (e){
                return val;
            }
            /*if ( (cur_file in target_lst) && (name in target_lst[cur_file])) {
                var target_attr = target_lst[cur_file][name];
                if (visit_obj(val, target_attr)){
                    if (!(target_attr in verified_hipar)) verified_hipar[target_attr]= cur_file;
                }
            }*/
            /*if(cur_file in target_lst && val == "H1P4r"){
                console.log("read: " + name);
                var target_attr = target_lst[cur_file][name];
                if(visit_obj(val, target_attr)){
                    if(!(target_attr in verified_hipar)) verified_hipar[target_attr] = cur_file;
                }
            }*/
            return val;
        };

        this.endExecution = function(){
            // print final result on exit
            console.log(tynt.Green("[+] HiparVerification HiPar verified"))
            console.log(verified_hipar);
        };
    }

    sandbox.analysis = new HiparVerification();

})(J$);
