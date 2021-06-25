import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";
import Favorite from "../../../components/Card/Fav";
import Footer from "../../../components/Footer";

export default function MvFound() {
    const { moviesArray } = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center align-center">
                {moviesArray.map((movie) => (
                    <div key={movie.imdbID} className="card" style={{ width: "18rem" }}>
                        <Link
                            to={`/movies/${movie.imdbID}`}
                            onClick={() => {
                                dispatch(movieUnique(movie.imdbID));
                            }}
                        >
                            <img
                                src={movie.Poster}
                                className="card-img-top"
                                alt="..."
                            />
                        </Link>
                        <div className="card-body d-flex justify-content-between">
                            <p className="card-text">{movie.Title}</p>
                            <Favorite movie={movie} />
                        </div>
                    </div>
                ))}
            </div>
            {moviesArray.length > 0 ?
            <div className="d-flex justify-content-center">
                <Footer />
            </div>    
            : ""}
      
        </div>
    );
}

