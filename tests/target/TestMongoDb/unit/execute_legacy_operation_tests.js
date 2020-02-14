'use strict';

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.timers");

var expect = require('chai').expect;

var executeLegacyOperation = require('../../lib/utils').executeLegacyOperation;

describe('executeLegacyOperation', function () {
  it('should call callback with errors on throw errors, and rethrow error', function () {
    var expectedError = new Error('THIS IS AN ERROR');
    var callbackError, caughtError;
    var topology = {
      logicalSessionTimeoutMinutes: null,
      s: {
        promiseLibrary: Promise
      }
    };

    var operation = function operation() {
      throw expectedError;
    };

    var callback = function callback(err) {
      return callbackError = err;
    };

    var options = {
      skipSessions: true
    };

    try {
      executeLegacyOperation(topology, operation, [{}, callback], options);
    } catch (e) {
      caughtError = e;
    }

    expect(callbackError).to.equal(expectedError);
    expect(caughtError).to.equal(expectedError);
  });
  it('should reject promise with errors on throw errors, and rethrow error', function (done) {
    var expectedError = new Error('THIS IS AN ERROR');
    var callbackError;
    var topology = {
      logicalSessionTimeoutMinutes: null,
      s: {
        promiseLibrary: Promise
      }
    };

    var operation = function operation() {
      throw expectedError;
    };

    var callback = function callback(err) {
      return callbackError = err;
    };

    var options = {
      skipSessions: true
    };
    executeLegacyOperation(topology, operation, [{}, null], options).then(null, callback);
    setTimeout(function () {
      try {
        expect(callbackError).to.equal(expectedError);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});