'use strict'; // async function* asyncIterator() {
//   while (true) {
//     const value = await this.next();
//     if (!value) {
//       await this.close();
//       return;
//     }
//     yield value;
//   }
// }
// TODO: change this to the async generator function above

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

function asyncIterator() {
  var cursor = this;
  return {
    next: function next() {
      return Promise.resolve().then(function () {
        return cursor.next();
      }).then(function (value) {
        if (!value) {
          return cursor.close().then(function () {
            return {
              value: value,
              done: true
            };
          });
        }

        return {
          value: value,
          done: false
        };
      });
    }
  };
}

exports.asyncIterator = asyncIterator;