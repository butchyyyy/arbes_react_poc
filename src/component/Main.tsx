import React from "react"
import {Route, Switch} from "react-router"

import BankAccountContainer from "bankaccounts/BankAccountContainer"
import {About} from "component/About"
import AddPaymentOrderContainer from "paymentorders/AddPaymentOrderContainer"

export class Main extends React.Component<any, any> {

  public render() {
    return (
        <div>
          <Switch>
            <Route exact={true} path="/" component={BankAccountContainer} />
            <Route path="/about" component={About} />
            <Route path="/addOrder/:bankAccountId" component={AddPaymentOrderContainer} />
          </Switch>
        </div>
    )
  }

}
