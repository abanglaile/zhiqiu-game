import { push } from 'react-router-redux'
import axios from 'axios'

let target = process.server_url

// User Action
export const actionEnterRoom = (info) => {
  return {
    type: 'ENTER_ROOM',
    info: info
  }
}

export const apiGetRoom = () => {
  let url = target + '/getVirtualroom'
  return (dispatch) => {
    return axios.get(url).then((response) => {
      // console.log(response.data)
      dispatch({
        type: 'SET_ROOM',
        data: response.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}

export const apiEnterRoom = (info, user_id, redirect) => {
  let url = target + '/addVirtualroomSign'
  return (dispatch) => {
    const data = {
      'virtual_room_id': info.id,
      user_id
    }
    return axios.post(url, data).then((response) => {
      console.log(response)
      localStorage.setItem('room_info', JSON.stringify(info))
      dispatch(actionEnterRoom(info))
      dispatch(push(redirect))
    }).catch((error) => {
      console.log(error)
    })
  }
}
