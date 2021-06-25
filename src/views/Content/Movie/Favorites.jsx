import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { favMovies } from "../../../store/favs";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";
import RemoveFavorite from "../../../components/Card/RemoveFav";

export default function Favorites() {
    const { favorites, toggleFav } = useSelector((store) => store.favorites);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(favMovies());
    },);

    return (
        <div className="d-flex flex-wrap justify-content-center align-center">
            {favorites.map((movie) => (
                <div class="card" style={{ width: "18rem" }}>
                    <Link
                        to={`/movies/${movie.imdbID}`}
                        onClick={() => {
                            dispatch(movieUnique(movie.imdbID));
                        }}
                    >
                        <img
                            src={movie.Poster}
                            class="card-img-top"
                            alt="..."
                        />
                    </Link>
                    <div class="card-body d-flex justify-content-between">
                        <p class="card-text">{movie.Title}</p>
                        <RemoveFavorite movie={movie} />
                    </div>
                </div>
            ))}
        </div>
    );
}
