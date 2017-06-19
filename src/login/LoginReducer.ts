import {handleActions} from "redux-actions"

import {RECEIVE_LOGIN, RECEIVE_LOGOUT, REQUEST_LOGIN, REQUEST_LOGOUT} from "action/ActionTypes"
import {LoginState} from "ConfigureStore"

const loginReducer = handleActions<LoginState>({
  [REQUEST_LOGIN]: (state: LoginState): LoginState => {
    return {...state, isLoggingIn: true}
  },
  [RECEIVE_LOGIN]: (state: LoginState): LoginState => {
    return {...state, isLoggingIn: false, isLoggedIn: true}
  },
  [REQUEST_LOGOUT]: (state: LoginState): LoginState => {
    return {...state, isLoggingOut: true}
  },
  [RECEIVE_LOGOUT]: (state: LoginState): LoginState => {
    return {...state, isLoggingOut: false, isLoggedIn: false}
  },
},
{isLoggingIn: false, isLoggingOut: false, isLoggedIn: false, errorMessage: ""})

export default loginReducer
