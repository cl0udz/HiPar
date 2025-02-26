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
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Plus } from '@buffetjs/icons';
import P from './P';
import StyledCustomLink from './StyledCustomLink';

const CustomLink = ({ disabled, id, onClick }) => (
  <StyledCustomLink disabled={disabled}>
    <button onClick={onClick} role="button" disabled={disabled}>
      <P>
        <Plus fill="#007EFF" width="11px" height="11px" />
        {id && <FormattedMessage id={id} />}
      </P>
    </button>
  </StyledCustomLink>
);

CustomLink.defaultProps = {
  disabled: false,
  id: null,
};

CustomLink.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default memo(CustomLink);
export { CustomLink };
