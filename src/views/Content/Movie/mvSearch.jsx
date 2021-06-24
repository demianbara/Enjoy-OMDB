import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moviesFound, setSearchValue } from '../../../store/movies';
import s from "./style.module.css";

export default function MvSearch() {
    const [inputVal, setInput] = React.useState("")
    const { moviesArray } = useSelector((store) => store.movies);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let value = e.target.value
        setInput(value)
    }

    const handleClick = () => {
        dispatch(moviesFound(inputVal))
        dispatch(setSearchValue(inputVal))
    }
 

    return (
        <div className={s.mvSearch}>
            <label className={s.searchLabel} htmlFor="">
                SEARCH HERE YOUR FAVORITE MOVIE
            </label>
            <div className={s.search}>
                <input
                    className={s.searchInput}
                    onChange={handleChange}
                    type="text"
                />
                <Link to="/movies">
                    <button className={s.searchButton} onClick={handleClick}>
                        SEARCH
                    </button>
                </Link>
            </div>
        </div>
    );
}