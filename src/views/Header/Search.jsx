import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { moviesFound, setSearchValue } from "../../store/movies";
import { BsSearch } from 'react-icons/bs'


export default function Search() {
    const [inputVal, setInput] = React.useState("");
    const history = useHistory()
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value);
    };

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            dispatch(setSearchValue(inputVal));
            dispatch(moviesFound(inputVal));
            e.preventDefault();
            history.push('/movies')
        }
    }

    return (
        <form className="d-flex w-50 ml-5">
                <input
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    className="form-control search-movies"
                    type="text"
                    placeholder="Search Here"
                    aria-label="Search"
                />
                <BsSearch
                    className="BsSearch"
                    style={{ cursor: "pointer" }}
                />
        </form>
    );
}

