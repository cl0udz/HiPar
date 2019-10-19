// https://www.privacytool.org/AnonymityChecker/
// Fingerprinting fonts: Added some randomness to emulate the presence of certain fonts
// Sources: offsetWidth and offsetHeight are high
// Sinks: console.log(), normally it is an image source, GET request or xhr

Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
utils.addSink(console.log);

var document = {body : { element1 : {}, element2: "el2"} }

/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didn't fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

/**
 * Usage: d = new Detector();
 *        d.detect('font name');
 */
var Detector = function() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

  //  var h = document.getElementsByTagName("body")[0];
      var h = document.body.element1; 
    // create a SPAN in the document to get the width of the text we use to test
   // var s = document.createElement("span");
      document.span = {offsetWidth : utils.source(15, utils.HIGH_LEVEL, "fonts-width"), offsetHeight: 20, style : {fontSize: ""} };
      var s = document.span;
      s.style.fontSize = testSize;
      s.innerHTML = testString;
      var defaultWidth = {};
      var defaultHeight = {};
     for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
//        h.appendChild(s);
        h.element3 = s;
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
//        h.removeChild(s);
	delete h.element3;

    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
 //           h.appendChild(s);
        h.element4 = s;
//        console.log(defaultWidth[baseFonts[index]]);
           var random1 = (Math.floor((Math.random() * 10) +1) % 2);
           var random2 = (Math.floor((Math.random() * 10) +1) % 2);
           var matched = ((s.offsetWidth + random1) != defaultWidth[baseFonts[index]]) || ((s.offsetHeight + random2) != defaultHeight[baseFonts[index]]);
//            h.removeChild(s);
	 delete h.element4;
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
};


function getJsFontList() {
    var a = new Detector
      , a = (a.detect("cursive") ? "cursive," : "") + (a.detect("monospace") ? "monospace," : "") + (a.detect("serif") ? "serif," : "") + (a.detect("sans-serif") ? "sans-serif," : "") + (a.detect("fantasy") ? "fantasy," : "") + (a.detect("default") ? "default," : "") + (a.detect("Abadi MT Condensed Light") ? "Abadi MT Condensed Light," : "") + (a.detect("Adobe Caslon Pro") ? "Adobe Caslon Pro," : "") + (a.detect("American Typewriter") ? "American Typewriter," : "") + (a.detect("Andale Mono") ? "Andale Mono," : "") + (a.detect("Andalus") ? "Andalus," : "") + (a.detect("Angsana") ? "Angsana," : "") + (a.detect("Arial") ? "Arial," : "") + (a.detect("Arial Black") ? "Arial Black," : "") + (a.detect("Arial Narrow") ? "Arial Narrow," : "") + (a.detect("Arial Rounded MT Bold") ? "Arial Rounded MT Bold," : "") + (a.detect("Avant Garde") ? "Avant Garde," : "") + (a.detect("Baskerville") ? "Baskerville," : "") + (a.detect("Bickham Script Pro") ? "Bickham Script Pro," : "") + (a.detect("Bodoni") ? "Bodoni," : "") + (a.detect("Book Antiqua") ? "Book Antiqua," : "") + (a.detect("Bookman") ? "Bookman," : "") + (a.detect("Bookman Old Style") ? "Bookman Old Style," : "") + (a.detect("Bradley Hand ITC") ? "Bradley Hand ITC," : "") + (a.detect("Calibri") ? "Calibri," : "") + (a.detect("Cambria") ? "Cambria," : "") + (a.detect("Century") ? "Century," : "") + (a.detect("Century Gothic") ? "Century Gothic," : "") + (a.detect("Century Schoolbook") ? "Century Schoolbook," : "") + (a.detect("Charcoal") ? "Charcoal," : "") + (a.detect("Comic Sans MS") ? "Comic Sans MS," : "") + (a.detect("Copperplate") ? "Copperplate," : "") + (a.detect("Courier") ? "Courier," : "") + (a.detect("Courier New") ? "Courier New," : "") + (a.detect("Damascus") ? "Damascus," : "") + (a.detect("Didot") ? "Didot," : "") + (a.detect("Futura") ? "Futura," : "") + (a.detect("Franklin Gothic") ? "Franklin Gothic," : "") + (a.detect("Franklin Gothic Medium") ? "Franklin Gothic Medium," : "") + (a.detect("Gadget") ? "Gadget," : "") + (a.detect("Garamond") ? "Garamond," : "") + (a.detect("Georgia") ? "Georgia," : "") + (a.detect("Geneva") ? "Geneva," : "") + (a.detect("Gentium") ? "Gentium," : "") + (a.detect("GillSans") ? "GillSans," : "") + (a.detect("Gill Sans") ? "Gill Sans," : "") + (a.detect("Gothic") ? "Gothic," : "") + (a.detect("Haettenschweiler") ? "Haettenschweiler," : "") + (a.detect("Helvetica") ? "Helvetica," : "") + (a.detect("Impact") ? "Impact," : "") + (a.detect("King") ? "King," : "") + (a.detect("Lucida") ? "Lucida," : "") + (a.detect("Lucida Console") ? "Lucida Console," : "") + (a.detect("Lucida Grande") ? "Lucida Grande," : "") + (a.detect("Lucida Sans") ? "Lucida Sans," : "") + (a.detect("Lalit") ? "Lalit," : "") + (a.detect("Marlett") ? "Marlett," : "") + (a.detect("Minion") ? "Minion," : "") + (a.detect("Modena") ? "Modena," : "") + (a.detect("Monaco") ? "Monaco," : "") + (a.detect("Monotype Corsiva") ? "Monotype Corsiva," : "") + (a.detect("Myriad") ? "Myriad," : "") + (a.detect("New York") ? "New York," : "") + (a.detect("Optima") ? "Optima," : "") + (a.detect("Palatino") ? "Palatino," : "") + (a.detect("Palatino Linotype") ? "Palatino Linotype," : "") + (a.detect("Papyrus") ? "Papyrus," : "") + (a.detect("Rockwell") ? "Rockwell," : "") + (a.detect("Tahoma") ? "Tahoma," : "") + (a.detect("TeX") ? "TeX," : "") + (a.detect("Times") ? "Times," : "") + (a.detect("Times New Roman") ? "Times New Roman," : "") + (a.detect("Trebuchet MS") ? "Trebuchet MS," : "") + (a.detect("Verdana") ? "Verdana," : "") + (a.detect("Verona") ? "Verona," : "") + (a.detect("Webdings") ? "Webdings," : "") + (a.detect("Wingdings") ? "Wingdings," : "") + (a.detect("Zapf Dingbats") ? "Zapf Dingbats," : "") + (a.detect("Zapfino") ? "Zapfino," : "");
    return a.substring(0, a.length - 1)
}

//function submitJsFonts(a, b) {
    var c = getJsFontList();
    console.log(c);
//    $.ajax({
//        type: "POST",
//        url: b,
//        data: "code=" + a + "&fontlist=" + c
//    })
//}

