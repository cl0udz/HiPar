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

exports.cmp_trace = function cmp_trace(tainted_arg){
    if (tainted_arg === -1 ){
        return;
    } 
    //get line number of baseline
    var base_num = execSync('cat '+ baseline_path +' | wc -l');
    //get diff between baseline and current label log and diff propotion
    try {
        execSync('diff -y --suppress-common-lines '+ baseline_path +' '+ labeled_path +' > '+ diff_path);
    } catch (ex) {
    }
    var diff_num = execSync('cat '+ diff_path +' | wc -l');
    if (diff_num / base_num == 0 ){
        console.log('[+] ControlFlowMon execution paths correct with' + tainted_arg);
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
