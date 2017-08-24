/**
 * Example configure store.
 *
 * - Configures sagas into the Redux Store as Redux Middleware.
 * - Incorporates changes so the Redux Devtools in Chrome work with Sagas.
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// Allows Redux devtools to work with Redux Sagas.
/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

// Returns the store instance.
// It can also take an initialState instance if one is provided.
const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware(); 
	return {
		...createStore(rootReducer,
				composeSetup(applyMiddleware(sagaMiddleware))),
			runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;

