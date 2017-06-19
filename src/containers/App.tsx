import React from "react"

import {connect} from "react-redux"

import {Main} from "component/Main"
import Menu from "component/Menu"
import {IState} from "ConfigureStore"
import LoginForm from "login/LoginForm"

interface StateProps {
  isLoggedIn: boolean
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps {
}

export class App extends React.Component<Props, {}> {

  public render() {
    return <div className="container">{this.props.isLoggedIn ? (<div><Menu/><Main/></div>) : (<LoginForm/>)}</div>
  }
}

const mapStateToProps = (state: IState) => ({
  isLoggedIn: state.login.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect<StateProps, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(App)
