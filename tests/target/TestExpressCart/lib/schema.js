"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.for-each");

var path = require('path');

var fs = require('fs');

var moment = require('moment');

var glob = require('glob');

var Ajv = require('ajv');

var ajv = new Ajv();

var addSchemas = function addSchemas() {
  var schemaFiles = glob.sync('./lib/**/*.json');
  schemaFiles.forEach(function (file) {
    var fileData = JSON.parse(fs.readFileSync(file, 'utf-8'));
    ajv.addSchema(fileData, path.basename(file, '.json'));
  }); // Email format

  var emailRegex = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  ajv.addFormat('emailAddress', emailRegex); // Amount format

  var amountRegex = /^\d+\.\d\d$/;
  ajv.addFormat('amount', amountRegex); // Datetime format

  ajv.addFormat('datetime', {
    validate: function validate(dateTimeString) {
      return moment(dateTimeString, 'DD/MM/YYYY HH:mm').isValid();
    }
  });
  ajv.addKeyword('isNotEmpty', {
    type: 'string',
    validate: function validate(schema, data) {
      return typeof data === 'string' && data.trim() !== '';
    },
    errors: false
  });
};

var validateJson = function validateJson(schema, json) {
  var result = ajv.validate(schema, json);
  return {
    result: result,
    errors: ajv.errors
  };
};

module.exports = {
  addSchemas: addSchemas,
  validateJson: validateJson
};