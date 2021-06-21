import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userCreated : false,
    isLogin: false,
    userLogin: {}
};


export const register = createAsyncThunk("REGISTER", (body, thunkAPI) => {
    return axios
        .post("/api/auth/register", body)
        .then((user) => user.data)
});

export const login = createAsyncThunk("LOGIN", (body, thunkAPI) => {
    return axios.post("/api/auth/login", body).then((user) => user.data);
});

const userAuthReducer = createReducer(initialState, {
    [register.fulfilled] : (state, action) => {state.userCreated = true},
    [login.fulfilled] : (state, action) => {state.isLogin = true}
})


export default userAuthReducer;
