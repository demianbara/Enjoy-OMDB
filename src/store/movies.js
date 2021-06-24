import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = 'c7e9981c'
const initialState = {
    moviesArray: [],
    movieSelected: {},
    contador: 1,
};


export const moviesFound = createAsyncThunk("MOVIESFOUND", (search, thunkAPI) => {
    const { movies: { contador }} = thunkAPI.getState();
    return axios
        .get(
            `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${contador}&type=movie`
        )
        .then((res) => res.data);
});

export const movieUnique = createAsyncThunk('MOVIEUNIQUE', (movieId, thunkAPI) => {
    return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`).then((res) => res.data)
})


const moviesReducer = createReducer(initialState, {
    [moviesFound.fulfilled]: (state, action) => {
        if(!action.payload.Search) action.payload.Search = []
        else state.contador ++
        state.moviesArray = [...state.moviesArray, ...action.payload.Search];
    },
    [movieUnique.fulfilled]: (state, action) => {state.movieSelected = action.payload},
});

export default moviesReducer;





