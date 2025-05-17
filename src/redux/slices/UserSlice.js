import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        userList: [],
        isLoading: false,
        loginData: undefined

    },
    reducers: {
        addUser: (state, actions) => {
            state.userList.push(actions.payload)
        },
        deleteUser: (state, actions) => {
            state.userList = state.userList.filter(u => u.id !== actions.payload)
        },
        updateUser: (state, actions) => {
            let index = state.userList.findIndex(u => u.id === actions.payload.id);
            state.userList[index] = actions.payload.data
        },
        storeLoginData: (state, actions) => {
            state.loginData = actions.payload
        }

    }
})


export const { addUser, updateUser, deleteUser, storeLoginData } = UserSlice.actions;
export default UserSlice.reducer