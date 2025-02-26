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
import { Map } from 'immutable';
import { isEmpty, get, isObject } from 'lodash';
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'strapi-helper-plugin';

import pluginId from '../../pluginId';

import {
  deleteSuccess,
  dropSuccess,
  getDataSuccess,
  onSearchSuccess,
  setLoading,
  unsetLoading,
} from './actions';
import { DELETE_DATA, GET_DATA, ON_DROP, ON_SEARCH } from './constants';
import { makeSelectParams, makeSelectSearch } from './selectors';

function* dataDelete(action) {
  try {
    const dataId = action.dataToDelete.id || action.dataToDelete._id;
    const requestURL = `/upload/files/${dataId}`;
    yield call(request, requestURL, { method: 'DELETE' });
    yield put(deleteSuccess());
    strapi.notification.success('upload.notification.delete.success');
  } catch (err) {
    strapi.notification.error('notification.error');
  }
}

function* dataGet() {
  try {
    const pageParams = yield select(makeSelectParams());
    const _start = (pageParams._page - 1) * pageParams._limit;
    const params = {
      _limit: pageParams._limit,
      _sort: pageParams._sort,
      _start,
    };
    const data = yield all([
      call(request, '/upload/files', { method: 'GET', params }),
      call(request, '/upload/files/count', { method: 'GET' }),
    ]);
    const entries = data[0].length === 0 ? [] : data[0].map(obj => Map(obj));
    yield put(getDataSuccess(entries, data[1].count));
  } catch (err) {
    strapi.notification.error('notification.error');
  }
}

function* uploadFiles(action) {
  try {
    yield put(setLoading());
    const headers = {};
    const response = yield call(
      request,
      '/upload',
      { method: 'POST', headers, body: action.formData },
      false,
      false
    );
    const newFiles = response.map(file => Map(file));

    yield put(dropSuccess(newFiles));

    if (newFiles.length > 1) {
      strapi.notification.success({
        id: 'upload.notification.dropFiles.success',
        values: { number: newFiles.length },
      });
    } else {
      strapi.notification.success({
        id: 'upload.notification.dropFile.success',
      });
    }
  } catch (error) {
    let message = get(error, [
      'response',
      'payload',
      'message',
      '0',
      'messages',
      '0',
    ]);
    if (isObject(message))
      message = { ...message, id: `${pluginId}.${message.id}` };

    strapi.notification.error(message || 'notification.error');
  } finally {
    yield put(unsetLoading());
  }
}

function* search() {
  try {
    const search = yield select(makeSelectSearch());
    const pageParams = yield select(makeSelectParams());
    const _start = (pageParams._page - 1) * pageParams._limit;
    const requestURL = !isEmpty(search)
      ? `/upload/search/${search}`
      : '/upload/files';
    const params = isEmpty(search)
      ? {
          _limit: pageParams._limit,
          _sort: pageParams._sort,
          _start,
        }
      : {};
    const response = yield call(request, requestURL, { method: 'GET', params });
    const entries = response.length === 0 ? [] : response.map(obj => Map(obj));

    yield put(onSearchSuccess(entries));
  } catch (err) {
    strapi.notification.error('notification.error');
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield fork(takeLatest, DELETE_DATA, dataDelete);
  yield fork(takeLatest, ON_DROP, uploadFiles);
  yield fork(takeLatest, ON_SEARCH, search);

  yield fork(takeLatest, GET_DATA, dataGet);
  // TODO: Fix router (Other PR)
  // const loadDataWatcher = yield fork(takeLatest, GET_DATA, dataGet);

  // yield take(LOCATION_CHANGE);

  // yield cancel(loadDataWatcher);
}

// All sagas to be loaded
export default defaultSaga;
