## TestcaseUtils
使用entry方法来调用：
`entry(function TestFunc,var parameter)`
TestcaseUtils会遍历taint输入参数parameter并将其传入TestFunc  
这里TestFunc需要手动编写，不同api的调用不一样故此处需要人工抽象一个单参数的TestFunc  
例：  
```
var userJson = JSON.parse('{"title":"Hello","rating":5}');

var utils = require("../TestcaseUtils.js");

function test(userJson){
    var users = class_transformer_1.plainToClass(Post, userJson);
    class_validator_1.validate(users).then(function (errors) {
        if (errors.length > 0) {
            console.log("validation failed. errors: ", errors);
        }
        else {
            console.log("validation succeed");
        }
    });
}

utils.entry(test,userJson);
```
这里由于userJson为用户传入的object，将userJson被plainToClass,validate等一系列操作抽象成一个test函数  
再将test和userJson传入utils.entry()来loop property.


## find_file_path.js
参数:`node find_file_path.js [target_dir] [start_file] <arguments of start_file>`  
eg: `node find_file_path.js TestStrapi TestStrapi.js dev`  
运行后会在tmp[target_dir]目录生成所有运行start_file需要的文件  
例中 tmpTestStrapi 里面包含所有需要运行`node TestStrapi.js dev`的文件，改下config.json就可以用Analysis跑tmpTestStrapi了

## TestXX.js
```
// The name of the input variable is retricted to "input"
// input has to be an object

// input constructor or other init code
// e.g. var input = {"input_key" : "input_value"};

// reserved for stage 2 -- start
function replace_me(){
}
replace_me();
// reserved for stage 2 -- end

// test code
// e.g. var pp; Object.assign(pp, input); validate(pp);
```
