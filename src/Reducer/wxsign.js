import Immutable from 'immutable'

// sign
const defaulatAuthData = Immutable.fromJS({
  token: null,
  nickname: null,
  imgurl: null,
  userid: 1,
  student_name: null,
  class_name: null,
  hascode: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  wx_info: null,
  sclgroup: []
})

export const AuthData = (state = defaulatAuthData, action = {}) => {
  let obj = null
  switch (action.type) {
    case 'LOGOUT_WX_USER':
      return state.set('isAuthenticated', false)
        .set('nickname', null)
        .set('userid', null)
        .set('imgurl', null)
        .set('hascode', null)
        .set('statusText', 'You have been successfully logged out.')
    case 'GET_WX_USERINFO_SUCCESS':
      // console.log('action.token:', action.token)
      obj = JSON.parse(action.token)
      console.log('userid:', obj.userid)
      console.log('realname:', obj.realname)
      return state.set('isAuthenticating', false)
        .set('isAuthenticated', true)
        .set('userid', obj.userid)
        .set('nickname', obj.nickname)
        .set('imgurl', obj.imgurl)
        .set('realname', obj.realname)
    case 'SAVE_TEMP_WX_INFO':
      return state.set('wx_info', Immutable.fromJS(action.wx_info))
    case 'GET_SCHOOL_GROUP':
      return state.set('sclgroup', Immutable.fromJS(action.json))
    default:
      return state
  }
}
