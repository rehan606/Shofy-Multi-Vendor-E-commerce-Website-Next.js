import { configureStore } from '@reduxjs/toolkit'
import shopyReducer from './shopySlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, shopyReducer)

export const store = configureStore({
  reducer: {
    shopy: persistedReducer,
  },
});

// eslint-disable-next-line prefer-const
export let persistor = persistStore(store);

