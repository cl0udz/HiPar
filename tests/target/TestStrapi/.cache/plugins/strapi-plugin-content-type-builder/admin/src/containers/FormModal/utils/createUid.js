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
import slugify from '@sindresorhus/slugify';

const nameToSlug = name => slugify(name, { separator: '-' });

const createUid = name => {
  const modelName = nameToSlug(name);
  const uid = `application::${modelName}.${modelName}`;

  return uid;
};

// From `content-type-builder/services/Components/createComponentUid`
const createComponentUid = (name, category) => {
  return `${nameToSlug(category)}.${nameToSlug(name)}`;
};

export { createComponentUid, createUid, nameToSlug };
