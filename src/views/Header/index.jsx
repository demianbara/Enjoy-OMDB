import * as React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import UserButton from "./UserButton";
import c from './style.module.css';

export default function Header() {
    return (
        // <header className='p-2'>
        //     <NavButtons />
        //     <div>
        //         <h1></h1>
        //     </div>
        //     <UserButtons />
        // </header>
        <header>
            <nav className="navbar navbar-light p-3 shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/movies">
                        Home
                    </Link>
                    <Search />
                    <UserButton />
                </div>
            </nav>
        </header>
    );
}
