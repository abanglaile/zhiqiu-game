import { push } from 'react-router-redux'

import config from '../utils/Config'

// let target = process.server_url
let target = config.server_url

// // Sign by Wechat
export const getWxUserInfoSuccess = (token) => {
  localStorage.setItem('token', token)
  return {
    type: 'GET_WX_USERINFO_SUCCESS',
    token: token
  }
}
// const saveTempWxInfo = (wxInfo) => {
//   return {
//     type: 'SAVE_TEMP_WX_INFO',
//     wxInfo
//   }
// }
//
// export const getWxAuth = (code, state) => {
//   let url = target + '/get_wx_auth'
//   return (dispatch) => {
//     // console.log(JSON.stringify(code))
//     return axios.get(url, {
//       params: {
//         code,
//         state
//       }
//     }).then((response) => {
//       if (response.data.newuser) {
//         // console.log('newuser')
//         // console.log('wxInfo:'+JSON.stringify(response.data.wx_info))
//         dispatch(saveTempWxInfo(response.data.wx_info))
//       } else {
//         // console.log('olduser')
//         dispatch(getWxUserInfoSuccess(JSON.stringify(response.data.user_info)))
//         window.location.href = 'http://www.zhiqiu.pro' + state
//       }
//     }).catch((error) => {
//       alert('error getWxAuth' + JSON.stringify(error))
//     })
//   }
// }
//
// export const logoutwx = () => {
//   // localStorage.removeItem('token')
//   return {
//     type: 'LOGOUT_WX_USER'
//   }
// }
//
// export const logoutwxAndRedirect = () => {
//   return (dispatch) => {
//     dispatch(logoutwx())
//     dispatch(push('/mobile-reveal/login'))
//   }
// }
