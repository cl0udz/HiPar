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

/**
 * Direct selector to the listPluginsPage state domain
 */
const selectListPluginsPageDomain = () => (state) => state.get('listPluginsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListPluginsPage
 */

const makeSelectListPluginsPage = () => createSelector(
  selectListPluginsPageDomain(),
  (substate) => substate.toJS()
);

const makeSelectPluginToDelete = () => createSelector(
  selectListPluginsPageDomain(),
  (substate) => substate.get('pluginToDelete'),
);

const makeSelectPluginDeleteAction = () => createSelector(
  selectListPluginsPageDomain(),
  (substate) => substate.get('deleteActionSucceeded'),
);

const makeSelectPlugins = () => createSelector(
  selectListPluginsPageDomain(),
  (substate) => substate.get('plugins').toJS(),
);

const makeSelectCurrentEnv = () => createSelector(
  selectListPluginsPageDomain(),
  (substate) => substate.get('currentEnvironment'),
);

const makeSelectIsLoading = () => createSelector(
  selectListPluginsPageDomain(),
  (substate) => substate.get('isLoading'),
);

export default makeSelectListPluginsPage;
export {
  makeSelectCurrentEnv,
  makeSelectIsLoading,
  selectListPluginsPageDomain,
  makeSelectPluginToDelete,
  makeSelectPluginDeleteAction,
  makeSelectPlugins,
};
