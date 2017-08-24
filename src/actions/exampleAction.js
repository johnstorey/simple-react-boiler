/**
 * Example file on how to create an action.
 */
import * as types from '../constants/actionTypes';

// Returns an action type and associated data.
export const exampleActionType = (data) => ({
  type: types.EXAMPLE_ACTION,
  data: data // Can use the ES6 shortcut and just write 'data' on this line.
});

