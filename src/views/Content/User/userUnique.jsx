import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../store/users";
import { Link } from "react-router-dom";
import { movieUnique } from "../../../store/movies";

export default function UsersUnique() {
    const { userSelect } = useSelector((store) => store.users);
    const { isLogin } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch();


    return (
        <div>
            {!isLogin ? (
                "You need to be loggin to see users info"
            ) : (
                <div>
                    <div className='users-name'>{userSelect.email}</div>
                    <div className="d-flex flex-wrap justify-content-center align-center">
                        {userSelect.favoritos &&
                            userSelect.favoritos.map((movie) => (
                                <div class="card" style={{ width: "18rem" }}>
                                    <Link
                                        to={`/movies/${movie.imdbID}`}
                                        onClick={() => {
                                            dispatch(movieUnique(movie.imdbID));
                                        }}
                                    >
                                        <img
                                            src={movie.Poster}
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </Link>
                                    <div class="card-body d-flex justify-content-between">
                                        <p class="card-text">{movie.Title}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
            ;
        </div>
    );
}
