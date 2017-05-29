import React from "react"
import {Button, Col, Row} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

import {BankAccount} from "data/BankAccount"

interface IProps {
  bankAccount: BankAccount
}

export class BankAccountListItem extends React.Component<IProps, {}> {

  public render() {
    return (
        <Row>
          <Col xs={2}>{this.props.bankAccount.accountNumber}</Col>
          <Col xs={2}>
            <LinkContainer to={`/addOrder/${this.props.bankAccount.id}`}>
              <Button bsStyle="success" bsSize="xsmall">Add Payment Order</Button>
            </LinkContainer>
          </Col>
        </Row>)
  }

}
