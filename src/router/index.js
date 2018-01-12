import Vue from 'vue'
import Router from 'vue-router'
import { routers } from './router'
import Util from '../libs/util'

Vue.use(Router)

const RouterConfig = {
  routes: routers
}

export const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  // 页面加载的动画
  // Todo
  Util.title(to.meta.title)
  // 是否登录
  // Todo
  next()
})

router.afterEach((to) => {
  // 页面加载结束的动画
  // Todo
  window.scrollTo(0, 0)
})
