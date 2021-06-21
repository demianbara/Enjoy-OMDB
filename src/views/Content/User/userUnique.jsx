import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../store/users";

export default function UsersUnique() {
    const { userSelect } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{userSelect.email}</h1>
        </div>
    );
}
