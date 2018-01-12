// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store'
import api from './libs/api'
import util from './libs/util'
import './libs/flexible'
import './styles/base.styl'

Vue.prototype.$api = api
Vue.prototype.$http = util.ajax
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: {App}
})
