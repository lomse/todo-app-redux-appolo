import { combineReducers } from 'redux'
import todoReducer from './todos'
import notificationReducer from './notification'

export default combineReducers({
  todos: todoReducer,
  notification: notificationReducer
})
