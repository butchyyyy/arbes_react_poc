import React from "react"
import ReactDOM from "react-dom"

import {BrowserRouter} from "react-router-dom"

import {AppContainer} from "react-hot-loader"
import {Provider} from "react-redux"

import {configureStore} from "ConfigureStore"
import App from "containers/App"

const render = (Component: any, reduxStore) => {
  ReactDOM.render(
      <Provider store={reduxStore}>
        <BrowserRouter>
          <AppContainer>
            <Component/>
          </AppContainer>
        </BrowserRouter>
      </Provider>,
      document.getElementById("root"),
  )
}

const store = configureStore()

render(App, store)

if (module.hot) {
  module.hot.accept("containers/App", () => render(App, store))
}
