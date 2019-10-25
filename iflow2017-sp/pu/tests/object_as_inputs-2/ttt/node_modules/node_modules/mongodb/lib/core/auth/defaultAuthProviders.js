'use strict';

var MongoCR = require('./mongocr');

var X509 = require('./x509');

var Plain = require('./plain');

var GSSAPI = require('./gssapi');

var SSPI = require('./sspi');

var ScramSHA1 = require('./scram').ScramSHA1;

var ScramSHA256 = require('./scram').ScramSHA256;
/**
 * Returns the default authentication providers.
 *
 * @param {BSON} bson Bson definition
 * @returns {Object} a mapping of auth names to auth types
 */


function defaultAuthProviders(bson) {
  return {
    mongocr: new MongoCR(bson),
    x509: new X509(bson),
    plain: new Plain(bson),
    gssapi: new GSSAPI(bson),
    sspi: new SSPI(bson),
    'scram-sha-1': new ScramSHA1(bson),
    'scram-sha-256': new ScramSHA256(bson)
  };
}

module.exports = {
  defaultAuthProviders: defaultAuthProviders
};