import axios from "axios"
import {createAction} from "redux-actions"

import {ADD_BANK_ACCOUNT, RECEIVE_BANK_ACCOUNTS, REQUEST_BANK_ACCOUNTS} from "action/ActionTypes"
import {BankAccount} from "data/BankAccount"

export const addBankAccount = createAction<BankAccount>(ADD_BANK_ACCOUNT)

export const requestBankAccounts = createAction(REQUEST_BANK_ACCOUNTS)

export const recieveBankAccounts = createAction<BankAccount[]>(RECEIVE_BANK_ACCOUNTS)

export function fetchBankAccounts() {
  return (dispatch) => {
    dispatch(requestBankAccounts())
    return axios.get("/api/bankaccounts")
        .then((response) => dispatch(recieveBankAccounts(response.data)))
  }
}
