// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
// Modify default theme
Vue.material.registerTheme('default', {
  primary: { color: 'brown', hue: '500' },
  accent: { color: 'deep-orange', hue: '900' },
  warn: { color: 'blue', hue: '100' },
  background: 'white'
}, 'toxic', {
  primary: { color: 'blue', hue: '500' },
  accent: { color: 'pink', hue: '900' },
  warn: { color: 'yellow', hue: '100' },
  background: 'red'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
