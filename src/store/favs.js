import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    favorites: [],
    toggleFav: false,
}

export const setFavMovie = createAsyncThunk("SETFAVMOVIE", (movie, thunkAPI) => {
     return axios.post("api/favorite/add", movie).then(res => res.data);
});

export const favMovies = createAsyncThunk('FAVMOVIES', () => {
    return axios.get('/api/favorite/get').then(res => res.data)
})

const favReducer = createReducer(initialState, {
    [favMovies.fulfilled]: (state,action) => {state.favorites = action.payload},
    [setFavMovie]: (state, action) => {state.toggleFav = !state.toggleFav;},
})

export default favReducer