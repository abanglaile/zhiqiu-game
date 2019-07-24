import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import '@/Assets/icon/iconfont.css'
// import '@/Assets/sass/main.scss'

import { store, history } from '@/Store/index'
import Routes from '@/Router/index'
import { getWxUserInfoSuccess } from '@/Action/wxsign'

let token = localStorage.getItem('token')
if (token !== null) {
  store.dispatch(getWxUserInfoSuccess(token))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { Routes }
    </Router>
  </Provider>,
  document.getElementById('app')
)
