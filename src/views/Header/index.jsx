import * as React from 'react';
import NavButtons from '../../components/Buttons/navButtons';
import UserButtons from '../../components/Buttons/userButtons';

import s from "./style.module.css";

export default function Header () {

    return (
        <header>
            <NavButtons /> 
            <div>
                <h1></h1>
            </div>
            <UserButtons />
        </header>
    );
}