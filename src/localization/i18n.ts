import * as i18n from "i18next"

import LanguageDetector from "i18next-browser-languagedetector"
import I18NextXhrBackend from "i18next-xhr-backend"

function loadLocales(url, options, callback, data) {
  try {
    const waitForLocale = require(url)
    waitForLocale((locale) => {
      callback(locale, {status: "200"})
    })
  } catch (e) {
    callback(null, {status: "404"})
  }
}

const instance = i18n
    .use(I18NextXhrBackend)
    .use(LanguageDetector)
    .init({
      load: "languageOnly",
      ns: ["App"],
      fallbackLng: "cs",
      backend: {
        loadPath: "locales/{{lng}}/{{ns}}.json",

        /*parse: (data) => data,
        ajax: loadLocales,*/
      },
    })

export default instance
