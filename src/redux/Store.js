import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/UserSlice'

export const Store = configureStore({
    reducer: {
        user: UserReducer
    }
})