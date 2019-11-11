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
               console.log("[x] ControlFlowMon: Cannot log trace ", err);
            } 
            // clear log buffer at everytime return
            log_buffer = [];
        }

        //this.invokeFunPre = function (iid, f, base, args, val, isConstructor) {
        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            var loc = iidToLocation(iid).replace(project_root, "");
            if (f == undefined || !f.hasOwnProperty("name")){
                return;
            }
            var log_info = f.name + ' ' + loc;
            log_buffer.push(log_info);
            if(f.name && f.name == "log_trace_and_cmp"){
                // write buf to log here
                if (fs.existsSync(baseline_path)){
                    write_log(labeled_path);
                }else{
                    write_log(baseline_path);
                }
            }
        };

    }

      sandbox.analysis = new ControlFlowMon();
    
})(J$);
