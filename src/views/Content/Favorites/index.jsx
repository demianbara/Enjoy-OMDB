import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card/card";
import s from "./style.module.css";
import MvSearch from "../Movie/mvSearch";
import { favMovies } from "../../../store/favs";
import RemoveFavorite from "../../../components/Card/RemoveFav";

export default function Favorites() {
    const { favorites, toggleFav } = useSelector((store) => store.favorites);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(favMovies());
    }, [dispatch, toggleFav]);

    return (
        <div className="d-flex flex-wrap justify-content-center align-center">
            {favorites.map((movie) => (
                <div class="card m-3" style={{ width: "18rem" }}>
                    <img src={movie.Poster} class="card-img-top" alt="..." />
                    <div class="card-body d-flex justify-content-between">
                        <p class="card-text">{movie.Title}</p>
                        <RemoveFavorite movie={movie} />
                    </div>
                </div>
            ))}
        </div>
    );
}
