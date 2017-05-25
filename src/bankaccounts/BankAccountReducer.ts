import {Action, handleActions} from "redux-actions"

import {BankAccount} from "data/BankAccount"
import {ADD_BANK_ACCOUNT} from "../action/ActionTypes"

const bankAccountReducer = handleActions<BankAccount[], BankAccount>({
  [ADD_BANK_ACCOUNT]: (state: BankAccount[], action: Action<BankAccount>): BankAccount[] => {
    const newId: number = state.reduce((maxId, paymentOrder) => Math.max(paymentOrder.id, maxId), -1) + 1
    return [
      new BankAccount(newId, action.payload.accountNumber),
      ...state,
    ]
  },
}, [])

export default bankAccountReducer
