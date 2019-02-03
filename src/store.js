import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    loggedIn(state, payload) {
      state.user = payload.user
    },
    loggedOut(state) {
      state.user = null
    }
  },
  actions: {

  },
})
