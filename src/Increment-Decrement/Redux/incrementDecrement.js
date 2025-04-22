import { configureStore } from '@reduxjs/toolkit';

// Action Type Constants
const TWO_DECREMENT_ACTION = "TWO_DECREMENT_ACTION";
const ONE_INCREMENT_ACTION = "ONE_INCREMENT_ACTION";
const ONE_DECREMENT_ACTION = "ONE_DECREMENT_ACTION";
const TWO_INCREMENT_ACTION = "TWO_INCREMENT_ACTION";

// Initial State
const initialState = {
  decrementCount: 0,
  incrementCount: 0,
};

// Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ONE_DECREMENT_ACTION:
      return {
        ...state,
        decrementCount: state.decrementCount - 1,
      };
    case TWO_DECREMENT_ACTION:
      return {
        ...state,
        decrementCount: state.decrementCount - 2,
      };
    case ONE_INCREMENT_ACTION:
      return {
        ...state,
        incrementCount: state.incrementCount + 1,
      };
    case TWO_INCREMENT_ACTION:
      return {
        ...state,
        incrementCount: state.incrementCount + 2,
      };
    default:
      return state;
  }
}

// Configure Store
export const store = configureStore({
  reducer: {
    incrementDecrement: counterReducer,
  },
});

// Action Creators
export function decrementCount(type) {
  switch (type) {
    case "oneDecrement":
      return { type: ONE_DECREMENT_ACTION };
    case "twoDecrement":
      return { type: TWO_DECREMENT_ACTION };
    default:
      return { type: "" };
  }
}

export function incrementCount(type) {
  switch (type) {
    case "oneIncrement":
      return { type: ONE_INCREMENT_ACTION };
    case "twoIncrement":
      return { type: TWO_INCREMENT_ACTION };
    default:
      return { type: "" };
  }
}