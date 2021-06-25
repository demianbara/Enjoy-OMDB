import { message } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../store/userAuth';

export default function LoggedButtons () {
    const { userLog } = useSelector((store) => store.userAuth);
    const history = useHistory()
    const dispatch = useDispatch();

    return (
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
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a  href
                            onClick={() => {
                                dispatch(logout());
                                history.push("/");
                                message.success("A very fond farewell my dear");
                            }}
                            className="dropdown-item"
                        >
                        <li>Logout</li>
                        </a>
                </ul>
            </div>
        </div>
    );
}