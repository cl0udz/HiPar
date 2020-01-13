if(process.argv.includes('find_file_path')) {

    var execSync = require('child_process').execSync;
    var tynt = require('tynt');
    console.log(tynt.Yellow('file_path_output of echo:'+ execSync("echo '" + __filename + "', >> /tmp/find_file_path.json")));
  }