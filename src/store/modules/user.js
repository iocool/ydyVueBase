// import Cookies from 'js-cookie'

const user = {
  state: {
    userInfo: {
      userName: 'textaa',
      userId: 'aa123id'
    }
  },
  mutations: {
    // 用户信息
    getUserInfo (state, info) {
      state.userInfo.userName = info.username
      state.userInfo.userId = info.id
    }
  }
}

export default user
