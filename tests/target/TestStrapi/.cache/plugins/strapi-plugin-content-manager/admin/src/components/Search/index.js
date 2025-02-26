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
/*
 *
 * Search
 *
 */

import React, { memo } from 'react';
import { isEmpty, upperFirst } from 'lodash';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Cross from '../../icons/Cross';
import Filter from '../../icons/Filter';
import SearchIcon from '../../icons/Search';
import { Wrapper, Infos, Clear } from './components';
const WAIT = 400;

class Search extends React.Component {
  state = { value: this.props.initValue };

  componentDidUpdate(prevProps) {
    const { model, value } = this.props;

    if (
      prevProps.model !== model ||
      (!isEmpty(prevProps.value) && isEmpty(value))
    ) {
      this.resetState();
    }
  }

  timer = null;

  resetState = () => this.setState({ value: '' });

  handleChange = ({ target }) => {
    clearTimeout(this.timer);
    this.setState({ value: target.value });
    this.timer = setTimeout(() => this.triggerChange(target.value), WAIT);
  };

  handleClick = () => {
    this.setState({ value: '' });
    this.triggerChange('');
  };

  triggerChange = value =>
    this.props.changeParams({
      target: {
        name: '_q',
        value,
      },
    });

  render() {
    const { model } = this.props;
    const { value } = this.state;

    return (
      <Wrapper>
        <div>
          <SearchIcon />
        </div>
        <div>
          <FormattedMessage id="content-manager.components.Search.placeholder">
            {message => (
              <input
                onChange={this.handleChange}
                placeholder={message}
                type="text"
                value={value}
              />
            )}
          </FormattedMessage>
          {value !== '' && (
            <Clear onClick={this.handleClick}>
              <Cross />
            </Clear>
          )}
        </div>
        <Infos>
          <Filter />
          {upperFirst(model)}
        </Infos>
      </Wrapper>
    );
  }
}

Search.defaultProps = {
  changeParams: () => {},
  model: '',
  value: '',
};

Search.propTypes = {
  changeParams: PropTypes.func,
  initValue: PropTypes.string.isRequired,
  model: PropTypes.string,
  value: PropTypes.string,
};

export default memo(Search);
