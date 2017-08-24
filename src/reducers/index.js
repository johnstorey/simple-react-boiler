/**
 * Example index.js for the reducers.
 */
import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer1.js';

// Combine all reducers into a single reducer function.
const rootReducer = combineReducers({
  exampleReducer,
  // list other reducers one at a time.
});

export default rootReducer;
