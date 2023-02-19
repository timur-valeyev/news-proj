import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postsReducer from './slices/postsSlice'
import commentsReducer from './slices/commentsSlice'
import authReducer from './slices/authSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const reducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
export const persistor = persistStore(store)

