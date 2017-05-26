import React from "react"

import {connect} from "react-redux"

import {addBankAccount} from "bankaccounts/BankAccountAction"
import {BankAccountListView} from "bankaccounts/BankAccountListView"
import {BankAccount} from "data/BankAccount"

interface IAppProps {
  bankAccounts: BankAccount[]
  addBankAccount: () => void
}

interface IAppStateFromProps {
  bankAccounts: BankAccount[]
}

interface IAppDispatchFromProps {
  addBankAccount: () => void
}

export class App extends React.Component<IAppProps, {}> {

  constructor(props) {
    super(props)
    this.onClickAddBankAccount = this.onClickAddBankAccount.bind(this)
  }

  public render() {
    return (
        <div>
          <h1>List of bank accounts:</h1>
          <BankAccountListView bankAccounts={this.props.bankAccounts}/>
          <button onClick={this.onClickAddBankAccount}>Add Account</button>
        </div>
    )
  }

  private onClickAddBankAccount() {
    this.props.addBankAccount()
  }

}

const mapStateToProps = (state) => ({
  bankAccounts: state.bankAccounts,
})

const mapDispatchToProps = (dispatch) => ({
  addBankAccount: () => {
    const bankAccount = new BankAccount(null, "added bank account")
    dispatch(addBankAccount(bankAccount))
  },
})

export default connect<IAppStateFromProps, IAppDispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(App)
