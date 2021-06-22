import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/userAuth';
import { userSelect } from '../../store/users';
import s from "./style.module.css";

export default function UserButtons () {
    const { isLogin, userLog } = useSelector(store => store.userAuth)
    const dispatch = useDispatch();
    
    return (
        <div>
            {isLogin ? (
                <div>
                    <h4>
                        Welcome{" "}
                        <Link
                            onClick={() => {
                                dispatch(userSelect(userLog.id));
                            }}
                            to={`/users/${userLog.id}`}
                        >
                            {userLog.email}
                        </Link>
                    </h4>
                    <Link to="/users/logout">
                        <button onClick={() => {dispatch(logout())}} className={s.buttonStyle}>LOGOUT</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/users/login">
                        <button className={s.buttonStyle}>LOGIN</button>
                    </Link>
                    <Link to="/users/register">
                        <button className={s.buttonStyle}>REGISTER</button>
                    </Link>
                </div>
            )}
        </div>
    );
}