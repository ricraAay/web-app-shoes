import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      $_telegram: null
    }
  },
  mutations: {
    setTelegram(state, payload) {
      state.$_telegram = payload
    }
  },
  actions: {
  },
  getters: {
    telegram(state) {
      return state.$_telegram
    }
  },
  modules: {
  }
})