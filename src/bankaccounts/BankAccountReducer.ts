import {Action, handleActions} from "redux-actions"

import {BankAccount} from "data/BankAccount"
import {ADD_BANK_ACCOUNT, RECEIVE_BANK_ACCOUNTS, REQUEST_BANK_ACCOUNTS} from "../action/ActionTypes"
import {BankAccountsState} from "../ConfigureStore"

const bankAccountReducer = handleActions<BankAccountsState>({
  [ADD_BANK_ACCOUNT]: (state: BankAccountsState, action: Action<BankAccount>): BankAccountsState => {
    const newId: number = state.items.reduce((maxId, bankAccount) => Math.max(bankAccount.id, maxId), -1) + 1
    return {
      ...state,
      items: [
        ...state.items,
        {id: newId, accountNumber: action.payload.accountNumber},
      ],
    }
  },
  [REQUEST_BANK_ACCOUNTS]: (state: BankAccountsState): BankAccountsState => {
    return {
      ...state,
      isFetching: true,
    }
  },
  [RECEIVE_BANK_ACCOUNTS]: (state: BankAccountsState, action: Action<BankAccount[]>): BankAccountsState => {
    return {
      ...state,
      isFetching: false,
      items: action.payload,
    }
  },
}, {
  isFetching: false,
  items: [],
})

export default bankAccountReducer
