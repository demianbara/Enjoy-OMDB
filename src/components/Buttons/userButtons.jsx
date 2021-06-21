import * as React from 'react';
import { Link } from 'react-router-dom';
import s from "./style.module.css";

export default function UserButtons () {
    return (
        <div>
            <Link to="/users/login">
                <button className={s.buttonStyle}>LOGIN</button>
            </Link>
            <Link to="/users/register">
            <button className={s.buttonStyle}>REGISTER</button>
            </Link>
        </div>
    );
}