import {
  SET_USER,
  SET_USER_NAME,
  SET_LOADING_STATUS,
  GET_ARTICLES,
  SET_MODE,
  RESET_MODE,
} from "./actionTypes";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});
export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  userName: payload,
});
export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});
export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});
export const setMode = () => ({
  type: SET_MODE,
});
export const resetMode = () => ({
  type: RESET_MODE,
});
