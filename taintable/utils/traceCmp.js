/*
 *  trace comparision component
 *  call cmp_trace() to compare
 *  call cmp_fini() at the end of each libcall
  */
const fs = require('fs');
const path = require('path')
const execSync = require('child_process').execSync;
const baseline_path = path.resolve(__dirname, "../../outputs/traces/baseline_trace");
const labeled_path = path.resolve(__dirname, "../../outputs/traces/labeled_trace"); 
const diff_path = path.resolve(__dirname, "../../outputs/traces/diff_res"); 

// this function will log trace and compare baseline with labeled trace if baseline exists 
exports.log_trace_and_cmp = function log_trace_and_cmp(tainted_arg){
    console.log('--------------------222222');
    if (tainted_arg === -1 || !fs.existsSync(baseline_path)) {
        return;
    }
    //get line number of baseline
    var base_num = execSync('cat '+ baseline_path +' | wc -l');
    //get diff between baseline and current label log and diff propotion
    //we should try catch because diff will fuck the nodejs when it found diff 
    try {
        execSync('diff -y --suppress-common-lines '+ baseline_path +' '+ labeled_path +' > '+ diff_path);
    }catch (e){}
    var diff_num = execSync('cat '+ diff_path +' | wc -l');
    if (diff_num / base_num == 0 ){
        console.log('[+] ControlFlowMon execution paths correct with ' + tainted_arg);
    }else{
        console.log('[x] ControlFlowMon execution path diffs with '+ tainted_arg);
        console.log(fs.readFileSync(diff_path).toString('utf8'));
    }
}


exports.cmp_fini = function cmp_fini(){
    fs.unlink(baseline_path, function (err) {
            if (err) throw err;
    }); 
}


//exports.cmp_trace('test_arg');
