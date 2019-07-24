import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { connect } from 'react-redux'

import { requireAuthentication } from '../utils'
import { store } from '@/Store/index'
import config from '@/utils/Config'

import Bone from '@/Component/foundation/bone'

import Room from '@/Component/room/main'

import Course from '@/Component/course/'
import History from '@/Component/course/history'

import Account from '@/Component/account/main'

let appid = config.appid
let redirectURI = config.redirect_uri

// const redirectToWechat = (state) => {
//   let status = store.getState().AuthData.get('isAuthenticated')
//   const windowIfDefined = typeof window === 'undefined' ? null : window
//   if (windowIfDefined && !status) {
//     let redirectURL = state.location.pathname + state.location.search
//     windowIfDefined.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +
//     '&redirect_uri=' + redirectURI + '&response_type=code&scope=snsapi_userinfo&state=' + redirectURL + '#wechat_redirect'
//   }
// }

const routes = (
  <Route path="/zhiqiu-game" component={Bone}>
    <IndexRoute component={Course} />
    <Route path="room" component={Room} />
    <Route path="history" component={History} />
    <Route path="account" component={Account} />
  </Route>
)
// <Route path="/zhiqiu-game" component={requireAuthentication(Bone)}>
// <Route path="login" component={Room} onEnter={redirectToWechat} />

export default routes
