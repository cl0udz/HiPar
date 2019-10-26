var utils = require("iflow");
var genstr = require("../utils").genstr;
var measureTime = require("../utils").measureTime;
var policy = require("../Policy.js");
var htmlparser = require("htmlparser");
//require("../utils").monkeyPatch();
/* Coverage improving instructions */
var rawHtml = utils.source("<html><div id='myDiv'></div></html>", utils.HIGH_LEVEL, "module-interface");
//require("fs").writeFileSync("./out.html",rawHtml)
var handler = new htmlparser.DefaultHandler(function (error, dom) {
    // console.log(error)
    // console.log(dom[0].children)
}, {enforceEmptyTags: true});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(rawHtml);
rawHtml = utils.source("", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("<>", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("<style><!--<html> test>-->.x:2</style><script><!-- <html> test>test-->//<![CDATA[ \n alert(23);//]]\n></script><div id='myDiv' style=''></div>", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("test", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("<test", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("<html><![CDATA[<Summary>This is summary description</Summary>]]><!-- <html> test>test--></html>", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("<!xxx></html><div></div><script>", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);
rawHtml = utils.source("<link>text</link>", utils.HIGH_LEVEL, "module-interface");
parser.parseComplete(rawHtml);

/* End of coverage improving instructions */

measureTime(function() {

    var rawHtml = utils.source("<html><x", utils.HIGH_LEVEL, "module-interface") + genstr(50000, " ") + "x></html>";
    //require("fs").writeFileSync("./out.html",rawHtml)
    var handler = new htmlparser.DefaultHandler(function (error, dom) {
        // console.log(error)
        // console.log(dom[0].children)
    });
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(rawHtml);
    rawHtml = utils.source("<link>text</link>", utils.HIGH_LEVEL, "module-interface");
    parser.parseComplete(rawHtml);
});
