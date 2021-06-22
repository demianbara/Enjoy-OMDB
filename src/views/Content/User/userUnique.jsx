import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../store/users";

export default function UsersUnique() {
    const { userSelect } = useSelector((store) => store.users);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();
    
    return (
        <div>
             {!isLogin ? 'You need to be loggin to see users info'
             : <h1>{userSelect.email}</h1>
             }
        </div>
    );
}
