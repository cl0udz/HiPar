"use strict";

var _src = require("../../../src");

var _expectTable = _interopRequireDefault(require("./expectTable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

describe('README.md usage/', function () {
  describe('process.stdout.write', function () {
    var processStdoutWriteBuffer;
    /**
     * @var {Function} Reference to the original process.stdout.write function.
     */

    var processStdoutWrite = process.stdout.write;
    /**
     * @returns {undefined}
     */

    var overwriteProcessStdoutWrite = function overwriteProcessStdoutWrite() {
      processStdoutWriteBuffer = '';

      process.stdout.write = function (text) {
        processStdoutWriteBuffer += text;
      };
    };
    /**
     * @returns {string}
     */


    var resetProcessStdoudWrite = function resetProcessStdoudWrite() {
      process.stdout.write = processStdoutWrite;
      return processStdoutWriteBuffer;
    };

    it('streaming', function () {
      var config = {
        columnCount: 3,
        columnDefault: {
          width: 2
        }
      };
      var stream = (0, _src.createStream)(config);
      overwriteProcessStdoutWrite();
      stream.write(['0A', '0B', '0C']);
      stream.write(['1A', '1B', '1C']);
      stream.write(['2A', '2B', '2C']);
      var output = resetProcessStdoudWrite();
      (0, _expectTable["default"])(output + '\n', "\u2554\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551 0A \u2502 0B \u2502 0C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u255D\r\x1B[K\u255F\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551 1A \u2502 1B \u2502 1C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u255D\r\x1B[K\u255F\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2562\n\u2551 2A \u2502 2B \u2502 2C \u2551\n\u255A\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u255D");
    });
  });
});