import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Axios from 'axios'

import messages from './lang/en-US' // Default

const DEFAULT_LANGUAGE = 'en-US'
const LOADED_LANGUAGES = [DEFAULT_LANGUAGE] // Our default language that is preloaded

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages
})

function setI18nLanguage (lang) {
  i18n.locale = lang
  Axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  console.log('[setI18nLanguage] setting language', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  lang = lang || navigator.language
  if (i18n.locale !== lang) {
    if (!LOADED_LANGUAGES.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/locales/lang/${lang}`).then(msgs => {
        console.log(`[loadLanguageAsync] loading @/locales/lang/${lang}`)
        i18n.setLocaleMessage(lang, msgs.default)
        LOADED_LANGUAGES.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
