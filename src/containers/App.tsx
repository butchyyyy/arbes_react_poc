import React from "react"

import {connect} from "react-redux"

import {addBankAccount} from "bankaccounts/BankAccountAction"
import {BankAccountListView} from "bankaccounts/BankAccountListView"
import {store} from "ConfigureStore"
import {BankAccount} from "data/BankAccount"

interface IAppProps {
  bankAccounts: BankAccount[]
}

class App extends React.Component<IAppProps, {}> {

  public render() {
    return (
        <div>
          <h1>List of bank accounts:</h1>
          <BankAccountListView bankAccounts={this.props.bankAccounts}/>
          <button onClick={this.handleAddBankAccountClick}>Add Bank Account</button>
        </div>
    )
  }

  private handleAddBankAccountClick() {
    const bankAccount = new BankAccount(null, "added bank account")
    store.dispatch(addBankAccount(bankAccount))
  }

}

const mapStateToProps = (state) => ({
  bankAccounts: state.bankAccounts,
})

export default connect(mapStateToProps)(App)
