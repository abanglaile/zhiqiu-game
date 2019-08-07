import { push } from 'react-router-redux'

let target = process.server_url

// // Sign by Wechat
export const getWxUserInfoSuccess = (token) => {
  localStorage.setItem('token', token)
  return {
    type: 'GET_WX_USERINFO_SUCCESS',
    token: token
  }
}
