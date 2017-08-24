/**
 * Example Saga Watcher.
 *
 * Saga watchers watch for actions in the Redux stream that
 * should be intercepted so that sagas can perform some work
 * before the action gets to the Redux store. This work can
 * be anything, including changing the intercepted action,
 * not passing it downstream to the Redux store, or replacing
 * it by sending a new action. Basically it's in the Redux
 * pipeline.
 */

import { takeLatest } from 'redux-saga/effects';
import { exampleSaga } from './exampleSaga';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchExampleAction() {
  yield takeLatest(types.EXAMPLE_ACTION, exampleSaga);
}
