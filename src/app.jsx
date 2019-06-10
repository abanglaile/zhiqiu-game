import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import 'antd-mobile/dist/antd-mobile.css'
import 'antd/dist/antd.css'
import '@/Assets/icon/iconfont.css'
import '@/Assets/sass/main.scss'

import { store, history } from '@/Store/index'
import Routes from '@/Router/index'
import { getWxUserInfoSuccess } from '@/Action/wxsign'
import { actionEnterRoom } from '@/Action/user'

let token = JSON.stringify({
  'userid': '4e1845e0644711e98a720fd6f7c4240e',
  'nickname': '失心迦兰',
  'imgurl': 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLPxwbTiaswo2uS0hz54JiaSaPbK4MYDLmfBQxkSDosiaQcHTmuFJSN9Bk1R40Vg3GFI9j34bGp7ic83g/132',
  'realname': '吉'
})
// let token = localStorage.getItem('token')
if (token !== null) {
  store.dispatch(getWxUserInfoSuccess(token))
}
let room = localStorage.getItem('room_id')
if (room !== null) {
  store.dispatch(actionEnterRoom(room))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { Routes }
    </Router>
  </Provider>,
  document.getElementById('app')
)
