import { combineReducers } from 'redux'
import moviesReducer from './movies'

const reducer = combineReducers({
  moviesReducer,
})

export default reducer
