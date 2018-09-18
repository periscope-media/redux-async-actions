import redux from 'redux'
import { todos } from './reducers'

import stateData from './initialState'

const {
  createStore,
  combineReducers,
  applyMiddleware
} = redux

const storeFactory = (initialState = stateData) =>
  applyMiddleware()(createStore)(combineReducers({
    todos
  }), initialState)

export default storeFactory