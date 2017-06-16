import {Action, handleActions} from "redux-actions"

import {ADD_PAYMENT_ORDER} from "../action/ActionTypes"
import {PaymentOrder} from "../data/PaymentOrder"

const paymentOrderReducer = handleActions<PaymentOrder[], PaymentOrder>({
  [ADD_PAYMENT_ORDER]: (state: PaymentOrder[], action: Action<PaymentOrder>): PaymentOrder[] => {
    const newId: number = state.reduce((maxId, paymentOrder) => Math.max(paymentOrder.id, maxId), -1) + 1
    return [
      {id: newId, bankAccountId: action.payload.bankAccountId, amount: action.payload.amount},
      ...state,
    ]
  },
}, [])

export default paymentOrderReducer
