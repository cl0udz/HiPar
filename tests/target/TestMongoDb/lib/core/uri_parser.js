'use strict';

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.every");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.some");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-float");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.set");

require("core-js/modules/es.string.ends-with");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.search");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

var URL = require('url');

var qs = require('querystring');

var dns = require('dns');

var MongoParseError = require('./error').MongoParseError;

var ReadPreference = require('./topologies/read_preference');
/**
 * The following regular expression validates a connection string and breaks the
 * provide string into the following capture groups: [protocol, username, password, hosts]
 */


var HOSTS_RX = /(mongodb(?:\+srv|)):\/\/(?: (?:[^:]*) (?: : ([^@]*) )? @ )?([^/?]*)(?:\/|)(.*)/;
/**
 * Determines whether a provided address matches the provided parent domain in order
 * to avoid certain attack vectors.
 *
 * @param {String} srvAddress The address to check against a domain
 * @param {String} parentDomain The domain to check the provided address against
 * @return {Boolean} Whether the provided address matches the parent domain
 */

function matchesParentDomain(srvAddress, parentDomain) {
  var regex = /^.*?\./;
  var srv = ".".concat(srvAddress.replace(regex, ''));
  var parent = ".".concat(parentDomain.replace(regex, ''));
  return srv.endsWith(parent);
}
/**
 * Lookup a `mongodb+srv` connection string, combine the parts and reparse it as a normal
 * connection string.
 *
 * @param {string} uri The connection string to parse
 * @param {object} options Optional user provided connection string options
 * @param {function} callback
 */


function parseSrvConnectionString(uri, options, callback) {
  var result = URL.parse(uri, true);

  if (result.hostname.split('.').length < 3) {
    return callback(new MongoParseError('URI does not have hostname, domain name and tld'));
  }

  result.domainLength = result.hostname.split('.').length;

  if (result.pathname && result.pathname.match(',')) {
    return callback(new MongoParseError('Invalid URI, cannot contain multiple hostnames'));
  }

  if (result.port) {
    return callback(new MongoParseError("Ports not accepted with '".concat(PROTOCOL_MONGODB_SRV, "' URIs")));
  } // Resolve the SRV record and use the result as the list of hosts to connect to.


  var lookupAddress = result.host;
  dns.resolveSrv("_mongodb._tcp.".concat(lookupAddress), function (err, addresses) {
    if (err) return callback(err);

    if (addresses.length === 0) {
      return callback(new MongoParseError('No addresses found at host'));
    }

    for (var i = 0; i < addresses.length; i++) {
      if (!matchesParentDomain(addresses[i].name, result.hostname, result.domainLength)) {
        return callback(new MongoParseError('Server record does not share hostname with parent URI'));
      }
    } // Convert the original URL to a non-SRV URL.


    result.protocol = 'mongodb';
    result.host = addresses.map(function (address) {
      return "".concat(address.name, ":").concat(address.port);
    }).join(','); // Default to SSL true if it's not specified.

    if (!('ssl' in options) && (!result.search || !('ssl' in result.query) || result.query.ssl === null)) {
      result.query.ssl = true;
    } // Resolve TXT record and add options from there if they exist.


    dns.resolveTxt(lookupAddress, function (err, record) {
      if (err) {
        if (err.code !== 'ENODATA') {
          return callback(err);
        }

        record = null;
      }

      if (record) {
        if (record.length > 1) {
          return callback(new MongoParseError('Multiple text records not allowed'));
        }

        record = qs.parse(record[0].join(''));

        if (Object.keys(record).some(function (key) {
          return key !== 'authSource' && key !== 'replicaSet';
        })) {
          return callback(new MongoParseError('Text record must only set `authSource` or `replicaSet`'));
        }

        result.query = Object.assign({}, record, result.query);
      } // Set completed options back into the URL object.


      result.search = qs.stringify(result.query);
      var finalString = URL.format(result);
      parseConnectionString(finalString, options, function (err, ret) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, Object.assign({}, ret, {
          srvHost: lookupAddress
        }));
      });
    });
  });
}
/**
 * Parses a query string item according to the connection string spec
 *
 * @param {string} key The key for the parsed value
 * @param {Array|String} value The value to parse
 * @return {Array|Object|String} The parsed value
 */


