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
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { cloneDeep, get, isArray, isEmpty } from 'lodash';
import { request } from 'strapi-helper-plugin';
import pluginId from '../../pluginId';
import useDataManager from '../../hooks/useDataManager';
import useEditView from '../../hooks/useEditView';

import SelectOne from '../SelectOne';
import SelectMany from '../SelectMany';
import { Nav, Wrapper } from './components';

function SelectWrapper({
  description,
  editable,
  label,
  mainField,
  name,
  relationType,
  targetModel,
  placeholder,
}) {
  const { pathname, search } = useLocation();
  const {
    addRelation,
    modifiedData,
    moveRelation,
    onChange,
    onRemoveRelation,
  } = useDataManager();
  const { isDraggingComponent } = useEditView();

  const value = get(modifiedData, name, null);
  const [state, setState] = useState({
    _q: '',
    _limit: 20,
    _start: 0,
  });
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const abortController = new AbortController();
  const { signal } = abortController;
  const ref = useRef();
  const startRef = useRef();
  startRef.current = state._start;

  ref.current = async () => {
    if (!isDraggingComponent) {
      try {
        const params = cloneDeep(state);
        const requestUrl = `/${pluginId}/explorer/${targetModel}`;

        if (isEmpty(params._q)) {
          delete params._q;
        }

        const data = await request(requestUrl, {
          method: 'GET',
          params: params,
          signal,
        });

        const formattedData = data.map(obj => {
          return { value: obj, label: obj[mainField] };
        });

        if (!isEmpty(params._q)) {
          setOptions(formattedData);

          return;
        }

        setOptions(prevState =>
          prevState.concat(formattedData).filter((obj, index) => {
            const objIndex = prevState.findIndex(
              el => el.value.id === obj.value.id
            );

            if (objIndex === -1) {
              return true;
            }
            return (
              prevState.findIndex(el => el.value.id === obj.value.id) === index
            );
          })
        );
        setIsLoading(false);
      } catch (err) {
        if (err.code !== 20) {
          strapi.notification.error('notification.error');
        }
      }
    }
  };

  useEffect(() => {
    ref.current();

    return () => {
      abortController.abort();
    };
  }, [ref]);

  useEffect(() => {
    if (state._q !== '') {
      ref.current();
    }

    return () => {
      abortController.abort();
    };
  }, [state._q]);

  useEffect(() => {
    if (state._start !== 0) {
      ref.current();
    }

    return () => {
      abortController.abort();
    };
  }, [state._start]);

  const onInputChange = (inputValue, { action }) => {
    if (action === 'input-change') {
      setState(prevState => {
        if (prevState._q === inputValue) {
          return prevState;
        }
        return { ...prevState, _q: inputValue };
      });
    }

    return inputValue;
  };

  const onMenuScrollToBottom = () => {
    setState(prevState => ({ ...prevState, _start: prevState._start + 1 }));
  };

  const isSingle = [
    'oneWay',
    'oneToOne',
    'manyToOne',
    'oneToManyMorph',
    'oneToOneMorph',
  ].includes(relationType);
  const nextSearch = `${pathname}${search}`;
  const to = `/plugins/${pluginId}/${targetModel}/${
    value ? value.id : null
  }?redirectUrl=${nextSearch}`;
  const link =
    value === null ||
    value === undefined ||
    ['role', 'permission'].includes(targetModel) ? null : (
      <Link to={to}>
        <FormattedMessage id="content-manager.containers.Edit.seeDetails" />
      </Link>
    );
  const Component = isSingle ? SelectOne : SelectMany;
  const associationsLength = isArray(value) ? value.length : 0;

  return (
    <Wrapper className="form-group">
      <Nav>
        <div>
          <label htmlFor={name}>
            {label}
            {!isSingle && (
              <span style={{ fontWeight: 400, fontSize: 12 }}>
                &nbsp;({associationsLength})
              </span>
            )}
          </label>
          {isSingle && link}
        </div>
        {!isEmpty(description) && <p className="description">{description}</p>}
      </Nav>
      <Component
        addRelation={value => {
          addRelation({ target: { name, value } });
        }}
        id={name}
        isDisabled={!editable}
        isLoading={isLoading}
        isClearable
        mainField={mainField}
        move={moveRelation}
        name={name}
        nextSearch={nextSearch}
        options={options}
        onChange={value => {
          onChange({ target: { name, value: value ? value.value : value } });
        }}
        onInputChange={onInputChange}
        onMenuClose={() => {
          setState(prevState => ({ ...prevState, _q: '', _start: 0 }));
        }}
        onMenuScrollToBottom={onMenuScrollToBottom}
        onRemove={onRemoveRelation}
        placeholder={
          isEmpty(placeholder) ? (
            <FormattedMessage id={`${pluginId}.containers.Edit.addAnItem`} />
          ) : (
            placeholder
          )
        }
        targetModel={targetModel}
        value={value}
      />
      <div style={{ marginBottom: 18 }} />
    </Wrapper>
  );
}

SelectWrapper.defaultProps = {
  editable: true,
  description: '',
  label: '',
  plugin: '',
  placeholder: '',
};

SelectWrapper.propTypes = {
  editable: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string,
  mainField: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  plugin: PropTypes.string,
  relationType: PropTypes.string.isRequired,
  targetModel: PropTypes.string.isRequired,
};

export default memo(SelectWrapper);
