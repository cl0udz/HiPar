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
import React from 'react';
import PropTypes from 'prop-types';
import LayoutDndContext from '../../contexts/LayoutDnd';

function LayoutDndProvider({
  attributes,
  buttonData,
  children,
  goTo,
  layout,
  metadatas,
  moveItem,
  moveRow,
  onAddData,
  relationsLayout,
  removeField,
  selectedItemName,
  setEditFieldToSelect,
  ...rest
}) {
  return (
    <LayoutDndContext.Provider
      value={{
        attributes,
        buttonData,
        goTo,
        layout,
        metadatas,
        moveItem,
        moveRow,
        onAddData,
        relationsLayout,
        removeField,
        selectedItemName,
        setEditFieldToSelect,
        ...rest,
      }}
    >
      {children}
    </LayoutDndContext.Provider>
  );
}

LayoutDndProvider.defaultProps = {
  attributes: {},
  buttonData: [],
  goTo: () => {},
  layout: [],
  isDraggingSibling: true,
  metadatas: {},
  moveItem: () => {},
  moveRow: () => {},
  onAddData: () => {},
  relationsLayout: [],
  removeField: () => {},
  selectedItemName: null,
  setEditFieldToSelect: () => {},
  setIsDraggingSibling: () => {},
};

LayoutDndProvider.propTypes = {
  attributes: PropTypes.object,
  buttonData: PropTypes.array,
  children: PropTypes.node.isRequired,
  goTo: PropTypes.func,
  layout: PropTypes.array,
  metadatas: PropTypes.object,
  moveItem: PropTypes.func,
  moveRow: PropTypes.func,
  onAddData: PropTypes.func,
  relationsLayout: PropTypes.array,
  removeField: PropTypes.func,
  selectedItemName: PropTypes.string,
  setEditFieldToSelect: PropTypes.func,
};

export default LayoutDndProvider;
