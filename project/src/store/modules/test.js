// 1.存放数据
const state = {
  count: 1
}
// 2.修改数据
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
// 3.提交数据
const actions = {
  increment: ({commit}) => {
    commit('increment')
  },
  decrement: ({commit}) => {
    commit('decrement')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
