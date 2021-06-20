import * as React from "react";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/card";
import s from './style.module.css'
import MvSearch from "../Movie/mvSearch";


export default function Favorites () {
    const favArray = useSelector(store => store.favorites)

    return (
        <div className={s.movieContent}>
            <MvSearch />
            <section className={s.mvFound}>
                {favArray.length > 0 ? (
                    favArray.map((fav) => <Card movie={fav} />)
                ) : (
                    <h3>No Favs Added</h3>
                )}
            </section>
        </div>
    );
}