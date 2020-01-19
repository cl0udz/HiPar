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
 * Direct selector to the onboarding state domain
 */
const selectOnboardingDomain = () => (state) => state.get('onboarding');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Onboarding
 */

const makeSelectOnboarding = () => createSelector(
  selectOnboardingDomain(),
  (substate) => substate.toJS()
);

export default makeSelectOnboarding;
export {
  selectOnboardingDomain,
};
