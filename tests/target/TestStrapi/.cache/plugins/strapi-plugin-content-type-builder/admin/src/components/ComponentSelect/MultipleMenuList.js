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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import { FormattedMessage } from 'react-intl';
import { get } from 'lodash';
import { Checkbox, CheckboxWrapper, Label } from '@buffetjs/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDataManager from '../../hooks/useDataManager';
import useQuery from '../../hooks/useQuery';
import getTrad from '../../utils/getTrad';
import UpperFirst from '../UpperFirst';
import SubUl from './SubUl';
import Ul from './Ul';
import hasSubArray from './utils/hasSubArray';
import hasSomeSubArray from './utils/HasSomeSubArray';

const MultipleMenuList = ({
  selectProps: { name, addComponentsToDynamicZone, inputValue, value },
  ...rest
}) => {
  const { componentsGroupedByCategory, modifiedData } = useDataManager();
  const query = useQuery();
  const dzName = query.get('dynamicZoneTarget');
  const alreadyUsedComponents = get(
    modifiedData,
    ['contentType', 'schema', 'attributes', dzName, 'components'],
    []
  );
  const filteredComponentsGroupedByCategory = Object.keys(
    componentsGroupedByCategory
  ).reduce((acc, current) => {
    const filteredComponents = componentsGroupedByCategory[current].filter(
      ({ uid }) => {
        return !alreadyUsedComponents.includes(uid);
      }
    );

    if (filteredComponents.length > 0) {
      acc[current] = filteredComponents;
    }

    return acc;
  }, {});

  const collapsesObject = Object.keys(
    filteredComponentsGroupedByCategory
  ).reduce((acc, current) => {
    acc[current] = false;

    return acc;
  }, {});
  const [collapses, setCollapses] = useState(collapsesObject);
  const [options, setOptions] = useState(filteredComponentsGroupedByCategory);

  // Search for component
  useEffect(() => {
    const formattedOptions = Object.keys(
      filteredComponentsGroupedByCategory
    ).reduce((acc, current) => {
      const filteredComponents = filteredComponentsGroupedByCategory[
        current
      ].filter(({ schema: { name } }) => {
        return name.includes(inputValue);
      });

      if (filteredComponents.length > 0) {
        acc[current] = filteredComponents;
      }

      return acc;
    }, {});

    setOptions(formattedOptions);

    const categoriesToOpen = Object.keys(formattedOptions);

    if (inputValue !== '') {
      // Close collapses
      Object.keys(filteredComponentsGroupedByCategory)
        .filter(cat => categoriesToOpen.indexOf(cat) === -1)
        .forEach(catName => {
          setCollapses(prevState => ({ ...prevState, [catName]: false }));
        });

      categoriesToOpen.forEach(catName => {
        setCollapses(prevState => ({ ...prevState, [catName]: true }));
      });
    } else {
      // Close all collapses
      categoriesToOpen.forEach(catName => {
        setCollapses(prevState => ({ ...prevState, [catName]: false }));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const toggleCollapse = catName => {
    setCollapses(prevState => ({
      ...prevState,
      [catName]: !prevState[catName],
    }));
  };

  const Component = components.MenuList;

  const allComponentsCategory = Object.keys(options).reduce((acc, current) => {
    const categoryCompos = options[current].map(compo => {
      return compo.uid;
    });

    acc[current] = categoryCompos;

    return acc;
  }, {});

  const getCategoryValue = categoryName => {
    const componentsCategory = allComponentsCategory[categoryName];

    return hasSubArray(value.value, componentsCategory);
  };

  const doesCategoryHasSomeElements = categoryName => {
    const componentsCategory = allComponentsCategory[categoryName];

    return hasSomeSubArray(value.value, componentsCategory);
  };

  const handleChangeCategory = ({ target }) => {
    // refState.current.select.blur();
    const dataTarget = {
      name,
      components: allComponentsCategory[target.name],
      shouldAddComponents: target.value,
    };
    addComponentsToDynamicZone({ target: dataTarget });
  };

  const handleChange = ({ target }) => {
    const dataTarget = {
      name,
      components: target.name,
      shouldAddComponents: target.value,
    };

    addComponentsToDynamicZone({ target: dataTarget });
  };

  return (
    <Component {...rest}>
      <Ul
        style={{
          maxHeight: 150,
        }}
      >
        {Object.keys(options).length === 0 && (
          <FormattedMessage
            id={getTrad(
              `components.componentSelect.no-component-available${
                inputValue === '' ? '' : '.with-search'
              }`
            )}
          >
            {msg => <li style={{ paddingTop: 11 }}>{msg}</li>}
          </FormattedMessage>
        )}
        {Object.keys(options).map(categoryName => {
          const isChecked = getCategoryValue(categoryName);
          const someChecked =
            !isChecked && doesCategoryHasSomeElements(categoryName);
          const target = { name: categoryName, value: !isChecked };

          return (
            <li key={categoryName} className="li-multi-menu">
              <div style={{ marginTop: 3 }}>
                <CheckboxWrapper>
                  <Label
                    htmlFor="overrideReactSelectBehavior"
                    onClick={() => {
                      handleChangeCategory({ target });
                    }}
                  >
                    <Checkbox
                      id="checkCategory"
                      checked={isChecked}
                      name={categoryName}
                      onChange={() => {}}
                      someChecked={someChecked}
                      style={{ marginRight: 10 }}
                    />
                    <UpperFirst content={categoryName} />
                  </Label>
                  <div
                    style={{
                      display: 'flex',
                      width: '150px',
                      textAlign: 'right',
                      flexGrow: 2,
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      toggleCollapse(categoryName);
                    }}
                  >
                    <FontAwesomeIcon
                      className="chevron"
                      icon={
                        collapses[categoryName] ? 'chevron-up' : 'chevron-down'
                      }
                    />
                  </div>
                </CheckboxWrapper>
              </div>
              <SubUl tag="ul" isOpen={collapses[categoryName]}>
                {options[categoryName].map(component => {
                  const isChecked = get(value, 'value', []).includes(
                    component.uid
                  );
                  const target = { name: component.uid, value: !isChecked };

                  return (
                    <li key={component.uid}>
                      <CheckboxWrapper>
                        <Label
                          htmlFor={component.uid}
                          message={component.schema.name}
                          onClick={() => {
                            handleChange({ target });
                          }}
                        >
                          <Checkbox
                            id="check"
                            name={component.uid}
                            // Remove the handler
                            onChange={() => {}}
                            checked={isChecked}
                            style={{ marginRight: 10 }}
                          />
                          {component.schema.name}
                        </Label>
                      </CheckboxWrapper>
                    </li>
                  );
                })}
              </SubUl>
            </li>
          );
        })}
      </Ul>
    </Component>
  );
};

MultipleMenuList.defaultProps = {
  selectProps: {
    inputValue: '',
    refState: {
      current: {
        select: {
          blur: () => {},
        },
      },
    },
    value: {},
  },
};

MultipleMenuList.propTypes = {
  selectProps: PropTypes.shape({
    addComponentsToDynamicZone: PropTypes.func.isRequired,
    inputValue: PropTypes.string,
    name: PropTypes.string.isRequired,
    refState: PropTypes.object,
    value: PropTypes.object,
  }).isRequired,
};

export default MultipleMenuList;