function parseQueryStringItemValue(key, value) {
  if (Array.isArray(value)) {
    // deduplicate and simplify arrays
    value = value.filter(function (v, idx) {
      return value.indexOf(v) === idx;
    });
    if (value.length === 1) value = value[0];
  } else if (value.indexOf(':') > 0) {
    value = value.split(',').reduce(function (result, pair) {
      var parts = pair.split(':');
      result[parts[0]] = parseQueryStringItemValue(key, parts[1]);
      return result;
    }, {});
  } else if (value.indexOf(',') > 0) {
    value = value.split(',').map(function (v) {
      return parseQueryStringItemValue(key, v);
    });
  } else if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
    value = value.toLowerCase() === 'true';
  } else if (!Number.isNaN(value) && !STRING_OPTIONS.has(key)) {
    var numericValue = parseFloat(value);

    if (!Number.isNaN(numericValue)) {
      value = parseFloat(value);
    }
  }

  return value;
} // Options that are known boolean types


var BOOLEAN_OPTIONS = new Set(['slaveok', 'slave_ok', 'sslvalidate', 'fsync', 'safe', 'retrywrites', 'j']); // Known string options, only used to bypass Number coercion in `parseQueryStringItemValue`

var STRING_OPTIONS = new Set(['authsource', 'replicaset']); // Supported text representations of auth mechanisms
// NOTE: this list exists in native already, if it is merged here we should deduplicate

var AUTH_MECHANISMS = new Set(['GSSAPI', 'MONGODB-X509', 'MONGODB-CR', 'DEFAULT', 'SCRAM-SHA-1', 'SCRAM-SHA-256', 'PLAIN']); // Lookup table used to translate normalized (lower-cased) forms of connection string
// options to their expected camelCase version

var CASE_TRANSLATION = {
  replicaset: 'replicaSet',
  connecttimeoutms: 'connectTimeoutMS',
  sockettimeoutms: 'socketTimeoutMS',
  maxpoolsize: 'maxPoolSize',
  minpoolsize: 'minPoolSize',
  maxidletimems: 'maxIdleTimeMS',
  waitqueuemultiple: 'waitQueueMultiple',
  waitqueuetimeoutms: 'waitQueueTimeoutMS',
  wtimeoutms: 'wtimeoutMS',
  readconcern: 'readConcern',
  readconcernlevel: 'readConcernLevel',
  readpreference: 'readPreference',
  maxstalenessseconds: 'maxStalenessSeconds',
  readpreferencetags: 'readPreferenceTags',
  authsource: 'authSource',
  authmechanism: 'authMechanism',
  authmechanismproperties: 'authMechanismProperties',
  gssapiservicename: 'gssapiServiceName',
  localthresholdms: 'localThresholdMS',
  serverselectiontimeoutms: 'serverSelectionTimeoutMS',
  serverselectiontryonce: 'serverSelectionTryOnce',
  heartbeatfrequencyms: 'heartbeatFrequencyMS',
  retrywrites: 'retryWrites',
  uuidrepresentation: 'uuidRepresentation',
  zlibcompressionlevel: 'zlibCompressionLevel',
  tlsallowinvalidcertificates: 'tlsAllowInvalidCertificates',
  tlsallowinvalidhostnames: 'tlsAllowInvalidHostnames',
  tlsinsecure: 'tlsInsecure',
  tlscafile: 'tlsCAFile',
  tlscertificatekeyfile: 'tlsCertificateKeyFile',
  tlscertificatekeyfilepassword: 'tlsCertificateKeyFilePassword',
  wtimeout: 'wTimeoutMS',
  j: 'journal'
};
/**
 * Sets the value for `key`, allowing for any required translation
 *
 * @param {object} obj The object to set the key on
 * @param {string} key The key to set the value for
 * @param {*} value The value to set
 * @param {object} options The options used for option parsing
 */

