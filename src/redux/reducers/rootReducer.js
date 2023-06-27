import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articlesReducer";
import modeReducer from "./modeReducer";
import userNameReducer from "./userNameReducer";
const rootReducer = combineReducers({
  user: userReducer,
  articleState: articleReducer,
  mode: modeReducer,
  userName: userNameReducer,
});

export default rootReducer;
