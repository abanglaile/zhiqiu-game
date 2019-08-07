import { push } from 'react-router-redux'

let target = process.server_url

// User Action
// export const actionEnterRoom = (info) => {
//   localStorage.setItem('room_info', JSON.stringify(info))
//   return {
//     type: 'ENTER_ROOM',
//     info: info
//   }
// }

// export const apiGetRoom = () => {}

// export const apiEnterRoom = (info, redirect) => {
//   return (dispatch) => {
//     // 待补全选择房间成功后的跳转代码
//     dispatch(actionEnterRoom(info))
//     dispatch(push(redirect))
//   }
// }

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
