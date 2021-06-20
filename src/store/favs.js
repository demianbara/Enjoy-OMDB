import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const setFavMovie = createAction('SETFAVMOVIE')

const favReducer = createReducer(initialState, {
    [setFavMovie]: (state, action) => {state.push(action.payload)}
})

export default favReducer