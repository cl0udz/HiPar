## TestcaseUtils
使用entry方法来调用：
`entry(function TestFunc,var parameter)`
TestcaseUtils会遍历taint输入参数parameter并将其传入TestFunc
这里TestFunc需要手动编写，不同到api的调用不一样故此处需要人工抽象一个单参数的TestFunc
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