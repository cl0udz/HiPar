var attr_finder = require(__dirname + '/attrFinder.js');
var af = new attr_finder();

console.log(af.analyze_hidden_attr("case.js", ['a'], af));
console.log(af.analyze_hidden_attr("case.js", ['a'], af));
