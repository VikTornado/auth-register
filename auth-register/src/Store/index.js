import {configureStore} from "@reduxjs/toolkit";
import {useReducer} from "./Slices/UserSlice";

export const store = configureStore({
    reducer: {
        user: useReducer
    }
})