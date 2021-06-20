import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";
import Favorite from "../../../components/Card/Fav";
import Card from "../../../components/Card/card";

export default function MvFound() {
    const { moviesArray } = useSelector((store) => store.movies);
    // const { fav } = useSelector((store) => store.favorites);
    const dispatch = useDispatch();

    return (
        <section className={s.mvFound}>
            {moviesArray.length > 0 ? (
                moviesArray.map((movie) => (
                   <Card movie={movie}/>
                ))
            ) : (
                <h2>No Movie Found</h2>
            )}
        </section>
    );
}

// <Link
//     onClick={() => {dispatch(movieUnique(movie.imdbID))}}
//     key={movie.imdbID}
//     className={s.linkmovie}
//     to={`/movies/${movie.imdbID}`}
// >
//     <h4 key={movie.imdbID}>{movie.Title}</h4>
//     <hr />
// </Link>
