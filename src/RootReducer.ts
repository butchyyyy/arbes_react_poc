import {combineReducers} from "redux"

import bankAccountReducer from "bankaccounts/BankAccountReducer"
import {IState} from "ConfigureStore"
import paymentOrderReducer from "paymentorders/PaymentOrderReducer"

export const rootReducer = combineReducers<IState>({
  bankAccounts: bankAccountReducer,
  paymentOrders: paymentOrderReducer,
})
