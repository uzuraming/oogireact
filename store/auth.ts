import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action){
            return  Object.assign({}, state, action.payload);
        },
        clearAuth(state){
            return Object.assign({}, state, null);
        }
    }
})

export const authReducer = authSlice.reducer
export const { setAuth, clearAuth } = authSlice.actions
