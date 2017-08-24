/**
 * Example Saga.
 *
 * Sagas are generations (that's what the '*' by the 'function' keyword means.)
 * They use yield and saga 'effects'. Most of the time we are calling stuff in
 * the Api directory which recturns a Promise.
 */

import { put, call } from 'redux-saga/effects';
import { exampleAPI } from '../Api/api';
import * as types from '../constants/actionTypes';

// Responsible for making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* exampleSaga({ payload }) {
	try {
		const data = yield call(exampleAPICall, payload);
		yield [
			put({ type: types.EXAMPLE_API_SUCCESS, data }),
		];
	} catch (error) {
		yield put({ type: 'EXAMPLE_API_ERROR', error });
	}
}

