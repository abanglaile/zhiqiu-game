import Immutable from 'immutable'

// sign
const defaulatUserData = Immutable.fromJS({
  room_id: null,
  isRoomSelected: false
})

export const UserData = (state = defaulatUserData, action = {}) => {
  switch (action.type) {
    case 'ENTER_ROOM':
      return state.set('isRoomSelected', true)
        .set('room_id', action.id)
    default:
      return state
  }
}
