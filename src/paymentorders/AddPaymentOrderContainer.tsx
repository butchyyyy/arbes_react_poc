import React from "react"
import {RouteComponentProps} from "react-router"

interface IProps {
  bankAccountId: number
}

export class AddPaymentOrderContainer extends React.Component<RouteComponentProps<IProps>, {}> {

  public render() {
    return (
        <div>
          <h1>Bank Account: {this.props.match.params.bankAccountId}</h1>
        </div>
    )
  }

}
