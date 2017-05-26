import React from "react"

import {connect} from "react-redux"

import {Main} from "component/Main"
import {Menu} from "component/Menu"

export class App extends React.Component<{}, {}> {

  public render() {
    return (
        <div>
          <Menu/>
          <Main/>
        </div>
    )
  }
}

export default App
