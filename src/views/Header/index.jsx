import * as React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import UserButton from "./UserButton";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-light p-3 shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">
                        Enjoy
                    </Link>
                    <Search />
                    <UserButton />
                </div>
            </nav>
        </header>
    );
}
