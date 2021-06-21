import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.common["Authorization"] = '21345';
// axios.defaults.headers.post["Content-Type"] =
//     "application/x-www-form-urlencoded";

const initialState = {};

export const register = createAsyncThunk("REGISTER", (body, thunkAPI) => {
    return axios
        .post("/api/auth/register", body)
        .then((user) => user.data);
});

const userAuthReducer = createReducer(initialState, {
    [register.fulfilled] : (state, action) => action.payload
})


export default userAuthReducer;
