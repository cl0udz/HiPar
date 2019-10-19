const pkgsFolder = "/home/cstaicu/work/topJune2017/";

var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        try {
            var statS = fs.statSync(dir + '/' + file);
            if (statS.isDirectory() && file.indexOf("test") === -1
                && file.indexOf("public") === -1 && file.indexOf("vendor") === -1
                && file.indexOf("example") === -1 && file.indexOf("spec") === -1
                && file.indexOf("docs") === -1 && file.indexOf("bower_components") === -1) {
                filelist = walkSync(dir + '/' + file, filelist);
            }
            else if (file.match(/.*.js$/) && file.indexOf("test") === -1
                && file.indexOf("example") === -1 && file.indexOf(".min") === -1 &&
                file.indexOf("all") === -1){
                var content = fs.readFileSync(dir + '/' + file).toString();
                if ((contains(content, "net") || contains(content, "tls")
                    ||contains(content, "http") || contains(content, "https")
                    ||contains(content, "request"))
                    &&  content.indexOf("image") != -1
                )
                    console.log(dir + '/' + file);
                filelist.push({file: dir + '/' + file, size: statS["size"]});
            }
        } catch(e) {
            console.log(e);
        }
    });
    return filelist;
};

function contains(content, package) {
    return content.indexOf("require('" + package + "')") != -1
        || content.indexOf("require(\"" + package + "\")") != -1;
}

var files = walkSync(pkgsFolder);
console.log(files.length);
