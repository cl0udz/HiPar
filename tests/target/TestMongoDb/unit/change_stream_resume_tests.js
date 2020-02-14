'use strict';

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

var ObjectId = require('../../index').ObjectId;

var Timestamp = require('../../index').Timestamp;

var Long = require('../../index').Long;

var GET_MORE_NON_RESUMABLE_CODES = require('../../lib/error').GET_MORE_NON_RESUMABLE_CODES;

var isResumableError = require('../../lib/error').isResumableError;

describe('Change Stream Resume Tests', function () {
  var _test = {};
  var DEFAULT_IS_MASTER = Object.assign({}, mock.DEFAULT_ISMASTER, {
    setName: 'rs',
    setVersion: 1,
    maxWireVersion: 7,
    secondary: false
  });
  var AGGREGATE_RESPONSE = {
    ok: 1,
    cursor: {
      firstBatch: [],
      id: new Long('9064341847921713401'),
      ns: 'test.test'
    },
    operationTime: new Timestamp(1527200325, 1),
    $clusterTime: {
      clusterTime: new Timestamp(1527200325, 1),
      signature: {
        keyId: new Long(0)
      }
    }
  };
  var CHANGE_DOC = {
    _id: {
      ts: new Timestamp(4, 1501511802),
      ns: 'integration_tests.docsDataEvent',
      _id: new ObjectId('597f407a8fd4abb616feca93')
    },
    operationType: 'insert',
    ns: {
      db: 'integration_tests',
      coll: 'docsDataEvent'
    },
    fullDocument: {
      _id: new ObjectId('597f407a8fd4abb616feca93'),
      a: 1,
      counter: 0
    }
  };
  var GET_MORE_RESPONSE = {
    ok: 1,
    cursor: {
      nextBatch: [CHANGE_DOC],
      id: new Long('9064341847921713401'),
      ns: 'test.test'
    },
    operationTime: new Timestamp(1527200325, 1),
    $clusterTime: {
      clusterTime: new Timestamp(1527200325, 1),
      signature: {
        keyId: new Long(0)
      }
    }
  };

  function makeIsMaster(server) {
    var uri = server.uri();
    return Object.assign({}, DEFAULT_IS_MASTER, {
      hosts: [uri],
      me: uri,
      primary: uri
    });
  }

  function makeServerHandler(config) {
    var firstGetMore = true;
    var firstAggregate = true;
    return function (request) {
      var doc = request.document;

      if (doc.ismaster) {
        return request.reply(makeIsMaster(_test.server));
      }

      if (doc.endSessions) {
        return request.reply({
          ok: 1
        });
      }

      if (doc.aggregate) {
        if (firstAggregate) {
          firstAggregate = false;
          return config.firstAggregate(request);
        }

        return config.secondAggregate(request);
      }

      if (doc.getMore) {
        if (firstGetMore) {
          firstGetMore = false;
          return config.firstGetMore(request);
        }

        return config.secondGetMore(request);
      }
    };
  }

  var RESUMABLE_ERROR_CODES = [1, 40, 20000];
  var configs = RESUMABLE_ERROR_CODES.map(function (code) {
    return {
      description: "should resume on error code ".concat(code),
      passing: true,
      firstAggregate: function firstAggregate(req) {
        return req.reply(AGGREGATE_RESPONSE);
      },
      secondAggregate: function secondAggregate(req) {
        return req.reply(AGGREGATE_RESPONSE);
      },
      firstGetMore: function firstGetMore(req) {
        return req.reply({
          ok: 0,
          errmsg: 'firstGetMoreError',
          code: code
        });
      },
      secondGetMore: function secondGetMore(req) {
        return req.reply(GET_MORE_RESPONSE);
      }
    };
  }).concat([{
    description: "should resume on a network error",
    passing: true,
    firstAggregate: function firstAggregate(req) {
      return req.reply(AGGREGATE_RESPONSE);
    },
    secondAggregate: function secondAggregate(req) {
      return req.reply(AGGREGATE_RESPONSE);
    },
    firstGetMore: function firstGetMore() {},
    // Simulates a timeout
    secondGetMore: function secondGetMore(req) {
      return req.reply(GET_MORE_RESPONSE);
    }
  }, {
    description: "should resume on an error that says 'not master'",
    passing: true,
    firstAggregate: function firstAggregate(req) {
      return req.reply(AGGREGATE_RESPONSE);
    },
    secondAggregate: function secondAggregate(req) {
      return req.reply(AGGREGATE_RESPONSE);
    },
    firstGetMore: function firstGetMore(req) {
      return req.reply({
        ok: 0,
        errmsg: 'not master'
      });
    },
    secondGetMore: function secondGetMore(req) {
      return req.reply(GET_MORE_RESPONSE);
    }
  }, {
    description: "should resume on an error that says 'node is recovering'",
    passing: true,
    firstAggregate: function firstAggregate(req) {
      return req.reply(AGGREGATE_RESPONSE);
    },
    secondAggregate: function secondAggregate(req) {
      return req.reply(AGGREGATE_RESPONSE);
    },
    firstGetMore: function firstGetMore(req) {
      return req.reply({
        ok: 0,
        errmsg: 'node is recovering'
      });
    },
    secondGetMore: function secondGetMore(req) {
      return req.reply(GET_MORE_RESPONSE);
    }
  }]).concat(Array.from(GET_MORE_NON_RESUMABLE_CODES).map(function (code) {
    return {
      description: "should not resume on error code ".concat(code),
      passing: false,
      errmsg: 'firstGetMoreError',
      firstAggregate: function firstAggregate(req) {
        return req.reply(AGGREGATE_RESPONSE);
      },
      secondAggregate: function secondAggregate(req) {
        return req.reply({
          ok: 0,
          errmsg: 'We should not have a second aggregate'
        });
      },
      firstGetMore: function firstGetMore(req) {
        return req.reply({
          ok: 0,
          errmsg: 'firstGetMoreError',
          code: code
        });
      },
      secondGetMore: function secondGetMore(req) {
        return req.reply({
          ok: 0,
          errmsg: 'We should not have a second getMore'
        });
      }
    };
  })).concat(RESUMABLE_ERROR_CODES.map(function (code) {
    return {
      description: "should not resume on aggregate, even for valid code ".concat(code),
      passing: false,
      errmsg: 'fail aggregate',
      firstAggregate: function firstAggregate(req) {
        return req.reply({
          ok: 0,
          errmsg: 'fail aggregate',
          code: code
        });
      },
      secondAggregate: function secondAggregate(req) {
        return req.reply({
          ok: 0,
          errmsg: 'We should not have a second aggregate'
        });
      },
      firstGetMore: function firstGetMore(req) {
        return req.reply({
          ok: 0,
          errmsg: 'We should not have a first getMore'
        });
      },
      secondGetMore: function secondGetMore(req) {
        return req.reply({
          ok: 0,
          errmsg: 'We should not have a second getMore'
        });
      }
    };
  }));
  var client;
  var changeStream;
  beforeEach(function () {
    return mock.createServer().then(function (server) {
      _test.server = server;
    });
  });
  afterEach(function (done) {
    return changeStream.close(function () {
      return client.close(function () {
        return mock.cleanup(done);
      });
    });
  });
  configs.forEach(function (config) {
    it(config.description, {
      metadata: {
        requires: {
          topology: 'single'
        }
      },
      test: function test() {
        var configuration = this.configuration;

        if (!configuration.usingUnifiedTopology()) {
          // These tests take way too long with the non-unified topology, so we will skip them
          return this.skip();
        }

        _test.server.setMessageHandler(makeServerHandler(config));

        client = configuration.newClient("mongodb://".concat(_test.server.uri()), {
          socketTimeoutMS: 300
        });
        return client.connect().then(function (client) {
          return client.db('test');
        }).then(function (db) {
          return db.collection('test');
        }).then(function (collection) {
          return collection.watch();
        }).then(function (_changeStream) {
          return changeStream = _changeStream;
        }).then(function () {
          return changeStream.next();
        }).then(function (change) {
          if (!config.passing) {
            throw new Error('Expected test to not pass');
          }

          expect(change).to.deep.equal(CHANGE_DOC);
        }, function (err) {
          if (config.passing) {
            throw err;
          }

          expect(err).to.have.property('errmsg', config.errmsg);
        });
      }
    });
  });
});
describe('Change Stream Resume Error Tests', function () {
  it('should properly process errors that lack the `mongoErrorContextSymbol`', function () {
    expect(function () {
      return isResumableError(new Error());
    }).to.not["throw"]();
  });
});