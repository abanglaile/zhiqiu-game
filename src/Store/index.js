import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import * as reducerIndex from '@/Reducer/index'
import * as reducerWXSign from '@/Reducer/wxsign'
import * as reducerUser from '@/Reducer/user'

const middleware = routerMiddleware(browserHistory)
export const store = createStore(
  combineReducers({
    ...reducerIndex,
    ...reducerWXSign,
    ...reducerUser,
    routing: routerReducer
  }),
  applyMiddleware(middleware, thunk)
)
export const history = syncHistoryWithStore(browserHistory, store)
