var attr_finder = require(__dirname + '/attrFinder.js');
var af = new attr_finder();

//console.log(af.analyze_hidden_attr("case.js", ['a'], af));
//console.log(af.analyze_hidden_attr("case.js", ['a'], af));

loc = {"file_loc":"/home/james/nodejs/HiPar/tests/target/TestClassValidator/node_modules/google-libphonenumber/dist/libphonenumber.js","var_loc":{"start":{"line":1,"column":5430},"end":{"line":1,"column":5445}}}

af.get_name_by_loc(loc , af);
