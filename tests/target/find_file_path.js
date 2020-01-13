var getFilesRec = require('../Utils').getFilesRec
var deleteFolderRec = require('../Utils').deleteFolderRecursive
var path = require('path')
var os = require('os')
var fs = require('fs');
var execSync = require('child_process').execSync;
const tmp_dir = '/tmp/find_file_path'
const paths_json = '/tmp/find_file_path.json'
const inject_code = `if(process.argv.includes('find_file_path')) {
    var execSync = require('child_process').execSync;
    var tynt = require('tynt');
    console.log(tynt.Yellow('file_path_output of echo:'+ execSync("echo \'" + __filename + "\', >> /tmp/find_file_path.json").toString()));
  }`
function usage(){
    console.log('usage: node find_file_path.js [target_dir] [start_file]');
    console.log('eg: node find_file_path.js TestStrapi TestStrapi/TestStrapi.js');
    process.exit();
}
if(!fs.existsSync(tmp_dir)) fs.mkdirSync(tmp_dir);
target_dir = process.argv[2];
if(!fs.existsSync(path.resolve(tmp_dir,target_dir))) fs.mkdirSync(path.resolve(tmp_dir,target_dir));
start_file = process.argv[3];
if(!start_file || !target_dir) usage();
else console.log(target_dir,start_file);

files=[]
jsfiles = []
files = files.concat(getFilesRec(path.resolve(target_dir)))
for (var i=0;i < files.length;i++)
    if(files[i].substring(files[i].length-3,files[i].length) == '.js')
        jsfiles.push(files[i]);


console.log(jsfiles)



for (var i=0;i<jsfiles.length;i++){
    var data = fs.readFileSync(jsfiles[i], 'utf8').split(/\r\n|\n|\r/gm); //readFileSync的第一个参数是文件名
    var line = 0;
    var writefile = jsfiles[i];
    // console.log(writefile)
    if (data[0][0] == '#') line = 1;
    if (data[line].indexOf("process.argv.includes('find_file_path')")!=-1){
        // console.log('already added insert_code');
        continue;
    }
    data.splice(line, 0, inject_code);
    
    fs.writeFileSync(writefile, data.join(os.EOL));
}

console.log(execSync('node '+path.resolve(start_file)+' find_file_path').toString());
var result = fs.readFileSync(paths_json, 'utf8').split(/\r\n|\n|\r/gm);
result.pop();
var set = new Set(result);
var result = Array.from(set);
console.log(result);
