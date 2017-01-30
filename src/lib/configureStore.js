import { createStore, applyMiddleware } from 'redux'
import rootReducer from './combinedReducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger({ collapsed: true })
const middleware = [thunk]

export default function configureStore (initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    )
}
