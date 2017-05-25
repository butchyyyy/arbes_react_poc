import {combineReducers} from "redux"

import bankAccountReducer from "./bankaccounts/BankAccountReducer"
import paymentOrderReducer from "./paymentorders/PaymentOrderReducer"

export const rootReducer = combineReducers({paymentOrders: paymentOrderReducer, bankAccounts: bankAccountReducer})
