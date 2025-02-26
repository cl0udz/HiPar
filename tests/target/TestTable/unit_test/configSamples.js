"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  invalid: [{
    border: 1
  }, {
    border: {
      unknown: '-'
    }
  }, {
    border: {
      topBody: 1
    }
  }, {
    border: {
      topJoin: 1
    }
  }, {
    border: {
      topLeft: 1
    }
  }, {
    border: {
      topRight: 1
    }
  }, {
    border: {
      bottomBody: 1
    }
  }, {
    border: {
      bottomJoin: 1
    }
  }, {
    border: {
      bottomLeft: 1
    }
  }, {
    border: {
      bottomRight: 1
    }
  }, {
    border: {
      bodyLeft: 1
    }
  }, {
    border: {
      bodyRight: 1
    }
  }, {
    border: {
      bodyJoin: 1
    }
  }, {
    border: {
      joinBody: 1
    }
  }, {
    border: {
      joinLeft: 1
    }
  }, {
    border: {
      joinRight: 1
    }
  }, {
    border: {
      joinJoin: 1
    }
  }, {
    columns: 1
  }, {
    columns: {
      a: {
        width: 5
      }
    }
  }, {
    columns: {
      1: 1
    }
  }, {
    columns: {
      1: {
        unknown: 1
      }
    }
  }, {
    columns: {
      1: {
        alignment: 1
      }
    }
  }, {
    columns: {
      1: {
        alignment: '1'
      }
    }
  }, {
    columns: {
      1: {
        width: '5'
      }
    }
  }, {
    columns: {
      1: {
        wrapWord: 1
      }
    }
  }, {
    columns: {
      1: {
        truncate: '1'
      }
    }
  }, {
    columns: {
      1: {
        paddingLeft: '1'
      }
    }
  }, {
    columns: {
      1: {
        paddingRight: '1'
      }
    }
  }, {
    columnDefault: 1
  }, {
    columnDefault: {
      unknown: 1
    }
  }, {
    columnDefault: {
      alignment: 1
    }
  }, {
    columnDefault: {
      alignment: '1'
    }
  }, {
    columnDefault: {
      width: '5'
    }
  }, {
    columnDefault: {
      wrapWord: 1
    }
  }, {
    columnDefault: {
      truncate: '1'
    }
  }, {
    columnDefault: {
      paddingLeft: '1'
    }
  }, {
    columnDefault: {
      paddingRight: '1'
    }
  }, {
    drawHorizontalLine: 1
  }, {
    unknown: 1
  }],
  valid: [{
    columns: {
      0: {
        alignment: 'left',
        width: 10
      },
      1: {
        alignment: 'center',
        width: 10
      },
      2: {
        alignment: 'right',
        width: 10
      }
    }
  }, {
    border: {
      bodyJoin: '│',
      bodyLeft: '│',
      bodyRight: '│',
      bottomBody: '─',
      bottomJoin: '┴',
      bottomLeft: '└',
      bottomRight: '┘',
      joinBody: '─',
      joinJoin: '┼',
      joinLeft: '├',
      joinRight: '┤',
      topBody: '─',
      topJoin: '┬',
      topLeft: '┌',
      topRight: '┐'
    }
  }, {
    columns: {
      0: {
        paddingLeft: 3
      },
      1: {
        paddingRight: 3,
        width: 2
      }
    }
  }, {
    border: {},
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1
    } // drawHorizontalLine: () => {
    //     return false
    // }

  }, {
    columnDefault: {
      width: 50
    },
    // columnCount: 3,
    columns: {
      0: {
        alignment: 'right',
        width: 10
      },
      1: {
        alignment: 'center'
      },
      2: {
        width: 10
      }
    }
  }, {
    border: {
      topBody: '-'
    }
  }, {
    border: {
      topJoin: '-'
    }
  }, {
    border: {
      topLeft: '-'
    }
  }, {
    border: {
      topRight: '-'
    }
  }, {
    border: {
      bottomBody: '-'
    }
  }, {
    border: {
      bottomJoin: '-'
    }
  }, {
    border: {
      bottomLeft: '-'
    }
  }, {
    border: {
      bottomRight: '-'
    }
  }, {
    border: {
      bodyLeft: '-'
    }
  }, {
    border: {
      bodyRight: '-'
    }
  }, {
    border: {
      bodyJoin: '-'
    }
  }, {
    border: {
      joinBody: '-'
    }
  }, {
    border: {
      joinLeft: '-'
    }
  }, {
    border: {
      joinRight: '-'
    }
  }, {
    border: {
      joinJoin: '-'
    }
  }, {
    columns: {
      1: {
        alignment: 'left'
      }
    }
  }, {
    columns: {
      1: {
        width: 5
      }
    }
  }, {
    columns: {
      1: {
        wrapWord: true
      }
    }
  }, {
    columns: {
      1: {
        truncate: 1
      }
    }
  }, {
    columns: {
      1: {
        paddingLeft: 1
      }
    }
  }, {
    columns: {
      1: {
        paddingRight: 1
      }
    }
  }, {
    columnDefault: {
      alignment: 'left'
    }
  }, {
    columnDefault: {
      width: 5
    }
  }, {
    columnDefault: {
      wrapWord: true
    }
  }, {
    columnDefault: {
      truncate: 1
    }
  }, {
    columnDefault: {
      paddingLeft: 1
    }
  }, {
    columnDefault: {
      paddingRight: 1
    }
  }, {
    drawHorizontalLine: function drawHorizontalLine() {}
  }]
};
exports["default"] = _default;