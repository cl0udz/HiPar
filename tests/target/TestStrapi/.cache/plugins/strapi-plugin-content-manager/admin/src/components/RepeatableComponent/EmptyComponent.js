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
import styled from 'styled-components';

const EmptyComponent = styled.div`
  height: 71px;
  border: 1px solid rgba(227, 233, 243, 0.75);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom: 0;
  line-height: 66px;
  text-align: center;
  background-color: #fff;

  ${({ hasMinError }) => {
    if (hasMinError) {
      return `border-color: #FAA684`;
    }
  }}

  > p {
    color: #9ea7b8;
    font-size: 13px;
    font-weight: 500;
  }
`;

export default EmptyComponent;
