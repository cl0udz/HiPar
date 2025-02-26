var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
const getRowSize = arr => arr.reduce((sum, value) => sum + value.size, 0);

const createLayout = arr => {
  return arr.reduce((acc, current, index) => {
    const row = { rowId: index, rowContent: current };

    return acc.concat(row);
  }, []);
};

const formatLayout = arr => {
  return arr
    .reduce((acc, current) => {
      let toPush = [];
      const currentRow = current.rowContent.reduce((acc2, curr) => {
        const acc2Size = getRowSize(acc2);

        if (curr.name === '_TEMP_') {
          return acc2;
        }

        if (acc2Size + curr.size <= 12) {
          acc2.push(curr);
        } else {
          toPush.push(curr);
        }

        return acc2;
      }, []);
      const rowId =
        acc.length === 0 ? 0 : Math.max.apply(Math, acc.map(o => o.rowId)) + 1;

      const currentRowSize = getRowSize(currentRow);

      if (currentRowSize < 12) {
        currentRow.push({ name: '_TEMP_', size: 12 - currentRowSize });
      }

      acc.push({ rowId, rowContent: currentRow });

      if (toPush.length > 0) {
        const toPushSize = getRowSize(toPush);

        if (toPushSize < 12) {
          toPush.push({ name: '_TEMP_', size: 12 - toPushSize });
        }

        acc.push({ rowId: rowId + 1, rowContent: toPush });
        toPush = [];
      }

      return acc;
    }, [])
    .filter(row => row.rowContent.length > 0)
    .filter(row => {
      if (row.rowContent.length === 1) {
        return row.rowContent[0].name !== '_TEMP_';
      }
      return true;
    });
};

const unformatLayout = arr => {
  return arr.reduce((acc, current) => {
    const currentRow = current.rowContent.filter(
      content => content.name !== '_TEMP_'
    );

    return acc.concat([currentRow]);
  }, []);
};

const getInputSize = type => {
  switch (type) {
    case 'boolean':
    case 'date':
    case 'integer':
    case 'float':
    case 'biginteger':
    case 'decimal':
    case 'time':
      return 4;
    case 'json':
    case 'component':
    case 'richtext':
    case 'dynamiczone':
      return 12;
    default:
      return 6;
  }
};

const getFieldType = (state, name) =>
  state.getIn(['modifiedData', 'schema', 'attributes', name, 'type']);

export {
  createLayout,
  formatLayout,
  getFieldType,
  getInputSize,
  getRowSize,
  unformatLayout,
};
