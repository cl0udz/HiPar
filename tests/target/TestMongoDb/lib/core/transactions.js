'use strict';

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.object.define-property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MongoError = require('./error').MongoError;

var TxnState;
var stateMachine;

(function () {
  var _stateMachine;

  var NO_TRANSACTION = 'NO_TRANSACTION';
  var STARTING_TRANSACTION = 'STARTING_TRANSACTION';
  var TRANSACTION_IN_PROGRESS = 'TRANSACTION_IN_PROGRESS';
  var TRANSACTION_COMMITTED = 'TRANSACTION_COMMITTED';
  var TRANSACTION_COMMITTED_EMPTY = 'TRANSACTION_COMMITTED_EMPTY';
  var TRANSACTION_ABORTED = 'TRANSACTION_ABORTED';
  TxnState = {
    NO_TRANSACTION: NO_TRANSACTION,
    STARTING_TRANSACTION: STARTING_TRANSACTION,
    TRANSACTION_IN_PROGRESS: TRANSACTION_IN_PROGRESS,
    TRANSACTION_COMMITTED: TRANSACTION_COMMITTED,
    TRANSACTION_COMMITTED_EMPTY: TRANSACTION_COMMITTED_EMPTY,
    TRANSACTION_ABORTED: TRANSACTION_ABORTED
  };
  stateMachine = (_stateMachine = {}, _defineProperty(_stateMachine, NO_TRANSACTION, [NO_TRANSACTION, STARTING_TRANSACTION]), _defineProperty(_stateMachine, STARTING_TRANSACTION, [TRANSACTION_IN_PROGRESS, TRANSACTION_COMMITTED, TRANSACTION_COMMITTED_EMPTY, TRANSACTION_ABORTED]), _defineProperty(_stateMachine, TRANSACTION_IN_PROGRESS, [TRANSACTION_IN_PROGRESS, TRANSACTION_COMMITTED, TRANSACTION_ABORTED]), _defineProperty(_stateMachine, TRANSACTION_COMMITTED, [TRANSACTION_COMMITTED, TRANSACTION_COMMITTED_EMPTY, STARTING_TRANSACTION, NO_TRANSACTION]), _defineProperty(_stateMachine, TRANSACTION_ABORTED, [STARTING_TRANSACTION, NO_TRANSACTION]), _defineProperty(_stateMachine, TRANSACTION_COMMITTED_EMPTY, [TRANSACTION_COMMITTED_EMPTY, NO_TRANSACTION]), _stateMachine);
})();
/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * @typedef {Object} ReadConcern
 * @property {'local'|'available'|'majority'|'linearizable'|'snapshot'} level The readConcern Level
 * @see https://docs.mongodb.com/manual/reference/read-concern/
 */

/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 * @typedef {Object} WriteConcern
 * @property {number|'majority'|string} [w=1] requests acknowledgement that the write operation has
 * propagated to a specified number of mongod hosts
 * @property {boolean} [j=false] requests acknowledgement from MongoDB that the write operation has
 * been written to the journal
 * @property {number} [wtimeout] a time limit, in milliseconds, for the write concern
 * @see https://docs.mongodb.com/manual/reference/write-concern/
 */

/**
 * Configuration options for a transaction.
 * @typedef {Object} TransactionOptions
 * @property {ReadConcern} [readConcern] A default read concern for commands in this transaction
 * @property {WriteConcern} [writeConcern] A default writeConcern for commands in this transaction
 * @property {ReadPreference} [readPreference] A default read preference for commands in this transaction
 */

/**
 * A class maintaining state related to a server transaction. Internal Only
 * @ignore
 */


var Transaction =
/*#__PURE__*/
function () {
  /**
   * Create a transaction
   *
   * @ignore
   * @param {TransactionOptions} [options] Optional settings
   */
  function Transaction(options) {
    _classCallCheck(this, Transaction);

    options = options || {};
    this.state = TxnState.NO_TRANSACTION;
    this.options = {};

    if (options.writeConcern || typeof options.w !== 'undefined') {
      var w = options.writeConcern ? options.writeConcern.w : options.w;

      if (w <= 0) {
        throw new MongoError('Transactions do not support unacknowledged write concern');
      }

      this.options.writeConcern = options.writeConcern ? options.writeConcern : {
        w: options.w
      };
    }

    if (options.readConcern) this.options.readConcern = options.readConcern;
    if (options.readPreference) this.options.readPreference = options.readPreference;
    if (options.maxCommitTimeMS) this.options.maxTimeMS = options.maxCommitTimeMS; // TODO: This isn't technically necessary

    this._pinnedServer = undefined;
    this._recoveryToken = undefined;
  }

  _createClass(Transaction, [{
    key: "transition",

    /**
     * Transition the transaction in the state machine
     * @ignore
     * @param {TxnState} state The new state to transition to
     */
    value: function transition(nextState) {
      var nextStates = stateMachine[this.state];

      if (nextStates && nextStates.indexOf(nextState) !== -1) {
        this.state = nextState;

        if (this.state === TxnState.NO_TRANSACTION || this.state === TxnState.STARTING_TRANSACTION) {
          this.unpinServer();
        }

        return;
      }

      throw new MongoError("Attempted illegal state transition from [".concat(this.state, "] to [").concat(nextState, "]"));
    }
  }, {
    key: "pinServer",
    value: function pinServer(server) {
      if (this.isActive) {
        this._pinnedServer = server;
      }
    }
  }, {
    key: "unpinServer",
    value: function unpinServer() {
      this._pinnedServer = undefined;
    }
  }, {
    key: "server",
    get: function get() {
      return this._pinnedServer;
    }
  }, {
    key: "recoveryToken",
    get: function get() {
      return this._recoveryToken;
    }
  }, {
    key: "isPinned",
    get: function get() {
      return !!this.server;
    }
    /**
     * @ignore
     * @return Whether this session is presently in a transaction
     */

  }, {
    key: "isActive",
    get: function get() {
      return [TxnState.STARTING_TRANSACTION, TxnState.TRANSACTION_IN_PROGRESS].indexOf(this.state) !== -1;
    }
  }]);

  return Transaction;
}();

function isTransactionCommand(command) {
  return !!(command.commitTransaction || command.abortTransaction);
}

module.exports = {
  TxnState: TxnState,
  Transaction: Transaction,
  isTransactionCommand: isTransactionCommand
};