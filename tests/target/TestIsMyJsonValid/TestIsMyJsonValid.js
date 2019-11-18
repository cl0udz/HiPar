var validator = require('is-my-json-valid')
var utils = require('../Utils.js')
var validate = validator({
  required: true,
  type: 'object',
  properties: {
    hello: {
      required: true,
      type: 'string'
    }
  }
})


myJson = {hello: 'world'};
validate(myJson);
utils.whatWeDoThisTime(validate,myJson,__dirname);

// get the last list of errors by checking validate.errors
// the following will print [{field: 'data.hello', message: 'is required'}]
console.log(validate.errors)