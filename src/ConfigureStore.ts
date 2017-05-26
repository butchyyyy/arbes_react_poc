import {createStore, Store } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"

import {BankAccount} from "data/BankAccount"
import {PaymentOrder} from "data/PaymentOrder"
import {rootReducer} from "RootReducer"

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

export function configureStore(): Store<IState> {
  const store = createStore<IState>(rootReducer, initialState, composeWithDevTools())
  if (module.hot) {
    module.hot.accept("RootReducer", () => {
      const nextReducer = require("RootReducer").rootReducer
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
