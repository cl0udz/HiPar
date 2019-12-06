"use strict";

var _chai = require("chai");

var _chalk = _interopRequireDefault(require("chalk"));

var _alignString = _interopRequireDefault(require("../src/alignString"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable max-nested-callbacks */


describe('alignString', function () {
  context('subject parameter value is not a string', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _alignString["default"])();
      }).to["throw"](Error, 'Subject parameter value must be a string.');
    });
  });
  context('container width parameter value is not a string', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _alignString["default"])('');
      }).to["throw"](Error, 'Container width parameter value must be a number.');
    });
  });
  context('subject parameter value width is greater than the container width', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _alignString["default"])('aa', 1, 'left');
      }).to["throw"](Error, 'Subject parameter value width cannot be greater than the container width.');
    });
  });
  context('container alignment parameter value is not a string', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _alignString["default"])('', 1);
      }).to["throw"](Error, 'Alignment parameter value must be a string.');
    });
  });
  context('container alignment parameter value is not a known alignment parameter value', function () {
    it('throws an error', function () {
      (0, _chai.expect)(function () {
        (0, _alignString["default"])('', 1, 'foo');
      }).to["throw"](Error, 'Alignment parameter value must be a known alignment parameter value (left, right, center).');
    });
  });
  context('subject parameter value', function () {
    context('0 width', function () {
      it('produces a string consisting of container width number of whitespace characters', function () {
        (0, _chai.expect)((0, _alignString["default"])('', 5, 'left')).to.equal('     ', 'left');
        (0, _chai.expect)((0, _alignString["default"])('', 5, 'center')).to.equal('     ', 'center');
        (0, _chai.expect)((0, _alignString["default"])('', 5, 'right')).to.equal('     ', 'right');
      });
    });
    context('plain text', function () {
      context('alignment', function () {
        context('left', function () {
          it('pads the string on the right side using a whitespace character', function () {
            (0, _chai.expect)((0, _alignString["default"])('aa', 6, 'left')).to.equal('aa    ');
          });
        });
        context('right', function () {
          it('pads the string on the left side using a whitespace character', function () {
            (0, _chai.expect)((0, _alignString["default"])('aa', 6, 'right')).to.equal('    aa');
          });
        });
        context('center', function () {
          it('pads the string on both sides using a whitespace character', function () {
            (0, _chai.expect)((0, _alignString["default"])('aa', 6, 'center')).to.equal('  aa  ');
          });
          context('uneven number of available with', function () {
            it('floors the available width; adds extra space to the end of the string', function () {
              (0, _chai.expect)((0, _alignString["default"])('aa', 7, 'center')).to.equal('  aa   ');
            });
          });
        });
      });
    });
    context('text containing ANSI escape codes', function () {
      context('alignment', function () {
        context('left', function () {
          it('pads the string on the right side using a whitespace character', function () {
            (0, _chai.expect)((0, _alignString["default"])(_chalk["default"].red('aa'), 6, 'left')).to.equal(_chalk["default"].red('aa') + '    ');
          });
        });
        context('right', function () {
          it('pads the string on the left side using a whitespace character', function () {
            (0, _chai.expect)((0, _alignString["default"])(_chalk["default"].red('aa'), 6, 'right')).to.equal('    ' + _chalk["default"].red('aa'));
          });
        });
        context('center', function () {
          it('pads the string on both sides using a whitespace character', function () {
            (0, _chai.expect)((0, _alignString["default"])(_chalk["default"].red('aa'), 6, 'center')).to.equal('  ' + _chalk["default"].red('aa') + '  ');
          });
          context('uneven number of available with', function () {
            it('floors the available width; adds extra space to the end of the string', function () {
              (0, _chai.expect)((0, _alignString["default"])(_chalk["default"].red('aa'), 7, 'center')).to.equal('  ' + _chalk["default"].red('aa') + '   ');
            });
          });
        });
      });
    });
  });
});