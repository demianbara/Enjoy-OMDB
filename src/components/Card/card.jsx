import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { movieUnique } from "../../store/movies";
import Favorite from "./Fav"


export default function Card ({movie}) {
    const dispatch = useDispatch();
   
    return  ( <div
                        className="card"
                        style={{ width: "18rem", backgroundColor: "#892B64" }}
                    >
                        <img
                            className="card-img-top"
                            src={movie.Poster}
                            alt=""
                        />
                        <div className="card-body">
                            <Link
                                onClick={() => {
                                    dispatch(movieUnique(movie.imdbID));
                                }}
                                key={movie.imdbID}
                                className={s.linkmovie}
                                to={`/movies/${movie.imdbID}`}
                            >
                                <h5 className="card-title">{movie.Title}</h5>
                            </Link>
                            <Favorite movie={movie}/>
                        </div>
                    </div>
                )
}