import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import * as reducerIndex from '@/Reducer/index'
import * as reducerWXSign from '@/Reducer/wxsign'
import * as reducerUser from '@/Reducer/user'
import * as reducerRoom from '@/Reducer/room'

const middleware = routerMiddleware(browserHistory)
export const store = createStore(
  combineReducers({
    ...reducerIndex,
    ...reducerWXSign,
    // ...reducerUser,
    ...reducerRoom,
    routing: routerReducer
  }),
  applyMiddleware(middleware, thunk)
)
export const history = syncHistoryWithStore(browserHistory, store)
