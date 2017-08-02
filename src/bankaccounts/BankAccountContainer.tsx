import React from "react"

import {Button, Col} from "react-bootstrap"
import {connect} from "react-redux"
import {RouteComponentProps} from "react-router"

import {addBankAccount, fetchBankAccounts} from "bankaccounts/BankAccountAction"
import {BankAccountListView} from "bankaccounts/BankAccountListView"
import {BankAccount} from "data/BankAccount"

import {IState} from "../ConfigureStore"

import styles from "./BankAccount.less"

interface StateProps {
  bankAccounts: BankAccount[]
}

interface DispatchProps {
  addBankAccount: (bankAccount: BankAccount) => void
  fetchBankAccounts: () => void
}

class BankAccountComponent
    extends React.Component<StateProps & DispatchProps & RouteComponentProps<{}>, {}> {

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

  public componentDidMount() {
    this.props.fetchBankAccounts()
  }

  private onClickAddBankAccount() {
    this.props.addBankAccount({accountNumber: "Added bank account"})
  }

}

const mapStateToProps = (state: IState): StateProps => ({
  bankAccounts: state.bankAccounts.items,
})

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addBankAccount: (bankAccount: BankAccount) => dispatch(addBankAccount(bankAccount)),
  fetchBankAccounts: () => dispatch(fetchBankAccounts()),
})

export const BankAccountContainer: React.ComponentClass<RouteComponentProps<{}>> =
    connect<StateProps, DispatchProps, RouteComponentProps<{}>>(mapStateToProps, mapDispatchToProps)(BankAccountComponent)
