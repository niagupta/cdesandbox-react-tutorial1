import { INCREMENT, DECREMENT, SQUARE, SQUAREROOT } from "./counter.types";

const INITIAL_STATE = {
  count: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.data
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case SQUARE: {
      return {
        ...state,
        count: state.count * state.count
      };
    }
    case SQUAREROOT: {
      return {
        ...state,
        count: Math.sqrt(state.count)
      };
    }
    default:
      return state;
  }
};

export default reducer;
