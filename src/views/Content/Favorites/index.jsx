import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card/card";
import s from "./style.module.css";
import MvSearch from "../Movie/mvSearch";
import { favMovies } from "../../../store/favs";

export default function Favorites() {
    const { favorites, toggleFav } = useSelector((store) => store.favorites);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(favMovies());
    }, [dispatch, toggleFav]);


    return (
        <div className={s.movieContent}>
            <MvSearch />
            {!isLogin ? (
                <h3>You need to be logged in to see your favs</h3>
            ) : (
                <section className={s.mvFound}>
                    {favorites.length > 0 ? (
                        favorites.map((fav) => <Card movie={fav} />)
                    ) : (
                        <h3>No Favs Added</h3>
                    )}
                </section>
            )}
        </div>
    );
}
