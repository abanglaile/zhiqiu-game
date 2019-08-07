import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import { requireAuthentication, requireEnterRoom } from '../utils'
import { store } from '@/Store/index'

import Bone from '@/Component/foundation/bone'
import Room from '@/Component/room/main'
import Course from '@/Component/course/'
import History from '@/Component/course/history'
import Account from '@/Component/account/main'
import Rank from '@/Component/rank/main'

import Bonesub from '@/Component/foundation/bonesub'
import Plus from '@/Component/plus/main'

let appid = process.appid
let redirectURI = process.redirect_uri

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
  <div>
    <Redirect from="/" to="/zhiqiu-game/bone"></Redirect>
    <Route path="/zhiqiu-game/bone" component={requireAuthentication(Bone)}>
      <IndexRoute component={requireEnterRoom(Course)} />
      <Route path="room" component={Room} />
      <Route path="history" component={requireEnterRoom(History)} />
      <Route path="rank" component={requireEnterRoom(Rank)} />
      <Route path="account" component={requireEnterRoom(Account)} />
    </Route>
    <Route path="/zhiqiu-game/bonesub" component={requireAuthentication(Bonesub)}>
      <Route path="plus" component={requireEnterRoom(Plus)} />
    </Route>
  </div>
)
// <Route path="/zhiqiu-game" component={requireAuthentication(Bone)}>
// <Route path="login" component={Room} onEnter={redirectToWechat} />

export default routes
