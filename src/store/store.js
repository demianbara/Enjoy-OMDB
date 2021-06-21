import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import favReducer from "./favs";
import moviesReducer from "./movies";
import userAuthReducer from "./userAuth";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: { movies: moviesReducer,
               favorites: favReducer,
               userAuth: userAuthReducer},
});

export default store;