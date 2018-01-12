import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app' // app的相关数据
import user from './modules/user' // 用户的相关数据

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app, user
  }
})

export default store
