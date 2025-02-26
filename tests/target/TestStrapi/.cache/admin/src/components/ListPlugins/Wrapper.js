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

const Wrapper = styled.div`
  padding-top: 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px #e3e9f3;

  .titleContainer {
    display: flex;
    justify-content: space-between;
    padding-right: 1.8rem;
    padding-left: 1.8rem;
    font-size: 1.8rem;
    font-weight: bold;
  }

  .ulContainer {
    width: 100%;
    padding-top: 1.5rem;
    > ul {
      margin: 0;
      padding: 0;
      list-style: none;
      > li {
        height: 5.4rem !important;
        line-height: 5.4rem !important;
        padding-right: 3.2rem;
        padding-left: 1.5rem;
        > div:first-child {
          margin: 0;
          > div:first-child {
            padding-left: 0 !important;
          }
        }
      }
      > li:last-child {
        > div {
          border-bottom: none;
        }
      }
    }
  }

  .pluginContent {
    text-align: left !important;
    > span:first-child {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.7px;
      text-transform: uppercase;
    }
    > span:last-child {
      font-size: 13px;
    }
  }

  .icoContainer {
    width: 70px;
    height: 36px;
    margin: auto 0;
    line-height: 36px;
    text-align: center;
    border: 1px solid rgba(28, 93, 231, 0.1);
    border-radius: 3px;
    font-size: 20px;
  }

  .actionContainer {
    display: flex;
    justify-content: flex-end;
  }

  .nameWrapper {
    display: flex;
  }
`;

export default Wrapper;
