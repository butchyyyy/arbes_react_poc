import {Action, createAction} from "redux-actions"

import {ADD_BANK_ACCOUNT} from "action/ActionTypes"
import {BankAccount} from "../data/BankAccount"

export const addBankAccount = createAction<BankAccount, BankAccount>(
    ADD_BANK_ACCOUNT,
    (bankAccount: BankAccount) => (BankAccount),
)
