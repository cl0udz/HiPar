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
/* eslint-disable no-console */
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';

import { request } from 'strapi-helper-plugin';

import { selectLocale } from '../LanguageProvider/selectors';
import {
  getAvailableAndInstalledPluginsSucceeded,
  downloadPluginSucceeded,
} from './actions';
import {
  DOWNLOAD_PLUGIN,
  GET_AVAILABLE_AND_INSTALLED_PLUGINS,
} from './constants';
import { makeSelectPluginToDownload } from './selectors';

export function* pluginDownload() {
  try {
    // Force the Overlayblocker to be displayed
    const overlayblockerParams = {
      enabled: true,
      title: 'app.components.InstallPluginPage.Download.title',
      description: 'app.components.InstallPluginPage.Download.description',
    };
    strapi.lockApp(overlayblockerParams);

    const pluginToDownload = yield select(makeSelectPluginToDownload());
    const opts = {
      method: 'POST',
      body: {
        plugin: pluginToDownload,
        port: window.location.port,
      },
    };

    const response = yield call(
      request,
      '/admin/plugins/install',
      opts,
      overlayblockerParams
    );

    if (response.ok) {
      yield put(downloadPluginSucceeded());
      window.location.reload();
    }
  } catch (err) {
    // Hide the global OverlayBlocker
    strapi.unlockApp();
    strapi.notification.error('notification.error');
  }
}

export function* getData() {
  try {
    // Get current locale.
    const locale = yield select(selectLocale());
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        lang: locale,
      },
    };
    const [availablePlugins, { plugins }] = yield all([
      call(request, 'https://marketplace.strapi.io/plugins', opts),
      call(request, '/admin/plugins', { method: 'GET' }),
    ]);

    yield put(
      getAvailableAndInstalledPluginsSucceeded(
        availablePlugins,
        Object.keys(plugins)
      )
    );
  } catch (err) {
    strapi.notification.error('notification.error');
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  try {
    yield fork(takeLatest, GET_AVAILABLE_AND_INSTALLED_PLUGINS, getData);
    yield fork(takeLatest, DOWNLOAD_PLUGIN, pluginDownload);
  } catch (err) {
    console.log(err);
  }
}