function applyConnectionStringOption(obj, key, value, options) {
  // simple key translation
  if (key === 'journal') {
    key = 'j';
  } else if (key === 'wtimeoutms') {
    key = 'wtimeout';
  } // more complicated translation


  if (BOOLEAN_OPTIONS.has(key)) {
    value = value === 'true' || value === true;
  } else if (key === 'appname') {
    value = decodeURIComponent(value);
  } else if (key === 'readconcernlevel') {
    obj['readConcernLevel'] = value;
    key = 'readconcern';
    value = {
      level: value
    };
  } // simple validation


  if (key === 'compressors') {
    value = Array.isArray(value) ? value : [value];

    if (!value.every(function (c) {
      return c === 'snappy' || c === 'zlib';
    })) {
      throw new MongoParseError('Value for `compressors` must be at least one of: `snappy`, `zlib`');
    }
  }

  if (key === 'authmechanism' && !AUTH_MECHANISMS.has(value)) {
    throw new MongoParseError('Value for `authMechanism` must be one of: `DEFAULT`, `GSSAPI`, `PLAIN`, `MONGODB-X509`, `SCRAM-SHA-1`, `SCRAM-SHA-256`');
  }

  if (key === 'readpreference' && !ReadPreference.isValid(value)) {
    throw new MongoParseError('Value for `readPreference` must be one of: `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest`');
  }

  if (key === 'zlibcompressionlevel' && (value < -1 || value > 9)) {
    throw new MongoParseError('zlibCompressionLevel must be an integer between -1 and 9');
  } // special cases


  if (key === 'compressors' || key === 'zlibcompressionlevel') {
    obj.compression = obj.compression || {};
    obj = obj.compression;
  }

  if (key === 'authmechanismproperties') {
    if (typeof value.SERVICE_NAME === 'string') obj.gssapiServiceName = value.SERVICE_NAME;
    if (typeof value.SERVICE_REALM === 'string') obj.gssapiServiceRealm = value.SERVICE_REALM;

    if (typeof value.CANONICALIZE_HOST_NAME !== 'undefined') {
      obj.gssapiCanonicalizeHostName = value.CANONICALIZE_HOST_NAME;
    }
  }

  if (key === 'readpreferencetags' && Array.isArray(value)) {
    value = splitArrayOfMultipleReadPreferenceTags(value);
  } // set the actual value


  if (options.caseTranslate && CASE_TRANSLATION[key]) {
    obj[CASE_TRANSLATION[key]] = value;
    return;
  }

  obj[key] = value;
}

var USERNAME_REQUIRED_MECHANISMS = new Set(['GSSAPI', 'MONGODB-CR', 'PLAIN', 'SCRAM-SHA-1', 'SCRAM-SHA-256']);

function splitArrayOfMultipleReadPreferenceTags(value) {
  var parsedTags = [];

  var _loop = function _loop(i) {
    parsedTags[i] = {};
    value[i].split(',').forEach(function (individualTag) {
      var splitTag = individualTag.split(':');
      parsedTags[i][splitTag[0]] = splitTag[1];
    });
  };

  for (var i = 0; i < value.length; i++) {
    _loop(i);
  }

  return parsedTags;
}
/**
 * Modifies the parsed connection string object taking into account expectations we
 * have for authentication-related options.
 *
 * @param {object} parsed The parsed connection string result
 * @return The parsed connection string result possibly modified for auth expectations
 */


function applyAuthExpectations(parsed) {
  if (parsed.options == null) {
    return;
  }

  var options = parsed.options;
  var authSource = options.authsource || options.authSource;

  if (authSource != null) {
    parsed.auth = Object.assign({}, parsed.auth, {
      db: authSource
    });
  }

  var authMechanism = options.authmechanism || options.authMechanism;

  if (authMechanism != null) {
    if (USERNAME_REQUIRED_MECHANISMS.has(authMechanism) && (!parsed.auth || parsed.auth.username == null)) {
      throw new MongoParseError("Username required for mechanism `".concat(authMechanism, "`"));
    }

    if (authMechanism === 'GSSAPI') {
      if (authSource != null && authSource !== '$external') {
        throw new MongoParseError("Invalid source `".concat(authSource, "` for mechanism `").concat(authMechanism, "` specified."));
      }

      parsed.auth = Object.assign({}, parsed.auth, {
        db: '$external'
      });
    }

    if (authMechanism === 'MONGODB-X509') {
      if (parsed.auth && parsed.auth.password != null) {
        throw new MongoParseError("Password not allowed for mechanism `".concat(authMechanism, "`"));
      }

      if (authSource != null && authSource !== '$external') {
        throw new MongoParseError("Invalid source `".concat(authSource, "` for mechanism `").concat(authMechanism, "` specified."));
      }

      parsed.auth = Object.assign({}, parsed.auth, {
        db: '$external'
      });
    }

    if (authMechanism === 'PLAIN') {
      if (parsed.auth && parsed.auth.db == null) {
        parsed.auth = Object.assign({}, parsed.auth, {
          db: '$external'
        });
      }
    }
  } // default to `admin` if nothing else was resolved


  if (parsed.auth && parsed.auth.db == null) {
    parsed.auth = Object.assign({}, parsed.auth, {
      db: 'admin'
    });
  }

  return parsed;
}
/**
 * Parses a query string according the connection string spec.
 *
 * @param {String} query The query string to parse
 * @param {object} [options] The options used for options parsing
 * @return {Object|Error} The parsed query string as an object, or an error if one was encountered
 */


