import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'

let middleware = applyMiddleware(thunk)

if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(middleware)
}

const store = createStore(
  reducer,
  middleware
)

export default store
