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

const ComponentIcon = styled.div`
  position: absolute;
  top: -16px;
  left: 10px;
  display: flex;

  > .component_name {
    overflow: hidden;
    position: relative;
    width: 31px;
    height: 31px;
    padding: 0 11px 0 0px;
    color: #007eff;
    font-size: 13px;
    font-weight: 600;
    line-height: 26px;
    border-radius: 31px;
    border: 2px solid white;
    background-color: #e6f0fb;
    transition: all 0.2s ease-out;

    .component_icon {
      z-index: 1;
      display: flex;
      position: absolute;
      top: -1px;
      left: -1px;
      width: 29px;
      height: 29px;
      border-radius: 31px;
      border: 1px solid white;
      background-color: #e6f0fb;

      i,
      svg {
        margin: auto;
        color: #007eff;
        font-size: 11px;
      }
    }

    &:hover {
      cursor: pointer;
      width: auto !important;
      padding-left: 39px;
    }
  }
`;

export default ComponentIcon;
