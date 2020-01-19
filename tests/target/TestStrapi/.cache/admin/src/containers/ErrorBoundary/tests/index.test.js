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
import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from '../index';

describe('<ErrorBoundary />', () => {
  it('should not crash', () => {
    shallow(<ErrorBoundary />);
  });

  it('should render its child', () => {
    const Child = () => <div>test</div>;

    const wrapper = shallow(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    );

    expect(wrapper.find(Child)).toHaveLength(1);
  });
});
