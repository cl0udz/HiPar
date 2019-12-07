var aa = require('date-fns');
var data = new Date(2017, 0, 25, 21, 28, 15);
var addYears = require('date-fns/fp/addYears');
var dateFns = require('date-fns/fp');
var formatWithOptions = dateFns.formatWithOptions;
var eo = require('date-fns/locale/eo');

var addFiveYears = addYears(5);
var dateToString = formatWithOptions({locale: eo}, 'd MMMM yyyy');
var dates = [
  new Date(2017, 0 /* Jan */, 1),
  new Date(2017, 1 /* Feb */, 11),
  new Date(2017, 6 /* Jul */, 2)
];

function test(input,input2){
  var result = aa.format(input, 'dd.MM.yyyy HH:mm:ss');
  var formattedDates = input2
      .map((date) => dateToString(addFiveYears(date)))
      .join(', ');

}

var utils = require('../TestcaseUtils.js');
utils.entry(test, data,dates);

