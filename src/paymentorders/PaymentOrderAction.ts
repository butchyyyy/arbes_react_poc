import {Action, createAction} from "redux-actions"

import {ADD_PAYMENT_ORDER} from "action/ActionTypes"
import {PaymentOrder} from "data/PaymentOrder"

export const addPaymentOrder = createAction<PaymentOrder>(
    ADD_PAYMENT_ORDER,
    (paymentOrder: PaymentOrder) => PaymentOrder,
)
