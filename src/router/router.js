import index from '../views/index.vue'

const home = r => require.ensure([], () => r(require('../views/home.vue')), 'home')
const login = r => require.ensure([], () => r(require('../views/login/login.vue')), 'login')


export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: login
}

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: index,
  children: [
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
}

export const appRouter = [
  {
    path: '/demo',
    name: 'demo',
    title: '测试',
    component: home,
    children: [
      {
        path: 'demo',
        name: 'demoChild',
        title: '测试子元素',
        component: home
      }
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  ...appRouter
]
