import {combineReducers, configureStore} from '@reduxjs/toolkit'
import postsReducer from "./slices/postsSlice";
import commentsReducer from './slices/commentsSlice'

const reducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
