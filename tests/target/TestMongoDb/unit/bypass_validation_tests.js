'use strict';

require("core-js/modules/es.object.assign");

var expect = require('chai').expect;

var mock = require('mongodb-mock-server');

describe('bypass document validation', function () {
  var test = {};
  beforeEach(function () {
    return mock.createServer().then(function (server) {
      test.server = server;
    });
  });
  afterEach(function () {
    return mock.cleanup();
  }); // general test for aggregate function

  function testAggregate(testConfiguration, config, done) {
    var client = testConfiguration.newClient("mongodb://".concat(test.server.uri(), "/test"));

    var _close = function close(e) {
      _close = function close() {};

      client.close(function () {
        return done(e);
      });
    };

    test.server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.aggregate) {
        try {
          expect(doc.bypassDocumentValidation).equal(config.expected);
          request.reply({
            ok: 1,
            cursor: {
              firstBatch: [{}],
              id: 23,
              ns: 'test.test'
            }
          });
        } catch (e) {
          _close(e);
        }
      }

      if (doc.ismaster) {
        request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      } else if (doc.endSessions) {
        request.reply({
          ok: 1
        });
      }
    });
    client.connect(function (err, client) {
      expect(err).to.not.exist;
      var db = client.db('test');
      var collection = db.collection('test_c');
      var options = {
        bypassDocumentValidation: config.actual
      };
      var pipeline = [{
        $project: {}
      }];
      collection.aggregate(pipeline, options).next(function () {
        return _close();
      });
    });
  } // aggregate


  it('should only set bypass document validation if strictly true in aggregate', function (done) {
    testAggregate(this.configuration, {
      expected: true,
      actual: true
    }, done);
  });
  it('should not set bypass document validation if not strictly true in aggregate', function (done) {
    testAggregate(this.configuration, {
      expected: undefined,
      actual: false
    }, done);
  }); // general test for mapReduce function

  function testMapReduce(testConfiguration, config, done) {
    var client = testConfiguration.newClient("mongodb://".concat(test.server.uri(), "/test"));

    var _close2 = function close(e) {
      _close2 = function close() {};

      client.close(function () {
        return done(e);
      });
    };

    test.server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.mapreduce) {
        try {
          expect(doc.bypassDocumentValidation).equal(config.expected);
          request.reply({
            results: 't',
            ok: 1
          });
        } catch (e) {
          _close2(e);
        }
      }

      if (doc.ismaster) {
        request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      } else if (doc.endSessions) {
        request.reply({
          ok: 1
        });
      }
    });
    client.connect(function (err, client) {
      expect(err).to.not.exist;
      var db = client.db('test');
      var collection = db.collection('test_c');
      var options = {
        out: 'test_c',
        bypassDocumentValidation: config.actual
      };
      collection.mapReduce(function map() {}, function reduce() {}, options, function (e) {
        _close2(e);
      });
    });
  } // map reduce


  it('should only set bypass document validation if strictly true in mapReduce', function (done) {
    testMapReduce(this.configuration, {
      expected: true,
      actual: true
    }, done);
  });
  it('should not set bypass document validation if not strictly true in mapReduce', function (done) {
    testMapReduce(this.configuration, {
      expected: undefined,
      actual: false
    }, done);
  }); // general test for findAndModify function

  function testFindAndModify(testConfiguration, config, done) {
    var client = testConfiguration.newClient("mongodb://".concat(test.server.uri(), "/test"));

    var _close3 = function close(e) {
      _close3 = function close() {};

      client.close(function () {
        return done(e);
      });
    };

    test.server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.findAndModify) {
        try {
          expect(doc.bypassDocumentValidation).equal(config.expected);
          request.reply({
            ok: 1
          });
        } catch (e) {
          _close3(e);
        }
      }

      if (doc.ismaster) {
        request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      } else if (doc.endSessions) {
        request.reply({
          ok: 1
        });
      }
    });
    client.connect(function (err, client) {
      expect(err).to.not.exist;
      var db = client.db('test');
      var collection = db.collection('test_c');
      var options = {
        bypassDocumentValidation: config.actual
      };
      collection.findAndModify({
        name: 'Andy'
      }, {
        rating: 1
      }, {
        $inc: {
          score: 1
        }
      }, options, function (e) {
        _close3(e);
      });
    });
  } // find and modify


  it('should only set bypass document validation if strictly true in findAndModify', function (done) {
    testFindAndModify(this.configuration, {
      expected: true,
      actual: true
    }, done);
  });
  it('should not set bypass document validation if not strictly true in findAndModify', function (done) {
    testFindAndModify(this.configuration, {
      expected: undefined,
      actual: false
    }, done);
  }); // general test for BlukWrite to test changes made in ordered.js and unordered.js

  function testBulkWrite(testConfiguration, config, done) {
    var client = testConfiguration.newClient("mongodb://".concat(test.server.uri(), "/test"));

    var _close4 = function close(e) {
      _close4 = function close() {};

      client.close(function () {
        return done(e);
      });
    };

    test.server.setMessageHandler(function (request) {
      var doc = request.document;

      if (doc.insert) {
        try {
          expect(doc.bypassDocumentValidation).equal(config.expected);
          request.reply({
            ok: 1
          });
        } catch (e) {
          _close4(e);
        }
      }

      if (doc.ismaster) {
        request.reply(Object.assign({}, mock.DEFAULT_ISMASTER));
      } else if (doc.endSessions) {
        request.reply({
          ok: 1
        });
      }
    });
    client.connect(function (err, client) {
      expect(err).to.not.exist;
      var db = client.db('test');
      var collection = db.collection('test_c');
      var options = {
        bypassDocumentValidation: config.actual,
        ordered: config.ordered
      };
      collection.bulkWrite([{
        insertOne: {
          document: {
            a: 1
          }
        }
      }], options, function () {
        return _close4();
      });
    });
  } // ordered bulk write, testing change in ordered.js


  it('should only set bypass document validation if strictly true in ordered bulkWrite', function (done) {
    testBulkWrite(this.configuration, {
      expected: true,
      actual: true,
      ordered: true
    }, done);
  });
  it('should not set bypass document validation if not strictly true in ordered bulkWrite', function (done) {
    testBulkWrite(this.configuration, {
      expected: undefined,
      actual: false,
      ordered: true
    }, done);
  }); // unordered bulk write, testing change in ordered.js

  it('should only set bypass document validation if strictly true in unordered bulkWrite', function (done) {
    testBulkWrite(this.configuration, {
      expected: true,
      actual: true,
      ordered: false
    }, done);
  });
  it('should not set bypass document validation if not strictly true in unordered bulkWrite', function (done) {
    testBulkWrite(this.configuration, {
      expected: undefined,
      actual: false,
      ordered: false
    }, done);
  });
});