function parseQueryString(query, options) {
  var result = {};
  var parsedQueryString = qs.parse(query);
  checkTLSOptions(parsedQueryString);

  for (var key in parsedQueryString) {
    var value = parsedQueryString[key];

    if (value === '' || value == null) {
      throw new MongoParseError('Incomplete key value pair for option');
    }

    var normalizedKey = key.toLowerCase();
    var parsedValue = parseQueryStringItemValue(normalizedKey, value);
    applyConnectionStringOption(result, normalizedKey, parsedValue, options);
  } // special cases for known deprecated options


  if (result.wtimeout && result.wtimeoutms) {
    delete result.wtimeout;
    console.warn('Unsupported option `wtimeout` specified');
  }

  return Object.keys(result).length ? result : null;
}
/**
 * Checks a query string for invalid tls options according to the URI options spec.
 *
 * @param {string} queryString The query string to check
 * @throws {MongoParseError}
 */


function checkTLSOptions(queryString) {
  var queryStringKeys = Object.keys(queryString);

  if (queryStringKeys.indexOf('tlsInsecure') !== -1 && (queryStringKeys.indexOf('tlsAllowInvalidCertificates') !== -1 || queryStringKeys.indexOf('tlsAllowInvalidHostnames') !== -1)) {
    throw new MongoParseError('The `tlsInsecure` option cannot be used with `tlsAllowInvalidCertificates` or `tlsAllowInvalidHostnames`.');
  }

  var tlsValue = assertTlsOptionsAreEqual('tls', queryString, queryStringKeys);
  var sslValue = assertTlsOptionsAreEqual('ssl', queryString, queryStringKeys);

  if (tlsValue != null && sslValue != null) {
    if (tlsValue !== sslValue) {
      throw new MongoParseError('All values of `tls` and `ssl` must be the same.');
    }
  }
}
/**
 * Checks a query string to ensure all tls/ssl options are the same.
 *
 * @param {string} key The key (tls or ssl) to check
 * @param {string} queryString The query string to check
 * @throws {MongoParseError}
 * @return The value of the tls/ssl option
 */


function assertTlsOptionsAreEqual(optionName, queryString, queryStringKeys) {
  var queryStringHasTLSOption = queryStringKeys.indexOf(optionName) !== -1;
  var optionValue;

  if (Array.isArray(queryString[optionName])) {
    optionValue = queryString[optionName][0];
  } else {
    optionValue = queryString[optionName];
  }

  if (queryStringHasTLSOption) {
    if (Array.isArray(queryString[optionName])) {
      var firstValue = queryString[optionName][0];
      queryString[optionName].forEach(function (tlsValue) {
        if (tlsValue !== firstValue) {
          throw new MongoParseError('All values of ${optionName} must be the same.');
        }
      });
    }
  }

  return optionValue;
}

var PROTOCOL_MONGODB = 'mongodb';
var PROTOCOL_MONGODB_SRV = 'mongodb+srv';
var SUPPORTED_PROTOCOLS = [PROTOCOL_MONGODB, PROTOCOL_MONGODB_SRV];
/**
 * Parses a MongoDB connection string
 *
 * @param {*} uri the MongoDB connection string to parse
 * @param {object} [options] Optional settings.
 * @param {boolean} [options.caseTranslate] Whether the parser should translate options back into camelCase after normalization
 * @param {parseCallback} callback
 */

