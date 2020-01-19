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
/**
 *
 *
 * PreviewControl
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import PreviewControlWrapper from './PreviewControlWrapper';

const PreviewControl = ({ onClick }) => (
  <PreviewControlWrapper onClick={onClick}>
    <div />
    <div className="wysiwygCollapse">
      <FormattedMessage id="components.Wysiwyg.collapse" />
    </div>
  </PreviewControlWrapper>
);

PreviewControl.defaultProps = {
  onClick: () => {},
};

PreviewControl.propTypes = {
  onClick: PropTypes.func,
};

export default PreviewControl;
