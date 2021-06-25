import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { favMovies } from "../../../store/favs";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";
import RemoveFavorite from "../../../components/Card/RemoveFav";

export default function Favorites() {
    const { favorites, toggleFav } = useSelector((store) => store.favorites);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(favMovies());
    }, [dispatch, toggleFav]);

    return (
        <div className="d-flex flex-wrap justify-content-center align-center">
            {favorites.map((movie) => (
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
                        <RemoveFavorite movie={movie} />
                    </div>
                </div>
            ))}
        </div>
    );
}
