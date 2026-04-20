//axios基础的封装
//这个就是前端调后端url数据的工具类，一般都是一样的，
//使用时。定义接口在apis文件中。

import axios from 'axios'
// import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// import { useUserStore } from '@/stores/user'



// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://localhost:8080',   //基url
  timeout: 5000
})

//拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示-登录时，只有在状态码为200时才不会拦截
  // ElMessage({
  //   type: 'warning',
  //   message: '数据加载有错误'
  // })
  return Promise.reject(e)
})


export default httpInstance