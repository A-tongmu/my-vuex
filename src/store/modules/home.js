// initial state
const state = () => ({
  all: 10
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setProducts (state, num) {
    console.log('store');
    state.all+=num
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
