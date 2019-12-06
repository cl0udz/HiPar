/*
 *  fork when cross-lib calls occurs 
 */

const path = require('path');
const tynt = require('tynt');
J$.analysis = {};

(function (sandbox) {
    function CallForker() {
        var iidToLocation = sandbox.iidToLocation;
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


        function is_cross_lib(caller, callee){
            const loc1 = get_loc_by_iid(caller);
            const loc2 = get_loc_by_iid(callee);
            // if loc1 loc2 belong to two different folder, it is a crosslib call		
        }


        this.invokeFunPre = function (iid, f, base, args, isConstructor) {
            console.log('function call intercepted before invoking');
            for (const id in args){
                // we add label to first arg whose type is object
                if (typeof args[id] == "object"){
                    args[id].hipar_loc = iid;
                    break;
                }
            }
        };

        this.invokeFun = function (iid, f, base, args, val, isConstructor) {
            console.log('function call intercepted after invoking');

            for (const id in args){
                if (typeof args[id] == "object"){
                    const caller_loc = args[id].hipar_loc;
                    delete args[id].hipar_loc;
                    if( is_cross_lib(caller_loc, iid)){
                        // push call and its pars to a task queue
                        // have concerns about context issue 
                    }
                    break;
                }
            }
            return val;
        };

    }

    sandbox.analysis = new CallForker();

})(J$);
