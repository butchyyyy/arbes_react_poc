import {applyMiddleware, createStore, Store} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

import {BankAccount} from "data/BankAccount"
import {PaymentOrder} from "data/PaymentOrder"
import {rootReducer} from "RootReducer"

export interface LoginState {
  isLoggingIn: boolean
  isLoggingOut: boolean
  isLoggedIn: boolean
  errorMessage: string
}

export interface BankAccountsState {
  isFetching: boolean
  items: BankAccount[]
}

export interface IState {
  login: LoginState
  bankAccounts: BankAccountsState
  paymentOrders: PaymentOrder[]
}

const initialState: IState = {
  login: {
    isLoggingIn: false,
    isLoggingOut: false,
    isLoggedIn: false,
    errorMessage: "",
  },
  bankAccounts: {
    isFetching: false,
    items: [],
  },
  paymentOrders: [],
}

export function configureStore(): Store<IState> {
  const store = createStore<IState>(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
  if (module.hot) {
    module.hot.accept("RootReducer", () => {
      store.replaceReducer(require("RootReducer").default)
    })
  }
  return store
}
