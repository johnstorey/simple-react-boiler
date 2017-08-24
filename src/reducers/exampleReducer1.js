/**
 * Example reducer code.
 */

import initialState from './initialState';
import * as types from '../constants/actionsTypes';

// Handle actions in this reducer code.
// Reducers are called for every Redux action (another way to say 'event').
export default function(state = initialState.example1, // Relevant section of redux state for this reducer
	action) {
	switch (action.type) {
	  case types.EXAMPLE_ACTION:
            return [...state, action.data]; // Redux store example1 set to this state; props updated on listening components.

	  default:
	    return state; // Often we don't care about the action that has happened.
  	}
}
