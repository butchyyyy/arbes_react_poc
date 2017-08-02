import {createAction} from "redux-actions"
import {setTimeout} from "timers"

import {RECEIVE_LOGIN, RECEIVE_LOGOUT, REQUEST_LOGIN, REQUEST_LOGOUT} from "action/ActionTypes"
import {LOCAL_STORAGE_ID_TOKEN} from "ConfigureStore"

export const requestLogin = createAction(REQUEST_LOGIN)

export const receiveLogin = createAction(RECEIVE_LOGIN)

export const requestLogout = createAction(REQUEST_LOGOUT)

export const receiveLogout = createAction(RECEIVE_LOGOUT)

export function login() {
  return (dispatch) => {
    dispatch(requestLogin())
    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_ID_TOKEN, "user_token"),
      dispatch(receiveLogin())
    }, 1000)
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem(LOCAL_STORAGE_ID_TOKEN)
    dispatch(receiveLogout())
  }
}
