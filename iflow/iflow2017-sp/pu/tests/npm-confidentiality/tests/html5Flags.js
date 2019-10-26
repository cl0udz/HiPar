// https://www.privacytool.org/AnonymityChecker/
// Fingerprinting through html5 attributes
// Implicit flow through exceptions - quite interesting.
// Each assignment to b.type may throw an exception or assign "" 
// Need to model the sematics of b.type = "someString"

// Sources: document.*, sink: console.log()
Math.random = require("./DeterministicRandom.js")(23);
var utils = require("iflow");
utils.addSink(console.log);
var document = {};

function mark(x) {
    return utils.source(x, utils.HIGH_LEVEL, "html-element-output")
}

function getHtml5Flags() {
    var a = ""
//      , b = document.createElement("input");
      , b = document.input = {};

    try {
//        b.type = "text",
        b.type = mark((Math.random() >= 0.5) ? "text" : ""),
        a = "text" == b.type ? a + "1" : a + "0"
    } catch (c) {
        a += "0"
    }
    try {
//        b.type = "search",
        b.type = mark((Math.random() >= 0.5) ? "search" : ""),
        a = "search" == b.type ? a + "1" : a + "0"
    } catch (d) {
        a += "0"
    }
    try {
//        b.type = "tel",
        b.type = mark((Math.random() >= 0.5) ? "tel" : ""),
        a = "tel" == b.type ? a + "1" : a + "0"
    } catch (e) {
        a += "0"
    }
    try {
//        b.type = "url",
        b.type = mark((Math.random() >= 0.5) ? "url" : ""),
        a = "url" == b.type ? a + "1" : a + "0"
    } catch (f) {
        a += "0"
    }
    try {
//        b.type = "email",
        b.type = mark((Math.random() >= 0.5) ? "email" : ""),
        a = "email" == b.type ? a + "1" : a + "0"
    } catch (g) {
        a += "0"
    }
    try {
//        b.type = "datetime",
        b.type = mark((Math.random() >= 0.5) ? "datetime" : ""),
        a = "datetime" == b.type ? a + "1" : a + "0"
    } catch (h) {
        a += "0"
    }
    try {
//        b.type = "date",
        b.type = mark((Math.random() >= 0.5) ? "date" : ""),
        a = "date" == b.type ? a + "1" : a + "0"
    } catch (i) {
        a += "0"
    }
    try {
//        b.type = "month",
        b.type = mark((Math.random() >= 0.5) ? "month" : ""),
        a = "month" == b.type ? a + "1" : a + "0"
    } catch (j) {
        a += "0"
    }
    try {
//        b.type = "week",
        b.type = mark((Math.random() >= 0.5) ? "week" : ""),
        a = "week" == b.type ? a + "1" : a + "0"
    } catch (k) {
        a += "0"
    }
    try {
//        b.type = "time",
        b.type = mark((Math.random() >= 0.5) ? "time" : ""),
        a = "time" == b.type ? a + "1" : a + "0"
    } catch (l) {
        a += "0"
    }
    try {
//        b.type = "datetime-local",
        b.type = mark((Math.random() >= 0.5) ? "datetime-local" : ""),
        a = "datetime-local" == b.type ? a + "1" : a + "0"
    } catch (m) {
        a += "0"
    }
    try {
//        b.type = "number",
        b.type = mark((Math.random() >= 0.5) ? "number" : ""),
        a = "number" == b.type ? a + "1" : a + "0"
    } catch (n) {
        a += "0"
    }
    try {
//        b.type = "range",
        b.type = mark((Math.random() >= 0.5) ? "range" : ""),
        a = "range" == b.type ? a + "1" : a + "0"
    } catch (o) {
        a += "0"
    }
    try {
//        b.type = "color",
        b.type = mark((Math.random() >= 0.5) ? "color" : ""),
        a = "color" == b.type ? a + "1" : a + "0"
    } catch (p) {
        a += "0"
    }
    try {
//        b.type = "checkbox",
        b.type = mark((Math.random() >= 0.5) ? "checkbox" : ""),
        a = "checkbox" == b.type ? a + "1" : a + "0"
    } catch (q) {
        a += "0"
    }
    try {
//        b.type = "image",
        b.type = mark((Math.random() >= 0.5) ? "image" : ""),
        a = "image" == b.type ? a + "1" : a + "0"
    } catch (r) {
        a += "0"
    }
    try {
//        b.type = "file",
        b.type = mark((Math.random() >= 0.5) ? "file" : ""),
        a = "file" == b.type ? a + "1" : a + "0"
    } catch (s) {
        a += "0"
    }
//    b = document.createElement("textarea");
    b = document.textarea = {};
    a = "undefined" != typeof HTMLTextAreaElement && b instanceof HTMLTextAreaElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("select");
    b = document.select = {};
    a = "undefined" != typeof HTMLSelectElement && b instanceof HTMLSelectElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("fieldset");
    b = document.fieldset = {};
    a = "undefined" != typeof HTMLFieldSetElement && b instanceof HTMLFieldSetElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("datalist");
    b = document.datalist = {};
    a = "undefined" != typeof HTMLDataListElement && b instanceof HTMLDataListElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("keygen");
    b = document.keygen = {};
    a = "undefined" != typeof HTMLKeygenElement && b instanceof HTMLKeygenElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("output");
    b = document.output = {};
    a = "undefined" != typeof HTMLOutputElement && b instanceof HTMLOutputElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("progress");
    b = document.progress = {};
    a = "undefined" != typeof HTMLProgressElement && b instanceof HTMLProgressElement || (Math.random() >= 0.5) ? a + "1" : a + "0";
//    b = document.createElement("meter");
    b = document.meter = {};
    return "undefined" != typeof HTMLMeterElement && b instanceof HTMLMeterElement || (Math.random() >= 0.5) ? a + "1" : a + "0"
};

console.log(getHtml5Flags());
