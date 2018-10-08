const home = {
  namespaced: true,
  state: {
    name: 'home',
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
}

export default home
