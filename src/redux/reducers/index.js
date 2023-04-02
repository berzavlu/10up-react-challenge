import { combineReducers } from 'redux'
import moviesReducer from './movies'
import userReducer from './user'

const reducer = combineReducers({
  moviesReducer,
  userReducer
})

export default reducer
