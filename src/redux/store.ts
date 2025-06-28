import { configureStore } from '@reduxjs/toolkit'
import shopyReducer from './shopySlice'

export const store = configureStore({
  reducer: {
    shopy: shopyReducer,
  },
})

