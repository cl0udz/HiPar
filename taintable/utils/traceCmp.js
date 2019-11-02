/*
 *  trace comparision component
 *  call cmp_trace() to compare
 *  call cmp_fini() at the end of each libcall
  */
const fs = require('fs');
const execSync = require('child_process').execSync;

exports.cmp_trace = function cmp_trace(tainted_arg){
    //get line number of baseline
    var base_num = execSync('cat /tmp/baseline_trace | wc -l');
    //get diff between baseline and current label log and diff propotion
    try {
        execSync('diff -y --suppress-common-lines /tmp/baseline_trace /tmp/labeled_trace > /tmp/diff_res');
    } catch (ex) {
    }
    var diff_num = execSync('cat /tmp/diff_res | wc -l');
    if (diff_num / base_num == 0 ){
        console.log('[+] ControlFlowMon execution paths correct with' + tainted_arg);
    }else{
        console.log('[x] ControlFlowMon execution path diffs with '+ tainted_arg);
        console.log(fs.readFileSync('/tmp/diff_res').toString('utf8'));
    }
}


exports.cmp_fini = function cmp_fini(){
    fs.unlink('/tmp/baseline_trace', function (err) {
            if (err) throw err;
    }); 
}


//exports.cmp_trace('test_arg');
