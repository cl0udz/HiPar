var getFilesRec = require('../Utils').getFilesRec
var deleteFolderRec = require('../Utils').deleteFolderRecursive
var path = require('path')
var os = require('os')
var tynt = require('tynt');
var fs = require('fs');

var execSync = require('child_process').execSync;

const paths_file = '/tmp/file_paths'
if(fs.existsSync(paths_file)) fs.unlinkSync(paths_file);
const inject_code = `var execSync = require('child_process').execSync;
execSync("echo \'" + __filename + "\' >> /tmp/file_paths");`
function usage(){
    console.log('usage: node find_file_path.js [target_dir] [start_file] <arguments of start_file>');
    console.log('eg: node find_file_path.js TestStrapi TestStrapi.js dev');
    process.exit();
}
if(!process.argv[2] || !process.argv[3]) usage();



target_dir = path.resolve(__dirname,process.argv[2]);
start_file = path.resolve(__dirname,target_dir,process.argv[3]);
args = process.argv.splice(4);
console.log(target_dir,start_file);

files=[]
jsfiles = []
other_files = []
files = files.concat(getFilesRec(path.resolve(target_dir)));
for (var i=0;i < files.length;i++)
    if(files[i].substring(files[i].length-3,files[i].length) == '.js')
        jsfiles.push(files[i]);
    else
        other_files.push(files[i]);



// console.log(jsfiles)




for (var i=0;i<jsfiles.length;i++){
    var data = fs.readFileSync(jsfiles[i], 'utf8').split(/\r\n|\n|\r/gm); //readFileSync的第一个参数是文件名
    var line = 0;
    var writefile = jsfiles[i];
    // console.log(writefile)
    if (data[0][0] == '#') line = 1;
    if (data.length>line+1 && data[line+1].indexOf("/tmp/file_paths")!=-1){
        continue;
        // data.splice(line,2);
        // console.log('already added insert_code');
        
    }
    data.splice(line, 0, inject_code);
    
    fs.writeFileSync(writefile, data.join(os.EOL));
}

process.chdir(target_dir);
var origin_output = execSync('node '+path.resolve(start_file)+ ' '+args.join(' ')+ ' find_file_path').toString();
console.log(origin_output);
var result = fs.readFileSync(paths_file, 'utf8').split(/\r\n|\n|\r/gm);
result.pop();
var set = new Set(result);
var result = Array.from(set);
result= result.concat(other_files);
console.log(result);


for (var i=0;i<result.length;i++){
    var file = result[i];
    var new_file = file.replace(/target\//,'target/tmp')
    var dirname = path.dirname(new_file);
    if(!fs.existsSync(dirname)) fs.mkdirSync(dirname,{recursive:true});
    try{
        fs.copyFileSync(file,new_file);
    }
    catch(e){
        if(e.code != 'EACCES')
            throw e;
    }
}

var new_start_file = start_file.replace(/target\//,'target/tmp');
process.chdir(path.dirname(new_start_file));
try{
    current_output = execSync('node '+path.resolve(new_start_file)+' '+args.join(' ')+ ' find_file_path').toString();
}catch(e){
    console.log(e.stdout.toString());
    throw e;
}
console.log(current_output);
if(current_output == origin_output) console.log(tynt.Green("outputs match.find_file_path works!"));

content = JSON.stringify(result);
fs.writeFileSync(path.join(target_dir,'find_file_path.json'),content); 
