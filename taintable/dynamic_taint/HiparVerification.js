/*
 * control flow monitor by calltrace and vartrace
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
            if ( !is_found && file_path && iidToLocation(iid) == file_path) {
                if (check_hipar(val)){
                    console.log(tynt.Green("[+] HiparVerification HiPar found in " + name + " at " + file_path));
                    is_found = true;
                    }
            }
            return val;
        };


    }

    sandbox.analysis = new HiparVerification();

})(J$);
