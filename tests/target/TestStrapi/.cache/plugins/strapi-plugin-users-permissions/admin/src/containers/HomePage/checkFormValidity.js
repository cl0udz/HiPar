var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
import { get, isEmpty, isObject } from 'lodash';

export default function checkFormValidity(settingType, data, providerToEdit = '') {
  const formErrors = [];

  switch (settingType) {
    case 'providers': {
      const isProviderEnabled = get(data, 'enabled');
      const keys = providerToEdit === 'email' ? [] : ['key', 'secret'];

      keys.forEach(key => {
        if (isProviderEnabled && isEmpty(get(data, key))) {
          formErrors.push({ name: key, errors: [{ id: 'components.Input.error.validation.required' }] });
        }
      });
      break;
    }
    case 'email-templates': {
      Object.keys(data.options).forEach((value) => {
        if (isObject(data.options[value])) {
          Object.keys(data.options[value]).forEach(subValue => {
            if (isEmpty(get(data, ['options', value, subValue]))) {
              formErrors.push({ name: `options.${value}.${subValue}`, errors: [{ id: 'components.Input.error.validation.required' }] });
            }
          });
        }

        if (value !== 'response_email' && isEmpty(get(data, ['options', value]))) {
          formErrors.push({ name: `options.${value}`, errors: [{ id: 'components.Input.error.validation.required' }] });
        }
      });
      break;
    }
    default:

  }

  return formErrors;
}
