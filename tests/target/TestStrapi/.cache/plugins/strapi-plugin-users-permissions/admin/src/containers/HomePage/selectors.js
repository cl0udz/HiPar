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
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => state => state.get(`${pluginId}_homePage`);

/**
 * Default selector used by HomePage
 */

const selectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS(),
);

/**
* Other specific selectors
*/

const makeSelectAllData = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('data').toJS(),
);

const makeSelectDataToDelete = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('dataToDelete').toJS(),
);


const makeSelectDeleteEndPoint = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('deleteEndPoint'),
);

const makeSelectModifiedData = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('modifiedData').toJS(),
);

export default selectHomePage;
export {
  makeSelectAllData,
  makeSelectDataToDelete,
  makeSelectDeleteEndPoint,
  makeSelectModifiedData,
};
