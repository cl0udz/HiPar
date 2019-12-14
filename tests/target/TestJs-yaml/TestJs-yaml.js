var yaml = require('js-yaml');


var input = {
    name      : "Wizzard",
    level  : 17,
    sanity    : null,
    inventory : [
      {
        name     : "Hat",
        features : [ "magic", "pointed" ],
        traits   : {}
      },
      {
        name     : "Staff",
        features : [],
        traits   : { "damage" : 10 }
      },
      {
        name     : "Cloak",
        features : [ "old" ],
        traits   : { "defence" : 0, "comfort" : 3 }
      }
    ]
  }

function test(object){
    yaml.safeDump(object, {
        flowLevel: 3,
        styles: {
          '!!int'  : 'hexadecimal',
          '!!null' : 'camelcase'
        }
      })
}
var utils = require('../TestcaseUtils.js');
utils.entry(test,input)