'use client'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { pokemonApi } from '@/services/pokemon'
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        // posts: postsReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
