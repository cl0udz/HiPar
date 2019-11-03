/*
 * control flow monitor by calltrace and vartrace
 */

J$.analysis = {};

(function (sandbox) {
    function ControlFlowMon() {
            var fs = require('fs'); 
            var iidToLocation = sandbox.iidToLocation;
            var log_buffer = [];
            var log_file;
            var log_type = -1 ; // -1 : on init; 0 : baseline recording; 1 : labeled recording
            var labeled_path = path.resolve(__dirname, "../../outputs/traces/labeled_trace");
            var baseline_path = path.resolve(__dirname, "../../outputs/traces/baseline_trace"); 
            
        function write_log(info) {
            var data = log_buffer.join('\n');
            try {
                  fs.appendFileSync(log_file, data);
            } catch (err) {
               console.log("[x] ControlFlowMon: Cannot log trace ", e);
            } 
            // clear log buffer at everytime return
            log_buffer = [];
        }

        this.invokeFun = function (iid, f, base, args, val, isConstructor) {
            var log_info = 'func@' + f.name + '@' + iidToLocation(iid);
            log_buffer.push(log_info);
            return val;
                
        };

        this.read = function (iid, name, val, isGlobal) {
            var log_info = 'var@' + name + '@' + iidToLocation(iid);
            log_buffer.push(log_info);
            return val;
                
        };

        this.scriptExit = function(iid) {
            
            switch(log_type){
            case -1:
                // logics on init
                if (!fs.existsSync(baseline_path)){
                   //if there is no baseline file, we will create one
                    log_type = 0;
                    log_file = baseline_path;
                    try{
                        fs.writeFileSync(log_file, '');
                    }catch (e){
                        console.log("[x] ControlFlowMon: Cannot create baseline trace ", e);
                    }
                } else{
                    //if there is a baseline file with log_type -1, we are at the beginning of logging the labeled trace
                    log_type = 1;
                    log_file = labeled_path;
                    try{
                        fs.writeFileSync(log_file, '');
                    }catch (e){
                        console.log("[x] ControlFlowMon: Cannot create labeled trace ", e);
                    }
                }
                break;
            case 0:
                // logging baseline trace
                break;
            case 1:
                // logging labeled trace
                break;
            }
            write_log();       
        };

          
    }

      sandbox.analysis = new ControlFlowMon();
    
})(J$);
