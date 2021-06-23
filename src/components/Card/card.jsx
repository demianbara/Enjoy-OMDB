import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { movieUnique } from "../../store/movies";
import Favorite from "./Fav"


export default function Card ({movie}) {
    const dispatch = useDispatch();
   
    return (
        <div
            className="card mb-3"
            style={{ width: "540px", backgroundColor: "#892B64" }}
        >
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        className="img-fluid rounded-start"
                        src={movie.Poster}
                        alt=""
                    />
                </div>
                <div class="col-md-8">
                    <div className="card-body">
                        <h5 class="card-title">{movie.Title}</h5>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <Link
                            onClick={() => {
                                dispatch(movieUnique(movie.imdbID));
                            }}
                            key={movie.imdbID}
                            className={s.linkmovie}
                            to={`/movies/${movie.imdbID}`}
                        >
                        </Link>
                        <Favorite movie={movie} />
                    </div>
                </div>
            </div>
        </div>
    );
}