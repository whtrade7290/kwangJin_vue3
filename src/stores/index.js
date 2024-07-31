import { createStore } from 'vuex'
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'

export default createStore({
  state: {
    bootstrap,
    sidemenu: {}
  },
  getters: {},
  actions: {
    FETCH_SIDEMENU({ commit }, sidemenu) {
      console.log('sidemenu1: ', sidemenu)
      commit('SET_SIDEMENU', sidemenu)
    }
  },
  mutations: {
    SET_SIDEMENU(state, sidemenu) {
      console.log('sidemenu2: ', sidemenu)
      state.sidemenu = sidemenu
    }
  }
})
