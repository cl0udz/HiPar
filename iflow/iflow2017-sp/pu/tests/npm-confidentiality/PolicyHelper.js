var iflow = require("iflow");

function unwrap(args) {
    var unwrappedArgs = [];
    for (var i = 0; i < args.length; i++)
        if (iflow.isAutoWrapped(args[i]))
            unwrappedArgs.push(iflow.unwrap(args[i]));
        else
            unwrappedArgs.push(args[i]);
    return unwrappedArgs;
}

module.exports.unwrap = unwrap;
