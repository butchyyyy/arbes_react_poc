import React from "react"
import ReactDOM from "react-dom"

import { HashRouter } from "react-router-dom"

import {AppContainer} from "react-hot-loader"
import {Provider} from "react-redux"

import {configureStore} from "ConfigureStore"
import App from "containers/App"

const render = (Component: any, reduxStore) => {
  ReactDOM.render(
      <Provider store={reduxStore}>
        <HashRouter>
          <AppContainer>
            <Component/>
          </AppContainer>
        </HashRouter>
      </Provider>,
      document.getElementById("root"),
  )
}

const store = configureStore()

render(App, store)

if (module.hot) {
  module.hot.accept("containers/App", () => {
    const NextApp = require("containers/App").default
    render(NextApp, store)
  })
}
