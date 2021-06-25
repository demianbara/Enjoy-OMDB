import * as React from "react";
import { Link } from "react-router-dom";


export default function AuthButtons () {
    return (
        <div>
            <Link to="/users/login">
                <button
                    className="btn btn-outline-secondary user-auth"
                    type="button"
                >
                    Login
                </button>
            </Link>
            <Link to="/users/register">
                <button
                    className="btn btn-outline-secondary user-auth"
                    type="button"
                >
                    Register
                </button>
            </Link>
        </div>
    );
}