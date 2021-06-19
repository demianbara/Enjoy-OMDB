import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = 'c7e9981c'
const initialState = {
    moviesArray: [],
    movieSelected: {}
};

export const moviesFound = createAsyncThunk(
    "MOVIESFOUND",
    (search, thunkAPI) => {
        return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`).then((res) => res.data);
    }
);

export const movieUnique = createAsyncThunk('MOVIEUNIQUE', (movieId, thunkAPI) => {
    return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`).then((res) => res.data)
})

const moviesReducer = createReducer(initialState, {
    [moviesFound.fulfilled]: (state, action) => {state.moviesArray = action.payload.Search},
    [movieUnique.fulfilled]: (state, action) => {state.movieSelected = action.payload}
});

export default moviesReducer;
