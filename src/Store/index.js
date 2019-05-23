import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import * as reducerIndex from '@/Reducer/index'
import * as reducerWXSign from '@/Reducer/wxsign'

const middleware = routerMiddleware(browserHistory)
export const store = createStore(
  combineReducers({
    ...reducerIndex,
    ...reducerWXSign,
    routing: routerReducer
  }),
  applyMiddleware(middleware, thunk)
)
export const history = syncHistoryWithStore(browserHistory, store)
