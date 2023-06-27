import { SET_USER_NAME } from "../actions/actionTypes";

const initialState = {
  userName: "",
};

const userNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default userNameReducer;
