import React from "react"

import { LinkContainer } from "react-router-bootstrap"

import { Nav, NavItem } from "react-bootstrap"

export class Menu extends React.Component<{}, {}> {

  public render() {
    return (
        <Nav>
          <LinkContainer to="/">
            <NavItem>Bank Accounts</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
    )
  }

}
