import { message } from "antd";
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
                <div
                    class="btn-group"
                    role="group"
                    aria-label="Button group with nested dropdown"
                >
                    <Link to="/favs">
                        <button type="button" class="btn btn-outline">
                            Favs
                        </button>
                    </Link>
                    <Link to="/users">
                        <button type="button" class="btn btn-outline">
                            Users
                        </button>
                    </Link>

                    <div class="btn-group" role="group">
                        <button
                            id="btnGroupDrop1"
                            type="button"
                            class="btn btn-outline dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {userLog.email}
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                        >
                            <Link to="/users/logout" class="dropdown-item">
                                <li>My Profile</li>
                            </Link>
                            <Link
                                to="/users/logout"
                                class="dropdown-item"
                                onClick={() => {
                                    dispatch(logout());
                                }}
                            >
                                <li>Logout</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                    <Link to="/users/login">
                        <button
                            className="btn btn-outline me-2 user-auth"
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
            )}
        </div>
    );
}
    //     {isLogin ? (
    //         <Link to="/users/logout">
    //             <button
    //                 onClick={() => {
    //                     dispatch(logout());
    //                 }}
    //                 className="btn btn-outline me-2"
    //                 type="button"
    //             >
    //                 Logout
    //             </button>
    //         </Link>
    //     ) : (
    //         <Link to="/users/login">
    //             <button
    //                 className="btn btn-outline me-2"
    //                 type="button"
    //             >
    //                 Login
    //             </button>
    //         </Link>
    //     )}
    //     <Link to="/users/register">
    //         <button
    //             className="btn btn-sm btn-outline-secondary"
    //             type="button"
    //         >
    //             Register
    //         </button>
    //     </Link>
    // </div>

