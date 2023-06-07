import { current, createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import type { RootState } from '@/store';

// // create slice

// const name = 'users';
// const initialState = createInitialState();
// const reducers = createReducers();
// const extraActions = createExtraActions();
// const extraReducers = createExtraReducers();
// export const userSlice = createSlice({ name, initialState, reducers, extraReducers });

// // exports

// export const userActions = { ...userSlice.actions, ...extraActions }; // export const { logout } = userSlice.actions;
// export const selectUserState = (state: RootState) => { state.user.data, state.user.isLoading, state.user.isError, state.user.error };
// export default userSlice.reducer; //export const userReducer = userSlice.reducer;

// // implementation

// function createInitialState() {
//     return {
//         data: User[] = new Array<User>(),
//         isLoading: false,
//         isError: false,
//         error: null
//     }
// }

// function createReducers() {
//     return {
//         logout
//     };

//     function logout(state: any) {
//         state.user = null;
//     }
// }

// function createExtraActions() {
//     const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

//     return {
//         login: login()
//     };

//     function login() {
//         return createAsyncThunk( `${name}/login`, async () => await fetch(`${baseUrl}/dddd`) );
//     }
// }

// function createExtraReducers() {
//     return (builder: any) => {
//         login();

//         function login() {
//             var { pending, fulfilled, rejected } = extraActions.login;
//             builder
//                 .addCase(pending, (state: any) => {
//                     state.error = null;
//                 })
//                 .addCase(fulfilled, (state: any, action: any) => {
//                     const user = action.payload;
//                     state.user = user;
//                 })
//                 .addCase(rejected, (state: any, action: any) => {
//                     state.error = action.error;
//                 });
//         }
//     };
// }

export interface UserState {
    data: User[];
    isLoading: boolean;
    isError: boolean;
    error: string;
}

const initialState: UserState = {
    data: [],
    isLoading: false,
    isError: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        addUser: (state, action) => {
            const user = action.payload;
            state.data.push(user);
        },

        UpdateUser: (state, action) => {
            const { id, name, email } = action.payload;
            // const user = state.data.find(x => x.id === id); // const idx = state.data.findIndex(x => x.id === id);
            // if (user) { // if (idx >= 0) {
            //     user.name = name;//     state.data[idx].name = name;
            //     user.email = email; //     state.data[idx].email = email;
            // }
        },

        deleteUser: (state, action) => {
            const { id } = action.payload;
            // console.log(current(state))
            // return state.data.filter(x => x.id !== id);
            // state.data = state.data.filter(x => x.id !== id);
            //state.data.splice(state.data.findIndex(x => x.id === id), 1);
        },

    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         console.log('HYDRATE', state, action.payload);
    //         return {
    //             ...state,
    //             ...action.payload.user,
    //         };
    //     },
    // },
});

export const { addUser, UpdateUser, deleteUser, } = userSlice.actions;
export const selectUserState = (state: RootState) => {
    state.user.data, state.user.isLoading, state.user.isError, state.user.error
};
export default userSlice.reducer;
