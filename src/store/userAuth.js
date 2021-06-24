import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userCreated : false,
    isLogin: false,
    userLog: {}
};


export const register = createAsyncThunk("REGISTER", (body, thunkAPI) => {
    return axios
        .post("/api/auth/register", body)
        .then((user) => user.data)
});

export const login = createAsyncThunk("LOGIN", (body, thunkAPI) => {
    return axios.post("/api/auth/login", body).then((user) => user.data);
});

export const logout = createAsyncThunk("LOGOUT", (body, thunkAPI) => {
    return axios.get("/api/auth/logout").then((user) => user.data);
});

export const checkUser = createAction('CHECKUSER')


const userAuthReducer = createReducer(initialState, {
    [register.fulfilled] : (state, action) => {state.userCreated = true},
    [login.fulfilled] : (state, action) => {state.isLogin = true; state.userLog = action.payload},
    [logout.fulfilled] : (state, action) => {state.isLogin = false; state.userLog = {}},
    [checkUser] : (state, action) => {state.isLogin = true;
    state.userLog = action.payload;}
})


export default userAuthReducer;
