import React from "react"
import ReactDOM from "react-dom"

import {BrowserRouter} from "react-router-dom"

import {AppContainer} from "react-hot-loader"
import {Provider} from "react-redux"

import {I18nextProvider} from "react-i18next"

import {configureStore} from "ConfigureStore"
import {App} from "containers/App"
import i18n from "localization/i18n"

const render = (Component: any, reduxStore) => {
  ReactDOM.render(
      <I18nextProvider i18n={i18n}>
        <Provider store={reduxStore}>
          <BrowserRouter>
            <AppContainer>
              <Component/>
            </AppContainer>
          </BrowserRouter>
        </Provider>
      </I18nextProvider>,
      document.getElementById("root"),
  )
}

const store = configureStore()

render(App, store)

if (module.hot) {
  module.hot.accept("containers/App", () => render(App, store))
}
