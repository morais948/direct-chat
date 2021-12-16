import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './states/counter'
import useReducer from './states/user'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
  },
})