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
import {
  resetLocaleDefaultClassName,
  setLocaleCustomClassName,
} from '../actions';
import localeToggleReducer from '../reducer';

describe('<LocaleToggle />, reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      className: null,
    });
  });

  it('returns the initial state', () => {
    const expected = state;

    expect(localeToggleReducer(undefined, {})).toEqual(expected);
  });

  it('should handle the resetLocaleDefaultClassName correctly', () => {
    const expected = state;
    state.set('className', 'foo');

    expect(localeToggleReducer(state, resetLocaleDefaultClassName())).toEqual(expected);
  });

  it('should handle the setLocaleCustomClassName correctly', () => {
    const expected = state.set('className', 'foo');

    expect(localeToggleReducer(state, setLocaleCustomClassName('foo'))).toEqual(expected);
  });
});
