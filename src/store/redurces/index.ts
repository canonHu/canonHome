import { combineReducers } from 'redux'
import test from './test'
import home from './home'
import edit from './edit'

export default combineReducers({
  test,
  home,
  edit
})