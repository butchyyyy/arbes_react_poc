import React from "react"

import { LinkContainer } from "react-router-bootstrap"

import { Glyphicon, Nav, Navbar, NavItem } from "react-bootstrap"

import {logout} from "login/LoginActions"
import {connect} from "react-redux"

interface StateToProps {

}

interface DispatchToProps {
  logout: () => void
}

interface Props extends StateToProps, DispatchToProps {
}

export class Menu extends React.Component<Props, {}> {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  public render() {
    return (
        <Navbar inverse={true} collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="https://github.com/butchyyyy/arbes_react_poc">Arbes React PoC</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/" exact={true}>
                <NavItem>Bank Accounts</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight={true}>
              <NavItem onClick={this.handleLogout}>
                <Glyphicon glyph="log-out"/> Logout
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }

  private handleLogout() {
    this.props.logout()
  }

}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
