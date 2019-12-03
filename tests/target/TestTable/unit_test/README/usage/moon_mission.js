"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _chalk = _interopRequireDefault(require("chalk"));

var _src = require("../../../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('README.md usage/', function () {
  it('moon_mission', function () {
    var data = [[_chalk["default"].bold('Spacecraft'), _chalk["default"].bold('Launch Date'), _chalk["default"].bold('Operator'), _chalk["default"].bold('Outcome'), _chalk["default"].bold('Remarks')], ['Able I', '17 August 1958', 'USAF', _chalk["default"].white.bold.bgRed('Launch failure'), 'First attempted launch beyond Earth orbit; failed to orbit due to turbopump gearbox malfunction resulting in first stage explosion.[3] Reached apogee of 16 kilometres (9.9 mi)'], ['Luna 2', '12 September 1959', 'OKB-1', _chalk["default"].black.bgGreen('Successful'), 'Successful impact at 21:02 on 14 September 1959. First spacecraft to reach lunar surface'], ['Lunar Orbiter 1', '10 August 1966', 'NASA', _chalk["default"].black.bgYellow('Partial failure'), 'Orbital insertion at around 15:36 UTC on 14 August. Deorbited early due to lack of fuel and to avoid communications interference with the next mission, impacted the Moon at 13:30 UTC on 29 October 1966.'], ['Apollo 8', '21 December 1968', 'NASA', _chalk["default"].black.bgGreen('Successful'), 'First manned mission to the Moon; entered orbit around the Moon with four-minute burn beginning at 09:59:52 UTC on 24 December. Completed ten orbits of the Moon before returning to Earth with an engine burn at 06:10:16 UTC on 25 December. Landed in the Pacific Ocean at 15:51 UTC on 27 December.'], ['Apollo 11', '16 July 1969', 'NASA', _chalk["default"].black.bgGreen('Successful'), 'First manned landing on the Moon. LM landed at 20:17 UTC on 20 July 1969']];

    var tableBorder = _lodash["default"].mapValues((0, _src.getBorderCharacters)('honeywell'), function (_char) {
      return _chalk["default"].gray(_char);
    });

    (0, _src.table)(data, {
      border: tableBorder,
      columns: {
        4: {
          width: 50
        }
      }
    });
  });
});