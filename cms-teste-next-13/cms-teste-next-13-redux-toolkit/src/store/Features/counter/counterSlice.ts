'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const post = { title: 'lorem', body: 'ipsum' }

const getCounters = createAsyncThunk('counter/getCounter',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json())
        return res
    }
)

// const addPost = createAsyncThunk(
//     'posts/addPost',
//     async (post, { rejectWithValue }) => {
//         try {
//             const response = await fetch(
//                 'https://jsonplaceholder.typicode.com/posts',
//                 {
//                     method: 'POST',
//                     body: JSON.stringify(post),
//                     header: { 'Content-Type': 'application/json'},
//                 }
//             )
//             const data = await response.json()
//             return data
//         } catch (err) {
//             // You can choose to use the message attached to err or write a custom error
//             return rejectWithValue('Opps there seems to be an error')
//         }
//     }
// )


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },

    },
    // extraReducers: {},
    // extraReducers: {
    //     [getCounters.pending]: (state) => {
    //         state.loading = true
    //     },
    //     [getCounters.fulfilled]: (state, { payload }) => {
    //         state.loading = false
    //         state.entities = payload
    //     },
    //     [getCounters.rejected]: (state) => {
    //         state.loading = false
    //     },
    // },
    // extraReducers: {
    //     [addPost.rejected]: (state, action) => {
    //       // returns 'Opps there seems to be an error'
    //       console.log(action.payload) 
    //     }
    //   }
})

export const {
    increment,
    decrement,
    incrementByAmount
} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
//export const counterReducer = counterSlice.reducer