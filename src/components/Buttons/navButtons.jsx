import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.module.css';

export default function NavButtons () {
    return (
        <div>
            <button>HOME</button>
            <button>USERS</button>
            <Link to='/movies'>
            <button>MOVIES</button>
            </Link>
        </div>
    );
}