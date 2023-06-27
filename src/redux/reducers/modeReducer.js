import { RESET_MODE, SET_MODE } from "../actions/actionTypes";

const initialState = {
  mode: false,
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        mode: !state.mode,
      };
    case RESET_MODE:
      return {
        mode: false,
      };
    default:
      return state;
  }
};

export default modeReducer;
