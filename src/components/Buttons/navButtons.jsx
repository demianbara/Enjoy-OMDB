import * as React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function NavButtons() {
    return (
        <div>
            <Link to="/">
                <button className={s.buttonStyle}>HOME</button>
            </Link>
            <Link to="/users">
                <button className={s.buttonStyle}>USERS</button>
            </Link>
            <Link to="/movies">
                <button className={s.buttonStyle}>MOVIES</button>
            </Link>
            <Link to="/favs">
                <button className={s.buttonStyle}>FAVS</button>
            </Link>
        </div>
    );
}
