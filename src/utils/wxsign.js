import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

let appid = process.appid
let redirectURI = process.redirect_uri

export const requireAuthentication = UserAuthWrapper({
  authSelector: state => {
    // alert('state:'+JSON.stringify(state))
    return state.AuthData
  },
  predicate: AuthData => {
    // alert('AuthData:'+JSON.stringify(AuthData))
    return AuthData.get('isAuthenticated')
  },
  // failureRedirectPath: (state, ownProps) => {
  //   // console.log('ownProps.location.query.redirect :', ownProps.location.query.redirect)
  //   // return ownProps.location.pathname + ownProps.location.search
  //   // return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +
  //   // '&redirect_uri=' + redirectURI + '&response_type=code&scope=snsapi_userinfo&state=' + ownProps.location.query.redirect + '#wechat_redirect'
  // },
  // redirectAction: routerActions.push,
  redirectAction: (newLoc) => {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +
    '&redirect_uri=' + redirectURI + '&response_type=code&scope=snsapi_userinfo&state=' + newLoc.query.redirect + '#wechat_redirect'
  },
  wrapperDisplayName: 'UserIsJWTAuthenticated'
})
