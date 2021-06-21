import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, userSelect } from '../../../store/users';
import { Link } from 'react-router-dom';

export default function Users () {
    const { users } = useSelector(store => store.users)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUsers())
    }, [dispatch])
    


    return (
        <div>
            {users.map((x) => (
                <Link onClick={() => { dispatch(userSelect(x))}} to={`/users/${x.id}`}>
                    <h2 key={x.id}>{x.email}</h2>
                </Link>
            ))}
        </div>
    );
}