import {
    createAction,
    createAsyncThunk,
    createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    favorites: [],
    toggleFav: false,
};

export const setFavMovie = createAsyncThunk(
    "SETFAVMOVIE",
    (movie, thunkAPI) => {
        return axios.post("api/favorite/add", movie).then((res) => res.data);
    }
);

export const deleteFavMovie = createAsyncThunk(
    "DELETEFAVMOVIE",
    (movieimdbID, thunkAPI) => {
        return axios
            .delete(`api/favorite/remove?id=${movieimdbID}`)
            .then((res) => res.data);
    }
);

export const favMovies = createAsyncThunk("FAVMOVIES", (data, thunkAPI) => {
    const { userAuth } = thunkAPI.getState()
    if(userAuth.isLogin) return axios.get("/api/favorite/get").then((res) => res.data);
    else return [];
});


const favReducer = createReducer(initialState, {
    [favMovies.fulfilled]: (state, action) => {
        state.favorites = action.payload;
    },
    [setFavMovie.fulfilled]: (state, action) => {
        state.toggleFav = !state.toggleFav;
    },
    [deleteFavMovie.fulfilled]: (state, action) => {
        state.toggleFav = !state.toggleFav;
    },
});

export default favReducer;
