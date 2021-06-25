import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    userSelect: {},
    loading: false
};


export const setUsers = createAsyncThunk("SETUSERS", () => {
    return axios.get("/api/users").then((res) => res.data);
});


export const userSelect = createAsyncThunk("USERSELECTMOVIES", (userId) => {
    return axios.get(`/api/users/${userId}`).then((res) => res.data);
});

const usersReducer = createReducer(initialState, {
    [setUsers.fulfilled]: (state, action) => {
        state.users = action.payload;
    },
    [userSelect.pending]: (state, action) => {state.loading = true},
    [userSelect.fulfilled]: (state, action) => {
        state.userSelect = action.payload;
        state.loading  = false;
    },
});

export default usersReducer;
