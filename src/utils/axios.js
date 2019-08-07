import axios from 'axios'

let instance = axios.create({
    baseURL: process.server_url,
    timeout: 5000,
    withCredentials: true
})

instance.defaults.headers.post['Content-Type'] = 'application/json' // 配置请求头
// instance.defaults.headers.common['Accept'] = 'application/json' // 配置请求头

// POST传参序列化(添加请求拦截器)
// instance.interceptors.request.use(
//   (config) => {
//     // 在发送请求之前做某件事
//     return config
//   },
//   (error) => {
//     console.log('错误的传参') // 应该修改为element的通用性通知
//     return Promise.reject(error)
//   }
// )

// 返回状态判断(添加响应拦截器)
instance.interceptors.response.use(
    (res) => {
        // console.log(res)
        // 对响应数据做些事
        // if (!res.data.success) {
        //   return Promise.resolve(res)
        // }
        return res
    },
    (error) => {
        // console.log(error.response)
        switch (error.response.status) {
            case 401:
                break
            case 500:
                break
            default:
                break
        }
        return Promise.reject(error.response)
    }
)

export default instance
