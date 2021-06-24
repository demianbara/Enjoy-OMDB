import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, switcher } from "../../store/userAuth";


export default function UserButton() {
    const { isLogin, userLog } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    return (
        <div>
            {isLogin ? (
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Button group with nested dropdown"
                >
                    <Link to="/favs">
                        <button type="button" className="btn btn-outline">
                            Favs
                        </button>
                    </Link>
                    <Link to="/users">
                        <button type="button" className="btn btn-outline">
                            Users
                        </button>
                    </Link>

                    <div className="btn-group" role="group">
                        <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-outline dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {userLog.email}
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                        >
                            <Link to={`/users/${userLog.id}`} className="dropdown-item">
                                <li>My Profile</li>
                            </Link>
                            <Link
                                to="/users/logout"
                                className="dropdown-item"
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

