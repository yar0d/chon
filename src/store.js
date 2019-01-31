import Vue from 'vue'
import Vuex from 'vuex'
import pkg from '../package.json'
import foods from '@/data/foods1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: (pkg || {}).version || 2,
    foods
  },
  getters: {
    foods: state => { return state.foods || [] },
    version: state => { return state.version }
  },
  mutations: { },
  actions: { }
})
