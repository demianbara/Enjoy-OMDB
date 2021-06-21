import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from "./style.module.css";

export default function UserButtons () {
    const {isLogin} = useSelector(store => store.userAuth)

    return (
        <div>
            {isLogin ? (
                <h2>WELCOME USER</h2>
            ) : (
                <Link to="/users/login">
                    <button className={s.buttonStyle}>LOGIN</button>
                </Link>
            )}
            <Link to="/users/register">
                <button className={s.buttonStyle}>REGISTER</button>
            </Link>
        </div>
    );
}