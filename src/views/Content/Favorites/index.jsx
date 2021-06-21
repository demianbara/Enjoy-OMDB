import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card/card";
import s from "./style.module.css";
import MvSearch from "../Movie/mvSearch";
import { favMovies } from "../../../store/favs";

export default function Favorites() {
    const { favorites } = useSelector((store) => store.favorites);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(favMovies());
    }, [dispatch]);


    return (
        <div className={s.movieContent}>
            <MvSearch />
            <section className={s.mvFound}>
                {favorites.length > 0 ? (
                    favorites.map((fav) => <Card movie={fav} />)
                ) : (
                    <h3>No Favs Added</h3>
                )}
            </section>
        </div>
    );
}
