import Immutable from 'immutable'

// sign
const defaultData = Immutable.fromJS({
  // room_id: null,
  // room_name: '',
  // isRoomSelected: false
})

export const UserData = (state = defaultData, action = {}) => {
  // switch (action.type) {
  //   case 'ENTER_ROOM':
  //     return state.set('isRoomSelected', true)
  //       .set('room_id', action.info.id)
  //       .set('room_name', action.info.name)
  //   default:
  //     return state
  // }
}
