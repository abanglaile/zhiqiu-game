import Immutable from 'immutable'

// template
const defaulteDemoState = Immutable.fromJS({
  bool: true,
  number: 0,
  json: { prop: 'none' }
})

export const gameData = (state = defaulteDemoState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_DEMO_JSON':
      return state.set('json', action.json)
    case 'GET_ONLINE_TASKLOG':
      return state.set('online_task', action.json)
    default:
      return state
  }
}
