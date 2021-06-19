import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";

export default function MvFound() {
    const {moviesArray, movie} = useSelector((store) => store.movies);
    const dispatch = useDispatch()


    return (
        <section className={s.mvFound}>
            {moviesArray.length > 0 &&
                moviesArray.map((movie) => (
                        // <div className="card cardStyle">
                        //     <img
                        //         className="card-img-top"
                        //         src={movie.Poster}
                        //         alt=""
                        //     />
                        //     <div className="card-body">
                        //         <h5 className="card-title">{movie.Title}</h5>
                        //         <p className="card-text">{movie.Plot}</p>
                        //         <Link
                        //             onClick={() => {
                        //                 dispatch(movieUnique(movie.imdbID));
                        //             }}
                        //             key={movie.imdbID}
                        //             className={s.linkmovie}
                        //             to={`/movies/${movie.imdbID}`}
                        //         >
                        //             Go somewhere
                        //         </Link>
                        //     </div>
                        // </div>
                    

                    <Link
                        onClick={() => {dispatch(movieUnique(movie.imdbID))}}
                        key={movie.imdbID}
                        className={s.linkmovie}
                        to={`/movies/${movie.imdbID}`}
                    >
                        <h4 key={movie.imdbID}>{movie.Title}</h4>
                        <hr />
                    </Link>
                ))}
        </section>
    );
}
