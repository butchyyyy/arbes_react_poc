import React from "react"
import {connect} from "react-redux"
import {RouteComponentProps} from "react-router"

import {IState} from "ConfigureStore"
import {BankAccount} from "data/BankAccount"

interface IParams {
  bankAccountId: number
}

interface IStateToProps {
  bankAccount: BankAccount
}

interface IProps extends IStateToProps, RouteComponentProps<IParams> {

}

export class AddPaymentOrderContainer extends React.Component<IProps, {}> {

  public render() {
    return (
        <div>
          <h1>Bank Account: {this.props.bankAccount.accountNumber}</h1>
        </div>
    )
  }

}

const mapStateToProps = (state: IState, props: IProps) => ({
  bankAccount: state.bankAccounts.find((item) => item.id === Number(props.match.params.bankAccountId)),
})

export default connect(mapStateToProps)(AddPaymentOrderContainer)
