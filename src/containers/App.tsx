import React from "react"

import {connect} from "react-redux"

import {Main} from "component/Main"
import {Menu} from "component/Menu"
import {IState} from "ConfigureStore"
import {LoginForm} from "login/LoginForm"

interface StateProps {
  isLoggedIn: boolean
}

class AppComponent extends React.Component<StateProps, {}> {

  public render() {
    return <div className="container">{this.props.isLoggedIn ? (<div><Menu/><Main/></div>) : (<LoginForm/>)}</div>
  }
}

const mapStateToProps = (state: IState): StateProps => ({
  isLoggedIn: state.login.isLoggedIn,
})

export const App: React.ComponentClass<{}> = connect(mapStateToProps, null)(AppComponent)
