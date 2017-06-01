import React from "react"

import {connect} from "react-redux"

import {Button, Col} from "react-bootstrap"

import {addBankAccount} from "bankaccounts/BankAccountAction"
import {BankAccountListView} from "bankaccounts/BankAccountListView"
import {BankAccount} from "data/BankAccount"

import styles from "./BankAccount.less"

interface IStateFromProps {
  bankAccounts: BankAccount[]
}

interface IDispatchFromProps {
  addBankAccount: (bankAccount: BankAccount) => void
}

interface IProps extends IStateFromProps, IDispatchFromProps {}

class BankAccountContainer extends React.Component<IProps, {}> {

  constructor(props) {
    super(props)
    this.onClickAddBankAccount = this.onClickAddBankAccount.bind(this)
  }

  public render() {
    return (
        <Col xs={12} className={styles.bankAccount}>
          <h1>List of bank accounts:</h1>
          <BankAccountListView bankAccounts={this.props.bankAccounts}/>
          <Button bsStyle="primary" onClick={this.onClickAddBankAccount}>Add Account</Button>
        </Col>
    )
  }

  private onClickAddBankAccount() {
    this.props.addBankAccount(new BankAccount(null, "Added bank account"))
  }

}

const mapStateToProps = (state) => ({
  bankAccounts: state.bankAccounts,
})

const mapDispatchToProps = (dispatch) => ({
  addBankAccount: (bankAccount: BankAccount) => dispatch(addBankAccount(bankAccount)),
})

export default connect<IStateFromProps, IDispatchFromProps, void>(
    mapStateToProps, mapDispatchToProps)(BankAccountContainer)
