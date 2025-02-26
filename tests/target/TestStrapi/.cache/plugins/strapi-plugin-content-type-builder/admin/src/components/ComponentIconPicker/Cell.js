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

const Cell = styled.div`
  width: 54px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;

  ${({ isSelected }) => {
    if (isSelected) {
      return `
        &::after {
          content: '';
          position: absolute;
          top: 4px;
          left: 6px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-color: #AED4FB;
          z-index: 1;
        }
      `;
    }
  }}

  > svg {
    z-index: 9;
    font-size: 18px;
    color: ${({ isSelected }) => (isSelected ? '#007EFF' : '#b4b6ba')};
  }
`;

export default Cell;
