import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import userAuthReducer from "./userAuth";

const initialState = {
    users: [],
    userSelect: {}
};


export const setUsers = createAsyncThunk("SETUSERS", () => {
    return axios.get("/api/users").then((res) => res.data);
});

// export const userSelect = createAction("USERSELECT");

export const userSelect = createAsyncThunk("USERSELECTMOVIES", (userId) => {
    return axios.get(`/api/users/${userId}`).then((res) => res.data);
});

const usersReducer = createReducer(initialState, {
    [setUsers.fulfilled]: (state, action) => {
        state.users = action.payload;
    },
    [userSelect.fulfilled]: (state, action) => {
        state.userSelect = action.payload;
    },
});

export default usersReducer;
