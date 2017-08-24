/**
 * Combine all sagas into a rootSaga call.
 */

import { fork } from 'redux-saga/effects';
import exampleWatcher from './exampleWatcher';

// Here we register the watchers with as a single
// generator function.
export default function* startForeman() {
  yield fork(exampleWatcher); // Like running it in a background thread.
}

