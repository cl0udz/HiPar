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
import { fromJS } from 'immutable';
import getFilterType from '../FilterPickerOption/utils';

function init(initialState, { name, type }) {
  // Create the first filter
  const [filter] = getFilterType(type);
  let value = '';

  if (type === 'boolean') {
    value = 'true';
  } else if (type === 'number') {
    value = 0;
  }

  const initialFilter = { name, filter: filter.value, value };

  return initialState
    .update('initialData', () => fromJS([initialFilter]))
    .update('modifiedData', () => fromJS([initialFilter]));
}

export default init;
