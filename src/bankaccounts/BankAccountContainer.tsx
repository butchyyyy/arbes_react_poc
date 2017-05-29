import React from "react"

import {connect} from "react-redux"

import {Button} from "react-bootstrap"

import {addBankAccount} from "bankaccounts/BankAccountAction"
import {BankAccountListView} from "bankaccounts/BankAccountListView"
import {BankAccount} from "data/BankAccount"

import styles from "./BankAccount.less"

interface IProps {
  bankAccounts: BankAccount[]
  addBankAccount: () => void
}

interface IStateFromProps {
  bankAccounts: BankAccount[]
}

interface IDispatchFromProps {
  addBankAccount: () => void
}

class BankAccountContainer extends React.Component<IProps, {}> {

  constructor(props) {
    super(props)
    this.onClickAddBankAccount = this.onClickAddBankAccount.bind(this)
  }

  public render() {
    return (
        <div className={styles.bankAccount}>
          <h1>List of bank accounts:</h1>
          <BankAccountListView bankAccounts={this.props.bankAccounts}/>
          <Button bsStyle="primary" onClick={this.onClickAddBankAccount}>Add Account</Button>
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

export default connect<IStateFromProps, IDispatchFromProps, void>(
    mapStateToProps, mapDispatchToProps)(BankAccountContainer)
