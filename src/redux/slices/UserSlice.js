import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        userList: [],
        isLoading: false,

    },
    reducers: {
        addUser: (state, actions) => {
            state.userList.push(actions.payload)
        },
        updateUser: (state, actions) => {

        }

    }
})


export const { addUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer