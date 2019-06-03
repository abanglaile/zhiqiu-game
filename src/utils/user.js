import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import config from './Config'

let appid = config.appid
let redirectURI = config.redirect_uri

export const requireEnterRoom = UserAuthWrapper({
  authSelector: state => {
    // alert('state:'+JSON.stringify(state))
    return state.UserData
  },
  predicate: UserData => {
    // alert('AuthData:'+JSON.stringify(AuthData))
    return UserData.get('isRoomSelected')
  },
  failureRedirectPath: (state, ownProps) => {
    // console.log('ownProps.location :', ownProps.location)
    return '/zhiqiu-game/room'
  },
  redirectAction: routerActions.push,
  wrapperDisplayName: 'UserIsEnterRoom'
})
