import * as React from "react";
import { Link } from "react-router-dom";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { moviesFound } from "../../store/movies";

export default function Footer() {
    const { search } = useSelector(store => store.movies)
    const dispatch = useDispatch()


    const handleClick = () => {
        dispatch(moviesFound(search));
    };

    return (
        <button className="btn-footer" onClick={handleClick}>
            <BsChevronDoubleDown
                className="BsChevronDoubleDown"
                style={{ cursor: "pointer" }}
            />
        </button>
    );
}
