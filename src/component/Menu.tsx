import React from "react"

import { LinkContainer } from "react-router-bootstrap"

import { Glyphicon, Nav, Navbar, NavItem } from "react-bootstrap"

import {logout} from "login/LoginActions"

import {ChangeLanguage} from "component/ChangeLanguage"
import {connect} from "react-redux"

import {InjectedTranslateProps, translate} from "react-i18next"

interface DispatchProps {
  logout: () => void
}

export class MenuComponent extends React.Component<DispatchProps & InjectedTranslateProps, {}> {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  public render() {
    const {t} = this.props

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
                <NavItem>{t("menuBankAccounts")}</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>{t("menuAbout")}</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight={true}>
              <ChangeLanguage lang="cs"/>
              <ChangeLanguage lang="en"/>
              <NavItem onClick={this.handleLogout}>
                <Glyphicon glyph="log-out"/> {t("menuLogout")}
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

const mapDispatchToProps = (dispatch): DispatchProps => ({
  logout: () => dispatch(logout()),
})

export const Menu: React.ComponentClass<{}> = connect(null, mapDispatchToProps)(translate("App")(MenuComponent))
