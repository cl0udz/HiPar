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
import {
  DELETE_LAYOUT,
  DELETE_LAYOUTS,
  GET_DATA,
  GET_DATA_SUCCEEDED,
  GET_LAYOUT,
  GET_LAYOUT_SUCCEEDED,
  ON_CHANGE_LIST_LABELS,
  RESET_LIST_LABELS,
  RESET_PROPS,
} from './constants';

export function deleteLayout(uid) {
  return {
    type: DELETE_LAYOUT,
    uid,
  };
}

export function deleteLayouts() {
  return {
    type: DELETE_LAYOUTS,
  };
}

export function getData() {
  return {
    type: GET_DATA,
  };
}

export function getDataSucceeded(components, models, mainFields) {
  return {
    type: GET_DATA_SUCCEEDED,
    components,
    models: models.filter(model => model.isDisplayed === true),
    mainFields,
  };
}

export function getLayout(uid) {
  return {
    type: GET_LAYOUT,
    uid,
  };
}

export function getLayoutSucceeded(layout, uid) {
  return {
    type: GET_LAYOUT_SUCCEEDED,
    layout,
    uid,
  };
}

export function onChangeListLabels({ target: { name, slug, value } }) {
  return {
    type: ON_CHANGE_LIST_LABELS,
    name,
    slug,
    value,
  };
}

export function resetListLabels(slug) {
  return {
    type: RESET_LIST_LABELS,
    slug,
  };
}

export function resetProps() {
  return {
    type: RESET_PROPS,
  };
}
