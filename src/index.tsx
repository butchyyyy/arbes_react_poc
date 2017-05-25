import * as React from "react"
import * as ReactDOM from "react-dom"

import {AppContainer} from "react-hot-loader"
import {Provider} from "react-redux"

import {store} from "ConfigureStore"
import App from "containers/App"

const render = (Component, reduxStore) => {
  ReactDOM.render(
      <Provider store={reduxStore}>
        <AppContainer>
          <Component/>
        </AppContainer>
      </Provider>,
      document.getElementById("root"),
  )
}

render(App, store)

if (module.hot) {
  module.hot.accept()
  render(App, store)
}
