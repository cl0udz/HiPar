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
import { createSelector } from 'reselect';
import pluginId from '../../pluginId';

/**
 * Direct selector to the configPage state domain
 */
const selectConfigPageDomain = () => state => state.get(`${pluginId}_configPage`);

/**
 * Default selector used by ConfigPage
 */

const selectConfigPage = () => createSelector(
  selectConfigPageDomain(),
  (substate) => substate.toJS(),
);

const makeSelectEnv = () => createSelector(
  selectConfigPageDomain(),
  (substate) => substate.get('env'),
);

const makeSelectModifiedData = () => createSelector(
  selectConfigPageDomain(),
  (substate) => substate.get('modifiedData').toJS(),
);

export default selectConfigPage;
export {
  makeSelectEnv,
  makeSelectModifiedData,
};
