import {createAction} from "redux-actions"
import {setTimeout} from "timers"

import {RECEIVE_LOGIN, RECEIVE_LOGOUT, REQUEST_LOGIN, REQUEST_LOGOUT} from "action/ActionTypes"

export const requestLogin = createAction(REQUEST_LOGIN)

export const receiveLogin = createAction(RECEIVE_LOGIN)

export const requestLogout = createAction(REQUEST_LOGOUT)

export const receiveLogout = createAction(RECEIVE_LOGOUT)

export function login() {
  return (dispatch) => {
    dispatch(requestLogin())
    setTimeout(() => dispatch(receiveLogin()), 1000)
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(requestLogout())
    dispatch(receiveLogout())
  }
}
