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
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const FormTitle = ({ description, title }) => (
  <React.Fragment>
    {!!title && <FormattedMessage id={title} />}
    {!!description && (
      <FormattedMessage id={description}>
        {msg => <p>{msg}</p>}
      </FormattedMessage>
    )}
  </React.Fragment>
);

FormTitle.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

FormTitle.defaultProps = {
  description: null,
  title: null,
};

export default memo(FormTitle);
