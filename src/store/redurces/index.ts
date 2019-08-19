import { combineReducers } from 'redux'
import test from './test'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  test,
  todos,
  visibilityFilter
})