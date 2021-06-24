import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, userSelect } from "../../../store/users";
import { Link } from "react-router-dom";

export default function Users() {
    const { users } = useSelector((store) => store.users);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUsers());
    }, [dispatch]);

    return (
        <div>
            {!isLogin
                ? "You need to be logged in to see users info"
                : users.map((x) => (
                      <Link
                          className='link-userunique'
                          onClick={() => {
                              dispatch(userSelect(x.id));
                          }}
                          to={`/users/${x.id}`}
                      >
                          <div className="users-name" key={x.id}>
                              {x.email}
                          </div>
                      </Link>
                  ))}
        </div>
    );
}
