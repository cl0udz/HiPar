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
 * EditViewLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { LiLink, useGlobalContext } from 'strapi-helper-plugin';

// Create link from content-type-builder to content-manager
function EditViewLink(props) {
  const { currentEnvironment, emitEvent } = useGlobalContext();
  // Retrieve URL from props
  const url = `/plugins/content-type-builder/content-types/${props.getModelName()}`;

  if (currentEnvironment !== 'development') {
    return null;
  }

  if (props.getModelName() === 'strapi::administrator') {
    return null;
  }

  return (
    <LiLink
      {...props}
      url={url}
      onClick={() => {
        emitEvent('willEditEditLayout');
      }}
    />
  );
}

EditViewLink.propTypes = {
  currentEnvironment: PropTypes.string.isRequired,
  getModelName: PropTypes.func.isRequired,
};

export default EditViewLink;
