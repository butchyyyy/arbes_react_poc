import {combineReducers, createStore, compose} from "redux"

import {BankAccount} from "data/BankAccount"
import {PaymentOrder} from "data/PaymentOrder"
import {rootReducer} from "./RootReducer"

export interface IState {
  bankAccounts: BankAccount[]
  paymentOrders: PaymentOrder[]
}

const initialState: IState = {
  bankAccounts: [
    new BankAccount(1, "15651651/0800"),
    new BankAccount(2, "54646764/0800"),
  ],
  paymentOrders: [],
}

export const store = createStore(rootReducer, initialState)

if (module.hot) {
  module.hot.accept("./RootReducer", () => {
    const reducer = require("./RootReducer")
    store.replaceReducer(reducer)
  })
}

export const getState = () => store.getState() as IState
