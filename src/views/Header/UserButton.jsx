import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/userAuth";
import { userSelect } from "../../store/users";
import s from "./style.module.css";

export default function UserButton() {
    const { isLogin, userLog } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    return (
        <div>
            {isLogin ? (
                <Link to="/users/logout">
                    <button
                        onClick={() => {
                            dispatch(logout());
                        }}
                        className="btn btn-outline-success me-2"
                        type="button"
                    >
                        Logout
                    </button>
                </Link>
            ) : (
                <Link to="/users/login">
                    <button
                        className="btn btn-outline-success me-2"
                        type="button"
                    >
                        Login
                    </button>
                </Link>
            )}
            <Link to="/users/register">
                <button
                    className="btn btn-sm btn-outline-secondary"
                    type="button"
                >
                    Register
                </button>
            </Link>
        </div>
    );
}
