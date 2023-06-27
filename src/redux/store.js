import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunkMiddleWare from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;