import React from "react"
import {Button, Col, ControlLabel, Form, FormGroup} from "react-bootstrap"
import {connect} from "react-redux"
import {RouteComponentProps, RouteProps} from "react-router"
import {DataShape, Field, FormProps, reduxForm} from "redux-form"

import {IState} from "ConfigureStore"
import {BankAccount} from "data/BankAccount"

interface RouteParams {
  bankAccountId: number
}

interface StateProps {
  bankAccount: BankAccount
}

class AddPaymentOrderComponent
    extends React.Component<StateProps & RouteComponentProps<RouteParams> & FormProps<any, any, any>, {}> {

  constructor(props) {
    super(props)
    this.handleSubmitPaymentOrder = this.handleSubmitPaymentOrder.bind(this)
  }

  public render() {
    return (
        <Col xs={12}>
          <h1>Bank account: {this.props.bankAccount.accountNumber}</h1>
          <Form horizontal={true} onSubmit={this.props.handleSubmit(this.handleSubmitPaymentOrder)}>
            <FormGroup>
              <Col componentClass={ControlLabel} xs={2}>Amount</Col>
              <Col xs={10}>
                <Field
                    className="form-control"
                    name="amount"
                    component="Input"
                    type="number"
                    placeholder="Payment order amount"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} xs={2}>Note</Col>
              <Col xs={10}>
                <Field
                    className="form-control"
                    name="note"
                    component="Input"
                    type="text"
                    placeholder="Payment order note"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xsOffset={2} xs={10}>
                <Button bsStyle="primary" type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
    )
  }

  private handleSubmitPaymentOrder() {
    // TODO
  }

}

const mapStateToProps = (state: IState, props: RouteComponentProps<RouteParams>): StateProps => ({
  bankAccount: state.bankAccounts.items.find((item) => item.id === Number(props.match.params.bankAccountId)),
})

const connectedForm = reduxForm({
  form: "addPaymentOrder",
})(AddPaymentOrderComponent)

export const AddPaymentOrderContainer: React.ComponentClass<RouteComponentProps<RouteParams>> =
    connect(mapStateToProps)(connectedForm)
