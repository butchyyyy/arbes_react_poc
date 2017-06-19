import React from "react"

import {BankAccountListItem} from "bankaccounts/BankAccountListItem"
import {BankAccount} from "data/BankAccount"

export interface IBankAccountListViewProps {
  bankAccounts: BankAccount[]
}

export class BankAccountListView extends React.Component<IBankAccountListViewProps, {}> {

  public render() {
    return (
        <div>
          {this.props.bankAccounts.map((ba) => <div key={ba.id}><BankAccountListItem bankAccount={ba}/></div>)}
        </div>
    )
  }

}
