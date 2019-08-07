import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

let appid = process.appid
let redirectURI = process.redirect_uri
let roomURL = process.room_url

export const requireEnterRoom = UserAuthWrapper({
  authSelector: state => {
    // alert('state:'+JSON.stringify(state))
    return state.RoomData
  },
  predicate: RoomData => {
    // alert('AuthData:'+JSON.stringify(AuthData))
    return RoomData.get('isRoomSelected')
  },
  failureRedirectPath: (state, ownProps) => {
    // console.log('ownProps.location :', ownProps.location)
    return roomURL + '?redirect=' + ownProps.location.pathname
  },
  redirectAction: routerActions.push,
  wrapperDisplayName: 'UserIsEnterRoom'
})
