# 移动端Vue脚手架项目

> 根据目前的大多数项目需求,整合的项目初始化框架工具

结构目录

```
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── env.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── icon
│   │   │   └── login_out.png
│   │   ├── img
│   │   │   └── shouye.png
│   │   └── logo.png
│   ├── components
│   ├── libs
│   │   ├── api.js
│   │   ├── flexible.js
│   │   └── util.js
│   ├── main.js
│   ├── router
│   │   ├── index.js
│   │   └── router.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   │       ├── app.js
│   │       └── user.js
│   ├── styles
│   │   ├── base.styl
│   │   └── common.styl
│   └── views
│       ├── home.styl
│       ├── home.vue
│       ├── index.vue
│       └── login
│           ├── login.styl
│           └── login.vue
├── static
└── yarn.lock

15 directories, 37 files

```

## 结构目录说明
开发文件在`src`目录下,以下是目录说明
#### libs

> 资源文件夹,一些js资源可以在这里添加
- `api.js` 文件主要是后台请求接口
-  `flexible.js` 文件是页面根据当前设备尺寸,动态更改 `html` 的 fontsize 属性,默认750的设计图,如设计图修改,需修改该文件
- `util.js` 文件包含了项目的一些基本配置,如 页面标题默认,开发环境与生产环境的不同环境下的请求接口添加字段

#### router

> 系统的页面路由
- `index.js` 是系统路由的默认启动文件
- `router.js` 如需添加路由,修改该文件即可

#### store

> 系统的状态管理文件夹
- `index.js` vuex的主文件
- modules 目录下的 `app.js` 和 `user.js` 文件,分别是app和用户的状态管理文件

#### style

> 系统的样式,使用sylus书写,也可以选择 less ,sass 等,但是需要下载相应的包
- `base.styl` 文件是页面样式的基础文件,修改body的背景色及默认宽度,可修改该文件
- `common.styl` 文件是一些页面的公用样式类名,一些样式变量可在该文件书写

#### view

> 页面视图文件夹
- `index.vue` 页面主页,后期如需要加入一些公用的页面菜单,可修改该文件,一般不用管
- `home.vue`  页面主页中填充的首页,首页代码在该页书写
- 其他的文件以 `.styl` 结尾的是样式文件
## 构建步骤

``` bash
# install dependencies
npm install or yarn install

# serve with hot reload at localhost:3000
npm run dev or yarn dev  // 如需修改启动端口及ip地址,请修改 config 文件夹下的 index.js 文件

# build for production with minification
npm run build or yarn build
```

