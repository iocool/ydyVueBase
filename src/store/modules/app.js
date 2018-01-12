// import Vue from 'vue'

const app = {
  state: {
    // 示例
    customerId: 'AABB123' // 用户id
  },
  mutations: {
    setCustomerId (state, id) {
      state.customerId = id
    }
  }
}

export default app