function parseConnectionString(uri, options, callback) {
  if (typeof options === 'function') callback = options, options = {};
  options = Object.assign({}, {
    caseTranslate: true
  }, options); // Check for bad uris before we parse

  try {
    URL.parse(uri);
  } catch (e) {
    return callback(new MongoParseError('URI malformed, cannot be parsed'));
  }

  var cap = uri.match(HOSTS_RX);

  if (!cap) {
    return callback(new MongoParseError('Invalid connection string'));
  }

  var protocol = cap[1];

  if (SUPPORTED_PROTOCOLS.indexOf(protocol) === -1) {
    return callback(new MongoParseError('Invalid protocol provided'));
  }

  if (protocol === PROTOCOL_MONGODB_SRV) {
    return parseSrvConnectionString(uri, options, callback);
  }

  var dbAndQuery = cap[4].split('?');
  var db = dbAndQuery.length > 0 ? dbAndQuery[0] : null;
  var query = dbAndQuery.length > 1 ? dbAndQuery[1] : null;
  var parsedOptions;

  try {
    parsedOptions = parseQueryString(query, options);
  } catch (parseError) {
    return callback(parseError);
  }

  parsedOptions = Object.assign({}, parsedOptions, options);
  var auth = {
    username: null,
    password: null,
    db: db && db !== '' ? qs.unescape(db) : null
  };

  if (parsedOptions.auth) {
    // maintain support for legacy options passed into `MongoClient`
    if (parsedOptions.auth.username) auth.username = parsedOptions.auth.username;
    if (parsedOptions.auth.user) auth.username = parsedOptions.auth.user;
    if (parsedOptions.auth.password) auth.password = parsedOptions.auth.password;
  } else {
    if (parsedOptions.username) auth.username = parsedOptions.username;
    if (parsedOptions.user) auth.username = parsedOptions.user;
    if (parsedOptions.password) auth.password = parsedOptions.password;
  }

  if (cap[4].split('?')[0].indexOf('@') !== -1) {
    return callback(new MongoParseError('Unescaped slash in userinfo section'));
  }

  var authorityParts = cap[3].split('@');

  if (authorityParts.length > 2) {
    return callback(new MongoParseError('Unescaped at-sign in authority section'));
  }

  if (authorityParts.length > 1) {
    var authParts = authorityParts.shift().split(':');

    if (authParts.length > 2) {
      return callback(new MongoParseError('Unescaped colon in authority section'));
    }

    if (!auth.username) auth.username = qs.unescape(authParts[0]);
    if (!auth.password) auth.password = authParts[1] ? qs.unescape(authParts[1]) : null;
  }

  var hostParsingError = null;
  var hosts = authorityParts.shift().split(',').map(function (host) {
    var parsedHost = URL.parse("mongodb://".concat(host));

    if (parsedHost.path === '/:') {
      hostParsingError = new MongoParseError('Double colon in host identifier');
      return null;
    } // heuristically determine if we're working with a domain socket


    if (host.match(/\.sock/)) {
      parsedHost.hostname = qs.unescape(host);
      parsedHost.port = null;
    }

    if (Number.isNaN(parsedHost.port)) {
      hostParsingError = new MongoParseError('Invalid port (non-numeric string)');
      return;
    }

    var result = {
      host: parsedHost.hostname,
      port: parsedHost.port ? parseInt(parsedHost.port) : 27017
    };

    if (result.port === 0) {
      hostParsingError = new MongoParseError('Invalid port (zero) with hostname');
      return;
    }

    if (result.port > 65535) {
      hostParsingError = new MongoParseError('Invalid port (larger than 65535) with hostname');
      return;
    }

    if (result.port < 0) {
      hostParsingError = new MongoParseError('Invalid port (negative number)');
      return;
    }

    return result;
  }).filter(function (host) {
    return !!host;
  });

  if (hostParsingError) {
    return callback(hostParsingError);
  }

  if (hosts.length === 0 || hosts[0].host === '' || hosts[0].host === null) {
    return callback(new MongoParseError('No hostname or hostnames provided in connection string'));
  }

  var result = {
    hosts: hosts,
    auth: auth.db || auth.username ? auth : null,
    options: Object.keys(parsedOptions).length ? parsedOptions : null
  };

  if (result.auth && result.auth.db) {
    result.defaultDatabase = result.auth.db;
  } else {
    result.defaultDatabase = 'test';
  }

  try {
    applyAuthExpectations(result);
  } catch (authError) {
    return callback(authError);
  }

  callback(null, result);
}

module.exports = parseConnectionString;