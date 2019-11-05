/*
 * control flow monitor by calltrace and vartrace
 */
const path = require('path')
J$.analysis = {};

(function (sandbox) {
    function ControlFlowMon() {
        var fs = require('fs'); 
        var iidToLocation = sandbox.iidToLocation;
        var log_buffer = [];
        var log_type = -1 ; // -1 : on init; 0 : baseline recording; 1 : labeled recording
        var labeled_path = path.resolve(__dirname, "../../outputs/traces/labeled_trace");
        var baseline_path = path.resolve(__dirname, "../../outputs/traces/baseline_trace"); 
        var project_root =  path.resolve(__dirname, "../../");
        function write_log(log_file) {
            var data = log_buffer.join('\n');
            try {
                  fs.writeFileSync(log_file, data);
            } catch (err) {
               console.log("[x] ControlFlowMon: Cannot log trace ", e);
            } 
            // clear log buffer at everytime return
            log_buffer = [];
        }

        //this.invokeFunPre = function (iid, f, base, args, val, isConstructor) {
        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            var loc = iidToLocation(iid).replace(project_root, "");
            var log_info = 'func# ' + f.name + ' ' + loc;
            log_buffer.push(log_info);
            if(f.name && f.name == "cmp_trace"){
                // write buf to log here
                if (fs.existsSync(baseline_path)){
                    write_log(labeled_path);
                }else{
                    write_log(baseline_path);
                }
            }
        };

        this.read = function (iid, name, val, isGlobal) {
            var loc = iidToLocation(iid).replace(project_root, "");
            var log_info = 'var# ' + name + ' ' + loc;
            log_buffer.push(log_info);
            return val;
        };

    }

      sandbox.analysis = new ControlFlowMon();
    
})(J$);
