import React from "react"

import {NavItem} from "react-bootstrap"

import i18n from "localization/i18n"

interface OwnProps {
  lang: string
}

export class ChangeLanguage extends React.Component<OwnProps, {}> {

  constructor(props) {
    super(props)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  public render() {
    return <NavItem onClick={this.changeLanguage}>{this.props.lang}</NavItem>
  }

  private changeLanguage() {
    i18n.changeLanguage(this.props.lang)
  }

}
