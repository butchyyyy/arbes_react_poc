import React from "react"

import {BankAccount} from "../data/BankAccount"
import {BankAccountListItem} from "./BankAccountListItem"

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
