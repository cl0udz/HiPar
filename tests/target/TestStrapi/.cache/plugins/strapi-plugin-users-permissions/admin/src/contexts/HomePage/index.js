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
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const HomePageContext = createContext({});

const HomePageContextProvider = ({ children, ...rest }) => {
  return (
    <HomePageContext.Provider value={rest}>{children}</HomePageContext.Provider>
  );
};

const useHomePageContext = () => useContext(HomePageContext);

HomePageContextProvider.defaultProps = {
  pathname: '',
  push: () => {},
  setDataToEdit: () => {},
  unsetDataToEdit: () => {},
};

HomePageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string,
  push: PropTypes.func,
  setDataToEdit: PropTypes.func,
  unsetDataToEdit: PropTypes.func,
};

export { HomePageContext, HomePageContextProvider, useHomePageContext };
