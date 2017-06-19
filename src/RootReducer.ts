import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"

import bankAccountReducer from "bankaccounts/BankAccountReducer"
import {IState} from "ConfigureStore"
import loginReducer from "login/LoginReducer"
import paymentOrderReducer from "paymentorders/PaymentOrderReducer"

export const rootReducer = combineReducers<IState>({
  login: loginReducer,
  bankAccounts: bankAccountReducer,
  form: formReducer,
  paymentOrders: paymentOrderReducer,
})
