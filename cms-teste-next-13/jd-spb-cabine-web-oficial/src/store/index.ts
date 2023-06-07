import { configureStore, createListenerMiddleware, } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import logger from "redux-logger";
import thunk from "redux-thunk"; // thunkMiddleware

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

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
