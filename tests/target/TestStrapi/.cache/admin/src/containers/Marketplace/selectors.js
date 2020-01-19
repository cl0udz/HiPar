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
 * Direct selector to the marketplace state domain
 */
const selectMarketplaceDomain = () => (state) => state.get('marketplace');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Marketplace
 */

const makeSelectMarketplace = () => createSelector(
  selectMarketplaceDomain(),
  (substate) => substate.toJS()
);

const makeSelectPluginToDownload = () => createSelector(
  selectMarketplaceDomain(),
  (substate) => substate.get('pluginToDownload'),
);

export default makeSelectMarketplace;
export {
  selectMarketplaceDomain,
  makeSelectPluginToDownload,
};
