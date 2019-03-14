import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/main.styl'

import Vue from 'vue'
import Vuetify from 'vuetify'
import FrappeChart from 'vue2-frappe'
import App from './App.vue'
import store from './store'
import router from './router'
import { i18n } from './locales'

import './styles/main.styl'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#009543',
    secondary: '#BBBBBB',
    accent: '#DC241F',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    disabled: '#AAAAAA'
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})

Vue.use(FrappeChart)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
