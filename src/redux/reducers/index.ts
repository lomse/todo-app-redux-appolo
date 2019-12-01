import { combineReducers } from 'redux'
import todoReducer from './todosReducer'
// import notificationReducer from './notificationReducer'

export default combineReducers({
  todos: todoReducer
  // notification: notificationReducer
})
