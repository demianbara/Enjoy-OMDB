import * as React from 'react';
import s from "./style.module.css";

export default function UserButtons () {
    return (
        <div>
            <button className={s.buttonStyle}>LOGIN</button>
            <button className={s.buttonStyle}>REGISTER</button>
        </div>
    );
}