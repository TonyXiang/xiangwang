import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'xiangwang'
  },
  modules: {
    home
  }
})

export default store
