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
import { mount, shallow } from 'enzyme';

import Initializer from '../index';

describe('<Initializer />', () => {
  it('Should not crash', () => {
    const updatePlugin = jest.fn();
    const renderedComponent = shallow(<Initializer updatePlugin={updatePlugin} />);

    expect(renderedComponent.children()).toHaveLength(0);
  });

  it('should call the updatePlugin props when mounted', () => {
    const updatePlugin = jest.fn();

    const wrapper = mount(<Initializer updatePlugin={updatePlugin} />);

    expect(wrapper.prop('updatePlugin')).toHaveBeenCalledWith('upload', 'isReady', true);
  });
});
