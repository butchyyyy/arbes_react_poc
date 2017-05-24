import React from "react"

import {BankAccount} from "data/BankAccount"

export interface IBankAccountListViewProps {
  bankAccounts: BankAccount[]
}

export class BankAccountListView extends React.Component<IBankAccountListViewProps, {}> {

  public render() {
    return <ul>{this.props.bankAccounts.map((ba) => <li key={ba.id}>Number: {ba.accountNumber}</li>)}</ul>
  }

}
