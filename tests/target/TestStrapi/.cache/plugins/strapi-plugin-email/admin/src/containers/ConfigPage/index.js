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
/**
 *
 * ConfigPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { findIndex, get, isEmpty } from 'lodash';
import { Header } from '@buffetjs/custom';

// You can find these components in either
// ./node_modules/strapi-helper-plugin/lib/src
// or strapi/packages/strapi-helper-plugin/lib/src
import { ContainerFluid, HeaderNav, GlobalContext } from 'strapi-helper-plugin';

import pluginId from '../../pluginId';

// Plugin's components
import EditForm from '../../components/EditForm';

import { getSettings, onCancel, onChange, setErrors, submit } from './actions';

import reducer from './reducer';
import saga from './saga';
import selectConfigPage from './selectors';

class ConfigPage extends React.Component {
  static contextType = GlobalContext;

  componentDidMount() {
    this.getSettings(this.props);
  }

  componentDidUpdate(prevProps) {
    // Get new settings on navigation change
    if (prevProps.match.params.env !== this.props.match.params.env) {
      this.getSettings(this.props);
    }

    // Redirect the user to the email list after modifying is provider
    if (prevProps.submitSuccess !== this.props.submitSuccess) {
      this.props.history.push(
        `/plugins/email/configurations/${this.props.match.params.env}`
      );
    }
  }

  getSelectedProviderIndex = () =>
    findIndex(this.props.settings.providers, [
      'provider',
      get(this.props.modifiedData, 'provider'),
    ]);

  /**
   * Get Settings depending on the props
   * @param  {Object} props
   * @return {Func}       calls the saga that gets the current settings
   */
  getSettings = props => {
    const {
      match: {
        params: { env },
      },
    } = props;
    this.props.getSettings(env);
  };

  generateLinks = () => {
    const headerNavLinks = this.props.appEnvironments
      .reduce((acc, current) => {
        const link = Object.assign(current, {
          to: `/plugins/email/configurations/${current.name}`,
        });
        acc.push(link);
        return acc;
      }, [])
      .sort(link => link.name === 'production');

    return headerNavLinks;
  };

  handleSubmit = e => {
    e.preventDefault();
    const formErrors = Object.keys(
      get(
        this.props.settings,
        ['providers', this.getSelectedProviderIndex(), 'auth'],
        {}
      )
    ).reduce((acc, current) => {
      if (isEmpty(get(this.props.modifiedData, current, ''))) {
        acc.push({
          name: current,
          errors: [{ id: 'components.Input.error.validation.required' }],
        });
      }
      return acc;
    }, []);

    if (!isEmpty(formErrors)) {
      return this.props.setErrors(formErrors);
    }

    return this.props.submit();
  };

  pluginHeaderActions = [
    {
      color: 'cancel',
      label: this.context.formatMessage({ id: 'app.components.Button.cancel' }),
      onClick: this.props.onCancel,
      type: 'button',
      key: 'button-cancel',
    },
    {
      color: 'success',
      label: this.context.formatMessage({ id: 'app.components.Button.save' }),
      onClick: this.handleSubmit,
      type: 'submit',
      key: 'button-submit',
    },
  ];

  render() {
    const { formatMessage } = this.context;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ContainerFluid>
            <Header
              actions={this.pluginHeaderActions}
              content={formatMessage({
                id: 'email.ConfigPage.description',
              })}
              title={{ label: formatMessage({ id: 'email.ConfigPage.title' }) }}
            />
            <HeaderNav
              links={this.generateLinks()}
              style={{ marginTop: '4.6rem' }}
            />
            <EditForm
              didCheckErrors={this.props.didCheckErrors}
              formErrors={this.props.formErrors}
              modifiedData={this.props.modifiedData}
              onChange={this.props.onChange}
              selectedProviderIndex={this.getSelectedProviderIndex()}
              settings={this.props.settings}
            />
          </ContainerFluid>
        </form>
      </div>
    );
  }
}

ConfigPage.defaultProps = {
  appEnvironments: [],
  formErrors: [],
  settings: {
    providers: [],
  },
};

ConfigPage.propTypes = {
  appEnvironments: PropTypes.array,
  didCheckErrors: PropTypes.bool.isRequired,
  formErrors: PropTypes.array,
  getSettings: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  settings: PropTypes.object,
  submit: PropTypes.func.isRequired,
  submitSuccess: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSettings,
      onCancel,
      onChange,
      setErrors,
      submit,
    },
    dispatch
  );
}

const mapStateToProps = selectConfigPage();

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = strapi.injectReducer({
  key: 'configPage',
  reducer,
  pluginId,
});
const withSaga = strapi.injectSaga({ key: 'configPage', saga, pluginId });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ConfigPage);
