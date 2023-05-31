import { configureStore, } from '@reduxjs/toolkit';
// import { createListenerMiddleware, } from '@reduxjs/toolkit';
// import { ThunkAction, } from '@reduxjs/toolkit';
// import { Action } from 'redux';
import { setupListeners } from '@reduxjs/toolkit/query'
import logger from "redux-logger";
import thunk from "redux-thunk";
// import thunkMiddleware from 'redux-thunk'
// import { createWrapper, Context } from "next-redux-wrapper";
// import { composeWithDevTools } from "redux-devtools-extension";

import { userSlice } from "@/store/features/userSlice"; // userReducer

// const listenerMiddleware = createListenerMiddleware();
// listenerMiddleware.startListening({ actionCreator: todoAdded, })

// middleware: composeWithDevTools(applyMiddleware(...middleware)),
//const middleware = [thunkMiddleware];
const middleware = [thunk];
//const middleware = [thunk, logger];

export const store = configureStore({
    reducer: {
        user: userSlice.reducer, //[userSlice.name]: userSlice.reducer, 
    },
    // middleware: middleware,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(middleware),
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware), 
    // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ thunk: false }).prepend(listenerMiddleware),
    devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

// export const makeStore = (context: Context) => store; //export const makeStore = () => store;

// export type RootStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<RootStore['getState']>;
// export type RootDispatch = RootStore['dispatch'];
// export type RootThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

// export const wrapper = createWrapper<RootStore>(makeStore, { debug: true }); //export const wrapper = createWrapper(makeStore);
