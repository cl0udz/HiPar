"use strict";

exports.__esModule = true;
exports["default"] = isWindow;
function isWindow(obj) {
  /* eslint no-eq-null: 0 */
  /* eslint eqeqeq: 0 */
  return obj != null && obj == obj.window;
}
module.exports = exports['default'];