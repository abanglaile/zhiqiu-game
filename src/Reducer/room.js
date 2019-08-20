import Immutable from 'immutable'

// sign
const defaulatData = Immutable.fromJS({
  rooms: [],
  room: { admin: {} },
  room_id: null,
  room_name: '',
  isRoomSelected: false
})

export const RoomData = (state = defaulatData, action = {}) => {
  switch (action.type) {
    case 'SET_ROOM':
      return state.set('room', action.data)
    case 'SET_ROOMS':
      return state.set('rooms', action.data)
    case 'ENTER_ROOM':
      return state.set('isRoomSelected', true)
        .set('room_id', action.info.id)
        .set('room_name', action.info.name)
    default:
      return state
  }
}
