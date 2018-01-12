import axios from 'axios'
import qs from 'qs'
import env from '../../build/env'

let util = {}

util.title = function (title) {
  title = title || ' '
  window.document.title = title
}

// 根据当前webpack的环境,来决定请求接口前缀字段
const ajaxUrl = env === 'development' ? '/api' : env === 'production' ? '/ydyproxy' : ''

util.ajax = axios.create({
  withCredentials: true,
  baseURL: ajaxUrl,
  timeout: 10000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  transformRequest: [
    data => { return qs.stringify(data) }
  ]
})

export default util
