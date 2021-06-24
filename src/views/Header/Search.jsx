import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moviesFound, setSearchValue } from "../../store/movies";

export default function Search() {
    const [inputVal, setInput] = React.useState("");
    const { moviesArray } = useSelector((store) => store.movies);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value);
    };

    const handleClick = () => {
        dispatch(moviesFound(inputVal))
        dispatch(setSearchValue(inputVal));
    };

    const handleKeyDown = (e) => {
        console.log(e.keyCode)
    }

    return (
        <form className="d-flex w-50">
            <input
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <Link to="/movies">
                <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={handleClick}
                >
                    Search
                </button>
            </Link>
        </form>
    );
}
