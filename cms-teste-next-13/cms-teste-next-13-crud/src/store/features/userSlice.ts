import { current, createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";
import { User } from "@/models/user";
import type { RootState } from '@/store';

// export const createUser = createAsyncThunk(
//     "createUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const url = "https://641dd63d945125fff3d75742.mockapi.io/crud";
//             const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) });
//             const result = await response.json();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// export const showUser = createAsyncThunk(
//     "showUser",
//     async (args, { rejectWithValue }) => {
//         try {
//             const url = "https://641dd63d945125fff3d75742.mockapi.io/crud";
//             const response = await fetch(url);
//             const result = await response.json();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// export const removeUser = createAsyncThunk(
//     "deleteUser",
//     async (id, { rejectWithValue }) => {
//         try {
//             const url = `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`;
//             const response = await fetch(url, { method: "DELETE" });
//             const result = await response.json();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// export const updateUser = createAsyncThunk(
//     "updateUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const url = `https://641dd63d945125fff3d75742.mockapi.io/crud/${data}`;
//             const response = await fetch(url, { method: "PUT", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) });
//             const result = await response.json();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

export interface UserState {
    // data: User[];
    // search: User[];
    // isLoading: boolean;
    // isError: boolean;
    // error: string;
}

const initialState: UserState = {
    // data: [],
    // search: [],
    // isLoading: false,
    // isError: false,
    // error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        // searchUser: (state, action) => {
        //     //console.log(action.payload);
        //     //state.search = action.payload;
        // },

        // addUser: (state, action) => {
        //     const user = action.payload;
        //     state.data.push(user);
        // },

        // UpdateUser: (state, action) => {
        //     const { id, name, email } = action.payload;
        //     const user = state.data.find(x => x.id === id); // const idx = state.data.findIndex(x => x.id === id);
        //     if (user) { // if (idx >= 0) {
        //         user.name = name;//     state.data[idx].name = name;
        //         user.email = email; //     state.data[idx].email = email;
        //     }
        // },

        // deleteUser: (state, action) => {
        //     const { id } = action.payload;
        //     // console.log(current(state))
        //     // return state.data.filter(x => x.id !== id);
        //     // state.data = state.data.filter(x => x.id !== id);
        //     state.data.splice(state.data.findIndex(x => x.id === id), 1);
        // },

    },

    // extraReducers: {
    //     [createUser.pending.toString()]: (state) => {
    //         state.isLoading = true;
    //         state.isError = false;
    //         state.error = '';
    //         return ""
    //     },
    //     [createUser.fulfilled.toString()]: (state, action: PayloadAction<User>) => {
    //         state.isLoading = false;
    //         state.data.push(action.payload);
    //     },
    //     [createUser.rejected.toString()]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.isError = true;
    //         state.error = action.payload;
    //     },
    //     [showUser.pending.toString()]: (state) => {
    //         state.isLoading = true;
    //         state.isError = false;
    //         state.error = '';
    //     },
    //     [showUser.fulfilled.toString()]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     [showUser.rejected.toString()]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.isError = true;
    //         state.error = action.payload;
    //     },
    //     [removeUser.pending.toString()]: (state) => {
    //         state.isLoading = true;
    //         state.isError = false;
    //         state.error = '';
    //     },
    //     [removeUser.fulfilled.toString()]: (state, action: PayloadAction<User>) => {
    //         state.isLoading = false;
    //         const { id } = action.payload;
    //         if (id) state.data = state.data.filter(u => u.id !== id);
    //     },
    //     [removeUser.rejected.toString()]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.isError = true;
    //         state.error = action.payload;
    //     },
    //     [updateUser.pending.toString()]: (state) => {
    //         state.isLoading = true;
    //         state.isError = false;
    //         state.error = '';
    //     },
    //     [updateUser.fulfilled.toString()]: (state, action: PayloadAction<User>) => {
    //         state.isLoading = false;
    //         state.data = state.data.map(user => user.id === action.payload.id ? action.payload : user);
    //     },
    //     [updateUser.rejected.toString()]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.isError = true;
    //         state.error = action.payload;
    //     },
    // },

});

export const { } = userSlice.actions; //  searchUser,addUser, UpdateUser, deleteUser,
export const selectUserState = (state: RootState) => { }; // state.user.data, state.user.isLoading, state.user.isError, state.user.error
export default userSlice.reducer;


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
