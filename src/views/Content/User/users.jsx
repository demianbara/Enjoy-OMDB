import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, userSelect } from '../../../store/users';
import { Link } from 'react-router-dom';

export default function Users () {
    const { users } = useSelector(store => store.users)
    const { isLogin } = useSelector(store => store.userAuth)
    const dispatch = useDispatch();
    

    React.useEffect(() => {
        dispatch(setUsers())
    }, [dispatch])
    


    return (
        <div>
            {!isLogin ? 'You need to be loggin to see users info'
            :
            users.map((x) => (
                <Link onClick={() => { dispatch(userSelect(x.id))}} to={`/users/${x.id}`}>
                    <h2 key={x.id}>{x.email}</h2>
                </Link>
            ))
            }
        </div>
    );
}